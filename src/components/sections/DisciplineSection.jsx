import { ShieldCheck, PhoneCall, CalendarCheck, HeartHandshake, ClipboardCheck, School } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { icon: ShieldCheck, title: "Strict Discipline", desc: "Discipline and obedience remain the foremost values of our institute." },
    { icon: PhoneCall, title: "Parent Updates", desc: "Parents are informed instantly regarding absence, delays or concerns." },
    { icon: CalendarCheck, title: "Monthly PTMs", desc: "Regular parent-teacher meetings help monitor student progress." },
    { icon: HeartHandshake, title: "Moral Values", desc: "Kindness, humanity and self-reliance are nurtured alongside academics." },
    { icon: ClipboardCheck, title: "Attendance Tracking", desc: "Daily attendance is recorded and absentees are contacted promptly." },
    { icon: School, title: "Safe Environment", desc: "Students learn in a secure, caring and student-friendly atmosphere." }
];

const DisciplineSection = () => {

    return (

        <section className="py-20 bg-surface">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div>
                        <img
                            src="/discipline.webp"
                            alt=""
                        />
                    </div>


                    <div>

                        <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">
                            <span className="text-sm font-medium text-secondary">
                                Parents' Corner
                            </span>
                        </div>


                        <h2 className="mt-5 text-4xl font-bold text-primary leading-tight">

                            A Learning Environment

                            <span className="text-secondary">

                                Parents Can Trust

                            </span>

                        </h2>


                        <p className="mt-5 leading-8 text-text-secondary">

                            At E-Vidyaniketan, discipline, safety, communication and moral values are considered equally important as academics.

                        </p>



                        <div className="mt-10 grid gap-y-6 sm:grid-cols-2">

                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-accent" />
                                <div>
                                    <h4 className="font-semibold text-primary">Strict Discipline</h4>
                                    <p className="text-sm text-text-secondary">Discipline and obedience are our foremost values.</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <PhoneCall className="text-accent" />
                                <div>
                                    <h4 className="font-semibold text-primary">Parent Updates</h4>
                                    <p className="text-sm text-text-secondary">Parents are informed instantly regarding absences.</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <CalendarCheck className="text-accent" />
                                <div>
                                    <h4 className="font-semibold text-primary">Monthly PTMs</h4>
                                    <p className="text-sm text-text-secondary">Regular meetings to discuss progress.</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <ClipboardCheck className="text-accent" />
                                <div>
                                    <h4 className="font-semibold text-primary">Attendance Tracking</h4>
                                    <p className="text-sm text-text-secondary">Daily attendance monitoring and follow-ups.</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <HeartHandshake className="text-accent" />
                                <div>
                                    <h4 className="font-semibold text-primary">Moral Values</h4>
                                    <p className="text-sm text-text-secondary">Kindness, humanity and self-reliance are nurtured.</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <School className="text-accent" />
                                <div>
                                    <h4 className="font-semibold text-primary">Safe Environment</h4>
                                    <p className="text-sm text-text-secondary">A secure, caring and student-friendly atmosphere.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default DisciplineSection;