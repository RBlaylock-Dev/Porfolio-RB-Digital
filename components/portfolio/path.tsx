"use client"

import { EXPERIENCE } from "@/lib/portfolio-data"

export function Path() {
  return (
    <section className="section path-section" id="path">
      <div className="rb-container">
        <div className="section-tag reveal">04 / Path</div>
        <h2 className="path-headline reveal">
          From the <em>floor</em>
          <br />
          <span className="quiet">to production AI.</span>
        </h2>
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
