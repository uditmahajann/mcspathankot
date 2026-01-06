import React from "react";

const tiles = [
  {
    id: "health",
    title: "Career Counselling",
    desc: "Temperature & wellness checks with clear guidance for parents.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "med",
    title: "Emotional Well-being",
    desc: "Supervised medical room with trained staff to care for children safely.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "staff",
    title: "Goal-oriented Coaching",
    desc: "All staff complete regular safety training and child-protection checks.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "security",
    title: "Supportive Community",
    desc: "Controlled access and monitored play areas ensure child safety.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
];

const SafetyCareCreative: React.FC = () => {
  return (
    <section id="curriculum-overview" className="py-25 bg-white">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Ready for the World—{" "}
            <span className="relative inline-block">
              Inside & Out
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="hidden sm:block absolute w-8 sm:w-12 -top-6 -right-9 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            A supportive environment where pre-teens gain confidence, responsibility, and a deeper love for learning.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STRIPE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-fuchsia-200 overflow-hidden">
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-900 tracking-wide leading-normal">
                  Where Guidance Meets Growth
                </h2>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  The Senior Secondary Wing provides a secure, encouraging space where students prepare for life beyond school. Here, safety means both physical well-being and emotional steadiness — supported by mentors who truly understand each student’s journey.
                </p>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  Through personalized academic planning, we help students manage stress, stay goal-focused, and grow with confidence. A caring community ensures they graduate not just prepared — but genuinely ready for the world.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT GRID — overlay version */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tiles.map((t) => (
                <article
                  key={t.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-lg font-poppins font-semibold tracking-wide">
                      {t.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SafetyCareCreative;
