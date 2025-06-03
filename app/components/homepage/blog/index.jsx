// @flow strict
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import ContactSection from '@/components/ContactSection';

function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}

export default Home;
