"use client"
import Link from "next/link";
import { Mail, MapPin } from 'lucide-react';
import { Call } from "../svg/call";
import { explore, resources } from "@/app/lib/data";

export const Footer = () => {
  
  return (
    <>
    <footer className="relative bg-(--color-primary-dark) text-white border-t border-white/10 overflow-hidden">
  {/* Decorative accent top line */}
  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--color-gold-medium) to-transparent opacity-80" />
  
  {/* Background soft radial glow */}
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--color-green-dark)/10 rounded-full blur-3xl pointer-events-none -z-10" />

  {/* Master Grid: 1 Col on mobile, 2 on tablet, 4 on desktop */}
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-5 grid grid-cols-1  gap-x-8 gap-y-2">
    
    {/* ================= ROW 1-3: MAIN COLUMNS ================= */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Column 1: Brand Presence */}
        <div className="flex flex-col items-center ">
        {/* Column Header */}
        <Link href="/" className=" group h-8 flex justify-center">
            <span className="font-serif text-[28px] tracking-wide text-(--color-gold-medium) group-hover:text-(--color-gold-light) transition-colors leading-none">
            IISPPR
            </span>
        </Link>
        {/* Column Body */}
        <p className="text-sm text-gray-400 leading-relaxed">
            Bridging the gap between theoretical data science and global public policy to advance Sustainable Development Goals (SDGs) through rigorous research.
        </p>
       
        </div>

        {/* Column 2: Quick Links (Matches Column 3 Structure) */}
        <div className="flex flex-col justify-center text-center">
        
        {/* Column Header */}
        <h4 className="font-serif text-[16px] tracking-wider text-(--color-gold-medium) uppercase font-semibold h-8 flex justify-center">
            Explore
        </h4>
        {/* Column Body */}
        <ul className="space-y-1">
            {
                explore.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-300 inline-flex items-center gap-1.5">
                            {item.name}
                        </Link>
                    </li>
                 )
                )
            }

        </ul>
        </div>
        {/* Column 3: Resources (Matches Column 2 Structure) */}
        <div className="flex flex-col justify-center text-center">
        
        {/* Column Header */}
        <h4 className="font-serif text-[16px] tracking-wider text-(--color-gold-medium) uppercase font-semibold h-8 flex justify-center">
            Resources
        </h4>
        {/* Column Body */}
        <ul className="space-y-1">
           { resources.map((item) => (
                <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-300 inline-flex items-center gap-1.5">
                        {item.name}
                    </Link>
                </li>
            ))} 
           
        </ul>
        </div>
    </div>


    {/* ================= ROW 4: DIVIDER ================= */}
    <div className=" h-px bg-white/10 mt-4" />
        
    {/* ================= ROW 5: CONTACT INFO STRIP ================= */}
    <div className="grid grid-cols-3 gap-2 text-sm text-gray-400 pb-1">
      <div className="flex items-center gap-3">
        <span className="text-(--color-gold-medium)">
            <Call/>
        </span>
        <span>+1 (168) 458-6757</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-(--color-gold-medium)">
          <Mail/>
        </span>
        <span>contact@iisppracademy.org</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-(--color-gold-medium)">
         <MapPin/>
        </span>
        <span>Global SDG Research Park, Complex B, NY</span>
      </div>
    </div>

    {/* ================= ROW 6: DIVIDER ================= */}
    <div className="col-span-full h-px bg-white/5" />

    {/* ================= ROW 7: COPYRIGHT ================= */}
    <div className="col-span-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
      <p>© {new Date().getFullYear()} International Institute of SDGs & Public Policy Research. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
      </div>
    </div>

  </div>
</footer>
    </>
  );
};