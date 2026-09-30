import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { VerseDivider } from "@/components/ui/verse";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VerseDivider verse="afterHero" />
        <About />
        <VerseDivider verse="afterAbout" />
        <Stack />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
