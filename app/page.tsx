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
import ScrollIndicator from "@/components/scroll-indicator"

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
      {/* Scroll Indicator */}
      <ScrollIndicator />

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
                        Hi,I'm Fakhri
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
                          <span>REPOSITORY:</span>
                          <span>100+</span>
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
                              src="/myphoto.jpg?height=192&width=192"
                              alt="My logo hehe"
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
                        title="REACT WEB DEVELOPMENT"
                        description="CRAFTING RESPONSIVE AND INTERACTIVE USER INTERFACES WITH MODERN FRAMEWORKS"
                        icon={<Zap className="h-6 w-6" />}
                        color="red"
                      />

                      <ServiceCard
                        title="BACKEND DEVELOPMENT (NODE,GO,.NET)"
                        description="BUILDING ROBUST APIS AND SERVER-SIDE APPLICATIONS WITH SCALABLE ARCHITECTURE"
                        icon={<Star className="h-6 w-6" />}
                        color="amber"
                      />

                      <ServiceCard
                        title="FLUTTER MOBILE DEVELOPMENT"
                        description="CREATING CROSS-PLATFORM MOBILE APPS FOR IOS AND ANDROID DEVICES"
                        icon={<Sword className="h-6 w-6" />}
                        color="green"
                      />

                      <ServiceCard
                        title="SMART CONTRACT (EVM)"
                        description="BUILDING SECURE AND EFFICIENT DECENTRALIZED APPLICATIONS ON ETHEREUM VIRTUAL MACHINE."
                        icon={<Trophy className="h-6 w-6" />}
                        color="blue"
                      />

                      <ServiceCard
                        title="REACT NATIVE MOBILE DEVELOPMENT"
                        description="CREATING CROSS-PLATFORM MOBILE APPS FOR IOS AND ANDROID DEVICES"
                        icon={<Scroll className="h-6 w-6" />}
                        color="purple"
                      />

                      <ServiceCard
                        title="SOFTWARE ENGINEERING"
                        description="DESIGNING INTUITIVE SOFTWARE WITH ATTENTION TO DETAIL"
                        icon={<Coins className="h-6 w-6" />}
                        color="amber"
                      />
                    </div>
                  </div>
                </GameWindow>

                {/* About Section */}
                <GameWindow title="MY STATS" id="about" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8 p-4">
                    <div className="bg-stone-900 border-2 border-amber-800 p-4">
                      <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center gap-2">
                        <Scroll className="h-5 w-5" />
                        OUR STORY
                      </h3>
                      <p className="mb-4 text-amber-100">
                        I BEGAN MY CODING ADVENTURE IN 2016 WITH A SIMPLE "HELLO WORLD" AND HAVEN'T STOPPED EXPLORING
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
                          <span>SUCCESSSFULLY BUILD A FULLY FUNCTION SINGLE PIN PAYMENT APP</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span>SUCCESSFULL TRANSITION TO GLOBAL MOBILE APP FROM LOCAL MOBILE APP WITH FLUTTER</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span>SUCCESSSFULLY BUILD A FULLY FUNCTIONAL WEB3 DAPP AND EVM SMART CONTRACT WITH ERC-721</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span>SUCCESSSFULLY BUILD AN AI BOARDING HOUSE FINDER PROJECT AT ICP x FET - NEXTGEN AGENTS HACKATHON IN JUST 1 WEEK</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-stone-900 border-2 border-amber-800 p-4">
                      <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                        <Sword className="h-5 w-5" />
                        OUR EXPERTISE
                      </h3>
                      <div className="space-y-4">
                        <SkillMeter name="REACT WEB DEVELOPMENT" level={95} color="red" />
                        <SkillMeter name="BACKEND DEVELOPMENT (NODE,GO,.NET)" level={80} color="amber" />
                        <SkillMeter name="FLUTTER MOBILE DEVELOPMENT" level={85} color="green" />
                        <SkillMeter name="SMART CONTRACT (EVM)" level={85} color="blue" />
                        <SkillMeter name="REACT NATIVE MOBILE DEVELOPMENT" level={80} color="purple" />
                        <SkillMeter name="SOFTWARE ENGINEERING" level={85} color="red" />
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
                            <h4 className="text-lg font-bold text-red-400">SMART CONTRACT DEV (EVM)</h4>
                            <div className="text-amber-400">HYCHAN NFT HYPERLIQUID</div>
                          </div>
                          <div className="text-green-400 text-sm">2025</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">EVM</span>
                          <span className="tech-tag">HYPEEVM</span>
                          <span className="tech-tag">REACT JS</span>
                          <span className="tech-tag">NEXT JS</span>
                          <span className="tech-tag">SUPABASE</span>
                          <span className="tech-tag">VERCEL</span>
                        </div>
                      </div>

                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">FLUTTER DEVELOPER</h4>
                            <div className="text-amber-400">HOMECREDIT INDONESIA.</div>
                          </div>
                          <div className="text-green-400 text-sm">2024 - 2025</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">FLUTTER</span>
                          <span className="tech-tag">DART</span>
                          <span className="tech-tag">FIREBASE</span>
                          <span className="tech-tag">GETX</span>
                          <span className="tech-tag">FIGMA</span>
                          <span className="tech-tag">AGILE</span>
                          <span className="tech-tag">JIRA</span>
                        </div>
                      </div>

                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">REACT DEVELOPER</h4>
                            <div className="text-amber-400">HOMECREDIT INDONESIA.</div>
                          </div>
                          <div className="text-green-400 text-sm">2021 - 2024</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">HTML</span>
                          <span className="tech-tag">CSS</span>
                          <span className="tech-tag">SCSS</span>
                          <span className="tech-tag">TYPESCRIPT</span>
                          <span className="tech-tag">JAVASCRIPT</span>
                          <span className="tech-tag">REDUX</span>
                          <span className="tech-tag">REACT JS</span>
                          <span className="tech-tag">FIGMA</span>
                          <span className="tech-tag">AGILE</span>
                          <span className="tech-tag">JIRA</span>
                        </div>
                      </div>

                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">MDPST IT (FULLSTACK)</h4>
                            <div className="text-amber-400">INDOMARCO PRISMATAMA.</div>
                          </div>
                          <div className="text-green-400 text-sm">2020 - 2021</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">HTML</span>
                          <span className="tech-tag">CSS</span>
                          <span className="tech-tag">JAVASCRIPT</span>
                          <span className="tech-tag">ASP .NET</span>
                          <span className="tech-tag">MYSQL</span>
                          <span className="tech-tag">DBEAVER</span>
                        </div>
                      </div>

                      <div className="experience-item bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-red-400">IT INTERN FULLSTACK</h4>
                            <div className="text-amber-400">INDOMARCO PRISMATAMA</div>
                          </div>
                          <div className="text-green-400 text-sm">2019 - 2020</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="tech-tag">HTML</span>
                          <span className="tech-tag">CSS</span>
                          <span className="tech-tag">JAVASCRIPT</span>
                          <span className="tech-tag">ASP .NET</span>
                          <span className="tech-tag">MYSQL</span>
                          <span className="tech-tag">DBEAVER</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Projects Section */}
                <GameWindow title="COMPLETED QUESTS" id="projects" className="mt-8">
                  <div className="p-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-amber-400">MY LATEST ADVENTURES</h3>
                      <p className="text-amber-100 mt-2">CHECK OUT SOME OF MY RECENT PROJECTS</p>
                    </div>

                    <div className="grid gap-4">
                      <ProjectItem
                        title="PINTRAIL"
                        type="ICP X FETCH.AI NEXTGEN AGENTS HACKATHON"
                        description="PINTRAIL IS THE FIRST AI AGENT IN INDONESIA THAT HELPS YOU FIND THE BEST BOARDING HOUSE TO SUIT YOUR NEEDS. DISCOVER COMFORTABLE AND AFFORDABLE HOUSING WITH SMART AI-BASED RECOMMENDATIONS, ALONG WITH THE CONVENIENCE OF COMMUNICATING DIRECTLY WITH THE PROPERTY OWNER. PINTRAIL IS HERE TO TRANSFORM THE WAY YOU SEARCH FOR A PLACE TO LIVE."
                        tech={["PYTHON", "REACT JS", "NODE JS", "EXPRESS", "AGENTVERSE", "CANISTER", "ASI ONE", "ICP"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="HYCHAN"
                        type="HYPERLIQUID NFT"
                        description="AS THE LEAD SMART CONTRACT DEVELOPER, I BUILT AND DEPLOYED THE CORE CONTRACTS ON THE HYPEEVM NETWORK. I DEVELOPED THE SUPPORTING DAPP TO POWER WEB3 FUNCTIONALITIES — INCLUDING WALLET INTEGRATION, NFT MINTING, AND WALLET VERIFICATION. I SUCCESSFULLY SECURED THE END-TO-END MINTING PROCESS WITH THE DAPP AND SMART CONTRACT, EVEN UNDER HEAVY LOAD TRAFFIC."
                        tech={["HYPEEVM", "REACT JS", "NEXT JS", "SUPABASE", "VERCEL", "EVM"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="SINGLE PIN"
                        type="HOMECREDIT INDONESIA"
                        description={"I HAD THE OPPORTUNITY TO CONTRIBUTE TO THE DEVELOPMENT OF A WEB-BASED TRANSACTIONAL SINGLE PIN APP, DESIGNED FOR SEAMLESS FUNCTIONALITY ON MOBILE WEB VIEWS. MY INVOLVEMENT IN THIS PROJECT UNDERSCORED MY COMMITMENT TO EXCELLENCE AND MY ABILITY TO THRIVE IN COMPLEX WEB APPLICATION DEVELOPMENT."}
                        tech={["REACT JS", "HTML", "SCSS", "TYPESCRIPT", "JAVASCRIPT", "REDUX"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="PAYLATER ONLINE"
                        type="HOMECREDIT INDONESIA"
                        description={"I HAD THE PRIVILEGE OF MAKING SIGNIFICANT CONTRIBUTIONS TO THE CREATION OF PAYLATER ONLINE, A WEB-BASED CROSS-PLATFORM APPLICATION. THIS ENDEAVOR LEVERAGED THE POWER OF REACT JS AND FOLLOWED THE AGILE METHODOLOGY AS THE SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) MODEL. THROUGH MY EFFORTS, I PLAYED A CRUCIAL ROLE IN THE SUCCESS OF THIS INNOVATIVE PROJECT."}
                        tech={["REACT JS", "HTML", "SCSS", "TYPESCRIPT", "JAVASCRIPT", "REDUX"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="GLOBAL MOBILE APP (GMA)"
                        type="HOMECREDIT INDONESIA"
                        description="AS A FLUTTER DEVELOPER, I WORKED ON THE GLOBAL MOBILE APP (GMA), A MULTI-COUNTRY MOBILE APPLICATION BUILT USING DOMAIN-DRIVEN DESIGN (DDD) PRINCIPLES. MY PRIMARY FOCUS WAS ON THE INDONESIA APP, ENSURING THE APP ALIGNED WITH LOCAL USER BEHAVIOR, UI/UX STANDARDS, AND COMPLIANCE REQUIREMENTS."
                        tech={["FLUTTER", "GETX", "FIREBASE", "HIVE", "DART"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="ASSEMBLY WEB"
                        type="INDOMARCO PRISMATAMA"
                        description="I HAD THE PRIVILEGE OF OVERSEEING THE CONTINUOUS MAINTENANCE AND OPTIMIZATION OF A LIVE SPARE PART WAREHOUSE WEB APPLICATION, BUILT UPON THE ROBUST FOUNDATION OF ASP .NET MVC AND POWERED BY A POSTGRESQL DATABASE MANAGEMENT SYSTEM. THIS MULTIFACETED RESPONSIBILITY NECESSITATED PROFICIENCY IN VARIOUS APIS, INCLUDING KENDO UI, ENTITY FRAMEWORK, ASP.NET IDENTITY, AND ADO .NET FOR POSTGRESQL."
                        tech={["ASP.NET", "KENDO UI", "JAVASCRIPT", "ASP .NET MVC", "HTML", "CSS", "MYSQL"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="YUMMY POS APP"
                        type="INDOMARCO PRISMATAMA"
                        description="I HAD THE PRIVILEGE OF CREATING THE SUCCESSFUL DEVELOPMENT OF A POINT OF SALE (POS) SYSTEM, INTRICATELY LINKED TO A PRODUCTION WAREHOUSE PROGRAM THROUGH A WEB API FOR SEAMLESS DATA EXCHANGE. THIS COMPLEX INTEGRATION LEVERAGED SEVERAL CRITICAL APIS, INCLUDING ENTITY FRAMEWORK AND ADO .NET FOR MYSQL."
                        tech={["ADO.NET", "C#", ".NET", "MYSQL"]}
                        image="/placeholder.svg?height=100&width=160"
                      />

                      <ProjectItem
                        title="YUMMY WAREHOUSE WEB"
                        type="INDOMARCO PRISMATAMA"
                        description="I HAD THE PRIVILEGE OF MAINTAINING THE LIVE WAREHOUSE WEB PROJECT LINKED TO A POS PROGRAM THROUGH A WEB API FOR SEAMLESS DATA EXCHANGE."
                        tech={["ASP.NET", "KENDO UI", "JAVASCRIPT", "ASP .NET MVC", "HTML", "CSS", "MYSQL"]}
                        image="/placeholder.svg?height=100&width=160"
                      />
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
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-400" />
                              ))}
                            </div>
                            <p className="text-amber-100 mb-2">
                              "WORKING WITH FAKHRI WAS AMAZING! HE DELIVERED AN IDEAS AND APPLICATION THAT
                              EXCEEDED OUR EXPECTATIONS. THE ATTENTION TO DETAIL AND COMMUNICATION WAS OUTSTANDING."
                            </p>
                            <div className="text-green-400 font-bold">ANDI, PRODUCT OWNER</div>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial bg-stone-900 border-2 border-amber-800 p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-400" />
                              ))}
                            </div>
                            <p className="text-amber-100 mb-2">
                              "INCREDIBLE WORK ON OUR PINTRAIL PROJECT! FAKHRI UNDERSTOOD OUR VISION AND
                              BROUGHT IT TO LIFE WITH CLEAN CODE AND GREAT PERFORMANCE. HIGHLY RECOMMENDED!"
                            </p>
                            <div className="text-green-400 font-bold">HASBIEL, GOLANG DEVELOPER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GameWindow>

                {/* Contact Section */}
                <GameWindow title="START A NEW GAME" id="contact" className="mt-8">
                  <div className="p-4">
                    <div className="bg-stone-900 border-2 border-amber-800 p-4 w-full">
                        <h3 className="text-xl font-bold mb-4 text-amber-400">LET ME JOIN YOUR FORCES</h3>
                        <p className="mb-6 text-amber-100">
                          I'M EQUIPPED TO BRING YOUR VISION TO LIFE WITH
                          OUR UNIQUE BLEND OF RETRO AESTHETICS AND MODERN TECHNOLOGY.
                        </p>

                        <div className="stats-container border-2 border-amber-800 p-3 bg-stone-800 mb-6">
                          <div className="flex justify-between mb-2">
                            <span>EMAIL:</span>
                            <span className="text-green-400">FAKHRIPRAYA@GMAIL.COM</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span>LOCATION:</span>
                            <span>REMOTE / INDONESIA</span>
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
                </GameWindow>

                {/* Footer */}
                <footer className="mt-8 text-center p-4 border-t-2 border-amber-800">
                  <p className="text-amber-400">© 2025 DEV.QUEST BY FAKHRI - CRAFTING CODE, ONE PIXEL AT A TIME</p>
                  <div className="mt-2 text-xs text-amber-200">I'M READY FOR MY NEXT ADVENTURE!</div>
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
