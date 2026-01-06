import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[115vh] lg:min-h-[125vh] flex items-center justify-center overflow-hidden bg-orange-50"
      style={{
        backgroundImage: `url('/Images/Academics/secondaryheroo.png')`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl px-6 lg:px-40 xl:px-60 -mt-20 sm:-mt-25 lg:-mt-45 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase text-sm sm:text-base font-outfit font-semibold text-amber-500  mb-4">
          Secondary School • Future Foundational Years • Ages 14–16
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          Empowering learners to excel with
          <br className="hidden"/>
          <span className="text-orange-600 font-extrabold"> purpose & resilience</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          At this stage, our curriculum integrates critical thinking, goal-setting, and real-world application — preparing students for board examinations and lifelong success.
        </p>
      </div>
    </section>
  );
};

export default Hero;
