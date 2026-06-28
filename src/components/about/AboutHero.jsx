import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import about from "../../assets/about.jpg"

const AboutHero = () => {

    return (
        <>
            <section className="py-18 bg-surface overflow-hidden">

                <div className="max-w-7xl mx-auto px-5">

                    <div className="grid items-center gap-16 lg:grid-cols-2">


                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                            className="relative"
                        >

                            <div className="absolute -top-16 -left-16 h-78 w-78 rounded-full bg-accent/15" />

                            <img
                                src={about}
                                alt=""
                                className="relative z-10 w-full rounded-[32px] object-cover shadow-xl"
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
                                    About E-Vidyaniketan
                                </span>
                            </div>


                            <h2 className="mt-5 text-4xl font-bold leading-tight text-primary lg:text-5xl">

                                More Than An Institute,

                                <span className="text-secondary">

                                    {" "}A Place To Grow

                                </span>

                            </h2>

                            <div className="mt-7 flex gap-4">

                                <Quote
                                    size={34}
                                    className="shrink-0 text-accent"
                                />

                                <p className="text-lg italic leading-8 text-text-secondary">

                                    "Education is simply the soul of a society as it passes from one generation to another."

                                </p>

                            </div>



                            <p className="mt-7 leading-8 text-text-secondary">

                                Established in 2002 by the dedicated efforts of Vaibhav Pillai and Shiva Pillai, E-Vidyaniketan has become one of Kota's trusted educational institutions. The institute is committed to academic excellence, discipline, individual attention and the holistic development of every learner.

                            </p>


                            <p className="mt-5 leading-8 text-text-secondary">

                                With experienced educators, small batch sizes and a value-based learning environment, we strive to shape confident students prepared for success in academics and life.

                            </p>


                        </motion.div>

                    </div>

                </div>

            </section>
            <section className="py-18 bg-white">

                <div className="max-w-7xl mx-auto px-5">

                    <div className="grid gap-12 lg:grid-cols-[300px_1fr]">


                        <div>

                            <div className="sticky top-28">

                                <div className="text-7xl font-bold text-accent">
                                    2002
                                </div>

                                <div className="mt-2 text-lg font-medium text-primary">
                                    Foundation Year
                                </div>

                                <div className="mt-8 h-32 w-[2px] bg-accent" />

                            </div>

                        </div>



                        <div>

                            <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                                <span className="text-sm font-medium text-secondary">

                                    Foundation

                                </span>

                            </div>


                            <h2 className="mt-5 text-4xl font-bold text-primary">

                                The Beginning Of A Meaningful Journey

                            </h2>


                            <p className="mt-6 leading-8 text-text-secondary">

                                E-Vidyaniketan is an Educational Coaching Institute founded in 2002 by the spirited efforts of Vaibhav Pillai and Shiva Pillai in Kota, Rajasthan.

                            </p>


                            <p className="mt-5 leading-8 text-text-secondary">

                                Since its inception, the institute has steadily carved its identity as a centre of academic excellence, committed to imparting quality education and fostering a genuine passion for learning among school students.

                            </p>


                            <div className="mt-8 rounded-[24px] border-l-4 border-accent bg-accent/5 p-6">

                                <p className="italic leading-8 text-primary">

                                    "The swelling figures of admitted students and their resonating performances stand testimony to the cumulative glory of the institute."

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>

    );

};

export default AboutHero;