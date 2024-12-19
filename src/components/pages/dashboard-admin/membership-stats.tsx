"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Monthly", value: 40 },
  { name: "Quarterly", value: 30 },
  { name: "Annual", value: 20 },
  { name: "Day Pass", value: 10 },
]

const COLORS = ['#8b5cf6', '#fbbf24', '#a78bfa', '#fcd34d']

export function MembershipStats() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
              strokeWidth={2}
              stroke="#fff"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

