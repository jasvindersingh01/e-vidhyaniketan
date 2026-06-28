import { Clock3, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {

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

                            src="/courses/ixx.webp"

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

                                Class IX – X

                            </span>

                        </div>



                        <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-primary">

                            Strong Foundations For

                            <span className="text-secondary">

                                {" "}Academic Excellence

                            </span>

                        </h2>



                        <p className="mt-6 leading-8 text-text-secondary">

                            Comprehensive CBSE-oriented coaching for Mathematics, Science, Social Science and English with individual attention, disciplined learning and continuous academic support.

                        </p>



                        <div className="mt-10 grid grid-cols-3 gap-5">


                            <div className="rounded-[24px] border border-border bg-white p-5 text-center shadow-sm">

                                <BookOpen

                                    size={24}

                                    className="mx-auto text-accent"

                                />

                                <h3 className="mt-3 text-2xl font-bold text-primary">

                                    4

                                </h3>

                                <p className="mt-1 text-sm text-text-secondary">

                                    Subjects

                                </p>

                            </div>



                            <div className="rounded-[24px] border border-border bg-white p-5 text-center shadow-sm">

                                <Clock3

                                    size={24}

                                    className="mx-auto text-accent"

                                />

                                <h3 className="mt-3 text-xl font-bold text-primary">

                                    4-9 PM

                                </h3>

                                <p className="mt-1 text-sm text-text-secondary">

                                    Timings

                                </p>

                            </div>



                            <div className="rounded-[24px] border border-border bg-white p-5 text-center shadow-sm">

                                <Users

                                    size={24}

                                    className="mx-auto text-accent"

                                />

                                <h3 className="mt-3 text-xl font-bold text-primary">

                                    30–40

                                </h3>

                                <p className="mt-1 text-sm text-text-secondary">

                                    Students

                                </p>

                            </div>


                        </div>



                    </motion.div>

                </div>

            </div>

        </section>

    );

};

export default Hero;