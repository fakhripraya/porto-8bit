import type React from "react"
import { cn } from "@/lib/utils"

interface GameWindowProps {
  title: string
  children: React.ReactNode
  className?: string
  id?: string
}

export default function GameWindow({ title, children, className, id }: GameWindowProps) {
  return (
    <section id={id} className={cn("game-window", className)}>
      <div className="game-window-header bg-red-800 p-2 flex items-center">
        <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="game-window-content bg-stone-700 border-2 border-amber-800">{children}</div>
    </section>
  )
}
