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
    title: "Sports",
    subtitle: "Where passion meets performance.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775512982/future6_me1bxx.mp4",
  },
  {
    title: "Athletics",
    subtitle: "Built on speed, strength & determination.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1779193033/arttheatre_wfjocz.mp4",
  },
  {
    title: "Swimming",
    subtitle: "Confidence in every stroke.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1779192688/artmusic_uyinkn.mp4",
  },
  
  {
    title: "Gym",
    subtitle: "Strengthening body, mind & discipline.",
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
                <p className="text-base font-semibold font-poppins tracking-[0.35em] text-[#C9FF6C] uppercase">
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





// import React from "react";
// import { Trophy, Flame, Target, Users } from "lucide-react";

// const points = [
//   {
//     icon: <Flame className="w-6 h-6 text-[#FF431E]" />,
//     title: "Fuel Passion",
//     desc: "Sports ignite drive, discipline, and a winning mindset built on effort, not luck."
//   },
//   {
//     icon: <Target className="w-6 h-6 text-[#26A4FF]" />,
//     title: "Build Focus",
//     desc: "Training sharpens concentration, strategy, and mental strength — skills that last far beyond school."
//   },
//   {
//     icon: <Users className="w-6 h-6 text-[#A2FF24]" />,
//     title: "Grow Together",
//     desc: "Teamwork, communication, and supportive competition build character and community."
//   },
//   {
//     icon: <Trophy className="w-6 h-6 text-[#FFB800]" />,
//     title: "Achieve Excellence",
//     desc: "Whether recreational or competitive — progress is measured, celebrated, and earned."
//   },
// ];

// const SportsAbout: React.FC = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

//         {/* TEXT BLOCK */}
//         <div className="space-y-6">
//           <h2 className="text-4xl font-raleway font-extrabold text-gray-900 leading-tight">
//             Where Strength, Skill & Mindset<br/>Come Together
//           </h2>

//           <p className="text-lg text-gray-700 max-w-xl">
//             At MCS, sports aren’t just activities — they’re a way of shaping 
//             discipline, courage, resilience, and leadership. From first steps on the field 
//             to championship-level confidence — every student grows stronger in body, 
//             mind, and spirit.
//           </p>

//           {/* FEATURE GRID */}
//           <div className="grid sm:grid-cols-2 gap-6 pt-4">
//             {points.map((p, idx) => (
//               <div key={idx} className="flex items-start gap-4">
//                 <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl shadow-sm">
//                   {p.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-poppins tracking-wide font-semibold text-gray-900 text-lg">{p.title}</h3>
//                   <p className="font-inter text-base text-gray-600">{p.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="relative">
//           <img
//             src="/Images/Campus/NewHostel.JPG"
//             alt="Sports Motivation"
//             className="rounded-3xl w-full object-cover shadow-xl"
//           />
//           {/* <span className="absolute -bottom-4 left-6 bg-black px-5 py-2 text-white rounded-full text-sm font-medium tracking-wide shadow-lg">
//             🏆 Champions are Made, Not Born
//           </span> */}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SportsAbout;




