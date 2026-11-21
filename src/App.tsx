import { Header } from "./components/Header";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { useReveal } from "./utils/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip" href="#sobre-mi">Saltar al contenido</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
