import Link from "next/link";
import Navbar from "./components/Navbar";
import ArticlesPreviewCarousel from "./components/ArticlesPreviewCarousel";
import LiveUpdates from "./components/LiveUpdates";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />



      {/*   HERO   */}

      <section className="h-[700px] md:h-[550px] relative">
        <img className="brightness-50 h-full w-full object-cover" src="/map.jpg" alt="Production site map" />
        <div className="absolute bottom-0 gradient-body w-full h-1/2"></div>

        <div className="absolute top-0 w-full h-full flex items-center">
          <div className="w-10/12 h-8/12 flex flex-col justify-end mx-auto text-center md:text-start">
            <h1 className="uppercase text-xl font-semibold">Starbase Tracking</h1>
            <h2 className="text-lg font-normal">Following every step of the Starship journey from Starbase, Texas</h2>

            <Link href="https://www.figma.com/design/2AvC161FuB1VFNLUpAVAV2/Starship-Tracking---Starbase?node-id=3-7&t=KabiO3QSbvtf0pKw-4" target="_blank" className="w-full md:w-fit cursor-pointer transition-colors border border-white hover:bg-white hover:text-black px-2 md:px-16 py-3 mt-6 rounded-xs">Explore for yourself</Link>
          </div>
        </div>
      </section>



      <ArticlesPreviewCarousel />
      <LiveUpdates />



      {/*   SHIP PRODUCTION   */}

      <section className="py-16 relative">
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="absolute start-0 h-full px-18 gradient-black-horizontal-start"></div>
          <div className="absolute end-0 h-full px-18 gradient-black-horizontal-end"></div>
        </div>


        <div className="w-10/12 mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-0">

          <div className="w-full md:w-1/2 overflow-x-auto py-4">
            <div className="h-full flex gap-8">

              {[35,36,37,38,39,40,1,40,11].map((sn, i) => 
                <div key={i} className="shrink-0 flex flex-col items-center gap-5">
                  <img src="/production/ship.png" alt={`Ship ${sn}`} />
                  <p>S{sn}-1</p>
                </div>
              )}

            </div>
          </div>

          <div className="w-full md:w-1/2 flex md:justify-end md:items-end">
            <h2 className="w-full font-semibold uppercase leading-10 md:leading-15 lg:leading-20 text-center md:text-end text-4xl md:text-6xl lg:text-8xl wrap-break-word text-shadow-white text-shadow-sm">Ship Production</h2>
          </div>


        </div>

      </section>

      <div className="h-[1px] bg-gray w-10/12 mx-auto"></div>



      {/*   BOOSTER PRODUCTION   */}

      <section className="py-16 relative">
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <div className="absolute start-0 h-full px-18 gradient-black-horizontal-start"></div>
          <div className="absolute end-0 h-full px-18 gradient-black-horizontal-end"></div>
        </div>


        <div className="w-10/12 mx-auto flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-0">
        
          <div className="w-full md:w-1/2 overflow-x-auto py-4">
            <div className="h-full flex gap-8">

              {[12,14,15,16,17,18].map((sn, i) => 
                <div key={i} className="shrink-0 flex flex-col items-center gap-5">
                  <img src="/production/booster.png" alt={`Booster ${sn}`} />
                  <p>B{sn}-1</p>
                </div>
              )}

            </div>
          </div>

          <div className="w-full md:w-1/2 flex md:items-end">
            <h2 className="w-full font-semibold uppercase leading-10 md:leading-15 lg:leading-20 text-center md:text-start text-4xl md:text-6xl lg:text-8xl wrap-break-word text-shadow-white text-shadow-sm">Booster Production</h2>
          </div>
        
        </div>
      </section>



      <Footer />
    </>
  );
}
