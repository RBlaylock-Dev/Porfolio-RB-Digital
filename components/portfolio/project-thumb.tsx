"use client"

import { useEffect, useRef } from "react"
import { makeProjectThumb, type ThumbKind } from "@/lib/scenes"

export function ProjectThumb({ kind, color }: { kind: ThumbKind; color: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = makeProjectThumb(ref.current, kind, color)
    return cleanup
  }, [kind, color])

  return <canvas ref={ref} />
}
