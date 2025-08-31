import Image from "next/image"

export default function PixelAvatar() {
  return (
    <div className="pixel-container p-2 inline-block">
      <div className="relative w-64 h-64 overflow-hidden">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="8-bit avatar"
          width={256}
          height={256}
          className="pixelated"
        />
      </div>
    </div>
  )
}
