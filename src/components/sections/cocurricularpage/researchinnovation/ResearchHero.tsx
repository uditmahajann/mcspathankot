import {
  Sparkles,
  ArrowRight,
  Music4,
  Drama,
  Palette,
  Trophy,
} from "lucide-react";


const ArtsHero = () => {
  return (
          <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black text-white">
        <video
          src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 h-125 w-125 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 py-25 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center font-poppins gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-2 text-sm text-white mb-8">
              <Sparkles className="h-4 w-4" />
              Research & Inovation at MCS
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-poppins font-semibold leading-[0.9] tracking-tight">
              RESEARCH &
              <br />
              INNOVATION
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Where curiosity becomes discovery through experimentation,
              exploration, creativity, practical learning, and innovation.
            </p>
          </div>
        </div>
      </section>
  );
};

export default ArtsHero;






// import React from "react";
// import { Target } from "lucide-react";

// const SportsPhilosophy: React.FC = () => {
//   return (
//     <section className="py-24 bg-white text-center px-6">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Icon */}
//         <Target className="w-10 h-10 text-amber-500 mx-auto mb-4" />

//         {/* Title */}
//         <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900 mb-6">
//           Built on Focus, Discipline & Competitive Growth
//         </h2>

//         {/* Body Copy */}
//         <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
//           Our sports philosophy centres on building physically skilled, mentally strong and strategically aware athletes. Training begins with fundamentals, then evolves to technique refinement and competitive precision. Students learn to lead, collaborate, challenge themselves and perform under pressure — developing character, endurance and accountability along the way.
//         </p>

//         {/* Supporting line */}
//         <p className="mt-8 text-base text-gray-600 italic">
//           “The goal is not just to play — but to compete with purpose and excellence.”
//         </p>
//       </div>
//     </section>
//   );
// };

// export default SportsPhilosophy;








