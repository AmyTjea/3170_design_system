import React, { useState } from 'react'
import NavBar from '../landingPage/NavBar'
import { Button } from '../ui/button'

export default function NavigationDisplay() {
  const [isLogin,setIsLogin] = useState(true)
  return (
        <div className="flex flex-col items-center p-8 w-full bg-amber-600 mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Navigation</h1>
<NavBar isLoggedIn={isLogin}/>
<Button onClick={()=>setIsLogin(!isLogin)}>Toggle if is logged in</Button>
        </div>  )
}
