import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingLabelInput from "../components/FloatingLabelInput";



export default function Articles() {
  const articles = [
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



  return (
    <>
      <Navbar />


      <div className="bg-black w-full h-full pt-36">

        {/*   SEARCH   */}

        <section className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto">
          <h1 className="font-semibold text-2-lg mb-2">Showing all articles</h1>
          <FloatingLabelInput inputLabel="Search for an article..." max={64} />
        </section>


        <div className="h-[1px] bg-gray w-5/6 md:w-3/4 lg:w-1/2 mx-auto my-12"></div>


        {/*   ARTICLES LIST   */}

        <div className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center gap-12">
          {articles.map((article, i) => 
            <div key={i} className="w-full h-fit pb-8 pt-16 md:pb-12 md:pt-36 relative my-auto shadow-lg">
              <img className="brightness-50 absolute top-0 h-full w-full object-cover rounded-sm" src={article.articleThumbnail} alt={article.articleThumbnailAlt} />

              <div className="w-full h-fit flex items-center relative z-1">
                <div className="w-10/12 h-10/12 flex flex-col justify-end mx-auto text-center md:text-start">
                  {/* {article.new && <p className="w-fit bg-danger px-8 py-1 mb-auto rounded-xs shadow-lg">NEW</p>} */}

                  <h1 className="text-lg font-semibold">{article.articleName}</h1>
                  <h2 className="text-2-lg font-semibold">{article.articleDate}</h2>

                  <p>{article.articleContentPreview}</p>

                  <Link href={`/articles/${article.articleSlug}`} className="cursor-pointer transition-colors border border-white hover:bg-white hover:text-black w-full md:w-fit px-4 md:px-8 py-2 mt-4 rounded-xs">Read article</Link>
                </div>
              </div>
              
            </div>
          )}

        </div>

        <div className="w-1/2 mx-auto text-center py-18">
          <p>End of results.</p>
        </div>

      </div>






      <Footer />
    </>
  );
}
