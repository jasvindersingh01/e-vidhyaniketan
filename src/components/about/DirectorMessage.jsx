import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import director from "../../assets/director.jpg"

const DirectorMessage = () => {

    return (

        <section id="director-message" className="py-20 bg-surface overflow-hidden">

            <div className="max-w-7xl mx-auto px-5">

                <div className="text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Director's Message

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-primary">

                        Words That Inspire,

                        <span className="text-secondary">

                           {""} Beyond Classrooms

                        </span>

                    </h2>

                </div>



                <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_380px]">


                    <motion.div

                        initial={{ opacity: 0, x: -50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        className="relative"

                    >

                        <Quote

                            size={110}

                            strokeWidth={1.5}

                            className="absolute -top-6 left-0 text-accent/10"

                        />


                        <div className="rounded-[32px] bg-white p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

                            <p className="text-lg leading-9 text-text-secondary">

                                Imparting knowledge to someone is delivering your essence, your part. It is the most sacred aspect of teaching. Since the establishment of the institute ‘E-Vidyaniketan’, this sanctity has been sustained, regulated and perpetuated.

                            </p>


                            <p className="mt-6 leading-8 text-text-secondary">

                                A student must be attended with utter care and attention as they are not lesser than a tender plant. Every student possesses the ability to grow into an inspiring personality only if nurtured with dedication, guidance and affectionate efforts.

                            </p>


                            <p className="mt-6 leading-8 text-text-secondary">

                                The catch phrase

                                <span className="mx-2 font-semibold text-accent">

                                    "Nothing is Impossible"

                                </span>

                                remains the cornerstone of our educational philosophy.

                            </p>


                        </div>

                    </motion.div>




                    <motion.div

                        initial={{ opacity: 0, x: 50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        className="text-center"

                    >


                        <div className="relative inline-block">


                            <div

                                className="absolute inset-0 rounded-full bg-accent/20 blur-3xl"

                            ></div>



                            <div

                                className="relative rounded-full border-[6px] border-accent p-2"

                            >

                                <img

                                    src={director}

                                    alt="Vaibhav Pillai"

                                    className="h-72 w-72 rounded-full object-cover"

                                />

                            </div>


                        </div>



                        <h3 className="mt-7 text-2xl font-bold text-primary">

                            Vaibhav Pillai

                        </h3>



                        <p className="mt-1 text-secondary">

                            Director • HOD, Department of Mathematics

                        </p>



                        <div

                            className="mx-auto mt-5 h-1 w-20 rounded-full bg-accent"

                        ></div>


                    </motion.div>



                </div>

            </div>

        </section>

    );

};

export default DirectorMessage;