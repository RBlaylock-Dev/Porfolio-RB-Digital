import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const TO_EMAIL = process.env.RESEND_TO || "robert@rblaylock.dev"
const FROM_EMAIL = process.env.RESEND_FROM || "Portfolio <contact@rblaylock.dev>"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MSG = 5000
const MAX_FIELD = 200

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  message?: string
  _hp?: string
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 },
    )
  }

  let body: ContactPayload
  try {
    body = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 })
  }

  if (body._hp) {
    return NextResponse.json({ ok: true })
  }

  const name = (body.name || "").trim()
  const email = (body.email || "").trim()
  const subject = (body.subject || "").trim() || "Portfolio contact"
  const message = (body.message || "").trim()

  if (!name || name.length > MAX_FIELD) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 })
  }
  if (!email || !EMAIL_RE.test(email) || email.length > MAX_FIELD) {
    return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 })
  }
  if (subject.length > MAX_FIELD) {
    return NextResponse.json({ ok: false, error: "Subject is too long." }, { status: 400 })
  }
  if (!message || message.length > MAX_MSG) {
    return NextResponse.json(
      { ok: false, error: "Message is required (max 5000 chars)." },
      { status: 400 },
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const text = [
    `From: ${name} <${email}>`,
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n")

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
      <p style="margin:0 0 12px;color:#666;font-size:13px">New message from rblaylock.dev</p>
      <p style="margin:0 0 6px"><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
      <pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;margin:0">${escapeHtml(message)}</pre>
    </div>
  `

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text,
      html,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return NextResponse.json(
        { ok: false, error: "Failed to send. Try emailing me directly." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Resend exception:", err)
    return NextResponse.json(
      { ok: false, error: "Failed to send. Try emailing me directly." },
      { status: 502 },
    )
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
