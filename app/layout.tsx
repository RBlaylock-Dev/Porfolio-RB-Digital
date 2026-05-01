import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Robert Blaylock — RB Digital · v3.0",
  description:
    "Full-stack engineer specializing in Three.js, React Three Fiber, and immersive web experiences.",
  icons: {
    icon: "/images/rb-logo.png",
    apple: "/images/rb-logo.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
