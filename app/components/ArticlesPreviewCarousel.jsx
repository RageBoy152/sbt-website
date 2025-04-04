import Link from "next/link";



export default function ArticlesPreviewCarousel() {
  const previewArticles = [
    {
      new: true,
      articleThumbnail: "./sbtw/sbtw-2025-03-27.jpg",
      articleThumbnailAlt: "Sparks falling from Highbay",
      articleName: "Starbase This Week",
      articleDate: "March 27th, 2025",
      articleContentPreview: "Highbay? What Highbay? More V2 booster hardware spotted and a plethora of Pad B Chopstick tests. Join us for today's Starbase this Week!"
    },
    {
      new: false,
      articleThumbnail: "./sbtw/sbtw-2025-03-20.jpg",
      articleThumbnailAlt: "Booster 16 LOX tank closeup",
      articleName: "Starbase This Week",
      articleDate: "March 20th, 2025",
      articleContentPreview: "Highbay being ripped apart, B16 doesn't want to come home and more concrete poured at the flame trench. Join us for today's Starbase this Week!"
    }
  ];



  return (
    <section className="bg-black">

      <div className="overflow-x-auto w-10/12 h-full mx-auto py-8 flex gap-10">

        {previewArticles.map((article, i) => 
          <div key={i} className="h-[400px] aspect-video relative my-auto">
            <img className="brightness-50 h-full w-full object-cover rounded-sm" src={article.articleThumbnail} alt={article.articleThumbnailAlt} />

            <div className="absolute top-0 w-full h-full flex items-center">
              <div className="w-10/12 h-10/12 flex flex-col justify-end mx-auto">
                {article.new && <p className="w-fit bg-danger px-8 py-1 mb-auto rounded-xs shadow-lg">NEW</p>}

                <h1 className="text-lg font-semibold">{article.articleName}</h1>
                <h2 className="text-2-lg font-semibold">{article.articleDate}</h2>

                <p>{article.articleContentPreview}</p>

                <Link href="" className="cursor-pointer transition-colors border border-white hover:bg-white hover:text-black w-fit px-8 py-2 mt-4 rounded-xs">Read article</Link>
              </div>
            </div>
          </div>
        )}

        <div className="h-[400px] aspect-video relative my-auto">
          <img className="brightness-50 h-full w-full object-cover rounded-sm" src="./sbtw/sbtw-cta.jpg" alt="Orbital Launch Mount A at sunrise" />

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