import {
  BookOpen,
  FlaskConical,
  Clock3,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "class-9-10",
    path: "/courses/ix-x",
    icon: BookOpen,
    title: "Class IX – X",
    timing: "4:00 PM – 9:00 PM",
    subjects: [
      "Mathematics",
      "Science",
      "Social Science",
      "English",
      "Hindi",
    ],
    highlights: [
      "CBSE Pattern",
      "NCERT Based Learning",
      "Weekly Tests",
      "Monthly Report Cards",
    ],
  },
  {
    id: "class-11-12",
    path: "/courses/xi-xii",
    icon: FlaskConical,
    title: "Class XI – XII",
    timing: "5:00 PM – 8:00 PM",
    subjects: [
      "Science (PCM)",
      "Science (PCB)",
      "Commerce",
      "Arts",
    ],
    highlights: [
      "Weekly Tests & Regular Assignments",
      "Extra Classes",
      "Individual Doubt Sessions",
      "Parent-Teacher Meetings",
    ],
  },
];

const Courses = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-secondary/10 px-5 py-2">
            <span className="text-sm font-medium text-secondary">
              Academic Programs
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Programs Tailored For
            <span className="text-secondary"> Academic Excellence</span>
          </h2>

          <p className="mt-5 text-lg text-text-secondary">
            Structured academic guidance for Classes IX to XII with
            conceptual clarity, discipline, and individual growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
             <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
>

    <Link
        to={course.path}
        className="group block rounded-[28px] border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(245,158,11,0.22)]"
    >
                {/* Icon + Timing */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-all duration-500 group-hover:bg-accent">
                    <Icon
                      size={28}
                      className="text-secondary transition-all duration-500 group-hover:scale-110 group-hover:text-primary"
                    />
                  </div>

                  {course.timing && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-text-secondary shadow-sm transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
                      <Clock3 size={16} className="text-secondary" />
                      <span>{course.timing}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-text-primary">
                  {course.title}
                </h3>

                {/* Subjects */}
                <div className="mt-6">
                  <p className="font-semibold text-text-primary">Subjects</p>

                  <div className="mt-4 space-y-3">
                    {course.subjects.map((subject) => (
                      <div key={subject} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-secondary"
                        />
                        <span className="transition-colors duration-300 group-hover:text-primary text-text-secondary">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-7">
                  <p className="font-semibold text-text-primary">Highlights</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                 </Link>

</motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;