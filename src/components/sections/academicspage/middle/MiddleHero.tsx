import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Academics/middlehero.png')`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-lg sm:max-w-xl lg:max-w-5xl xl:max-w-7xl px-6 lg:px-50 xl:px-60 mt-5 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase text-sm sm:text-base font-outfit font-semibold text-sky-500  mb-4">
          Middle School • Growth Years • Ages 12–14
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          Expanding minds & shaping
          <br className="hidden"/>
          <span className="text-sky-600 font-extrabold"> independent learners</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Our middle school bridges guided exploration and growing independence that inspire confidence and academic excellence.
        </p>
      </div>
    </section>
  );
};

export default Hero;