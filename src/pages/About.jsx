import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";

import AboutHero from "../components/about/AboutHero";
// import Foundation from "../components/about/Foundation";
import Objectives from "../components/about/Objectives";
import GeneralValues from "../components/about/GeneralValues";
import DirectorMessage from "../components/about/DirectorMessage";
import Faculty from "../components/about/Faculty";
import KotaCity from "../components/about/KotaCity";
import Discipline from "../components/about/Discipline";
import CTA from "../components/common/CTA";

const About = () => {

    return (

        <>

            <SEO
                title="About Us"
                description="Learn about E-Vidyaniketan, Kota's trusted educational institute founded in 2002, dedicated to academic excellence, discipline and holistic student development."
                keywords="E Vidyaniketan, E Vidyaniketan Kota, Best Coaching Institute Kota, Class 9 Coaching Kota, Class 10 Coaching Kota, Class 11 Coaching Kota, Class 12 Coaching Kota"
                path="/about"
            />


            <PageBanner

                title="About E-Vidyaniketan"

                description="Discover our journey, philosophy, educators and the values that have shaped thousands of young minds since 2002."

                currentPage="About Us"

            />


            <AboutHero />


            {/* <Foundation /> */}


            <Objectives />


            <GeneralValues />


            <section id="director-message">

                <DirectorMessage />

            </section>


            <section id="faculty">

                <Faculty />

            </section>


            <section id="kota-city">

                <KotaCity />

            </section>


            <section id="discipline">

                <Discipline />

            </section>


            <CTA />

        </>

    );

};

export default About;