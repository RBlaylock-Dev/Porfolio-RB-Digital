"use client"

import { useState } from "react"
import Image from "next/image"
import { PROJECTS, type Project } from "@/lib/portfolio-data"
import { ProjectThumb } from "./project-thumb"

const INITIAL_VISIBLE = 10

const RATIOS = ["ratio-wide", "ratio-square", "ratio-tall", "ratio-wide"] as const

function WorkRow({ p, i }: { p: Project; i: number }) {
  const flip = i % 2 === 1
  const ratio = RATIOS[i % RATIOS.length]

  return (
    <article className={`work-row reveal ${flip ? "flip" : ""}`}>
      <div className="work-row-num">
        <span className="hash">#</span>
        <span className="n">{p.num}</span>
      </div>

      <div className={`work-row-thumb ${ratio}`}>
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="work-thumb-img"
          />
        ) : (
          <ProjectThumb kind={p.kind} color={p.color} />
        )}
        <div className="thumb-corner tl" />
        <div className="thumb-corner tr" />
        <div className="thumb-corner bl" />
        <div className="thumb-corner br" />
        {p.live && (
          <div className="thumb-meta">
            <span className="live-pill">
              <span className="pulse" />
              live
            </span>
          </div>
        )}
      </div>

      <div className="work-row-body">
        <div className="row-tag">
          <span>{`// proj_${p.num}`}</span>
          <span className="dash" />
          <span>{p.kind}</span>
        </div>
        <h3 className="row-title">{p.title}</h3>
        <p className="row-desc">{p.desc}</p>
        <div className="row-tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="row-actions">
          {p.live && (
            <a className="row-link primary" href={p.live} target="_blank" rel="noopener noreferrer">
              <span>visit live</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          )}
          {p.code && (
            <a className="row-link" href={p.code} target="_blank" rel="noopener noreferrer">
              <span>source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Work() {
  const [expanded, setExpanded] = useState(false)
  const total = PROJECTS.length
  const live = PROJECTS.filter((p) => p.live).length
  const open = PROJECTS.filter((p) => p.code).length

  const hasMore = total > INITIAL_VISIBLE
  const visibleProjects = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_VISIBLE)
  const hiddenCount = total - INITIAL_VISIBLE

  return (
    <section className="work-section-v3" id="work">
      <div className="rb-container">
        <header className="work-head reveal">
          <div>
            <div className="work-head-tag">02 / Work · Selected builds</div>
            <h2 className="work-head-title">
              {total}
              <br />
              <em>shipped</em>
              <br />
              <span className="quiet">builds.</span>
            </h2>
          </div>
          <div className="work-head-meta">
            <div className="work-head-stat">
              <div className="lbl">{"// total"}</div>
              <div className="val">{String(total).padStart(2, "0")}</div>
            </div>
            <div className="work-head-stat">
              <div className="lbl">{"// live"}</div>
              <div className="val">{String(live).padStart(2, "0")}</div>
            </div>
            <div className="work-head-stat">
              <div className="lbl">{"// open source"}</div>
              <div className="val">{String(open).padStart(2, "0")}</div>
            </div>
            <div className="work-head-blurb">
              Production 3D experiences, conversational AI agents, multi-tenant SaaS, and
              full-stack apps — scroll the spread.
            </div>
          </div>
        </header>

        <div className="work-spread">
          {visibleProjects.map((p, i) => (
            <WorkRow key={p.id} p={p} i={i} />
          ))}
        </div>

        {hasMore && (
          <div className="work-toggle-wrap reveal">
            <button
              type="button"
              className="row-link primary work-toggle"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              <span>
                {expanded ? "view less" : `view ${hiddenCount} more`}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                style={{
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
