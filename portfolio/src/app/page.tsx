import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import DailyQuest from "@/components/DailyQuest";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="stats">
          <Stats />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <DailyQuest />
        <Footer />
      </main>
    </>
  );
}
