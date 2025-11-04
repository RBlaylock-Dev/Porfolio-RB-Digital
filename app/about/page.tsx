import About from "@/components/about"
import ExperienceTimeline from "@/components/experience-timeline"
import Skills from "@/components/skills"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <About showFull={true} />
      <div className="mt-16">
        <ExperienceTimeline />
      </div>
      <Skills showFull={true} />
    </div>
  )
}
