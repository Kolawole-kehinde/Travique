"use client";

import { DataTable } from "@/components/DataTable";
import Image from "next/image";
import { Trash2 } from "lucide-react";

const users = [
  {
    id: 1,
    name: "James Anderson",
    email: "olivia@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 12,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Michael Johnson",
    email: "phoenix@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 21,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 4,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 5,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 6,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 7,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 8,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 9,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 10,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 11,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 12,
    name: "David Brown",
    email: "lana@jsmastery.pro",
    joined: "Jan 6, 2022",
    itinerary: 15,
    status: "User",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

export default function DashboardUserTable() {
  const columns = [
    {
      key: "name",
      label: "NAME",
      render: (user: any) => (
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
      render: (user: any) => (
        <span
          className={`px-3 py-1 rounded-md text-xs font-medium ${
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
      key: "action",
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
      data={users}
      columns={columns}
      currentPage={1}
      totalPages={6}
      onPageChange={(page) => console.log("Page:", page)}
    />
  );
}
