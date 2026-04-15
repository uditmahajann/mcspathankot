import type React from "react"

const History: React.FC = () => {
  return (
    <section id="our-story" className="py-4 sm:py-10 my-10 bg-white">
      <div className="">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 xl:px-0 max-w-7xl">

          <div className="space-y-6 font-inter text-base sm:text-lg">

            <h3 className="text-xl sm:text-2xl max-w-5xl font-playpen font-semibold text-primary">
              "The moment you enter the MCS campus, you can feel that it is not just a school, but a vibrant community of learning"
            </h3>

            <p className="text-gray-700">
              Montessori Cambridge School, established in 1997, stands as a distinguished pioneer of modern education in the district. We are a premier English-medium, co-educational institution offering both boarding and day-boarding facilities, and are proudly affiliated with the Central Board of Secondary Education.
            </p>

            <p className="text-gray-700">
              The academic session commences in April and concludes in March of the following year. Our institution provides a comprehensive educational journey from Pre-Nursery through Grade XII, with the curriculum meticulously structured in accordance with the syllabus prescribed by CBSE and aligned with the guidelines of the State Government.
            </p>

            <p className="text-gray-700">
              Over the years, the school has earned a remarkable array of prestigious accolades and recognitions, firmly establishing itself as one of the most progressive and esteemed institutions in this “tri-state” meeting point as well as the surrounding districts. Owing to its strategic location, the school is also particularly suitable and easily accessible for boarders from remote regions of Jammu & Kashmir and Leh–Ladakh, making it a preferred choice for families seeking quality residential education in a safe and well-connected environment.
            </p>

            <p className="text-gray-700">
              Today, Montessori Cambridge School is home to a vibrant and diverse student community drawn from various cities and cultural backgrounds. The institution is supported by a highly accomplished faculty comprising over 120 qualified, experienced, and dedicated educators, alongside a committed team of more than 50 non-teaching professionals. Together, they work in harmony under the visionary leadership of the School Management and the Principal.
            </p>

            <p className="text-gray-700">
              The school’s dynamic and multicultural environment is truly remarkable. Our students hail not only from across Punjab but also from several neighbouring northern states, enriching the campus with a spirit of diversity, inclusivity, and shared learning.
            </p>

          </div>

          <div className="sticky top-50 overflow-hidden rounded-xl sm:rounded-2xl shadow-xl aspect-4/3">
            <img
              src="/Images/Heros/abouthero.JPG"
              alt="MCS School Building"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 sm:my-12 lg:my-20 mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 xl:px-0 max-w-7xl">

  {/* Card 1 */}
  <div className="relative overflow-hidden group rounded-2xl shadow-lg aspect-4/3">
    <video
      src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776260800/about6_dmbbcl.mp4"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent flex p-5 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">
        Spacious Corridors
      </h3>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative overflow-hidden group rounded-2xl shadow-lg aspect-4/3">
    <video
      src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776260250/about3_miprca.mp4"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent flex p-5 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">
        Modern Infrastructure
      </h3>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative overflow-hidden group rounded-2xl shadow-lg aspect-4/3">
    <video
      src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776260250/about1_rfz2oi.mp4"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent flex p-5 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">
        Open Learning Spaces
      </h3>
    </div>
  </div>

</div>

        {/* <div className="w-full my-8 sm:my-12 lg:my-20">
          <video
            className="w-full h-full shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776243811/middlesafety3_fpcurw.mp4" type="video/mp4" />
          </video>
        </div> */}

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 xl:px-0 max-w-7xl">

          <div className="hidden lg:block lg:sticky top-40 overflow-hidden rounded-2xl shadow-xl aspect-4/3">
            <img
              src="/Images/About/beauty0.JPG"
              alt="MCS School Building"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 font-inter text-base sm:text-lg">

            <h3 className="text-xl sm:text-2xl max-w-5xl font-playpen font-semibold text-primary">
              "An Environment Where Learning is Surrounded by Beauty, Serenity, and Inspiration"
            </h3>

            <p className="text-gray-700">
              Gracefully situated on Defence Road in Pathankot—one of the city’s most distinguished and tranquil residential avenues—Montessori Cambridge School enjoys a setting that perfectly blends accessibility with an atmosphere of refinement and calm. The locality is home to a community of highly accomplished and educated residents, further enhancing the dignified character of the surroundings.
            </p>

            <p className="text-gray-700">
              The school campus extends across an impressive expanse of over 15 acres, thoughtfully designed to provide an inspiring environment where young minds can thrive. Manicured lawns, tree-lined pathways, and open green spaces create a sense of calm and balance throughout the campus. Spacious, well-ventilated classrooms, modern and fully equipped laboratories, and a large hygienic refectory that provides wholesome meals around the clock ensure that both academic and residential needs of students are met with the highest standards of care and comfort.
            </p>

            <p className="text-gray-700">
              Positioned between the gentle vibrancy of the city and the quiet majesty of nature, the campus offers an atmosphere that is both invigorating and serene. From the windows of the classrooms, students are often greeted by sweeping views of natural beauty—where birds and parrots glide across open skies and the surrounding greenery lends a sense of harmony and inspiration to everyday learning.
            </p>

            <p className="text-gray-700">
              Within such tranquil yet stimulating surroundings, education naturally transcends the ordinary. At Montessori Cambridge School, academic endeavour is not confined to the classroom alone; it nurtures in students a lasting love for knowledge, a spirit of intellectual curiosity, and a lifelong commitment to scholarship.
            </p>

            <p className="text-gray-700">
              Here, learning is not merely an activity—it is a way of life, shaped by an environment that inspires excellence, reflection, and discovery.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-8 sm:my-12 lg:my-20 mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 xl:px-0 max-w-7xl">
          <div className="relative overflow-hidden group rounded-xl shadow-lg aspect-4/3">
            <img
              src="/Images/About/beauty1.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">

              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Outdoor Play Zone</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg aspect-4/3">
            <img
              src="/Images/About/beauty2.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Well-Designed Campus</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg aspect-4/3">
            <img
              src="/Images/About/beauty3.JPG"
              alt="Virtual reality learning session"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Scenic Beauty</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 xl:px-0 max-w-7xl">

          <div className="space-y-6 font-inter text-base sm:text-lg">

            <h3 className="text-xl sm:text-2xl max-w-5xl font-playpen font-semibold text-primary">
              "Where young minds take shape—rooted in strong values, joyful learning, and a lifelong spark of curiosity."
            </h3>

            <p className="text-gray-700">
              The academic infrastructure at Montessori Cambridge School is thoughtfully divided into three main buildings: the Kindergarten Wing, Primary Wing, and the expansive Middle–Secondary–Senior Secondary Wing, each progressively larger to accommodate the growing needs of our students. This well-organized campus fosters an ideal environment where learners acquire and internalize the essential skills required for their physical, mental, social, and intellectual growth.
            </p>

            <p className="text-gray-700">
              A diverse range of activities is seamlessly integrated into the curriculum, offering every student ample opportunity to develop a well-rounded personality. Our robust Inter-House and Intra-Class competitions cultivate a spirit of healthy competition and unwavering loyalty to their respective houses and classes. Students actively participate in enriching pursuits such as Debates, Dramatics, Choral Singing, Elocution, Math Wizard, Spelling Bee, Creative Writing, and various Team Games, nurturing confidence, creativity, and teamwork.

            </p>

            <p className="text-gray-700">
              Spanning vast playgrounds, our campus accommodates facilities for Basketball, Lawn Tennis, Volleyball, Cricket, Football, and other athletic disciplines, complemented by numerous indoor halls dedicated to Dance, Music, Yoga, Taekwondo, and Table Tennis.
            </p>

            <p className="text-gray-700">
              Adding to our state-of-the-art sports amenities is a large, state-level swimming pool that regularly hosts prestigious State-Level and North-Zonal Championships, underscoring our commitment to excellence in athletics.
            </p>

            <p className="text-gray-700">
              With a wealth of infrastructural facilities and a continuously evolving campus, Montessori Cambridge School pledges to provide the very best environment for holistic development and success.
            </p>
          </div>

          <div className="sticky top-40 overflow-hidden rounded-2xl shadow-xl aspect-4/3">
            <img
              src="/Images/About/beauty4.JPG"
              alt="MCS School Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 sm:mt-12 lg:mt-20 mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 xl:px-0 max-w-7xl">

  {/* Card 1 */}
  <div className="relative overflow-hidden group rounded-2xl shadow-lg aspect-4/3">
    <video
      src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776260800/about4_ktddyt.mp4"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent flex p-5 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">
        Green Spaces
      </h3>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative overflow-hidden group rounded-2xl shadow-lg aspect-4/3">
    <video
      src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776260246/about2_jvh1rs.mp4"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent flex p-5 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">
        Joyful Play Spaces
      </h3>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative overflow-hidden group rounded-2xl shadow-lg aspect-4/3">
    <video
      src="https://res.cloudinary.com/dhlzfm5ix/video/upload/v1776260800/about5_tozoyt.mp4"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent flex p-5 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">
        World-Class Facilities
      </h3>
    </div>
  </div>

</div>

      </div>
    </section>
  )
}

export default History