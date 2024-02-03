"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/theme-switcher";
import { silk } from "@/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Clock from "react-live-clock";
const Header = () => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={cn("p-2 flex justify-center relative", silk.className)}>
      <div className="flex flex-col items-center">
        <h1 className="text-7xl">
          {pathName === "/wishes" ? "Wish list" : "Daily Todo"}
        </h1>
        <div className={cn("text-xl", silk.className)}>
          {isMounted && (
            <Clock
              format={"dddd, MMMM Mo, YYYY, HH:mm:ss"}
              ticking
              timezone={"Brazil/East"}
              className="flex justify-center py-6"
              locale="br"
            />
          )}
        </div>
      </div>
      <nav className="absolute top-2 right-2 flex items-center gap-4">
        <Link
          href={pathName === "/wishes" ? "/" : "/wishes"}
          className="border-b hover:border-b-white"
        >
          {pathName === "/wishes" ? "Daily Todo" : "Wish List"}
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
