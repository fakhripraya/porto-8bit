import Link from "next/link"

interface GameMenuProps {
  isAgency?: boolean
}

export default function GameMenu({ isAgency = false }: GameMenuProps) {
  return (
    <nav className="game-menu">
      <ul className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
        <li>
          <Link href="#services" className="menu-item">
            SKILLS
          </Link>
        </li>
        <li>
          <Link href="#about" className="menu-item">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="#team" className="menu-item">
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link href="#projects" className="menu-item">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="#contact" className="menu-item special">
            HIRE ME
          </Link>
        </li>
      </ul>
    </nav>
  )
}
