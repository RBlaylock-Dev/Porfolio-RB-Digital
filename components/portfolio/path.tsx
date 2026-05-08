"use client"

import { EXPERIENCE } from "@/lib/portfolio-data"

export function Path() {
  return (
    <section className="section path-section" id="path">
      <div className="rb-container">
        <div className="section-tag reveal">02 / Path · The arc that got me here</div>
        <h2 className="path-headline reveal">
          From the <em>floor</em>
          <br />
          <span className="quiet">to production AI.</span>
        </h2>
        <p className="path-lede reveal reveal-d1">
          A decade leading teams of 35+ before I ever touched code. Six years self-taught. A
          full-stack certificate from Persevere — a bootcamp for justice-impacted developers — and
          then Banyan Labs, where the same mission kept me. The story below is the version
          that&apos;s on paper. The one that matters most: I learned to ship by leading, and
          I&apos;m still leading now that I ship code.
        </p>
        <div className="path-list">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="path-row reveal">
              <div className="path-year">
                <div>{e.year}</div>
                {e.current && <div className="now">current role</div>}
              </div>
              <div className="path-body">
                <h3 className="role">
                  {e.role} <span className="at">at</span>{" "}
                  <span className="co">
                    <em>{e.company}</em>
                  </span>
                </h3>
                <ul className="bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="path-tags">
                {e.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
