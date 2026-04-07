import React from "react";

const tiles = [
  {
    id: "health",
    title: "Joyful Classrooms",
    desc: "Spaces that invite exploration, collaboration, and curiosity-driven learning.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524415/primarysafety1_gbydlf.mp4",
  },
  {
    id: "med",
    title: "Student Mentorship",
    desc: "Teachers personally guide emotional, social, and academic growth.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524415/primarysafety2_y7mujl.mp4",
  },
  {
    id: "staff",
    title: "Active Learning Corners",
    desc: "Creative, hands-on areas that make learning exciting and meaningful.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775522145/primarywhy5_t1dme6.mp4",
  },
  {
    id: "security",
    title: "Safe, Happy Environment",
    desc: "A warm, respectful culture where every child feels valued and heard.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  },
];

const SafetyCareCreative: React.FC = () => {
  return (
    <section
      id="safety-care"
      className="relative bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Academics/primarysafety.png')`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 min-[540px]:px-12 py-15 sm:py-25">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 className="max-w-3xl text-2xl min-[540px]:text-3xl lg:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            A nurturing haven where imagination & growth flourish
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            A nurturing environment where children feel safe to explore, express, and grow — blending care with creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-fuchsia-100 overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-900 tracking-wide leading-normal">
                  Confidence & Curiosity in Every Classroom
                </h2>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  Our classrooms are warm, structured, and inclusive — thoughtfully designed spaces where children feel confident to express themselves and freely explore new ideas.
                </p>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  Teachers serve as mentors, guiding both academic and emotional growth. From interactive learning corners to carefully considered daily routines, every element supports young learners in cultivating curiosity, confidence, and a profound sense of belonging.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tiles.map((t) => (
                <article
                  key={t.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
                >
                  
                  {/* VIDEO */}
                  <video
                    src={t.video}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                  {/* TEXT */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-lg font-poppins font-semibold tracking-wide">
                      {t.title}
                    </h3>
                  </div>

                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyCareCreative;




// import React from "react";
// import {
//   Users,
//   ShieldCheck,
//   Bandage,
//   Thermometer,
//   CheckCircle,
//   Truck,
//   Clock,
// } from "lucide-react";

// const tiles = [
//   {
//     id: "health",
//     title: "Joyful Classrooms",
//     desc: "Spaces that invite exploration, collaboration, and curiosity-driven learning.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "med",
//     title: "Student Mentorship",
//     desc: "Teachers personally guide emotional, social, and academic growth.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "staff",
//     title: "Active Learning Corners",
//     desc: "Creative, hands-on areas that make learning exciting and meaningful.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "security",
//     title: "Safe, Happy Environment",
//     desc: "A warm, respectful culture where every child feels valued and heard.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
// ];

// const SafetyCareCreative: React.FC = () => {
//   return (
//     <section
//       id="safety-care"
//       className="relative bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
//       style={{
//         backgroundImage: `url('/Images/Academics/primarysafety.png')`, // replace with your image path
//       }}
//     >

//       <div className="rrelative mx-auto max-w-7xl px-6 min-[540px]:px-12 py-15 sm:py-25">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-12 lg:mb-16">
//           <h2 className="max-w-3xl text-2xl min-[540px]:text-3xl lg:text-4xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
//             A nurturing haven where imagination & growth flourish
//             </h2>
//           <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             A nurturing environment where children feel safe to explore, express, and grow — blending care with creativity.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* LEFT STRIPE */}
//           <div className="lg:col-span-6">
//             <div className="relative rounded-3xl shadow-2xl bg-fuchsia-100 overflow-hidden">
//               <div className="p-8 sm:p-12 lg:p-16">
//                 <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-900 tracking-wide leading-normal">
//                   Confidence & Curiosity in Every Classroom
//                 </h2>

//                 <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
//                   Our classrooms are warm, structured, and inclusive — thoughtfully designed spaces where children feel confident to express themselves and freely explore new ideas.
//                 </p>

//                 <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
//                   Teachers serve as mentors, guiding both academic and emotional growth. From interactive learning corners to carefully considered daily routines, every element supports young learners in cultivating curiosity, confidence, and a profound sense of belonging.
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT GRID — overlay version */}
//           <div className="lg:col-span-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {tiles.map((t) => (
//                 <article
//                   key={t.id}
//                   className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
//                 >
//                   <img
//                     src={t.img}
//                     alt={t.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
//                   <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
//                     <h3 className="text-lg font-poppins font-semibold tracking-wide">
//                       {t.title}
//                     </h3>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default SafetyCareCreative;