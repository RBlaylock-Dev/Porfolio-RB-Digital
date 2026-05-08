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
  { id: "path", num: "02", label: "PATH" },
  { id: "work", num: "03", label: "WORK" },
  { id: "stack", num: "04", label: "STACK" },
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
    const observed = new WeakSet<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    )
    function attach(el: Element) {
      if (observed.has(el)) return
      observed.add(el)
      io.observe(el)
    }
    document.querySelectorAll(".reveal").forEach(attach)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return
          if (n.classList?.contains("reveal")) attach(n)
          n.querySelectorAll?.(".reveal").forEach(attach)
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
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
        <Path />
        <Work />
        <Stack />
        <Contact />
        <PortfolioFooter />
      </main>
    </>
  )
}
