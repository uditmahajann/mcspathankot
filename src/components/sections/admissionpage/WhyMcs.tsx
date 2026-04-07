import { Users, Star, Leaf, Sparkles, Globe2 } from "lucide-react"

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16">
        {/* HERO */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            MCS — <span className="relative inline-block"> More Than
              <img
                src="/Images/Doodles/LinePink.png"
                alt="Underline"
                className="absolute w-[80%] left-2 -bottom-4"
              />
            </span> a School!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Because education here isn’t just about classrooms — it’s about shaping human potential, nurturing curiosity,
            and building character that shines beyond the report card.
          </p>
        </div>

        <div className="text-center space-y-20 sm:space-y-30">
          {/* Block 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            <div className="md:w-1/2">
              <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
                <video className="w-full h-full object-cover aspect-video" autoPlay loop muted playsInline preload="metadata">
                  <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775517503/whymcs1_alcnzf.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-sky-600" /> Holistic Education
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                Education at MCS is designed to nurture the whole individual. Academic excellence is complemented by a vibrant co-curricular programme that encourages students to discover their passions and develop their talents.
                Whether through theatre, visual arts, music, sport, robotics, or debate, our students engage in experiences that build creativity, discipline, teamwork, and confidence. Carefully curated clubs, inter-school competitions, heritage explorations, and wellness initiatives ensure that learning remains dynamic, enriching, and deeply fulfilling.

              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10">
            <div className="md:w-1/2">
              <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
                <video className="w-full h-full object-cover aspect-video" autoPlay loop muted playsInline preload="metadata">
                  <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767545220/smartclassclip_cpwl0r.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" /> An Inspiring Learning Environment
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                Set within thoughtfully designed surroundings, the MCS campus offers facilities that support both intellectual and physical development. Smart classrooms, advanced laboratories, collaborative learning spaces, and extensive sporting infrastructure provide students with the resources needed to pursue excellence.
                Our learning spaces seamlessly integrate tradition with innovation, preparing students to thrive in a rapidly evolving and interconnected world.

              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            <div className="md:w-1/2">
              <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
                <video className="w-full h-full object-cover aspect-video" autoPlay loop muted playsInline preload="metadata">
                  <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767545220/smartclassclip_cpwl0r.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" /> Personalised Guidance & Mentorship
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                At MCS, every student is known, valued, and guided. Our educators serve not merely as teachers but as mentors—offering attentive support that nurtures academic growth while fostering emotional resilience and personal integrity.
                Through meaningful relationships, careful guidance, and consistent encouragement, we help students develop the confidence and self-awareness necessary to navigate both academic and personal challenges.

              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10">
            <div className="md:w-1/2">
              <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
                <video className="w-full h-full object-cover aspect-video" autoPlay loop muted playsInline preload="metadata">
                  <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767545220/smartclassclip_cpwl0r.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-fuchsia-400" /> Intellectual Curiosity & Enduring Values
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                The academic philosophy at MCS places emphasis on curiosity, critical inquiry, and independent thought. Our curriculum encourages students to question, explore, and engage deeply with knowledge rather than simply memorising it.
                Equally important are the values that shape our community. Integrity, empathy, respect, and responsibility form the foundation of the MCS ethos, ensuring that students grow into individuals of both intellect and character.

              </p>
            </div>
          </div>

          {/* Block 5 */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            <div className="md:w-1/2">
              <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
                <video className="w-full h-full object-cover aspect-video" autoPlay loop muted playsInline preload="metadata">
                  <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767545220/smartclassclip_cpwl0r.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" /> A Global Outlook, Rooted in Tradition
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                MCS was founded with the vision of providing an education that combines global perspective with enduring Indian values. Our diverse student body brings together learners from across India and beyond, creating a vibrant and inclusive community.
                Within this environment, students develop cultural awareness, mutual respect, and a strong sense of belonging—qualities that prepare them to engage thoughtfully with an increasingly interconnected world.

              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyChooseUs