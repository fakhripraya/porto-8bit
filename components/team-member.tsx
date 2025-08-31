import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  specialty: string
  level: number
}

export default function TeamMember({ name, role, image, specialty, level }: TeamMemberProps) {
  return (
    <div className="team-member bg-stone-900 border-2 border-amber-800 p-3 text-center">
      <div className="relative w-20 h-20 mx-auto mb-3 border-2 border-amber-700 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} width={80} height={80} className="pixelated" />
      </div>

      <h3 className="text-sm font-bold text-amber-400">{name}</h3>
      <div className="text-xs text-green-400 mb-2">{role}</div>

      <div className="stats-container border border-amber-800 p-2 bg-stone-800 text-xs mb-2">
        <div className="flex justify-between mb-1">
          <span>SPECIALTY:</span>
          <span>{specialty}</span>
        </div>
        <div className="flex justify-between">
          <span>LVL:</span>
          <span>{level}</span>
        </div>
      </div>

      {/* Level bar */}
      <div className="level-bar h-2 bg-stone-800 border border-amber-800">
        <div className="h-full bg-green-600" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}
