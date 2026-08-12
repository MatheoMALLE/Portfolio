import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const BLUE = "var(--color-blue)";
const WHITE = "var(--color-white)";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Wave topColor={BLUE} bottomColor={WHITE} />
        <About />
        <Wave topColor={WHITE} bottomColor={BLUE} />
        <Skills />
        <Wave topColor={BLUE} bottomColor={WHITE} />
        <Experience />
        <Wave topColor={WHITE} bottomColor={BLUE} />
        <Projects />
        <Wave topColor={BLUE} bottomColor={WHITE} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
