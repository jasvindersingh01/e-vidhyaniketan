import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const points = [
    "Founded in 2002 by Vaibhav Pillai & Shiva Pillai in Kota",
    "Small batches with individual attention for every student",
    "Monthly PTMs, regular assessments and parent connectivity",
    "Focus on academic excellence, discipline and moral values",
];


const About = () => {


    return (

        <section className="bg-surface py-18">


            <div className="max-w-7xl mx-auto px-5">


                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    {/* IMAGE */}

                    <motion.div

                        initial={{ opacity: 0, x: -50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: 0.8 }}

                        className="relative"

                    >


                        <img

                            src={aboutImg}

                            alt=""

                            className="rounded-[40px] shadow-2xl"

                        />



                        <div
                            className="absolute -bottom-8 -right-8
bg-white rounded-3xl p-6 shadow-xl"
                        >

                            <h2 className="text-4xl font-bold text-secondary">

                                2002

                            </h2>

                            <p className="text-text-secondary">

                                Years of Legacy

                            </p>

                        </div>



                    </motion.div>



                    {/* CONTENT */}


                    <motion.div

                        initial={{ opacity: 0, x: 50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: 0.8 }}

                    >


                        <div
                            className="inline-flex items-center rounded-full
bg-secondary/10 px-5 py-2"
                        >

                            <span className="text-secondary text-sm font-medium">

                                About E-Vidyaniketan

                            </span>

                        </div>



                        <h2
                            className="mt-5 text-4xl lg:text-5xl font-bold leading-tight"
                        >

                            Nurturing Minds With

                            <span className="text-secondary">

                                {" "}Intelligence & Character

                            </span>

                        </h2>



                        <p className="mt-6 text-lg text-text-secondary leading-8">

                            Established in 2002, E-Vidyaniketan is a trusted educational institute in Kota,
                            founded by the dedicated efforts of Vaibhav Pillai and Shiva Pillai.
                            The institute has steadily grown into a centre of academic excellence,
                            committed to imparting quality education, fostering self-reliance and
                            developing socially responsible individuals.

                            At E-Vidyaniketan, education extends beyond textbooks. We strive to
                            cultivate confidence, discipline, creativity and strong moral values,
                            empowering students to realise their full potential and become
                            compassionate citizens of tomorrow.

                        </p>

                        <div className="mt-8 space-y-4">

                            {points.map((point, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >

                                    <div
                                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
                                    >

                                        <Check
                                            size={14}
                                            className="text-secondary"
                                        />

                                    </div>

                                    <p className="text-text-secondary leading-7">

                                        {point}

                                    </p>

                                </div>

                            ))}

                        </div>
                       <Link to="/about">
                        <button

                            className="group mt-10 inline-flex items-center gap-2
bg-primary text-white rounded-full
px-7 py-3 transition-all duration-300
hover:bg-secondary hover:-translate-y-1"

                        >

                            Know Our Story


                            <ArrowRight

                                size={18}

                                className="transition-transform duration-300
group-hover:translate-x-1"

                            />

                        </button>
                       </Link>


                    </motion.div>



                </div>

            </div>

        </section>

    );

};


export default About;