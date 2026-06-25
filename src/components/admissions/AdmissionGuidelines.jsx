import { Check } from "lucide-react";

const policies = [

    "Students are required to fill the registration form with all necessary details.",

    "Each batch accommodates only 30 students to ensure individual attention.",

    "Subjects are offered for students from Classes IX to XII.",

    "Monthly Mark Sheets, daily attendance and absentee calls are strictly followed.",

    "Parents–Teacher Meetings are conducted once every month.",

    "Daily doubt classes and timely distribution of study material are ensured.",

    "Parents may enquire about their ward's performance at any time during the course."

];


const regulations = [

    "E-Vidyaniketan reserves the right to modify courses, tests, faculty or class venues.",

    "Students and parents are solely responsible for absenteeism from classes.",

    "Fees once paid are non-refundable under any circumstances.",

    "Students may be shifted to another batch based on internal test performance.",

    "The Director's decision shall be final in matters not covered by these guidelines.",

    "E-Vidyaniketan reserves the right to deny admission without assigning any reason.",

    "All disputes are subject to Kota Jurisdiction only."

];


const AdmissionGuidelines = () => {

    return (

        <section className="py-18 bg-surface">

            <div className="max-w-7xl mx-auto px-5">


                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">

                        <span className="text-sm font-medium text-secondary">

                            Admission Guidelines

                        </span>

                    </div>


                    <h2 className="mt-5 text-4xl font-bold text-primary lg:text-5xl">

                        Admissions &

                        <span className="text-secondary">

                            {" "}Academic Policies

                        </span>

                    </h2>


                    <p className="mt-5 leading-8 text-text-secondary">

                        To maintain a disciplined and productive learning environment, students and parents are expected to follow the institute's admission policies and academic regulations.

                    </p>

                </div>



                <div className="mt-16 grid gap-8 lg:grid-cols-2">


                    <div className="rounded-[30px] border border-border bg-white p-8 shadow-sm">

                        <h3 className="mb-8 text-2xl font-semibold text-primary">

                            Admission Policies

                        </h3>


                        <div className="space-y-5">

                            {

                                policies.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-4"
                                    >

                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">

                                            <Check

                                                size={16}

                                                className="text-accent"

                                            />

                                        </div>


                                        <p className="leading-7 text-text-secondary">

                                            {item}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                    </div>





                    <div className="rounded-[30px] border border-border bg-white p-8 shadow-sm">

                        <h3 className="mb-8 text-2xl font-semibold text-primary">

                            Academic Regulations

                        </h3>


                        <div className="space-y-5">

                            {

                                regulations.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-4"
                                    >

                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">

                                            <Check

                                                size={16}

                                                className="text-accent"

                                            />

                                        </div>


                                        <p className="leading-7 text-text-secondary">

                                            {item}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                    </div>



                </div>

            </div>

        </section>

    );

};

export default AdmissionGuidelines;