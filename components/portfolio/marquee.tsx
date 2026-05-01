"use client"

const ITEMS = [
  "three.js",
  "react three fiber",
  "glsl shaders",
  "next.js",
  "typescript",
  "react",
  "node.js",
  "supabase",
  "tailwind",
  "claude",
  "go",
  "flutter",
  "docker",
  "postgres",
  "firebase",
]

export function Marquee() {
  const renderRow = (keyPrefix: string) =>
    ITEMS.flatMap((t, i) => [
      <span key={`${keyPrefix}-i-${i}`}>{t}</span>,
      <span key={`${keyPrefix}-s-${i}`} className="sep">
        ◆
      </span>,
    ])
  return (
    <div className="marquee">
      <div className="marquee-track">
        {renderRow("a")}
        {renderRow("b")}
      </div>
    </div>
  )
}
