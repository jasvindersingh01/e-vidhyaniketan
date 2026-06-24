import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap } from "lucide-react";

import { motion } from "framer-motion";

import slide1 from "../../assets/hero/slider1.jpg";
import slide2 from "../../assets/hero/slider2.jpg";
import slide3 from "../../assets/hero/slider3.jpg";


const slides = [

    {
        img: slide1,
        title: "Intelligence Plus Character",
        subtitle: "Empowering Young Minds Since 2002"
    },

    {
        img: slide2,
        title: "Learning Beyond Books",
        subtitle: "Inspiring Excellence Every Day"
    },

    {
        img: slide3,
        title: "Dream • Learn • Achieve",
        subtitle: "Building Future Leaders"
    }

];


const Hero = () => {

    return (

        <section className="relative h-[80vh] overflow-hidden">

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}

                className="h-full"

            >


                {

                    slides.map((slide, index) => (


                        <SwiperSlide key={index}>


                            <div className="relative h-full">


                                <img

                                    src={slide.img}

                                    alt=""

                                    className="absolute inset-0 h-full w-full object-cover"

                                />



                                <div className="absolute inset-0 bg-black/50" />



                                <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">


                                    <div className="max-w-3xl text-white">

                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 my-4 backdrop-blur-md">

                                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />

                                            <span className="text-sm font-medium text-white">
                                                Welcome to E-Vidyaniketan
                                            </span>

                                        </div>


                                        <motion.h1

                                            initial={{ opacity: 0, y: 30 }}

                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ duration: 0.8 }}

                                            className="text-4xl md:text-6xl font-bold"

                                        >

                                            {slide.title}

                                        </motion.h1>



                                        <motion.p

                                            initial={{ opacity: 0, y: 30 }}

                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ delay: 0.3 }}

                                            className="mt-5 text-lg md:text-2xl"

                                        >

                                            {slide.subtitle}

                                        </motion.p>



                                        <motion.div

                                            initial={{ opacity: 0 }}

                                            animate={{ opacity: 1 }}

                                            transition={{ delay: 0.5 }}

                                            className="mt-8 flex gap-4"

                                        >


                                            <Link
                                                to="/courses"
                                                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-medium text-primary shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
                                            >
                                                Explore Courses

                                                <ArrowRight
                                                    size={18}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </Link>

                                            <Link
                                                to="/admissions"
                                                className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-primary active:translate-y-0"
                                            >
                                                <GraduationCap size={18} />

                                                Admission Open
                                            </Link>


                                        </motion.div>


                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>


                    ))

                }


            </Swiper>





            <button

                className="prev-btn absolute left-5 top-1/2 z-20 -translate-y-1/2
h-14 w-14 rounded-full bg-white/20 backdrop-blur-md
flex items-center justify-center text-white
hover:bg-accent hover:text-primary transition"

            >

                <ChevronLeft size={28} />

            </button>




            <button

                className="next-btn absolute right-5 top-1/2 z-20 -translate-y-1/2
h-14 w-14 rounded-full bg-white/20 backdrop-blur-md
flex items-center justify-center text-white
hover:bg-accent hover:text-primary transition"

            >

                <ChevronRight size={28} />

            </button>


        </section>

    );

};

export default Hero;