"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const trips = [
    {
        id: 1,
        title: "Thornridge Cir. Shiloh",
        location: "St George’s Ln Singapore",
        price: "$300",
        image: "/images/trip1.png",
        tags: ["Mountains", "City"],
    },
    {
        id: 2,
        title: "Roraima Tepui",
        location: "Canaima Park, Venezuela",
        price: "$790",
        image: "/images/trip2.png",
        tags: ["Solo travel", "Budget"],
    },
    {
        id: 3,
        title: "Socotra Island",
        location: "Yemen",
        price: "$870",
        image: "/images/trip3.png",
        tags: ["Luxury", "Beach"],
    },
    {
        id: 4,
        title: "San Lake Baikal",
        location: "Siberia, Russia",
        price: "$604",
        image: "/images/trip 4.png",
        tags: ["Sports", "Adventurous"],
    },
];

// Define tag color map
const tagColors: Record<string, string> = {
    Mountains: "bg-emerald-100 text-emerald-700",
    City: "bg-blue-100 text-blue-700",
    "Solo travel": "bg-indigo-100 text-indigo-700",
    Budget: "bg-yellow-100 text-yellow-700",
    Luxury: "bg-pink-100 text-pink-700",
    Beach: "bg-sky-100 text-sky-700",
    Sports: "bg-orange-100 text-orange-700",
    Adventurous: "bg-rose-100 text-rose-700",
};

export default function TripsSection() {
    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#1F1F36]">Trips</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trips.map((trip) => (
                    <Card
                        key={trip.id}
                        className="w-full lg:w-[256px] rounded-[20px] overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        {/* Image section */}
                        <div className="relative h-[180px] w-full mt-3 overflow-hidden rounded-2xl">
                            <Image
                                src={trip.image}
                                alt={trip.title}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute top-3 right-3 bg-white text-[#1F1F36] text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                                {trip.price}
                            </div>
                        </div>

                        <CardHeader className="pt-4 pb-1">
                            <h3 className="text-base font-semibold text-[#1F1F36]">
                                {trip.title}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-[#7F7E83] mt-1">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span>{trip.location}</span>
                            </div>
                        </CardHeader>

                        <CardContent className="flex flex-wrap gap-2 pt-1 pb-4">
                            {trip.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    className={clsx(
                                        "rounded-full text-xs font-medium px-3 py-1 border-0",
                                        tagColors[tag] || "bg-gray-100 text-gray-700"
                                    )}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
