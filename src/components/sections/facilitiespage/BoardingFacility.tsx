import { Home, Utensils, Shield, BookOpen } from "lucide-react"

const BoardingFacility = () => {
  return (
    <section id="boarding-facility" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row md:gap-20">
          <div className="lg:w-1/2">
          <div className="mb-6 md:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                Boarding <span className="relative inline-block">Facilities
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-5"
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our residential program provides a nurturing and structured environment where students focus on their academic and personal growth while feeling at home.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <Home className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Comfortable Hostels</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Well-ventilated rooms with modern amenities.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Utensils className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Nutritious Dining</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Balanced meals prepared by professional chefs.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">24/7 Security</h4>
                <p className="text-gray-700 font-inter mt-2">Comprehensive safety measures ensuring peace of mind.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Supervised Study</h4>
                <p className="text-gray-700 font-inter mt-2">Dedicated academic sessions and revision time.</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Facility/hostel.JPG"
                alt="Foundation coaching session with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-20">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/refectory.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
            
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Healthy & Balanced Dining</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/fitnesscenter.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Holistic Fitness & Wellness</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/moviehall.JPG"
              alt="Virtual reality learning session"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Weekend Recreation & Leisure</h3>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default BoardingFacility





// import {
//   Home,
//   Utensils,
//   Shield,
//   BookOpen,
//   HeartHandshake,
// } from "lucide-react";

// const boardingFeatures = [
//   {
//     icon: Home,
//     title: "Comfortable Living",
//     desc: "Well-designed residential spaces that provide comfort, warmth, and a sense of belonging.",
//   },
//   {
//     icon: Utensils,
//     title: "Nutritious Dining",
//     desc: "Balanced meals prepared with attention to nutrition, hygiene, and student well-being.",
//   },
//   {
//     icon: Shield,
//     title: "24/7 Supervision",
//     desc: "Round-the-clock care, safety monitoring, and secure residential management.",
//   },
//   {
//     icon: BookOpen,
//     title: "Guided Study Hours",
//     desc: "Structured academic support sessions encouraging discipline and consistency.",
//   },
// ];

// const BoardingFacility = () => {
//   return (
//     <section
//       id="boarding-facility"
//       className="relative overflow-hidden bg-[#f5f1ea] py-20 sm:py-28"
//     >
//       {/* Soft Glow */}
//       <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-100 blur-3xl opacity-70" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12">
//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
//           {/* LEFT */}
//           <div className="lg:col-span-5">
//             <p className="text-sm tracking-[0.35em] uppercase text-amber-700">
//               Boarding Facilities
//             </p>

//             <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-[0.95] text-gray-900">
//               A Home That Supports Growth & Independence.
//             </h2>

//             <p className="mt-8 text-lg text-gray-700 leading-relaxed">
//               Our residential programme creates a warm, secure, and nurturing
//               environment where students develop independence, discipline, and
//               confidence while feeling supported every step of the way.
//             </p>

//             <p className="mt-5 text-lg text-gray-700 leading-relaxed">
//               Beyond academics, boarding life encourages meaningful friendships,
//               healthy routines, collaborative learning, and holistic personal
//               development within a caring community.
//             </p>

//             {/* Quote Card */}
//             <div className="mt-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-black/5 p-7 shadow-xl">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
//                 <HeartHandshake className="h-7 w-7" />
//               </div>

//               <p className="mt-5 text-lg text-gray-700 leading-relaxed">
//                 “Designed to provide students with comfort, structure,
//                 belonging, and the confidence to thrive independently.”
//               </p>
//             </div>
//           </div>

//           {/* RIGHT VISUAL COMPOSITION */}
//           <div className="lg:col-span-7">
//             <div className="relative">
//               {/* Main Image */}
//               <div className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[16/10]">
//                 <img
//                   src="/Images/Facility/hostel.JPG"
//                   alt=""
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Floating Video */}
//               <div className="absolute -bottom-10 right-0 sm:right-10 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-[#f5f1ea] w-52 sm:w-72 aspect-[4/5]">
//                 <video
//                   src="/Videos/boarding.mp4"
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

//         {/* FEATURES */}
//         <div className="mt-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//           {boardingFeatures.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group rounded-[2rem] bg-white/80 backdrop-blur-xl border border-black/5 p-7 hover:-translate-y-1 hover:shadow-2xl transition duration-500"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
//                   <Icon className="h-7 w-7" />
//                 </div>

//                 <h3 className="mt-6 text-2xl font-poppins font-semibold text-gray-900 leading-tight">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* EXPERIENCE STRIP */}
//         <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Healthy & Balanced Dining",
//               image: "/Images/Facility/refectory.JPG",
//             },
//             {
//               title: "Holistic Fitness & Wellness",
//               image: "/Images/Facility/fitnesscenter.JPG",
//             },
//             {
//               title: "Weekend Recreation & Leisure",
//               image: "/Images/Facility/moviehall.JPG",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-[2rem] aspect-[4/3]"
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

//               <div className="absolute bottom-0 left-0 p-7">
//                 <h3 className="text-2xl font-poppins font-semibold text-white leading-tight">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* BOTTOM MARQUEE */}
//         <div className="mt-20 overflow-hidden border-y border-black/5 py-5">
//           <div className="flex whitespace-nowrap gap-16 animate-[marquee_25s_linear_infinite]">
//             {[
//               "SAFE ENVIRONMENT",
//               "COMFORTABLE HOSTELS",
//               "HEALTHY DINING",
//               "SUPERVISED STUDY",
//               "STUDENT WELLNESS",
//               "24/7 CARE",
//               "HOLISTIC GROWTH",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-2xl font-poppins font-semibold text-gray-300"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BoardingFacility;







