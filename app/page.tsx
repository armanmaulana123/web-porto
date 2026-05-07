import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Organization } from "@/components/Organization";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Organization />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
