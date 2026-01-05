import { Dumbbell, Shield, Flag } from "lucide-react"

const SmartClasses = () => {
  return (
    <section id="smart-classes" className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">NCC & NDA Training Programs</h3>
            <p className="mt-6 text-gray-100 font-inter">
              Our NCC & NDA programs are designed to develop discipline, leadership, physical fitness, and a strong sense of national service. Through structured training, expert guidance, and real-world exposure, students build the mental and physical readiness required for defence and leadership pathways.
            </p>

            <div className="mt-10 space-y-3 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Structured Physical Training</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Daily fitness routines focusing on strength & endurance.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Drill & Discipline</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Regular parade drills and routines that instill discipline.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Flag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">NDA-Oriented Preparation</h4>
                  <p className="hidden sm:block text-sm text-blue-300 font-inter mt-1">Focused guidance for NDA aspirants, including exam & interview readiness.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative h-full rounded-lg sm:rounded-2xl overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
                <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767632196/nccmen_iraz9w.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartClasses
