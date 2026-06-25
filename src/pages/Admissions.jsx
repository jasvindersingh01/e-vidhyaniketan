import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";
import AdmissionGuidelines from "../components/admissions/AdmissionGuidelines";
import AdmissionFAQ from "../components/admissions/AdmissionFAQ";
import CTA from "../components/common/CTA";

const Admissions = () => {

    return (

        <>

            <SEO

                title="Admissions"

                description="Explore admission guidelines, eligibility criteria and academic policies at E-Vidyaniketan, Kota."

                keywords="E Vidyaniketan admissions, Class 9 admission Kota, Class 10 coaching admission, XI XII admissions"

                path="/admissions"

            />


            <PageBanner

                title="Admissions"

                description="Join E-Vidyaniketan and become a part of a disciplined learning environment dedicated to academic excellence."

                currentPage="Admissions"

            />


            <AdmissionGuidelines />


            <AdmissionFAQ />


            <CTA />


        </>

    );

};

export default Admissions;