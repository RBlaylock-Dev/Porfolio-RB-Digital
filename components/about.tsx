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
              I’m a full stack developer with strong skills in JavaScript,
              Tailwind CSS, and React. I also bring valuable project management
              experience, enabling me to deliver efficient, well-organized
              solutions across both front-end and back-end development.
            </p>

            <p className="text-lg mb-6">
              I began teaching myself to code about six years ago and have since
              earned a Full Stack Developer certificate through Persevere. I’ve
              worked at Banyan Labs on projects like a web directory app and a
              product landing page, using Git, Git Flow, and Agile methodology
              to collaborate and deliver effectively.
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
                  When I&apos;m not coding, you can find me being a dad,
                  spending time with family, or serving at church. I believe in
                  maintaining a healthy work-life balance and finding
                  inspiration in diverse activities.
                </p>

                <p className="text-lg mb-6">
                  I&apos;m currently open to new opportunities where I can
                  contribute my skills and grow as a developer. If you&apos;re
                  looking for someone who is not only technically proficient but
                  also a great team player with excellent communication skills,
                  let&apos;s connect!
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
