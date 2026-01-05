import React from "react"
import { HeartHandshake, Leaf, Users, BookOpen, HelpingHand } from "lucide-react"

const values = [
  {
    id: 1,
    title: "Discipline & Honor",
    description:
      "Instilling self-discipline, respect for authority, and maintaining the highest standards of personal and professional conduct.",
    bg: "bg-rose-100",
  },
  {
    id: 2,
    title: "Patriotism & Service",
    description:
      "Developing love for the country, understanding of national issues, and commitment to serve the nation.",
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Leadership & Teamwork",
    description:
      "Building leadership qualities, decision-making skills, and the ability to work effectively in teams under pressure.",
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Character & Integrity",
    description:
      "Developing moral courage, ethical behavior, and strong character traits essential for future leaders.",
    bg: "bg-orange-100",
  },
  {
    id: 5,
    title: "Physical & Mental Fitness",
    description:
      "Maintaining peak physical condition and mental resilience through rigorous training and healthy lifestyle practices.",
    bg: "bg-sky-100",
  },
  {
    id: 6,
    title: "Excellence & Achievement",
    description:
      "Striving for excellence in all endeavors, setting high standards, and achieving goals through dedication and hard work.",
    bg: "bg-yellow-100",
  },
]

const NccNdaValues = () => {
  return (
    <section id="outreach-programs" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Core Values & <span className="relative inline-block">
              Principles
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute -bottom-5"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive programs are designed to develop well-rounded NCC & NDA cadets, covering drill, discipline, and basic military knowledge.
          </p>
        </div>

        {/* Program Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`flex flex-col rounded-xl shadow-sm overflow-hidden justify-center p-6 lg:p-8 ${value.bg}`}
            >
                <h3 className="text-lg lg:text-xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-base font-inter">
                  {value.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NccNdaValues