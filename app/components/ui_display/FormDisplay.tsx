"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function FormDisplay() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values:any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    alert(`Username submitted: ${values.username}`)
  }

  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Form</h1>
      <div className="w-full max-w-sm">
        <Form {...form}>
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button onClick={form.handleSubmit(onSubmit)} className="w-full">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}