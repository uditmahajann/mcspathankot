import { Award, TrendingUp, Users, BarChart, CheckCircle, CheckCircle2 } from "lucide-react"

const CompetitiveCoaching = () => {
  return (
    <section id="competitive-coaching" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20">

          <div className="md:w-1/2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                Competitive <span className="relative inline-block">Coaching
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-5"
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our Competitive Coaching program is meticulously designed to equip students for a wide range of national and international competitions, entrance examinations, and Olympiads. By providing specialized training that extends beyond the standard curriculum, we foster advanced problem-solving abilities and a distinct competitive advantage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Advanced Curriculum</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Specialized study materials and in-depth concepts tailored specifically for competitive examinations.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Expert Mentors</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Guidance & mentorship from experienced faculty members with proven success in competitive exams.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <BarChart className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Regular Assessments</h4>
                <p className="text-gray-700 font-inter mt-2">Frequent mock tests & comprehensive performance analyses to monitor progress & identify areas for improvement.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Personalized Feedback</h4>
                <p className="text-gray-700 font-inter mt-2">Focused individual attention with customized improvement plans to maximize each student’s potential.</p>
              </div>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-primary">
              <h4 className="font-outfit font-semibold text-primary flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                Competitions We Prepare For:</h4>
              <ul className="grid grid-cols-2 gap-x-1 md:gap-x-4 gap-y-2">
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Mathematics Olympiads
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Science Olympiads
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  NTSE Examination
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  JEE/NEET Entrance
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Coding Competitions
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Robotics Challenges
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Language Competitions
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Arts & Cultural Events
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Facility/competitive.JPG"
                alt="Competitive coaching class with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveCoaching





// import {
//   Award,
//   TrendingUp,
//   Users,
//   BarChart,
//   CheckCircle2,
//   BrainCircuit,
// } from "lucide-react";

// const features = [
//   {
//     icon: TrendingUp,
//     title: "Advanced Preparation",
//     desc: "Structured preparation aligned with Olympiads, entrance examinations, and national-level competitions.",
//   },
//   {
//     icon: Users,
//     title: "Expert Mentorship",
//     desc: "Dedicated guidance from experienced faculty with strong competitive training expertise.",
//   },
//   {
//     icon: BarChart,
//     title: "Performance Analysis",
//     desc: "Frequent assessments and mock evaluations to track progress and identify growth areas.",
//   },
//   {
//     icon: BrainCircuit,
//     title: "Strategic Thinking",
//     desc: "Encouraging analytical reasoning, time management, and problem-solving confidence.",
//   },
// ];

// const CompetitiveCoaching = () => {
//   return (
//     <section
//       id="competitive-coaching"
//       className="relative overflow-hidden bg-[#111111] py-20 sm:py-28"
//     >
//       {/* Glow */}
//       <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12">
//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
//           {/* LEFT VISUAL */}
//           <div className="lg:col-span-6">
//             <div className="relative">
//               {/* Main */}
//               <div className="overflow-hidden rounded-[2rem] shadow-2xl aspect-[5/4]">
//                 <img
//                   src="/Images/Facility/competitive.JPG"
//                   alt=""
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Floating Card */}
//               <div className="absolute -bottom-8 -right-4 sm:right-8 rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-6 sm:p-8 shadow-2xl max-w-xs">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
//                   <Award className="h-7 w-7" />
//                 </div>

//                 <h3 className="mt-5 text-2xl font-poppins font-semibold text-white leading-tight">
//                   Preparing Students for Excellence.
//                 </h3>

//                 <p className="mt-4 text-white/70 leading-relaxed">
//                   Guiding learners toward confidence, discipline, and
//                   high-performance academic achievement.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="lg:col-span-6">
//             <p className="text-sm tracking-[0.35em] uppercase text-blue-300">
//               Competitive Coaching
//             </p>

//             <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-[0.95] text-white">
//               Nurturing Future Achievers & Problem Solvers.
//             </h2>

//             <p className="mt-8 text-lg text-white/70 leading-relaxed">
//               Our Competitive Coaching programme equips students with the
//               conceptual understanding, analytical thinking, and strategic
//               preparation required for Olympiads, entrance examinations, and
//               national-level competitions.
//             </p>

//             <p className="mt-5 text-lg text-white/70 leading-relaxed">
//               Through expert mentorship, rigorous practice, and personalized
//               academic support, students build confidence while developing the
//               discipline and resilience essential for competitive success.
//             </p>

//             {/* Competition Tags */}
//             <div className="mt-10 flex flex-wrap gap-3">
//               {[
//                 "Mathematics Olympiads",
//                 "Science Olympiads",
//                 "NTSE",
//                 "JEE / NEET",
//                 "Coding Challenges",
//                 "Robotics",
//                 "Language Competitions",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-white/80 backdrop-blur-xl"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* FEATURES */}
//         <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 hover:bg-white/[0.06] transition duration-500"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
//                   <Icon className="h-7 w-7" />
//                 </div>

//                 <h3 className="mt-6 text-2xl font-poppins font-semibold text-white leading-tight">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 text-white/70 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* BOTTOM STRIP */}
//         <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Building Academic Confidence",
//               image: "/Images/Facility/competitive1.JPG",
//             },
//             {
//               title: "Structured Competitive Preparation",
//               image: "/Images/Facility/competitive2.JPG",
//             },
//             {
//               title: "Mentorship Beyond Classrooms",
//               image: "/Images/Facility/competitive3.JPG",
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
//       </div>
//     </section>
//   );
// };

// export default CompetitiveCoaching;



