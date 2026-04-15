import type React from "react"
import { BookOpen, Lightbulb, Users, Sparkles, Compass, HeartHandshake, Star, Globe2 } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section id="vision-mission" className="pt-4 sm:pt-10 mt-10 bg-white">
      <div className="mx-auto px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Our Purpose{" "}
            <br className="hidden"></br>
            <span className="relative inline-block">
              & Principles
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            The guiding principles that inspire our educational journey — our vision for the future and the mission that shapes every step we take at MCS
          </p>
        </div>
      </div>

      {/* Blackboard Background */}
      <div className="grid lg:grid-cols-2 space-y-12 mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0 max-w-7xl">

        {/* VISION SECTION */}
        <div className="items-start">
          <div className="lg:p-6 xl:p-12">
            <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-900 font-poppins mb-5 tracking-wide">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-primarydark font-inter mb-4">
              “To inspire and nurture young minds to become confident, compassionate and
              impactful members of a global community.”
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-inter">
              Our vision is to be the pre-eminent centre of learning, enabling pupils to achieve psychological and
              physical potential within the learning environment that is constructive, courteous & comprehensively
              inviting. We imagine every MCS learner as a grounded individual — rooted in values, equipped with strong academics, and ready to step into a global future with courage, empathy, and clarity of purpose.
            </p>
          </div>
        </div>


        {/* MISSION SECTION */}
        <div className="items-start">
          <div className="lg:p-6 xl:p-12">
            <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-900 font-poppins mb-5 tracking-wide">
              <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-primarydark font-inter mb-4">
              “To provide a joyful & value-driven learning
              environment where every child feels safe, seen, challenged and
              inspired.”
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-inter">
              MCS inspires & prepares all individuals to achieve excellence to build brightest and harmonious career, empower them to confidently explore their interests and put their skills to meaningful use. Through thoughtfully designed experiences, we aim to balance academic excellence with character formation, creativity with discipline, and individual dreams with a sense of social responsibility.
            </p>
          </div>
        </div>
      </div>


      <div className="my-10 py-12 md:py-20 bg-linear-to-r from-blue-950 via-blue-900 to-blue-950">
        <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0">
          {/* Core Philosophy */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/Images/About/vivekananda.png"
                    alt="Swami Vivekananda"
                    className="relative w-60 lg:w-90"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
                    Our Core Philosophy
                  </h2>
                </div>
                <blockquote className="text-xl sm:text-2xl font-playpen font-medium text-white mb-2">
                  "Arise, awake, and stop not until the goal is reached"
                </blockquote>
                <p className="text-gray-300 font-inter italic text-base sm:text-lg mb-8">
                  — Swami Vivekananda
                </p>
                <p className="text-gray-300 font-inter text-base sm:text-lg mb-6">
                  At Montessori Cambridge School, our philosophy of education draws deep inspiration from the timeless teachings of Swami Vivekananda, whose words continue to motivate generations toward purposeful action and self-realisation. Guided by this enduring principle, we strive to cultivate in our students a spirit of perseverance, self-belief, and purposeful ambition. Education at MCS is designed not only to impart knowledge, but also to awaken the inner strength and character that enable young minds to face challenges with courage and conviction. 
                </p>
                <p className="text-gray-300 font-inter text-base sm:text-lg">
                  By nurturing confidence, resilience, and clarity of thought, we encourage every learner to develop the determination required to overcome obstacles, think independently, and solve problems with wisdom and creativity.
In doing so, MCS seeks to empower each student to realise their fullest potential—growing into individuals who pursue excellence with dedication and contribute meaningfully to the world around them.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission pillars */}
      <div className="my-12 sm:my-20 mx-auto max-w-7xl px-8 min-[540px]:px-12 sm:px-16">
       <div className="grid gap-8 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <BookOpen className="w-8 h-8 text-purple-400" />,
            title: "Academic Excellence",
            desc: "We deliver a rigorous, concept-driven curriculum that encourages deep understanding, critical thinking & intellectual curiosity. Our approach inspires students to move beyond memorisation, developing analytical abilities & a genuine passion for learning.",
          },
          {
            icon: <Globe2 className="w-8 h-8 text-lime-400" />,
            title: "Global Citizenship",
            desc: "We cultivate awareness and appreciation of diverse cultures, perspectives, and global challenges. Through this understanding, students grow into respectful, compassionate, and responsible citizens who contribute thoughtfully to the wider world.",
          },
          {
            icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
            title: "Innovation & Inquiry",
            desc: "Curiosity lies at the heart of discovery. At MCS, students are encouraged to question, explore, and experiment through research, collaborative projects, and hands-on learning experiences that nurture creativity and problem-solving skills.",
          },
          {
            icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
            title: "Values & Character",
            desc: "Integrity, empathy, respect & resilience form the foundation of our community. These values are woven into everyday school life through meaningful interactions, service initiatives & reflective practices shaping responsible & ethical individuals.",
          },
          {
            icon: <Users className="w-8 h-8 text-teal-400" />,
            title: "Holistic Growth",
            desc: "Education at MCS extends far beyond the classroom. By balancing academic pursuits with sports, arts, leadership opportunities, and wellness programmes, we support the physical, emotional, and creative development of every learner.",
          },
          {
            icon: <Star className="w-8 h-8 text-fuchsia-400" />,
            title: "Personalised Guidance",
            desc: "We recognise the individuality of each student. Through mentorship, constructive feedback, and differentiated support, we ensure that every learner feels valued, understood, and guided on their unique educational journey.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3"
          >
            <div className="inline-flex">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins tracking-wide">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-inter leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
       </div>
      </div>
    </section>
  )
}

export default Vision