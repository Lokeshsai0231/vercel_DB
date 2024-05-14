import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

type Props = {};

export default function SearchSection({}: Props) {
  return (
    <div className="flex gap-3 w-full  ">
      <div className="relative w-full">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground " />
        <Input placeholder="Search Repositories and Projects..." className="pl-8 w-full bg-inherit" />
      </div>
      <Button>
        <span>Add New..</span>
        <span>
          <ChevronDown className="text-xl items-center gap-2" />{" "}
        </span>
      </Button>
    </div>
  );
}
