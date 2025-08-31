"use client"

import type React from "react"

import { useState } from "react"

interface SoundEffectProps {
  type: "click" | "hover" | "success"
  children: React.ReactNode
  className?: string
}

export default function SoundEffect({ type, children, className = "" }: SoundEffectProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playEffect = () => {
    setIsPlaying(true)

    // Create visual sound effect
    const soundElement = document.createElement("div")
    soundElement.className = `sound-effect sound-effect-${type}`
    soundElement.textContent = type === "click" ? "♪" : type === "hover" ? "♫" : "♬"

    document.body.appendChild(soundElement)

    setTimeout(() => {
      document.body.removeChild(soundElement)
      setIsPlaying(false)
    }, 500)
  }

  return (
    <div
      className={`${className} ${isPlaying ? "playing-sound" : ""}`}
      onMouseEnter={() => type === "hover" && playEffect()}
      onClick={() => (type === "click" || type === "success") && playEffect()}
    >
      {children}
    </div>
  )
}
