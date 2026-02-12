"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-1000 transition-all duration-300 ${
        isScrolled ? "py-4 bg-[#0b0c10]/95 backdrop-blur-md" : "py-5 bg-[#0b0c10]/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold text-white">
          Phone<span className="text-[#66fcf1]">Booth</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[#c5c6c7] font-medium transition-all duration-300 relative hover:text-[#66fcf1] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-[#66fcf1] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer space-y-1.5 p-2">
                 <div className="w-6 h-0.5 bg-white"></div>
                 <div className="w-6 h-0.5 bg-white"></div>
                 <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1f2833] border-none text-white w-[60%] pt-20">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-[#c5c6c7] hover:text-[#66fcf1] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
