import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import Header from "./components/layout/Header";

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
      <Home />
    </>
  );
}