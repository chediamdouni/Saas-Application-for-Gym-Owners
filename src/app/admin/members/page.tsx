import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";
import { AddMemberDialog } from "./add-member-dialog";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Members</h1>
          <p className="text-sm text-gray-500">
            <span className="font-bold">{users.length}</span> members
          </p>
        </div>
        <AddMemberDialog />
      </div>
      <Separator className="mt-4" />
      <div>
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}
