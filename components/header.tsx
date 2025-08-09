"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from 'lucide-react';
import { motion } from "framer-motion";
import { useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";

export function Header() {
  const [open, setOpen] = useState(false)
  const sections = ["about", "skills", "experience", "contact"]
  const active = useActiveSection(sections)

  const navLinks = [
    { name: "About Me", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="sticky top-0 z-50 w-full border-b border-light-border/80 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="#" className="text-lg font-extrabold text-light-text" prefetch={false}>
          Shubhan<span className="text-light-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-light-accent' : 'text-light-muted hover:text-light-accent'
                }`}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                {/* underline indicator */}
                <span className={`pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 rounded-full transition-opacity ${isActive ? 'bg-light-accent opacity-100' : 'opacity-0'}`} />
              </motion.a>
            )
          })}
         <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 border border-light-border text-light-muted hover:bg-light-accent hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
>
  Resume
</a>

        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-light-text">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-light-border text-light-text">
            <div className="flex flex-col gap-1 py-6">
              {navLinks.map((link) => {
                const isActive = active === link.id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`rounded-md px-3 py-2 text-lg font-medium ${isActive ? 'text-light-accent' : 'text-light-muted hover:text-light-accent'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                )
              })}
              <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 border border-light-border text-light-muted hover:bg-light-accent hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-colors"
>
  Resume
</a>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
