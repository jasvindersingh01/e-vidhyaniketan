import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/common/FloatingButtons";
import Loader from "./components/common/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import ContactSection from "./pages/Contact";
import IX_X from "./pages/courses/IX_X";
import XI_XII from "./pages/courses/XI_XII";
import Gallery from "./pages/Gallery";

export default function App() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const lenis = new Lenis();

        let rafId;

        function raf(time) {

            lenis.raf(time);

            rafId = requestAnimationFrame(raf);

        }

        rafId = requestAnimationFrame(raf);

        return () => {

            cancelAnimationFrame(rafId);

            lenis.destroy();

        };

    }, []);



    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 1800);

        return () => clearTimeout(timer);

    }, []);



    if (loading) {

        return <Loader />;

    }



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