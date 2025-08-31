import { Github, Twitter, Linkedin, Globe } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="social-links flex gap-3 justify-center">
      <a href="#" className="social-link">
        <Github className="h-5 w-5" />
      </a>
      <a href="#" className="social-link">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="#" className="social-link">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href="#" className="social-link">
        <Globe className="h-5 w-5" />
      </a>
    </div>
  )
}
