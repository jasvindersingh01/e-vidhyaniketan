import { useState } from "react";

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

                                className="group overflow-hidden rounded-[28px] cursor-pointer"

                            >


                                <img

                                    src={img}
                                    loading="lazy"
                                    alt=""


                                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"

                                />


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