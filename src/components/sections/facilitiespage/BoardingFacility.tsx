import { Home, Utensils, Shield, BookOpen } from "lucide-react"

const BoardingFacility = () => {
  return (
    <section id="boarding-facility" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row md:gap-20">
          <div className="lg:w-1/2">
          <div className="mb-6 md:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                Boarding <span className="relative inline-block">Facilities
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-5"
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our residential boarding facility provides a safe, nurturing, and structured environment where students
              can focus on their academic and personal growth. With comfortable accommodations, nutritious meals, and
              round-the-clock supervision, we ensure that students feel at home while they pursue excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <Home className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Comfortable Hostels</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Well-ventilated rooms with modern amenities.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Utensils className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Nutritious Dining</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Balanced meals prepared by professional chefs.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">24/7 Security</h4>
                <p className="text-gray-700 font-inter mt-2">Comprehensive security measures for safety.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Supervised Study</h4>
                <p className="text-gray-700 font-inter mt-2">Dedicated time for academics with revision.</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Facility/hostel.JPG"
                alt="Foundation coaching session with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-20">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/refectory.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
            
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Healthy & Balanced Dining</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/fitnesscenter.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Holistic Fitness & Wellness</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Facility/moviehall.JPG"
              alt="Virtual reality learning session"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Weekend Recreation & Leisure</h3>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default BoardingFacility
