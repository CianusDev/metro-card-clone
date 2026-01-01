import { Button } from "@/components/ui/button";
import { GripIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Header() {
  const menu = [
    { name: "Security", href: "/#security" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Faq", href: "/#faq" },
  ];
  return (
    <header className="w-full z-50 fixed bg-background/50 top-0 flex p-4 items-center justify-center h-16 backdrop-blur ">
      <div className="max-w-6xl w-full items-center justify-between flex">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="size-10 flex-shrink-0 flex justify-center items-center rounded-2xl text bg-primary text-background font-bold">
              M
            </div>
            <h1 className="font-semibold text-xl">Metrocard</h1>
          </Link>
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex max-md:hidden text-muted-foreground items-center gap-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button size={"lg"} className="rounded-xl hidden md:flex">
          Get the app
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-xl flex md:hidden"
        >
          <GripIcon />
        </Button>
      </div>
    </header>
  );
}
