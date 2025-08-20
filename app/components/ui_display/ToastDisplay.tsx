import React from 'react'
import { Button } from '../ui/button'
import { ToastAction } from '../ui/toast'
import { useToast } from '@app/hooks/use-toast'

export default function ToastDisplay() {
    const { toast } = useToast()
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Toast</h1>
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      default
    </Button>


    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant:"destructive",
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Destructive
    </Button>

    <p>adjust appearance of the destructive toast </p>
        </div>  )
}
