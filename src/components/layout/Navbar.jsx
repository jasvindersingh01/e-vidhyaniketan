import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const location = useLocation();
    const navRef = useRef(null);

    // Route change pe sab band karo
    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    }, [location.pathname, location.hash]);

    // Body scroll lock jab mobile menu open ho
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    // Bahar click kare toh close ho
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMobileOpen(false);
                setOpenDropdown(null);
                setOpenSubDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const closeEverything = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    };

    // Smart Link - HashLink ya normal Link
    const SmartLink = ({ to, children, className, onClick }) => {
        const handleClick = () => {
            closeEverything();
            onClick?.();
        };

        if (to?.includes("#")) {
            return (
                <HashLink
                    smooth
                    to={to}
                    className={className}
                    onClick={handleClick}
                >
                    {children}
                </HashLink>
            );
        }

        return (
            <Link to={to} className={className} onClick={handleClick}>
                {children}
            </Link>
        );
    };

    return (
        <header
            ref={navRef}
            className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-lg"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* ───── Logo ───── */}
                    <Link to="/" className="flex flex-col" onClick={closeEverything}>
                        <h1 className="text-3xl font-bold text-primary">
                            E-Vidyaniketan
                        </h1>
                        <span className="text-[10px] font-medium tracking-[3px] uppercase text-accent">
                            Intelligence • Character • Excellence
                        </span>
                    </Link>

                    {/* ───── Desktop Menu ───── */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((item) => (
                            <div key={item.title} className="relative group">
                                {item.submenu ? (
                                    <>
                                        <button className="flex items-center gap-1 px-4 py-2 font-medium text-text-primary hover:text-secondary rounded-lg hover:bg-surface/50 transition-all duration-200">
                                            {item.title}
                                            <ChevronDown
                                                size={15}
                                                className="group-hover:rotate-180 transition-transform duration-300"
                                            />
                                        </button>

                                        {/* ── Level 1 Dropdown ── */}
                                        <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                            <div className="min-w-60 rounded-2xl bg-white shadow-xl border border-border p-2">
                                                {item.submenu.map((sub) => (
                                                    <div
                                                        key={sub.title}
                                                        className="relative group/sub"
                                                    >
                                                        {sub.submenu ? (
                                                            <>
                                                                <div className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-surface cursor-pointer transition-all duration-200">
                                                                    <SmartLink
                                                                        to={sub.path}
                                                                        className="flex-1 font-medium text-sm"
                                                                    >
                                                                        {sub.title}
                                                                    </SmartLink>
                                                                    <ChevronDown
                                                                        size={14}
                                                                        className="-rotate-90 text-gray-400 group-hover/sub:text-secondary transition-colors"
                                                                    />
                                                                </div>

                                                                {/* ── Level 2 Dropdown (fly-out) ── */}
                                                                <div className="absolute left-full top-0 pl-2 invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300">
                                                                    <div className="min-w-52 rounded-2xl bg-white shadow-xl border border-border p-2">
                                                                        {sub.submenu.map((child) => (
                                                                            <SmartLink
                                                                                key={child.title}
                                                                                to={child.path}
                                                                                className="block px-4 py-2.5 rounded-xl text-sm hover:bg-surface hover:text-secondary transition-all duration-200"
                                                                            >
                                                                                {child.title}
                                                                            </SmartLink>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <SmartLink
                                                                to={sub.path}
                                                                className="block px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-surface hover:text-secondary transition-all duration-200"
                                                            >
                                                                {sub.title}
                                                            </SmartLink>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <SmartLink
                                        to={item.path}
                                        className="px-4 py-2 font-medium hover:text-secondary rounded-lg hover:bg-surface/50 transition-all duration-200"
                                    >
                                        {item.title}
                                    </SmartLink>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* ───── Hamburger ───── */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-8 h-8 z-50"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`absolute left-0 top-2 h-0.5 w-7 bg-primary transition-all duration-300 ${
                                mobileOpen ? "rotate-45 top-4" : ""
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-4 h-0.5 w-7 bg-primary transition-all duration-300 ${
                                mobileOpen ? "opacity-0 scale-0" : ""
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-6 h-0.5 w-7 bg-primary transition-all duration-300 ${
                                mobileOpen ? "-rotate-45 top-4" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* ───── Mobile Menu ───── */}
            <div
                className={`lg:hidden overflow-y-auto transition-all duration-500 ease-in-out ${
                    mobileOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-white border-t border-border pb-6">
                    {navLinks.map((item, i) => (
                        <div key={i} className="border-b border-border/50 last:border-0">
                            {item.submenu ? (
                                <>
                                    {/* Level 1 Toggle */}
                                    <button
                                        onClick={() => {
                                            setOpenDropdown(openDropdown === i ? null : i);
                                            setOpenSubDropdown(null);
                                        }}
                                        className="w-full flex justify-between items-center px-5 py-4 font-medium text-text-primary active:bg-surface/50 transition"
                                    >
                                        {item.title}
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform duration-300 ${
                                                openDropdown === i ? "rotate-180 text-secondary" : ""
                                            }`}
                                        />
                                    </button>

                                    {/* Level 1 Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
                                            openDropdown === i ? "max-h-[600px]" : "max-h-0"
                                        }`}
                                    >
                                        <div className="bg-surface/30">
                                            {item.submenu.map((sub, j) => (
                                                <div key={j}>
                                                    {sub.submenu ? (
                                                        <>
                                                            {/* Level 2 Toggle */}
                                                            <button
                                                                onClick={() =>
                                                                    setOpenSubDropdown(
                                                                        openSubDropdown === `${i}-${j}`
                                                                            ? null
                                                                            : `${i}-${j}`
                                                                    )
                                                                }
                                                                className="w-full flex justify-between items-center px-8 py-3 text-sm font-medium active:bg-surface transition"
                                                            >
                                                                {sub.title}
                                                                <ChevronDown
                                                                    size={16}
                                                                    className={`transition-transform duration-300 ${
                                                                        openSubDropdown === `${i}-${j}`
                                                                            ? "rotate-180 text-secondary"
                                                                            : ""
                                                                    }`}
                                                                />
                                                            </button>

                                                            {/* Level 2 Content */}
                                                            <div
                                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                                    openSubDropdown === `${i}-${j}`
                                                                        ? "max-h-96"
                                                                        : "max-h-0"
                                                                }`}
                                                            >
                                                                <div className="bg-surface/50">
                                                                    {sub.submenu.map((child) => (
                                                                        <SmartLink
                                                                            key={child.title}
                                                                            to={child.path}
                                                                            className="block px-12 py-3 text-sm text-text-secondary hover:text-secondary active:bg-surface transition"
                                                                        >
                                                                            {child.title}
                                                                        </SmartLink>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <SmartLink
                                                            to={sub.path}
                                                            className="block px-8 py-3 text-sm font-medium hover:text-secondary active:bg-surface transition"
                                                        >
                                                            {sub.title}
                                                        </SmartLink>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <SmartLink
                                    to={item.path}
                                    className="block px-5 py-4 font-medium active:bg-surface/50 transition"
                                >
                                    {item.title}
                                </SmartLink>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ───── Mobile Backdrop ───── */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/20 -z-10 lg:hidden"
                    onClick={closeEverything}
                />
            )}
        </header>
    );
};

export default Navbar;