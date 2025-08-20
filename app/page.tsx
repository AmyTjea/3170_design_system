"use client"
import { useState } from "react";
import AlertDisplay from "./components/ui_display/AlertDisplay";
import ButtonDisplay from "./components/ui_display/ButtonDisplay";
import { Button } from "./components/ui/button";
import CalendarDisplay from "./components/ui_display/CalendarDisplay";
import CardDisplay from "./components/ui_display/CardDisplay";
import CarouselDisplay from "./components/ui_display/CarouselDisplay";
import ChartDisplay from "./components/ui_display/ChartDisplay";
import CheckboxDisplay from "./components/ui_display/CheckboxDisplay";
import InfoDisplay from "./components/ui_display/InfoDisplay";
import InputDisplay from "./components/ui_display/InputDisplay";
import LabelDisplay from "./components/ui_display/LabelDisplay";
import NavigationDisplay from "./components/ui_display/NavigationDisplay";
import PopoverDisplay from "./components/ui_display/PopoverDisplay";
import ProfileDisplay from "./components/ui_display/ProfileDisplay";
import RadioDisplay from "./components/ui_display/RadioDisplay";
import ScrollDisplay from "./components/ui_display/ScrollDisplay";
import SeperatorDisplay from "./components/ui_display/SeperatorDisplay";
import SwitchDisplay from "./components/ui_display/SwitchDisplay";
import TabsDisplay from "./components/ui_display/TabsDisplay";
import ToastDisplay from "./components/ui_display/ToastDisplay";
import ToggleDisplay from "./components/ui_display/ToggleDisplay";
import DatepickerDisplay from "./components/ui_display/DatepickerDisplay";
import DialogDisplay from "./components/ui_display/DialogDisplay";
import DropdownDisplay from "./components/ui_display/DropdownDisplay";
import DropzoneDisplay from "./components/ui_display/DropzoneDisplay";
import FormDisplay from "./components/ui_display/FormDisplay";
import { Toaster } from "./components/ui/toaster"
import SelectDisplay from "./components/ui_display/SelectDisplay";
import TooltipDisplay from "./components/ui_display/TooltipDisplay";
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
        <SelectDisplay/>
        <SeperatorDisplay/>
        <SwitchDisplay/>
        <TabsDisplay/>
        <ToastDisplay/>
        <ToggleDisplay/>
        <TooltipDisplay/>

      </div>

    </div>

  );
}
