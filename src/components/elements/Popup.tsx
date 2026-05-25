// src/components/global/AnnouncementPopup.tsx

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

export type PopupItem = {
  id: string;

  title: string;

  description: string;

  /* MEDIA */
  image?: string;
  video?: string;

  /* CTA */
  buttonText?: string;
  buttonLink?: string;
};

type Props = {
  popups: PopupItem[];

  /* OPTIONAL SETTINGS */
  overlayClose?: boolean;
  escClose?: boolean;
};

const AnnouncementPopup = ({
  popups,
  overlayClose = true,
  escClose = true,
}: Props) => {
  const [open, setOpen] = useState(true);

  /* ESC CLOSE */
  useEffect(() => {
    if (!escClose) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [escClose]);

  /* PREVENT BODY SCROLL */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open || popups.length === 0) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/75 px-5 py-10">

      {/* MCS LOGO */}
      <div className="absolute left-5 top-5 sm:left-10 sm:top-10 z-20 flex items-center gap-3">
        <img
          src="/Images/Logos/mcslogofinal.png"
          alt="MCS Logo"
          className="h-20 w-20"
        />

        <div className="hidden sm:block">
          <h3 className="text-xl font-semibold font-poppins text-white leading-none">
            Montessori Cambridge School
          </h3>

          <p className="mt-1 text-base font-inter text-blue-100/80">
            Pathankot
          </p>
        </div>
      </div>
      {/* BACKDROP */}
      {overlayClose && (
        <button
          onClick={() => setOpen(false)}
          className="absolute inset-0"
        />
      )}

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setOpen(false)}
        className="absolute cursor-pointer right-5 top-5 sm:right-10 sm:top-10 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      {/* POPUPS */}
      <div
        className={`relative z-10 grid w-full gap-6 sm:mt-20 ${popups.length === 1
            ? "max-w-xl grid-cols-1"
            : "max-w-6xl grid-cols-1 lg:grid-cols-2"
          }`}
      >
        {popups.map((popup) => (
          <div
            key={popup.id}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
          >
            {/* BANNER */}
            <div className="relative h-140 overflow-hidden">
              {popup.video ? (
                <video
                  src={popup.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <img
                  src={popup.image}
                  alt={popup.title}
                  className="absolute inset-0 h-full w-full object-top transition-transform duration-1000 group-hover:scale-105"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />

              {/* TOP BADGE */}
              <div className="absolute left-6 top-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-2 text-sm font-inter font-medium text-white">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />

                  Special Announcement
                </div>
              </div>

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                {/* DATE */}
                {/* <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  CBSE Cluster XVIII • 2026
                </p> */}

                {/* TITLE */}
                <h2 className="mt-4 text-2xl sm:text-3xl font-poppins font-semibold leading-tight text-white">
                  {popup.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 max-w-xl text-base sm:text-lg font-inter leading-relaxed text-white/80">
                  {popup.description}
                </p>

                {/* CTA */}
                {popup.buttonLink && (
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={popup.buttonLink}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm sm:text-base font-inter font-semibold text-blue-950 transition-all duration-300 hover:scale-[1.03]"
                    >
                      {popup.buttonText || "See Details"}

                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementPopup;





// // src/components/global/AnnouncementPopup.tsx

// import { useEffect, useState } from "react";
// import { ArrowRight, X } from "lucide-react";

// export type PopupItem = {
//   id: string;

//   title: string;

//   description: string;

//   /* MEDIA */
//   image?: string;
//   video?: string;

//   /* CTA */
//   buttonText?: string;
//   buttonLink?: string;
// };

// type Props = {
//   popups: PopupItem[];

//   /* OPTIONAL SETTINGS */
//   overlayClose?: boolean;
//   escClose?: boolean;
// };

// const AnnouncementPopup = ({
//   popups,
//   overlayClose = true,
//   escClose = true,
// }: Props) => {
//   const [open, setOpen] = useState(true);

//   /* ESC CLOSE */
//   useEffect(() => {
//     if (!escClose) return;

//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEsc);

//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [escClose]);

//   /* PREVENT BODY SCROLL */
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   if (!open || popups.length === 0) return null;

//   return (
//     <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-lg px-5 py-10">

//       {/* MCS LOGO */}
//       <div className="absolute left-5 top-5 sm:left-10 sm:top-10 z-20 flex items-center gap-3">
//         <img
//           src="/Images/Logos/mcslogofinal.png"
//           alt="MCS Logo"
//           className="h-20 w-20"
//         />

//         <div className="hidden sm:block">
//           <h3 className="text-xl font-semibold font-poppins text-white leading-none">
//             Montessori Cambridge School
//           </h3>

//           <p className="mt-1 text-base font-inter text-blue-100/80">
//             Pathankot
//           </p>
//         </div>
//       </div>
//       {/* BACKDROP */}
//       {overlayClose && (
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute inset-0"
//         />
//       )}

//       {/* CLOSE BUTTON */}
//       <button
//         onClick={() => setOpen(false)}
//         className="absolute cursor-pointer right-5 top-5 sm:right-8 sm:top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:bg-white/20"
//       >
//         <X className="h-6 w-6" />
//       </button>

//       {/* POPUPS */}
//       <div
//         className={`relative z-10 grid w-full gap-6 ${popups.length === 1
//             ? "max-w-lg grid-cols-1"
//             : "max-w-5xl grid-cols-1 lg:grid-cols-2"
//           }`}
//       >
//         {popups.map((popup) => (
//           <div
//             key={popup.id}
//             className="group overflow-hidden rounded-4xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
//           >
//             {/* MEDIA */}
//             <div className="relative overflow-hidden">
//               {popup.video ? (
//                 <video
//                   src={popup.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="h-72 w-full object-cover"
//                 />
//               ) : (
//                 <img
//                   src={popup.image}
//                   alt={popup.title}
//                   className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               )}

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-transparent to-transparent" />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 bg-white/20">
//               <div className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-white tracking-wide">
//                 MCS Updates
//               </div>

//               <h2 className="mt-5 text-xl sm:text-2xl font-poppins font-semibold tracking-wide leading-tight text-white">
//                 {popup.title}
//               </h2>

//               <p className="mt-2 text-base sm:text-md text-blue-100/95 leading-relaxed">
//                 {popup.description}
//               </p>

//               {popup.buttonLink && (
//                 <a
//                   href={popup.buttonLink}
//                   className="mt-5 group inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] justify-center font-inter text-primarydark bg-white ease-in-out hover:font-semibold hover:text-white hover:bg-secondarydark hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
//                 >
//                   {popup.buttonText || "See Details"}

//                   <ArrowRight className="h-5 w-5" />
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnnouncementPopup;




// // src/components/global/AnnouncementPopup.tsx

// import { useEffect, useMemo, useState } from "react";
// import { ArrowRight, X } from "lucide-react";

// export type PopupItem = {
//   id: string;
//   title: string;
//   description: string;

//   /* MEDIA */
//   image?: string;
//   video?: string;

//   /* CTA */
//   buttonText?: string;
//   buttonLink?: string;

//   /* SCHEDULING */
//   startDate?: string; // "2026-01-01"
//   endDate?: string; // "2026-01-31"

//   /* DISPLAY CONTROL */
//   maxViews?: number; // total allowed views
//   showEveryDays?: number; // show again after X days
// };

// type Props = {
//   popups: PopupItem[];

//   /* GLOBAL SETTINGS */
//   overlayClose?: boolean;
//   escClose?: boolean;
// };

// const AnnouncementPopup = ({
//   popups,
//   overlayClose = true,
//   escClose = true,
// }: Props) => {
//   const [open, setOpen] = useState(false);


//   const [activePopups, setActivePopups] = useState<PopupItem[]>([]);

// useEffect(() => {
//   if (typeof window === "undefined") return;

//   const today = new Date();

//   const filtered = popups.filter((popup) => {
//     const storageKey = `popup-${popup.id}`;

//     const stored = localStorage.getItem(storageKey);

//     let views = 0;
//     let lastShown: string | null = null;

//     if (stored) {
//       const parsed = JSON.parse(stored);

//       views = parsed.views || 0;
//       lastShown = parsed.lastShown || null;
//     }

//     /* DATE RANGE */
//     const start = popup.startDate
//       ? new Date(popup.startDate)
//       : null;

//     const end = popup.endDate
//       ? new Date(popup.endDate)
//       : null;

//     if (start && today < start) return false;
//     if (end && today > end) return false;

//     /* MAX VIEWS */
//     if (
//       popup.maxViews !== undefined &&
//       views >= popup.maxViews
//     ) {
//       return false;
//     }

//     /* SHOW EVERY X DAYS */
//     if (
//       popup.showEveryDays !== undefined &&
//       lastShown
//     ) {
//       const last = new Date(lastShown);

//       const diff =
//         (today.getTime() - last.getTime()) /
//         (1000 * 60 * 60 * 24);

//       if (diff < popup.showEveryDays) {
//         return false;
//       }
//     }

//     return true;
//   });

//   setActivePopups(filtered);
// }, [popups]);

//   /* FILTER ACTIVE POPUPS */
//   // const activePopups = useMemo(() => {
//   //   const today = new Date();

//   //   return popups.filter((popup) => {
//   //     const storageKey = `popup-${popup.id}`;
//   //     const stored = localStorage.getItem(storageKey);

//   //     let views = 0;
//   //     let lastShown: string | null = null;

//   //     if (stored) {
//   //       const parsed = JSON.parse(stored);
//   //       views = parsed.views || 0;
//   //       lastShown = parsed.lastShown || null;
//   //     }

//   //     /* DATE RANGE */
//   //     const start = popup.startDate
//   //       ? new Date(popup.startDate)
//   //       : null;

//   //     const end = popup.endDate
//   //       ? new Date(popup.endDate)
//   //       : null;

//   //     if (start && today < start) return false;
//   //     if (end && today > end) return false;

//   //     /* MAX VIEWS */
//   //     if (
//   //       popup.maxViews !== undefined &&
//   //       views >= popup.maxViews
//   //     ) {
//   //       return false;
//   //     }

//   //     /* SHOW EVERY X DAYS */
//   //     if (
//   //       popup.showEveryDays !== undefined &&
//   //       lastShown
//   //     ) {
//   //       const last = new Date(lastShown);

//   //       const diff =
//   //         (today.getTime() - last.getTime()) /
//   //         (1000 * 60 * 60 * 24);

//   //       if (diff < popup.showEveryDays) {
//   //         return false;
//   //       }
//   //     }

//   //     return true;
//   //   });
//   // }, [popups]);

//   /* OPEN POPUP */
//   useEffect(() => {
//     if (activePopups.length > 0) {
//       setOpen(true);

//       /* SAVE VIEW DATA */
//       activePopups.forEach((popup) => {
//         const storageKey = `popup-${popup.id}`;

//         const stored = localStorage.getItem(storageKey);

//         let views = 0;

//         if (stored) {
//           const parsed = JSON.parse(stored);
//           views = parsed.views || 0;
//         }

//         localStorage.setItem(
//           storageKey,
//           JSON.stringify({
//             views: views + 1,
//             lastShown: new Date().toISOString(),
//           })
//         );
//       });
//     }
//   }, [activePopups]);

//   /* ESC CLOSE */
//   useEffect(() => {
//     if (!escClose) return;

//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEsc);

//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [escClose]);

//   /* BODY SCROLL */
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   console.log(activePopups);

//   if (!open || activePopups.length === 0) return null;

//   return (
//     <div className="fixed inset-0 z-999 flex items-center justify-center bg-blue-950/70 backdrop-blur-md px-4 py-10">
//       {/* BACKDROP */}
//       {overlayClose && (
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute inset-0"
//         />
//       )}

//       {/* CLOSE BUTTON */}
//       <button
//         onClick={() => setOpen(false)}
//         className="absolute right-5 top-5 sm:right-8 sm:top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:bg-white/20"
//       >
//         <X className="h-6 w-6" />
//       </button>

//       {/* POPUPS */}
//       <div
//         className={`relative z-10 grid w-full gap-6 ${
//           activePopups.length === 1
//             ? "max-w-2xl grid-cols-1"
//             : "max-w-6xl grid-cols-1 lg:grid-cols-2"
//         }`}
//       >
//         {activePopups.map((popup) => (
//           <div
//             key={popup.id}
//             className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
//           >
//             {/* MEDIA */}
//             <div className="relative overflow-hidden">
//               {popup.video ? (
//                 <video
//                   src={popup.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="h-72 sm:h-80 w-full object-cover"
//                 />
//               ) : (
//                 <img
//                   src={popup.image}
//                   alt={popup.title}
//                   className="h-72 sm:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               )}

//               <div className="absolute inset-0 bg-linear-to-t from-blue-950/95 via-blue-950/20 to-transparent" />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 sm:p-8">
//               <div className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
//                 MCS Updates
//               </div>

//               <h2 className="mt-5 text-3xl sm:text-4xl font-poppins font-semibold leading-none text-white">
//                 {popup.title}
//               </h2>

//               <p className="mt-5 text-base sm:text-lg text-blue-100/75 leading-relaxed">
//                 {popup.description}
//               </p>

//               {popup.buttonLink && (
//                 <a
//                   href={popup.buttonLink}
//                   className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-semibold text-blue-950 shadow-xl transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   {popup.buttonText || "See Details"}

//                   <ArrowRight className="h-5 w-5" />
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnnouncementPopup;




// import { useEffect, useState } from "react";
// import { X, ArrowRight } from "lucide-react";

// type PopupItem = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   buttonText?: string;
//   buttonLink?: string;
// };

// const popupData: PopupItem[] = [
//   {
//     id: 1,
//     title: "Admissions Open 2026–27",
//     description:
//       "Applications are now open for the new academic session. Explore a future-focused learning environment designed for holistic growth.",
//     image: "/Images/Heros/admissionpopup.jpg",
//     buttonText: "See Details",
//     buttonLink: "/admission/admission-process",
//   },

//   // Add second popup if needed
//   {
//     id: 2,
//     title: "Summer Performing Arts Showcase",
//     description:
//       "Experience an evening of music, dance, theatre, and creative performances by our talented students.",
//     image: "/Images/PerformingArts/showcase.jpg",
//     buttonText: "Explore Event",
//     buttonLink: "/campus-life/performing-arts",
//   },
// ];

// const HomePopup = () => {
//   const [open, setOpen] = useState(true);

//   /* ESC CLOSE */
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEsc);

//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, []);

//   /* PREVENT SCROLL */
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   if (!open || popupData.length === 0) return null;

//   return (
//     <div className="fixed inset-0 z-999 flex items-center justify-center bg-blue-950/70 backdrop-blur-md px-4 py-10">
//       {/* CLOSE BUTTON */}
//       <button
//         onClick={() => setOpen(false)}
//         className="absolute right-5 top-5 sm:right-8 sm:top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:bg-white/20"
//       >
//         <X className="h-6 w-6" />
//       </button>

//       {/* POPUPS */}
//       <div
//         className={`grid w-full max-w-6xl gap-6 ${
//           popupData.length === 1
//             ? "grid-cols-1 max-w-2xl"
//             : "grid-cols-1 lg:grid-cols-2"
//         }`}
//       >
//         {popupData.map((popup) => (
//           <div
//             key={popup.id}
//             className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
//           >
//             {/* IMAGE */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={popup.image}
//                 alt={popup.title}
//                 className="h-72 sm:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-linear-to-t from-blue-950/95 via-blue-950/30 to-transparent" />
//             </div>

//             {/* CONTENT */}
//             <div className="relative p-6 sm:p-8">
//               <div className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
//                 MCS Updates
//               </div>

//               <h2 className="mt-5 text-3xl sm:text-4xl font-poppins font-semibold leading-none text-white">
//                 {popup.title}
//               </h2>

//               <p className="mt-5 text-base sm:text-lg text-blue-100/75 leading-relaxed">
//                 {popup.description}
//               </p>

//               {/* CTA */}
//               {popup.buttonLink && (
//                 <a
//                   href={popup.buttonLink}
//                   className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-semibold text-blue-950 shadow-xl transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   {popup.buttonText || "See Details"}

//                   <ArrowRight className="h-5 w-5" />
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePopup;