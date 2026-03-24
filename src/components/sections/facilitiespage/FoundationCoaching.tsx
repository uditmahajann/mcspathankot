import { Target, Brain, Lightbulb, Search } from "lucide-react"

const FoundationCoaching = () => {
  return (
    <section id="foundation-coaching" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row md:gap-20">
          
          <div className="md:w-1/2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                Foundation <span className="relative inline-block">Coaching
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-5"
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our Foundation Coaching program is thoughtfully crafted to establish robust academic fundamentals from an early stage. Emphasizing critical thinking, problem-solving, and a profound grasp of core concepts, we prepare students with the essential skills that form the cornerstone of advanced learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <Target className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Personalized Learning</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Tailored instructional approaches designed to meet each student’s unique learning style and pace, ensuring optimal engagement and growth.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Brain className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Cognitive Development</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Targeted activities to strengthen memory retention, cognitive processing, and sustained attention, nurturing sharper and more agile minds.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Conceptual Clarity</h4>
                <p className="text-gray-700 font-inter mt-2">A deliberate focus on deep understanding rather than rote memorization, enabling students to internalize and apply knowledge confidently.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <Search className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Analytical Thinking Skills</h4>
                <p className="text-gray-700 font-inter mt-2">Cultivating logical reasoning and a problem-solving mindset that empowers learners to approach challenges with confidence and creativity.</p>
              </div>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-primary">
              <h4 className="font-outfit font-semibold text-primary flex items-center gap-2">
                {/* <CheckCircle className="w-6 h-6 text-primarydark" /> */}
                Our Approach
              </h4>
              <p className="text-gray-700 mt-2 font-outfit">
                We combine the best of traditional wisdom and modern pedagogy, incorporating hands-on activities, visual aids, and technology-enhanced instruction. This blend ensures that learning is not only effective but also engaging and inspiring for every child.
              </p>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Facility/foundation.JPG"
                alt="Foundation coaching session with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-20">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/foundation1.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
            
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Laying the Academic Bedrock</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/foundation2.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Learning Beyond Books</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/foundation3.JPG"
              alt="Virtual reality learning session"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Modern Infrastructure</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundationCoaching