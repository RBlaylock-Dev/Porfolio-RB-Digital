"use client"

import { useEffect, useRef } from "react"

export default function DevBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      char: string
      color: string
    }> = []

    // Code characters for matrix effect
    const codeChars = [
      "0",
      "1",
      "{",
      "}",
      "(",
      ")",
      "[",
      "]",
      "<",
      ">",
      "/",
      "\\",
      "=",
      "+",
      "-",
      "*",
      "&",
      "|",
      "^",
      "%",
      "$",
      "#",
      "@",
      "!",
      "function",
      "const",
      "let",
      "var",
      "if",
      "else",
      "for",
      "while",
      "class",
      "import",
      "export",
      "return",
      "async",
      "await",
    ]

    // Colors for different elements
    const colors = [
      "#dc2626", // crimson
      "#3b82f6", // blue
      "#10b981", // emerald
      "#f59e0b", // amber
      "#8b5cf6", // violet
      "#06b6d4", // cyan
    ]

    // Create particles
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle())
    }

    // Floating code snippets
    const codeSnippets = [
      "const dev = 'awesome'",
      "function() { return true; }",
      "npm install happiness",
      "git commit -m 'magic'",
      "console.log('hello world')",
      "React.useState()",
      "Three.js rocks!",
      "async/await",
      "{ ...spread }",
      "=> arrow functions",
      "TypeScript ftw",
      "Next.js 15",
    ]

    const floatingTexts: Array<{
      text: string
      x: number
      y: number
      vx: number
      vy: number
      opacity: number
      size: number
      color: string
    }> = []

    // Create floating texts
    for (let i = 0; i < 8; i++) {
      floatingTexts.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 8 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.font = `${particle.size * 4}px 'Courier New', monospace`
        ctx.fillText(particle.char, particle.x, particle.y)
        ctx.restore()

        // Occasionally change character
        if (Math.random() < 0.01) {
          particle.char = codeChars[Math.floor(Math.random() * codeChars.length)]
        }
      })

      // Update and draw floating texts
      floatingTexts.forEach((text) => {
        // Update position
        text.x += text.vx
        text.y += text.vy

        // Wrap around edges
        if (text.x < -200) text.x = canvas.width + 200
        if (text.x > canvas.width + 200) text.x = -200
        if (text.y < -50) text.y = canvas.height + 50
        if (text.y > canvas.height + 50) text.y = -50

        // Draw text
        ctx.save()
        ctx.globalAlpha = text.opacity
        ctx.fillStyle = text.color
        ctx.font = `${text.size}px 'Courier New', monospace`
        ctx.fillText(text.text, text.x, text.y)
        ctx.restore()
      })

      // Draw connections between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1
            ctx.strokeStyle = "#3b82f6"
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        opacity: 0.8,
      }}
    />
  )
}
