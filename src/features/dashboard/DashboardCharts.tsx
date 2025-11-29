"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";

const userGrowthData = [
  { name: "Jan", users: 2000 },
  { name: "Feb", users: 1500 },
  { name: "Mar", users: 3000 },
  { name: "Apr", users: 1800 },
  { name: "May", users: 2200 },
  { name: "Jun", users: 2100 },
];

const tripTrendsData = [
  { name: "Beach", value: 50 },
  { name: "Cultural", value: 10 },
  { name: "City", value: 25 },
  { name: "Nature", value: 15 },
  { name: "Culinary", value: 40 },
  { name: "Relax", value: 10 },
  { name: "Adventure", value: 30 },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* User Growth */}
      <Card className="rounded-2xl border border-gray-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#1F1F36] px-8 py-4 border-b border-[#E5E5EF]">
            User Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#2563eb"
                  strokeWidth={2}
                  fill="url(#colorUsers)"
                  dot={{ r: 4, fill: "#2563eb", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Trip Trends */}
      <Card className="rounded-2xl border border-gray-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#1F1F36] px-8 py-4 border-b border-[#E5E5EF]">
            Trip Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tripTrendsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "#111827",
                    color: "white",
                    borderRadius: "6px",
                    fontSize: "12px",
                  }}
                  formatter={(value) => [`${value}%`, ""]}
                />
                <Bar
                  dataKey="value"
                  radius={[8, 8, 0, 0]}
                  fill="#2563eb"
                  opacity={0.8}
                  barSize={25}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
