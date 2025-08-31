"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function CharacterSprite() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="character-container relative">
      <div className="character-sprite bg-stone-900 border-4 border-amber-800 p-4 rounded-md">
        <div className="w-48 h-48 relative">
          <Image
            src="/placeholder.svg?height=192&width=192"
            alt="Character sprite"
            width={192}
            height={192}
            className="pixelated"
          />
          {/* Animation effect */}
          <div
            className="absolute inset-0 transition-transform duration-100 ease-in-out"
            style={{
              transform: `translateY(${frame % 2 === 0 ? "0px" : "4px"})`,
            }}
          ></div>
        </div>
      </div>

      {/* Character stats */}
      <div className="character-hp mt-4 flex items-center gap-2">
        <span className="text-red-500 font-bold">HP:</span>
        <div className="bg-stone-900 border-2 border-amber-800 h-4 w-full">
          <div className="bg-red-600 h-full" style={{ width: "80%" }}></div>
        </div>
      </div>

      <div className="character-mp mt-2 flex items-center gap-2">
        <span className="text-blue-500 font-bold">MP:</span>
        <div className="bg-stone-900 border-2 border-amber-800 h-4 w-full">
          <div className="bg-blue-600 h-full" style={{ width: "65%" }}></div>
        </div>
      </div>
    </div>
  )
}
