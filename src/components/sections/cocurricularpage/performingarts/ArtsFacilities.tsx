import type React from "react";

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* BACKSTAGE */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <video
          src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775517503/whymcs1_alcnzf.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="text-lg font-bold font-poppins tracking-[0.35em] text-fuchsia-400 uppercase">
            BEYOND THE PERFORMANCE
          </p>

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-tight">
            The magic begins long before the spotlight.
          </h2>

          <p className="mt-10 text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rehearsals, collaboration, mentorship, preparation, creativity, and perseverance shape every performance and every confident young artist at MCS.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;







// import React from "react";

// const FACILITIES = [
//   {
//     title: "Dance Studio",
//     desc: "A fully equipped studio with sprung flooring, wall-length mirrors, barres, and acoustic-treated walls — built for movement, precision, and performance.",
//     img: "/Images/PerformingArts/DanceStudio.jpg",
//   },
//   {
//     title: "Music Rooms & Recording Bay",
//     desc: "Sound-treated rehearsal rooms and a digital recording space where students experiment with voice, rhythm, and composition.",
//     img: "/Images/PerformingArts/MusicRoom.jpg",
//   },
//   {
//     title: "Black Box Theatre",
//     desc: "A flexible rehearsal space designed for stagecraft, acting technique, script work, and multi-format performances.",
//     img: "/Images/PerformingArts/TheatreRoom.jpg",
//   },
//   {
//     title: "Art & Design Studio",
//     desc: "A creative lab with professional supplies, easels, sculpting tools and space to paint, explore texture, form and design.",
//     img: "/Images/PerformingArts/ArtStudio.jpg",
//   },
// ];

// const PerformingArtsFacilitiesA = () => {
//   return (
//     <section className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 space-y-28">
//         {FACILITIES.map((item, i) => (
//           <div
//             key={i}
//             className={`grid lg:grid-cols-2 gap-12 items-center ${
//               i % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             <img
//               src={item.img}
//               className="w-full h-105 object-cover rounded-3xl shadow-xl"
//               alt={item.title}
//             />
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{item.title}</h3>
//               <p className="mt-6 text-lg text-gray-600 leading-relaxed">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PerformingArtsFacilitiesA;
