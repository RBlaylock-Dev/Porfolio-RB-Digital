import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CASE_STUDIES, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies"
import type { Metadata } from "next"

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  const fullTitle = `${study.title}${study.titleEm ? ` ${study.titleEm}` : ""}`
  return {
    title: `${fullTitle} — Case Study · Robert Blaylock`,
    description: study.tagline,
    openGraph: {
      title: `${fullTitle} — Case Study`,
      description: study.tagline,
      type: "article",
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const otherStudies = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 3)

  return (
    <main className="case-page">
      <div className="rb-container">
        <Link href="/#work" className="case-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          <span>back to work</span>
        </Link>

        <div className="case-eyebrow">{study.eyebrow}</div>
        <h1 className="case-title">
          {study.title}
          {study.titleEm && (
            <>
              {" "}
              <em>{study.titleEm}</em>
            </>
          )}
        </h1>
        <p className="case-tagline">{study.tagline}</p>

        <div className="case-meta">
          {study.meta.map((m) => (
            <div key={m.label} className="case-meta-item">
              <div className="lbl">{m.label}</div>
              <div className="val">{m.value}</div>
            </div>
          ))}
        </div>

        {study.image && (
          <div className="case-hero-image">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        )}

        {study.sections.map((s, i) => (
          <section key={i} className="case-section">
            <div className="case-section-tag">{s.tag}</div>
            <h2>{s.title}</h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {s.bullets && (
              <ul className="case-bullets">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {s.stack && (
              <div className="case-stack-grid">
                {s.stack.map((cell) => (
                  <div key={cell.label} className="case-stack-cell">
                    <div className="lbl">{cell.label}</div>
                    <div className="val">{cell.value}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <div className="case-cta">
          <span className="lbl">{"// next"}</span>
          {otherStudies.map((s) => (
            <Link key={s.slug} href={`/case-studies/${s.slug}`} className="row-link">
              <span>{s.title}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
          <Link href="/#contact" className="row-link primary">
            <span>get in touch</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
