import { Check } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    "Discipline remains the strongest tool helping students think, believe and solve problems consciously and intellectually.",
    "Experienced teachers with devotion and dedication help students overcome academic hardships.",
    "A supportive environment with all essential amenities linked to the learning process.",
    "Student-friendly infrastructure where learning remains well integrated and enjoyable.",
    "Provision of Medical Facility and a Library for students.",
    "Extra curricular activities organised to nurture cultural, creative and cognitive abilities."
];

const GeneralValues = () => {

    return (

        <section className="py-18 bg-surface">

            <div className="max-w-7xl mx-auto px-5">

                {/* <div className="grid items-center gap-16 lg:grid-cols-2"> */}



                <motion.div

                    initial={{ opacity: 0, x: 50 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                >

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            General Values

                        </span>

                    </div>



                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Intelligence Plus

                        <span className="text-secondary">

                            {" "}Character

                        </span>

                    </h2>



                    <p className="mt-5 leading-8 text-text-secondary">

                        Though established in the modern era, E-Vidyaniketan embraces the timeless values of ancient learning traditions, nurturing students not only as scholars but as compassionate and responsible human beings.

                    </p>



                    <div className="mt-8 grid items-center gap-2 lg:grid-cols-2">

                        {

                            values.map((item, index) => (

                                <div

                                    key={index}

                                    className="flex gap-4"

                                >

                                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">

                                        <Check

                                            size={16}

                                            className="text-accent"

                                        />

                                    </div>


                                    <p className="leading-7 text-text-secondary">

                                        {item}

                                    </p>


                                </div>

                            ))

                        }

                    </div>



                    <div className="mt-10 rounded-[28px] border-l-6 border-accent bg-white p-6 shadow-sm">

                        <p className="italic leading-8 text-primary">

                            "Educating the mind without educating the heart is no education at all."

                        </p>


                        <p className="mt-3 font-medium text-secondary">

                            — Aristotle

                        </p>

                    </div>



                </motion.div>

                {/* </div> */}

            </div>

        </section>

    );

};

export default GeneralValues;