import { motion } from "framer-motion";

const Loader = () => {

    return (

        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">

            {/* Book Loader */}

            <div className="relative flex items-center justify-center">

                <motion.div

                    animate={{
                        rotateY: [0, -180, 0]
                    }}

                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}

                    className="h-16 w-12 rounded-l-md bg-secondary shadow-md"

                    style={{

                        transformStyle: "preserve-3d"

                    }}

                />


                <motion.div

                    animate={{
                        rotateY: [0, 180, 0]
                    }}

                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}

                    className="h-16 w-12 rounded-r-md bg-primary shadow-md"

                    style={{

                        transformStyle: "preserve-3d"

                    }}

                />

            </div>



            <motion.h1

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{

                    duration: .6

                }}

                className="mt-8 text-4xl font-bold text-primary"

            >

                E-Vidyaniketan

            </motion.h1>



            <p

                className="mt-2 text-xs tracking-[5px] text-secondary"

            >

                INTELLIGENCE • CHARACTER • EXCELLENCE

            </p>



            <div className="mt-8 flex gap-2">


                {

                    [1, 2, 3].map((item) => (

                        <motion.div

                            key={item}

                            animate={{

                                y: [0, -8, 0]

                            }}

                            transition={{

                                duration: .8,

                                repeat: Infinity,

                                delay: item * .15

                            }}

                            className="h-3 w-3 rounded-full bg-secondary"

                        />

                    ))

                }


            </div>


        </div>

    );

};

export default Loader;