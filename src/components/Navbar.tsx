"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Kerala", href: "#kerala" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#e0e6ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src="https://assets.hackclub.com/flag-standalone.svg" 
                alt="Hack Club Flag" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#3c4858] hover:text-[#ec3750] transition-colors text-sm font-bold"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://toolbox.hackclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3c4858] hover:text-[#ec3750] transition-colors text-sm font-bold"
            >
              Resources
            </a>
            <a 
              href="https://hack.club/join/TLJMYS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ec3750] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#d62839] transition-colors"
            >
              Join HackPKD
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3c4858] hover:text-[#ec3750] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#e0e6ed] absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-bold text-[#3c4858] hover:text-[#ec3750] hover:bg-[#f9fafc] rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://toolbox.hackclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-bold text-[#3c4858] hover:text-[#ec3750] hover:bg-[#f9fafc] rounded-md"
            >
              Resources
            </a>
            <a 
              href="https://hack.club/join/TLJMYS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-bold text-[#ec3750] hover:bg-[#f9fafc] rounded-md"
            >
              Join HackPKD
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
