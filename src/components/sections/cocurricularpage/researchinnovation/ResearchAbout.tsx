import type React from "react";
import {
  Sparkles,
  ArrowRight,
  Music4,
  Drama,
  Palette,
  Trophy,
} from "lucide-react";

const artForms = [
  {
    title: "STEM Labs",
    subtitle: "Experiments that inspire discovery.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775512982/future6_me1bxx.mp4",
  },
  {
    title: "Robotics",
    subtitle: "Building the innovators of tomorrow.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1779193033/arttheatre_wfjocz.mp4",
  },
  {
    title: "Reading Spaces",
    subtitle: "Ideas waiting to be explored.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1779192688/artmusic_uyinkn.mp4",
  },
  
  {
    title: "Science Exhibitions",
    subtitle: "Exploring science beyond textbooks.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1779194562/artdebate_glajf2.mp4",
  },
];

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">

      <section className="relative py-25 lg:py-40 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <Sparkles className="mx-auto h-14 w-14 text-yellow-300" />

          <h2 className="mt-10 text-5xl sm:text-6xl lg:text-6xl font-poppins font-semibold leading-[0.95] text-white">
           Make it Seen, Make it Felt
          </h2>

          <p className="mt-10 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            From music and dance to theatre and stage performances, performing arts at MCS nurture confidence, creativity, collaboration, and self-expression. Every performance becomes a platform for students to discover their voice, celebrate culture, and grow through artistic experiences that inspire both passion and purpose.
          </p>
        </div>
      </section>
      

      {/* IMMERSIVE ARTFORMS */}
      <section id="showcase" className="bg-black">
        {artForms.map((item, index) => (
          <section
            key={index}
            className="relative min-h-screen overflow-hidden flex items-end"
          >
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 w-full mx-auto max-w-7xl px-6 min-[540px]:px-12 pb-24 lg:pb-32">
              <div className="max-w-4xl">
                <p className="text-base font-semibold font-poppins tracking-[0.35em] text-fuchsia-400 uppercase">
                  Performing Arts
                </p>

                <h2 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.92]">
                  {item.title}
                </h2>

                <p className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default PerformingArts;




