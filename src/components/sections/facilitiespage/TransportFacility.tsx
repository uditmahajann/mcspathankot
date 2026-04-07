import { Route, Timer, Users, LocateFixed, ShieldCheck } from "lucide-react"

const TransportFacility = () => {
  return (
    <section id="transport-facility" className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">Transport Facilities</h3>
              <p className="mt-6 text-gray-100 font-inter">
                Our transport system ensures a safe, reliable, and comfortable commute for all students through a fleet of modern school buses with real-time tracking.
              </p>

              <div className="mt-10 space-y-3 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                    <LocateFixed className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Live GPS Tracking</h4>
                    <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">
                     Real-time bus location for timely and secure travel.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Safety & Security</h4>
                    <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">
                      All drivers & attendants undergo regular training and background checks.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                    <Route className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Extensive Route Coverage</h4>
                    <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">
                     Well-planned routes connecting students across the city.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
            <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
                <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1774345171/transport_b3hxmc.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default TransportFacility