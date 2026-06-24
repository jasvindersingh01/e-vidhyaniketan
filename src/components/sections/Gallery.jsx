import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArrowRight } from "lucide-react";

const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg"
];

const Gallery = () => {

    const [index, setIndex] = useState(-1);

    return (

        <section className="bg-surface py-18">

            <div className="max-w-7xl mx-auto px-5">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">
                        <span className="text-sm font-medium text-secondary">
                            Campus Moments
                        </span>
                    </div>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-primary">
                        Life At <span className="text-secondary">E-Vidyaniketan</span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-text-secondary">
                        Explore glimpses of our classrooms, celebrations, activities and memorable moments.
                    </p>

                </div>


                <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">

                    <div className="space-y-4">

                        <img
                            src={images[0]}
                            onClick={() => setIndex(0)}
                            className="h-72 w-full cursor-pointer rounded-[28px] object-cover transition duration-300 hover:scale-[1.02]"
                        />

                        <img
                            src={images[1]}
                            onClick={() => setIndex(1)}
                            className="h-44 w-full cursor-pointer rounded-[28px] object-cover transition duration-300 hover:scale-[1.02]"
                        />

                    </div>


                    <div className="col-span-2">

                        <img
                            src={images[2]}
                            onClick={() => setIndex(2)}
                            className="h-[480px] w-full cursor-pointer rounded-[32px] object-cover transition duration-300 hover:scale-[1.02]"
                        />

                    </div>


                    <div className="space-y-4">

                        <img
                            src={images[3]}
                            onClick={() => setIndex(3)}
                            className="h-44 w-full cursor-pointer rounded-[28px] object-cover transition duration-300 hover:scale-[1.02]"
                        />

                        <img
                            src={images[4]}
                            onClick={() => setIndex(4)}
                            className="h-72 w-full cursor-pointer rounded-[28px] object-cover transition duration-300 hover:scale-[1.02]"
                        />

                    </div>

                </div>


                <div className="mt-10 text-center">

                    <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-white transition hover:bg-secondary">

                        View Full Gallery

                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />

                    </button>

                </div>


                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    index={index}
                    slides={images.map(img => ({ src: img }))}
                />

            </div>

        </section>

    );

};

export default Gallery;