"use client";

import { DataTable, Column } from "@/src/components/DataTable";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { users } from "@/src/contants/users";

export interface User {
  id: number;
  name: string;
  email: string;
  joined: string;
  itinerary: number;
  status: "User" | "Admin";
  avatar: string;
}

export default function DashboardUserTable() {
  const columns: Column<User>[] = [
    {
      key: "name",
      label: "NAME",
      render: (user) => (
        <div className="flex items-center gap-3">
          <Image
            src={user.avatar}
            alt={user.name}
            width={36}
            height={36}
            className="rounded-full"
            unoptimized
          />
          <span className="font-medium">{user.name}</span>
        </div>
      ),
    },
    { key: "email", label: "EMAIL ADDRESS" },
    { key: "joined", label: "DATE JOINED" },
    { key: "itinerary", label: "ITINERARY CREATED" },
    {
      key: "status",
      label: "STATUS",
      render: (user) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            user.status === "Admin"
              ? "bg-blue-100 text-[#256FF1]"
              : "bg-green-100 text-green-600"
          }`}
        >
          {user.status}
        </span>
      ),
    },
    {
      key: "avatar", // dummy column key (must match User keys)
      label: "",
      render: () => (
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Trash2 className="h-4 w-4 text-gray-500" />
        </button>
      ),
    },
  ];

  return (
    <DataTable
      title="Users Table"
      data={users as User[]}
      columns={columns}
      currentPage={1}
      totalPages={6}
      onPageChange={(page) => console.log("Page:", page)}
    />
  );
}
