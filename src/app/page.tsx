import { Hero } from "@/components/sections/Hero";
import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

/**
 * Portfolio entry page.
 * Composes layout and sections only, containing zero hardcoded text or state logic.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-[clamp(1.25rem,5vw,4rem)] min-[861px]:grid-cols-[minmax(250px,36%)_1fr] min-[861px]:gap-16">
        <Sidebar />
        <main className="py-12 min-[861px]:py-20 min-[861px]:pb-24">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
