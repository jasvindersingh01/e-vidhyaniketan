import About from "../components/sections/About";
import Courses from "../components/sections/CoursesSection";
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
        </>
    )
}