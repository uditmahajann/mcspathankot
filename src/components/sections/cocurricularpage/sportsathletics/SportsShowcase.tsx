import type React from "react";
import {
  Sparkles,
  ArrowRight,
  Music4,
  Medal,
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
  "FOOTBALL",
  "CRICKET",
  "BASKETBALL",
  "ATHLETICS",
  "VOLLEYBALL",
  "BADMINTON",
  "CHESS",
  "SPORTS MEET",
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

            {/* COMPETITIONS */}
      <section className="bg-[#111111] py-24 overflow-hidden">
        <div className="mb-20 text-center px-6">
          <Medal className="mx-auto h-14 w-14 text-yellow-300" />

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold">
            Competitions & Sporting Events
          </h2>
        </div>

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
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-orange-500/20"
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





// import React from "react";

// const players = [
//   {
//     headline: "Punjab Champions in Basketball",
//     sport: "Basketball",
//     year: "2024",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
//   {
//     headline: "Punjab Champions in Basketball",
//     sport: "Tennis",
//     year: "2024",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
//   {
//     headline: "Punjab Champions in Basketball",
//     sport: "Football",
//     year: "2024",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
//   {
//     headline: "Punjab Champions in Basketball",
//     sport: "Football",
//     year: "2024",
//     img: "/Images/Campus/NewHostel.JPG",
//   },
//   // {
//   //   name: "Aarav Singh",
//   //   sport: "Football",
//   //   stat: "Team Captain",
//   //   img: "/Images/Sports/athlete3.jpg",
//   // },
//   // {
//   //   name: "Aarav Singh",
//   //   sport: "Football",
//   //   stat: "Team Captain",
//   //   img: "/Images/Sports/athlete3.jpg",
//   // },
// ];

// const SportsShowcase = () => {
//   return (
//     <section className="my-10 py-16 bg-white">
//     <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-10 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 font-raleway font-extrabold">
//             Victory {" "}
//             <span className="relative inline-block">
//               in Motion
//               {/* Spark Doodle */}
//               <img
//                 src="/Images/Doodles/SparkYellow.png"
//                 alt="Spark"
//                 className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             Capturing the spirit, the sweat, the speed — and the story.
//           </p>
//         </div>
  
//       <div className="grid md:grid-cols-2 gap-10 px-20">
//         {players.map((p, i) => (
//           <div key={i} className="relative rounded-3xl overflow-hidden group cursor-pointer">
//             <img src={p.img} className="w-full h-145 object-cover group-hover:scale-105 transition-all duration-500" />
//             <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
//               <h3 className="font-poppins tracking-wide text-2xl font-bold">{p.headline}</h3>
//               <p className="mt-1 font-inter opacity-90">{p.sport}</p>
//               <p className="mt-2 text-sm font-inter font-bold text-[#C9FF6C] uppercase tracking-wide">{p.year}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </section>
//   );
// };

// export default SportsShowcase;













