import { Check } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [

    "CBSE-oriented teaching methodology.",

    "Limited batch size of 30–40 students for individual attention.",

    "Extra classes arranged whenever required.",

    "Daily attendance monitoring and parent updates.",

    "Monthly assessments and printed report cards.",

    "Individual doubt solving sessions.",

    "Notes prepared by experienced faculty members.",

    "Regular Parent–Teacher Meetings.",

    "Sunday Tests to assess conceptual understanding.",

    "Discipline, morality and human values are emphasized."

];

const Highlights = () => {

    return (

        <section className="py-18 bg-surface">

            <div className="max-w-7xl mx-auto px-5">


                <div className="max-w-3xl mx-auto text-center">


                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Program Highlights

                        </span>

                    </div>



                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Everything You Need For

                        <span className="text-secondary">

                            {" "}Academic Success

                        </span>

                    </h2>



                    <p className="mt-5 leading-8 text-text-secondary">

                        Our higher secondary program focuses on conceptual learning, disciplined study habits and continuous guidance to help students excel academically.

                    </p>


                </div>




                <div className="mt-16 grid gap-6 md:grid-cols-2">


                    {

                        highlights.map((item, index) => (


                            <motion.div

                                key={index}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: index * .05 }}

                                className="flex gap-4 rounded-[28px] border border-border bg-white p-6 shadow-sm"

                            >


                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">


                                    <Check

                                        size={16}

                                        className="text-accent"

                                    />


                                </div>



                                <p className="leading-7 text-text-secondary">

                                    {item}

                                </p>


                            </motion.div>


                        ))

                    }



                </div>

            </div>

        </section>

    )

}

export default Highlights;