"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            height={30}
            width={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className=" cursor-pointer flex items-center gap-1 px-4"
          >
            <Image src="/icons/logo.svg" height={34} width={34} alt="logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col pt-16 gap-6 text-white">
                {sidebarLinks.map((items) => {
                  const isActive =
                    pathname === items.route ||
                    pathname.startsWith(`${items.route}/`);
                  return (
                    <SheetClose asChild key={items.route}>
                      <Link
                        href={items.route}
                        key={items.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={items.imgURL}
                          alt={items.label}
                          
                          height={20}
                          width={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {items.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
            </SheetClose>
            Footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
