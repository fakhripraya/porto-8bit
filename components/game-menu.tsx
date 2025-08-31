"use client"

import type React from "react"
import { useState } from "react"

interface GameMenuProps {
  isAgency?: boolean
}

export default function GameMenu({ isAgency = false }: GameMenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const handleMenuClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault()
    setActiveItem(href)

    // Add a small delay for the animation effect
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      setActiveItem(null)
    }, 200)
  }

  const menuItems = [
    { href: "#services", label: "SKILLS" },
    { href: "#about", label: "ABOUT" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "HIRE ME", special: true },
  ]

  return (
    <nav className="game-menu">
      <ul className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <button
              onClick={(e) => handleMenuClick(item.href, e)}
              className={`menu-item ${item.special ? "special" : ""} ${
                activeItem === item.href ? "menu-item-active" : ""
              }`}
            >
              {item.label}
              {activeItem === item.href && (
                <span className="menu-loading">
                  <span className="loading-dot"></span>
                  <span className="loading-dot"></span>
                  <span className="loading-dot"></span>
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
