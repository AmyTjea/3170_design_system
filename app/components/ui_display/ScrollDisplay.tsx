import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

export default function ScrollDisplay() {
  const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Scroll</h1>
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag,idx) => (
          <>
            <div key={idx} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
        </div>  )
}
