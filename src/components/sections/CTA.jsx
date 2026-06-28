import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 md:p-14">

                    {/* Decorative Blur */}
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur-md">
                                🎓 Admissions Open 2026–27
                            </span>

                            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                                Give Your Child the Best Start in Education
                            </h2>

                            <p className="mt-5 text-blue-100 text-lg leading-relaxed max-w-xl">
                                Join a nurturing environment where learning,
                                discipline, and creativity come together to
                                shape bright futures. Limited seats available.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="https://forms.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                                >
                                    Apply Now
                                    <ArrowRight size={18} />
                                </a>

                                <a
                                    href="tel:+919352603736"
                                    className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
                                >
                                    <Phone size={18} />
                                    Call Us
                                </a>
                            </div>
                        </div>

                        {/* Right Info Cards */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5">
                                <Phone className="text-white shrink-0" />

                                <div>
                                    <p className="text-blue-100 text-sm">
                                        Phone Number
                                    </p>

                                    <a
                                        href="tel:+919352603736"
                                        className="text-white font-semibold transition hover:text-accent"
                                    >
                                        +91 93526 03736
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5">
                                <Mail className="text-white shrink-0" />

                                <div>
                                    <p className="text-blue-100 text-sm">
                                        Email Address
                                    </p>

                                    <a
                                        href="mailto:evidyaniketan@gmail.com"
                                        className="text-white font-semibold transition hover:text-accent"
                                    >
                                        evidyaniketan@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5">
                                <MapPin className="text-white shrink-0" />

                                <div>
                                    <p className="text-blue-100 text-sm">
                                        School Address
                                    </p>

                                    <a
                                        href="https://maps.google.com/?q=C-554,+Behind+Jawahar+Nagar+Police+Station,+Indra+Vihar,+Talwandi,+Kota,+Rajasthan+324005"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-semibold transition hover:text-accent"
                                    >
                                        C-554, Behind Jawahar Nagar Police Station, Indra Vihar,
                                        Talwandi, Kota
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}