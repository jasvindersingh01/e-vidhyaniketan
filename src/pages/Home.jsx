import About from "../components/sections/About";
import Courses from "../components/sections/Courses";
import CTA from "../components/sections/CTA";
import DirectorMessage from "../components/sections/DirectorMessage";
import DisciplineSection from "../components/sections/DisciplineSection";
import Faculty from "../components/sections/Faculty";
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import WhyChoose from "../components/sections/WhyChoose";

export default function Home () {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <Courses />
            <WhyChoose />
            <DirectorMessage />
            <Faculty />
            <DisciplineSection />
            <Gallery />
            <CTA />
        </>
    )
}