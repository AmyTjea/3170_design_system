import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import SignUpButton from "./SignUpButton";
import ProfileMenu from "../ui/profile-menu";
import { Link, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
interface NavBarProps {
  isLoggedIn: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isLoggedIn }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
//   const location = useLocation();
//   const isLandingPage = location.pathname === "/";

//usestate for testing purposes
   const  [isLandingPage, setIsLandingPage] = useState(false);

  const handleSignOut = () => {
    // TODO: implement signing out logic here later
    console.log("Sign out clicked");
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // note to self: implement dark mode logic here later
    console.log("Dark mode toggled:", !isDarkMode);
  };

  return (
    <>
    <div
      className={`z-50 flex items-center justify-between py-2 border-b bg-white  
        ${isLandingPage ? "sticky top-0 px-4 rounded-md shadow-lg  ml-32 mr-32" : "relative px-4"}
      `}
    >
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <a className="flex items-center space-x-3">
            <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
            <span className="text-xl text-gray-900"></span>
          </a>

          {isLandingPage ? (
            // Landing page navigation items
            <>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <a href="#about" className={navigationMenuTriggerStyle()}>
                    About
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <a href="#features" className={navigationMenuTriggerStyle()}>
                    Features
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <a href="#howto" className={navigationMenuTriggerStyle()}>
                    How-To
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          ) : (
            // App navigation items
            <>
              <NavigationMenuItem>
                <NavigationMenuLink>
                <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </Link>                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <a className={navigationMenuTriggerStyle()}>Docs</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <button
          onClick={handleToggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {!isLoggedIn && (
          <>
            <a href="/login" className={navigationMenuTriggerStyle()}>
              Login
            </a>
            <SignUpButton />
          </>
        )}
        {isLoggedIn && <ProfileMenu onSignOut={handleSignOut} />}
      </div>
    </div>

    <Button onClick={()=>{setIsLandingPage(!isLandingPage)}}>Toggle landing page</Button>

    </>
  );
};

export default NavBar;
