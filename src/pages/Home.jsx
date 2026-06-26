import SEO from "../components/common/SEO";
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

export default function Home() {
    return (
        <>
            <SEO

                title=" E-Vidyaniketan | Best Coaching Institute in Kota for Classes IX–XII"

                description="E-Vidyaniketan is a leading coaching institute in Kota, Rajasthan established in 2002, offering Classes IX–XII programs in Science (PCM & PCB) and Commerce with CBSE-oriented teaching, individual attention, regular assessments and value-based education."

                keywords="E-Vidyaniketan, E Vidyaniketan Kota, Coaching Institute Kota, Best Coaching Institute in Kota, Class 9 Coaching Kota, Class 10 Coaching Kota, Class 11 Coaching Kota, Class 12 Coaching Kota, PCM Coaching Kota, PCB Coaching Kota, Commerce Coaching Kota, CBSE Coaching Kota, Talwandi Coaching Institute"

                path="/"

                image="/og-image.jpg"

            />
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