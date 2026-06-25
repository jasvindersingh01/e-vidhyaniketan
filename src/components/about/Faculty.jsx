import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const faculty = [

    {
        img: "/about/shiva.webp",
        name: "Mrs. Shiva Pillai",
        designation: "HOD • Department of Science",

        quote: "Education has come across many changes since the day humans realized its worth.",

        desc: "Education has come across many changes since the day humans realized its worth. The extant phase of education consists of different challenges that baffle students to pave upon the correct path. Workaholic outlook, self-reliance and passionate approach to learning can help pupils overcome such challenges. A teacher awakens a hidden fire within students and inspires them to reach their goals."
    },

    {
        img: "/about/nitesh.webp",

        name: "Nitesh Sharma",

        designation: "HOD • English & Social Science",

        quote: "Don't listen to anyone who tells you that you can't do this or that.",

        desc: "Among the many phases of life, being a student remains one of the most valuable journeys. Confidence, self-belief and perseverance are the virtues that shape a strong personality. Believe in yourself, believe in God and move ahead with determination."

    },

    {

        img: "/about/neeraj.webp",

        name: "Neeraj Sir",

        designation: "Senior Faculty Member",

        quote: "Teaching is the bridge between knowledge and wisdom.",

        desc: "Dedicated to nurturing young minds through conceptual clarity, discipline and continuous academic guidance. He believes every learner possesses unique potential waiting to be discovered and developed."

    }

];


const Faculty = () => {

    return (

        <section id="faculty" className="py-18 bg-surface">

            <div className="max-w-7xl mx-auto px-5">


                <div className="text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Meet Our Educators

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Mentors Who Inspire

                        <span className="text-secondary">

                            {" "}Beyond Classrooms

                        </span>

                    </h2>

                </div>




                <div className="mt-16 space-y-20">


                    {

                        faculty.map((item, index) => (


                            <div

                                key={index}

                                className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 !== 0 && "lg:[&>*:first-child]:order-2"}`}

                            >


                                <div>

                                    <img

                                        src={item.img}

                                        alt=""

                                        className="mx-auto h-80 w-80 rounded-full border-[6px] border-accent object-cover"

                                    />

                                </div>



                                <div>

                                    <Quote

                                        size={36}

                                        className="text-accent"

                                    />


                                    <p

                                        className="mt-4 text-xl italic text-primary"

                                    >

                                        {item.quote}

                                    </p>



                                    <h3

                                        className="mt-8 text-3xl font-bold text-primary"

                                    >

                                        {item.name}

                                    </h3>



                                    <p

                                        className="mt-1 text-secondary"

                                    >

                                        {item.designation}

                                    </p>



                                    <p

                                        className="mt-6 leading-8 text-text-secondary"

                                    >

                                        {item.desc}

                                    </p>


                                </div>


                            </div>

                        ))

                    }



                </div>

            </div>

        </section>

    );

};

export default Faculty;