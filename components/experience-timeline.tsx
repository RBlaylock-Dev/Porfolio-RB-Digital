"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  period: string
  description: string[]
  skills: string[]
  current?: boolean
}

export default function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Banyan Labs LLC",
      position: "Senior Full-Stack & AI Engineer/Three.JS Developer",
      duration: "2025 - Present",
      period: "Current",
      description: [
        "Designed and shipped Harper (HRPR), a production conversational AI agent — Flutter client + Go BFF, AWS Bedrock (Claude), MCP-driven tool routing, multi-provider TTS (Polly/ElevenLabs), and an embeddable auto-theming widget with a consent-driven 'shallow-to-deep' interaction model",
        "Built multi-provider LLM orchestration across products — streaming Claude integrations, OpenAI / Anthropic / Bedrock / Groq routing, RAG with sentence-transformer embeddings, AI resume↔job matching, and a Claude-powered in-world AI agent on rblaylock.dev",
        "Built and co-led production apps for Banyan Labs and external clients — internal training portals, multi-tenant SaaS platforms, and cinematic marketing sites on Next.js 16, React 19, Firebase App Hosting, and Cloud SQL",
        "Engineered JONA, a multi-tenant job-aggregation SaaS — nine production scrapers (Playwright + Selenium), Stripe-billed subscription tiers, and Supabase RLS-scoped tenancy with embedding-based skill matching",
        "Built first-person 3D web experiences with Three.js, React Three Fiber, and custom GLSL shaders — including a walkable portfolio, dynamic resume PDF generation, and a Claude-powered Forge Spirit chatbot",
        "Tech-led cross-functional teams, authored engineering standards, and hardened production systems — Firestore security rules, multi-stage Docker, server-side secret injection, and GitHub Actions CI/CD",
      ],
      skills: [
        "LLM Integration",
        "AI Agents",
        "Conversational AI",
        "RAG",
        "MCP",
        "Embeddings",
        "Claude API",
        "Anthropic SDK",
        "AWS Bedrock",
        "OpenAI",
        "ElevenLabs",
        "Prompt Engineering",
        "Streaming Responses",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "React Three Fiber",
        "GLSL Shaders",
        "WebGL",
        "Flutter",
        "Go",
        "Python",
        "FastAPI",
        "Payload CMS",
        "Strapi 5",
        "Firebase",
        "Firestore",
        "PostgreSQL",
        "Cloud SQL",
        "Supabase",
        "Stripe",
        "Docker",
        "GitHub Actions",
        "Multi-Tenant SaaS",
        "WebSockets",
      ],
      current: true,
    },
    {
      id: 2,
      company: "The Animal Hospital",
      position: "Receptionist",
      duration: "2022 - 2025",
      period: "3 years",
      description: [
        "Facilitated smooth interactions between clients and staff, enhancing collaboration skills",
        "Managed scheduling and records with precision, ensuring efficient task handling",
        "Resolved client issues promptly, demonstrating troubleshooting abilities",
        "Utilized office software efficiently, showcasing adaptability to new technologies",
      ],
      skills: ["Customer Service", "Scheduling", "Problem Solving", "Office Software"],
    },
    {
      id: 3,
      company: "National Retail Solutions",
      position: "Team Lead | Crew Coordinator | Project Manager",
      duration: "2017 - 2022",
      period: "5 years",
      description: [
        "Led a team of 35+ members, demonstrating strong leadership skills",
        "Streamlined processes to boost productivity and efficiency",
        "Managed project schedules and documentation with clear communication",
        "Analyzed data to improve operations and drive decision-making",
      ],
      skills: ["Leadership", "Project Management", "Team Coordination", "Process Optimization"],
    },
    {
      id: 4,
      company: "Taco Bell",
      position: "Restaurant General Manager",
      duration: "2011 - 2017",
      period: "6 years",
      description: [
        "Managed daily operations and team, showcasing leadership abilities",
        "Optimized workflows and processes, demonstrating problem-solving skills",
        "Resolved customer issues and feedback with user-focused approach",
        "Analyzed performance data for operational insights and improvements",
      ],
      skills: ["Operations Management", "Team Leadership", "Customer Relations", "Performance Analysis"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 experience-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          My career journey showcasing leadership, project management, and technical growth across various industries
        </p>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson-200 via-primary to-blue-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 z-10 ${
                      exp.current ? "bg-crimson-500" : "bg-primary"
                    }`}
                  ></div>

                  {/* Card - alternating sides on desktop, all left on mobile */}
                  <div
                    className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"} md:w-1/2`}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div
                          className={`flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start items-start mb-2 gap-2`}
                        >
                          <Badge variant={exp.current ? "default" : "secondary"}>{exp.duration}</Badge>
                          {exp.current && (
                            <Badge variant="outline" className="text-crimson-600 border-crimson-600">
                              Current
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">{exp.position}</CardTitle>
                        <CardDescription className="font-semibold text-primary">{exp.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 mb-4">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400">
                              • {desc}
                            </li>
                          ))}
                        </ul>
                        <div
                          className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start`}
                        >
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
