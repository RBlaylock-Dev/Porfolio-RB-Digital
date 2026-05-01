"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________"

interface Options {
  duration?: number
  autoStart?: boolean
  delay?: number
}

export function useScramble(targetText: string, opts: Options = {}) {
  const { duration = 900, autoStart = true, delay = 0 } = opts
  const [text, setText] = useState(targetText)
  const rafRef = useRef<number | null>(null)

  const run = useCallback(
    (target: string) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const startTime = performance.now()
      const totalLen = target.length

      function tick(now: number) {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const revealed = Math.floor(progress * totalLen)
        let out = ""
        for (let i = 0; i < totalLen; i++) {
          if (i < revealed) {
            out += target[i]
          } else if (target[i] === " " || target[i] === "\n") {
            out += target[i]
          } else {
            out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          }
        }
        setText(out)
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
        else setText(target)
      }
      rafRef.current = requestAnimationFrame(tick)
    },
    [duration],
  )

  useEffect(() => {
    if (!autoStart) return
    const id = window.setTimeout(() => run(targetText), delay)
    return () => {
      window.clearTimeout(id)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [targetText, autoStart, delay, run])

  return { text, run }
}
