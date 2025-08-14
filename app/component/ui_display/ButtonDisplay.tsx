import React from 'react'
import { Button } from '../ui/button'

export default function ButtonDisplay() {
    const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"]
    const sizes = ["default", "sm", "lg", "icon"]

    return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-slate-900">Button</h1>

            <div >
                <table >
                    <thead>
                        <tr >
                            <th >
                                Size / Variant
                            </th>
                            {variants.map((variant) => (
                                <th key={variant} >
                                    {variant}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sizes.map((size) => (
                            <tr key={size} className="hover:bg-slate-25">
                                <td >
                                    {size}
                                </td>
                                {variants.map((variant) => (
                                    <td key={`${size}-${variant}`} className="border border-border px-4 py-6 text-center">
                                        <Button
                                            variant={variant}
                                            size={size}
                                        >
                                            Click me!
                                        </Button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></div>)
}
