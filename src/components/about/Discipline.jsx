import { Check } from "lucide-react";
import { motion } from "framer-motion";

const rules = [
    "Students are expected to maintain proper discipline and order at all times.",
    "Students must pay due regard to teachers inside and outside the institute.",
    "Mobile phones, cameras and electronic gadgets are strictly prohibited.",
    "Students suffering from infectious diseases are not permitted to attend classes or examinations.",
    "Students should be received only by parents or authorized guardians.",
    "Institute authorities shall not be responsible for valuables or jewellery."
];

const Discipline = () => {

    return (

        <section id="discipline" className="pt-18 bg-white">

            <div className="max-w-5xl mx-auto px-5">

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                >

                    <div className="text-center">

                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                            <span className="text-sm font-medium text-secondary">

                                Discipline

                            </span>

                        </div>


                        <h2 className="mt-5 text-4xl font-bold text-primary">

                            Building Responsible Learners

                        </h2>


                        <p className="mt-5 leading-8 text-text-secondary">

                            At E-Vidyaniketan, discipline is regarded as the foundation of academic excellence and personal growth.

                        </p>

                    </div>



                    <div className="mt-12 rounded-[32px] border border-border bg-surface p-8 lg:p-10">

                        <div className="space-y-6">

                            {

                                rules.map((rule, index) => (

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

                                            {rule}

                                        </p>


                                    </div>

                                ))

                            }

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    );

};

export default Discipline;