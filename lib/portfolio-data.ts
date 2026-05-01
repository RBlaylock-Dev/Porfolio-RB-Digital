import type { ThumbKind } from "@/lib/scenes"

export interface Project {
  id: number
  title: string
  desc: string
  tags: string[]
  live?: string
  code?: string
  image?: string
  kind: ThumbKind
  color: string
  num: string
}

const PALETTE = ["#5d9eff", "#8fc4ff", "#6aa9f5", "#4a90e2"]

function pickKind(tags: string[]): ThumbKind {
  const t = tags.join(" ").toLowerCase()
  if (t.includes("particle") || t.includes("firework")) return "particles"
  if (t.includes("galaxy") || t.includes("procedural")) return "galaxy"
  if (t.includes("torus") || t.includes("knot") || t.includes("marble") || t.includes("game")) return "torus"
  if (t.includes("portal") || t.includes("haunted") || t.includes("scene") || t.includes("cms")) return "cube"
  if (t.includes("three") || t.includes("shader") || t.includes("glsl") || t.includes("3d") || t.includes("webgl"))
    return "sphere"
  return "sphere"
}

const RAW_PROJECTS: Omit<Project, "kind" | "color" | "num">[] = [
  {
    id: 1,
    title: "3D Building Configurator",
    desc: "A production 3D configurator for Derksen Buildings, letting customers customize and visualize buildings in real time.",
    tags: ["Three.js", "PHP", "GitLab", "Production"],
    live: "https://3d.derksenbuildings.com/neworder",
    image: "/images/3d-configurator.jpg",
  },
  {
    id: 2,
    title: "The Forge",
    desc: "A first-person walkable 3D portfolio site — five themed zones in a single R3F scene with custom GLSL shaders, an in-world Claude-powered chatbot, and a dynamic resume PDF generator.",
    tags: ["Next.js 14", "React Three Fiber", "GLSL", "Claude API"],
    live: "https://www.rblaylock.dev",
    code: "https://github.com/rblaylock-dev",
    image: "/images/The-FOrge.png",
  },
  {
    id: 3,
    title: "Harper (HRPR)",
    desc: "A multi-tenant conversational AI assistant — Flutter mobile/web client, Go BFF, AWS Bedrock + multi-provider TTS, and an embeddable widget that auto-themes to any host site.",
    tags: ["Flutter", "Go", "AWS Bedrock", "ElevenLabs"],
    image: "/images/HRPR.png",
  },
  {
    id: 4,
    title: "JONA",
    desc: "A multi-tenant job-search SaaS that scrapes nine job boards on a schedule and uses AI skill-matching to rank roles against a user's resume.",
    tags: ["Next.js 14", "FastAPI", "Playwright", "Stripe"],
    image: "/images/JONA.png",
  },
  {
    id: 5,
    title: "Banyan Onboarding Portal",
    desc: "Internal Banyan Labs platform for the full OJT lifecycle — applicant pipeline, role-based access, video curriculum, weekly reviews, time tracking, document signing, and certificate generation.",
    tags: ["Next.js 16", "Firebase", "Firestore", "TypeScript"],
    image: "/images/Banyan-Onboarding-Portal.png",
  },
  {
    id: 6,
    title: "Banyan Labs Website",
    desc: "Public marketing site for Banyan Labs — Payload CMS-powered blog, MDX role-based recruiting pages, product showcase, and lead capture into SendGrid + Mailchimp.",
    tags: ["Next.js 16", "Payload CMS", "PostgreSQL", "Cloud SQL"],
    live: "https://banyanlabs.io",
    image: "/images/Banyan-Website.png",
  },
  {
    id: 7,
    title: "HALO Platform",
    desc: "A blockchain-anchored professional identity platform giving justice-impacted workers a verifiable, portable career record they own — endorsements, organization invites, and on-chain trust anchored to Base L2.",
    tags: ["Next.js 16", "Firebase", "Base L2", "Tailwind 4"],
    image: "/images/Halo.png",
  },
  {
    id: 8,
    title: "Marble Race",
    desc: "Interactive 3D marble racing game with realistic physics, timer, and a colorful obstacle course.",
    tags: ["Three.js", "JavaScript", "Physics", "WebGL"],
    live: "https://marble-game-delta.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/marble-race.png",
  },
  {
    id: 9,
    title: "Galaxy Generator",
    desc: "Procedural spiral galaxy with customizable parameters and additive particle blending.",
    tags: ["Three.js", "Particles", "Procedural"],
    live: "https://galaxy-generator-iota-liard.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/galaxy-generator.png",
  },
  {
    id: 10,
    title: "Earth Shaders",
    desc: "3D Earth visualization with realistic continents, atmospheric scattering and day/night cycles.",
    tags: ["GLSL", "Shaders", "WebGL"],
    live: "https://earth-shaders-kappa.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/earth-shaders.png",
  },
  {
    id: 11,
    title: "Portal Scene",
    desc: "Mystical 3D portal with glowing effects, geometric structures, and a starfield background.",
    tags: ["R3F", "GLSL", "Shaders"],
    live: "https://portal-scene-r3-f.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/portal-scene.png",
  },
  {
    id: 12,
    title: "Fireworks Display",
    desc: "Interactive fireworks particle system with customizable parameters and explosive effects.",
    tags: ["Three.js", "Particles", "Interactive"],
    live: "https://fireworks-delta-fawn.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/fireworks.png",
  },
  {
    id: 13,
    title: "Haunted House",
    desc: "Spooky 3D scene with atmospheric fog, eerie lighting, and interactive controls.",
    tags: ["Three.js", "Lighting", "Atmosphere"],
    live: "https://haunted-house-3-js-tau.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/haunted-house.png",
  },
  {
    id: 14,
    title: "ShareXR",
    desc: "Immersive 3D platform giving companies a way to deliver virtual training to employees.",
    tags: ["Three.js", "Strapi", "Firebase", "3D"],
    live: "https://sharexr.app",
    image: "/images/ShareXR.png",
  },
  {
    id: 15,
    title: "UpCurve",
    desc: "Donation platform allowing users to give to non-profits with Stripe + Sendgrid.",
    tags: ["Next.js", "Stripe", "Supabase", "Sendgrid"],
    live: "https://upcurve.life",
    image: "/images/Upcurve.png",
  },
  {
    id: 16,
    title: "Stor-It",
    desc: "Cloud storage platform with file uploads, OTP auth, and DevOps pipeline.",
    tags: ["Next.js", "Appwrite", "DevOps", "OTP"],
    live: "https://stor-it-alpha.vercel.app",
    code: "https://github.com/rblaylock-dev",
    image: "/images/Stor-it.png",
  },
  {
    id: 17,
    title: "Redeemly",
    desc: "Social platform for ministries to connect with their members in real time.",
    tags: ["Next.js", "Realtime Chat", "Social"],
    live: "https://redeemly-startup.vercel.app",
    image: "/images/Redeemly.png",
  },
  {
    id: 18,
    title: "Rooftop Ministries",
    desc: "Professional ministry website with custom branding, full domain + DNS setup.",
    tags: ["Next.js", "Tailwind", "DNS", "Domain"],
    live: "https://www.rooftopministries.org",
    code: "https://github.com/rblaylock-dev",
    image: "/images/rooftop-ministries.png",
  },
  {
    id: 19,
    title: "Hook Line and Savannah",
    desc: "A mobile-first event discovery platform for Savannah, TN — public calendar with category filtering, admin CRUD, and Firestore-rules-enforced role-based access.",
    tags: ["Next.js 16", "Firebase", "Firestore", "shadcn/ui"],
    code: "https://github.com/RBlaylock-Dev/sav-community-hub",
    image: "/images/hls.png",
  },
  {
    id: 20,
    title: "Assessments.com Rebuild",
    desc: "A modern, statically-rendered rebuild of Assessments.com that preserves every legacy URL and SEO surface while replacing the underlying stack.",
    tags: ["Next.js 16", "React 19", "Tailwind 4", "Static Export"],
    image: "/images/Assessments.png",
  },
  {
    id: 21,
    title: "Team Directory",
    desc: "Team directory web app with search and filter, built from reusable components.",
    tags: ["Next.js", "Node", "Tailwind"],
    live: "https://team-directory-app1.vercel.app/",
    code: "https://github.com/rblaylock-banyanlabs/OJT-Team-Directory",
    image: "/images/team-directory.png",
  },
  {
    id: 22,
    title: "Persevere Website",
    desc: "Redesigned and rebuilt the Persevere website on WordPress — the nonprofit coding bootcamp where I earned my Full-Stack Developer certificate.",
    tags: ["WordPress", "Web Design", "Nonprofit"],
    image: "/images/Persevere.png",
  },
  {
    id: 23,
    title: "ToDo List App",
    desc: "Full-stack to-do app with auth, secure login, and Mongo persistence.",
    tags: ["React", "Node", "MongoDB", "Bcrypt"],
    live: "https://backend-finals-ten.vercel.app/",
    code: "https://github.com/RBlaylock-Dev/BackendFinals",
    image: "/images/todo-login.png",
  },
  {
    id: 24,
    title: "Product Page · TheFinals",
    desc: "React-based product page with login, MUI, and a clean responsive layout.",
    tags: ["React", "MUI", "HTML", "CSS"],
    live: "https://the-finals.vercel.app/",
    code: "https://github.com/RBlaylock-Dev/TheFinals",
    image: "/images/product-page.png",
  },
  {
    id: 25,
    title: "BlackJack",
    desc: "Interactive blackjack game with a casino-style interface, vanilla JS.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://blackjack-pi-one.vercel.app/",
    code: "https://github.com/RBlaylock-Dev/Blackjack",
    image: "/images/blackjack-game.png",
  },
]

export const PROJECTS: Project[] = RAW_PROJECTS.map((p, idx) => ({
  ...p,
  num: String(idx + 1).padStart(2, "0"),
  kind: pickKind(p.tags),
  color: PALETTE[idx % PALETTE.length],
}))

export interface StackCategory {
  num: string
  title: string
  accent: string
  skills: string[]
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    num: "01",
    title: "AI & LLMs",
    accent: "#a78bfa",
    skills: [
      "LLM Integration",
      "AI Agents",
      "Conversational AI",
      "RAG",
      "MCP",
      "Embeddings",
      "Prompt Engineering",
      "Streaming Responses",
      "Claude",
      "Anthropic SDK",
      "OpenAI",
      "AWS Bedrock",
      "ElevenLabs",
      "Hugging Face",
    ],
  },
  {
    num: "02",
    title: "Languages",
    accent: "#5d9eff",
    skills: ["TypeScript", "JavaScript", "Go", "Python", "Dart", "GLSL", "SQL", "PHP", "HTML5", "CSS3", "Markdown"],
  },
  {
    num: "03",
    title: "Frontend & 3D",
    accent: "#22d3ee",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "MDX",
      "React Router",
      "Three.js",
      "React Three Fiber",
      "GLSL Shaders",
      "WebGL",
    ],
  },
  {
    num: "04",
    title: "Mobile",
    accent: "#f472b6",
    skills: ["Flutter", "Riverpod", "go_router", "Material 3"],
  },
  {
    num: "05",
    title: "Backend & APIs",
    accent: "#34d399",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Strapi",
      "Payload CMS",
      "WordPress",
      "GraphQL",
      "gRPC",
      "REST APIs",
      "WebSockets",
      "Webhooks",
      "Microservices",
    ],
  },
  {
    num: "06",
    title: "Databases",
    accent: "#fbbf24",
    skills: ["PostgreSQL", "MongoDB", "Firestore", "Supabase", "Redis", "Appwrite", "Drizzle ORM", "Mongoose"],
  },
  {
    num: "07",
    title: "Cloud & DevOps",
    accent: "#7dd3fc",
    skills: [
      "Firebase App Hosting",
      "Google Cloud",
      "Cloud Run",
      "Cloud SQL",
      "AWS",
      "Vercel",
      "Railway",
      "Cloudflare",
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "GitHub Actions",
      "GitHub",
      "Git",
    ],
  },
  {
    num: "08",
    title: "Auth & Services",
    accent: "#fb7185",
    skills: ["Stripe", "Clerk", "JWT", "OAuth 2.0", "SendGrid", "Resend", "Mailchimp"],
  },
  {
    num: "09",
    title: "Tools",
    accent: "#c084fc",
    skills: ["ClickUp", "Figma", "Notion", "Postman", "Playwright", "Jest", "ESLint", "Prettier"],
  },
]

export interface ExperienceEntry {
  year: string
  current?: boolean
  role: string
  company: string
  bullets: string[]
  skills: string[]
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    year: "2025 — Now",
    current: true,
    role: "Senior Full-Stack & AI Engineer",
    company: "Banyan Labs",
    bullets: [
      "Designed and shipped Harper (HRPR) — production conversational AI on Flutter + Go + AWS Bedrock with MCP-driven tool routing and multi-provider TTS.",
      "Built multi-provider LLM orchestration — streaming Claude, OpenAI, Anthropic, Bedrock, and Groq routing with sentence-transformer embeddings and AI resume↔job matching.",
      "Engineered JONA, a multi-tenant job-aggregation SaaS — nine production scrapers, Stripe-billed tiers, and Supabase RLS-scoped tenancy.",
      "Built first-person 3D web with Three.js, React Three Fiber, and custom GLSL shaders — including a walkable portfolio with a Claude-powered Forge Spirit chatbot.",
      "Tech-led cross-functional teams, authored engineering standards, and hardened production systems.",
    ],
    skills: [
      "Claude API",
      "AWS Bedrock",
      "Three.js",
      "R3F",
      "Next.js 16",
      "Flutter",
      "Go",
      "FastAPI",
      "Firebase",
      "PostgreSQL",
    ],
  },
  {
    year: "2022 — 2025",
    role: "Receptionist",
    company: "The Animal Hospital",
    bullets: [
      "Facilitated client-staff interactions and managed scheduling with precision.",
      "Resolved client issues promptly and adapted to new office software quickly.",
    ],
    skills: ["Customer Service", "Scheduling", "Problem Solving"],
  },
  {
    year: "2017 — 2022",
    role: "Team Lead / Project Manager",
    company: "National Retail Solutions",
    bullets: [
      "Led teams of 35+ across production lines and shipping targets.",
      "Streamlined processes to boost productivity and analyzed data to inform decisions.",
    ],
    skills: ["Leadership", "PM", "Process", "Coordination"],
  },
  {
    year: "2011 — 2017",
    role: "Restaurant General Manager",
    company: "Taco Bell",
    bullets: [
      "Managed daily operations and team performance — workflows, customer feedback, performance data.",
    ],
    skills: ["Operations", "Team Leadership", "Customer"],
  },
]
