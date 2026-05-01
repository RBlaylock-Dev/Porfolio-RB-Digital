"use client"

import { useEffect, useRef, useState } from "react"
import { initContactScene } from "@/lib/scenes"

export function Contact() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [data, setData] = useState({ name: "", email: "", subject: "", message: "" })

  useEffect(() => {
    if (!canvasRef.current) return
    const cleanup = initContactScene(canvasRef.current)
    return cleanup
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:robert@rblaylock.dev?subject=${encodeURIComponent(
      data.subject || "Hello Robert",
    )}&body=${encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`)}`
  }

  return (
    <section className="contact" id="contact">
      <canvas ref={canvasRef} className="contact-canvas" />
      <div className="rb-container contact-inner">
        <div className="section-tag reveal">05 / Contact</div>
        <h2 className="contact-headline reveal">
          Got a build
          <br />
          <em>in mind?</em> <span className="grad">Let&apos;s ship it.</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-info-row">
              <span className="lbl">Email</span>
              <span className="val">
                <a href="mailto:robert@rblaylock.dev">robert@rblaylock.dev</a>
              </span>
            </div>
            <div className="contact-info-row">
              <span className="lbl">Phone</span>
              <span className="val">
                <a href="tel:+17313008706">+1 (731) 300-8706</a>
              </span>
            </div>
            <div className="contact-info-row">
              <span className="lbl">Based</span>
              <span className="val">Counce, TN</span>
            </div>
            <div className="contact-info-row">
              <span className="lbl">Status</span>
              <span className="val" style={{ color: "#8fd693" }}>
                ● Open to work
              </span>
            </div>
            <div className="socials">
              <a
                href="https://github.com/RBlaylock-Dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.84c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85V21c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rblaylock286/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.77c1.4-2.59 7-2.78 7 2.48v6.75z" />
                </svg>
              </a>
              <a href="mailto:robert@rblaylock.dev" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </a>
            </div>
          </div>

          <form className="contact-form reveal reveal-d1" onSubmit={onSubmit}>
            <div className="field">
              <label>{"// name"}</label>
              <input name="name" value={data.name} onChange={onChange} required />
            </div>
            <div className="field">
              <label>{"// email"}</label>
              <input name="email" type="email" value={data.email} onChange={onChange} required />
            </div>
            <div className="field">
              <label>{"// subject"}</label>
              <input name="subject" value={data.subject} onChange={onChange} />
            </div>
            <div className="field">
              <label>{"// message"}</label>
              <textarea name="message" value={data.message} onChange={onChange} required />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              <span>Send message</span>
              <svg
                className="arr"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
