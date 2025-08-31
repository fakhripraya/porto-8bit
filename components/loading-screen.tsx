"use client"

import { useState, useEffect } from "react"
import { Gamepad2, Zap } from "lucide-react"

interface LoadingScreenProps {
  isComplete: boolean
  onStart: () => void
}

export default function LoadingScreen({ isComplete, onStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM...")
  const [showPressStart, setShowPressStart] = useState(false)
  const [blinkStart, setBlinkStart] = useState(false)

  // Array of loading messages
  const loadingMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING PORTFOLIO DATA...",
    "RENDERING PROJECTS...",
    "COMPILING SKILLS...",
    "LOADING EXPERIENCE...",
    "CALIBRATING ABILITIES...",
    "PREPARING DEVELOPER PROFILE...",
  ]

  // Array of developer tips
  const developerTips = [
    "TIP: CHECK OUT MY PROJECTS TO SEE MY WORK",
    "TIP: SCROLL THROUGH MY SKILLS AND EXPERIENCE",
    "TIP: I SPECIALIZE IN FULL-STACK DEVELOPMENT",
    "TIP: CONTACT ME FOR FREELANCE OPPORTUNITIES",
    "TIP: I LOVE BUILDING PIXEL-PERFECT INTERFACES",
  ]

  const [currentTip, setCurrentTip] = useState(developerTips[0])

  // Simulate loading progress
  useEffect(() => {
    if (isComplete) {
      setProgress(100)
      setLoadingText("LOAD COMPLETE!")

      // Show "PRESS START" after a short delay
      const timer = setTimeout(() => {
        setShowPressStart(true)

        // Start blinking effect
        const blinkInterval = setInterval(() => {
          setBlinkStart((prev) => !prev)
        }, 500)

        return () => clearInterval(blinkInterval)
      }, 500)

      return () => clearTimeout(timer)
    } else {
      // Increment progress gradually
      const interval = setInterval(() => {
        setProgress((prev) => {
          // Calculate new progress
          const increment = Math.floor(Math.random() * 5) + 1
          const newProgress = Math.min(prev + increment, 99) // Cap at 99% until complete

          // Update loading text based on progress
          const messageIndex = Math.floor(newProgress / (100 / loadingMessages.length))
          setLoadingText(loadingMessages[messageIndex] || loadingMessages[loadingMessages.length - 1])

          // Update tip every 20%
          if (Math.floor(prev / 20) !== Math.floor(newProgress / 20)) {
            const tipIndex = Math.floor(newProgress / 20) % developerTips.length
            setCurrentTip(developerTips[tipIndex])
          }

          return newProgress
        })
      }, 200)

      return () => clearInterval(interval)
    }
  }, [isComplete, loadingMessages, developerTips])

  return (
    <div className="fixed inset-0 bg-stone-900 z-50 font-pixel flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <Gamepad2 className="h-8 w-8 text-red-500" />
            <h1 className="pixel-text-xl md:pixel-text-2xl lg:text-3xl font-bold text-amber-400 pixel-text">
              DEV.QUEST
            </h1>
            <Gamepad2 className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-amber-200 pixel-text-xs md:pixel-text-sm">WELCOME TO MY REALM</p>
        </div>

        {/* Loading Bar Container */}
        <div className="loading-container border-4 border-amber-800 p-4 bg-stone-800 mb-6">
          {/* Status Text */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-amber-400 pixel-text-xs md:pixel-text-sm">{loadingText}</span>
            <span className="text-amber-400 pixel-text-xs md:pixel-text-sm">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="loading-bar-container h-8 border-2 border-amber-700 bg-stone-900 relative overflow-hidden">
            <div
              className="loading-bar-fill h-full bg-red-700 transition-all duration-200 ease-linear"
              style={{ width: `${progress}%` }}
            >
              {/* Animated loading effect */}
              <div className="loading-animation absolute inset-0">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-full w-2 bg-red-500 absolute opacity-30"
                    style={{
                      left: `${i * 10}%`,
                      animation: `loadingPulse 1s infinite ${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Loading Segments - pixelated style */}
          <div className="loadingng-segments flex mt-2 gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`h-2 flex-1 ${i < progress / 5 ? "bg-amber-500" : "bg-stone-700"}`}></div>
            ))}
          </div>
        </div>

        {/* Developer Tip */}
        <div className="game-tip border-2 border-amber-800 p-3 bg-stone-900 text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Zap className="h-4 w-4 text-amber-400" />
            <span className="text-amber-400 pixel-text-xs md:pixel-text-sm font-bold">DEVELOPER TIP</span>
            <Zap className="h-4 w-4 text-amber-400" />
          </div>
          <p className="text-amber-200 pixel-text-xs md:pixel-text-sm">{currentTip}</p>
        </div>

        {/* Press Start Button */}
        {showPressStart && (
          <div className="text-center">
            <button
              onClick={onStart}
              className={`game-button bg-red-700 hover:bg-red-600 px-8 py-3 text-lg ${blinkStart ? "opacity-100" : "opacity-70"}`}
            >
              PRESS START
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
