import React from "react";
import { BsSlashLg } from "react-icons/bs";
import VercelSvg from "./svg/vercel-svg";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import Image from "next/image";
import { FaEquals } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = {};

const pages = [
  {
    title: "Overview",
    active: "true",
  },
  {
    title: "Integrations",
    active: "",
  },
  {
    title: "Activity",
    active: "",
  },
  {
    title: "Domains",
    active: "",
  },
  {
    title: "Usage",
    active: "",
  },
  {
    title: "Storage",
    active: "",
  },
  {
    title: "Monitoring",
    active: "",
  },
  {
    title: "Setting",
    active: "",
  },
];

export default function Header({}: Props) {
  return (
    <div className="px-8 pt-4 border-b border-gray-500">
      {/* first section */}
      <section className="flex justify-between">
        {/* left */}
        <div className="flex items-center gap-3">
          <VercelSvg />
          {/* slash */}
          <BsSlashLg className="dark:text-gray-500" />
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full h-7 w-7 " />
          <p className="'font-bold">lokesh</p>
          <div className="p-2 text-xl hover:dark:bg-gray-800 rounded-md py-3 ">
            <HiMiniChevronUpDown className=" dark:text-gray-500" />
          </div>
        </div>
        {/* right */}
        <div className="flex gap-3 ">
          {/* bell */}
          <button className="border h-9 w-9 flex items-center justify-center dark:border-gray-500 rounded-full dark:text-gray-500 dark:hover:text-white ">
            <LuBell />
          </button>
          {/* equals */}
          <button className="border h-9 w-9 flex items-center justify-center dark:border-gray-500 rounded-full dark:text-gray-500 dark:hover:text-white ">
            <FaEquals />
          </button>
        </div>
      </section>
      {/* second section */}
      <section className="flex gap-4">
        {pages.map((d, i) => (
          <div
            className={cn("py-2 ", {
              " border-b dark:border-white ": d.active,
            })}
          >
            <Button
              className={cn("hover:dark:bg-gray-900 text-gray-500", {
                "dark:text-white": d.active,
              })}
              variant={"ghost"}
              key={i}
            >
              {d.title}
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
