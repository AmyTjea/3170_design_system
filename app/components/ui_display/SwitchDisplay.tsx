import React from 'react'
import { Switch } from '../ui/switch'

export default function SwitchDisplay() {
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Switch</h1>

      <Switch id="airplane-mode" />

        </div>  )
}
