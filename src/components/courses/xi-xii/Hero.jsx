import {
    Atom,
    Microscope,
    BriefcaseBusiness,
    Landmark,
    Clock3,
    Users
} from "lucide-react";
import { motion } from "framer-motion";

const streams = [

    {
        icon: Atom,
        title: "PCM"
    },

    {
        icon: Microscope,
        title: "PCB"
    },

    {
        icon: BriefcaseBusiness,
        title: "Commerce"
    },

    {
        icon: Landmark,
        title: "Arts"
    }

];


const Hero = () => {

    return (

        <section className="py-18 bg-surface overflow-hidden">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    <motion.div

                        initial={{ opacity: 0, x: -50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >

                        <img

                            src="/courses/xixii.webp"

                            alt=""

                            className="mx-auto"

                        />

                    </motion.div>




                    <motion.div

                        initial={{ opacity: 0, x: 50 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >


                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                            <span className="text-sm font-medium text-secondary">

                                Classes XI – XII

                            </span>

                        </div>



                        <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-primary">

                            Preparing Students For

                            <span className="text-secondary">

                                {" "}Board Excellence & Beyond

                            </span>

                        </h2>



                        <p className="mt-6 leading-8 text-text-secondary">

                            E-Vidyaniketan provides a disciplined and supportive environment for students pursuing Science, Commerce and Arts streams. Through conceptual learning, weekly tests, regular assignments and individual guidance, students are empowered to achieve academic excellence with confidence.

                        </p>




                        <div className="mt-8 flex flex-wrap gap-3">

                            {

                                streams.map((item, index) => {

                                    const Icon = item.icon;

                                    return (

                                        <div

                                            key={index}

                                            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm"

                                        >

                                            <Icon

                                                size={18}

                                                className="text-accent"

                                            />


                                            <span className="font-medium text-primary">

                                                {item.title}

                                            </span>

                                        </div>

                                    )

                                })

                            }

                        </div>




                        <div className="mt-10 grid grid-cols-3 gap-5">


                            <div className="rounded-[24px] border border-border bg-white p-5 text-center shadow-sm">

                                <Clock3

                                    size={24}

                                    className="mx-auto text-accent"

                                />


                                <h3 className="mt-3 text-lg font-bold text-primary">

                                    5–8 PM

                                </h3>


                                <p className="mt-1 text-sm text-text-secondary">

                                    Timings

                                </p>

                            </div>





                            <div className="rounded-[24px] border border-border bg-white p-5 text-center shadow-sm">

                                <Users

                                    size={24}

                                    className="mx-auto text-accent"

                                />


                                <h3 className="mt-3 text-lg font-bold text-primary">

                                    30–40

                                </h3>


                                <p className="mt-1 text-sm text-text-secondary">

                                    Students

                                </p>

                            </div>





                            <div className="rounded-[24px] border border-border bg-white p-5 text-center shadow-sm">

                                <Atom

                                    size={24}

                                    className="mx-auto text-accent"

                                />


                                <h3 className="mt-3 text-lg font-bold text-primary">

                                    CBSE

                                </h3>


                                <p className="mt-1 text-sm text-text-secondary">

                                    Pattern

                                </p>

                            </div>


                        </div>



                    </motion.div>


                </div>

            </div>

        </section>

    );

};

export default Hero;