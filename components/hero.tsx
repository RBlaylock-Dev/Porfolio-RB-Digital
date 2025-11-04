import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeDownload } from "@/components/resume-download"

export default function Hero() {
  return (
    <section className="hero-section py-20 md:py-32 bg-gradient-to-br from-crimson-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-primary bg-gradient-to-r from-crimson-500 to-blue-600 bg-clip-text text-transparent">
            Robert Blaylock
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
          Full Stack Developer with Project Management experience specializing in building exceptional digital
          experiences
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-crimson-500 to-crimson-600 hover:from-crimson-600 hover:to-crimson-700 text-white font-semibold"
          >
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <ResumeDownload
            variant="outline"
            size="lg"
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold"
          />
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-crimson-500 text-crimson-600 hover:bg-crimson-500 hover:text-white font-semibold bg-transparent"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
