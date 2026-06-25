import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {

    return (

        <section className="py-18">

            <div className="max-w-7xl mx-auto px-5">

                <div
                    className="relative overflow-hidden rounded-[36px]
bg-primary px-8 py-14 lg:px-16"
                >

                    <div
                        className="absolute -top-20 -right-20
h-64 w-64 rounded-full bg-secondary/20"
                    />

                    <div
                        className="absolute -bottom-24 -left-16
h-52 w-52 rounded-full bg-accent/20"
                    />

                    <div className="relative z-10">

                        <div className="max-w-3xl">

                            <div
                                className="inline-flex rounded-full
bg-white/10 px-5 py-2"
                            >

                                <span
                                    className="text-sm font-medium text-accent"
                                >

                                    Admissions Open 2026–27

                                </span>

                            </div>



                            <h2
                                className="mt-5 text-4xl font-bold
leading-tight text-white lg:text-5xl"
                            >

                                Shape Your Child's Future With

                                <span className="text-accent">

                                    {" "}E-Vidyaniketan

                                </span>

                            </h2>



                            <p
                                className="mt-5 text-lg leading-8
text-white/70"
                            >

                                Join a learning environment built on
                                discipline, academic excellence and
                                individual attention.

                            </p>



                            <div
                                className="mt-8 flex flex-wrap gap-4"
                            >

                                <Link

                                    to="/apply-now"

                                    className="inline-flex items-center gap-2
rounded-full bg-accent px-7 py-3
font-medium text-primary transition
hover:opacity-90"

                                >

                                    Apply Now

                                    <ArrowRight size={18} />

                                </Link>



                                <Link

                                    to="/contact"

                                    className="inline-flex items-center gap-2
rounded-full border border-white/20
px-7 py-3 font-medium text-white
transition hover:bg-white/10"

                                >

                                    <Phone size={18} />

                                    Contact Us

                                </Link>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default CTA;