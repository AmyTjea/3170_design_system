import React from 'react'
import { Toggle } from '../ui/toggle'
import { Bold } from 'lucide-react'

export default function ToggleDisplay() {
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Toggle</h1>
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle> 
        </div>  )
}
