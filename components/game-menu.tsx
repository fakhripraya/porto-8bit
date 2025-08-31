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
      <ul className="flex flex-wrap justify-center md:justify-end gap-1 md:gap-2 lg:gap-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <button
              onClick={(e) => handleMenuClick(item.href, e)}
              className={`menu-item ${item.special ? "special" : ""} ${
                activeItem === item.href ? "menu-item-active" : ""
              }`}
            >
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">
                {item.label === "SKILLS"
                  ? "SKILL"
                  : item.label === "ABOUT"
                    ? "INFO"
                    : item.label === "EXPERIENCE"
                      ? "EXP"
                      : item.label === "PROJECTS"
                        ? "WORK"
                        : item.label === "HIRE ME"
                          ? "HIRE"
                          : item.label}
              </span>
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
