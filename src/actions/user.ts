"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getUsers(query = "", currentPage = 1, pageSize = 10) {
  try {
    const skip = (currentPage - 1) * pageSize;
    const users = await prisma.user.findMany({
      where: {
        OR: [
          { email: { contains: query, mode: 'insensitive' } },
          { firstName: { contains: query, mode: 'insensitive' } },
          { lastName: { contains: query, mode: 'insensitive' } },
          { username: { contains: query, mode: 'insensitive' } },
        ],
      },
      skip,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const total = await prisma.user.count({
      where: {
        OR: [
          { email: { contains: query, mode: 'insensitive' } },
          { firstName: { contains: query, mode: 'insensitive' } },
          { lastName: { contains: query, mode: 'insensitive' } },
          { username: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    return {
      users,
      total,
      totalPages: Math.ceil(total / pageSize),
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function createUser(data: {
  email: string;
  firstName: string;
  lastName: string;
  username?: string;
  phoneNumber?: string;
  role?: "OWNER" | "MANAGER" | "COACH" | "MEMBER";
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
}) {
  try {
    const user = await prisma.user.create({
      data: {
        ...data,
        username: data.username || `user_${Date.now()}`,
        password: "", // Password handled by Clerk
        role: data.role || "MEMBER",
        status: data.status || "ACTIVE",
      },
    });

    revalidatePath('/admin/dashboard');
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
}

export async function updateUser(
  id: string,
  data: {
    email?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    phoneNumber?: string;
    role?: "OWNER" | "MANAGER" | "COACH" | "MEMBER";
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  }
) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });

    revalidatePath('/admin/dashboard');
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath('/admin/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user');
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
} 