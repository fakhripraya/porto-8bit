"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Sword, Scroll, Coins, Trophy, Zap } from "lucide-react"
import GameWindow from "@/components/game-window"
import GameMenu from "@/components/game-menu"
import ProjectItem from "@/components/project-item"
import SkillMeter from "@/components/skill-meter"
import SocialLinks from "@/components/social-links"
import LoadingScreen from "@/components/loading-screen"
import ServiceCard from "@/components/service-card"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  // Handle transition from loading to content
  useEffect(() => {
    if (!isLoading) {
      // Small delay before showing content for smooth transition
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <>
      {/* Loading Screen */}
      {!showContent && <LoadingScreen isComplete={!isLoading} onStart={() => setShowContent(true)} />}

      {/* Main Content */}
      {showContent && (
        <div className="min-h-screen bg-amber-950 text-white font-pixel">
          {/* Game Console Frame */}
          <div className="max-w-6xl mx-auto p-4 md:p-8">
            <div className="console-frame bg-red-900 p-2 md:p-4 rounded-lg border-8 border-stone-800">
              <div className="console-screen bg-stone-800 p-4 rounded-md">
                {/* Header/Navigation */}
                <header className="mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      <h1 className="text-xl md:text-2xl font-bold text-amber-400 pixel-text">DEV.QUEST</h1>
                    </div>
                    <GameMenu isAgency={true} />
                  </div>
                </header>

                {/* Hero Section */}
                <GameWindow title="DIGITAL REALM HEADQUARTERS">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400 pixel-text">
                        WELCOME TO MY REALM
                      </h2>
                      <p className="mb-6 leading-relaxed text-amber-100">
                        I'M A <span className="text-red-400">FULL-STACK DEVELOPER</span> ON AN EPIC QUEST TO CREATE
                        <span className="text-green-400"> LEGENDARY</span> DIGITAL EXPERIENCES.
                      </p>
                      <div className="stats-container border-2 border-amber-800 p-3 bg-stone-900 mb-6">
                        <div className="flex justify-between mb-2">
                          <span>EXPERIENCE:</span>
                          <span>5+ YEARS</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>PROJECTS:</span>
                          <span>50+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CLASS:</span>
                          <span className="text-green-400">FULL-STACK WIZARD</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Link href="#services" className="game-button bg-red-700 hover:bg-red-600">
                          MY SKILLS & ABILITIES
                        </Link>
                        <Link href="#contact" className="game-button bg-amber-700 hover:bg-amber-600">
                          START A PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="character-container relative">
                        <div className="character-sprite bg-stone-900 border-4 border-amber-800 p-4 rounded-md">
                          <div className="w-48 h-48 relative">
                            <img
                              src="/placeholder.svg?height=192&width=192"
                              alt="Developer logo"
                              className="pixelated"
                              width={192}
                              height={192}
                            />
                          </div>
                        </div>

                        {/* Developer stats */}
                        <div className="developer-power mt-4 flex items-center gap-2">
                          <span className="text-red-500 font-bold">POWER:</span>
                          <div className="bg-stone-900 border-2 border-amber-800 h-4 w-full">
                            <div className="bg-red-600 h-full" style={{ width: "90%" }}></div>
                          </div>
                        </div>

                        <div className="developer-creativity mt-2 flex items-center gap-2">
                          <span className="text-blue-500 font-bold">CREATIVITY:</span>
                          <div className="bg-stone-900 border-2 border-amber-800 h-4 w-full">
                            <div className="bg-blue-600 h-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Services Section */}
                <GameWindow title="MY SKILLS & ABILITIES" id="services" className="mt-8">
                  <div className="p-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-amber-400">CHOOSE YOUR ADVENTURE</h3>
                      <p className="text-amber-100 mt-2">
                        HERE ARE THE TECHNICAL SKILLS I'VE MASTERED ON MY CODING JOURNEY
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <ServiceCard
                        title="FRONTEND DEVELOPMENT"
                        description="CRAFTING RESPONSIVE AND INTERACTIVE USER INTERFACES WITH MODERN FRAMEWORKS"
                        icon={<Zap className="h-6 w-6" />}
                        color="red"
                      />

                      <ServiceCard
                        title="BACKEND DEVELOPMENT"
                        description="BUILDING ROBUST APIS AND SERVER-SIDE APPLICATIONS WITH SCALABLE ARCHITECTURE"
                        icon={<Star className="h-6 w-6" />}
                        color="amber"
                      />

                      <ServiceCard
                        title="MOBILE DEVELOPMENT"
                        description="CREATING CROSS-PLATFORM MOBILE APPS FOR IOS AND ANDROID DEVICES"
                        icon={<Sword className="h-6 w-6" />}
                        color="green"
                      />

                      <ServiceCard
                        title="DATABASE DESIGN"
                        description="DESIGNING AND OPTIMIZING DATABASES FOR PERFORMANCE AND SCALABILITY"
                        icon={<Trophy className="h-6 w-6" />}
                        color="blue"
                      />

                      <ServiceCard
                        title="DEVOPS & DEPLOYMENT"
                        description="AUTOMATING DEPLOYMENTS AND MANAGING CLOUD INFRASTRUCTURE"
                        icon={<Scroll className="h-6 w-6" />}
                        color="purple"
                      />

                      <ServiceCard
                        title="UI/UX DESIGN"
                        description="DESIGNING INTUITIVE USER EXPERIENCES WITH ATTENTION TO DETAIL"
                        icon={<Coins className="h-6 w-6" />}
                        color="amber"
                      />
                    </div>
                  </div>
                </GameWindow>

                {/* About Section */}
                <GameWindow title="AGENCY STATS" id="about" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8 p-4">
                    <div className="bg-stone-900 border-2 border-amber-800 p-4">
                      <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center gap-2">
                        <Scroll className="h-5 w-5" />
                        OUR STORY
                      </h3>
                      <p className="mb-4 text-amber-100">
                        I BEGAN MY CODING ADVENTURE IN 2019 WITH A SIMPLE "HELLO WORLD" AND HAVEN'T STOPPED EXPLORING
                        SINCE. MY JOURNEY HAS TAKEN ME THROUGH VARIOUS TECHNOLOGIES AND FRAMEWORKS.
                      </p>
                      <p className="text-amber-100">
                        MY QUEST IS TO BUILD DIGITAL EXPERIENCES THAT SOLVE REAL PROBLEMS AND DELIGHT USERS WITH CLEAN
                        CODE AND THOUGHTFUL DESIGN.
                      </p>

                      <h3 className="text-xl font-bold mt-6 mb-4 text-red-400 flex items-center gap-2">
                        <Trophy className="h-5 w-5" />
                        ACHIEVEMENTS
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span>COMPLETED 50+ SUCCESSFUL PROJECTS</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span>MASTERED 10+ PROGRAMMING LANGUAGES</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span>CONTRIBUTED TO OPEN SOURCE PROJECTS</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-stone-900 border-2 border-amber-800 p-4">
                      <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                        <Sword className="h-5 w-5" />
                        OUR EXPERTISE
                      </h3>
                      <div className="space-y-4">
                        <SkillMeter name="WEB DEVELOPMENT" level={95} color="red" />
                        <SkillMeter name="UI/UX DESIGN" level={90} color="amber" />
                        <SkillMeter name="MOBILE DEVELOPMENT" level={85} color="green" />
                        <SkillMeter name="ECOMMERCE" level={88} color="blue" />
                        <SkillMeter name="DIGITAL MARKETING" level={80} color="purple" />
                        <SkillMeter name="BRANDING" level={92} color="red" />
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Experience Section */}
                <GameWindow title="MY CODING JOURNEY" id="experience" className="mt-8">
                  <div className="p-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-amber-400 flex items-center justify-center gap-2">
                        <Scroll className="h-5 w-5" />
                        EXPERIENCE LOG
                      </h3>
                      <p className="text-amber-100 mt-2">MY ADVENTURE THROUGH THE WORLD OF SOFTWARE DEVELOPMENT</p>
                    </div>

                    <div className="grid gap-4">
                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">SENIOR FULL-STACK DEVELOPER</h4>
                            <div className="text-amber-400">TECH INNOVATIONS INC.</div>
                          </div>
                          <div className="text-green-400 text-sm">2022 - PRESENT</div>
                        </div>
                        <p className="text-amber-100 text-sm mb-2">
                          LEADING DEVELOPMENT OF ENTERPRISE WEB APPLICATIONS USING REACT, NODE.JS, AND AWS
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">REACT</span>
                          <span className="tech-tag">NODE.JS</span>
                          <span className="tech-tag">AWS</span>
                          <span className="tech-tag">MONGODB</span>
                        </div>
                      </div>

                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">FRONTEND DEVELOPER</h4>
                            <div className="text-amber-400">DIGITAL SOLUTIONS CO.</div>
                          </div>
                          <div className="text-green-400 text-sm">2020 - 2022</div>
                        </div>
                        <p className="text-amber-100 text-sm mb-2">
                          DEVELOPED RESPONSIVE WEB APPLICATIONS AND IMPROVED USER EXPERIENCE ACROSS MULTIPLE PROJECTS
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">JAVASCRIPT</span>
                          <span className="tech-tag">VUE.JS</span>
                          <span className="tech-tag">CSS</span>
                          <span className="tech-tag">FIGMA</span>
                        </div>
                      </div>

                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">JUNIOR DEVELOPER</h4>
                            <div className="text-amber-400">STARTUP VENTURES</div>
                          </div>
                          <div className="text-green-400 text-sm">2019 - 2020</div>
                        </div>
                        <p className="text-amber-100 text-sm mb-2">
                          STARTED MY CODING ADVENTURE BUILDING WEBSITES AND LEARNING THE FUNDAMENTALS
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">HTML</span>
                          <span className="tech-tag">CSS</span>
                          <span className="tech-tag">JAVASCRIPT</span>
                          <span className="tech-tag">PHP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Projects Section */}
                <GameWindow title="COMPLETED QUESTS" id="projects" className="mt-8">
                  <div className="p-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-amber-400">OUR LATEST ADVENTURES</h3>
                      <p className="text-amber-100 mt-2">CHECK OUT SOME OF OUR RECENT CLIENT PROJECTS</p>
                    </div>

                    <div className="grid gap-4">
                      <ProjectItem
                        title="NEON ARCADE"
                        type="E-COMMERCE"
                        description="A RETRO-STYLED ONLINE STORE FOR A GAMING MERCHANDISE COMPANY"
                        tech={["SHOPIFY", "CUSTOM THEME", "ANIMATION"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="BYTE BANK"
                        type="FINTECH"
                        description="MOBILE BANKING APP WITH 8-BIT INSPIRED INTERFACE AND GAMIFICATION"
                        tech={["REACT NATIVE", "NODE.JS", "FIREBASE"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="PIXEL BREW"
                        type="BRANDING"
                        description="COMPLETE BRAND IDENTITY FOR A CRAFT BREWERY WITH GAMING THEMES"
                        tech={["BRANDING", "PACKAGING", "WEB DESIGN"]}
                        image="/placeholder.svg?height=100&width=160"
                      />
                    </div>

                    <div className="text-center mt-6">
                      <Link href="#" className="game-button inline-block bg-stone-700 hover:bg-stone-600">
                        VIEW ALL PROJECTS
                      </Link>
                    </div>
                  </div>
                </GameWindow>

                {/* Testimonials */}
                <GameWindow title="QUEST REVIEWS" id="testimonials" className="mt-8">
                  <div className="p-4">
                    <div className="grid gap-4">
                      <div className="testimonial bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 border-2 border-amber-700 overflow-hidden">
                              <img
                                src="/placeholder.svg?height=48&width=48"
                                alt="Client"
                                className="pixelated"
                                width={48}
                                height={48}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-400" />
                              ))}
                            </div>
                            <p className="text-amber-100 mb-2">
                              "WORKING WITH THIS DEVELOPER WAS AMAZING! THEY DELIVERED A PIXEL-PERFECT WEBSITE THAT
                              EXCEEDED OUR EXPECTATIONS. THE ATTENTION TO DETAIL AND COMMUNICATION WAS OUTSTANDING."
                            </p>
                            <div className="text-green-400 font-bold">SARAH JOHNSON, STARTUP FOUNDER</div>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 border-2 border-amber-700 overflow-hidden">
                              <img
                                src="/placeholder.svg?height=48&width=48"
                                alt="Client"
                                className="pixelated"
                                width={48}
                                height={48}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-400" />
                              ))}
                            </div>
                            <p className="text-amber-100 mb-2">
                              "INCREDIBLE WORK ON OUR E-COMMERCE PLATFORM! THE DEVELOPER UNDERSTOOD OUR VISION AND
                              BROUGHT IT TO LIFE WITH CLEAN CODE AND GREAT PERFORMANCE. HIGHLY RECOMMENDED!"
                            </p>
                            <div className="text-green-400 font-bold">MIKE CHEN, BUSINESS OWNER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Contact Section */}
                <GameWindow title="START A NEW QUEST" id="contact" className="mt-8">
                  <div className="p-4">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-stone-900 border-2 border-amber-800 p-4">
                        <h3 className="text-xl font-bold mb-4 text-amber-400">LET'S BUILD SOMETHING TOGETHER</h3>
                        <p className="mb-6 text-amber-100">
                          READY TO START YOUR NEXT PROJECT? I'M AVAILABLE FOR FREELANCE WORK AND FULL-TIME
                          OPPORTUNITIES. LET'S DISCUSS HOW I CAN HELP BRING YOUR IDEAS TO LIFE!
                        </p>
                        <form className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block mb-2 font-bold text-amber-200">
                              NAME
                            </label>
                            <input type="text" id="name" className="game-input w-full" placeholder="YOUR NAME" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block mb-2 font-bold text-amber-200">
                              EMAIL
                            </label>
                            <input type="email" id="email" className="game-input w-full" placeholder="YOUR EMAIL" />
                          </div>
                          <div>
                            <label htmlFor="project" className="block mb-2 font-bold text-amber-200">
                              PROJECT TYPE
                            </label>
                            <select id="project" className="game-input w-full">
                              <option value="">SELECT PROJECT TYPE</option>
                              <option value="web">WEBSITE</option>
                              <option value="app">MOBILE APP</option>
                              <option value="ecommerce">E-COMMERCE</option>
                              <option value="branding">BRANDING</option>
                              <option value="marketing">MARKETING</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="message" className="block mb-2 font-bold text-amber-200">
                              MESSAGE
                            </label>
                            <textarea
                              id="message"
                              rows={4}
                              className="game-input w-full"
                              placeholder="TELL US ABOUT YOUR PROJECT"
                            ></textarea>
                          </div>
                          <div>
                            <button type="submit" className="game-button bg-red-700 hover:bg-red-600">
                              SEND MESSAGE
                            </button>
                          </div>
                        </form>
                      </div>

                      <div className="bg-stone-900 border-2 border-amber-800 p-4">
                        <h3 className="text-xl font-bold mb-4 text-amber-400">JOIN FORCES WITH US</h3>
                        <p className="mb-6 text-amber-100">
                          READY TO EMBARK ON A DIGITAL ADVENTURE? OUR TEAM IS EQUIPPED TO BRING YOUR VISION TO LIFE WITH
                          OUR UNIQUE BLEND OF RETRO AESTHETICS AND MODERN TECHNOLOGY.
                        </p>

                        <div className="stats-container border-2 border-amber-800 p-3 bg-stone-800 mb-6">
                          <div className="flex justify-between mb-2">
                            <span>EMAIL:</span>
                            <span className="text-green-400">DEV@QUEST.COM</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span>LOCATION:</span>
                            <span>REMOTE / WORLDWIDE</span>
                          </div>
                          <div className="flex justify-between">
                            <span>STATUS:</span>
                            <span className="text-amber-400">AVAILABLE FOR HIRE</span>
                          </div>
                        </div>

                        <h4 className="font-bold mb-2 text-amber-200">FOLLOW MY CODING JOURNEY:</h4>
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Footer */}
                <footer className="mt-8 text-center p-4 border-t-2 border-amber-800">
                  <p className="text-amber-400">© 2025 DEV.QUEST - CRAFTING CODE, ONE PIXEL AT A TIME</p>
                  <div className="mt-2 text-xs text-amber-200">READY FOR YOUR NEXT ADVENTURE?</div>
                </footer>
              </div>

              {/* Console Controls */}
              <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex gap-4">
                  <button className="console-button">A</button>
                  <button className="console-button">B</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
