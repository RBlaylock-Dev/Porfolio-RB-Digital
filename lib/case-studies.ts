export interface CaseStudyMeta {
  label: string
  value: string
}

export interface CaseStudyStackCell {
  label: string
  value: string
}

export interface CaseStudySection {
  tag: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  stack?: CaseStudyStackCell[]
}

export interface CaseStudy {
  slug: string
  eyebrow: string
  title: string
  titleEm?: string
  tagline: string
  image?: string
  meta: CaseStudyMeta[]
  sections: CaseStudySection[]
}

export const CASE_STUDIES: CaseStudy[] = [
  // ─────────────── FEATURED ───────────────
  {
    slug: "sharexr",
    eyebrow: "Case Study · WebXR Training",
    title: "ShareXR",
    tagline:
      "A multi-tenant WebXR training platform — Strapi 5 CMS plus a static Next.js portal, with GLB/GLTF assets and EditorJS-driven hotspot annotations shipped into any modern browser.",
    image: "/images/ShareXR.png",
    meta: [
      { label: "Role", value: "Co-maintainer / production owner" },
      { label: "Live", value: "sharexr.app" },
      { label: "Type", value: "Strapi 5 CMS + Next.js portal · WebXR" },
      { label: "Status", value: "Live · Banyan Labs client" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Hands-on enterprise training doesn't scale.",
        paragraphs: [
          "Enterprise customers training crews on hands-on equipment — electrical grid gear, machinery, complex assemblies — can't ship in-person sessions to every distributed site, and traditional video doesn't let people explore. They need a way to deliver interactive 3D and AR training that lands in any modern browser, without buying everyone a headset.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "One Cloud Run service, two heads.",
        paragraphs: [
          "ShareXR is a Strapi 5 CMS that owns 3D content types, hotspot annotations, and a signed-URL upload pipeline for large GLB/GLTF files routed to Google Cloud Storage. A static Next.js 16 portal serves the customer-facing experience. Both ship from the same Cloud Run service: Cloud Run is the authoritative Strapi instance, Firebase Hosting is the CDN for static assets, and a single command rebuilds the frontend, copies it into Strapi's public folder, and deploys both layers in one shot.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Production owner across the deploy.",
        bullets: [
          "Strapi 5 upgrade — moved the platform off the legacy 4.x line, including patch-package fixes for production-blocking issues.",
          "CORS hardening for the production domain, and the model-viewer / XRObject-loading fixes that unblocked launch.",
          "Single-command npm run deploy pipeline that builds the static Next.js portal, copies it into Strapi's public folder, deploys Strapi to Cloud Run, and pushes the static layer to Firebase Hosting.",
          "Side-panel model picker on the admin side; tenant-scoped routing and Strapi-JWT login flow on the frontend submodule.",
          "Authored the canonical 32K-character DEVELOPER_GUIDE.md (architecture, deploy ladder, env-variable matrix, the must-not-enable HTTP/2 production gotcha) so new engineers ship in under an hour.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "CMS", value: "Strapi 5 · custom WebXR plugin · EditorJS hotspots" },
          { label: "Frontend", value: "Next.js 16 · React 19 · static export · @google/model-viewer" },
          { label: "Database", value: "PostgreSQL on Cloud SQL · SQLite for local dev" },
          { label: "Hosting", value: "Cloud Run + Firebase Hosting · GCS uploads" },
          { label: "Auth", value: "Strapi users-permissions JWT · multi-tenant by org slug" },
          { label: "Infra", value: "Docker multi-stage · GitHub Actions · patch-package on postinstall" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Live in production for enterprise customers.",
        paragraphs: [
          "ShareXR runs on sharexr.app delivering tenant-scoped 3D/WebXR training to customer crews. Honest framing: the original Strapi scaffold was authored by Matthew Wallace — I'm the co-maintainer / production owner who shipped the upgrade, the prod hardening, and the deploy pipeline.",
        ],
      },
    ],
  },
  {
    slug: "nexara",
    eyebrow: "Case Study · Internal Platform",
    title: "Nexara",
    tagline:
      "The internal platform that runs Banyan Labs' full intern lifecycle — applications, role-based access, video curriculum, weekly reviews, document signing, time tracking, and certificate generation.",
    image: "/images/Banyan-Onboarding-Portal.png",
    meta: [
      { label: "Role", value: "Co-lead / primary builder" },
      { label: "Commits", value: "~170 of 308 total" },
      { label: "Status", value: "Live · in production" },
      { label: "Last shipped", value: "April 2026" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "An intern pipeline scattered across spreadsheets.",
        paragraphs: [
          "Banyan Labs trains justice-impacted developers through an OJT pipeline with many moving parts — application intake, skills tests, role assignment, video curriculum modules, weekly reviews, document signing, time logging, mentor relationships, capstones, certification.",
          "Before Nexara those workflows lived across spreadsheets, Drive folders, Google Forms, and email threads. Nothing tied them together, nothing audited the role-based access, and nothing handed an intern a certificate at the end with their name correctly rendered on PDF.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "One Firebase platform, hardened security rules first.",
        paragraphs: [
          "Nexara consolidates the full lifecycle into a single Next.js 16 + Firebase application. Five distinct user roles — intern, mentor, supervisor, admin, superadmin — backed by 14KB of progressively hardened Firestore security rules. The rules are the real auth boundary; the React layer is UX.",
          "Email delivery is split safely: production uses real SendGrid, every other environment must use stub-success or stub-failure, and the SDK refuses real sends outside production. That single guard rule prevents accidental email blasts during dev.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Top contributor across two accounts.",
        bullets: [
          "Magic-link invitation system on top of Firebase Auth and SendGrid — onboarding-invite emails sent to applicant emails before a Banyan email exists.",
          "Applicant pipeline (admin) with drag-and-drop status changes, referral tracking, and tokenized skills-test invite links.",
          "Multi-module video curriculum with YouTube embeds, per-video completion tracking in Firestore, and module-unlock gating.",
          "Time logging with financial dashboard, monthly-billing model (cap, contract start, per-month tracking, CSV export) alongside the existing fixed-fee model.",
          "Certificate generation pipeline — pdf-lib + jsPDF + custom fonts + bulk ZIP export, plus a template-driven document-signing system with field-mapping configuration.",
          "ClickUp REST API integration — in-app bug-report flow that creates triaged tasks directly on the engineering board.",
          "Authored the CLAUDE.md, the README, the email delivery policy, and the recent storage-rules hardening for signed documents.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind 4 · Strict TS" },
          { label: "Backend", value: "Next.js Route Handlers · Firebase Admin SDK" },
          { label: "Database", value: "Firestore · 14KB hardened rules · indexes in repo" },
          { label: "Hosting", value: "Firebase App Hosting · Cloud Secret Manager" },
          { label: "Integrations", value: "Google Drive · YouTube Data · SendGrid · ClickUp" },
          { label: "PDFs", value: "pdf-lib · jsPDF · @pdf-lib/fontkit · jszip" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Running Banyan's full intern lifecycle in production.",
        paragraphs: [
          "Nexara is the closest thing to a my project in the Banyan portfolio. Across two accounts I'm the top committer — substantially ahead of the next contributor — and I own the architecture, the security model, and the deployment.",
          "Other contributors (Rachael Higgins, Sam Pomeroy, Randall Murphy, Shandea Hardin) are real and shipping. The framing here is honest: tech-leading the project, not solo authorship.",
        ],
      },
    ],
  },
  {
    slug: "derksen-buildings",
    eyebrow: "Case Study · Production 3D Web",
    title: "Derksen",
    titleEm: "Buildings",
    tagline:
      "A production Three.js configurator inside Derksen's existing PHP order flow — customers spec, color, and view their building in real time before they buy.",
    image: "/images/Derksen-Buildings.png",
    meta: [
      { label: "Role", value: "Three.js / 3D engineer" },
      { label: "Live", value: "3d.derksenbuildings.com" },
      { label: "Type", value: "Production 3D configurator inside a PHP order flow" },
      { label: "Status", value: "Live · real customer order pipeline" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Customers were buying buildings sight-unseen.",
        paragraphs: [
          "Derksen sells custom storage buildings — every order is configured (size, doors, windows, paint, trim) and built to order. Without a way to visualize the configuration, customers had to mentally compose the result from a long form, then hope the delivered building matched what they imagined.",
          "The job was to take that abstract spec sheet and make it a real, rotating, color-accurate 3D preview the customer could see before they paid.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Three.js inside the existing PHP order flow.",
        paragraphs: [
          "Rather than rebuild Derksen's order pipeline, the configurator slots into the existing PHP-driven order flow as a 3D layer. Every spec choice from the form drives a real-time scene update — geometry, paint, trim color, door / window placement — so the preview reflects the order state, not a generic stock model.",
          "Deployed through GitLab into the production site at 3d.derksenbuildings.com.",
        ],
      },
      {
        tag: "03 / Outcome",
        title: "A real customer-facing tool, not a demo.",
        paragraphs: [
          "Live inside Derksen's actual order pipeline at 3d.derksenbuildings.com/neworder. The configurator turns a spec form into a visual decision — what someone is buying is now what they are seeing.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "3D engine", value: "Three.js · WebGL" },
          { label: "Host stack", value: "PHP order flow (existing)" },
          { label: "Source control", value: "GitLab" },
          { label: "Deploy", value: "Production at 3d.derksenbuildings.com" },
        ],
      },
    ],
  },

  // ─────────────── BANYAN PRODUCT WORK ───────────────
  {
    slug: "harper",
    eyebrow: "Case Study · Conversational AI",
    title: "Harper",
    titleEm: "(HRPR)",
    tagline:
      "A consent-driven, multi-tenant conversational AI assistant — answers in 1–3 sentences first, asks before it goes deeper, and embeds in any host site with one script tag.",
    image: "/images/HRPR.png",
    meta: [
      { label: "Role", value: "Primary builder · end-to-end" },
      { label: "Type", value: "Cross-platform mobile + embeddable web" },
      { label: "Status", value: "In production at Banyan Labs" },
      { label: "Window", value: "27+ merged PRs through 2026" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "LLM chatbots overwhelm — and act without permission.",
        paragraphs: [
          "Most embedded AI assistants do two things wrong: they dump walls of text on first contact, and they shift contexts (recommend a tool, switch domains, take an action) without asking. The result is a chatbot that feels noisy on a brand site and pushy in a serious workflow.",
          "Banyan needed a conversational AI that could embed inside client products and feel domain-aware, multi-tenant, and consent-driven from the first message — without rebuilding the host's design system or backend.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Listen → Verify → Pivot → Immerse.",
        paragraphs: [
          "Harper answers in 1–3 sentences first — what the team calls a tiny response. Only after the user explicitly says yes does it activate a focused context (a tenant-specific tool, a domain guide, a recovery resource).",
          "Architecturally it's a food-truck pattern. The Flutter app is the window. A Go backend-for-frontend is the counter. The intelligence — Bedrock + a Model Context Protocol catalog — lives in a separate service the BFF proxies to. The Flutter client never holds backend keys.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "End-to-end ownership.",
        bullets: [
          "Flutter client targeting iOS, Android, web, and desktop — voice-first hold-to-speak with speech-to-text, multi-provider TTS, and a fully themable UI.",
          "Embeddable web widget with PostMessage bridge — auto-detects host page colors, fonts, and dark/light mode, and renders a resizable sidebar that pushes host content aside.",
          "Go BFF with middleware, health checks, server-side AUTH_API_KEY injection, multi-stage Docker builds, and GitHub Actions CI/CD covering Go quality gates and Flutter web builds.",
          "MCP-driven tool catalog — tools, domain policies, tone/verbosity restrictions, and trigger keywords routed by tenant slug.",
          "Multi-provider TTS (AWS Polly + ElevenLabs + browser voices) with voice selection UI, speed slider, and per-user voice preferences persisted server-side.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Client", value: "Flutter · Dart · Riverpod · MVP/MVS pattern" },
          { label: "BFF", value: "Go · nginx · WebSockets · Postgres" },
          { label: "AI", value: "AWS Bedrock (Claude 3) · MCP · Polly · ElevenLabs" },
          { label: "Infra", value: "Docker multi-stage · GitHub Actions · OWASP-aware defaults" },
          { label: "Auth", value: "JWT · multi-tenant (Company → Org → User)" },
          { label: "Embed", value: "PostMessage bridge · auto-theming · resizable sidebar" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Production conversational AI inside a real product.",
        paragraphs: [
          "Harper ships as a native mobile app and as an embeddable web widget — installable on third-party sites with a single script tag. The consent-driven loop holds across both surfaces, and 34 cross-stack tests (24 Flutter, 10 Go) keep regressions out of the BFF.",
          "Honest framing: this is Banyan-Labs internal/client work, NDA-sensitive, and depends on a separate backend service called Armada Core. The case study describes my contributions, not the full product surface.",
        ],
      },
    ],
  },
  {
    slug: "jona",
    eyebrow: "Case Study · Multi-tenant SaaS",
    title: "JONA",
    tagline:
      "A multi-tenant job-aggregation platform — nine production scrapers, AI skill matching against a user's resume, and Stripe-billed organization tiers.",
    image: "/images/JONA.png",
    meta: [
      { label: "Role", value: "Primary builder / maintainer" },
      { label: "Type", value: "Web SaaS · multi-tenant orgs" },
      { label: "Status", value: "Staging deployments active" },
      { label: "Scrapers", value: "9 production sources" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Job hunting is a multi-tab, multi-hour treadmill.",
        paragraphs: [
          "Job seekers cycle through Indeed, Dice, Monster, ZipRecruiter, CareerBuilder, TekSystems, SnagAJob, and Glassdoor — manually filtering, copying, tracking. Recruiting agencies and bootcamps that want to centralize that for a cohort have nothing off-the-shelf that matches roles to a specific resume.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Aggregate, normalize, match, bill.",
        paragraphs: [
          "JONA scrapes nine boards on a schedule, normalizes the postings, parses uploaded resumes, and uses a sentence-transformer-based skill matcher to surface the best fits. Multi-tenant from day one — orgs invite members, admins see scraper telemetry, billing flows through Stripe with plan-based feature gates.",
          "The architecture is three-tier: a Next.js 14 App Router frontend acts as a thin BFF, a FastAPI backend owns scrapers and matching, and Supabase Postgres holds the data with RLS scoping every query to the calling org.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "End-to-end as primary maintainer.",
        bullets: [
          "Nine production web scrapers using Playwright and Selenium with undetected-chromedriver to handle anti-bot pressure.",
          "Custom Windows asyncio runner that solves Playwright's incompatibility with uvicorn's reloader by setting WindowsProactorEventLoopPolicy before boot and using watchdog-based dev restart.",
          "AI skill-matching engine — sentence-transformers, OpenAI, Anthropic, and AWS Bedrock — with PDF/DOCX resume parsing and embedding-based search.",
          "Migrated authentication from the deprecated @supabase/auth-helpers-nextjs to @supabase/ssr with proper Server Component cookie handling.",
          "Stripe subscription billing with plan-based feature gating, admin dashboard with scraper-tab control, and live scraper telemetry over WebSockets.",
          "Authored the 1,300+ line README documenting architecture, the Playwright/Windows debugging story, and the Supabase SSR migration.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 14 · React 18 · TypeScript · Tailwind · MUI" },
          { label: "Backend", value: "FastAPI · Python 3.11 · Playwright · Selenium" },
          { label: "Database", value: "Supabase Postgres · RLS · pgbouncer" },
          { label: "AI", value: "sentence-transformers · OpenAI · Anthropic · Bedrock" },
          { label: "Auth & billing", value: "Supabase Auth · Clerk · Stripe" },
          { label: "Infra", value: "Docker Compose (5 envs) · n8n workflows" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "A real customer-facing SaaS, not a prototype.",
        paragraphs: [
          "JONA serves organization-scoped job boards with Stripe-billed subscription tiers and Supabase RLS isolating tenant data. The PR-driven workflow covers subscription pricing, settings tabs, dark mode, admin dashboard typing — i.e., the boring billing and admin polish that makes a SaaS actually shippable.",
        ],
      },
    ],
  },
  {
    slug: "upcurve",
    eyebrow: "Case Study · Donations Platform",
    title: "Upcurve",
    tagline:
      "Multi-tenant SaaS plus embeddable donation widget — nonprofits spin up branded campaigns, accept Stripe donations, and drop the widget on any site with one script tag.",
    image: "/images/Upcurve.png",
    meta: [
      { label: "Role", value: "Feature contributor" },
      { label: "Commits", value: "~61 of 1,370 total" },
      { label: "Type", value: "Multi-tenant SaaS + embed widget" },
      { label: "Status", value: "Live · client production" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Nonprofits need a branded donation flow on every surface.",
        paragraphs: [
          "Cause-driven organizations want to spin up a campaign, take Stripe donations, manage donors and team members, and embed a donation widget on third-party sites — WordPress, Shopify, Drupal, plain HTML — without rebuilding their stack each time.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Hybrid auth, embeddable JS, multi-tenant from day one.",
        paragraphs: [
          "Upcurve uses Clerk for user/session identity and Supabase Row-Level Security for data ownership. Middleware bridges Clerk JWTs into Supabase SSR clients on every request — the auth and data layers stay decoupled but enforce together.",
          "The embed surface is a public JS bundle (app/embed.js) that nonprofits drop onto any site with a single script tag to render a Stripe-backed donation widget. Production images are environment-pinned at build time — Stripe/Clerk/Supabase keys pass as Docker build args rather than runtime config.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Honest framing — feature contributor, not lead.",
        paragraphs: [
          "I'm a contributor on this codebase, not the lead engineer. Primary feature ownership belongs to Ashley Brooks, Andrew Thomas, and the broader Banyan team. My role across two identities (~61 of 1,370 commits) was focused features and bug fixes — donor-side flows, dashboard fixes, Stripe integration polish.",
        ],
        bullets: [
          "Donor-flow improvements on a platform that processes real charitable donations.",
          "Bug fixes and feature work inside the standard Banyan develop → staging → main PR flow.",
          "Production exposure to multi-tenant SaaS architecture, Clerk + Supabase + Stripe + Railway, and the embed-widget pattern.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 15 · React 19 · Tailwind 4 · Radix · TipTap" },
          { label: "Backend", value: "Next.js Route Handlers · middleware-based auth" },
          { label: "Database", value: "Supabase Postgres · Row-Level Security" },
          { label: "Auth", value: "Clerk · multi-org · magic-link invites" },
          { label: "Payments", value: "Stripe · Stripe Elements · Svix webhook verification" },
          { label: "Infra", value: "Railway · multi-Dockerfile · GitHub Actions deploy flows" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Real donations, real customers, real codebase.",
        paragraphs: [
          "Upcurve is live and processes real charitable donations on a stack of Next.js 15, Clerk, Supabase RLS, Stripe, and Railway, with documented integrations for Shopify, WordPress, Drupal, and a Chrome extension. My contribution sits inside a five-plus-engineer team — that's the honest framing, and it's the version that holds up under reference checks.",
        ],
      },
    ],
  },
  {
    slug: "banyan-website",
    eyebrow: "Case Study · Marketing Platform",
    title: "Banyan Labs",
    titleEm: "Website",
    tagline:
      "The public face of Banyan Labs — a Next.js + Payload CMS marketing platform with MDX blog, product showcases, and a self-service Lab experience for the team's portfolio products.",
    image: "/images/Banyan-Website.png",
    meta: [
      { label: "Role", value: "Contributing engineer" },
      { label: "Live", value: "banyanlabs.io" },
      { label: "Type", value: "Marketing site + headless CMS + MDX blog" },
      { label: "Team size", value: "10+ engineers" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "One site, three jobs.",
        paragraphs: [
          "Banyan Labs needed a digital storefront that does three jobs at once: tell its mission story (employing and mentoring justice-impacted developers through real client work), generate qualified partnership and contact leads, and showcase the portfolio of products built by the team — Harper, HALO, JONA, ProcurePath, ShareXR, Compass, Armada, Upcurve.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Headless CMS, MDX recruiting pages, hybrid router.",
        paragraphs: [
          "The site runs Next.js 16 with a hybrid App Router + Pages Router setup — Payload CMS routes (admin and API) live under the App Router; marketing pages live under classic Pages Router. Payload manages posts, media, and users out of Postgres on Cloud SQL with an encrypted Cloud SQL Connector tunnel that activates only in GCP environments via env-flag detection.",
          "Lead capture funnels into SendGrid for transactional email and into Mailchimp for newsletter list management. The custom Cloud SQL Connector logic in payload.config.ts is the kind of infra detail that keeps local Postgres dev simple while running properly tunneled connections in prod.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Contributing engineer on a 10+ team.",
        paragraphs: [
          "Honest framing: this is a Banyan Labs team production with Shandea Hardin as project lead and Daniel Drew + Phillip Marress on PM. Top committers are Noah Biggs, Kevin Gravell, Jessica Sharp, and Matthew Wallace. My footprint is 27 commits under primary email plus 8 under secondary — meaningful but partial.",
        ],
        bullets: [
          "Feature work across the App Router + Pages Router hybrid codebase, shipping through GitHub Actions CI/CD into Firebase App Hosting.",
          "Worked alongside a team of mostly OJT graduates — justice-impacted developers in real production work — on features ranging from blog social-share to deployment configuration.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind 4 · Framer Motion · MDX" },
          { label: "CMS", value: "Payload CMS 3 · self-hosted admin · GraphQL + REST" },
          { label: "Database", value: "PostgreSQL on Google Cloud SQL · Cloud SQL Connector" },
          { label: "Hosting", value: "Firebase App Hosting · Docker · GCS for media" },
          { label: "Email", value: "SendGrid · Resend · Mailchimp Marketing API" },
          { label: "Build", value: "next-sitemap · sharp · Payload import-map generator" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Live at banyanlabs.io.",
        paragraphs: [
          "The mission storefront, lead funnel, MDX-powered blog, and product showcase for a software studio that employs and mentors justice-impacted developers. I worked alongside the team on features end-to-end through PR cycles and GitHub Actions CI.",
        ],
      },
    ],
  },

  // ─────────────── PRIMARY-BUILDER PRODUCTS ───────────────
  {
    slug: "halo",
    eyebrow: "Case Study · Verifiable Identity",
    title: "HALO",
    titleEm: "Platform",
    tagline:
      "A blockchain-anchored professional identity platform that gives justice-impacted workers a verifiable, portable career record they own — anchored to Base L2.",
    image: "/images/Halo.png",
    meta: [
      { label: "Role", value: "Primary builder" },
      { label: "Type", value: "Web app · partner-integrated identity platform" },
      { label: "Status", value: "Pre-release · core flows working" },
      { label: "API", value: "Versioned at /api/v1/" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Resume claims and background checks fail the people who need them most.",
        paragraphs: [
          "Background checks and resume claims are unreliable, and the people most penalized by that — formerly incarcerated and other justice-impacted professionals — have the least leverage to push back. A verified work history typically lives inside one employer's HR system, not with the person who earned it.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Replace 'trust me' with a verifiable trust ledger.",
        paragraphs: [
          "HALO is a cryptographically verifiable trust ledger of endorsements, achievements, and employment events. Identity travels with the person, not the employer. Today the persistence is Firestore; the Base L2 anchoring is on the roadmap. The validation API is namespaced at /api/v1/ from day one — a deliberate choice for a platform that expects partner integrations.",
          "The design language — Digital Alchemy: deep obsidian + digital gold — is built in Tailwind v4 and Framer Motion to feel as serious as the mission.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Primary builder.",
        bullets: [
          "Authenticated profiles, onboarding, dashboard, and the organization-and-invite system with notifications.",
          "Validation API consumed by partner HR systems via HMAC-signed cross-system verification (Ficticious HR is the first integration).",
          "Firebase Auth with Google OAuth, Firestore data layer, Firebase App Hosting deployment with emulator wiring for local dev.",
          "Wrote the platform's full developer documentation set — architecture, vision/scope, API docs, AI developer guide — to scale the build beyond a single contributor.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind 4 · Framer Motion 12" },
          { label: "Backend", value: "Next.js Route Handlers · /api/v1/ versioned" },
          { label: "Database", value: "Firestore · Firebase Auth · Firebase Storage" },
          { label: "Hosting", value: "Firebase App Hosting · emulators wired for local dev" },
          { label: "Blockchain", value: "Base L2 (roadmap) · cryptographic trust ledger" },
          { label: "Partners", value: "HMAC-signed validation API · Ficticious HR integration" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Active build with real partner integration.",
        paragraphs: [
          "HALO is pre-release but the core platform flows are working: profiles, login, profile editing, organization invites, endorsement requests, notifications. The validation API is hard-coded into Ficticious HR's integration as the first partner consumer. The mission is the differentiator: a verified career record the person owns.",
        ],
      },
    ],
  },
  {
    slug: "redeemly",
    eyebrow: "Case Study · Solo Founder",
    title: "Redeemly",
    tagline:
      "A moderated, Christ-centered online community where people pursuing Jesus connect through groups, scripture study, resources, and one-to-one messaging — built solo on Next.js 16 and Supabase.",
    image: "/images/Redeemly.png",
    meta: [
      { label: "Role", value: "Sole founder · solo build" },
      { label: "Type", value: "Social / community platform" },
      { label: "Status", value: "Active personal project" },
      { label: "Migrations", value: "14+ versioned SQL files" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Discipleship without isolation.",
        paragraphs: [
          "There's a real gap between secular social platforms (built around feed engagement) and isolated solo discipleship. People walking toward freedom and discipleship in Jesus need a safe, moderated, biblically grounded space to do that together — not alone.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Postgres-first, server-side write, moderated by default.",
        paragraphs: [
          "Redeemly is a Next.js 16 application on Supabase Postgres with profiles, groups, scripture browsing, resource libraries, search, direct messaging with real-time triggers, and a built-in moderation layer. The data layer ships with 14+ versioned SQL migrations covering profiles, feed, groups, resources, scripture, storage, auto-username generation, and trigger-driven message notifications.",
          "Architecture commits to RLS, rate limiting, content sanitization, and server-side write paths — consistent with the moderated-community use case.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Solo founder and engineer.",
        paragraphs: [
          "All commits are mine. Built every layer — Supabase setup, auth flows, profile search, gated resource and scripture access, AppSidebar layout with idle-session AutoLogoutProvider, message-notification system on Supabase triggers, and the About-page testimony copy.",
          "Founder-mode in the literal sense: the repo carries vision, mission, values, statement of faith, product requirements, data model, roadmap, build packet, donation policy, terms, privacy, and community guidelines as living documents.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind 4 · Radix · React Compiler" },
          { label: "Backend", value: "Server Actions · Route Handlers · server-only writes" },
          { label: "Database", value: "Supabase Postgres · 14+ versioned migrations · RLS" },
          { label: "Auth", value: "Supabase Auth · email signup · gated routes" },
          { label: "Realtime", value: "Supabase triggers for message notifications" },
          { label: "Storage", value: "Supabase Storage for resource files" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "A real venture, treated like one.",
        paragraphs: [
          "Redeemly is solo-built and product-documented as a venture, not a coding exercise. Honest framing: it has not been validated at production scale, and recent commit cadence has slowed. The engineering work is real and the mission is the reason.",
        ],
      },
    ],
  },
  {
    slug: "hls",
    eyebrow: "Case Study · Community Platform",
    title: "Hook Line",
    titleEm: "and Savannah",
    tagline:
      "A mobile-first event discovery platform for Savannah, TN — public calendar with category filtering, admin CRUD, and Firestore-rule-enforced role-based access.",
    image: "/images/hls.png",
    meta: [
      { label: "Role", value: "Sole architect · primary builder" },
      { label: "Live", value: "hlsav.com" },
      { label: "Type", value: "Full-stack community platform" },
      { label: "Mentoring", value: "Junior frontend dev on documented rubric" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Small towns lose events to fragmented social channels.",
        paragraphs: [
          "Savannah, Tennessee is my hometown, and like a lot of small towns it relies on scattered Facebook posts and word-of-mouth for event discovery. Locals miss farmers markets, festivals, civic meetings, youth sports, volunteer opportunities — not because they don't care, but because there's no one place to look.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "One mobile-first calendar plus admin tooling.",
        paragraphs: [
          "Public event list and detail pages with category-based filtering and slug routing. Admin dashboard with full CRUD for events, categories, users, and other admins. Firestore security rules enforce public-read of published events only, admin-only writes, and superadmin gating for admin management. Server-side admin auth runs on every protected /api/* route with explicit 401/403 handling and 409 on slug collision.",
          "The design language is rustic / community-themed — CategoryStamps grid, HappeningStrip weekend section, torn-edge transitions — to feel like the place, not a generic SaaS.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Architecture, standards, and a mentoring rubric.",
        bullets: [
          "Designed the Firestore data model, security rules, auth middleware, and route-handler patterns from scratch.",
          "Built admin and user-management CRUD; the public home page, events list, and event detail pages.",
          "Established a production-grade engineering rubric: 500-line file cap, single-responsibility module layout, Tailwind v4 CSS theming, shadcn/ui, Vitest + Playwright. Codified as a CLAUDE.md contract that mentors a junior frontend developer through PR reviews.",
          "Shipped 10+ admin and public route handlers and pages on a ClickUp ticket cadence (HLS-201, HLS-302, HLS-304…).",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind 4 · shadcn/ui" },
          { label: "Backend", value: "Next.js Route Handlers · Firebase Admin SDK" },
          { label: "Database", value: "Firestore · published-state security rules" },
          { label: "Auth", value: "Firebase Auth · Firestore-backed admin/superadmin" },
          { label: "Validation", value: "Zod · React Hook Form · safeParse boundaries" },
          { label: "Tests", value: "Vitest · React Testing Library · Playwright" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Live at hlsav.com.",
        paragraphs: [
          "A real event discovery platform for a real small town, on a documented engineering rubric that doubles as a teaching vehicle for a junior developer.",
        ],
      },
    ],
  },
  {
    slug: "the-forge",
    eyebrow: "Case Study · Flagship 3D Web",
    title: "The Forge",
    tagline:
      "A first-person walkable 3D portfolio website where the site itself is the proof — five themed zones, custom GLSL, an in-world Claude-powered chatbot, and a dynamic resume PDF generator, all in a single R3F canvas.",
    image: "/images/The-FOrge.png",
    meta: [
      { label: "Role", value: "Sole author · solo build" },
      { label: "Live", value: "rblaylock.dev" },
      { label: "Tickets", value: "90+ across 6 phases — all DONE" },
      { label: "Type", value: "Personal portfolio + professional showcase" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Most portfolios tell. Almost none prove.",
        paragraphs: [
          "A standard portfolio lists what someone can do. Almost none prove it. For a 3D / Three.js / R3F engineer, the deliverable that clears the bar is the site itself — every second a visitor spends on it should be an experience of the work.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "One walkable 3D world, no page transitions.",
        paragraphs: [
          "The Forge is a single continuous R3F scene with five themed zones — Hearth (forge bio), Skill Tree (70+ tiered skill nodes), Project Vault (12 projects on glowing pedestals), Timeline (career path along a walkable track), War Room (holographic command table), plus a hidden secret zone gated by exploration. WASD + arrow keys + click-to-walk + orbit camera, no page loads.",
          "Underneath: strict folder discipline (canvas/, player/, zones/, objects/, hud/, shaders/, store/, data/), every file under 500 lines, content-as-code in typed data/*.ts files, a Zustand store, and post-processing pipeline (bloom, vignette) via @react-three/postprocessing.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Solo across 90+ tickets.",
        bullets: [
          "Five themed zones, 70+ skill nodes, 12 project showcases, the player controller, all custom GLSL shaders (forge fire, ember particles, zone-specific effects).",
          "HUD layer: TopBar, NavBar, Minimap, XPBar, ZoneFlash, DetailPanel, ContextualCTA, IntroTour, ContactModal, ResumeBuilder/Preview, AchievementGallery + Toast, CodexOverlay, ChatPanel, Konami code overlay, screenshot mode with watermark.",
          "AI Forge Spirit assistant powered by Claude Sonnet 4 — streamed responses, IP-based rate limiting (10 req/min), curated RAG-style system prompt that deep-links visitors to relevant zones.",
          "Interactive resume builder with @react-pdf/renderer for downloadable PDFs, Resend-backed contact form, achievement system with localStorage persistence, full WebGL-fallback 2D portfolio for accessibility.",
          "90+ named tickets across 6 phases plus UX overhaul and engagement waves — every ticket on its own conventional-commit branch with Husky + lint-staged + Jest + Prettier on every commit.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "3D", value: "Three.js · React Three Fiber · drei · postprocessing · GLSL" },
          { label: "App", value: "Next.js 14 · React 18 · TypeScript · Tailwind · Framer Motion" },
          { label: "State", value: "Zustand 5 · content-as-code in typed data/" },
          { label: "AI", value: "@anthropic-ai/sdk · Claude Sonnet 4 streaming" },
          { label: "Backend", value: "Vercel · Upstash Redis · Resend · @react-pdf/renderer" },
          { label: "DX", value: "Husky · lint-staged · Prettier · Jest · ts-jest" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "The portfolio that is itself the proof.",
        paragraphs: [
          "Live at rblaylock.dev with no caveats. Five zones, the AI assistant, the resume builder, the achievement system, the WebGL fallback — all shipped. Genuinely strong material for both a portfolio site and a deliberate skill demonstration.",
        ],
      },
    ],
  },

  // ─────────────── ARCHITECT / LEAD ───────────────
  {
    slug: "assessments",
    eyebrow: "Case Study · SEO-preserving Rebuild",
    title: "Assessments.com",
    tagline:
      "A modern Next.js rebuild of Assessments.com that preserves every legacy URL, page, and word of content while replacing the underlying stack — protecting a decade of SEO equity.",
    image: "/images/Assessments.png",
    meta: [
      { label: "Role", value: "Architect · technical lead" },
      { label: "Live", value: "assessments.com" },
      { label: "Type", value: "Static-export rebuild" },
      { label: "Constraint", value: "1:1 URL + content parity" },
    ],
    sections: [
      {
        tag: "01 / Problem",
        title: "Modernize the stack without touching the SEO surface.",
        paragraphs: [
          "Assessments.com sells validated assessments, automated case planning, and reporting tools to the adult/juvenile justice, behavioral health, substance abuse, and school behavior sectors. The legacy site was outdated visually and technically but had a decade of SEO equity that could not be disrupted.",
          "The hard constraints: no URL changes, no content removal, no navigation renames, no page removals. Improve heading hierarchy, meta tags, alt text, and design — but don't lose a single search ranking.",
        ],
      },
      {
        tag: "02 / Approach",
        title: "Static export + an enforced parity contract.",
        paragraphs: [
          "Static export (`output: 'export'`) over SSR to guarantee identical HTML at every URL the legacy crawler knew. Scraped legacy content lives verbatim in `docs/content/` and is the source of truth for copy. Reusable React components are allowed but must render proper semantic HTML so the SEO guardrails hold.",
          "The constraint framework was embedded into the AI-agent rules so any developer or AI session would refuse changes that broke parity.",
        ],
      },
      {
        tag: "03 / What I built",
        title: "Standards and architecture, build by team.",
        paragraphs: [
          "Honest framing: I authored the project's CLAUDE.md and the overall constraint framework — SEO-preservation rules, engineering philosophy (Visionary Engineer, TDD red-green-refactor, emotional UX), and the workflow that downstream developers and AI sessions followed. Direct commit authorship on the build itself is split with two other Banyan Labs developers. My role is technical-lead / architect, not sole implementer.",
        ],
        bullets: [
          "Defined the SEO-preservation contract (no URL changes, no copy removal, no nav renames, no page removals).",
          "Embedded the contract into the AI-agent framework so any session would refuse changes that broke parity.",
          "Established the team workflow: verbatim content scraping, an AI-framework kanban, TDD as the implementation default.",
        ],
      },
      {
        tag: "04 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind 4 · Motion · tsparticles" },
          { label: "Build", value: "Static export · trailing slashes · unoptimized images" },
          { label: "Hosting", value: "Firebase Hosting" },
          { label: "Process", value: "AI-agent kanban · TDD red-green-refactor" },
          { label: "Constraint", value: "1:1 URL + content + nav parity" },
          { label: "Brand", value: "Vant4ge mockup-32 layout · Tailwind 4 design system" },
        ],
      },
      {
        tag: "05 / Outcome",
        title: "Modern stack, legacy SEO intact.",
        paragraphs: [
          "Live at assessments.com on Next.js 16, React 19, and Firebase Hosting, with the legacy URL surface and content preserved verbatim — a rebuild that protects rather than disrupts.",
        ],
      },
    ],
  },

  // ─────────────── SHIPPED CLIENT WORK (smaller) ───────────────
  {
    slug: "rooftop-ministries",
    eyebrow: "Case Study · Ministry Site",
    title: "Rooftop",
    titleEm: "Ministries",
    tagline:
      "A professional ministry website built end-to-end — custom branding, full domain + DNS setup, and a Next.js + Tailwind stack tuned for clarity over cleverness.",
    image: "/images/rooftop-ministries.png",
    meta: [
      { label: "Role", value: "Solo build · client work" },
      { label: "Live", value: "rooftopministries.org" },
      { label: "Type", value: "Ministry website" },
      { label: "Scope", value: "Branding · DNS · build · deploy" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "A clear, professional voice for a real ministry.",
        paragraphs: [
          "Rooftop Ministries needed a professional website that matched the seriousness of their work without getting in the way of it. The brief: clarity over cleverness, fast to load, easy for the team to point people at.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "End-to-end — design, build, ship.",
        bullets: [
          "Custom branding and site design built around the ministry's voice.",
          "Next.js + Tailwind frontend with accessible typography and a clear content hierarchy.",
          "Full domain and DNS setup, plus deploy pipeline.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js · Tailwind CSS" },
          { label: "Hosting", value: "Live on rooftopministries.org" },
          { label: "Scope", value: "Branding · build · DNS · domain" },
        ],
      },
    ],
  },
  {
    slug: "persevere",
    eyebrow: "Case Study · Nonprofit Site",
    title: "Persevere",
    titleEm: "Website",
    tagline:
      "Redesigned and rebuilt the Persevere website on WordPress — the nonprofit coding bootcamp where I earned my Full-Stack Developer certificate.",
    image: "/images/Persevere.png",
    meta: [
      { label: "Role", value: "Designer / builder" },
      { label: "Type", value: "Nonprofit website rebuild" },
      { label: "Stack", value: "WordPress" },
      { label: "Why it matters", value: "Where I earned my full-stack cert" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Giving back to where I started.",
        paragraphs: [
          "Persevere is the nonprofit coding bootcamp where I earned my Full-Stack Developer certificate — a justice-impacted-developer program that rebuilds careers through code. They needed a refreshed public site, and I had a debt to pay.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Redesign + rebuild on WordPress.",
        paragraphs: [
          "Redesigned the visual language for clarity and warmth, then rebuilt the site on WordPress so the Persevere team could keep editing it without engineering help.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Platform", value: "WordPress" },
          { label: "Discipline", value: "Web design + nonprofit copy" },
          { label: "Why WordPress", value: "Maintainable by their team without engineers" },
        ],
      },
    ],
  },
  {
    slug: "team-directory",
    eyebrow: "Case Study · OJT Project",
    title: "Team",
    titleEm: "Directory",
    tagline:
      "A team directory web app with search and filter, built from reusable components — produced as part of the Banyan Labs OJT program.",
    image: "/images/team-directory.png",
    meta: [
      { label: "Role", value: "Builder · Banyan OJT" },
      { label: "Live", value: "team-directory-app1" },
      { label: "Type", value: "Internal directory tool" },
      { label: "Stack", value: "Next.js · Node · Tailwind" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "A directory that's actually usable.",
        paragraphs: [
          "Team directories on most internal tools are static lists. This one had to filter, search, and look like something the team would actually use.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Component-driven build.",
        bullets: [
          "Reusable card and filter components consistent across the directory.",
          "Search and filter wired through the directory data layer.",
          "Tailwind-driven layout that holds up at desktop and mobile breakpoints.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js · React · Tailwind" },
          { label: "Backend", value: "Node" },
          { label: "Context", value: "Banyan Labs OJT program build" },
        ],
      },
    ],
  },

  // ─────────────── LEARNING / TUTORIAL ───────────────
  {
    slug: "stor-it",
    eyebrow: "Case Study · Learning Project",
    title: "Stor-It",
    tagline:
      "A Google-Drive-style cloud storage and file-sharing app built with Next.js 16, Appwrite, and shadcn/ui — completed as a deep-dive into modern full-stack BaaS patterns.",
    image: "/images/Stor-it.png",
    meta: [
      { label: "Role", value: "Solo · learning project" },
      { label: "Live", value: "stor-it-alpha.vercel.app" },
      { label: "Frame", value: "Tutorial-driven (JS Mastery)" },
      { label: "Stack", value: "Next.js + Appwrite + shadcn/ui" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "BaaS patterns in production form.",
        paragraphs: [
          "Stor-It is a Google-Drive-style storage and file-sharing app built as a deep-dive into Backend-as-a-Service patterns — Appwrite for auth, database, and storage, with Next.js 16 and shadcn/ui on the frontend. Honest framing: this is a tutorial-guided build (JavaScript Mastery's storage_management_solution), not original product work.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Tutorial scaffold, real implementation.",
        bullets: [
          "OTP-based email auth via Appwrite.",
          "Multi-type file upload with drag-and-drop and rollback on failed metadata writes (no orphaned blobs).",
          "Server actions with separate admin vs. session Appwrite clients — privileged operations never run client-side.",
          "File browser with rename / delete / view / download, file sharing across users by email, and a debounced global search.",
          "Storage dashboard with total/consumed visuals via Recharts, file-type breakdown, and recent uploads.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "Next.js 16 · React 19 · Tailwind · shadcn/ui" },
          { label: "BaaS", value: "Appwrite · auth · DB · storage" },
          { label: "Validation", value: "react-hook-form + zod" },
          { label: "Patterns", value: "Server actions · privilege separation · upload rollback" },
        ],
      },
    ],
  },
  {
    slug: "todo-app",
    eyebrow: "Case Study · Learning Project",
    title: "ToDo",
    titleEm: "App",
    tagline:
      "A full-stack to-do app with auth, secure login, and Mongo persistence — built to lock in the React + Node + MongoDB + bcrypt loop.",
    image: "/images/todo-login.png",
    meta: [
      { label: "Role", value: "Solo · learning project" },
      { label: "Live", value: "backend-finals-ten" },
      { label: "Stack", value: "React · Node · MongoDB · Bcrypt" },
      { label: "Focus", value: "Full-stack auth fundamentals" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Full-stack auth, end to end.",
        paragraphs: [
          "A to-do app sounds boring on paper, but the goal was the loop: signup → login → JWT-or-session → CRUD against a real database with hashed passwords. Build that once, build it right, then everything else is variations on the theme.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Real auth, real persistence.",
        bullets: [
          "React frontend with login + signup flows and a clean to-do CRUD surface.",
          "Node backend with bcrypt-hashed passwords and Mongo as the persistence layer.",
          "Session handling tight enough that nothing leaks past the auth boundary.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "React" },
          { label: "Backend", value: "Node · Express" },
          { label: "Database", value: "MongoDB" },
          { label: "Auth", value: "Bcrypt-hashed passwords" },
        ],
      },
    ],
  },
  {
    slug: "the-finals",
    eyebrow: "Case Study · Learning Project",
    title: "Product Page",
    titleEm: "· TheFinals",
    tagline:
      "A React-based product page with login, MUI, and a clean responsive layout — built as a focused exercise in component composition and form handling.",
    image: "/images/product-page.png",
    meta: [
      { label: "Role", value: "Solo · learning project" },
      { label: "Live", value: "the-finals.vercel.app" },
      { label: "Stack", value: "React · MUI · HTML · CSS" },
      { label: "Focus", value: "Component composition + responsive layout" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Product page mechanics.",
        paragraphs: [
          "A product page is mostly composition: image, copy, price, CTA, login, layout breakpoints. This was a focused exercise in getting that loop tight on React + MUI without the noise of a full app.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Composition + responsive.",
        bullets: [
          "React component layout for the product page surface.",
          "MUI primitives wired into a responsive grid.",
          "Login form with validation and a clean submit path.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Frontend", value: "React · MUI" },
          { label: "Layout", value: "Responsive HTML/CSS" },
          { label: "Focus", value: "Composition + breakpoints" },
        ],
      },
    ],
  },
  {
    slug: "blackjack",
    eyebrow: "Case Study · Learning Project",
    title: "BlackJack",
    tagline:
      "An interactive blackjack game with a casino-style interface — built in vanilla JS to lock in DOM, state, and game-loop fundamentals.",
    image: "/images/blackjack-game.png",
    meta: [
      { label: "Role", value: "Solo · learning project" },
      { label: "Live", value: "blackjack-pi-one" },
      { label: "Stack", value: "Vanilla JavaScript · HTML · CSS" },
      { label: "Focus", value: "DOM + state + game loop" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Real game logic in a real browser.",
        paragraphs: [
          "Blackjack as a coding exercise: shuffle, deal, hit, stand, dealer logic, win/loss conditions, betting state. Built without a framework so the DOM, state, and event handling stay visible.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Vanilla JS end-to-end.",
        bullets: [
          "Card deck data structure with shuffle and deal logic.",
          "Hand evaluation including the 1-or-11 ace rule.",
          "Dealer behavior loop and casino-style interface in HTML/CSS.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Language", value: "Vanilla JavaScript" },
          { label: "Layout", value: "HTML · CSS" },
          { label: "Focus", value: "DOM · game state · event loop" },
        ],
      },
    ],
  },

  // ─────────────── THREE.JS JOURNEY EXERCISES ───────────────
  {
    slug: "marble-race",
    eyebrow: "Case Study · 3D Game",
    title: "Marble",
    titleEm: "Race",
    tagline:
      "An interactive 3D marble racing game with realistic physics, a course timer, and a colorful obstacle course — built on Three.js with WebGL physics.",
    image: "/images/marble-race.png",
    meta: [
      { label: "Role", value: "Solo · 3D game build" },
      { label: "Live", value: "marble-game-delta" },
      { label: "Stack", value: "Three.js · WebGL · Physics" },
      { label: "Focus", value: "3D physics + game loop" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "A 3D physics game in the browser.",
        paragraphs: [
          "Marble Race is a browser-native 3D game: a marble rolls a procedurally-built obstacle course while a timer ticks. The physics is real — the marble responds to gravity, friction, and collision — and the course is built from primitives so the camera and lighting can do the heavy lifting.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Physics + course + camera.",
        bullets: [
          "Marble rigid-body simulation with gravity, friction, and collision response.",
          "Obstacle course built from Three.js primitives with color-keyed material variants.",
          "Game loop with course timer, restart, and camera-follow logic.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "3D engine", value: "Three.js · WebGL" },
          { label: "Physics", value: "Rigid-body · gravity · collision" },
          { label: "Game loop", value: "Timer · restart · camera follow" },
        ],
      },
    ],
  },
  {
    slug: "galaxy-generator",
    eyebrow: "Case Study · 3D Demo",
    title: "Galaxy",
    titleEm: "Generator",
    tagline:
      "A procedural spiral galaxy with customizable parameters and additive particle blending — built in Three.js as a study in particle systems and color interpolation.",
    image: "/images/galaxy-generator.png",
    meta: [
      { label: "Role", value: "Solo · Three.js exercise" },
      { label: "Live", value: "galaxy-generator-iota-liard" },
      { label: "Focus", value: "Particles + procedural geometry" },
      { label: "Stack", value: "Three.js · BufferGeometry · Additive blending" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "A galaxy you can tune.",
        paragraphs: [
          "Galaxies are gorgeous because they're chaotic but structured — tens of thousands of stars distributed along curved arms with color shifts from core to edge. The Generator gives you sliders for every parameter (count, branches, spin, randomness, inner color, outer color) so you can dial in the look in real time.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "BufferGeometry + additive blending.",
        bullets: [
          "Procedural particle distribution along spiral arms with branch + spin + randomness controls.",
          "Color interpolation from a hot inner color to a cool outer color along radius.",
          "Additive blending for the glow stack, depth-write off so particles overlap cleanly.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "3D engine", value: "Three.js" },
          { label: "Geometry", value: "BufferGeometry · BufferAttribute" },
          { label: "Material", value: "PointsMaterial · additive blending · depthWrite off" },
        ],
      },
    ],
  },
  {
    slug: "earth-shaders",
    eyebrow: "Case Study · GLSL Demo",
    title: "Earth",
    titleEm: "Shaders",
    tagline:
      "A 3D Earth visualization with realistic continents, atmospheric scattering, and day/night cycles — built as a focused study in custom GLSL fragment shaders.",
    image: "/images/earth-shaders.png",
    meta: [
      { label: "Role", value: "Solo · GLSL exercise" },
      { label: "Live", value: "earth-shaders-kappa" },
      { label: "Focus", value: "Custom fragment + vertex shaders" },
      { label: "Stack", value: "GLSL · WebGL · Three.js" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Shipping a planet on the GPU.",
        paragraphs: [
          "An Earth that handles its own day/night transition, atmospheric scattering, and continent texturing — entirely in GLSL fragment and vertex shaders. The point of the exercise is to do as much of the work on the GPU as possible.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Fragment + vertex + atmosphere.",
        bullets: [
          "Custom fragment shader compositing day/night textures based on sun direction.",
          "Atmospheric scattering glow as a separate sphere with a back-side fragment shader.",
          "Cloud layer with offset rotation and subtle alpha modulation.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Shaders", value: "Custom GLSL · fragment + vertex" },
          { label: "3D engine", value: "Three.js · WebGL" },
          { label: "Technique", value: "Atmospheric scattering · day/night blend · cloud layer" },
        ],
      },
    ],
  },
  {
    slug: "portal-scene",
    eyebrow: "Case Study · 3D Scene",
    title: "Portal",
    titleEm: "Scene",
    tagline:
      "A mystical 3D portal with glowing effects, geometric structures, and a starfield background — built in React Three Fiber with custom GLSL shaders.",
    image: "/images/portal-scene.png",
    meta: [
      { label: "Role", value: "Solo · R3F + GLSL exercise" },
      { label: "Live", value: "portal-scene-r3-f" },
      { label: "Focus", value: "Scene composition + shader effects" },
      { label: "Stack", value: "R3F · GLSL · Three.js" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Composing a mood, not a model.",
        paragraphs: [
          "A portal scene is mostly atmosphere: a structured geometric frame, a custom-shaded portal effect, lighting that sells the mystery, and a starfield that sits behind it all without competing. The exercise was less about modeling and more about composing.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Frame + portal + stars.",
        bullets: [
          "Custom GLSL shader for the swirling portal interior.",
          "Geometric portal frame with bake-friendly materials.",
          "Procedural starfield background using buffer-attribute particles.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "Renderer", value: "React Three Fiber · Three.js" },
          { label: "Shaders", value: "Custom GLSL fragment + vertex" },
          { label: "Particles", value: "BufferGeometry starfield" },
        ],
      },
    ],
  },
  {
    slug: "fireworks",
    eyebrow: "Case Study · Particle System",
    title: "Fireworks",
    titleEm: "Display",
    tagline:
      "An interactive fireworks particle system with customizable parameters and explosive effects — built in Three.js as a study in particle lifecycle and additive blending.",
    image: "/images/fireworks.png",
    meta: [
      { label: "Role", value: "Solo · particle exercise" },
      { label: "Live", value: "fireworks-delta-fawn" },
      { label: "Focus", value: "Particle lifecycle + tuning" },
      { label: "Stack", value: "Three.js · Particles · Additive blending" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Fireworks tuned the way you'd actually want them.",
        paragraphs: [
          "Fireworks look easy in screenshots and hard in motion: every burst needs a launch, an explosion, color shifts, gravity-affected debris, and a fade. Tunable parameters made it possible to dial in the feeling, not just the look.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Launch → burst → fade.",
        bullets: [
          "Particle lifecycle: launch trajectory, burst expansion, gravity-affected debris, opacity fade.",
          "Customizable parameters for color, count, spread, and gravity.",
          "Additive blending and depth-write tuning so the bursts sit cleanly against the night sky.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "3D engine", value: "Three.js" },
          { label: "Particles", value: "BufferGeometry · lifecycle · additive blending" },
          { label: "Tuning", value: "Customizable color / count / spread / gravity" },
        ],
      },
    ],
  },
  {
    slug: "haunted-house",
    eyebrow: "Case Study · 3D Scene",
    title: "Haunted",
    titleEm: "House",
    tagline:
      "A spooky 3D scene with atmospheric fog, eerie lighting, and interactive controls — built in Three.js as a study in mood lighting and atmospheric effects.",
    image: "/images/haunted-house.png",
    meta: [
      { label: "Role", value: "Solo · Three.js exercise" },
      { label: "Live", value: "haunted-house-3-js-tau" },
      { label: "Focus", value: "Mood lighting + atmosphere" },
      { label: "Stack", value: "Three.js · Lighting · Fog" },
    ],
    sections: [
      {
        tag: "01 / What it is",
        title: "Atmosphere as the main character.",
        paragraphs: [
          "A haunted house works because of what you can't quite see — the fog, the moving lights, the silhouette of trees against a darker sky. The point of the exercise was to use Three.js's lighting and fog systems to set a mood, not to build a hyper-detailed model.",
        ],
      },
      {
        tag: "02 / What I built",
        title: "Lights + fog + controls.",
        bullets: [
          "Multi-light setup with directional moonlight, point lights for door + windows, and animated ghosts.",
          "Atmospheric fog tuned to the scene's color palette.",
          "Interactive camera controls so the visitor can walk the scene.",
        ],
      },
      {
        tag: "03 / Stack",
        title: "What it's built on.",
        stack: [
          { label: "3D engine", value: "Three.js" },
          { label: "Lighting", value: "Directional + point lights · animated ghosts" },
          { label: "Atmosphere", value: "Color-matched fog · interactive camera" },
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug)
}
