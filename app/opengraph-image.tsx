import { ImageResponse } from "next/og"
import fs from "node:fs"
import path from "node:path"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Robert Blaylock — Senior Full-Stack & AI Engineer"

export default async function Image() {
  const profileBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/images/profile.png"),
  )
  const profileSrc = `data:image/png;base64,${profileBuffer.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "0 80px",
          backgroundColor: "#06080d",
          backgroundImage:
            "radial-gradient(circle at 78% 50%, rgba(93,158,255,0.18), transparent 55%), linear-gradient(135deg, #06080d 0%, #0a0d14 100%)",
          color: "#f4f3ef",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top brand bar */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 16,
            letterSpacing: 4,
            color: "#6c6e76",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#5d9eff",
                boxShadow: "0 0 16px rgba(93,158,255,0.7)",
              }}
            />
            <span>RB Digital · v3.0</span>
          </div>
          <span>rblaylock.dev</span>
        </div>

        {/* Photo */}
        <div
          style={{
            display: "flex",
            width: 380,
            height: 470,
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.18)",
            flexShrink: 0,
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <img
            src={profileSrc}
            width={380}
            height={470}
            style={{ objectFit: "cover", width: 380, height: 470 }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              color: "#5d9eff",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Portfolio 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: -3,
              marginBottom: 4,
            }}
          >
            Robert
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: -3,
              marginBottom: 36,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Blaylock
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.35,
              color: "#b8bac0",
              maxWidth: 580,
              fontWeight: 400,
            }}
          >
            Senior Full-Stack & AI Engineer — Three.js, R3F, and immersive web.
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
