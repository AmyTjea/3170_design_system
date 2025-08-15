import React from 'react'
import { Label } from '../ui/label'

export default function LabelDisplay() {
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Label</h1>
        <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>  )
}
