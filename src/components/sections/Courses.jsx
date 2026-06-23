import {
  BookOpen,
  FlaskConical,
  Clock3,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    id: "class-9-10",
    icon: BookOpen,
    title: "Class IX – X",
    timing: "5:00 PM – 8:00 PM",
    subjects: [
      "Mathematics",
      "Science",
      "Social Science",
      "English",
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
    icon: FlaskConical,
    title: "Class XI – XII",
    timing: "5:00 PM – 8:00 PM",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
    ],
    highlights: [
      "Sunday Assessments",
      "Extra Classes",
      "Doubt Sessions",
      "Concept Building",
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
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-[28px] border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:border-secondary hover:shadow-xl"
              >
                {/* Icon + Timing */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                    <Icon size={28} className="text-secondary" />
                  </div>

                  {course.timing && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-text-secondary shadow-sm">
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
                        <span className="text-text-secondary">{subject}</span>
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
                        className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;