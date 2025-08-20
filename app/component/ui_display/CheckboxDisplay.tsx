import React from 'react'
import { Checkbox } from '../ui/checkbox'

export default function CheckboxDisplay() {
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Checkbox</h1>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />

    </div>
        </div>  )
}
