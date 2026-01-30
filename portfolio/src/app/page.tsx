import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Projects />
    </main>
  );
}
