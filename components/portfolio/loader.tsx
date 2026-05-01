"use client"

import { useEffect, useState } from "react"

export function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const startT = performance.now()
    const total = 1400
    let raf: number
    function tick(now: number) {
      const e = Math.min((now - startT) / total, 1)
      setPct(Math.floor(e * 100))
      if (e < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const fallback = window.setTimeout(() => {
      setPct(100)
      setGone(true)
      window.setTimeout(onDone, 600)
    }, total + 400)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(fallback)
    }
  }, [onDone])

  return (
    <div className={`loader ${gone ? "gone" : ""}`}>
      <div className="loader-grid" />
      <div className="loader-inner">
        <div className="loader-tag">[ RB Digital · v3.0 · booting ]</div>
        <div className="loader-num">
          {String(pct).padStart(2, "0")}
          <span className="pct">%</span>
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: pct + "%" }} />
        </div>
        <div className="loader-row">
          <span>
            <b>SYS</b> · ready
          </span>
          <span>
            <b>NODE</b> · 3D engine
          </span>
          <span>
            <b>NET</b> · online
          </span>
        </div>
      </div>
    </div>
  )
}
