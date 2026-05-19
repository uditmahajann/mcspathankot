import React from "react";
import {
  FlaskConical,
  Atom,
  Palette,
  Leaf,
  Trophy,
  ArrowRight,
} from "lucide-react";

const exhibitions = [
  {
    id: 1,
    year: "2024",
    title: "Science Innovation Fair",
    subtitle: "Turning Scientific Curiosity into Real-World Solutions",
    description:
      "Students showcased sustainable inventions, automation systems, and experimental prototypes through immersive scientific demonstrations and research-backed presentations.",

    heroImage: "/Images/Exhibitions/sciencehero.jpg",
    heroVideo: "/Videos/sciencefair.mp4",

    icon: FlaskConical,
    accent: "bg-blue-100 text-blue-700",

    projects: [
      {
        title: "Solar-Powered Irrigation System",
        desc: "A smart irrigation solution designed to conserve electricity and optimize water usage in agriculture.",
        image: "/Images/Exhibitions/project1.jpg",
      },
      {
        title: "Natural Water Filtration Model",
        desc: "A sustainable filtration process using charcoal, sand, and gravel for cleaner drinking water.",
        image: "/Images/Exhibitions/project2.jpg",
      },
      {
        title: "Smart Energy Saver",
        desc: "An Arduino-powered automation model for reducing unnecessary energy consumption.",
        image: "/Images/Exhibitions/project3.jpg",
      },
    ],
  },

  {
    id: 2,
    year: "2023",
    title: "STEM & Robotics Expo",
    subtitle: "Exploring Technology, Engineering & Future Innovation",
    description:
      "Students explored coding, robotics, engineering, and AI-driven innovations through interactive prototypes and technology showcases.",

    heroImage: "/Images/Exhibitions/stemhero.jpg",
    heroVideo: "/Videos/stemexpo.mp4",

    icon: Atom,
    accent: "bg-emerald-100 text-emerald-700",

    projects: [
      {
        title: "Line Following Robot",
        desc: "A sensor-based autonomous robot capable of tracking designated paths accurately.",
        image: "/Images/Exhibitions/stem1.jpg",
      },
      {
        title: "3D Printed Prosthetic Hand",
        desc: "Students designed a low-cost prosthetic model using accessible 3D-printing technology.",
        image: "/Images/Exhibitions/stem2.jpg",
      },
      {
        title: "Drone Crop Monitoring",
        desc: "A drone-powered agricultural monitoring system using aerial crop analysis.",
        image: "/Images/Exhibitions/stem3.jpg",
      },
    ],
  },

  {
    id: 3,
    year: "2024",
    title: "Art & Design Exhibition",
    subtitle: "A Celebration of Creativity & Visual Expression",
    description:
      "From large-scale murals and digital illustrations to handcrafted sculptures and installations, students transformed imagination into artistic experiences.",

    heroImage: "/Images/Exhibitions/arthero.jpg",
    heroVideo: "/Videos/artexpo.mp4",

    icon: Palette,
    accent: "bg-pink-100 text-pink-700",

    projects: [
      {
        title: "Recycled Material Sculptures",
        desc: "Creative sculptures crafted entirely from upcycled waste materials.",
        image: "/Images/Exhibitions/art1.jpg",
      },
      {
        title: "20-Foot Collaborative Mural",
        desc: "A thematic mural representing unity, diversity, and sustainability.",
        image: "/Images/Exhibitions/art2.jpg",
      },
      {
        title: "Digital Art Gallery",
        desc: "Original digital compositions and visual storytelling projects created using tablets and software tools.",
        image: "/Images/Exhibitions/art3.jpg",
      },
    ],
  },

  {
    id: 4,
    year: "2024",
    title: "Eco Awareness Fair",
    subtitle: "Innovating for a More Sustainable Future",
    description:
      "Students explored environmental responsibility through sustainability projects, eco-friendly models, and awareness-driven campaigns.",

    heroImage: "/Images/Exhibitions/ecohero.jpg",
    heroVideo: "/Videos/ecoexpo.mp4",

    icon: Leaf,
    accent: "bg-green-100 text-green-700",

    projects: [
      {
        title: "Waste-to-Compost Machine",
        desc: "A composting model designed to transform organic waste into usable fertilizer.",
        image: "/Images/Exhibitions/eco1.jpg",
      },
      {
        title: "Plastic-Free Campus Initiative",
        desc: "A student-led campaign encouraging reusable alternatives and environmental awareness.",
        image: "/Images/Exhibitions/eco2.jpg",
      },
      {
        title: "Rainwater Harvesting Model",
        desc: "A demonstration of sustainable water conservation systems for campus usage.",
        image: "/Images/Exhibitions/eco3.jpg",
      },
    ],
  },
];

const EnrichingExhibitions = () => {
  return (
    <main className="bg-[#f8f6f1] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          src="/Videos/exhibitionshero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 min-h-screen flex items-center">
          <div className="max-w-5xl">
            <p className="text-sm tracking-[0.35em] uppercase text-yellow-200">
              Enriching Exhibitions
            </p>

            <h1 className="mt-8 text-6xl sm:text-7xl lg:text-[8rem] font-poppins font-semibold leading-[0.88] tracking-tight text-white">
              Showcasing
              <br />
              Ideas,
              <br />
              Innovation & Creativity.
            </h1>

            <p className="mt-10 text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
              Every exhibition at MCS becomes a platform where students present
              research, innovation, creativity, experimentation, and meaningful
              real-world solutions.
            </p>
          </div>
        </div>
      </section>

      {/* EXHIBITIONS */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 space-y-32">
          {exhibitions.map((event, index) => {
            const Icon = event.icon;

            return (
              <section
                key={event.id}
                className="space-y-14"
              >
                {/* EVENT HERO */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* CONTENT */}
                  <div className="lg:col-span-5">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${event.accent}`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    <p className="mt-8 text-sm tracking-[0.35em] uppercase text-primary">
                      {event.year}
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-7xl font-poppins font-semibold leading-[0.95] text-gray-900">
                      {event.title}
                    </h2>

                    <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
                      {event.subtitle}
                    </p>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* MEDIA */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl">
                        <img
                          src={event.heroImage}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl mt-14">
                        <video
                          src={event.heroVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECTS */}
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <p className="text-sm tracking-[0.35em] uppercase text-primary">
                        Featured Projects
                      </p>

                      <h3 className="mt-3 text-3xl lg:text-5xl font-poppins font-semibold text-gray-900">
                        Student Highlights
                      </h3>
                    </div>

                    <ArrowRight className="hidden lg:block h-10 w-10 text-gray-300" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {event.projects.map((project, idx) => (
                      <div
                        key={idx}
                        className="group rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5"
                      >
                        {/* IMAGE */}
                        <div className="overflow-hidden aspect-[4/3]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-7">
                          <h4 className="text-2xl font-poppins font-semibold text-gray-900 leading-tight">
                            {project.title}
                          </h4>

                          <p className="mt-4 text-gray-600 leading-relaxed">
                            {project.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        <video
          src="/Videos/exhibitionsfinale.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <Trophy className="mx-auto h-16 w-16 text-yellow-300" />

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.92] text-white">
            Celebrating Curiosity,
            <br />
            Creativity & Innovation.
          </h2>

          <p className="mt-10 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            At MCS, exhibitions inspire students to move beyond textbooks —
            encouraging experimentation, presentation, collaboration, and
            real-world thinking.
          </p>
        </div>
      </section>
    </main>
  );
};

export default EnrichingExhibitions;