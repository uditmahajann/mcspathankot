import React from "react";

const AboutKindergarten: React.FC = () => {
  return (
    <section className="relative py-15 lg:py-25 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-0 w-56 h-56 bg-pink-100/40 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 xl:gap-16 items-center">
        
        {/* Right: Content */}
        <div className="text-left">
          <span className="text-rose-500 font-outfit font-semibold uppercase tracking-wide text-sm mb-3 block">
            Our Senior School Philosophy
          </span>

          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl font-raleway font-extrabold text-gray-900 leading-tight mb-5">
            Where potential transforms<br /> into purpose
          </h2>

          <p className="text-base min-[540px]:text-lg text-gray-700 mb-4">
            The Senior Secondary Wing at MCS shapes young adults who are ready for life beyond school — confident, capable, and grounded in values. Students are encouraged to pursue their academic passions, discover career pathways, and engage in reflective, goal-driven learning.
          </p>

          <p className="text-base min-[540px]:text-lg text-gray-700 mb-4">
            We emphasize critical thinking, collaboration, and ethical decision-making. With dedicated guidance, students emerge not just as achievers, but as thoughtful individuals ready to contribute meaningfully to society.
          </p>
        </div>

         {/* Left: Image */}
        <div className="relative flex justify-center">
          <div className="relative h-full rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
                <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1767679693/kinderabout_nd6vfl.mp4" type="video/mp4" />
              </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKindergarten;
