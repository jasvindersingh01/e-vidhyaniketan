import { BookOpen, Heart, Target, Users, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const objectives = [
    {
        icon: Heart,
        title: "Real Human Soul",
        desc: "The sole purpose of education is to nurture compassionate, responsible and socially aware individuals."
    },
    {
        icon: BookOpen,
        title: "Love For Learning",
        desc: "Students are encouraged to develop curiosity and a genuine passion for learning."
    },
    {
        icon: Users,
        title: "Emotional Growth",
        desc: "Social, emotional and harmonious understanding are equally emphasized."
    },
    {
        icon: GraduationCap,
        title: "Overall Development",
        desc: "Academic excellence is complemented with co-curricular and life skills."
    },
    {
        icon: Target,
        title: "Character Building",
        desc: "Students are shaped into responsible children, citizens and human beings."
    },
    {
        icon: Trophy,
        title: "Preparation For Life",
        desc: "Education at E-Vidyaniketan is preparation for life, not merely examinations."
    }
];

const Objectives = () => {

    return (

        <section className="bg-surface py-18">

            <div className="max-w-7xl mx-auto px-5">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Objectives

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Educating Minds,

                        <span className="text-secondary">

                            {" "}Inspiring Lives

                        </span>

                    </h2>


                    <p className="mt-5 leading-8 text-text-secondary">

                        The objective of E-Vidyaniketan extends beyond academics. We strive to cultivate confidence, values, self-reliance and a lifelong passion for learning.

                    </p>

                </div>



                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {

                        objectives.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div

                                    key={index}

                                    initial={{ opacity: 0, y: 40 }}

                                    whileInView={{ opacity: 1, y: 0 }}

                                    viewport={{ once: true }}

                                    transition={{ delay: index * 0.1 }}

                                 className="group rounded-[28px] border border-border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.22)]"

                                >

                                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-500 group-hover:bg-accent">

                                     <Icon
    size={28}
    className="text-accent transition-all duration-500 group-hover:scale-110 group-hover:text-primary"
/>

                                    </div>



                                    <h3 className="mt-6 text-xl font-semibold text-primary">

                                        {item.title}

                                    </h3>



                                    <p className="mt-3 leading-7 text-text-secondary">

                                        {item.desc}

                                    </p>

                                </motion.div>

                            );

                        })

                    }

                </div>



                <div className="mt-14 rounded-[32px] bg-primary p-8 lg:p-10">

                    <p className="text-center text-lg italic leading-9 text-white/80">

                        "Education is not preparation for life, it is life itself."

                    </p>

                    <p className="mt-3 text-center font-medium text-accent">

                        — John Dewey

                    </p>

                </div>

            </div>

        </section>

    );

};

export default Objectives;