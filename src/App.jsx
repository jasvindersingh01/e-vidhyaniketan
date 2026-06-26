import { useEffect } from "react";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import ContactSection from "./pages/Contact";
import IX_X from "./pages/courses/IX_X";
import XI_XII from "./pages/courses/XI_XII";
import Gallery from "./pages/Gallery";
import FloatingButtons from "./components/common/FloatingButtons";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/ix-x" element={<IX_X />} />
        <Route path="/courses/xi-xii" element={<XI_XII />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <FloatingButtons />
      <Footer />
    </>
  );
}