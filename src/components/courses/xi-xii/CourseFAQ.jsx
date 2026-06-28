import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [

    {

        question: "Which streams are available for Classes XI & XII?",

        answer: "E-Vidyaniketan offers Science (PCM), Science (PCB), Commerce and Arts streams for students of Classes XI & XII."

    },

    {

        question: "How many students are admitted in a batch?",

        answer: "To ensure individual attention and effective learning, only 30–40 students are admitted in each batch."

    },

    {

        question: "Are extra classes conducted for students?",

        answer: "Yes. Extra classes are arranged whenever required to strengthen concepts and help students overcome academic difficulties."

    },

    {

        question: "Do students receive study materials and notes?",

        answer: "Yes. Faculty members provide carefully prepared notes and additional academic support materials to students."

    },

    {

        question: "How is student performance evaluated?",

        answer: "Students are evaluated through Weekly Tests, Regular Assignments, monthly assessments and printed report cards to ensure continuous academic progress."

    },

    {

        question: "Are parents informed about attendance and progress?",

        answer: "Yes. Parents are informed about absenteeism, academic performance and other important updates through regular communication."

    }

];


const CourseFAQ = () => {

    const [active, setActive] = useState(null);


    return (

        <section className="py-18 bg-surface">

            <div className="max-w-4xl mx-auto px-5">


                <div className="text-center">


                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Frequently Asked Questions

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Course

                        <span className="text-secondary">

                            {" "}FAQs

                        </span>

                    </h2>


                    <p className="mt-5 leading-8 text-text-secondary">

                        Find answers to commonly asked questions regarding streams, classes, assessments and academic support.

                    </p>


                </div>




                <div className="mt-14 space-y-5">


                    {

                        faqs.map((faq, index) => (

                            <div

                                key={index}

                                className="overflow-hidden rounded-[28px] border border-border bg-white shadow-sm"

                            >


                                <button

                                    onClick={() => setActive(active === index ? null : index)}

                                    className="flex w-full items-center justify-between px-7 py-5 text-left"

                                >


                                    <h3 className="text-lg font-semibold text-primary">

                                        {faq.question}

                                    </h3>



                                    {

                                        active === index ?

                                            <Minus

                                                size={20}

                                                className="text-secondary"

                                            />

                                            :

                                            <Plus

                                                size={20}

                                                className="text-primary"

                                            />

                                    }


                                </button>




                                <AnimatePresence>


                                    {

                                        active === index && (

                                            <motion.div

                                                initial={{ height: 0, opacity: 0 }}

                                                animate={{ height: "auto", opacity: 1 }}

                                                exit={{ height: 0, opacity: 0 }}

                                                transition={{ duration: .3 }}

                                            >


                                                <div className="px-7 pb-6">


                                                    <p className="leading-7 text-text-secondary">

                                                        {faq.answer}

                                                    </p>


                                                </div>


                                            </motion.div>

                                        )

                                    }


                                </AnimatePresence>


                            </div>

                        ))

                    }


                </div>

            </div>

        </section>

    );

};

export default CourseFAQ;