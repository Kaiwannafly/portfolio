import MagicCursor from '@/components/MagicCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CodeGreeting from '@/components/CodeGreeting';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Capabilities from '@/components/Capabilities';
import ScrollingTicker from '@/components/ScrollingTicker';
import Education from '@/components/Education';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white relative">
      <MagicCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CodeGreeting />
        <Projects />
        <Skills />
        <Timeline />
        <Capabilities />
        <ScrollingTicker />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
