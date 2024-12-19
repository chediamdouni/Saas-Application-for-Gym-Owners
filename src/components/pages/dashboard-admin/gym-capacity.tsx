"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { hour: "6AM", capacity: 20 },
  { hour: "8AM", capacity: 40 },
  { hour: "10AM", capacity: 65 },
  { hour: "12PM", capacity: 85 },
  { hour: "2PM", capacity: 75 },
  { hour: "4PM", capacity: 90 },
  { hour: "6PM", capacity: 95 },
  { hour: "8PM", capacity: 70 },
  { hour: "10PM", capacity: 45 },
]

export function GymCapacity() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="hour"
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
          tickFormatter={(value) => `${value}%`}
        />
        <Bar
          dataKey="capacity"
          fill="#8b5cf6"
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

