"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ResumeDownload } from "@/components/resume-download"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-6 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
        <ResumeDownload />
      </div>

      <div id="resume-content" className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">ROBERT BLAYLOCK</h1>
          <h2 className="text-xl text-primary mb-4">Full Stack Software Engineer</h2>
          <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Counce, TN 38326</span>
            <span>robert@rblaylock.dev</span>
            <span>+1 (731) 300-8706 | +1 (731) 400-3191</span>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">SUMMARY</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Resourceful and driven Full Stack Developer with a strong command of modern web technologies, including
            Next.js, React, Node.js, and TypeScript. Certified in Three.js and AWS Cloud Foundations, with hands-on
            experience creating immersive 3D applications and deploying scalable, cloud-native solutions. Adept at full
            project lifecycle development, agile methodologies, and cross-functional collaboration using tools like
            ClickUp. Recognized for rapid learning, meticulous attention to detail, and a passion for building
            high-quality, user- centric digital experiences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Software Engineer/Three.JS Developer</h3>
              <span className="text-gray-600 dark:text-gray-400">2025-Present</span>
            </div>
            <h4 className="font-semibold mb-2">Banyan Labs LLC</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                Developed interactive 3D web experiences using Three.js, React Three Fiber, and GLSL to deliver
                immersive, real-time visual applications.
              </li>
              <li>
                Engineered responsive, user-friendly interfaces with Next.js, TypeScript, and Tailwind CSS, focusing on
                performance and accessibility.
              </li>
              <li>
                Integrated backend services with Supabase and REST APIs to support dynamic content, user authentication,
                and real-time data handling.
              </li>
              <li>
                Collaborated in agile team environments, contributing to code reviews, feature planning, and iterative
                UI/UX improvements based on client feedback.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Receptionist</h3>
              <span className="text-gray-600 dark:text-gray-400">2022-2025</span>
            </div>
            <h4 className="font-semibold mb-2">The Animal Hospital</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                Facilitated smooth interactions between clients and staff, enhancing collaboration skills for team
                environments.
              </li>
              <li>
                Managed scheduling and records with precision, ensuring efficient handling of tasks and documentation.
              </li>
              <li>Resolved client issues promptly, demonstrating skills in troubleshooting and issue resolution.</li>
              <li>
                Utilized office software efficiently, showcasing quick learning and adaptability to new technologies.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Team Lead | Crew Coordinator | Project Manager</h3>
              <span className="text-gray-600 dark:text-gray-400">2017-2022</span>
            </div>
            <h4 className="font-semibold mb-2">National Retail Solutions</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Led a team of 35+ members, demonstrating strong leadership and project management skills.</li>
              <li>Streamlined processes to boost productivity, showcasing problem-solving and efficiency.</li>
              <li>Managed project schedules and documentation, ensuring clear communication and timely completion.</li>
              <li>
                Analyzed data to improve operations, similar to using metrics for design decisions in development.
              </li>
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">EDUCATION</h2>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Front-End Development Certification</h3>
                <span className="text-gray-600 dark:text-gray-400">2023-2024</span>
              </div>
              <p>Persevere</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Certification in Full-Stack Development</h3>
                <span className="text-gray-600 dark:text-gray-400">2024-2025</span>
              </div>
              <p>Persevere</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">High School Diploma</h3>
                <span className="text-gray-600 dark:text-gray-400">2007-2010</span>
              </div>
              <p>New Beginnings Homeschool</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">SKILLS</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <h3 className="font-bold mb-2">Technical</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>NextJS</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Version Control/Git</li>
                  <li>APIs</li>
                  <li>Testing and Debugging</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Soft Skills</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Collaboration Tools</li>
                  <li>Communication</li>
                  <li>Problem-Solving</li>
                  <li>Creativity</li>
                  <li>Adaptability</li>
                  <li>Attention to Detail</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">CERTIFICATIONS</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>React</li>
            <li>JavaScript and Data Algorithms</li>
            <li>Responsive Web Design</li>
            <li>Cybersecurity</li>
            <li>Three.js</li>
            <li>AWS Cloud Foundations</li>
            <li>Swift Programming Language</li>
            <li>Ruby on Rails</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">LINKS</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/rblaylock286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.rblaylock.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Portfolio
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
