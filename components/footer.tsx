import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { silk } from "@/fonts";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BadgeAlert, Github, Info } from "lucide-react";

const tech = [
  {
    name: "@next.js",
    description: "The React Framework – created and maintained by @vercel.",
    version: "14.0.4",
    link: "https://nextjs.org/",
  },
  {
    name: "@redux",
    description: "Predictable state container for JavaScript apps.",
    version: "9.0.4",
    link: "https://redux.js.org/",
  },
  {
    name: "@tailwindcss",
    description: "A utility-first CSS framework for rapid UI development.",
    version: "3.3",
    link: "https://tailwindcss.com/",
  },
  {
    name: "@react-live-clock",
    description: "React hook for live clocks using react-moment.",
    version: "6.1.18",
    link: "https://pvoznyuk.github.io/react-live-clock/",
  },
  {
    name: "@luxon",
    description:
      "A library for handling, formatting, and parsing dates and times in JavaScript.",
    version: "3.4.4",
    link: "https://moment.github.io/luxon/#/",
  },
  {
    name: "@shadcn/ui",
    description:
      "A collection of customizable and composable React components.",
    version: "",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "@lucide",
    description: "A set of clean and customizable icons for your web projects.",
    version: "0.294.0",
    link: "https://lucide.dev/",
  },
  {
    name: "@tanstack",
    description:
      "A set of utility functions for React development. (used for react-table in this project)",
    version: "8.10.7",
    link: "https://tanstack.com/",
  },
  {
    name: "@react-hook-form",
    description:
      "Performant, flexible, and extensible forms with easy-to-use validation.",
    version: "7.49.0",
    link: "https://react-hook-form.com/",
  },
  {
    name: "@zod",
    description: "Effortless schema validation for JavaScript objects.",
    version: "3.22.4",
    link: "https://zod.dev/",
  },
];

const Footer = () => {
  return (
    <footer className="p-2 flex justify-center gap-2 items-center border-t">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className={silk.className}>
            <Github />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className={silk.className}>
          <p className="">Hi!</p>
          <div className="flex flex-col">
            <Link
              href={"https://github.com/samuelcolares"}
              className="border-b hover:text-blue-600 transition-colors w-fit text-blue-300"
            >
              Github
            </Link>
            <Link
              href={"https://samuelcolares.vercel.app/"}
              className="border-b hover:text-blue-600 transition-colors w-fit text-blue-300"
            >
              Portfolio
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
      <ScrollArea className="whitespace-nowrap w-full text-center">
        {tech.map((item) => (
          <HoverCard key={item.name}>
            <HoverCardTrigger asChild>
              <Button variant="link" className={silk.className}>
                {item.name}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="whitespace-normal">
              <p className="mb-4">{item.description}</p>
              <div className="flex gap-4 justify-center">
                {item.version && (
                  <p>
                    Version: <span>{item.version}</span>
                  </p>
                )}
                <Link
                  href={item.link}
                  className={cn("border-b text-ring hover:text-primary transition-colors", silk.className)}
                >
                  Link
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className={silk.className}>
              <BadgeAlert />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className={silk.className}>
            <p>How it works?</p>
            <p>
              Sometimes, i forgot to do things so i made this project that{" "}
              <span className="border-b border-primary">reset all completed tasks</span> when
              another day begins
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </footer>
  );
};

export default Footer;
