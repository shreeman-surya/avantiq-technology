import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Process from "./components/Process";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <Solutions />
        <WhyUs />
        <About />
        <Process />
        {/* <Technology /> */}
        <Projects />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
