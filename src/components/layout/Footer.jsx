import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* School Info */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            E-Vidyaniketan
                        </h2>

                        <p className="text-accent font-medium mt-1">
                            Senior Secondary School
                        </p>

                        <p className="mt-5 text-slate-400 leading-relaxed">
                            Nurturing young minds with knowledge, discipline,
                            and values for a brighter future.
                        </p>

                        <div className="flex gap-3 mt-6">
                            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 relative inline-block">
                            Quick Links
                            <span className="absolute left-0 -bottom-2 h-0.5 w-14 bg-yellow-400 rounded-full" />
                        </h3>

                        <ul className="space-y-3">

                            {navLinks.slice(0, 4).map((item, index) => (

                                <li key={index}>
                                    <Link
                                        to={item.path || item.submenu?.[0]?.path}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-all duration-300"
                                    >

                                        <span className="group-hover:translate-x-1 transition-transform">
                                            &gt;
                                        </span>

                                        {item.title}

                                    </Link>
                                </li>

                            ))}

                        </ul>
                    </div>


                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 relative inline-block">
                            Useful Links
                            <span className="absolute left-0 -bottom-2 h-0.5 w-14 bg-yellow-400 rounded-full" />
                        </h3>

                        <ul className="space-y-3">

                            {navLinks.slice(4).map((item, index) => (

                                <li key={index}>
                                    <Link
                                        to={item.path || item.submenu?.[0]?.path}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-all duration-300"
                                    >

                                        <span className="group-hover:translate-x-1 transition-transform">
                                            &gt;
                                        </span>

                                        {item.title}

                                    </Link>
                                </li>

                            ))}

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 relative inline-block">
                            Contact Us
                            <span className="absolute left-0 -bottom-2 h-0.5 w-14 bg-yellow-400 rounded-full" />
                        </h3>

                        <div className="space-y-5 text-slate-400">

                            <div className="group flex gap-3">
                                <MapPin size={18} className="mt-1 text-accent shrink-0" />

                                <div className="flex items-start gap-2">
                                    <span className="text-yellow-400 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                        &gt;
                                    </span>

                                    <p className="group-hover:text-yellow-400 transition-colors duration-300">
                                        C-554, Behind Jawahar Nagar Police Station,
                                        Indra Vihar, Talwandi, Kota
                                    </p>
                                </div>
                            </div>

                            <div className="group flex gap-3">
                                <Phone size={18} className="text-accent shrink-0" />

                                <a
                                    href="tel:+919352603736"
                                    className="flex items-center gap-2 group-hover:text-yellow-400 transition-colors duration-300"
                                >
                                    <span className="text-yellow-400 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                        &gt;
                                    </span>

                                    +91 93526 03736
                                </a>
                            </div>

                            <div className="group flex gap-3">
                                <Mail size={18} className="text-accent shrink-0" />

                                <a
                                    href="mailto:evidyaniketan@gmail.com"
                                    className="flex items-center gap-2 group-hover:text-yellow-400 transition-colors duration-300"
                                >
                                    <span className="text-yellow-400 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                        &gt;
                                    </span>

                                    evidyaniketan@gmail.com
                                </a>
                            </div>

                            <div className="group flex gap-3">
                                <Clock size={18} className="text-accent shrink-0" />

                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                        &gt;
                                    </span>

                                    <p className="group-hover:text-yellow-400 transition-colors duration-300">
                                        Mon - Sat : 8:00 AM – 4:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-slate-500">
                        © 2026 E-Vidyaniketan Senior Secondary School. All Rights Reserved.
                    </p>

                    <p className="text-sm text-slate-500">
                        Made by ❤ Digitee
                    </p>

                </div>
            </div>
        </footer>
    );
}