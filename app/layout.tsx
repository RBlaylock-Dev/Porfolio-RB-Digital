import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rblaylock.dev"),
  title: "Robert Blaylock — RB Digital · v3.0",
  description:
    "Full-stack engineer specializing in Three.js, React Three Fiber, and immersive web experiences.",
  icons: {
    icon: "/images/rb-logo.png",
    apple: "/images/rb-logo.png",
  },
  openGraph: {
    title: "Robert Blaylock — Senior Full-Stack & AI Engineer",
    description:
      "Three.js, R3F, and immersive web — production 3D, AI agents, and full-stack apps.",
    url: "https://rblaylock.dev",
    siteName: "RB Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Blaylock — Senior Full-Stack & AI Engineer",
    description:
      "Three.js, R3F, and immersive web — production 3D, AI agents, and full-stack apps.",
  },
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
