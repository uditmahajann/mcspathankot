import type React from "react";
import { Sun, Play, Users, HeartHandshake, BookOpen } from "lucide-react";

type Pillar = {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  summary: string;
  image: string;
  accent?: string;
};

const PILLARS: Pillar[] = [
  {
    id: "montessori",
    icon: Sun,
    title: "Inquiry-based Learning",
    summary:
      "Children ask questions, explore ideas, and learn through discovery and dialogue.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-green-300 to-emerald-400",
  },
  {
    id: "playbased",
    icon: Play,
    title: "Creative Expression",
    summary:
      "Art, craft, and performance weave joy and imagination into everyday lessons.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-yellow-300 to-amber-400",
  },
  {
    id: "teachers",
    icon: Users,
    title: "Holistic Growth & Values",
    summary:
      "Life skills, ethics, and wellness programs shape kindness, empathy, and independence.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-sky-300 to-indigo-400",
  },
  {
    id: "wellbeing",
    icon: HeartHandshake,
    title: "Caring Educators",
    summary:
      "Teachers guide each child’s progress with empathy, ensuring no learner is left behind.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-pink-300 to-rose-400",
  },
  {
    id: "curriculum",
    icon: BookOpen,
    title: "Strong Academic Foundation",
    summary:
      "Focused attention on reading, writing, and mathematical thinking builds confidence early on.",
    image: "/Images/Sample/Kidsdance.jpg",
    accent: "from-violet-300 to-purple-500",
  },
];

const WhyKindergarten: React.FC = () => {
  return (
    <section
      className="relative py-25 sm:py-30 bg-sky-200"
    >
      {/* Monkey image positioned absolutely */}
      <img
        src="/Images/Academics/dinasaur.png"
        className="block sm:hidden absolute -bottom-20 left-5 w-80 z-30 pointer-events-none select-none"
      />
      <img
        src="/Images/Academics/dinasaur.png"
        className="hidden sm:block absolute -bottom-15 right-0 w-100 xl:w-130 z-30 pointer-events-none select-none"
      />
      <img
        src="/Images/Academics/dragon.png"
        className="absolute w-50 lg:w-60 xl:w-80 left-5 xl:left-15 -top-10 sm:-top-5 xl:top-15 z-20 pointer-events-none select-none -rotate-15"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 min-[540px]:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 xl:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Why Our Primary Wing?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            At the Primary level, learning becomes purposeful and engaging — nurturing curiosity, confidence, and foundational skills that prepare children for lifelong growth.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition transform hover:-translate-y-1"
                aria-labelledby={`pillar-${p.id}`}
              >
                {/* Image top */}
                <div className="h-60 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  {/* chip + icon */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 rounded-lg items-center justify-center text-white shrink-0 bg-linear-to-br ${p.accent}`}
                      aria-hidden
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3
                        id={`pillar-${p.id}`}
                        className="text-lg font-poppins font-semibold text-gray-900 tracking-wide"
                      >
                        {p.title}
                      </h3>
                      <p className="mt-2 font-inter text-gray-700">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKindergarten;
