import { Hero } from "@/components/sections/Hero";
import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

/**
 * Portfolio entry page.
 * Composes layout and sections only, containing zero hardcoded text or state logic.
 * Section order:
 * 1. About (biography + StatsStrip)
 * 2. Expertise (3 competence cards)
 * 3. Experience (detailed career history)
 * 4. Projects (flagship case study + category filterable grid)
 * 5. Stack (infinite marquee)
 * 6. Education (credentials & certifications)
 * 7. Testimonials (conditional peer recommendations)
 * 8. Contact (availability badge, direct email, socials, resume)
 */
export default function Home() {
  return (
    <>
      {/* Fixed top-right theme toggle with sun & moon icons */}
      <ThemeToggle />

      <Hero />
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-[clamp(1.25rem,5vw,4rem)] min-[861px]:grid-cols-[minmax(250px,36%)_1fr] min-[861px]:gap-16">
        <Sidebar />
        <main className="min-w-0 py-12 min-[861px]:py-20 min-[861px]:pb-24">
          <About />
          <Expertise />
          <Experience />
          <Projects />
          <StackMarquee />
          <Education />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </>
  );
}
