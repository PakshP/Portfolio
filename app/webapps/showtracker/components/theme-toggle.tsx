"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
      <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="shadow-2xl dark:shadow-background relative inline-flex items-center justify-center rounded-full p-2 bg-gray-200 dark:bg-secondary"
      >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
      </button>
  )
}
