import Projects from "@/components/projects"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <Projects showAll={true} />
    </div>
  )
}
