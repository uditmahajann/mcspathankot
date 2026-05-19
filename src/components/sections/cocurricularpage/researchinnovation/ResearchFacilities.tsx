import type React from "react";

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* BACKSTAGE */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <video
          src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm tracking-[0.35em] text-orange-400 uppercase">
            Behind The Curtain
          </p>

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-poppins font-semibold leading-[0.92]">
            The magic begins before the spotlight.
          </h2>

          <p className="mt-10 text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rehearsals, collaboration, mentorship, preparation, mistakes,
            laughter, teamwork, and perseverance shape every performance and
            every confident student.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;