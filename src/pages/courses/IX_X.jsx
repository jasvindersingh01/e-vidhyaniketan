import SEO from "../../components/common/SEO";
import PageBanner from "../../components/common/PageBanner";
import CTA from "../../components/common/CTA";

import Hero from "../../components/courses/ix-x/Hero";
import Features from "../../components/courses/ix-x/Features";
import LearningExperience from "../../components/courses/ix-x/LearningExperience";
import AdmissionFAQ from "../../components/admissions/AdmissionFAQ";

const IX_X = () => {

    return (

        <>

            <SEO

                title="Class IX - X"

                description="Comprehensive coaching for Classes IX and X at E-Vidyaniketan, Kota. CBSE-focused teaching, doubt sessions, weekly assessments, parent interaction and individual attention."

                keywords="Class 9 coaching Kota, Class 10 coaching Kota, CBSE coaching Kota, E Vidyaniketan IX X, Science Maths coaching Talwandi"

                path="/courses/ix-x"

            />



            <PageBanner

                title="Class IX - X"

                description="Strong academic foundations with conceptual clarity, disciplined learning and continuous guidance."

                currentPage="Class IX - X"

            />



            <Hero />


            <Features />


            <LearningExperience />


            <AdmissionFAQ />


            <CTA />


        </>

    );

};

export default IX_X;