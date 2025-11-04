"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const userData = [
  { value: 1000 },
  { value: 2000 },
  { value: 4000 },
  { value: 3500 },
  { value: 4500 },
  { value: 6000 },
];

const tripData = [
  { value: 6000 },
  { value: 4500 },
  { value: 4500 },
  { value: 3500 },
  { value: 3000 },
  { value: 2000 },
];

const activeData = [
  { value: 100 },
  { value: 200 },
  { value: 150 },
  { value: 300 },
  { value: 250 },
  { value: 400 },
];

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Users",
      value: "12,450",
      percent: "+12%",
      trend: "up",
      color: "#16a34a",
      data: userData,
    },
    {
      title: "Total Trips",
      value: "3,210",
      percent: "-2%",
      trend: "down",
      color: "#dc2626",
      data: tripData,
    },
    {
      title: "Active Users Today",
      value: "520",
      percent: "+2%",
      trend: "up",
      color: "#16a34a",
      data: activeData,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="w-full shadow-sm flex flex-col rounded-[20px] p-4"
        >
          <CardHeader className="pb-2">
            <CardTitle className="font-medium text-base leading-6 text-[#2E2C48]">
              {item.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            {/* Align bottom */}
            <div className="flex justify-between items-end">
              {/* Left Section */}
              <div className="flex flex-col gap-3">
                <div className="font-semibold text-4xl text-[#1F1F36]">
                  {item.value}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {item.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={
                      item.trend === "up"
                        ? "text-green-500 font-medium"
                        : "text-red-500 font-medium"
                    }
                  >
                    {item.percent}
                  </span>
                  <span className="text-sm text-[#7F7E83] font-medium leading-5">vs last month</span>
                </div>
              </div>

              {/* Right Section (Chart) */}
              <div className="w-[130px] lg:w-[170px] h-[50px] -mb-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={item.data}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={item.color}
                      fill={item.color}
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default DashboardStats;
