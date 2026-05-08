"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS, FEATURED_PROJECTS, type Project } from "@/lib/portfolio-data"
import { ProjectThumb } from "./project-thumb"

const INITIAL_VISIBLE = 10

const RATIOS = ["ratio-wide", "ratio-square", "ratio-tall", "ratio-wide"] as const

const FEATURED_NARRATIVE: Record<
  string,
  { problem: string; build: string; outcome: string }
> = {
  ShareXR: {
    problem:
      "Enterprise hands-on training (electrical gear, machinery) doesn't scale — in-person sessions don't reach distributed crews, and video can't let people explore.",
    build:
      "A multi-tenant WebXR training platform — Strapi 5 CMS plus a static Next.js portal, GLB/GLTF assets with EditorJS-driven hotspot annotations, signed-URL uploads to GCS, and a one-command deploy across Cloud Run + Firebase Hosting.",
    outcome:
      "Live at sharexr.app for Banyan Labs enterprise customers. Co-maintainer / production owner — shipped the Strapi 5 upgrade, CORS hardening for the production domain, and the developer onboarding guide.",
  },
  Nexara: {
    problem:
      "Banyan's intern pipeline lived across spreadsheets, Drive folders, and email threads — nothing tied applications, role assignment, curriculum, weekly reviews, time logs, document signing, and certificates together.",
    build:
      "A single Next.js 16 + Firebase platform with five user roles backed by 14KB of hardened Firestore security rules — Kanban applicant pipeline, magic-link invites, video curriculum, monthly-billing dashboard, certificate generation, and ClickUp-integrated bug reporting.",
    outcome:
      "In production, running Banyan's full intern lifecycle. Co-lead / top committer across two accounts — owning the architecture, the security model, and the deployment.",
  },
  "Derksen Buildings": {
    problem:
      "Customers buying custom storage buildings couldn't see what they were configuring before placing the order — every spec and color choice was abstract until delivery.",
    build:
      "A production Three.js configurator that lets customers spec, color, and view their building in real time, integrated into Derksen's existing PHP order flow with deploys through GitLab.",
    outcome:
      "Live at 3d.derksenbuildings.com — a real customer-facing tool inside a production order pipeline, not a demo.",
  },
}

function FeaturedCard({ p }: { p: Project }) {
  const story = FEATURED_NARRATIVE[p.title]

  return (
    <article className="featured-card reveal">
      <div className="featured-thumb">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className="work-thumb-img"
          />
        ) : (
          <ProjectThumb kind={p.kind} color={p.color} />
        )}
        <div className="thumb-corner tl" />
        <div className="thumb-corner tr" />
        <div className="thumb-corner bl" />
        <div className="thumb-corner br" />
      </div>
      <div className="featured-body">
        <div className="row-tag">
          <span>{`// featured_${p.num}`}</span>
          <span className="dash" />
          <span>{p.tags[0]}</span>
        </div>
        <h3 className="featured-title">{p.title}</h3>
        {story && (
          <dl className="featured-story">
            <div>
              <dt>Problem</dt>
              <dd>{story.problem}</dd>
            </div>
            <div>
              <dt>Build</dt>
              <dd>{story.build}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{story.outcome}</dd>
            </div>
          </dl>
        )}
        <div className="row-tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="row-actions">
          {p.caseStudy && (
            <Link className="row-link primary" href={p.caseStudy}>
              <span>read case study</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}
          {p.live && (
            <a className="row-link" href={p.live} target="_blank" rel="noopener noreferrer">
              <span>visit live</span>
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
        {p.caseStudy && !p.live && (
          <div className="thumb-meta">
            <span className="case-pill">case study</span>
          </div>
        )}
      </div>

      <div className="work-row-body">
        <div className="row-tag">
          <span>{`// proj_${p.num}`}</span>
          <span className="dash" />
          <span>{p.tags[0]}</span>
        </div>
        <h3 className="row-title">{p.title}</h3>
        <p className="row-desc">{p.desc}</p>
        <div className="row-tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="row-actions">
          {p.caseStudy && (
            <Link className="row-link primary" href={p.caseStudy}>
              <span>read case study</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}
          {p.live && (
            <a className="row-link" href={p.live} target="_blank" rel="noopener noreferrer">
              <span>visit live</span>
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

  const restProjects = PROJECTS.filter((p) => !p.featured)
  const hasMore = restProjects.length > INITIAL_VISIBLE
  const visibleRest = expanded ? restProjects : restProjects.slice(0, INITIAL_VISIBLE)
  const hiddenCount = restProjects.length - INITIAL_VISIBLE

  useEffect(() => {
    if (!expanded) return
    requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>(".work-spread .reveal")
        .forEach((el) => el.classList.add("visible"))
    })
  }, [expanded])

  return (
    <section className="work-section-v3" id="work">
      <div className="rb-container">
        <header className="work-head reveal">
          <div>
            <div className="work-head-tag">03 / Work · What I&apos;ve shipped — and why</div>
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
              Three featured builds — a multi-tenant WebXR training platform, the system
              running Banyan&apos;s full intern lifecycle, and a production 3D configurator
              inside a real customer order flow. The full spread follows.
            </div>
          </div>
        </header>

        <div className="featured-band reveal">
          <span className="featured-band-tag">{"// featured · top three"}</span>
          <span className="featured-band-line" />
        </div>
        <div className="featured-grid">
          {FEATURED_PROJECTS.map((p) => (
            <FeaturedCard key={p.id} p={p} />
          ))}
        </div>

        <div className="work-divider reveal">
          <span>{"// the rest of the spread"}</span>
        </div>

        <div className="work-spread">
          {visibleRest.map((p, i) => (
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
