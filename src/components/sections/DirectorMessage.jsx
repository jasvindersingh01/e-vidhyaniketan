import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import director from "../../assets/director.jpg";

const DirectorMessage = () => {

    return (

        <section className="bg-surface py-18">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="mx-auto"
                    >

                        <img
                            src={director}
                            alt=""
                            className="h-72 w-72 rounded-full object-cover border-[6px] border-white shadow-xl"
                        />

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                    >

                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">
                            <span className="text-sm font-medium text-secondary">
                                Director's Message
                            </span>
                        </div>

                        <h2 className="mt-5 text-4xl font-bold text-primary">
                            A Message From Our <span className="text-secondary">Director</span>
                        </h2>

                        <p className="mt-5 leading-8 text-text-secondary">

                            "Imparting knowledge to someone is delivering your essence, your part. It is the most sacred aspect of teaching. Since the establishment of E-Vidyaniketan, this sanctity has been sustained and perpetuated."

                        </p>

                        <p className="mt-4 leading-8 text-text-secondary">

                            Every student possesses the potential to grow into a strong and inspiring personality if nurtured with dedication, guidance and care.

                        </p>

                        <div className="mt-6">

                            <h4 className="text-xl font-semibold text-primary">
                                Vaibhav Pillai
                            </h4>

                            <p className="text-text-secondary">
                                Director • HOD Mathematics
                            </p>

                        </div>

                        <button className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-secondary">

                            Read More

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />

                        </button>

                    </motion.div>

                </div>

            </div>

        </section>

    );

};

export default DirectorMessage;