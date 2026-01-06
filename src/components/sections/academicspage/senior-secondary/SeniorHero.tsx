import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-160 sm:min-h-180 flex items-center justify-center overflow-hidden py-30"
      style={{
        backgroundImage: `url('/Images/Heros/seniorhero.png')`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 min-[480px]:px-8 sm:px-20 md:px-30 lg:px-60 flex flex-col text-left mt-8">
        <span className="inline-block tracking-wide uppercase text-sm sm:text-base font-outfit font-semibold text-amber-300  mb-4 leading-normal">
          Senior Secondary School • Future Pathwats • Ages 16–18
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-white">
          Defining ambitions
          <br className="hidden sm:block"/> for the
          <span className="text-amber-400 font-extrabold"> world beyond school</span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-xl sm:max-w-2xl">
          Our senior secondary program offers specialized academic streams, mentorship, and holistic development. Students are guided to pursue higher education and careers with clarity, confidence, and integrity.
        </p>
      </div>
    </section>
  );
};

export default Hero;