import React, { useState } from 'react'
import { DateRangePicker } from '../ui/datepicker'
import { DateRange } from 'react-day-picker'

export default function DatepickerDisplay() {
    const [date,setDate] =useState<DateRange | undefined>()
  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-8">Datepicker</h1>
      <DateRangePicker setExternalDate={(value) => { setDate(value) } } value={date} />
 
 <p>TODO: Fix the colouring of the popover for dark mode</p>
    </div> 
     )
}
