import type React from "react";

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

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* MEDIA WALL */}
      <section className="bg-[#0a0a0a] py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
          <div className="max-w-4xl mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold leading-tight">
              Moments of Curiosity & Discovery
            </h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((item, index) => {
              const isVideo = item.endsWith(".mp4");

              return (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-4xl bg-neutral-900"
                >
                  {isVideo ? (
                    <video
                      src={item}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full object-cover hover:scale-105 transition duration-700"
                    />
                  ) : (
                    <img
                      src={item}
                      alt=""
                      className="w-full object-cover hover:scale-105 transition duration-700"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;




// import type React from "react";
// import {
//   Sparkles,
//   ArrowRight,
//   Microscope,
//   Atom,
//   BookOpen,
//   Lightbulb,
//   Brain,
//   Rocket,
// } from "lucide-react";

// const gallery = [
//   "/Videos/gallery1.mp4",
//   "/Images/Research/research1.jpg",
//   "/Videos/gallery2.mp4",
//   "/Images/Research/research2.jpg",
//   "/Videos/gallery3.mp4",
//   "/Images/Research/research3.jpg",
//   "/Videos/gallery4.mp4",
//   "/Images/Research/research4.jpg",
// ];

// const exhibitions = [
//   "Annual Science Exhibition",
//   "STEM Innovation Showcase",
//   "Book Fair & Literary Events",
//   "Robotics & Coding Activities",
//   "Creative Research Projects",
//   "Interactive Learning Displays",
// ];

// const researchMoments = [
//   {
//     quote:
//       "Practical learning helps students think beyond textbooks and discover through experience.",
//     image: "/Images/Research/student1.jpg",
//   },
//   {
//     quote:
//       "Experiments and projects encourage curiosity, creativity, and deeper understanding.",
//     image: "/Images/Research/student2.jpg",
//   },
//   {
//     quote:
//       "Research-based learning nurtures confidence, inquiry, and independent thinking.",
//     image: "/Images/Research/student3.jpg",
//   },
// ];

// const achievements = [
//   "Modern Science & STEM Laboratories",
//   "Hands-On Learning Across Subjects",
//   "Interactive Library & Reading Culture",
//   "Innovation-Driven Student Projects",
// ];

// const ResearchInnovationPage: React.FC = () => {
//   return (
//     <main className="bg-black text-white overflow-hidden">

//       {/* PRACTICAL LEARNING */}
//       <section className="relative min-h-screen overflow-hidden flex items-center">
//         <video
//           src="/Videos/practicallearning.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/75" />

//         <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
//           <Microscope className="mx-auto h-14 w-14 text-sky-300" />

//           <h2 className="mt-10 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.92]">
//             Learning becomes meaningful when students experience it firsthand.
//           </h2>

//           <p className="mt-10 text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             From laboratory experiments and STEM exploration to research
//             projects, exhibitions, and collaborative discovery, students engage
//             with ideas beyond textbooks and classrooms.
//           </p>
//         </div>
//       </section>

//       {/* INFRASTRUCTURE */}
//       <section className="bg-[#0b0b0b] py-24 lg:py-36">
//         <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
//           <div className="max-w-5xl mb-20">
//             <h2 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold leading-tight">
//               Purpose-Built Learning Environments
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//             <div className="lg:col-span-7 relative overflow-hidden rounded-[2rem] aspect-[16/10]">
//               <video
//                 src="/Videos/lab.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//               <div className="absolute bottom-0 left-0 p-8">
//                 <h3 className="text-4xl font-poppins font-semibold">
//                   Advanced Science Laboratories
//                 </h3>
//               </div>
//             </div>

//             <div className="lg:col-span-5 flex flex-col gap-6">
//               <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9]">
//                 <img
//                   src="/Images/Research/library.jpg"
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/40" />

//                 <div className="absolute bottom-0 left-0 p-6">
//                   <h3 className="text-2xl font-semibold">
//                     Interactive Library Spaces
//                   </h3>
//                 </div>
//               </div>

//               <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9]">
//                 <img
//                   src="/Images/Research/stem.jpg"
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/40" />

//                 <div className="absolute bottom-0 left-0 p-6">
//                   <h3 className="text-2xl font-semibold">
//                     STEM & Innovation Labs
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EVENTS */}
//       <section className="bg-[#111111] py-24 overflow-hidden">
//         <div className="mb-20 text-center px-6">
//           <Lightbulb className="mx-auto h-14 w-14 text-yellow-300" />

//           <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold">
//             Research & Innovation Events
//           </h2>
//         </div>

//         <div className="space-y-8">
//           <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
//             {[...exhibitions, ...exhibitions].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-white/10"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-8 whitespace-nowrap animate-[marquee2_35s_linear_infinite]">
//             {[...exhibitions, ...exhibitions].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-sky-500/20"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ResearchInnovationPage;