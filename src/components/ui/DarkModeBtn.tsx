"use client";
import React from "react";
import { useTheme } from "next-themes";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { cn } from "@/lib/utils";

type Props = {};

export default function DarkModeBtn({}: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <section className="flex ">
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "p-2 rounded-full text-gray-400 dark:text-white hover:text-slate-800 transition-all",
            theme === "dark" && "bg-gray-300 dark:bg-gray-800 transition-all "
          )}
        >
          {" "}
          <IoMoon />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "p-2 rounded-full  text-gray-400 dark:text-white hover:text-slate-800",
            theme === "light" && "bg-gray-300 dark:bg-gray-800 transition-all "
          )}
        >
          <IoSunnySharp />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={cn(
            "p-2 rounded-full  text-gray-400 dark:text-white hover:text-slate-800",
            theme === "system" && "bg-gray-300 dark:bg-gray-800 transition-all "
          )}
        >
          {" "}
          <HiComputerDesktop />
        </button>
      </section>
    </div>
  );
}
