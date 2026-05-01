"use client"

interface Chapter {
  num: string
  label: string
  id: string
}

const LINKS = [
  { num: "00", label: "Top", href: "#top", id: "top" },
  { num: "01", label: "About", href: "#about", id: "about" },
  { num: "02", label: "Work", href: "#work", id: "work" },
  { num: "03", label: "Stack", href: "#stack", id: "stack" },
  { num: "04", label: "Path", href: "#path", id: "path" },
  { num: "05", label: "Contact", href: "#contact", id: "contact" },
]

export function Nav({ chapter }: { chapter: Chapter }) {
  return (
    <nav className="nav">
      {LINKS.map((l) => (
        <a key={l.id} href={l.href} className={chapter.id === l.id ? "active" : ""}>
          <span className="num">{l.num}</span>
          <span className="label">{l.label}</span>
        </a>
      ))}
    </nav>
  )
}
