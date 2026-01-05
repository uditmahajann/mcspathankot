import CtaButton from "../../interface/CtaButton";
import { ArrowRight } from "lucide-react";

const SportsGym = () => {
  const facilities = [
    {
      name: "Olympic-Size Swimming Pool",
      description: "Temperature-controlled pool with professional lanes and diving boards.",
      image: "/Images/Facility/swimmingpool.JPG",
    },
    {
      name: "Indoor Sports Complex",
      description: "Multi-purpose courts for basketball, volleyball, badminton, and more.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Football Ground",
      description: "FIFA-standard football field with natural grass and proper drainage system.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Cricket Stadium",
      description: "Professional cricket ground with practice nets and pavilion.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Tennis Courts",
      description: "Multiple tennis courts with different surfaces for training and matches.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Modern Gymnasium",
      description: "Fully equipped gym with cardio and strength training equipment.",
      image: "/Images/Facility/gym.JPG",
    },
  ]

  return (
    <section id="sports-gym" className="py-4 sm:py-10 lg:py-16 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Sports & {" "}
            <span className="relative inline-block">
              Gymnasium Facilities
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            We believe in the holistic development of our students. Our world-class sports facilities and modern gymnasium provide
            students with opportunities to excel in various sports and maintain physical fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-5 lg:p-6 group-hover:hidden">
                <h3 className="text-white text-lg md:text-xl font-poppins font-semibold tracking-wider mb-1">{facility.name}</h3>
                <p className="text-blue-100 text-sm font-inter">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 lg:mt-12 text-center">
          <CtaButton text="View More Details" href="/co-curriculars/sports-&-athletics" icon={ArrowRight} />
        </div> 
      </div>
    </section>
  )
}

export default SportsGym
