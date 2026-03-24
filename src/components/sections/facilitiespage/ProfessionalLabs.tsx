import CtaButton from "../../interface/CtaButton";
import { ArrowRight } from "lucide-react";

const labs = [
  {
    id: "physics",
    title: "Physics Lab",
    image: "/Images/Facility/physicslab.JPG",
    desc:
      "Explore mechanics, motion, electricity, optics, and energy through hands-on experiments.",
  },
  {
    id: "chemistry",
    title: "Chemistry Lab",
    image: "/Images/Facility/chemistrylab.JPG",
    desc:
      "Safely investigate chemical reactions, compounds, and molecular behavior.",
  },
  {
    id: "biology",
    title: "Biology Lab",
    image: "/Images/Facility/biolab.JPG",
    desc:
      "Discover life systems from cells to ecosystems in an interactive environment.",
  },
  {
    id: "math",
    title: "Mathematics Lab",
    image: "/Images/Facility/mathslab.png",
    desc:
      "Engage in puzzles, models, and logic activities to build strong analytical skills.",
  },
  {
    id: "computer",
    title: "Computers Lab",
    image: "/Images/Facility/computerlab.jpeg",
    desc:
      "Develop foundational and advanced computing skills with modern digital resources.",
  },
  {
    id: "geography",
    title: "Geography Lab",
    image: "/Images/Facility/geolab.JPG",
    desc:
      "Learn maps, globes, and spatial analysis in an interactive, discovery-based space.",
  },
];

const ProfessionalLabs = () => {
  return (
    <section id="professional-labs" className="relative py-4 sm:py-10 lg:py-16 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Professional {" "}
            <span className="relative inline-block">
              Laboratories
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our state-of-the-art laboratories provide hands-on, experiential learning guided by qualified educators, fostering curiosity & practical understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {labs.map((lab, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img
                src={lab.image}
                alt={lab.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent flex flex-col justify-end p-5 lg:p-6 group-hover:hidden">
                <h3 className="text-white text-lg md:text-xl font-poppins font-semibold tracking-wider mb-1">{lab.title}</h3>
                <p className="text-blue-100 text-sm font-inter">{lab.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 lg:mt-12 text-center">
          <CtaButton text="View More Details" href="/co-curriculars/research-&-innovation" icon={ArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalLabs;