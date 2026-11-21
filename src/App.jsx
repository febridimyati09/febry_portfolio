import { useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StarDivider } from "./components/Ornaments";

export default function App() {
  const [ready, setReady] = useState(false);
  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <Cursor />
      <Navbar />
      <MobileNav />
      <main>
        <Hero ready={ready} />
        <StarDivider />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
