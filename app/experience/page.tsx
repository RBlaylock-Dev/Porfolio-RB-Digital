import ExperienceTimeline from "@/components/experience-timeline"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Professional Experience</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        My career journey showcasing leadership, project management, and technical growth across various industries
      </p>
      <ExperienceTimeline />
    </div>
  )
}
