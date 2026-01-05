import type React from "react";

const NccNdaHero: React.FC = () => {
  return (
    <section className="relative text-white">
      <div
        className="relative min-h-[60vh] md:min-h-[65vh] flex items-center"
        style={{
          backgroundImage: `url('/Images/Heros/nccndahero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax-like
        }}
      >
        {/* left-to-right overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 min-[540px]:px-10 sm:px-12 lg:px-20 xl:px-10">
            <div className="max-w-md md:max-w-xl lg:max-w-2xl">
              <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-white/80">NCC & NDA Pathway</span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                Forging <span className="text-emerald-400">Leaders</span><br className="" />
                of Tomorrow
              </h1>
              <p className="mt-3 sm:mt-4 text-base md:text-lg text-white/85">
                The NCC–NDA pathway is built to shape candidates through rigorous training, leadership development, and a spirit of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NccNdaHero;