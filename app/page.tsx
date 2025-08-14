"use client"
import { useState } from "react";
import AlertDisplay from "./component/ui_display/AlertDisplay";
import ButtonDisplay from "./component/ui_display/ButtonDisplay";
import { Button } from "./component/ui/button";

export default function Home() {

  const [isDarkMode,setIsDarkMode] = useState(false)

  const toggleTheme = ()=>{
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={` ${isDarkMode&&"dark "}bg-background p-4 w-full h-full flex flex-col align-middle items-center`}>

      <div><Button onClick={toggleTheme}>Switch theme to {isDarkMode?"Light ":"Dark "}</Button></div>
      <div className="flex flex-col wrap-normal align-middle  ">
        <ButtonDisplay />
        <AlertDisplay/>
      </div>


    </div>

  );
}
