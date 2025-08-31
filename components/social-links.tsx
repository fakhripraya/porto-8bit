import { Github, Linkedin } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="social-links flex gap-3 justify-center">
      <a href="https://github.com/fakhripraya" className="social-link">
        <Github className="h-5 w-5" />
      </a>
      <a href="https://www.linkedin.com/in/fakhri-prayatna-putra-abba18139/" className="social-link">
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  )
}
