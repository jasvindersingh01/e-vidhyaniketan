import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [

    "Sunday Tests & Regular Assessments",

    "Printed Report Cards",

    "Extra Support Classes",

    "Individual Doubt Sessions",

    "Continuous Parent Updates",

    "Conceptual Learning Approach"

];

const Methodology = () => {

    return (

        <section className="py-18 bg-surface overflow-hidden">

            <div className="max-w-7xl mx-auto px-5">


                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    <motion.div

                        initial={{ opacity: 0, x: -50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >

                        <img

                            src="/courses/methodology.webp"

                            alt=""

                            className="mx-auto max-w-lg"

                        />

                    </motion.div>




                    <motion.div

                        initial={{ opacity: 0, x: 50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >


                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                            <span className="text-sm font-medium text-secondary">

                                Learning Methodology

                            </span>

                        </div>



                        <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-primary">

                            Learning Beyond

                            <span className="text-secondary">

                                {" "}Textbooks

                            </span>

                        </h2>



                        <p className="mt-6 leading-8 text-text-secondary">

                            At E-Vidyaniketan, learning extends beyond classroom lectures. Students strengthen concepts through discussions, assessments, doubt sessions and continuous interaction with faculty members.

                        </p>



                        <p className="mt-5 leading-8 text-text-secondary">

                            We believe in nurturing confidence, perseverance and self-discipline while maintaining close communication with parents regarding attendance and academic performance.

                        </p>




                        <div className="mt-10 grid sm:grid-cols-2 gap-5">


                            {

                                points.map((item, index) => (

                                    <div

                                        key={index}

                                        className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"

                                    >


                                        <CheckCircle2

                                            size={18}

                                            className="mt-1 shrink-0 text-accent"

                                        />



                                        <p className="text-text-secondary">

                                            {item}

                                        </p>


                                    </div>

                                ))

                            }


                        </div>



                    </motion.div>



                </div>

            </div>

        </section>

    );

};

export default Methodology;