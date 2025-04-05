'use client';



import Link from "next/link";
import { useRef, useState } from "react";



export default function ArticlesPreviewCarousel() {
  const previewArticles = [
    {
      new: true,
      articleThumbnail: "/sbtw/sbtw-2025-03-27.jpg",
      articleThumbnailAlt: "Sparks falling from Highbay",
      articleName: "Starbase This Week",
      articleDate: "March 27th, 2025",
      articleSlug: "sbtw-2025-03-27",
      articleContentPreview: "Highbay? What Highbay? More V2 booster hardware spotted and a plethora of Pad B Chopstick tests. Join us for today's Starbase this Week!"
    },
    {
      new: false,
      articleThumbnail: "/sbtw/sbtw-2025-03-20.jpg",
      articleThumbnailAlt: "Booster 16 LOX tank closeup",
      articleName: "Starbase This Week",
      articleDate: "March 20th, 2025",
      articleSlug: "sbtw-2025-03-20",
      articleContentPreview: "Highbay being ripped apart, B16 doesn't want to come home and more concrete poured at the flame trench. Join us for today's Starbase this Week!"
    }
  ];


  const articlesCTACardRef = useRef(null);
  const slidesContainer = useRef(null);

  const [scrolled, setScrolled] = useState(0);



  function scrollCarousel(pos) {
    slidesContainer.current.scrollTo({
      left: pos == 0 ? 0 : articlesCTACardRef.current.offsetLeft,
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
    <section className="bg-black relative">

      <div className="absolute top-0 w-full h-full flex justify-between items-center px-18 text-2-lg pointer-events-none z-10">
        <div className="pointer-events-auto absolute start-0 px-18 h-full gradient-body-horizontal-start"></div>
        <div className="pointer-events-auto absolute end-0 px-18 h-full gradient-body-horizontal-end"></div>

        <div onClick={() => scrollCarousel(0)} className={`transition-all ${scrolled != 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} cursor-pointer hover:text-gray z-5`}><i className="bi flex bi-arrow-left-circle"></i></div>
        <div onClick={() => scrollCarousel(1)} className={`transition-all ${scrolled != 2 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} cursor-pointer hover:text-gray z-5`}><i className="bi bi-arrow-right-circle"></i></div>
      </div>

      <div ref={slidesContainer} onScroll={updateScrollPos} className="overflow-x-auto w-full h-full mx-auto py-8 px-36 flex gap-10">

        {previewArticles.map((article, i) => 
          <div key={i} className="h-[500px] aspect-video relative my-auto">
            <img className="brightness-50 h-full w-full object-cover rounded-sm" src={article.articleThumbnail} alt={article.articleThumbnailAlt} />

            <div className="absolute top-0 w-full h-full flex items-center">
              <div className="w-10/12 h-10/12 flex flex-col justify-end mx-auto">
                {article.new && <p className="w-fit bg-danger px-8 py-1 mb-auto rounded-xs shadow-lg">NEW</p>}

                <h1 className="text-lg font-semibold">{article.articleName}</h1>
                <h2 className="text-2-lg font-semibold">{article.articleDate}</h2>

                <p>{article.articleContentPreview}</p>

                <Link href={`/articles/${article.articleSlug}`} className="cursor-pointer transition-colors border border-white hover:bg-white hover:text-black w-fit px-8 py-2 mt-4 rounded-xs">Read article</Link>
              </div>
            </div>
          </div>
        )}

        <div ref={articlesCTACardRef} className="h-[500px] aspect-video relative my-auto">
          <img className="brightness-50 h-full w-full object-cover rounded-sm" src="/sbtw/sbtw-cta.jpg" alt="Orbital Launch Mount A at sunrise" />

          <div className="absolute top-0 w-full h-full flex items-center">
            <div className="w-10/12 h-10/12 flex flex-col justify-end mx-auto text-2-lg font-semibold">
              <Link href="/articles" className="cursor-pointer transition-colors hover:underline hover:text-accent flex flex-col">
                <p>Browse all articles</p>
                <i className="bi bi-arrow-right -mt-3"></i>
              </Link>
            </div>
          </div>
        </div>



      </div>


    </section>
  );
}