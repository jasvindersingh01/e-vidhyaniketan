import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageBanner from "../components/common/PageBanner";
import SEO from "../components/common/SEO";
import CTA from "../components/common/CTA";

const class10Results = [

    "/results/1.jpg",
    "/results/2.jpg",
    "/results/3.jpg",
    "/results/4.jpg",
    "/results/5.jpg",
    "/results/6.jpg",
    "/results/7.jpg",
    "/results/8.jpg",
    "/results/9.jpg",

];

const class12Results = [

    "/results/12-1.jpg",
    "/results/12-2.jpg",
    "/results/12-3.jpg",
    "/results/12-4.jpg",
    "/results/12-5.jpg",
    "/results/12-6.jpg",
    "/results/12-7.jpg",
    "/results/12-8.jpg",
    "/results/12-9.jpg",

];

const ResultSection = ({
    id,
    title,
    images,
    startIndex = 0,
    openLightbox
}) => (

    <div id={id} className="mt-16">

        <div className="flex items-center gap-4">

            <div className="h-10 w-1 rounded-full bg-accent" />

            <h2 className="text-3xl font-bold text-primary">

                {title}

            </h2>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {

                images.map((img, index) => (

                    <div

                        key={index}

                        onClick={() => openLightbox(startIndex + index)}

                        className="group cursor-pointer overflow-hidden rounded-[24px] border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-[0_20px_45px_rgba(245,158,11,0.22)]"

                    >

                        <div className="overflow-hidden">

                            <img

                                src={img}

                                alt={`${title} ${index + 1}`}

                                loading="lazy"

                                className="w-full object-cover transition duration-700 group-hover:scale-105"

                            />

                        </div>

                    </div>

                ))

            }

        </div>

    </div>

);

const Results = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const allImages = [...class10Results, ...class12Results];

    const openLightbox = (i) => {

        setIndex(i);
        setOpen(true);

    };

    return (

        <>

            <SEO

                title="Results"

                description="Explore the outstanding Class X and Class XII board examination results of E-Vidyaniketan, Kota. Our students consistently achieve academic excellence through quality education, discipline and dedicated guidance."

                keywords="E-Vidyaniketan Results, Class 10 Results Kota, Class 12 Results Kota, Board Results, Coaching Institute Kota, CBSE Results, Academic Excellence"

                path="/results"

            />

            <PageBanner

                title="Academic Results"

                description="Celebrating the remarkable achievements of our students through dedication, discipline and academic excellence."

                currentPage="Results"

            />
            <section className="py-18 bg-surface">

                <div className="max-w-7xl mx-auto px-5">

                    <div className="max-w-3xl mx-auto text-center">

                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                            <span className="text-sm font-medium text-secondary">

                                Academic Results

                            </span>

                        </div>

                        <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                            Celebrating

                            <span className="text-secondary">

                                {" "}Academic Excellence

                            </span>

                        </h2>

                        <p className="mt-5 leading-8 text-text-secondary">

                            Our students consistently achieve outstanding board examination results through dedication, discipline and expert guidance.

                        </p>

                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <a
                            href="#class10"
                            className="rounded-full border border-border bg-white px-6 py-3 font-medium text-primary shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary hover:shadow-[0_10px_25px_rgba(245,158,11,.25)]"
                        >
                            Class X Results
                        </a>

                        <a
                            href="#class12"
                            className="rounded-full border border-border bg-white px-6 py-3 font-medium text-primary shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary hover:shadow-[0_10px_25px_rgba(245,158,11,.25)]"
                        >
                            Class XII Results
                        </a>

                    </div>

                    <ResultSection
                        id="class10"
                        title="Class X Board Results"
                        images={class10Results}
                        startIndex={0}
                        openLightbox={openLightbox}
                    />

                    <ResultSection
                        id="class12"
                        title="Class XII Board Results"
                        images={class12Results}
                        startIndex={class10Results.length}
                        openLightbox={openLightbox}
                    />

                </div>

                <Lightbox

                    open={open}

                    close={() => setOpen(false)}

                    index={index}

                    slides={allImages.map((src) => ({ src }))}

                />

            </section>

            <CTA />
        </>

    );

};

export default Results;