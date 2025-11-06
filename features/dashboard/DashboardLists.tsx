"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const users = [
  {
    name: "James Anderson",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    itinerary: 12,
  },
  {
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    itinerary: 21,
  },
  {
    name: "David Brown",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    itinerary: 15,
  },
  {
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    itinerary: 26,
  },
];

const trips = [
  {
    name: "Thornridge Cir. Shiloh",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=100&fit=crop",
    dates: "Jun 02 – Jun 12",
  },
  {
    name: "Roraima Tepui",
    image:
      "https://images.unsplash.com/photo-1533055640609-24b498cdf77b?w=100&h=100&fit=crop",
    dates: "Jun 07 – Jun 09",
  },
  {
    name: "Socotra Island",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop",
    dates: "Jun 10 – Jun 23",
  },
  {
    name: "San Lake Baikal",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop",
    dates: "Jun 12 – Jun 26",
  },
];

export default function DashboardLists() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Latest user signups */}
      <Card className="rounded-2xl shadow-sm border border-gray-100 p-6">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-[#2E2C48]">
            Latest user signups
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 text-sm font-medium text-gray-500 border-b pb-2 mb-3">
            <p>Name</p>
            <p className="text-right">Itinerary Created</p>
          </div>
          <div className="space-y-2">
            {users.map((user, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                  index % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <span className="font-medium text-[#1F1F36] text-sm">
                    {user.name}
                  </span>
                </div>
                <span className="text-[#1F1F36] text-sm font-semibold">
                  {user.itinerary}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Latest trip bookings */}
      <Card className="rounded-2xl shadow-sm border border-gray-100 p-6">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-[#2E2C48]">
            Latest trip bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 text-sm font-medium text-gray-500 border-b pb-2 mb-3">
            <p>Booking</p>
            <p className="text-right">Travel Dates</p>
          </div>
          <div className="space-y-2">
            {trips.map((trip, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                  index % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={trip.image}
                    alt={trip.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <span className="font-medium text-[#1F1F36] text-sm">
                    {trip.name}
                  </span>
                </div>
                <span className="text-[#1F1F36] text-sm font-medium">
                  {trip.dates}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
