import React, { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ToursExcursionsProps {
  tours: {
    _id: string
    title: string
    description: string
    bgColor?: string
    images: {
      asset: {
        url: string
      }
    }[]
  }[]
}


const ToursExcursions: React.FC<ToursExcursionsProps> = ({ tours }) => {

  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index]
    if (!container) return
    const { scrollLeft, clientWidth } = container
    const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
    container.scrollTo({ left: scrollTo, behavior: "smooth" })
  }

  return (
    <section id="tours-excursions" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        {/* Tour Carousels */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-15">
          {tours.map((tour, index) => (
            <div
              key={tour._id}
              className={`rounded-2xl md:rounded-3xl ${tour.bgColor} py-8 sm:py-10 lg:py-12 px-5 sm:px-8 lg:px-16 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-5 md:mb-8 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-gray-900 tracking-wide">
                    {tour.title}
                  </h3>
                  <p className="text-gray-700 font-inter mt-2 text-sm md:text-base">
                    {tour.description}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => scroll(index, "left")}
                  className="absolute -left-3 sm:-left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <div
                  ref={(el) => {scrollRefs.current[index] = el}}
                  className="flex gap-3 md:gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
                >
                  {tour.images.map((img, i) => (
                    <div
                      key={i}
                      className="min-w-65 sm:min-w-[320px] md:min-w-95 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={img.asset.url}
                        alt={`${tour.title} ${i + 1}`}
                        className="w-full h-64 sm:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scroll(index, "right")}
                  className="absolute -right-3 sm:-right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToursExcursions