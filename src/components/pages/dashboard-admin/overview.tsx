"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    revenue: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 3000) + 500,
  },
  {
    name: "Feb",
    revenue: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 3000) + 500,
  },
  {
    name: "Mar",
    revenue: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 3000) + 500,
  },
  {
    name: "Apr",
    revenue: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 3000) + 500,
  },
  {
    name: "May",
    revenue: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 3000) + 500,
  },
  {
    name: "Jun",
    revenue: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 3000) + 500,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8b5cf6"
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="#fbbf24"
          fillOpacity={1}
          fill="url(#colorExpenses)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

