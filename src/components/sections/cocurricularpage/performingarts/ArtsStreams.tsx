import type React from "react";
import {
  Sparkles,
  ArrowRight,
  Music4,
  Drama,
  Palette,
  Trophy,
} from "lucide-react";

const competitions = [
  "DANCE",
  "DRAMATICS",
  "DEBATES",
  "MUSIC",
  "ART",
  "THEATRE",
  "CHOIR",
  "CREATIVE WRITING",
];


const PerformingArts: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* COMPETITIONS */}
      <section className="bg-[#0a0a0a] py-10 overflow-hidden">
        {/* <div className="mb-20 text-center px-6">
          <Trophy className="mx-auto h-14 w-14 text-yellow-300" />

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold">
            The Energy of Competition
          </h2>
        </div> */}

        <div className="space-y-8">
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[...competitions, ...competitions].map((item, index) => (
              <div
                key={index}
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-white/10"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-8 whitespace-nowrap animate-[marquee2_35s_linear_infinite]">
            {[...competitions, ...competitions].map((item, index) => (
              <div
                key={index}
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-fuchsia-500/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;









// import type React from "react";
// import {
//   ArrowRight,
//   Sparkles,
//   Music4,
//   Drama,
//   Palette,
//   Trophy,
//   Mic2,
//   Quote,
// } from "lucide-react";

// const creativeJourney = [
//   {
//     step: "DISCOVER",
//     title: "Where Creativity Begins",
//     description:
//       "Every artistic journey begins with curiosity — a rhythm explored, a movement discovered, a melody heard, or a story imagined.",
//     video: "/Videos/discover.mp4",
//   },
//   {
//     step: "PRACTICE",
//     title: "The Power of Preparation",
//     description:
//       "Rehearsals, collaboration, discipline, and mentorship become the foundation that transforms nervousness into confidence.",
//     video: "/Videos/practice.mp4",
//   },
//   {
//     step: "EXPRESS",
//     title: "Finding a Voice Through Art",
//     description:
//       "Students learn to express emotion, identity, imagination, and individuality through meaningful artistic experiences.",
//     video: "/Videos/express.mp4",
//   },
//   {
//     step: "PERFORM",
//     title: "Moments that Transform Confidence",
//     description:
//       "The stage becomes a space where creativity, courage, and self-belief come alive before an audience.",
//     video: "/Videos/perform.mp4",
//   },
// ];

// const studentVoices = [
//   {
//     quote:
//       "The stage helped me overcome my fear and express myself confidently.",
//     name: "MCS Student",
//   },
//   {
//     quote:
//       "Music became a place where I discovered confidence and creativity.",
//     name: "MCS Student",
//   },
//   {
//     quote:
//       "Theatre taught me teamwork, empathy, and communication.",
//     name: "MCS Student",
//   },
// ];

// const competitions = [
//   "Inter-House Competitions",
//   "Dance Battles & Cultural Performances",
//   "Debates & Elocution",
//   "Music & Choir Competitions",
//   "Dramatics & Theatre Productions",
//   "Art Exhibitions & Creative Showcases",
// ];

// const PerformingArts: React.FC = () => {
//   return (
//     <main className="bg-black text-white overflow-hidden">

//       {/* CREATIVE JOURNEY */}
//       <section className="bg-[#0d0d0d] py-24 lg:py-36">
//         <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
//           <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28">
//             <h2 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold leading-tight text-white">
//               The Creative Journey
//             </h2>

//             <p className="mt-8 text-lg sm:text-xl text-gray-400 leading-relaxed">
//               Every artistic experience at MCS becomes a journey of discovery, growth, expression, and confidence.
//             </p>
//           </div>

//           <div className="space-y-24 lg:space-y-40">
//             {creativeJourney.map((item, index) => (
//               <div
//                 key={index}
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
//                   index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//               >
//                 <div>
//                   <p className="text-sm tracking-[0.35em] text-fuchsia-400 font-medium">
//                     {item.step}
//                   </p>

//                   <h3 className="mt-6 text-4xl lg:text-6xl font-poppins font-semibold leading-tight text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-8 text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
//                     {item.description}
//                   </p>
//                 </div>

//                 <div className="group relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] h-[450px] lg:h-[650px] shadow-2xl">
//                   <video
//                     src={item.video}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* DANCE */}
//       <section className="relative min-h-screen overflow-hidden flex items-end">
//         <video
//           src="/Videos/dance.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 pb-24 lg:pb-32 w-full">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm mb-6">
//               <Sparkles className="h-4 w-4" />
//               Dance & Movement
//             </div>

//             <h2 className="text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.95] text-white">
//               Movement becomes confidence.
//             </h2>

//             <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
//               Through rhythm, choreography, teamwork, and performance, students discover confidence, discipline, expression, and the joy of artistic freedom.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* MUSIC */}
//       <section className="relative py-32 lg:py-44 overflow-hidden bg-[#080808]">
//         <video
//           src="/Videos/music.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover opacity-30"
//         />

//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
//           <Music4 className="mx-auto h-14 w-14 text-yellow-300" />

//           <h2 className="mt-10 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.95] text-white">
//             Music teaches students to listen, feel & create.
//           </h2>

//           <p className="mt-10 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
//             From choir performances and instrumental learning to solo expressions and collaborative ensembles, music at MCS nurtures emotional expression, creativity, harmony, and artistic identity.
//           </p>
//         </div>
//       </section>

//       {/* THEATRE */}
//       <section className="relative min-h-screen overflow-hidden flex items-center">
//         <video
//           src="/Videos/theatre.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/75" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 w-full">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm mb-6">
//               <Drama className="h-4 w-4" />
//               Theatre & Dramatics
//             </div>

//             <h2 className="text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.95] text-white">
//               Every role teaches empathy.
//             </h2>

//             <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
//               Through storytelling, expression, dialogue, and performance, students develop communication, emotional intelligence, courage, and collaborative thinking.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* VISUAL ARTS */}
//       <section className="bg-[#faf7f2] text-black py-24 lg:py-36 relative overflow-hidden">
//         <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-200/50 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-200/50 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//             <div>
//               <Palette className="h-14 w-14 text-orange-500" />

//               <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold leading-[0.95] text-black">
//                 Art becomes a language of imagination.
//               </h2>

//               <p className="mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
//                 Through sketching, painting, craft, mixed media, and creative exploration, students learn to communicate ideas, emotions, and individuality visually.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div className="overflow-hidden rounded-[2rem] aspect-[3/4] shadow-xl">
//                 <video
//                   src="/Videos/art1.mp4"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               <div className="overflow-hidden rounded-[2rem] aspect-[3/4] shadow-xl mt-12">
//                 <video
//                   src="/Videos/art2.mp4"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BEHIND THE CURTAIN */}
//       <section className="relative py-32 lg:py-44 overflow-hidden bg-black">
//         <video
//           src="/Videos/rehearsal.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover opacity-25"
//         />

//         <div className="absolute inset-0 bg-black/80" />

//         <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
//           <p className="text-sm tracking-[0.35em] text-fuchsia-400 font-medium">
//             BEHIND THE CURTAIN
//           </p>

//           <h2 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.95] text-white">
//             The real magic happens long before the spotlight.
//           </h2>

//           <p className="mt-10 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
//             Before every performance, there are hours of preparation, collaboration, rehearsals, mentorship, patience, mistakes, laughter, and growth. These moments shape resilience, discipline, teamwork, and confidence.
//           </p>
//         </div>
//       </section>

//       {/* COMPETITIONS */}
//       <section className="bg-[#111111] py-24 lg:py-36">
//         <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
//           <div className="max-w-4xl mx-auto text-center mb-20">
//             <Trophy className="mx-auto h-14 w-14 text-yellow-300" />

//             <h2 className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold text-white leading-tight">
//               The Energy of Competition
//             </h2>

//             <p className="mt-8 text-lg text-gray-400 leading-relaxed">
//               Competitions at MCS encourage leadership, teamwork, creativity, communication, and healthy self-expression.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {competitions.map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition"
//               >
//                 <p className="text-2xl font-poppins font-semibold text-white leading-tight">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* STUDENT VOICES */}
//       <section className="py-24 lg:py-36 bg-[#faf9f6] text-black">
//         <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
//           <div className="max-w-4xl mx-auto text-center mb-20">
//             <Quote className="mx-auto h-14 w-14 text-fuchsia-500" />

//             <h2 className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold leading-tight text-black">
//               Student Voices
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
//             {studentVoices.map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-[2rem] bg-white p-10 shadow-xl"
//               >
//                 <p className="text-2xl font-playpen leading-relaxed text-gray-900">
//                   “{item.quote}”
//                 </p>

//                 <p className="mt-8 text-sm tracking-[0.25em] text-fuchsia-500 uppercase">
//                   {item.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GRAND FINALE */}
//       <section className="relative min-h-screen overflow-hidden flex items-center justify-center text-center">
//         <video
//           src="/Videos/finale.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 mx-auto max-w-5xl px-6">
//           <h2 className="text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.95] text-white">
//             At MCS,
//             <br />
//             performing arts are not extracurricular.
//           </h2>

//           <p className="mt-12 text-2xl sm:text-3xl lg:text-5xl font-playpen text-yellow-300 leading-relaxed">
//             They are experiences
//             <br />
//             that shape confident,
//             <br />
//             creative,
//             <br />
//             expressive individuals.
//           </p>

//           <div className="mt-14 flex flex-wrap justify-center gap-4">
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black font-medium hover:bg-gray-100 transition"
//             >
//               Explore Student Life
//             </a>

//             <a
//               href="/activities"
//               className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white hover:bg-white/20 transition"
//             >
//               Discover Co-Curriculars
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PerformingArts;







// import React from "react";

// const SportsPhilosophy = () => {
//   return (
//     <section
//       className="relative w-full h-[80vh] overflow-hidden flex items-center justify-start px-6 md:px-16"
//       style={{
//         backgroundImage: "url('/Images/Heros/artsbanner.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Text */}
//       <div className="relative z-10 max-w-4xl">
//         <h1 className="font-extrabold text-white text-5xl md:text-7xl leading-tight tracking-tight">
//           MAKE IT SEEN<br />
//           MAKE IT FELT.
//         </h1>

//         <p className="mt-6 text-white/90 text-lg md:text-2xl max-w-2xl font-light tracking-wide">
//           Where passion becomes skill — and every performance builds courage, discipline, and identity.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default SportsPhilosophy;






















// import React from "react";

// const players = [
//   {
//     title: "DANCE",
//     desc: "Movement, control, rhythm — where confidence grows through expression and discipline.",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
//   {
//     title: "MUSIC",
//     desc: "Voice, melody, harmony — a space to listen, create, feel, and perform with intention.",
//     img: "/Images/Heros/NewHostel.JPG",
//   },
//   {
//     title: "THEATRE",
//     desc: "Character, voice, storytelling — building presence, empathy, and fearless communication.",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
//   {
//     title: "VISUAL ARTS",
//     desc: "Design, arts, experimentation — where creativity takes shape through skill and ideas.",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
// ];

// const ArtStreams = () => {
//   return (
//     <section className="my-10 py-16 bg-white">
//     <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-10 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 font-raleway font-extrabold">
//             Performing Arts is a Language
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             A place where creativity feels at home.
//           </p>
//         </div>
  
//       <div className="grid md:grid-cols-2 gap-10 px-20">
//         {players.map((p, i) => (
//           <div key={i} className="relative rounded-3xl overflow-hidden group cursor-pointer">
//             <img src={p.img} className="w-full h-145 object-cover group-hover:scale-105 transition-all duration-500" />
//             <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
//               <h3 className="text-[#C9FF6C] font-poppins tracking-wide text-2xl font-bold">{p.title}</h3>
//               <p className="mt-1 font-inter opacity-90">{p.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </section>
//   );
// };

// export default ArtStreams;






