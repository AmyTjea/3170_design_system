"use client"
import React from 'react'

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "../ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
        color: "var(--chart-5)",
  },
  mobile: {
    label: "Mobile",
        color: "var(--chart-3)",
  },
} satisfies ChartConfig


export default function ChartDisplay() {
    return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Chart</h1>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)"   radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)"   radius={4} />
      </BarChart>
    </ChartContainer>
        </div>
        )

}
