import Link from "next/link";
import Navbar from "./components/Navbar";
import ArticlesPreviewCarousel from "./components/ArticlesPreviewCarousel";
import LiveUpdates from "./components/LiveUpdates";



export default function Home() {
  return (
    <>
      <Navbar />

      <section className="h-[450px] relative">
        <img className="brightness-50 h-full w-full object-cover" src="./map.jpg" alt="Production site map" />

        <div className="absolute top-0 w-full h-full flex items-center">
          <div className="w-10/12 h-10/12 flex flex-col justify-end mx-auto">
            <h1 className="uppercase text-xl font-semibold">Starbase Tracking</h1>
            <h2 className="text-lg font-semibold">Following every step of the Starship journey from Starbase, Texas</h2>

            <button className="cursor-pointer transition-colors border border-white hover:bg-white hover:text-black w-fit px-16 py-3 mt-6 rounded-xs">Explore for yourself</button>
          </div>
        </div>
      </section>

      <ArticlesPreviewCarousel />

      <LiveUpdates />
    </>
  );
}
