"use client"

import type { IconType } from "react-icons"
import {
  SiAnthropic,
  SiAppwrite,
  SiClaude,
  SiClerk,
  SiClickup,
  SiCloudflare,
  SiCss,
  SiDart,
  SiDocker,
  SiDrizzle,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiHelm,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMailchimp,
  SiMarkdown,
  SiMdx,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiOpenai,
  SiPayloadcms,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPython,
  SiRadixui,
  SiRailway,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiResend,
  SiShadcnui,
  SiStrapi,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si"
import {
  LuActivity,
  LuBot,
  LuBoxes,
  LuBrain,
  LuCloud,
  LuCode,
  LuTestTube,
  LuDatabase,
  LuGlobe,
  LuKey,
  LuLayers,
  LuMail,
  LuMessageCircle,
  LuMic,
  LuNetwork,
  LuOrbit,
  LuPalette,
  LuRoute,
  LuShield,
  LuSparkles,
  LuWebhook,
  LuZap,
} from "react-icons/lu"

interface SkillsProps {
  showFull?: boolean
}

interface Skill {
  name: string
  Icon: IconType
}

interface Category {
  title: string
  accent: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    title: "AI & LLMs",
    accent: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "LLM Integration", Icon: LuBrain },
      { name: "AI Agents", Icon: LuBot },
      { name: "Conversational AI", Icon: LuMessageCircle },
      { name: "RAG", Icon: LuDatabase },
      { name: "MCP", Icon: LuNetwork },
      { name: "Embeddings", Icon: LuSparkles },
      { name: "Prompt Engineering", Icon: LuActivity },
      { name: "Streaming Responses", Icon: LuZap },
      { name: "Claude", Icon: SiClaude },
      { name: "Anthropic SDK", Icon: SiAnthropic },
      { name: "OpenAI", Icon: SiOpenai },
      { name: "AWS Bedrock", Icon: LuCloud },
      { name: "ElevenLabs", Icon: LuMic },
      { name: "Hugging Face", Icon: SiHuggingface },
    ],
  },
  {
    title: "Languages",
    accent: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Go", Icon: SiGo },
      { name: "Python", Icon: SiPython },
      { name: "Dart", Icon: SiDart },
      { name: "GLSL", Icon: LuCode },
      { name: "SQL", Icon: LuDatabase },
      { name: "PHP", Icon: SiPhp },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "Markdown", Icon: SiMarkdown },
    ],
  },
  {
    title: "Frontend & 3D",
    accent: "text-cyan-600 dark:text-cyan-400",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "shadcn/ui", Icon: SiShadcnui },
      { name: "Radix UI", Icon: SiRadixui },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "MDX", Icon: SiMdx },
      { name: "React Router", Icon: SiReactrouter },
      { name: "Three.js", Icon: SiThreedotjs },
      { name: "React Three Fiber", Icon: LuOrbit },
      { name: "GLSL Shaders", Icon: LuLayers },
      { name: "WebGL", Icon: LuLayers },
    ],
  },
  {
    title: "Mobile",
    accent: "text-pink-600 dark:text-pink-400",
    skills: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Riverpod", Icon: LuLayers },
      { name: "go_router", Icon: LuRoute },
      { name: "Material 3", Icon: LuPalette },
    ],
  },
  {
    title: "Backend & APIs",
    accent: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Strapi", Icon: SiStrapi },
      { name: "Payload CMS", Icon: SiPayloadcms },
      { name: "WordPress", Icon: SiWordpress },
      { name: "GraphQL", Icon: SiGraphql },
      { name: "gRPC", Icon: LuNetwork },
      { name: "REST APIs", Icon: LuGlobe },
      { name: "WebSockets", Icon: LuZap },
      { name: "Webhooks", Icon: LuWebhook },
      { name: "Microservices", Icon: LuBoxes },
    ],
  },
  {
    title: "Databases",
    accent: "text-amber-600 dark:text-amber-400",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Firestore", Icon: SiFirebase },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Redis", Icon: SiRedis },
      { name: "Appwrite", Icon: SiAppwrite },
      { name: "Drizzle ORM", Icon: SiDrizzle },
      { name: "Mongoose", Icon: SiMongoose },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "text-sky-600 dark:text-sky-400",
    skills: [
      { name: "Firebase App Hosting", Icon: SiFirebase },
      { name: "Google Cloud", Icon: SiGooglecloud },
      { name: "Cloud Run", Icon: SiGooglecloud },
      { name: "Cloud SQL", Icon: SiGooglecloud },
      { name: "AWS", Icon: LuCloud },
      { name: "Vercel", Icon: SiVercel },
      { name: "Railway", Icon: SiRailway },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Helm", Icon: SiHelm },
      { name: "Terraform", Icon: SiTerraform },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "GitHub", Icon: SiGithub },
      { name: "Git", Icon: SiGit },
    ],
  },
  {
    title: "Auth & Services",
    accent: "text-rose-600 dark:text-rose-400",
    skills: [
      { name: "Stripe", Icon: SiStripe },
      { name: "Clerk", Icon: SiClerk },
      { name: "JWT", Icon: LuKey },
      { name: "OAuth 2.0", Icon: LuShield },
      { name: "SendGrid", Icon: LuMail },
      { name: "Resend", Icon: SiResend },
      { name: "Mailchimp", Icon: SiMailchimp },
    ],
  },
  {
    title: "Tools",
    accent: "text-purple-600 dark:text-purple-400",
    skills: [
      { name: "ClickUp", Icon: SiClickup },
      { name: "Figma", Icon: SiFigma },
      { name: "Notion", Icon: SiNotion },
      { name: "Postman", Icon: SiPostman },
      { name: "Playwright", Icon: LuTestTube },
      { name: "Jest", Icon: SiJest },
      { name: "ESLint", Icon: SiEslint },
      { name: "Prettier", Icon: SiPrettier },
    ],
  },
]

function SkillChip({ skill, accent }: { skill: Skill; accent: string }) {
  const { Icon, name } = skill
  return (
    <div className="group inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <Icon
        className={`w-4 h-4 ${accent} group-hover:scale-110 transition-transform duration-200`}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

function CategorySection({ category }: { category: Category }) {
  return (
    <div className="mb-10">
      <h3 className={`text-xl md:text-2xl font-bold mb-5 text-center ${category.accent}`}>
        {category.title}
      </h3>
      <div className="flex flex-wrap justify-center gap-2.5">
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} accent={category.accent} />
        ))}
      </div>
    </div>
  )
}

export default function Skills({ showFull = false }: SkillsProps) {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">My Skills</h2>
        {!showFull && (
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            The full toolkit I use across AI, web, mobile, and infrastructure
          </p>
        )}
        {showFull && <div className="mb-8" />}

        <div className="space-y-8">
          {categories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
