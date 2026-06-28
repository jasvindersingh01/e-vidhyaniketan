import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
    { value: 24, suffix: "+", label: "Years of Excellence" },
    { value: 5000, suffix: "+", label: "Students Mentored" },
    { value: 30, suffix: "+", label: "Students Per Batch" },
    { value: 100, suffix: "%", label: "Parent Satisfaction" }
];

const Counter = ({ end, suffix = "" }) => {

    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: .5 });

    useEffect(() => {

        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const step = end / (duration / 16);

        const update = () => {

            start += step;

            if (start < end) {
                setCount(Math.floor(start));
                requestAnimationFrame(update);
            } else {
                setCount(end);
            }

        };

        requestAnimationFrame(update);

    }, [inView, end]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );

};


const Stats = () => {

    return (

        <section className="bg-primary py-18">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]"
                        >
                            <h3 className="relative text-4xl font-bold text-accent transition-transform duration-500 group-hover:scale-110">
                                <Counter end={item.value} suffix={item.suffix} />
                            </h3>

                            <p className="relative mt-3 text-sm font-medium text-white/70 transition-colors duration-500 group-hover:text-white">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Stats;