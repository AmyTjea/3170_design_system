import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { CheckCircle2Icon } from 'lucide-react'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '../ui/alert-dialog'
import { Button } from '../ui/button'

export default function AlertDisplay() {
    const variants = ["default", "destructive"]

    return (
        <>

            <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Button</h1>


                            {variants.map((variant, idx) => (
                                <div key={idx} className=" px-4 py-6 gap-7 flex flex-row">
                                    <div >
                                        {variant}
                                    </div>
                                    <Alert variant={variant}>
                                        <CheckCircle2Icon />
                                        <AlertTitle>Alert title</AlertTitle>
                                        <AlertDescription>
                                            Alert description whihch is eveurnf
                                        </AlertDescription></Alert>                                </div>


                            ))}


<br />
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
</div>
        </>)

}
