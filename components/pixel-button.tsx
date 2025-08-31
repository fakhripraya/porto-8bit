"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface PixelButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary"
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  className?: string
}

export default function PixelButton({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className,
}: PixelButtonProps) {
  const baseClasses = cn(
    "pixel-button inline-flex items-center gap-2 px-6 py-2 font-bold transition-transform active:translate-y-1",
    variant === "primary" ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
