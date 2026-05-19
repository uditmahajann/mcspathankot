import type React from "react";
import {
  Sparkles,
  ArrowRight,
  Music4,
  Drama,
  Palette,
  Trophy,
} from "lucide-react";

const gallery = [
  "https://res.cloudinary.com/dhlzfm5ix/image/upload/v1774377110/globallearning_duqdqf.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/image/upload/v1774377110/globallearning_duqdqf.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  "https://res.cloudinary.com/dhlzfm5ix/image/upload/v1774377110/globallearning_duqdqf.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  "/Images/Arts/art4.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  "/Images/Arts/art5.jpg",
];

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

const facilities = [
  {
    title: "Professional Sports Grounds",
    image: "/Images/Sports/ground.jpg",
  },
  {
    title: "Indoor Sports Facilities",
    image: "/Images/Sports/indoor.jpg",
  },
  {
    title: "Athletics & Training Areas",
    image: "/Images/Sports/track.jpg",
  },
  {
    title: "Fitness & Conditioning",
    image: "/Images/Sports/gym.jpg",
  },
];

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">

      <section className="bg-[#0b0b0b] py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
          <div className="max-w-5xl mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold leading-tight">
              Purpose-Built Spaces for Athletic Excellence
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-3xl">
              Thoughtfully designed environments that encourage discipline, teamwork, resilience, performance, and the holistic physical development of every young athlete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-4xl aspect-16/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-poppins font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;








// import React from "react";

// const SportsPhilosophy = () => {
//   return (
//     <section
//       className="relative w-full h-[80vh] overflow-hidden flex items-center justify-start px-6 md:px-16"
//       style={{
//         backgroundImage: "url('/Images/Sample/Sports.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Text */}
//       <div className="relative z-10 max-w-4xl">
//         <h1 className="font-extrabold text-white text-5xl md:text-7xl leading-tight tracking-tight">
//           TAKE THE GAME<br />
//           BEYOND LIMITS.
//         </h1>

//         <p className="mt-6 text-white/90 text-lg md:text-2xl max-w-2xl font-light tracking-wide">
//           Where discipline meets passion — and every student learns to push,
//           persist, adapt, and rise stronger.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default SportsPhilosophy;










