import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { ModeToggle } from "../theme-provider/mode-toggle";
// import { AnimatedShinyButton } from "../ui/animated-shiny-button";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Docs", path: "/docs" },
];

export function TopNavbar() {
  return (
    <header className="border-b">
      <div className="flex h-14 items-center px-4">
        {/* left sidebar */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link to="/" className="font-semibold">
            MyApp
          </Link>
        </div>

        {/* right sidebar */}
        <div className="ml-auto flex items-center gap-4">
          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                {/* <ModeToggle /> */}
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                {/* <Link to="/login">
                  <AnimatedShinyButton>Login</AnimatedShinyButton>
                </Link> */}
              </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle />
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu className="h-5 w-5 cursor-pointer" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
                
                <DropdownMenuItem>
                  <ModeToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
