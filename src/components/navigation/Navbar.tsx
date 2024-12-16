"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  //  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/dashboard">Dashboard</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/members">Members</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
