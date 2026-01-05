import React from "react"
import { HeartHandshake, Leaf, Users, BookOpen, HelpingHand } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Community Service & Awareness Drives",
    description:
      "Our students actively organize and participate in cleanliness drives, donation campaigns, and local awareness initiatives. From tree plantations to traffic safety rallies — they learn compassion, responsibility, and teamwork.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Social Responsibility",
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    bg: "bg-rose-100",
  },
  {
    id: 2,
    title: "Environmental Stewardship Program",
    description:
      "Through sustainability clubs and ‘Go Green’ initiatives, our learners engage in eco-projects like composting, waste segregation, and creating school gardens — nurturing a lifelong respect for nature.",
    image: "/Images/CampusLife/environment.jpeg",
    tag: "Eco Initiative",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Rural Education & Literacy Support",
    description:
      "Partnering with local NGOs, our students volunteer their time to teach underprivileged children — sharing knowledge, organizing donation drives, and creating learning materials for community schools.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Education for All",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Health & Wellness Awareness Camps",
    description:
      "In collaboration with health organizations, MCS conducts free check-up camps, hygiene awareness sessions, and blood donation drives to build a healthier, more informed society.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Public Health",
    icon: <Users className="w-6 h-6 text-amber-600" />,
    bg: "bg-amber-100",
  },
]

const NccNda = () => {
  return (
    <section id="outreach-programs" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Our <span className="relative inline-block">
              NCC & NDA
              <img
                src="/Images/Doodles/LineGreen.png"
                alt="Underline"
                className="absolute w-[80%] -bottom-5"
              />
            </span> Programs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Preparing young minds for service to the nation with honor, courage, and commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md mb-12">
            <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">About National Cadet Corps (NCC)</h3>
            <p className="text-gray-700 mb-5 font-inter">
              Our NCC program is designed to develop character, comradeship, discipline, leadership, secular outlook, spirit of adventure,
              and ideals of selfless service among young people. The program emphasizes on creating responsible citizens
              who are ready to serve the nation.
            </p>
            <ul className="space-y-2 text-gray-600 font-inter">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 shrink-0"></div>
                <span>Character development through discipline and values</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 shrink-0"></div>
                <span>Leadership skills and team building</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 shrink-0"></div>
                <span>Physical fitness and mental toughness</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 shrink-0"></div>
                <span>Patriotism and national service</span>
              </li>
            </ul>
          </div>
          <div className="bg-sky-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md mb-12">
            <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">About National Defence Academy (NDA)</h3>
            <p className="text-gray-700 mb-5 font-inter">
              Our specialized NDA preparation program provides comprehensive training for students aspiring to join the Indian Armed Forces.
              The program combines academic excellence with physical fitness and character building to prepare future officers.
            </p>
            <ul className="space-y-2 text-gray-600 font-inter">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-sky-300 rounded-full mt-2 shrink-0"></div>
                <span>Comprehensive academic preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-sky-300 rounded-full mt-2 shrink-0"></div>
                <span>Physical fitness and endurance training</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-sky-300 rounded-full mt-2 shrink-0"></div>
                <span>Personality development and interview skills</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-sky-300 rounded-full mt-2 shrink-0"></div>
                <span>Military knowledge and current affairs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {[
            "/Images/CampusLife/ncc1.jpg",
            "/Images/CampusLife/ncc2.jpg",
            "/Images/CampusLife/ncc4.jpg",
            "/Images/CampusLife/ncc3.jpg",
            "/Images/CampusLife/ncc5.jpg",
            "/Images/CampusLife/ncc6.jpg",
            "/Images/CampusLife/ncc7.jpg",
            "/Images/CampusLife/ncc8.jpg",
            "/Images/CampusLife/ncc9.jpg",
          ].map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src={src}
                alt={`Boarding photo ${idx + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NccNda