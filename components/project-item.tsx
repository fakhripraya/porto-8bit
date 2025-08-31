import Image from "next/image"
import Link from "next/link"
import { Trophy } from "lucide-react"

interface ProjectItemProps {
  title: string
  type: string
  description: string
  tech: string[]
  image: string
}

export default function ProjectItem({ title, type, description, tech, image }: ProjectItemProps) {
  return (
    <div className="project-item bg-stone-900 border-2 border-amber-800 p-3">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="project-image flex-shrink-0">
          <div className="relative w-full md:w-40 h-24 overflow-hidden border-2 border-amber-700">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover pixelated" />
          </div>
        </div>

        <div className="project-content flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-red-400">{title}</h3>
              <div className="text-xs text-amber-400 mb-1">{type}</div>
            </div>
            <Trophy className="h-5 w-5 text-amber-400" />
          </div>

          <p className="text-sm mb-3 text-amber-100">{description}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((item, index) => (
              <span key={index} className="tech-tag">
                {item}
              </span>
            ))}
          </div>

          <Link href="#" className="view-project-link">
            VIEW QUEST DETAILS
          </Link>
        </div>
      </div>
    </div>
  )
}
