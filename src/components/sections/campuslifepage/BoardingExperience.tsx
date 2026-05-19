



import { Clock, Home, Utensils, Book, Users, Moon, Sun, Heart, Award, Music } from "lucide-react"

const BoardingExperience = () => {
  return (
    <section id="boarding-experience" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Boarding School <span className="relative inline-block">Experience
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute -bottom-5"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our boarding program offers students a home away from home, fostering independence, responsibility, and
            lifelong friendships in a safe and nurturing environment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 md:mb-12 items-center">
          {/* Left Column - Description and Features */}
          <div>
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-primarydark mb-3 tracking-wide">A Home Away From Home</h3>
              <p className="text-gray-700 mb-6 font-inter">
                At Montessori Cambridge School, our boarding program offers more than accommodation—it provides a nurturing environment where students cultivate independence, responsibility, and lifelong friendships. Guided by experienced house parents and mentors available 24/7, every student thrives in a safe, supportive, and structured setting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: <Home size={22} />, text: "Modern Dormitories" },
                  { icon: <Utensils size={22} />, text: "Nutritious Meals" },
                  { icon: <Users size={22} />, text: "24/7 Supervision" },
                  { icon: <Heart size={22} />, text: "Healthcare Services" },
                  { icon: <Book size={22} />, text: "Study Facilities" },
                  { icon: <Award size={22} />, text: "Personality Development" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full text-primarydark">{item.icon}</div>
                    <span className="text-gray-900 font-inter font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekend Activities */}
            <div className="bg-linear-to-r from-primary to-primarydark rounded-xl p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-3 tracking-wide">Weekend Enrichment</h3>
              <p className="text-blue-50 mb-6 font-inter">
                Weekends at MCS combine recreation, learning, and personal growth:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Movie Nights",
                  "Sports Tournaments",
                  "Cultural Outings",
                  "Community Service",
                  "Hobby Clubs",
                  "Special Workshops",
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-2 font-inter text-white font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Daily Schedule */}
          <div className="bg-gray-50 rounded-xl sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                "/Images/Facility/hostel.JPG",
                "/Images/Facility/refectory.JPG",
                "/Images/Facility/moviehall.JPG",
                "/Images/Facility/gym.JPG",
                "/Images/Facility/competitive.JPG",
                "/Images/Facility/personality.JPG",
                
              ].map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-md group">
                  <img
                    src={src}
                    alt={`Boarding photo ${idx + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-blue-50 rounded-xl p-6 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-playpen font-semibold text-primarydark mb-6 sm:mb-8 sm:text-center">What Our Boarding Students Say:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Boarding at MCS has taught me independence and helped me build lifelong friendships. The house parents are like family to us.",
                student: "Aryan S., Grade 11",
              },
              {
                quote:
                  "I've grown so much as a person since joining the boarding program. The evening study sessions have really improved my academics.",
                student: "Priya M., Grade 10",
              },
              {
                quote:
                  "As an international student, the boarding community made me feel at home right away. The weekend activities are always something to look forward to.",
                student: "David L., Grade 12",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-lg shadow-lg text-sm sm:text-base">
                <p className="text-gray-700 mb-4 italic font-inter">"{testimonial.quote}"</p>
                <p className="text-primarydark font-inter font-semibold">— {testimonial.student}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardingExperience





// import {
//   Home,
//   Utensils,
//   Users,
//   Heart,
//   Book,
//   Award,
//   Moon,
//   Sun,
// } from "lucide-react";

// const boardingFeatures = [
//   {
//     icon: Home,
//     title: "Modern Residential Spaces",
//   },
//   {
//     icon: Utensils,
//     title: "Balanced Dining Experience",
//   },
//   {
//     icon: Users,
//     title: "24/7 Mentorship & Care",
//   },
//   {
//     icon: Heart,
//     title: "Wellness & Emotional Support",
//   },
//   {
//     icon: Book,
//     title: "Structured Study Environment",
//   },
//   {
//     icon: Award,
//     title: "Personality Development",
//   },
// ];

// const BoardingExperience = () => {
//   return (
//     <section
//       id="boarding-experience"
//       className="relative overflow-hidden bg-[#0f1720] py-20 sm:py-28"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12">
//         {/* HEADER */}
//         <div className="max-w-5xl">
//           <p className="text-sm tracking-[0.35em] uppercase text-blue-300">
//             Boarding Experience
//           </p>

//           <h2 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold leading-[0.95] text-white">
//             More Than Boarding.
//             <br />
//             A Community That Feels Like Home.
//           </h2>

//           <p className="mt-8 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
//             Our boarding programme creates a nurturing residential environment
//             where students grow academically, socially, and personally while
//             building independence, meaningful friendships, and lifelong
//             memories.
//           </p>
//         </div>

//         {/* VISUAL STORY GRID */}
//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* BIG VISUAL */}
//           <div className="lg:col-span-7 relative overflow-hidden rounded-[2.5rem] aspect-[16/10]">
//             <img
//               src="/Images/Facility/hostel.JPG"
//               alt=""
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

//             <div className="absolute bottom-0 left-0 p-8 lg:p-10 max-w-2xl">
//               <div className="flex items-center gap-3 text-blue-300">
//                 <Moon className="h-5 w-5" />
//                 <span className="tracking-[0.25em] uppercase text-sm">
//                   Residential Life
//                 </span>
//               </div>

//               <h3 className="mt-5 text-3xl lg:text-5xl font-poppins font-semibold text-white leading-tight">
//                 A Home Away from Home.
//               </h3>

//               <p className="mt-5 text-white/70 text-lg leading-relaxed">
//                 Guided by dedicated mentors and house parents, students thrive
//                 in a safe, caring, and structured environment designed to
//                 support holistic development.
//               </p>
//             </div>
//           </div>

//           {/* STACKED RIGHT */}
//           <div className="lg:col-span-5 flex flex-col gap-6">
//             {/* VIDEO */}
//             <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9]">
//               <video
//                 src="/Videos/boardinglife.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/30" />
//             </div>

//             {/* SMALL IMAGE */}
//             <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9]">
//               <img
//                 src="/Images/Facility/moviehall.JPG"
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-2xl font-poppins font-semibold text-white">
//                   Recreation & Weekend Experiences
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FEATURE PILLS */}
//         <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {boardingFeatures.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 hover:bg-white/[0.06] transition duration-500"
//               >
//                 <div className="flex items-center gap-5">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <h3 className="text-2xl font-poppins font-semibold text-white leading-tight">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* DAILY LIFE STRIP */}
//         <div className="mt-24 rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* LEFT */}
//             <div className="p-8 sm:p-12 lg:p-16">
//               <div className="flex items-center gap-3 text-blue-300">
//                 <Sun className="h-5 w-5" />
//                 <span className="tracking-[0.25em] uppercase text-sm">
//                   Daily Rhythm
//                 </span>
//               </div>

//               <h3 className="mt-6 text-4xl lg:text-5xl font-poppins font-semibold text-white leading-tight">
//                 Structured Days,
//                 <br />
//                 Meaningful Experiences.
//               </h3>

//               <p className="mt-6 text-lg text-white/70 leading-relaxed">
//                 Boarding life balances academics, recreation, wellness,
//                 mentorship, and social interaction through thoughtfully planned
//                 daily routines.
//               </p>

//               <div className="mt-10 space-y-4">
//                 {[
//                   "Morning fitness & routines",
//                   "Supervised academic sessions",
//                   "Collaborative study hours",
//                   "Sports & recreation",
//                   "Weekend enrichment activities",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 text-white/80"
//                   >
//                     <div className="h-2 w-2 rounded-full bg-blue-300" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="grid grid-cols-2 gap-1">
//               {[
//                 "/Images/Facility/refectory.JPG",
//                 "/Images/Facility/gym.JPG",
//                 "/Images/Facility/personality.JPG",
//                 "/Images/Facility/competitive.JPG",
//               ].map((src, idx) => (
//                 <div
//                   key={idx}
//                   className="overflow-hidden"
//                 >
//                   <img
//                     src={src}
//                     alt=""
//                     className="h-full w-full object-cover hover:scale-105 transition duration-700"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* TESTIMONIAL STRIP */}
//         <div className="mt-24 overflow-hidden">
//           <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
//             {[
//               {
//                 quote:
//                   "Boarding at MCS helped me become more independent and confident.",
//                 student: "Aryan S., Grade 11",
//               },
//               {
//                 quote:
//                   "The boarding environment feels supportive, disciplined, and welcoming.",
//                 student: "Priya M., Grade 10",
//               },
//               {
//                 quote:
//                   "The friendships and memories here truly feel lifelong.",
//                 student: "David L., Grade 12",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="min-w-[320px] max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8"
//               >
//                 <p className="text-lg text-white/80 leading-relaxed italic">
//                   “{item.quote}”
//                 </p>

//                 <p className="mt-6 text-blue-300 font-medium">
//                   — {item.student}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BoardingExperience;



