import { ArrowRight } from "lucide-react";

type AnnouncementItem = {
  text: string;
  buttonText?: string;
  buttonLink?: string;
};

type Props = {
  announcements: AnnouncementItem[];
};

const TopAnnouncementBar = ({ announcements }: Props) => {
  return (
    <div className="relative z-20 overflow-hidden bg-linear-to-r from-red-950 via-red-800 to-red-950 border-b border-white/10">
      

      <div className="relative flex py-2 items-center overflow-hidden">
        {/* Moving Track */}
        <div className="animate-marquee flex min-w-full shrink-0 items-center gap-15 px-6">
          {[...announcements, ...announcements].map(
            (item, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center gap-2"
              >
                {/* Dot */}
                <div className="h-2 w-2 rounded-full bg-green-400 shrink-0" />

                {/* Text */}
                <p className="whitespace-nowrap text-xs sm:text-sm font-inter font-medium text-white">
                  {item.text}
                </p>

                {/* Button */}
                {item.buttonLink && (
                  <a
                    href={item.buttonLink}
                    className="inline-flex shrink-0 items-center gap-1 text-xs sm:text-sm font-inter font-medium text-yellow-400 transition-all duration-300 hover:scale-[1.03] underline cursor-pointer"
                  >
                    {item.buttonText || "Learn More"}

                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* MARQUEE STYLE */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TopAnnouncementBar;