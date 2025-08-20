"use client"
import { useState } from "react";
import AlertDisplay from "./component/ui_display/AlertDisplay";
import ButtonDisplay from "./component/ui_display/ButtonDisplay";
import { Button } from "./component/ui/button";
import CalendarDisplay from "./component/ui_display/CalendarDisplay";
import CardDisplay from "./component/ui_display/CardDisplay";
import CarouselDisplay from "./component/ui_display/CarouselDisplay";
import ChartDisplay from "./component/ui_display/ChartDisplay";
import CheckboxDisplay from "./component/ui_display/CheckboxDisplay";
import InfoDisplay from "./component/ui_display/InfoDisplay";
import InputDisplay from "./component/ui_display/InputDisplay";
import LabelDisplay from "./component/ui_display/LabelDisplay";
import NavigationDisplay from "./component/ui_display/NavigationDisplay";
import PopoverDisplay from "./component/ui_display/PopoverDisplay";
import ProfileDisplay from "./component/ui_display/ProfileDisplay";
import RadioDisplay from "./component/ui_display/RadioDisplay";
import ScrollDisplay from "./component/ui_display/ScrollDisplay";
import SeperatorDisplay from "./component/ui_display/SeperatorDisplay";
import SwitchDisplay from "./component/ui_display/SwitchDisplay";
import TabsDisplay from "./component/ui_display/TabsDisplay";
import ToastDisplay from "./component/ui_display/ToastDisplay";
import ToggleDisplay from "./component/ui_display/ToggleDisplay";
import DatepickerDisplay from "./component/ui_display/DatepickerDisplay";
import DialogDisplay from "./component/ui_display/DialogDisplay";
import DropdownDisplay from "./component/ui_display/DropdownDisplay";
import DropzoneDisplay from "./component/ui_display/DropzoneDisplay";
import FormDisplay from "./component/ui_display/FormDisplay";
import { Toaster } from "./component/ui/toaster"
export default function Home() {

  const [isDarkMode,setIsDarkMode] = useState(false)



    const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    // Apply to document root
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return (

    
    <div className={` bg-git-bg-bottom p-4 w-full overflow-scroll h-full flex flex-col align-middle items-center`}>
        <Toaster />
<p>general notes: fix the stroke colours</p>
      <div><Button  className={"absolute bottom-0 right-0"} onClick={toggleTheme}>Switch theme to {isDarkMode?"Light ":"Dark "}</Button></div>
      <div className="flex flex-col wrap-normal align-middle  ">
        <ButtonDisplay />
        <AlertDisplay/>
        <CalendarDisplay/>
        <CardDisplay/>
        <CarouselDisplay/>
        <ChartDisplay/>
        <CheckboxDisplay/>
        <DatepickerDisplay/>
        <DialogDisplay/>
        <DropdownDisplay/>
        <DropzoneDisplay/>
        <FormDisplay/>
        <InfoDisplay/>
        <InputDisplay/>
        <LabelDisplay/>
        <NavigationDisplay/>
        <PopoverDisplay/>
        <ProfileDisplay/>
        <RadioDisplay/>
        <ScrollDisplay/>
        <SeperatorDisplay/>
        <SwitchDisplay/>
        <TabsDisplay/>
        <ToastDisplay/>
        <ToggleDisplay/>

      </div>

    </div>

  );
}
