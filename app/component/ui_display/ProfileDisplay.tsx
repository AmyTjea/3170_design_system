import React from 'react'
import ProfileMenu from '../ui/profile-menu'

export default function ProfileDisplay() {
  return (
        <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Profile</h1>
<ProfileMenu onSignOut={()=>{console.log("Signed out!")}}/>
        </div>  )
}
