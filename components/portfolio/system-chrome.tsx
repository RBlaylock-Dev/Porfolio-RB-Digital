"use client"

import { useEffect, useState } from "react"

interface Chapter {
  num: string
  label: string
  id: string
}

export function SystemChrome({ chapter }: { chapter: Chapter }) {
  const [pct, setPct] = useState(0)
  const [time, setTime] = useState("00:00:00")

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.round((window.scrollY / max) * 100) : 0
      setPct(p)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      const d = new Date()
      setTime(
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`,
      )
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <>
      <div className="sys sys-tl">
        <span>
          <span className="sys-bracket">[</span>
          <b>RB DIGITAL</b>
          <span className="sys-bracket">{" // v3.0]"}</span>
        </span>
        <span className="sys-bracket">— Robert Blaylock</span>
      </div>
      <div className="sys sys-tr">
        <span>
          <b>{time}</b> · CST
        </span>
        <span>
          <span className="sys-dot" />
          open to work
        </span>
      </div>
      <div className="sys sys-bl">
        <span>
          <span className="sys-bracket">[CH</span> <b>{chapter.num}</b>{" "}
          <span className="sys-bracket">{"//"}</span> <b>{chapter.label}</b>
          <span className="sys-bracket">]</span>
        </span>
        <span>
          <span className="sys-bracket">scroll</span> {String(pct).padStart(3, "0")}%
        </span>
      </div>
      <div className="sys sys-br">
        <span>
          <span className="sys-bracket">{"— counce, tn"}</span>
        </span>
        <span>
          <b>35.6N · 88.3W</b>
        </span>
      </div>
    </>
  )
}
