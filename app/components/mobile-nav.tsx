"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full">
          <nav className="flex flex-col items-center gap-4 pt-6">
            <a href="#hero" className="text-lg font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#about" className="text-lg font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-lg font-medium transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-lg font-medium transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
  )
}
