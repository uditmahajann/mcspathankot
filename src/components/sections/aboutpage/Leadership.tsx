import type React from "react";
import {
  Quote,
  Sparkles,
  ArrowRight,
  Award,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

const leaders = [
  {
    name: "Mr. Vinod Kumar",
    position: "Founder & Chairperson",
    image: "/Images/About/vinod.jpeg",
    bio: "The inspiring vision and dedication of Mr. Vinod Kumar laid the foundation of MCS in 1997. His tireless efforts and profound philosophy have transformed the school into a thriving institution that nurtures future-ready citizens. Every milestone achieved reflects his enduring commitment to holistic education and social impact. The school has discerned marvelous growth through the years in contemplation and nostalgia with every stone and foundation laid under the direction of Mr. Kumar. The entire school fraternity owes to the hardships and inexhaustible promising attitude of our founder chairperson.",
    philosophy:
      "Education is the most powerful instrument to shape society.",
  },
  {
    name: "Mr. Akash Mahajan",
    position: "Vice Chairperson",
    image: "/Images/About/akash.jpeg",
    bio: "Mr. Akash Mahajan has guided MCS into the modern era, integrating digital pedagogy, 21st-century classrooms, and innovative administrative practices. His precise, visionary leadership ensures the school remains at the forefront of educational excellence while fostering a disciplined and professional learning environment. Prudent, precise and a person of few words, he has contributed immensely to the development of school into an outstanding institution with an established focus on inculcation of discipline and professionalism.",
    philosophy:
      "Innovation and discipline create the leaders of tomorrow.",
  },
  {
    name: "Mrs. Rashmi Ahluwalia",
    position: "Principal & Director",
    image: "/Images/About/rashmi.jpeg",
    bio: "Under Mrs. Rashmi Ahluwalia’s stewardship, MCS emphasizes holistic growth, intellectual curiosity, and values-driven education. Her guidance balances academics, co-curricular development, and competitive readiness. She creates an ideal atmosphere for learners including teachers, non-academic staff and students to acquire and imbibe skills necessary for their physical, mental, social and intellectual development. Honoured with the National Award (2015) and multiple state and national accolades, she continues to inspire excellence in every student, teacher, and staff member.",
    philosophy:
      "To educate a child is to prepare a life, not just a career.",
  },
];

const values = [
  {
    title: "Purpose-Led Vision",
    text: "We guide the institution with clarity, innovation, and a future-focused mindset that empowers students to grow into confident global citizens.",
    icon: Sparkles,
  },
  {
    title: "Learners at the Heart",
    text: "Every experience at MCS is thoughtfully designed to nurture curiosity, wellbeing, character, and the unique potential of every child.",
    icon: HeartHandshake,
  },
  {
    title: "Excellence as a Culture",
    text: "From academics to values, we cultivate an environment where discipline, creativity, integrity, and continuous growth become second nature.",
    icon: Award,
  },
];

const Leadership: React.FC = () => {
  return (
    <main className="bg-[#faf9f6] overflow-hidden">
      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0 py-4 sm:py-10 my-10">
  <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0">

           
    
    <div className="rounded-4xl border bg-blue-50  border-white/30 shadow-lg overflow-hidden">
      
      <div className="p-8 sm:p-10 lg:p-14 text-center flex flex-col items-center">
        
        {/* <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
          <Sparkles className="h-4 w-4" />
          A Legacy of Educational Excellence
        </div> */}

        <h2 className="text-xl sm:text-2xl max-w-5xl mx-auto font-playpen font-semibold text-gray-900 leading-tight">
          “Education shapes not only minds, but character; It prepares leaders of tomorrow with courage, integrity, and vision.”
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl mx-auto">
          At Montessori Cambridge School, our leadership embodies this ethos—guiding the institution with foresight, passion, and unwavering commitment to holistic excellence. Together, they ensure that every learner experiences a journey of academic brilliance, personal growth, and social responsibility. Ever since the blossoming of our first stone in Pathankot, in the year 1997, we have impacted thousands of lives, setting a new benchmark for quality of education. Our leaders believe in "Shaping minds, Touching lives, Building Second Homes".
        </p>

      </div>

      {/* <div className="relative min-h-100 lg:min-h-full overflow-hidden">
        <video
          src="/Videos/leadershipcampus.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
      </div> */}
      
    </div>
  </div>
</section>

      

      {/* LEADERSHIP TEAM */}
      <section
        id="our-leadership"
        className="py-25 lg:py-30 my-10 bg-gray-950 relative overflow-hidden"
      >

      {/* <section id="our-leadership" className="py-4 sm:py-10 my-10 bg-white"> */}
      
        <div className="relative mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0">
          
          <div className="text-center mb-12 md:mb-20 lg:mb-30">
          <h2 className="text-2xl min-[540px]:text-3xl lg:text-4xl text-white font-playpen font-medium leading-normal">
            Our Visionary Leadership
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Meet the dedicated leaders & visionary educators shaping the future of Montessori Cambridge School.
          </p>
          </div>
          

          <div className="space-y-40 lg:space-y-50">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative group">
                  <div className="absolute -inset-5 rounded-[2.5rem] bg-linear-to-br opacity-50 blur-2xl transition duration-500 group-hover:opacity-70" />

                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 text-white">
                      <p className="text-blue-200 font-medium tracking-wide uppercase text-base">
                        {leader.position}
                      </p>

                      <h3 className="mt-2 text-3xl lg:text-4xl font-poppins font-semibold leading-tight">
                        {leader.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="text-white">
                  <div className="inline-flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 mb-8">
                    <Quote className="h-7 w-7" />
                  </div>

                  <blockquote className="text-2xl lg:text-3xl font-poppins font-medium leading-relaxed text-white">
                    “{leader.philosophy}”
                  </blockquote>

                  <p className="mt-8 text-lg text-gray-300 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-4 sm:py-10 my-10">
        <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Our Leadership{" "}
            <span className="relative inline-block">
              Philosophy
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Every initiative, innovation, and learning experience at MCS is rooted in values that place students, growth, and holistic education at the center.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="rounded-4xl bg-white p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-poppins font-semibold text-gray-900 leading-tight">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-gray-700 text-base leading-relaxed">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="py-24 lg:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold text-gray-900 leading-tight">
            Building Futures Through Purposeful Leadership
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The leadership at MCS continues to shape an educational environment where innovation, compassion, discipline, and excellence come together to empower every learner.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-white hover:bg-black transition"
            >
              Connect With Us
            </a>

            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-gray-900 hover:bg-gray-100 transition"
            >
              Learn More About MCS
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Leadership;










// import type React from "react"

// const Leadership: React.FC = () => {
//   // Leadership team data
//   const leaders = [
//     {
//       name: "Mr. Vinod Kumar",
//       position: "Chairperson",
//       image: "/Images/About/vinod.jpeg",
//       bio: "The school owes its inception to the profound vision of its esteemed Founder and Chairperson – Mr. Vinod Kumar – whose strenuous efforts, selfless devotion, dynamic philosophy and passion for providing quality education – has not only given the city the most reliable, desirable and preferred school but surpassing countless challenges with unfailing diligence to evolve the school holistically in all the spheres. His mission is to cater school education as a powerful weapon to bring changes in the nationwide social and economic milieu. The school has discerned marvelous growth through the years in contemplation and nostalgia with every stone and foundation laid under the direction of Mr. Kumar. The entire school fraternity owes to the hardships and inexhaustible promising attitude of our founder chairperson.",
//     },
//     {
//       name: "Mr. Akash Mahajan",
//       position: "Vice Chairperson",
//       image: "/Images/About/akash.jpeg",
//       bio: "Under the unique endeavor of honourable Vice-Chairperson – Mr. Akash Mahajan – the school has taken a bounce from traditional methods of teaching – to – modern methods of digital pedagogy. From re-structuring and planning of several different spheres of academic and non-academic departments, ranging from the 21st Century Classrooms, Play-Areas, Accommodation to Modernization of Workmanship, Maturing of Internal and External, Financial and Non-Financial School Affairs and bringing the school to the forefront, accessible to thousands of people pan India via technology integration. Prudent, precise and a person of few words, he has contributed immensely to the development of school into an outstanding institution with an established focus on inculcation of discipline and professionalism.",
//     },
//     {
//       name: "Mrs. Rashmi Ahluwalia",
//       position: "Principal/Director",
//       image: "/Images/About/rashmi.jpeg",
//       bio: "With the truly assiduous and meticulous enlightenment of highly revered School Principal – Mrs. Rashmi Ahluwalia, the school in all horizons has caught the sight of enormous development. As an educationist, she sees her goal as the overall development of child and adaptability to the challenges of modern era. She provides a balanced emphasis on academics, extra-curricular activities and also training for competitive examinations with a view to make the students intellectually competent, physically sound and socially mindful individuals. She creates an ideal atmosphere for learners including teachers, non-academic staff and students to acquire and imbibe skills necessary for their physical, mental, social and intellectual development. In recognition of her outstanding contribution towards the cause of education, Mrs. Ahluwalia was honoured with National Award – 2015 by the President of India. She has also been conferred with Best Principal Award, Best Educationist Award and several other noteworthy recognitions at both State and National level for last ten consecutive years.",
//     },
//   ]

//   return (
//     <section id="our-leadership" className="py-4 sm:py-10 my-10 bg-white">
//       <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
//             Our Visionary{" "}
//             <span className="relative inline-block">
//               Leadership
//               {/* Spark Doodle */}
//               <img
//                 src="/Images/Doodles/SparkPurple.png"
//                 alt="Spark"
//                 className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
//               />
//             </span>
//           </h2>
//           <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             Meet the dedicated leaders & visionary educators shaping the future of Montessori Cambridge School.
//           </p>
//         </div>


//         <div className="mb-8 min-[540px]:mb-12 lg:mb-16 bg-blue-50 p-6 min-[540px]:p-8 lg:p-16 rounded-2xl shadow-sm font-inter text-base sm:text-lg">
//           <p className="text-gray-700">
//             Montessori Cambridge School, Pathankot is overseen by our leaders who are heavily invested in the school.
//             Coming from a range of backgrounds with all being very successful in their fields, our leaders comprise of
//             <b> our Esteemed Chairperson – Mr. Vinod Kumar, Honorable Vice Chairperson – Mr. Akash Mahajan, and Revered
//               Principal/Director – Mrs. Rashmi Ahluwalia.</b>
//           </p>
//           <p className="mt-4 text-gray-700">
//             This mix of experience is clearly evident by the drive and passion they have for success in the school as a
//             community, alongside individual success for our pupils and teachers.
//           </p>
//           <p className="mt-4 text-gray-700">
//             Ever since the blossoming of our first stone in Pathankot, in the year 1997, we have impacted thousands of
//             lives, setting a new benchmark for quality of education. Our leaders believe in <b>"Shaping minds, Touching
//               lives, Building Second Homes".</b>
//           </p>
//           <p className="mt-4 text-gray-700">
//             Along with academic excellence, our leaders also lay a strong emphasis on personality development and employ
//             a number of innovative ways to inculcate strong values, building responsible individuals and future-ready
//             global citizens.
//           </p>
//         </div>

//         {/* Leadership profiles */}
//         <div className="space-y-12 sm:space-y-20">
//           {leaders.map((leader, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
//                 } gap-12 xl:gap-8 items-center bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 min-[540px]:p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl`}
//             >
//               <div className="lg:w-1/3 flex justify-center">
//                 <div className="relative">
//                   <div className="absolute inset-0 rounded-full bg-blue-600 opacity-10 transform scale-110 animate-pulse"></div>
//                   <div className="relative h-60 w-60 md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-blue-600 z-10">
//                     <img
//                       src={leader.image || "/placeholder.svg"}
//                       alt={leader.name}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-2/3">
//                 <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-1 sm:mb-2">{leader.name}</h3>
//                 <p className="text-lg sm:text-xl text-primary font-inter font-semibold mb-3 sm:mb-4">{leader.position}</p>
//                 <p className="text-gray-700 font-inter text-base sm:text-lg">{leader.bio}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Leadership
