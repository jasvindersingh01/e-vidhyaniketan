import {
    Calculator,
    FlaskConical,
    Globe2,
    Languages,
    BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

const subjects = [

    {
        icon: Calculator,
        title: "Mathematics",
        desc: "Develop strong analytical, logical and problem-solving skills through concept-based learning."
    },

    {
        icon: FlaskConical,
        title: "Science",
        desc: "Build a solid foundation in Physics, Chemistry and Biology with practical understanding."
    },

    {
        icon: Globe2,
        title: "Social Science",
        desc: "Explore History, Geography, Civics and Economics through interactive learning."
    },

    {
        icon: BookOpen,
        title: "English",
        desc: "Enhance grammar, vocabulary, communication and writing skills for academic excellence."
    },

    {
        icon: Languages,
        title: "Hindi",
        desc: "Strengthen language proficiency, literature understanding and effective expression."
    }

];

const Subjects = () => {

    return (

        <section id="subjects" className="py-18 bg-surface">

            <div className="max-w-7xl mx-auto px-5">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Subjects We Teach

                        </span>

                    </div>

                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Comprehensive Learning

                        <span className="text-secondary">

                            {" "}Across Every Subject

                        </span>

                    </h2>

                    <p className="mt-5 leading-8 text-text-secondary">

                        Our Class IX–X program follows the CBSE curriculum with equal emphasis on conceptual understanding, regular practice and academic excellence across all major subjects.

                    </p>

                </div>

                {/* Top 3 */}

                <div className="mt-16 grid gap-6 lg:grid-cols-3">

                    {

                        subjects.slice(0, 3).map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: .5, delay: index * .08 }}
                                    className="group relative overflow-hidden rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.20)]"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-500 group-hover:bg-accent">

                                        <Icon
                                            size={30}
                                            className="text-accent transition-all duration-500 group-hover:scale-110 group-hover:text-primary"
                                        />

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-secondary">

                                        {item.title}

                                    </h3>

                                    <p className="mt-4 leading-8 text-text-secondary transition-colors duration-300 group-hover:text-primary">

                                        {item.desc}

                                    </p>

                                </motion.div>

                            );

                        })

                    }

                </div>

                {/* Bottom 2 */}

                <div className="mt-6 flex justify-center">

                    <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">

                        {

                            subjects.slice(3).map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: .5, delay: index * .08 }}
                                        className="group relative overflow-hidden rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.20)]"
                                    >

                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-500 group-hover:bg-accent">

                                            <Icon
                                                size={30}
                                                className="text-accent transition-all duration-500 group-hover:scale-110 group-hover:text-primary"
                                            />

                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-secondary">

                                            {item.title}

                                        </h3>

                                        <p className="mt-4 leading-8 text-text-secondary transition-colors duration-300 group-hover:text-primary">

                                            {item.desc}

                                        </p>

                                    </motion.div>

                                );

                            })

                        }

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Subjects;