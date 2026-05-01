"use client"

import type { CSSProperties } from "react"
import { STACK_CATEGORIES, type StackCategory } from "@/lib/portfolio-data"

function CategoryCard({ c }: { c: StackCategory }) {
  const style = { "--cat-accent": c.accent } as CSSProperties
  const titleParts = c.title.split(" ")
  return (
    <div className="stack-cat reveal" style={style}>
      <div className="stack-cat-head">
        <span className="stack-cat-num">{c.num}</span>
        <span className="stack-cat-line" />
        <span className="stack-cat-count">{String(c.skills.length).padStart(2, "0")} items</span>
      </div>
      <h3 className="stack-cat-title">
        <em>{titleParts[0]}</em>
        {titleParts.slice(1).length > 0 && <span> {titleParts.slice(1).join(" ")}</span>}
      </h3>
      <div className="stack-cat-chips">
        {c.skills.map((s) => (
          <span key={s} className="chip">
            <span className="chip-dot" />
            <span>{s}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Stack() {
  const totalSkills = STACK_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0)
  return (
    <section className="stack-v3" id="stack">
      <div className="rb-container">
        <header className="stack-v3-head reveal">
          <div>
            <div className="stack-v3-tag">03 / Stack · The full toolkit</div>
            <h2 className="stack-v3-title">
              Tools
              <br />
              <em>behind</em> <span className="quiet">the work.</span>
            </h2>
          </div>
          <div className="stack-v3-meta">
            <div className="stack-v3-stat">
              <div className="lbl">{"// categories"}</div>
              <div className="val">{STACK_CATEGORIES.length}</div>
            </div>
            <div className="stack-v3-stat">
              <div className="lbl">{"// technologies"}</div>
              <div className="val">{totalSkills}+</div>
            </div>
            <div className="stack-v3-stat">
              <div className="lbl">{"// daily drivers"}</div>
              <div className="val">12</div>
            </div>
            <div className="stack-v3-blurb">
              Across AI, web, mobile, and infrastructure — the tools I reach for when I&apos;m
              building, shipping, and leading.
            </div>
          </div>
        </header>

        <div className="stack-v3-grid">
          {STACK_CATEGORIES.map((c) => (
            <CategoryCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
