import { Atom, Microscope, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const streams = [

    {
        icon: Atom,
        title: "Science (PCM)",
        subjects: ["Physics", "Chemistry", "Mathematics"]
    },

    {
        icon: Microscope,
        title: "Science (PCB)",
        subjects: ["Physics", "Chemistry", "Biology"]
    },

    {
        icon: BriefcaseBusiness,
        title: "Commerce",
        subjects: ["Accountancy", "Business Studies", "Economics"]
    }

];


const Streams = () => {

    return (

        <section className="py-18 bg-white">

            <div className="max-w-7xl mx-auto px-5">


                <div className="max-w-3xl mx-auto text-center">


                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Streams Offered

                        </span>

                    </div>



                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Choose The Path To

                        <span className="text-secondary">

                            {" "}Your Future

                        </span>

                    </h2>



                    <p className="mt-5 leading-8 text-text-secondary">

                        E-Vidyaniketan offers Science and Commerce streams with conceptual learning, disciplined study habits and continuous guidance.

                    </p>



                </div>




                <div className="mt-16 grid gap-6 lg:grid-cols-3">


                    {

                        streams.map((item, index) => {

                            const Icon = item.icon;

                            return (


                                <motion.div

                                    key={index}

                                    initial={{ opacity: 0, y: 30 }}

                                    whileInView={{ opacity: 1, y: 0 }}

                                    viewport={{ once: true }}

                                    transition={{ delay: index * .1 }}

                                    className="group rounded-[32px] bg-primary p-8 text-white transition-all duration-300 hover:-translate-y-2"

                                >



                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">


                                        <Icon

                                            size={30}

                                            className="text-accent"

                                        />


                                    </div>




                                    <h3 className="mt-6 text-2xl font-bold">

                                        {item.title}

                                    </h3>




                                    <div className="mt-6 space-y-3">


                                        {

                                            item.subjects.map((sub) => (


                                                <div

                                                    key={sub}

                                                    className="rounded-full bg-white/5 px-4 py-2 text-white/80"

                                                >

                                                    {sub}

                                                </div>

                                            ))

                                        }


                                    </div>



                                </motion.div>


                            )

                        })

                    }



                </div>

            </div>

        </section>

    )

}


export default Streams;