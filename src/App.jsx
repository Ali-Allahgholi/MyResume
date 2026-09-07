import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Dynamic Ambient Glow that smoothly moves from right to left as you scroll
function DynamicAmbientGlow() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate smooth translation from top-right to bottom-left:
  // - Top of page (progress = 0): stays at initial top-right position
  // - Bottom of page (progress = 1): moves across by -75vw to the left, and descends by ~45vh
  const translateX = -(scrollProgress * 75); // moves from 0 to -75vw
  const translateY = scrollProgress * 45;    // descends from 0 to +45vh

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Primary Dynamic Mint Aura */}
      <div
        className="absolute -top-16 -right-16 w-[520px] sm:w-[700px] h-[520px] sm:h-[700px] rounded-full bg-[#56e39f]/20 dark:bg-[#56e39f]/25 blur-[120px] sm:blur-[150px] will-change-transform"
        style={{
          transform: `translate3d(${translateX}vw, ${translateY}vh, 0)`,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Secondary Complementary Depth Aura */}
      <div
        className="absolute top-1/3 -left-20 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px] sm:blur-[130px] will-change-transform"
        style={{
          transform: `translate3d(${scrollProgress * 25}vw, -${scrollProgress * 20}vh, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}

function CvApp() {
  return (
    <div className="min-h-screen relative bg-slate-50 dark:bg-[#0d0f12] text-slate-900 dark:text-slate-100 selection:bg-[#56e39f] selection:text-black transition-colors duration-300">
      {/* Interactive Smooth Scrolling Background Glow */}
      <DynamicAmbientGlow />

      {/* Main Website Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CvApp />
    </ThemeProvider>
  );
}
