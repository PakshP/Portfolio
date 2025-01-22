"use client"

import { useEffect, useState } from "react"

interface ProgressBarProps {
  label: string
  progress: number
}

export function ProgressBar({ label, progress }: ProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(progress)
  }, [progress])

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

