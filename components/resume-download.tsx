"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

interface ResumeDownloadProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

export function ResumeDownload({ className, variant = "default", size = "default" }: ResumeDownloadProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const downloadPDF = async () => {
    setIsGeneratingPDF(true)

    try {
      // Create a temporary div with the updated resume content for PDF generation
      const resumeContent = document.createElement("div")
      resumeContent.style.width = "210mm" // A4 width
      resumeContent.style.padding = "20mm"
      resumeContent.style.backgroundColor = "white"
      resumeContent.style.color = "black"
      resumeContent.style.fontFamily = "Arial, sans-serif"
      resumeContent.style.fontSize = "12px"
      resumeContent.style.lineHeight = "1.4"

      resumeContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="font-size: 24px; font-weight: bold; margin: 0;">ROBERT BLAYLOCK</h1>
          <h2 style="font-size: 16px; color: #dc2626; margin: 5px 0;">Full Stack Software Engineer</h2>
          <div style="font-size: 11px; color: #666;">
            Counce, TN 38326 | robert@rblaylock.dev | +1 (731) 300-8706 | +1 (731) 400-3191
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 14px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px;">SUMMARY</h2>
          <p style="margin: 0;">
            Resourceful and driven Full Stack Developer with a strong command of modern web technologies, including
            Next.js, React, Node.js, and TypeScript. Certified in Three.js and AWS Cloud Foundations, with hands-on
            experience creating immersive 3D applications and deploying scalable, cloud-native solutions. Adept at full
            project lifecycle development, agile methodologies, and cross-functional collaboration using tools like ClickUp.
            Recognized for rapid learning, meticulous attention to detail, and a passion for building high-quality, user-
            centric digital experiences.
          </p>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 14px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px;">PROFESSIONAL EXPERIENCE</h2>
          
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <strong>Software Engineer/Three.JS Developer</strong>
              <span style="color: #666;">2025-Present</span>
            </div>
            <div style="font-weight: 600; margin-bottom: 5px;">Banyan Labs LLC</div>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Developed interactive 3D web experiences using Three.js, React Three Fiber, and GLSL to deliver immersive, real-time visual applications.</li>
              <li>Engineered responsive, user-friendly interfaces with Next.js, TypeScript, and Tailwind CSS, focusing on performance and accessibility.</li>
              <li>Integrated backend services with Supabase and REST APIs to support dynamic content, user authentication, and real-time data handling.</li>
              <li>Collaborated in agile team environments, contributing to code reviews, feature planning, and iterative UI/UX improvements based on client feedback.</li>
            </ul>
          </div>

          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <strong>Receptionist</strong>
              <span style="color: #666;">2022-2025</span>
            </div>
            <div style="font-weight: 600; margin-bottom: 5px;">The Animal Hospital</div>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Facilitated smooth interactions between clients and staff, enhancing collaboration skills for team environments.</li>
              <li>Managed scheduling and records with precision, ensuring efficient handling of tasks and documentation.</li>
              <li>Resolved client issues promptly, demonstrating skills in troubleshooting and issue resolution.</li>
              <li>Utilized office software efficiently, showcasing quick learning and adaptability to new technologies.</li>
            </ul>
          </div>

          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <strong>Team Lead | Crew Coordinator | Project Manager</strong>
              <span style="color: #666;">2017-2022</span>
            </div>
            <div style="font-weight: 600; margin-bottom: 5px;">National Retail Solutions</div>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Led a team of 35+ members, demonstrating strong leadership and project management skills.</li>
              <li>Streamlined processes to boost productivity, showcasing problem-solving and efficiency.</li>
              <li>Managed project schedules and documentation, ensuring clear communication and timely completion.</li>
              <li>Analyzed data to improve operations, similar to using metrics for design decisions in development.</li>
            </ul>
          </div>
        </div>

        <div style="display: flex; gap: 30px; margin-bottom: 20px;">
          <div style="flex: 1;">
            <h2 style="font-size: 14px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px;">EDUCATION</h2>
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between;">
                <strong>Front-End Development Certification</strong>
                <span style="color: #666;">2023-2024</span>
              </div>
              <div>Persevere</div>
            </div>
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between;">
                <strong>Certification in Full-Stack Development</strong>
                <span style="color: #666;">2024-2025</span>
              </div>
              <div>Persevere</div>
            </div>
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between;">
                <strong>High School Diploma</strong>
                <span style="color: #666;">2007-2010</span>
              </div>
              <div>New Beginnings Homeschool</div>
            </div>
          </div>

          <div style="flex: 1;">
            <h2 style="font-size: 14px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px;">SKILLS</h2>
            <div style="display: flex; gap: 20px;">
              <div>
                <strong>Technical</strong>
                <ul style="margin: 5px 0; padding-left: 20px;">
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
                <strong>Soft Skills</strong>
                <ul style="margin: 5px 0; padding-left: 20px;">
                  <li>Collaboration Tools</li>
                  <li>Communication</li>
                  <li>Problem-Solving</li>
                  <li>Creativity</li>
                  <li>Adaptability</li>
                  <li>Attention to Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 14px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px;">CERTIFICATIONS</h2>
          <ul style="margin: 0; padding-left: 20px;">
            <li>React</li>
            <li>JavaScript and Data Algorithms</li>
            <li>Responsive Web Design</li>
            <li>Cybersecurity</li>
            <li>Three.js</li>
            <li>AWS Cloud Foundations</li>
            <li>Swift Programming Language</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div>
          <h2 style="font-size: 14px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px;">LINKS</h2>
          <div>
            LinkedIn: https://www.linkedin.com/in/rblaylock286/ | 
            Portfolio: www.rblaylock.dev
          </div>
        </div>
      `

      // Temporarily add to DOM for rendering
      document.body.appendChild(resumeContent)

      const canvas = await html2canvas(resumeContent, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 794, // A4 width in pixels at 96 DPI
        height: 1123, // A4 height in pixels at 96 DPI
      })

      // Remove from DOM
      document.body.removeChild(resumeContent)

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save("Robert_Blaylock_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("There was an error generating the PDF. Please try again.")
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <Button onClick={downloadPDF} disabled={isGeneratingPDF} variant={variant} size={size} className={className}>
      {isGeneratingPDF ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </>
      )}
    </Button>
  )
}
