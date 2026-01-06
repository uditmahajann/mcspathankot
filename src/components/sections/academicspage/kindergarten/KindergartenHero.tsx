import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Heros/kinderhero.png')`,
      }}
    >

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-md sm:max-w-lg lg:max-w-5xl xl:max-w-7xl px-6 lg:px-60 xl:px-80 -mt-15 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase text-sm sm:text-base font-outfit font-semibold text-orange-500 mb-4">
          Kindergarten School • Early Years • Ages 3 to 6
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          A joyful start to learning
          <br />
          <span className="text-amber-500 font-extrabold">for little explorers</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Our kindergarten school blends play, purpose, and personalized attention — helping children grow happy and confident.
        </p>
      </div>
    </section>
  );
};

export default Hero;