"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  createdAt: Date;
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "firstName",
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/50 transition-colors text-xs"
        >
          FirstName
          <ChevronsUpDown
            className={`h-2 w-2 transition-transform duration-200 ${
              column.getIsSorted() === "asc"
                ? "rotate-180"
                : column.getIsSorted() === "desc"
                ? "rotate-0"
                : ""
            }`}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-xs">{row.getValue("firstName")}</div>;
    },
  },
  {
    id: "lastName",
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/50 transition-colors text-xs"
        >
          LastName
          <ChevronsUpDown
            className={`h-2 w-2 transition-transform duration-200 ${
              column.getIsSorted() === "asc"
                ? "rotate-180"
                : column.getIsSorted() === "desc"
                ? "rotate-0"
                : ""
            }`}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-xs">{row.getValue("lastName")}</div>;
    },
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/50 transition-colors text-xs "
        >
          Email
          <ChevronsUpDown
            className={`h-2 w-2 transition-transform duration-200 ${
              column.getIsSorted() === "asc"
                ? "rotate-180"
                : column.getIsSorted() === "desc"
                ? "rotate-0"
                : ""
            }`}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex text-xs rounded-lg border-2 w-fit p-1 text-customer-blue">
          {row.getValue("email")}
        </div>
      );
    },
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-muted/50 transition-colors text-xs"
      >
        Date Created
        <ChevronsUpDown
          className={`h-2 w-2 transition-transform duration-200 ${
            column.getIsSorted() === "asc"
              ? "rotate-180"
              : column.getIsSorted() === "desc"
              ? "rotate-0"
              : ""
          }`}
        />
      </Button>
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date;

      const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      return <div className="text-xs">{formattedDate}</div>;
    },
  },
  {
    id: "role",
    accessorKey: "role",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-muted/50 transition-colors text-xs"
      >
        Role
        <ChevronsUpDown
          className={`h-2 w-2 transition-transform duration-200 ${
            column.getIsSorted() === "asc"
              ? "rotate-180"
              : column.getIsSorted() === "desc"
              ? "rotate-0"
              : ""
          }`}
        />
      </Button>
    ),
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return <div className="text-xs">{role}</div>;
    },
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-muted/50 transition-colors text-xs"
      >
        Status
        <ChevronsUpDown
          className={`h-2 w-2 transition-transform duration-200 ${
            column.getIsSorted() === "asc"
              ? "rotate-180"
              : column.getIsSorted() === "desc"
              ? "rotate-0"
              : ""
          }`}
        />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className="flex items-center justify-center rounded-full p-2 w-fit bg-green-500 text-white text-xs lowercase">
          {status}
        </div>
      );
    },
  },

  {
    id: "updatedAt",
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-muted/50 transition-colors text-xs"
      >
        Last Updated
        <ChevronsUpDown
          className={`h-2 w-2 transition-transform duration-200 ${
            column.getIsSorted() === "asc"
              ? "rotate-180"
              : column.getIsSorted() === "desc"
              ? "rotate-0"
              : ""
          }`}
        />
      </Button>
    ),
    cell: ({ row }) => {
      const updatedAt = row.getValue("updatedAt") as Date;

      return (
        <div className="text-xs ">
          {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user</DropdownMenuItem>
            <DropdownMenuItem>View user details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
