import React from 'react'
import { Input } from '../ui/input'

export default function InputDisplay() {
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Input</h1>

<Input type="email" placeholder="Email" /> 

        </div>  )
}
