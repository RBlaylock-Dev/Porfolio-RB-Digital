"use client"

import { useEffect, useState } from "react"
import { Loader } from "./loader"
import { SystemChrome } from "./system-chrome"
import { Nav } from "./nav"
import { Hero } from "./hero"
import { Marquee } from "./marquee"
import { About } from "./about"
import { Work } from "./work"
import { Stack } from "./stack"
import { Path } from "./path"
import { Contact } from "./contact"
import { PortfolioFooter } from "./footer"

interface Chapter {
  num: string
  label: string
  id: string
}

const SECTIONS: Chapter[] = [
  { id: "top", num: "00", label: "INDEX" },
  { id: "about", num: "01", label: "ABOUT" },
  { id: "work", num: "02", label: "WORK" },
  { id: "stack", num: "03", label: "STACK" },
  { id: "path", num: "04", label: "PATH" },
  { id: "contact", num: "05", label: "CONTACT" },
]

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false)
  const [chapter, setChapter] = useState<Chapter>(SECTIONS[0])

  useEffect(() => {
    if (!loaded) return
    function update() {
      const y = window.scrollY + window.innerHeight * 0.3
      let cur = SECTIONS[0]
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.offsetTop <= y) cur = s
      }
      setChapter(cur)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [loaded])

  useEffect(() => {
    if (!loaded) return
    const els = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [loaded])

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <SystemChrome chapter={chapter} />
      <Nav chapter={chapter} />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Work />
        <Stack />
        <Path />
        <Contact />
        <PortfolioFooter />
      </main>
    </>
  )
}
