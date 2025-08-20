import React from 'react'
import InfoButton from '../ui/infoButton'

export default function InfoDisplay() {
  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-8">Info</h1>
      <InfoButton description={"Yeepp"}/>
    </div>)
}
