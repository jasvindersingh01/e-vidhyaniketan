import { UsersRound, CircleHelp, CalendarCheck, PhoneCall, Trophy, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [

    {
        icon: UsersRound,
        title: "Limited Batch Size",
        desc: "Only 30–40 students per batch to ensure personalized attention and effective learning."
    },

    {
        icon: CircleHelp,
        title: "Doubt Sessions",
        desc: "Dedicated doubt-solving sessions and extra classes to strengthen concepts."
    },

    {
        icon: CalendarCheck,
        title: "Weekly Tests & Regular Assignments",
        desc: "Continuous evaluation through weekly tests, regular assignments and monthly report cards."
    },

    {
        icon: PhoneCall,
        title: "Parent Connectivity",
        desc: "Daily attendance tracking with timely updates and regular communication with parents."
    },

    {
        icon: Trophy,
        title: "Quiz & Co-Curricular Activities",
        desc: "Interactive quizzes and academic activities that enhance creativity and overall development."
    },

    {
        icon: ShieldCheck,
        title: "Discipline & Values",
        desc: "A culture of discipline, morality, kindness and respect that builds responsible individuals."
    }

];

const WhyChoose = () => {

    return (

        <section className="py-18 bg-primary overflow-hidden">

            <div className="max-w-7xl mx-auto px-5">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium text-accent">Why Choose Us</span>
                    </div>

                    <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">
                        Why Parents Trust <span className="text-accent">E-Vidyaniketan</span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-white/70">
                        At E-Vidyaniketan, education extends beyond textbooks. We nurture discipline, confidence, creativity and moral values while ensuring every learner receives individual attention.
                    </p>

                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-secondary"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                                    <Icon size={28} className="text-primary" />
                                </div>

                                <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>

                                <p className="mt-4 leading-7 text-white/70">{item.desc}</p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

};

export default WhyChoose;