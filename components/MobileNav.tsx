'use client'
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
  } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
  
const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
            <Image src="/icons/hamburger.svg" height={30} width={30} alt="menu" className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent side="left">
            <Link href='/' className="mb-12 cursor-pointer flex items-center gap-2">
                <Image src="/icons/logo.svg" height={34} width={34} alt="logo" className="size-[24px] max-xl-size-14"/>
                <h1 className="sidebar-logo">Horizon</h1>
            </Link>
            {sidebarLinks.map((items)=>{
                const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`)
                return <Link href={items.route} key={items.label} className={cn("sidebar-link",{'bg-bank-gradient' : isActive})}>
                    <div className='relative size-6'> <Image src={items.imgURL} alt={items.label} fill className={cn({'brightness-[3] invert-0':isActive} )}/></div>
                    <p className={cn('sidebar-label',{'!text-white' : isActive})}>

                    {items.label}
                    </p>
                    </Link>
            })}
            
        
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
