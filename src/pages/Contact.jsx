import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    GraduationCap
} from "lucide-react";
import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";

const ContactSection = () => {

    return (

        <>

            <SEO

                title="Contact Us"

                description="Get in touch with E-Vidyaniketan, Kota for admissions, course information and academic guidance. Visit our campus in Talwandi, Kota or connect with us via phone and email."

                keywords="E Vidyaniketan Contact, Coaching Institute Kota, Class 9 Coaching Kota, Class 10 Coaching Kota, Talwandi Coaching Institute, E Vidyaniketan Admissions"

                path="/contact"

            />

            <PageBanner

                title="Contact Us"

                description="We're here to answer your questions, guide admissions and help your child begin a journey of academic excellence."

                currentPage="Contact"

            />

            <section className="py-18 bg-surface overflow-hidden">

                <div className="max-w-7xl mx-auto px-5">


                    <div className="max-w-3xl mx-auto text-center">

                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                            <span className="text-sm font-medium text-secondary">

                                Contact E-Vidyaniketan

                            </span>

                        </div>


                        <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-primary">

                            Let's Build A Bright

                            <span className="text-secondary">

                                {" "}Future Together

                            </span>

                        </h2>


                        <p className="mt-5 text-lg leading-8 text-text-secondary">

                            "Education is simply the soul of a society as it passes from one generation to another."

                        </p>

                    </div>




                    <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_420px]">


                        <div>

                            <div className="grid gap-6 md:grid-cols-2">


                                <a

                                    href="https://maps.google.com/?q=C-554,Behind Jawahar Nagar Police Station,Indra Vihar,Talwandi,Kota,Rajasthan,324005"

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="group block rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"

                                >


                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent">

                                        <MapPin

                                            size={30}

                                            className="text-accent transition-all duration-300 group-hover:text-primary"

                                        />

                                    </div>



                                    <h3 className="mt-6 text-2xl font-semibold text-primary">

                                        Visit Us

                                    </h3>



                                    <p className="mt-4 leading-8 text-text-secondary hover:text-secondary">

                                        C-554,

                                        Behind Jawahar Nagar Police Station,

                                        Indra Vihar, Talwandi,

                                        Kota, Rajasthan 324005

                                    </p>



                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary">

                                        Open In Google Maps

                                    </span>


                                </a>




                                <div className="group rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent">

                                        <Phone

                                            size={30}

                                            className="text-accent transition-all duration-300 group-hover:text-primary"

                                        />

                                    </div>


                                    <h3 className="mt-6 text-2xl font-semibold text-primary">

                                        Call Us

                                    </h3>


                                    <a

                                        href="tel:+919352603736"

                                        className="mt-4 block text-lg text-text-secondary transition hover:text-secondary"

                                    >

                                        +91 93526 03736

                                    </a>

                                </div>





                                <div className="group rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent">

                                        <Mail

                                            size={30}

                                            className="text-accent transition-all duration-300 group-hover:text-primary"

                                        />

                                    </div>


                                    <h3 className="mt-6 text-2xl font-semibold text-primary">

                                        Email Us

                                    </h3>


                                    <a

                                        href="mailto:evidyaniketan@gmail.com"

                                        className="mt-4 block text-lg text-text-secondary transition hover:text-secondary"

                                    >

                                        evidyaniketan@gmail.com

                                    </a>

                                </div>





                                <div className="group rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent">

                                        <GraduationCap

                                            size={30}

                                            className="text-accent transition-all duration-300 group-hover:text-primary"

                                        />

                                    </div>


                                    <h3 className="mt-6 text-2xl font-semibold text-primary">

                                        Admissions Open

                                    </h3>


                                    <p className="mt-4 leading-7 text-text-secondary">

                                        Join E-Vidyaniketan and experience disciplined, value-based education.

                                    </p>



                                    <a

                                        href="#"

                                        target="_blank"

                                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-secondary"

                                    >

                                        Apply Now


                                        <ArrowRight

                                            size={18}

                                        />

                                    </a>


                                </div>


                            </div>



                            <div className="mt-8 overflow-hidden rounded-[30px] border border-border shadow-sm">

                                <iframe

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.712726756105!2d75.84022477538008!3d25.14314497774576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84dc8c00c9b5%3A0x7429026e65c52f45!2sE-Vidyaniketan!5e1!3m2!1sen!2sin!4v1782413420287!5m2!1sen!2sin"

                                    width="100%"

                                    height="420"

                                    allowFullScreen=""

                                    loading="lazy"

                                    referrerPolicy="no-referrer-when-downgrade"

                                />

                            </div>


                        </div>





                        <div className="rounded-[35px] bg-primary p-10 text-white">


                            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm">

                                Why Choose Us

                            </span>


                            <h3 className="mt-6 text-4xl font-bold leading-tight">

                                More Than An Institute,

                                <span className="text-accent">

                                    {" "}A Place To Grow

                                </span>

                            </h3>



                            <p className="mt-8 leading-8 text-white/70">

                                At E-Vidyaniketan, students are nurtured with discipline, academic excellence and human values.

                            </p>



                            <div className="mt-10 space-y-6">


                                <div>

                                    <h4 className="font-semibold text-accent">

                                        ✓ Small Batch Size

                                    </h4>

                                    <p className="mt-2 text-white/70">

                                        30–40 students per batch.

                                    </p>

                                </div>



                                <div>

                                    <h4 className="font-semibold text-accent">

                                        ✓ Daily Attendance Updates

                                    </h4>

                                    <p className="mt-2 text-white/70">

                                        Parents are informed instantly.

                                    </p>

                                </div>




                                <div>

                                    <h4 className="font-semibold text-accent">

                                        ✓ Monthly PTMs

                                    </h4>

                                    <p className="mt-2 text-white/70">

                                        Regular interaction with parents.

                                    </p>

                                </div>



                                <div>

                                    <h4 className="font-semibold text-accent">

                                        ✓ Individual Attention

                                    </h4>

                                    <p className="mt-2 text-white/70">

                                        Dedicated faculty for every student.

                                    </p>

                                </div>


                            </div>



                            <div className="mt-12 rounded-[28px] bg-white/5 p-6 backdrop-blur-md">

                                <p className="italic leading-8 text-white/80">

                                    "Educating the mind without educating the heart is no education at all."

                                </p>

                                <p className="mt-3 font-medium text-accent">

                                    — Aristotle

                                </p>

                            </div>


                        </div>


                    </div>

                </div>

            </section>
        </>

    );

};

export default ContactSection;