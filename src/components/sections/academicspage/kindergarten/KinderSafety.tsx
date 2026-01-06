import React from "react";
import {
  Users,
  ShieldCheck,
  Bandage,
  Thermometer,
  CheckCircle,
  Truck,
  Clock,
} from "lucide-react";

const tiles = [
  {
    id: "health",
    title: "Regular Health Checks",
    desc: "Temperature & wellness checks with clear guidance for parents.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "med",
    title: "Infirmary & First Aid",
    desc: "Supervised medical room with trained staff to care for children safely.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "staff",
    title: "Well-Trained Staff ",
    desc: "All staff complete regular safety training and child-protection checks.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
  {
    id: "security",
    title: "Secure & Safe Campus",
    desc: "Controlled access and monitored play areas ensure child safety.",
    img: "/Images/Sample/Kidsplay.jpg",
  },
];

const SafetyCareCreative: React.FC = () => {
  return (
    <section
      id="safety-care"
      className="relative bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Academics/leavesborder.png')`, // replace with your image path
      }}
    >

      <div className="relative mx-auto max-w-7xl px-6 min-[540px]:px-12 py-15 sm:py-25 lg:py-35">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Where Safety Meets{" "}
            <span className="relative inline-block">
              Care
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-9 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            With caring teachers, health routines, and a secure campus, we make sure children feel safe, loved, and free to learn joyfully.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT STRIPE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl shadow-2xl bg-lime-100 overflow-hidden">
              <div className="p-8 sm:p-12 xl:p-16">
                <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-900 tracking-wide leading-normal">
                  Safety & Care designed for little learners
                </h2>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  At our kindergarten, every child’s safety, comfort, and well-being come first.
                  We follow a protection-first approach focused on prevention, care, and clear
                  communication between teachers and families.
                </p>

                <p className="mt-4 font-inter text-base sm:text-lg text-gray-700">
                  Our classrooms and play areas are designed to be secure, hygienic & child-friendly —
                  allowing children to explore, learn & grow with confidence. Our staff
                  is carefully trained to handle early-years care with warmth and attentiveness, ensuring
                  that children feel supported and valued every day.
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