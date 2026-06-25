import { Building2, GraduationCap, Factory, Trees } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Building2,
        title: "Rich Heritage",
        desc: "Founded in the 12th century, Kota reflects Rajput culture, bravery and architectural legacy."
    },
    {
        icon: GraduationCap,
        title: "Education Capital",
        desc: "Known as the Education City of India, Kota attracts thousands of students every year."
    },
    {
        icon: Factory,
        title: "Industrial Hub",
        desc: "Kota is home to chemical plants, engineering industries, fertilizers and Kota stone."
    },
    {
        icon: Trees,
        title: "Tourist Attractions",
        desc: "Temples, gardens and historical monuments enrich the cultural landscape of the city."
    }
];

const places = [
    "River Front",
    "Chambal Garden",
    "Jag Mandir",
    "Seven Wonders",
    "Kota Barrage",
    "City Park"
];

const KotaCity = () => {

    return (

        <section id="kota-city" className="py-18 bg-surface">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid items-center gap-16 lg:grid-cols-2">


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <img
                            src="/kota.jpg"
                            alt=""
                            className="mx-auto max-w-lg"
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

                                About Kota City

                            </span>

                        </div>


                        <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                            Education City Of

                            <span className="text-secondary">

                               {""} India

                            </span>

                        </h2>


                        <p className="mt-5 leading-8 text-text-secondary">

                            Situated on the banks of the Chambal River, Kota is Rajasthan's third largest city and one of India's leading educational destinations, attracting students from all corners of the country.

                        </p>



                        <div className="mt-10 grid gap-5 sm:grid-cols-2">

                            {

                                features.map((item, index) => {

                                    const Icon = item.icon;

                                    return (

                                        <div key={index} className="flex gap-4">

                                            <div className="mt-1">

                                                <Icon
                                                    size={22}
                                                    className="text-accent"
                                                />

                                            </div>


                                            <div>

                                                <h3 className="font-semibold text-primary">

                                                    {item.title}

                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-text-secondary">

                                                    {item.desc}

                                                </p>

                                            </div>

                                        </div>

                                    )

                                })

                            }

                        </div>



                        <div className="mt-10 flex flex-wrap gap-3">

                            {

                                places.map((place) => (

                                    <span

                                        key={place}

                                        className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"

                                    >

                                        {place}

                                    </span>

                                ))

                            }

                        </div>



                    </motion.div>

                </div>

            </div>

        </section>

    );

};

export default KotaCity;