import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const academicSupport = [

    "Regular classes for Science and Mathematics.",

    "Alternate classes for Social Science and English.",

    "Extra classes available in morning and evening sessions.",

    "Weekly Tests & Regular Assignments.",

    "Printed Mark Sheets distributed and signed by guardians."

];


const studentDevelopment = [

    "Individual doubt solving sessions for every student.",

    "Question papers solved and discussed in detail.",

    "Answer sheets checked with corrections and feedback.",

    "Continuous parent communication through calls and messages.",

    "Quiz competitions held twice a month with prizes.",

    "Awards and recognition for outstanding performers.",

    "Cleanliness, discipline and good conduct are highly emphasized."

];


const LearningExperience = () => {

    return (

        <section className="py-18 bg-surface overflow-hidden">

            <div className="max-w-7xl mx-auto px-5">


                <div className="max-w-3xl mx-auto text-center">


                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            You Will Find Here

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-primary">

                        More Than Just

                        <span className="text-secondary">

                            {" "}Classroom Learning

                        </span>

                    </h2>


                    <p className="mt-5 leading-8 text-text-secondary">

                        We believe education extends beyond textbooks. Our focus remains on conceptual understanding, continuous assessment, communication with parents and overall personality development.

                    </p>


                </div>



                <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">


                    <motion.div

                        initial={{ opacity: 0, x: -50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >

                        <img

                            src="/courses/support.jpg"

                            alt=""

                            className="mx-auto max-w-lg"

                        />

                    </motion.div>




                    <motion.div

                        initial={{ opacity: 0, x: 50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        className="space-y-6"

                    >



                        <div className="group rounded-[30px] border border-border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.20)]">


                            <h3 className="text-2xl font-semibold text-primary">

                                Academic Support

                            </h3>


                            <div className="mt-6 space-y-4">


                                {

                                    academicSupport.map((item, index) => (

                                        <div

                                            key={index}

                                            className="flex gap-3"

                                        >

                                            <CheckCircle2

                                                size={18}

                                                className="mt-1 shrink-0 text-accent"

                                            />



                                            <p className="text-text-secondary leading-7">

                                                {item}

                                            </p>

                                        </div>

                                    ))

                                }


                            </div>


                        </div>





                        <div className="group rounded-[30px] border border-border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.20)]">


                            <h3 className="text-2xl font-semibold text-primary">

                                Student Development

                            </h3>


                            <div className="mt-6 space-y-4">


                                {

                                    studentDevelopment.map((item, index) => (

                                        <div

                                            key={index}

                                            className="flex gap-3"

                                        >

                                            <CheckCircle2

                                                size={18}

                                                className="mt-1 shrink-0 text-accent"

                                            />



                                            <p className="text-text-secondary leading-7">

                                                {item}

                                            </p>

                                        </div>

                                    ))

                                }


                            </div>


                        </div>


                    </motion.div>



                </div>

            </div>

        </section>

    );

};

export default LearningExperience;