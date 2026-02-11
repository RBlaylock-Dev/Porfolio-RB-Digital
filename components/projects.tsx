"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectsProps {
  showAll?: boolean
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects: Project[] = [
    {
      id: 1,
      title: "3D Building Configurator",
      description:
        "A production 3D configurator for Derksen Buildings allowing customers to customize and visualize buildings in real-time",
      image: "/images/3d-configurator.jpg",
      tags: ["Three.js", "PHP", "GitLab", "3D Modeling", "Production"],
      githubUrl: "https://gitlab.com", // Since it's a private GitLab repo
      liveUrl: "https://3d.derksenbuildings.com/neworder",
    },
    {
      id: 2,
      title: "Product Page",
      description: "A React based product page website with login page",
      image: "/images/product-page.png",
      tags: ["React", "MUI", "HTML", "CSS"],
      githubUrl: "https://github.com/RBlaylock-Dev/TheFinals",
      liveUrl: "https://the-finals.vercel.app/",
    },
    {
      id: 3,
      title: "ToDo List Web App",
      description: "A full stack to do list application with user authentication and secure login system",
      image: "/images/todo-login.png",
      tags: ["React", "Node.js", "Bcrypt", "MongoDB", "Express"],
      githubUrl: "https://github.com/RBlaylock-Dev/BackendFinals",
      liveUrl: "https://backend-finals-ten.vercel.app/",
    },
    {
      id: 4,
      title: "BlackJack",
      description: "An interactive blackjack game with a casino-style interface built with JavaScript",
      image: "/images/blackjack-game.png",
      tags: ["HTML", "JavaScript", "CSS"],
      githubUrl: "https://github.com/RBlaylock-Dev/Blackjack",
      liveUrl: "https://blackjack-pi-one.vercel.app/",
    },
    {
      id: 5,
      title: "People Counter",
      description: "A simple people counter app with increment and save functionality for tracking entries",
      image: "/images/people-counter.png",
      tags: ["HTML", "JavaScript", "CSS"],
      githubUrl: "https://github.com/RBlaylock-Dev/PeopleCounter",
      liveUrl: "https://people-counter-mu-six.vercel.app/",
    },
    {
      id: 6,
      title: "ShoeStyle Landing Page",
      description: "A modern, responsive landing page for a premium shoe store with product showcase",
      image: "/images/shoestyle-landing.png",
      tags: ["React", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/rhiggins-banyanlabs/OJT-Practice-Project",
      liveUrl: "https://ojt-practice-project.vercel.app/",
    },
    {
      id: 7,
      title: "Team Directory",
      description: "A Team Directory web application with search and filtering capabilities",
      image: "/images/team-directory.png",
      tags: ["Next.js", "Node.js", "TailwindCSS", "Reusable Components"],
      githubUrl: "https://github.com/rblaylock-banyanlabs/OJT-Team-Directory",
      liveUrl: "https://team-directory-app1.vercel.app/",
    },
    {
      id: 8,
      title: "Rooftop Ministries Website",
      description: "A professional ministry website with clean design, custom branding, and full domain setup",
      image: "/images/rooftop-ministries.png",
      tags: ["Next.js", "TailwindCSS", "Email Setup", "Domain Setup", "DNS Configuration"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://www.rooftopministries.org",
    },
    {
      id: 9,
      title: "Marble Race Game",
      description: "An interactive 3D marble racing game with realistic physics, timer, and colorful obstacle course",
      image: "/images/marble-race.png",
      tags: ["Three.js", "JavaScript", "WebGL", "Physics", "Game Development"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://marble-game-delta.vercel.app",
    },
    {
      id: 10,
      title: "Fun Simple Portfolio",
      description: "A creative 3D portfolio showcase featuring a laptop display with modern design and typography",
      image: "/images/fun-simple-portfolio.png",
      tags: ["Three.js", "React", "3D Modeling", "Portfolio", "Design"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://fun-simple-portfolio.vercel.app",
    },
    {
      id: 11,
      title: "Portal Scene",
      description: "A mystical 3D portal scene with glowing effects, geometric structures, and starfield background",
      image: "/images/portal-scene.png",
      tags: ["React Three Fiber", "Three.js", "GLSL", "Shaders", "3D Scene"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://portal-scene-r3-f.vercel.app",
    },
    {
      id: 12,
      title: "Earth Shaders",
      description:
        "A stunning 3D Earth visualization with realistic continents, atmospheric effects, and day/night cycles",
      image: "/images/earth-shaders.png",
      tags: ["Three.js", "GLSL", "Shaders", "WebGL", "Earth Visualization"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://earth-shaders-kappa.vercel.app",
    },
    {
      id: 13,
      title: "Fireworks Display",
      description:
        "An interactive fireworks particle system with customizable parameters and colorful explosive effects",
      image: "/images/fireworks.png",
      tags: ["Three.js", "Particles", "Animation", "WebGL", "Interactive"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://fireworks-delta-fawn.vercel.app",
    },
    {
      id: 14,
      title: "Galaxy Generator",
      description: "A procedural spiral galaxy generator with customizable parameters and beautiful particle effects",
      image: "/images/galaxy-generator.png",
      tags: ["Three.js", "Procedural Generation", "Particles", "Space", "WebGL"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://galaxy-generator-iota-liard.vercel.app",
    },
    {
      id: 15,
      title: "Haunted House",
      description: "A spooky 3D haunted house scene with atmospheric fog, eerie lighting, and interactive controls",
      image: "/images/haunted-house.png",
      tags: ["Three.js", "3D Modeling", "Lighting", "Atmosphere", "Interactive"],
      githubUrl: "https://github.com/rblaylock-dev",
      liveUrl: "https://haunted-house-3-js-tau.vercel.app",
    },
    {
      id: 16,
      title: "UpCurve",
      description: "A donation platform that allows users to donate to non-profits",
      image: "/images/Upcurve.png",
      tags: ["Next.js", "Stripe", "Supabase", "Sendgrid", "Donation Platform"],
      githubUrl: "https://github.com/", //Since its private repo I cant share the link
      liveUrl: "https://upcurve.life",
    },
    {
      id: 17,
      title: "ShareXR",
      description: "An immersive 3D platform that provides companies a way to provide virtual training to their employees",
      image: "/images/ShareXR.png",
      tags: ["Three.js", "3D Modeling", "Strapi", "Firebase", "Interactive"],
      githubUrl: "https://github.com/", // Since it is private and I can't share the link
      liveUrl: "https://sharexr.app",
    },
    {
      id: 18,
      title: "Stor-It",
      description: "A storage platform that allows users to store their files in the cloud.",
      image: "/images/Stor-it.png",
      tags: ["Next.js", "Appwrite", "File-Uploads", "DevOps", "OTP"],
      githubUrl: "https://github.com/rblaylock-dev", // Since it is private and I can't share the link
      liveUrl: "https://stor-it-alpha.vercel.app",
    },
    {
      id: 19,
      title: "Redeemly",
      description: "A social platform for ministries to connect with their members.",
      image: "/images/Redeemly.png",
      tags: ["Next.js", "Social", "Realtime Chat", "DevOps", "Ministry"],
      githubUrl: "https://github.com/rblaylock-dev", // Since it is private and I can't share the link
      liveUrl: "https://redeemly-startup.vercel.app",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || showAll) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const itemsPerView = getItemsPerView()
        const maxIndex = Math.max(0, projects.length - itemsPerView)
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, showAll, projects.length])

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const nextSlide = () => {
    setIsAutoPlaying(false)
    const itemsPerView = getItemsPerView()
    const maxIndex = Math.max(0, projects.length - itemsPerView)
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    const itemsPerView = getItemsPerView()
    const maxIndex = Math.max(0, projects.length - itemsPerView)
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  // Show all projects in grid layout for projects page
  if (showAll) {
    return (
      <section id="projects" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Carousel layout for home page
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / getItemsPerView())}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <Card className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-lg z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-lg z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / getItemsPerView()) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
