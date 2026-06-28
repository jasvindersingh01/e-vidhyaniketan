import { useState } from "react";
import { Eye } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";


const images = [

    "/gallery/1.jpg",

    "/gallery/2.jpg",

    "/gallery/3.jpg",

    "/gallery/4.jpg",

    "/gallery/5.jpg",

    "/gallery/6.jpg",

    "/gallery/7.jpg",

    "/gallery/8.jpg",

    "/gallery/9.jpg",

    "/gallery/10.jpg",

    "/gallery/11.jpg",

    "/gallery/12.jpg",

    "/gallery/13.jpg",

    "/gallery/14.jpg",

    "/gallery/15.jpg",

];


const GalleryGrid = () => {


    const [open, setOpen] = useState(false);

    const [index, setIndex] = useState(0);



    return (

        <section className="pb-18">

            <div className="max-w-7xl mx-auto px-5">


                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


                    {

                        images.map((img, i) => (

                            <div

                                key={i}

                                onClick={() => {

                                    setOpen(true);

                                    setIndex(i);

                                }}

                                className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.20)]"

                            >

                                <img

                                    src={img}

                                    loading="lazy"

                                    alt={`Gallery ${i + 1}`}

                                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"

                                />



                                {/* Overlay */}

                                <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/50" />



                                {/* Eye Button */}

                                <div className="absolute inset-0 flex items-center justify-center">

                                    <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">

                                        <Eye

                                            size={24}

                                            className="text-primary"

                                        />

                                    </div>

                                </div>



                                {/* Accent Line */}

                                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-r-full bg-accent transition-all duration-500 group-hover:w-full" />

                            </div>


                        ))

                    }



                </div>




                <Lightbox


                    open={open}


                    close={() => setOpen(false)}


                    index={index}


                    slides={images.map(src => ({ src }))}


                />



            </div>

        </section>

    )

}


export default GalleryGrid;