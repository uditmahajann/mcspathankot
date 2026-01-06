import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-rose-100/60 overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Academics/primaryhero.png')`, // replace with your image path
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-md sm:max-w-lg lg:max-w-5xl xl:max-w-7xl px-5 lg:px-50 xl:px-60 -mt-5 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase text-sm sm:text-base font-outfit font-semibold text-rose-500  mb-4">
          Primary School • Foundational Years • Ages 6–10
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          Building curiosity & character for
          <br />
          <span className="text-fuchsia-600 font-extrabold">tomorrow’s thinkers</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Children at MCS Primary learn with curiosity and purpose — developing essential skills through joyful experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;