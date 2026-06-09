import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoldDivider from "./components/GoldDivider";

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <GoldDivider />
        <About />
        <GoldDivider />
        <Stack />
        <GoldDivider />
        <Experience />
        <GoldDivider />
        <Projects />
        <GoldDivider />
        <Achievements />
        <GoldDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
