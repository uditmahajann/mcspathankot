import type React from "react";
import {
  Sparkles,
  ArrowRight,
  Music4,
  Drama,
  Palette,
  Trophy,
} from "lucide-react";

const gallery = [
  "https://res.cloudinary.com/dhlzfm5ix/image/upload/v1774377110/globallearning_duqdqf.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/image/upload/v1774377110/globallearning_duqdqf.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  "https://res.cloudinary.com/dhlzfm5ix/image/upload/v1774377110/globallearning_duqdqf.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  "/Images/Arts/art4.jpg",
  "https://res.cloudinary.com/dhlzfm5ix/video/upload/v1775524425/primarysafety4_nf9tna.mp4",
  "/Images/Arts/art5.jpg",
];

const competitions = [
  "DANCE",
  "DRAMATICS",
  "DEBATES",
  "MUSIC",
  "ART",
  "THEATRE",
  "CHOIR",
  "CREATIVE WRITING",
];

const facilities = [
  {
    title: "Professional Sports Grounds",
    image: "/Images/Sports/ground.jpg",
  },
  {
    title: "Indoor Sports Facilities",
    image: "/Images/Sports/indoor.jpg",
  },
  {
    title: "Athletics & Training Areas",
    image: "/Images/Sports/track.jpg",
  },
  {
    title: "Fitness & Conditioning",
    image: "/Images/Sports/gym.jpg",
  },
];

const PerformingArts: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* COMPETITIONS */}
      <section className="bg-[#111111] py-24 overflow-hidden">
        <div className="mb-20 text-center px-6">
          <Trophy className="mx-auto h-14 w-14 text-yellow-300" />

          <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-poppins font-semibold">
            The Energy of Competition
          </h2>
        </div>

        <div className="space-y-8">
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[...competitions, ...competitions].map((item, index) => (
              <div
                key={index}
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-white/10"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-8 whitespace-nowrap animate-[marquee2_35s_linear_infinite]">
            {[...competitions, ...competitions].map((item, index) => (
              <div
                key={index}
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold text-fuchsia-500/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PerformingArts;





