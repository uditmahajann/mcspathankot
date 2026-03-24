import React from "react";
import { MessageCircle, Users, CalendarDays, Smartphone } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Open Communication",
    desc: "Through regular updates, direct teacher access, and transparent conversations, families stay informed, engaged, and confident in their child’s development.",
    color: "bg-gradient-to-br from-blue-200 to-blue-100 text-blue-700",
  },
  {
    icon: CalendarDays,
    title: "Parent Meetings & Workshops",
    desc: "Classroom observations, parent–teacher conferences & early childhood education workshops deepen understanding and strengthen the partnership between home & school.",
    color: "bg-gradient-to-br from-pink-200 to-rose-100 text-rose-700",
  },
  {
    icon: Users,
    title: "Family Involvement",
    desc: "Classroom observations, parent–teacher conferences & early childhood education workshops deepen understanding and strengthen the partnership between home & school.",
    color: "bg-gradient-to-br from-yellow-200 to-amber-100 text-amber-700",
  },
];

const ParentPartnership: React.FC = () => {
  return (  
    <section className="relative py-15 sm:py-25 pb-20 lg:pb-50 xl:pb-60 bg-orange-100 overflow-hidden">
      <img
        src="/Images/Academics/leafyfooter.png"
        alt="Cute monkey illustration"
        className="absolute w-full bottom-0 pointer-events-none select-none"
      />

      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Fostering collaboration for every child’s success
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-normal">
            We believe a child’s achievements flourish when school and family work together. Our communication channels ensure parents remain informed, connected, and empowered throughout their Kindergarten journey.
          </p>
        </div>
        

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-15">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`rounded-3xl shadow-md p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 ${f.color}`}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 bg-white/70 rounded-full shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-gray-900">{f.title}</h3>
                  <p className="font-inter text-base text-gray-700">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParentPartnership;
