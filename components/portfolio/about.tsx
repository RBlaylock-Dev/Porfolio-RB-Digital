"use client"

export function About() {
  return (
    <section className="section" id="about">
      <div className="rb-container">
        <div className="section-tag reveal">01 / About</div>
        <div className="about">
          <div>
            <h2 className="about-headline reveal">
              I build <em>fast</em>,
              <br />
              <span className="quiet">ship often,</span>
              <br />
              and lead the room.
            </h2>
            <div className="about-stats reveal reveal-d1">
              <div className="stat">
                <div className="num">25+</div>
                <div className="lbl">Shipped</div>
              </div>
              <div className="stat">
                <div className="num">6+</div>
                <div className="lbl">Years</div>
              </div>
              <div className="stat">
                <div className="num">35+</div>
                <div className="lbl">Led</div>
              </div>
            </div>

            <div className="about-portrait reveal reveal-d2">
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero-image.jpeg" alt="Robert Blaylock" />
              <div className="portrait-meta">
                <div className="label">{"// engineer · designer"}</div>
                <div className="name">Robert Blaylock</div>
              </div>
            </div>
          </div>

          <div className="about-copy reveal reveal-d1">
            <p>
              I&apos;m a <strong>Senior Full-Stack &amp; AI Engineer</strong> at{" "}
              <strong>Banyan Labs</strong> — a software studio that employs and mentors
              justice-impacted developers through real client work. My day job is building
              production conversational AI agents, multi-tenant SaaS platforms, and interactive
              3D web experiences. I also take on direct freelance and contract work for teams
              that want to hire me as an individual, not an agency.
            </p>
            <p>
              My toolkit spans <strong>Next.js</strong>, <strong>React</strong>,{" "}
              <strong>Go</strong>, <strong>Flutter</strong>, and <strong>Three.js</strong>, with
              a deep focus on modern LLM stacks — <em>Claude</em>, AWS Bedrock, OpenAI, MCP, and
              RAG. I&apos;ve shipped Harper (HRPR) — a multi-tenant Flutter + Go conversational
              AI; JONA — a job-search SaaS with nine production scrapers and AI skill matching;
              The Forge — a walkable R3F portfolio with an in-world Claude-powered chatbot; and
              HALO — a blockchain-anchored identity platform on Base L2.
            </p>
            <p>
              I taught myself to code about six years ago, earned my{" "}
              <em>Full-Stack Developer</em> certificate through Persevere, and joined Banyan
              Labs. Since then I&apos;ve grown into senior IC and tech-lead roles, shipping
              AI-native products end-to-end and mentoring junior engineers along the way. Before
              software, I spent a decade leading teams of 35+ and managing operations — that
              ground-floor leadership still shapes how I ship today.
            </p>
            <p>
              My faith in Christ is the foundation of how I work and why. I see software as a
              <em> craft</em> to steward well, and I&apos;m drawn to building products that serve
              the underserved — tools for justice-impacted workers, ministries, and communities
              trying to do better by their people. That conviction is why projects like HALO,
              Redeemly, Rooftop Ministries, and Banyan&apos;s mission-driven work matter to me
              beyond the code.
            </p>
            <p>
              Outside of work I&apos;m a <strong>dad</strong>, I serve in my local church, and
              I try to keep a healthy rhythm between building things and being present with the
              people I love. I care about how an interaction <em>feels</em>, how a scene reads
              at first glance, and how a codebase ages — and I love the moment when a prototype
              starts to feel <em>alive</em>.
            </p>
            <p>
              I&apos;m open to <strong>senior IC roles</strong>, contracts, and direct freelance
              engagements — short scopes, long builds, or fractional senior help, all on the
              table. If you&apos;re building something meaningful — especially in AI, 3D, or
              mission-aligned technology — let&apos;s talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
