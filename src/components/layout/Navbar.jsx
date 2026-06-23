import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    return (

        <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-lg">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                   <Link to="/" className="flex flex-col">

    <h1 className="text-3xl font-bold text-primary">
        E-Vidyaniketan
    </h1>

    <span className="text-[10px] font-medium tracking-[3px] uppercase text-accent">
        Intelligence • Character • Excellence
    </span>

</Link>


                    {/* Desktop Menu */}

                    <nav className="hidden lg:flex items-center gap-8">

                        {navLinks.map((item) => (

                            <div
                                key={item.title}
                                className="relative group"
                            >

                                {item.submenu ? (

                                    <>

                                        <button
                                            className="flex items-center gap-1 font-medium text-text-primary hover:text-secondary transition"
                                        >

                                            {item.title}

                                            <ChevronDown
                                                size={16}
                                                className="group-hover:rotate-180 transition"
                                            />

                                        </button>


                                        {/* Dropdown */}

                                        <div
                                            className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 min-w-56 rounded-2xl bg-white shadow-xl border border-border p-3"
                                        >

                                            {
                                                item.submenu.map((sub) => (

                                                    <Link
                                                        key={sub.title}
                                                        to={sub.path}
                                                        className="block px-4 py-2 rounded-lg hover:bg-surface transition"
                                                    >

                                                        {sub.title}

                                                    </Link>

                                                ))
                                            }

                                        </div>

                                    </>

                                ) : (

                                    <Link
                                        to={item.path}
                                        className="font-medium hover:text-secondary transition"
                                    >

                                        {item.title}

                                    </Link>

                                )}

                            </div>

                        ))}

                    </nav>



                    {/* Hamburger */}

                    <button

                        onClick={() => setMobileOpen(!mobileOpen)}

                        className="lg:hidden relative w-8 h-8"

                    >

                        <span
                            className={`absolute left-0 top-2 h-0.5 w-7 bg-primary transition-all duration-300

                            ${mobileOpen ? "rotate-45 top-4" : ""}`}

                        />


                        <span
                            className={`absolute left-0 top-4 h-0.5 w-7 bg-primary transition-all duration-300

                            ${mobileOpen ? "opacity-0" : ""}`}

                        />


                        <span
                            className={`absolute left-0 top-6 h-0.5 w-7 bg-primary transition-all duration-300

                            ${mobileOpen ? "-rotate-45 top-4" : ""}`}

                        />

                    </button>

                </div>

            </div>



            {/* Mobile Menu */}

            <div

                className={`lg:hidden overflow-hidden transition-all duration-500

                ${mobileOpen ? "max-h-[700px]" : "max-h-0"}`}

            >

                <div className="bg-white border-t border-border">

                    {

                        navLinks.map((item, i) => (

                            <div key={i}>


                                {

                                    item.submenu ? (

                                        <>

                                            <button

                                                onClick={() =>

                                                    setOpenDropdown(

                                                        openDropdown === i

                                                            ? null

                                                            : i
                                                    )

                                                }


                                                className="w-full flex justify-between items-center px-5 py-4"

                                            >

                                                {item.title}


                                                <ChevronDown

                                                    size={18}

                                                    className={`transition

                                                    ${openDropdown === i

                                                            ? "rotate-180"

                                                            : ""
                                                        }`}

                                                />

                                            </button>



                                            <div

                                                className={`overflow-hidden transition-all duration-300

                                                ${openDropdown === i

                                                        ? "max-h-96"

                                                        : "max-h-0"
                                                    }`}

                                            >

                                                {

                                                    item.submenu.map((sub) => (

                                                        <Link

                                                            key={sub.title}

                                                            to={sub.path}

                                                            className="block px-10 py-3 text-sm"

                                                            onClick={() => setMobileOpen(false)}

                                                        >

                                                            {sub.title}

                                                        </Link>

                                                    ))

                                                }

                                            </div>

                                        </>

                                    ) : (

                                        <Link

                                            to={item.path}

                                            className="block px-5 py-4"

                                            onClick={() => setMobileOpen(false)}

                                        >

                                            {item.title}

                                        </Link>

                                    )

                                }

                            </div>

                        ))

                    }

                </div>

            </div>

        </header>

    );

};

export default Navbar;