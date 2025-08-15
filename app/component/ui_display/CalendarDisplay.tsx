import React from 'react'
import { Calendar } from '../ui/calendar'


export default function CalendarDisplay() {
      const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
            <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-foreground mb-8">Calender</h1>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />

            <p>fix  in dark mode, text too dark</p>

            </div>)
}
