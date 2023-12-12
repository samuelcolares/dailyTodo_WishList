"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/theme-switcher";
import { silk } from "@/fonts";


const Header = () => {
  return (
    <header className={cn("p-2 flex justify-center relative", silk.className)}>
      <h1 className="text-7xl">Daily Todo</h1>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
