

import type React from "react"
import { urlFor } from "../../../lib/sanity";


interface Award {
  _id: string;
  name: string;
  year: number;
  description?: string;
  presentedBy?: string;
  image?: any;
}

interface AwardsGridProps {
  awards: Award[];
}


const AwardsGrid: React.FC<AwardsGridProps> = ({ awards }) => {
  return (
    <section id="awards" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Awards & {" "}
            <span className="relative inline-block">
              Recognitions
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-8 sm:w-10 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our commitment to academic excellence, innovation, and community engagement has been celebrated by reputed organizations across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (

            <div
              key={award._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
            >
              {award.image && (
                <img
                  src={urlFor(award.image).width(600).auto("format").url()}
                  alt={award.name}
                  className="aspect-4/3 h-auto w-full object-cover"
                />

              )}

              <div className="p-4 sm:p-5 text-left">
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-1 tracking-wide">
                  {award.name}
                </h3>

                {award.presentedBy && (
                  <p className="text-sm font-inter text-gray-600 mb-1">
                    {award.presentedBy}
                  </p>
                )}

                <p className="text-base font-inter font-semibold text-blue-800 mb-2">
                  {award.year}
                </p>

                {award.description && (
                  <p className="text-sm font-inter text-gray-700">
                    {award.description}
                  </p>
                )}
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;








// import type React from "react";
// import { Trophy, Sparkles, ArrowUpRight } from "lucide-react";
// import { urlFor } from "../../../lib/sanity";

// interface Award {
//   _id: string;
//   name: string;
//   year: number;
//   description?: string;
//   presentedBy?: string;
//   image?: any;
// }

// interface AwardsGridProps {
//   awards: Award[];
// }

// const AwardsGrid: React.FC<AwardsGridProps> = ({ awards }) => {
//   return (
//     <section
//       id="awards"
//       className="relative overflow-hidden bg-[#f8f6f1] py-24 lg:py-36"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-yellow-100 blur-3xl opacity-60" />
//       <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl opacity-60" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 xl:px-0">
//         {/* HEADER */}
//         <div className="max-w-5xl">
//           <p className="text-sm tracking-[0.35em] uppercase text-primary">
//             Awards & Recognitions
//           </p>

//           <h2 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.9] text-gray-900">
//             Celebrating
//             <br />
//             Excellence &
//             <br />
//             Achievement.
//           </h2>

//           <p className="mt-8 max-w-3xl text-lg sm:text-xl text-gray-700 leading-relaxed">
//             Honoring milestones in academics, innovation, leadership,
//             co-curricular excellence, and community impact through prestigious
//             recognitions and national-level achievements.
//           </p>
//         </div>

//         {/* FEATURED AWARD */}
//         {awards[0] && (
//           <div className="mt-20 relative overflow-hidden rounded-[2.5rem] shadow-2xl">
//             {/* IMAGE */}
//             {awards[0].image && (
//               <img
//                 src={urlFor(awards[0].image)
//                   .width(1600)
//                   .auto("format")
//                   .url()}
//                 alt={awards[0].name}
//                 className="h-[80vh] w-full object-cover"
//               />
//             )}

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

//             {/* CONTENT */}
//             <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-4xl">
//               <div className="flex flex-wrap items-center gap-4">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 text-white">
//                   <Trophy className="h-4 w-4 text-yellow-300" />
//                   Featured Recognition
//                 </div>

//                 <div className="rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 text-white">
//                   {awards[0].year}
//                 </div>
//               </div>

//               <h3 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold leading-[0.92] text-white">
//                 {awards[0].name}
//               </h3>

//               {awards[0].presentedBy && (
//                 <p className="mt-5 text-xl text-yellow-200 font-medium">
//                   Presented by {awards[0].presentedBy}
//                 </p>
//               )}

//               {awards[0].description && (
//                 <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl">
//                   {awards[0].description}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* ACHIEVEMENTS STRIP */}
//         <div className="mt-24 overflow-hidden border-y border-black/5 bg-white py-6 rounded-full">
//           <div className="flex whitespace-nowrap gap-16 animate-[marquee_25s_linear_infinite]">
//             {[
//               "ACADEMIC EXCELLENCE",
//               "NATIONAL RECOGNITIONS",
//               "INNOVATION AWARDS",
//               "SPORTS ACHIEVEMENTS",
//               "LEADERSHIP HONORS",
//               "CO-CURRICULAR SUCCESS",
//               "COMMUNITY IMPACT",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-3xl lg:text-5xl font-poppins font-semibold text-gray-200"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* AWARDS GRID */}
//         <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {awards.slice(1).map((award, index) => (
//             <article
//               key={award._id}
//               className="group overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition duration-500"
//             >
//               {/* IMAGE */}
//               {award.image && (
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={urlFor(award.image)
//                       .width(800)
//                       .auto("format")
//                       .url()}
//                     alt={award.name}
//                     className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />

//                   {/* YEAR BADGE */}
//                   <div className="absolute top-6 left-6 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 px-5 py-3 text-sm text-white">
//                     {award.year}
//                   </div>
//                 </div>
//               )}

//               {/* CONTENT */}
//               <div className="p-7 lg:p-8">
//                 {/* PRESENTED BY */}
//                 {award.presentedBy && (
//                   <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm text-yellow-700">
//                     <Sparkles className="h-4 w-4" />
//                     {award.presentedBy}
//                   </div>
//                 )}

//                 {/* TITLE */}
//                 <h3 className="mt-5 text-3xl font-poppins font-semibold leading-[1.05] text-gray-900">
//                   {award.name}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 {award.description && (
//                   <p className="mt-5 text-gray-600 leading-relaxed">
//                     {award.description}
//                   </p>
//                 )}

//                 {/* CTA */}
//                 <button className="mt-8 inline-flex items-center gap-2 text-primary font-medium group/button">
//                   View Achievement
//                   <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* BOTTOM STATEMENT */}
//         <div className="mt-32 text-center max-w-5xl mx-auto">
//           <h3 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold leading-[0.95] text-gray-900">
//             Excellence is not
//             <br />
//             a milestone —
//             <br />
//             it is our culture.
//           </h3>

//           <p className="mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed">
//             Every recognition reflects the dedication, creativity, resilience,
//             and collective spirit of the students, educators, and community at
//             MCS.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsGrid;






