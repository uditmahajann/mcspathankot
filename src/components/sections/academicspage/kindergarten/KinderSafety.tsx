import React from "react";

const tiles = [
  {
    id: "health",
    title: "Guided Class Learning",
    desc: "Temperature & wellness checks with clear guidance for parents.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775495786/kindersafety1_rshhzy.mp4",
  },
  {
    id: "med",
    title: "Safe Outdoor Play Area",
    desc: "Supervised medical room with trained staff to care for children safely.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775495785/kindersafety2_sbr8ai.mp4",
  },
  {
    id: "staff",
    title: "Supervised Fun Activities",
    desc: "All staff complete regular safety training and child-protection checks.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775495897/kindersafety3_iidzcv.mp4",
  },
  {
    id: "security",
    title: "Structured Playtime",
    desc: "Controlled access and monitored play areas ensure child safety.",
    video: "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775495813/kindersafety4_kkboun.mp4",
  },
];

const SafetyCareCreative: React.FC = () => {
  return (
    <section
      id="safety-care"
      className="relative bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Academics/leavesborder.png')`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 min-[540px]:px-12 py-15 sm:py-25">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 className="max-w-3xl text-2xl min-[540px]:text-3xl lg:text-4xl text-gray-900 font-playpen font-medium inline-block leading-normal">
            A sanctuary of care, confidence and joyful learning
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            With devoted teachers, meticulous health routines, and a secure, thoughtfully designed campus, we ensure that every child feels safe, cherished, and free to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-lime-100 overflow-hidden">
              <div className="p-8 sm:p-12 xl:p-16">
                <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-900 tracking-wide leading-normal">
                  Safety & Care, Tailored for Little Learners
                </h2>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  At our Kindergarten, a child’s well-being is our highest priority. We embrace a protection-first approach, guided by prevention, attentive care, and open, transparent communication with families.
                </p>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  Our classrooms and play spaces are crafted to be secure, hygienic, and child-friendly — inviting children to learn, discover & grow with confidence. Each member of our staff is trained in early-years care with warmth and attentiveness, ensuring that every child feels valued, supported, and nurtured each day.
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
//     title: "Regular Health Checks",
//     desc: "Temperature & wellness checks with clear guidance for parents.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "med",
//     title: "Infirmary & First Aid",
//     desc: "Supervised medical room with trained staff to care for children safely.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "staff",
//     title: "Well-Trained Staff ",
//     desc: "All staff complete regular safety training and child-protection checks.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
//   {
//     id: "security",
//     title: "Secure & Safe Campus",
//     desc: "Controlled access and monitored play areas ensure child safety.",
//     img: "/Images/Sample/Kidsplay.jpg",
//   },
// ];

// const SafetyCareCreative: React.FC = () => {
//   return (
//     <section
//       id="safety-care"
//       className="relative bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
//       style={{
//         backgroundImage: `url('/Images/Academics/leavesborder.png')`, // replace with your image path
//       }}
//     >

//       <div className="relative mx-auto max-w-7xl px-6 min-[540px]:px-12 py-15 sm:py-25">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-12 lg:mb-16">
//           <h2 className="max-w-3xl text-2xl min-[540px]:text-3xl lg:text-4xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
//             A sanctuary of care, confidence and joyful learning
//             </h2>
//           <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             With devoted teachers, meticulous health routines, and a secure, thoughtfully designed campus, we ensure that every child feels safe, cherished, and free to explore.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* LEFT STRIPE */}
//           <div className="lg:col-span-6">
//             <div className="relative rounded-3xl shadow-2xl bg-lime-100 overflow-hidden">
//               <div className="p-8 sm:p-12 xl:p-16">
//                 <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-900 tracking-wide leading-normal">
//                   Safety & Care, Tailored for Little Learners
//                 </h2>

//                 <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
//                   At our Kindergarten, a child’s well-being is our highest priority. We embrace a protection-first approach, guided by prevention, attentive care, and open, transparent communication with families.
//                 </p>

//                 <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
//                   Our classrooms and play spaces are crafted to be secure, hygienic, and child-friendly — inviting children to learn, discover & grow with confidence. Each member of our staff is trained in early-years care with warmth and attentiveness, ensuring that every child feels valued, supported, and nurtured each day.
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