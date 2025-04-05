'use client';



import Link from "next/link";
import { useRef, useState } from "react";



export default function LiveUpdates() {
  const liveUpdates = [
    {
      liveUpdateThumbnail: "/liveUpdates/01.jpg",
      timestamp: "2025-04-03T23:45:00",
      liveUpdateContent: "The booster transport stand and dance floor are being moved back to the launch site from danger lot following B14's static fire."
    },
    {
      liveUpdateThumbnail: "/liveUpdates/02.jpg",
      timestamp: "2025-04-03T23:25:00",
      liveUpdateContent: "B14-1 has become the first ever flight proven Superheavy booster to  preform a Static Fire!!!!"
    },
    {
      liveUpdateThumbnail: "/liveUpdates/03.jpg",
      timestamp: "2025-04-03T21:15:00",
      liveUpdateContent: "A frost line has appeared on the CH4 tank!"
    },
    {
      liveUpdateThumbnail: "/liveUpdates/04.jpg",
      timestamp: "2025-04-02T07:33:00",
      liveUpdateContent: "S37's A2:3 has been moved into MB2."
    }
  ];



  const lastCarRef = useRef(null);
  const slidesContainer = useRef(null);

  const [scrolled, setScrolled] = useState(0);



  function scrollCarousel(pos) {
    const el = slidesContainer.current;
    const scrollAmount = el.clientWidth;
    const newScrollPos = el.scrollLeft + (pos == 1 ? scrollAmount : -scrollAmount);


    el.scrollTo({
      left: newScrollPos,
      behavior: "smooth"
    });
  }


  function updateScrollPos(e) {
    const el = e.target;
    const scrolledMin = el.scrollLeft == 0;
    const scrolledMax = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;

    setScrolled(scrolledMin ? 0 : scrolledMax ? 2 : 1);
  }



  return (
    <section className="bg-black py-8 relative shadow-lg">

      <div className="absolute top-0 w-full h-full flex justify-between items-center px-18 text-2-lg pointer-events-none z-10">
        <div className="pointer-events-auto absolute start-0 px-18 h-full gradient-body-horizontal-start"></div>
        <div className="pointer-events-auto absolute end-0 px-18 h-full gradient-body-horizontal-end"></div>

        <div onClick={() => scrollCarousel(0)} className={`transition-all ${scrolled != 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} cursor-pointer hover:text-gray z-5`}><i className="bi flex bi-arrow-left-circle"></i></div>
        <div onClick={() => scrollCarousel(1)} className={`transition-all ${scrolled != 2 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} cursor-pointer hover:text-gray z-5`}><i className="bi bi-arrow-right-circle"></i></div>
      </div>

      <h2 className="w-10/12 uppercase font-semibold text-lg mx-auto">Live Updates</h2>

      <div onScroll={updateScrollPos} ref={slidesContainer} className="overflow-x-auto w-full h-full mx-auto flex gap-4 px-36 py-8">

        {liveUpdates.map((liveUpdate, i) => 
          <div key={i} className="flex flex-col gap-2">
            <div className="aspect-video h-[275px]">
              <img className="w-full h-full object-cover rounded-sm" src={liveUpdate.liveUpdateThumbnail} />
            </div>

            <div className="w-full flex flex-col gap-3">
              <p>{liveUpdate.liveUpdateContent}</p>
              <p className="text-gray">{liveUpdate.timestamp}</p>
            </div>
          </div>
        )}

      </div>


    </section>
  );
}