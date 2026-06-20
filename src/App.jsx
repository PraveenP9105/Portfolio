import { ThemeProvider } from "./contexts/ThemeContext";
import GlowBackground from "./components/ui/GlowBackground";
import FloatingNavbar from "./components/ui/FloatingNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Awards from "./components/Awards";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Fixed ambient background */}
        <GlowBackground />

        {/* Floating navigation */}
        <FloatingNavbar />

        {/* Page content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Internships />
          <Certifications />
          <Achievements />
          <Awards />
          <Languages />
          <Contact />
          <ContactForm />
          <Footer />
        </main>
        
        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}
