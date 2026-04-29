import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AboutProps {
  showFull?: boolean;
}

export default function About({ showFull = false }: AboutProps) {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {!showFull && (
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        )}

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary -mt-6">
              <Image
                src="/images/profile.png"
                alt="Profile picture"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              I&apos;m a Senior Full-Stack &amp; AI Engineer. My day job is
              with Banyan Labs — building production conversational AI
              agents, multi-tenant SaaS platforms, and interactive 3D web
              experiences — and I also take on direct freelance and contract
              work for teams who want to hire me as an individual, not an
              agency. My toolkit spans Next.js, React, Go, Flutter, and
              Three.js, with a deep focus on modern LLM stacks — Claude, AWS
              Bedrock, OpenAI, MCP, and RAG.
            </p>

            <p className="text-lg mb-6">
              I started teaching myself to code about six years ago, earned my
              Full-Stack Developer certificate through Persevere, and joined
              Banyan Labs — a software studio that employs and mentors
              justice-impacted developers through real client work. Since then
              I&apos;ve grown into senior IC and tech-lead roles, shipping
              AI-native products end-to-end and mentoring junior engineers
              along the way. Before software, I spent a decade leading teams
              and managing operations — that ground-floor leadership still
              shapes how I ship today.
            </p>

            {!showFull && (
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">Want to know more?</Link>
                </Button>
              </div>
            )}

            {showFull && (
              <>
                <p className="text-lg mb-6">
                  My faith in Christ is the foundation of how I work and why.
                  I see software as a craft to steward well, and I&apos;m
                  drawn to building products that serve the underserved —
                  tools for justice-impacted workers, ministries, and
                  communities trying to do better by their people. That
                  conviction is why projects like HALO, Redeemly, and
                  Banyan&apos;s mission-driven work matter to me beyond the
                  code.
                </p>

                <p className="text-lg mb-6">
                  Outside of work I&apos;m a husband and dad, I serve in my
                  local church, and I try to keep a healthy rhythm between
                  building things and being present with the people I love.
                </p>

                <p className="text-lg mb-6">
                  I&apos;m open to senior IC roles, contracts, and direct
                  freelance engagements — short scopes, long builds, or
                  fractional senior help, all on the table. If you&apos;re
                  building something meaningful — especially in AI, 3D, or
                  mission-aligned technology — let&apos;s talk.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
