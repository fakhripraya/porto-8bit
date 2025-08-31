interface SkillMeterProps {
  name: string
  level: number
  color: "red" | "green" | "blue" | "amber" | "purple"
}

export default function SkillMeter({ name, level, color }: SkillMeterProps) {
  const getColorClass = () => {
    switch (color) {
      case "red":
        return "bg-red-600"
      case "green":
        return "bg-green-600"
      case "blue":
        return "bg-blue-600"
      case "purple":
        return "bg-purple-600"
      default:
        return "bg-amber-600"
    }
  }

  // Create segments for the skill bar
  const segments = 10
  const filledSegments = Math.round(level / (100 / segments))

  return (
    <div className="skill-meter">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-bold">{name}</span>
        <span className="text-sm">{level}/100</span>
      </div>
      <div className="flex gap-1">
        {[...Array(segments)].map((_, i) => (
          <div
            key={i}
            className={`h-4 flex-1 border border-stone-600 ${i < filledSegments ? getColorClass() : "bg-stone-800"}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
