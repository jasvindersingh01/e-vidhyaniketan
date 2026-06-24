import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
// import shiva from "../../assets/shiva.jpg";
// import nitesh from "../../assets/nitesh.jpg";
// import neeraj from "../../assets/neeraj.jpg";

const faculty=[
{
img:"/faculty/shiva.jpg",
name:"Mrs. Shiva Pillai",
designation:"HOD, Department of Science",
desc:"Dedicated to awakening curiosity, nurturing dreams and helping students realize their true potential through passionate teaching."
},
{
img:"/faculty/nitesh.jpg",
name:"Mr. Nitesh Sharma",
designation:"HOD, English & Social Science",
desc:"Believes in self-confidence, perseverance and inspiring students to become independent learners and responsible individuals."
},
{
img:"/faculty/neeraj.jpg",
name:"Mr. Neeraj Sir",
designation:"Faculty Member",
desc:"Committed to guiding students with dedication, conceptual clarity and continuous academic support."
}
];

const Faculty = () => {

    return (

        <section className="py-18 bg-white">

            <div className="max-w-7xl mx-auto px-5">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">
                        <span className="text-sm font-medium text-secondary">
                            Meet Our Educators
                        </span>
                    </div>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-primary">
                        The Mentors Behind
                        <span className="text-secondary"> Your Success</span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-text-secondary">
                        Experienced educators committed to nurturing confidence, discipline and academic excellence in every learner.
                    </p>

                </div>


                <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                    {faculty.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * .15 }}
                            className="group rounded-[32px] border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <img
                                src={item.img}
                                alt={item.name}
                                className="mx-auto h-44 w-44 rounded-full object-cover border-[5px] border-accent"
                            />

                            <h3 className="mt-6 text-center text-2xl font-semibold text-primary">
                                {item.name}
                            </h3>

                            <p className="mt-1 text-center text-secondary font-medium">
                                {item.designation}
                            </p>

                            <p className="mt-5 text-center leading-7 text-text-secondary">
                                {item.desc}
                            </p>

                            <button className="group mx-auto mt-6 flex items-center gap-2 font-medium text-secondary">
                                Read Profile
                                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                            </button>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Faculty;