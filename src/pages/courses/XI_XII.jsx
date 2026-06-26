import SEO from "../../components/common/SEO";
import PageBanner from "../../components/common/PageBanner";
import CTA from "../../components/common/CTA";

import Hero from "../../components/courses/xi-xii/Hero";
import Streams from "../../components/courses/xi-xii/Streams";
import Highlights from "../../components/courses/xi-xii/Highlights";
import Methodology from "../../components/courses/xi-xii/Methodology";
import CourseFAQ from "../../components/courses/xi-xii/CourseFAQ";

const XI_XII = () => {

    return (

        <>

            <SEO

                title="Class XI - XII"

                description="E-Vidyaniketan offers Science (PCM & PCB) and Commerce coaching for Classes XI and XII with conceptual learning, individual attention, regular assessments and continuous academic guidance."

                keywords="Class 11 coaching Kota, Class 12 coaching Kota, PCM coaching Kota, PCB coaching Kota, Commerce coaching Kota, CBSE coaching Kota, E Vidyaniketan"

                path="/courses/xi-xii"

            />


            <PageBanner

                title="Class XI - XII"

                description="Guiding aspirations through conceptual clarity, disciplined learning and continuous academic support."

                currentPage="Class XI - XII"

            />


            <Hero />


            <Streams />


            <Highlights />


            <Methodology />


            <CourseFAQ />


            <CTA />


        </>

    );

};

export default XI_XII;