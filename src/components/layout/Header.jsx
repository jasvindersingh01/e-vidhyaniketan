import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {

    const [hideTopbar, setHideTopbar] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setHideTopbar(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className="sticky top-0 z-50">

            {/* Desktop Only Topbar */}

            <div
                className={`
                    hidden lg:block
                    overflow-hidden
                    transition-all duration-500

                    ${
                        hideTopbar
                            ? "max-h-0 opacity-0"
                            : "max-h-20 opacity-100"
                    }
                `}
            >

                <Topbar />

            </div>


            <Navbar />

        </header>

    );
};

export default Header;