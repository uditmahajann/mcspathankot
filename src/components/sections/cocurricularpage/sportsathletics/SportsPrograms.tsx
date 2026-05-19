import type React from "react";

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* BACKSTAGE */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <video
          src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm tracking-[0.35em] text-orange-400 uppercase">
            Behind The Curtain
          </p>

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.92]">
            The magic begins before the spotlight.
          </h2>

          <p className="mt-10 text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rehearsals, collaboration, mentorship, preparation, mistakes,
            laughter, teamwork, and perseverance shape every performance and
            every confident student.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;





// import type React from "react";
// import {
//   Trophy,
//   Medal,
//   Sparkles,
//   ArrowRight,
//   Dumbbell,
//   ShieldCheck,
//   Flame,
//   Star,
// } from "lucide-react";

// const sports = [
//   {
//     title: "Football",
//     subtitle: "Teamwork. Strategy. Leadership.",
//     video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   },
//   {
//     title: "Basketball",
//     subtitle: "Energy that never stops moving.",
//     video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   },
//   {
//     title: "Athletics",
//     subtitle: "Every second. Every stride. Every finish line.",
//     video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   },
//   {
//     title: "Cricket",
//     subtitle: "Precision, patience & performance.",
//     video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   },
// ];

// const facilities = [
//   {
//     title: "Professional Sports Grounds",
//     image: "/Images/Sports/ground.jpg",
//   },
//   {
//     title: "Indoor Sports Facilities",
//     image: "/Images/Sports/indoor.jpg",
//   },
//   {
//     title: "Athletics & Training Areas",
//     image: "/Images/Sports/track.jpg",
//   },
//   {
//     title: "Fitness & Conditioning",
//     image: "/Images/Sports/gym.jpg",
//   },
// ];

// const achievements = [
//   {
//     title: "Inter-School Champions",
//     stat: "25+",
//   },
//   {
//     title: "State-Level Participation",
//     stat: "100+",
//   },
//   {
//     title: "Annual Sporting Events",
//     stat: "40+",
//   },
//   {
//     title: "Student Participation",
//     stat: "100%",
//   },
// ];

// const gallery = [
//   "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   "/Images/Sports/sports1.jpg",
//   "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   "/Images/Sports/sports2.jpg",
//   "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   "/Images/Sports/sports3.jpg",
//   "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4",
//   "/Images/Sports/sports4.jpg",
// ];

// const SportsPage: React.FC = () => {
//   return (
//     <main className="bg-black text-white overflow-hidden">
//       {/* ACHIEVEMENTS */}
//       <section className="relative py-32 overflow-hidden">
//         <video
//           src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover opacity-25"
//         />

//         <div className="absolute inset-0 bg-black/85" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12">
//           <div className="max-w-4xl mx-auto text-center mb-20">
//             <Trophy className="mx-auto h-14 w-14 text-yellow-300" />

//             <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold leading-tight">
//               A Culture of Sporting Excellence
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {achievements.map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center"
//               >
//                 <h3 className="text-5xl lg:text-7xl font-bold text-orange-300">
//                   {item.stat}
//                 </h3>

//                 <p className="mt-5 text-gray-300 leading-relaxed">
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* IMPACT */}
//       <section className="relative min-h-screen overflow-hidden flex items-center justify-center text-center">
//         <video
//           src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1778684327/trends4_caeejc.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 mx-auto max-w-5xl px-6">
//           <h2 className="text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.92]">
//             Sports build more than athletes.
//           </h2>

//           <p className="mt-12 text-2xl sm:text-4xl font-playpen text-orange-300 leading-relaxed">
//             They build resilience.
//             <br />
//             Leadership.
//             <br />
//             Confidence.
//             <br />
//             Character.
//           </p>

//           <div className="mt-14 flex flex-wrap justify-center gap-4">
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black font-medium hover:bg-gray-100 transition"
//             >
//               Explore Student Life
//             </a>

//             <a
//               href="/infrastructure"
//               className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white hover:bg-white/20 transition"
//             >
//               View Sports Facilities
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default SportsPage;








// import React from "react";
// import { Check } from "lucide-react";

// const programs = [
//   {
//     level: "Foundational Training",
//     target: "Beginner | Grades 1–4",
//     desc: "Fun, confidence-building sessions that develop basic coordination, game understanding and interest.",
//     highlights: [
//       "Fundamental movement skills",
//       "Game-based learning",
//       "Introduction to rules & discipline",
//     ],
//     color: "bg-[#C9FF6C]",
//   },
//   {
//     level: "Skill Development Training",
//     target: "Intermediate | Grades 5–8",
//     desc: "Structured training to improve fitness, refine sport-specific skills, and build competitive mindset.",
//     highlights: [
//       "Weekly fitness drills",
//       "Sport-specific coaching",
//       "Inter-school competitions",
//     ],
//     color: "bg-[#fff]",
//   },
//   {
//     level: "Performance Training",
//     target: "Advanced | Grades 9–12",
//     desc: "Focused coaching for athletes aiming for competitive tournaments, district/state representation, and mastery.",
//     highlights: [
//       "Strength & conditioning",
//       "Mentor-guided improvement plans",
//       "Tournament preparation",
//     ],
//     color: "bg-[#000] text-white",
//   },
// ];

// const SportsPrograms = () => {
//   return (
//     <section className="w-full py-16 my-10 bg-white">
//     <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
//       {/* Section Title */}
//       <div className="text-center mb-10 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 font-raleway font-extrabold">
//             Programs & {" "}
//             <span className="relative inline-block">
//               Training Pathways
//               {/* Spark Doodle */}
//               <img
//                 src="/Images/Doodles/SparkYellow.png"
//                 alt="Spark"
//                 className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             Whether starting out or aiming for competitive excellence — every student grows with structured progression
//           </p>
//         </div>

//       {/* Program Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {programs.map((p, i) => (
//           <div
//             key={i}
//             className={`rounded-2xl p-10 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-[1.03] cursor-pointer ${p.color}`}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
//               {p.level}
//             </h3>

//             <p className="mt-3 text-base opacity-75 font-medium">{p.target}</p>

//             <p className="mt-6 text-lg">{p.desc}</p>

//             <ul className="mt-8 space-y-3 text-lg">
//               {p.highlights.map((item, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <Check className="w-5 h-5" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>

//           </div>
//         ))}
//       </div>
//     </div>
//     </section>
//   );
// };

// export default SportsPrograms;










