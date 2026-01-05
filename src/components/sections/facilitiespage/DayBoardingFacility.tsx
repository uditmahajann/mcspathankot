import { Target, Utensils, Shield, BookOpen } from "lucide-react"

const DayBoardingFacility = () => {
  return (
    <section id="foundation-coaching" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row-reverse md:gap-20">
          
          <div className="md:w-1/2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                Day-Boarding <span className="relative inline-block">Facilities
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-5"
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our Day-Boarding program offers the perfect balance between school and home life. Students benefit from
              extended hours at school with supervised study time, nutritious meals, and participation in various
              activities, while returning home to their families each evening.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <Target className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Holistic Development</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Access to sports & enrichment programs for all-round growth.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Utensils className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Nutritious Meals</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Healthy, balanced meals to keep students energized and focused.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Safe Environment</h4>
                <p className="text-gray-700 font-inter mt-2">Continuous supervision ensuring safety & a caring atmosphere.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Extended Learning Hours</h4>
                <p className="text-gray-700 font-inter mt-2">Structured academic support beyond school hours.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Facility/campus.JPG"
                alt="Foundation coaching session with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-20">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/mess.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
            
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Dining & Refectory</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/extendedlearning.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Extended Learning Hours</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/holistic.JPG"
              alt="Virtual reality learning session"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Co-Curricular Engagement</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DayBoardingFacility