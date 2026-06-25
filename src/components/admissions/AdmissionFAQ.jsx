import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What is the preferred batch size at E-Vidyaniketan?",
        answer: "Each batch generally accommodates only 30 students to ensure individual attention and effective learning."
    },
    {
        question: "Are fees refundable after admission?",
        answer: "No. Fees once paid are non-refundable under any circumstances."
    },
    {
        question: "How often are Parent–Teacher Meetings conducted?",
        answer: "Parent–Teacher Meetings are conducted once every month to discuss the progress and performance of students."
    },
    {
        question: "Can parents enquire about their ward's performance during the course?",
        answer: "Yes. Parents may enquire about their ward's academic performance at any time during the course."
    },
    {
        question: "Are doubt classes available for students?",
        answer: "Yes. Daily doubt classes are conducted along with timely distribution of study materials, modules and notes."
    },
    {
        question: "Can a student's batch be changed later?",
        answer: "Yes. Students may be shifted to another batch based on their performance in internal tests."
    }
];

const AdmissionFAQ = () => {

    const [active, setActive] = useState(0);

    return (

        <section className="py-18 bg-white">

            <div className="max-w-4xl mx-auto px-5">

                <div className="text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Frequently Asked Questions

                        </span>

                    </div>

                    <h2 className="mt-5 text-4xl font-bold text-primary">

                        Admissions

                        <span className="text-secondary">

                            {" "}FAQs

                        </span>

                    </h2>

                    <p className="mt-5 leading-8 text-text-secondary">

                        Find answers to some commonly asked questions regarding admissions, batch sizes, fee policies and academic procedures.

                    </p>

                </div>


                <div className="mt-14 space-y-5">

                    {

                        faqs.map((faq, index) => (

                            <div

                                key={index}

                                className="overflow-hidden rounded-[24px] border border-border bg-surface"

                            >

                                <button

                                    onClick={() => setActive(active === index ? null : index)}

                                    className="flex w-full items-center justify-between px-7 py-5 text-left"

                                >

                                    <h3 className="text-lg font-semibold text-primary">

                                        {faq.question}

                                    </h3>


                                    <ChevronDown

                                        size={22}

                                        className={`transition duration-300 ${active === index ? "rotate-180 text-secondary" : "text-primary"
                                            }`}

                                    />

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

export default AdmissionFAQ;