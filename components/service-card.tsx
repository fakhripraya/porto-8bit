import type React from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: "red" | "green" | "blue" | "amber" | "purple"
}

export default function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const getColorClass = () => {
    switch (color) {
      case "red":
        return "border-red-600 bg-red-900/30"
      case "green":
        return "border-green-600 bg-green-900/30"
      case "blue":
        return "border-blue-600 bg-blue-900/30"
      case "purple":
        return "border-purple-600 bg-purple-900/30"
      default:
        return "border-amber-600 bg-amber-900/30"
    }
  }

  const getIconColorClass = () => {
    switch (color) {
      case "red":
        return "text-red-500"
      case "green":
        return "text-green-500"
      case "blue":
        return "text-blue-500"
      case "purple":
        return "text-purple-500"
      default:
        return "text-amber-500"
    }
  }

  return (
    <div
      className={`service-card border-2 ${getColorClass()} p-2 md:p-4 hover:translate-y-[-4px] transition-transform`}
    >
      <div className={`service-icon mb-2 md:mb-4 ${getIconColorClass()}`}>{icon}</div>
      <h3 className="pixel-text-sm md:pixel-text-lg font-bold mb-2 text-amber-400">{title}</h3>
      <p className="pixel-text-xs md:pixel-text-sm text-amber-100">{description}</p>
    </div>
  )
}
