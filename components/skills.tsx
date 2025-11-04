"use client"

import Image from "next/image"

interface SkillsProps {
  showFull?: boolean
}

interface Skill {
  name: string
  image: string
  category: "frontend" | "backend" | "tools"
}

export default function Skills({ showFull = false }: SkillsProps) {
  const skills: Skill[] = [
    // Frontend Skills
    { name: "JavaScript", image: "/javascript-logo.png", category: "frontend" },
    { name: "TypeScript", image: "/typescript-logo.png", category: "frontend" },
    { name: "React", image: "/react-logo.png", category: "frontend" },
    { name: "Next.js", image: "/nextjs-logo.png", category: "frontend" },
    { name: "Three.js", image: "/three-js-logo.jpg", category: "frontend" },
    { name: "React Three Fiber", image: "/react-three-fiber-logo.jpg", category: "frontend" },
    { name: "HTML/CSS", image: "/html-css-logo.jpg", category: "frontend" },
    { name: "Tailwind CSS", image: "/tailwind-css-logo.png", category: "frontend" },

    // Backend Skills
    { name: "Node.js", image: "/nodejs-logo.png", category: "backend" },
    { name: "Express", image: "/expressjs-logo.png", category: "backend" },
    { name: "MongoDB", image: "/mongodb-logo.png", category: "backend" },
    { name: "AWS", image: "/aws-logo.png", category: "backend" },
    { name: "Supabase", image: "/supabase-logo.png", category: "backend" },
    { name: "Postgres", image: "/postgresql-logo.png", category: "backend" },
    { name: "PHP", image: "/php-logo.png", category: "backend" },

    // Tools & Technologies
    { name: "Git", image: "/git-logo.jpg", category: "tools" },
    { name: "Docker", image: "/docker-logo.png", category: "tools" },
    { name: "GitFlow", image: "/git-workflow-logo.jpg", category: "tools" },
    { name: "ClickUp", image: "/clickup-logo.png", category: "tools" },
    { name: "GSuite", image: "/google-workspace-logo.png", category: "tools" },
    { name: "ChatGPT/AI", image: "/chatgpt-ai-logo.jpg", category: "tools" },
    { name: "Apache", image: "/apache-server-logo.jpg", category: "tools" },
    { name: "JWT", image: "/json-web-token-logo.jpg", category: "tools" },
    { name: "Mongoose", image: "/mongoose-odm-logo.jpg", category: "tools" },
  ]

  const frontendSkills = skills.filter((skill) => skill.category === "frontend")
  const backendSkills = skills.filter((skill) => skill.category === "backend")
  const toolSkills = skills.filter((skill) => skill.category === "tools")

  const SkillItem = ({ skill }: { skill: Skill }) => (
    <div className="group">
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
        <div className="relative w-12 h-12 mb-2">
          <Image
            src={skill.image || "/placeholder.svg"}
            alt={`${skill.name} logo`}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    </div>
  )

  const SkillSection = ({ title, skills, titleColor }: { title: string; skills: Skill[]; titleColor: string }) => (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold mb-6 text-center ${titleColor}`}>{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )

  if (showFull) {
    // Full page view with categorized sections
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

          <div className="space-y-12">
            <SkillSection title="Frontend" skills={frontendSkills} titleColor="text-blue-600 dark:text-blue-400" />
            <SkillSection title="Backend" skills={backendSkills} titleColor="text-green-600 dark:text-green-400" />
            <SkillSection title="DevOps/Tools" skills={toolSkills} titleColor="text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </section>
    )
  }

  // Home page view with static sections
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="space-y-12">
          {/* Frontend Section */}
          <SkillSection title="Frontend" skills={frontendSkills} titleColor="text-blue-600 dark:text-blue-400" />

          {/* Backend Section */}
          <SkillSection title="Backend" skills={backendSkills} titleColor="text-green-600 dark:text-green-400" />

          {/* DevOps/Tools Section */}
          <SkillSection title="DevOps/Tools" skills={toolSkills} titleColor="text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </section>
  )
}
