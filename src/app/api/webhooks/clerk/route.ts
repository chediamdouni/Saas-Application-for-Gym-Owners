import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");

  let evt: WebhookEvent;

  // Verify the payload
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === "user.created") {
    const {
      id,
      email_addresses,
      first_name,
      last_name,
      phone_numbers,
      image_url,
      username,
    } = evt.data;
    console.log(evt.data);
    const user = await prisma.user.create({
      data: {
        id: id,
        username: username || `user_${id}`, // Fallback username
        email: email_addresses[0].email_address,
        firstName: first_name || "N/A",
        lastName: last_name || "N/A",
        phoneNumber: phone_numbers?.[0]?.phone_number || null,
        profileImage: image_url || null,
        password: "", // Add empty password since auth is handled by Clerk
        role: "OWNER",
        status: "ACTIVE",
      },
    });
    console.log(user);
    return new Response("User created", { status: 201 });
  }

  return new Response("Webhook received", { status: 200 });
}
