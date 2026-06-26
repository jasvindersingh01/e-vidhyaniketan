import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [

    "Four subjects (Mathematics, Science, Social Science and English) are taught from 5:00 PM to 8:00 PM following the CBSE pattern in teaching, homework and weekly tests.",

    "Only NCERT textbooks are used and students receive carefully prepared notes from faculty members.",

    "Limited batch size of only 30–40 students ensures individual attention for every learner.",

    "Individual doubt sessions are conducted after classes to address students' academic challenges.",

    "Daily attendance is monitored and parents are informed immediately in case of absence.",

    "Three tests are conducted every month and report cards are distributed for guardian review.",

    "Quiz competitions and co-curricular activities are organized regularly to enhance learning.",

    "Monthly Parent–Teacher Meetings are conducted to discuss the progress of students.",

    "Parents are informed instantly in case of any health concern or emergency involving their child.",

    "Discipline, kindness, morality and human values are emphasized alongside academics."

];

const Features = () => {

    return (

        <section className="py-18 bg-white">

            <div className="max-w-7xl mx-auto px-5">


                <div className="max-w-3xl mx-auto text-center">


                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Features Of Coaching

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        A Learning Experience

                        <span className="text-secondary">

                            {" "}Designed For Success

                        </span>

                    </h2>


                    <p className="mt-5 leading-8 text-text-secondary">

                        E-Vidyaniketan provides a disciplined, student-centric and CBSE-oriented environment where every learner receives individual guidance and continuous support.

                    </p>


                </div>




                <div className="mt-16 grid gap-6 md:grid-cols-2">


                    {

                        features.map((feature, index) => (

                            <motion.div

                                key={index}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: index * 0.05 }}

                                className="group flex gap-4 rounded-[28px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"

                            >


                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-all duration-300 group-hover:bg-accent">


                                    <Check

                                        size={18}

                                        className="text-accent transition-all duration-300 group-hover:text-primary"

                                    />


                                </div>



                                <p className="leading-7 text-text-secondary">

                                    {feature}

                                </p>


                            </motion.div>

                        ))

                    }



                </div>



            </div>

        </section>

    );

};

export default Features;