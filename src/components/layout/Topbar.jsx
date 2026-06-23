import { MapPin, Phone, Mail } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-6 overflow-hidden">

          <div className="hidden lg:flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            <span>
              C-554, Behind Jawahar Nagar Police Station,
              Indra Vihar, Talwandi, Kota
            </span>
          </div>

          <a
            href="tel:+919352603736"
            className="flex items-center gap-2 hover:text-accent transition"
          >
            <Phone size={16} />
            <span>+91 93526 03736</span>
          </a>

          <a
            href="mailto:evidyaniketan@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition"
          >
            <Mail size={16} />
            <span>evidyaniketan@gmail.com</span>
          </a>

        </div>

        {/* Right Side */}
        <a
          href="/admissions"
          className="hidden md:block rounded-full bg-accent px-4 py-1.5 font-medium text-primary transition hover:opacity-90"
        >
          Apply Now
        </a>

      </div>
    </div>
  );
};

export default Topbar;