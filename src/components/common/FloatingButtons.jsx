import { useEffect, useState } from "react";
import { Phone, ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {

    const [showTop, setShowTop] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setShowTop(window.scrollY > 300);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    const scrollTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };


    return (

        <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-4">


            {/* Call */}

          <div className="relative">

    <span

        className="absolute inset-0 rounded-full bg-primary animate-ripple"

    />

    <a

        href="tel:+919352603736"

        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition duration-300 hover:scale-110"

    >

        <Phone size={22}/>

    </a>

</div>



            {/* Whatsapp */}

           <div className="relative">

    <span

        className="absolute inset-0 rounded-full bg-green-500 animate-ripple"

    />

    <a

        href="https://wa.me/919352603736"

        target="_blank"

        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:scale-110"

    >

        <FaWhatsapp size={26}/>

    </a>

</div>



            {/* Scroll Top */}

            {

                showTop && (

                 <div className="relative">

    <span

        className="absolute inset-0 rounded-full bg-accent animate-ripple"

    />

    <button

        onClick={scrollTop}

        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary shadow-lg transition duration-300 hover:scale-110"

    >

        <ChevronUp size={22}/>

    </button>

</div>

                )

            }


        </div>

    );

};

export default FloatingButtons;