import { ChevronRight, House } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageBanner = ({
    title,
    description,
    currentPage
}) => {

    return (

        <section className="relative overflow-hidden py-14">

            <img
                src="/banner1.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-primary/50" />

            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-5">

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: .7 }}

                    className="max-w-3xl"

                >

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">

                        <House
                            size={15}
                            className="text-accent"
                        />

                        <Link

                            to="/"

                            className="text-sm text-white/80 hover:text-accent transition"

                        >

                            Home

                        </Link>


                        <ChevronRight

                            size={15}

                            className="text-white/40"

                        />


                        <span className="text-sm font-medium text-accent">

                            {currentPage}

                        </span>

                    </div>



                    <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">

                        {title}

                    </h1>



                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">

                        {description}

                    </p>

                </motion.div>

            </div>

        </section>

    );

};

export default PageBanner;