"use client"

import { useEffect, useRef } from "react"
import { initHeroScene } from "@/lib/scenes"
import { useScramble } from "@/lib/use-scramble"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const cleanup = initHeroScene(canvasRef.current)
    return cleanup
  }, [])

  const a = useScramble("ROBERT", { duration: 700, delay: 100 })
  const b = useScramble("BLAYLOCK", { duration: 1100, delay: 250 })

  return (
    <section className="hero" id="top">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-grid" />
      <div className="rb-container hero-inner">
        <div className="hero-eyebrow reveal visible">
          <span className="live-dot" />
          <span>
            <b>PORTFOLIO 2026</b> {"// v3.0 — three.js edition"}
          </span>
        </div>

        <h1 className="hero-title">
          <span className="row">
            <span className="scramble">{a.text}</span>
          </span>
          <span className="row">
            <em className="scramble">{b.text}</em>
          </span>
          <span className="row" style={{ lineHeight: 1.4 }}>
            <span className="small">— builds things on the open web.</span>
          </span>
        </h1>

        <div className="hero-meta">
          <div className="hero-meta-block">
            <span>{"// role"}</span>
            <b>Senior Full-Stack & AI Engineer</b>
          </div>
          <div className="hero-meta-block lede">
            Specialist in <strong>Three.js</strong>, <strong>R3F</strong>, and immersive web — shipping
            production 3D, leading projects, and turning ambitious ideas into shippable software.
            <div className="hero-cta-row" style={{ justifyContent: "center" }}>
              <a href="#work" className="btn btn-primary">
                <span>Selected work</span>
                <svg
                  className="arr"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#contact" className="btn">
                <span>Get in touch</span>
              </a>
            </div>
          </div>
          <div className="hero-meta-block" style={{ textAlign: "right" }}>
            <span>{"// since"}</span>
            <b>2019 — building</b>
          </div>
        </div>
      </div>
    </section>
  )
}
