import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, image, tags, link = "#" }: ProjectCardProps) {
  return (
    <div className="pixel-container p-3 bg-indigo-900 hover:transform hover:translate-y-[-4px] transition-transform">
      <div className="relative h-48 mb-4 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover pixelated" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-yellow-400">{title}</h3>
      <p className="mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="pixel-tag">
            {tag}
          </span>
        ))}
      </div>
      <Link href={link} className="inline-flex items-center gap-1 text-green-400 hover:text-green-300">
        VIEW PROJECT <ExternalLink className="h-4 w-4" />
      </Link>
    </div>
  )
}
