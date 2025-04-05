import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



export default function Article() {
  return (
    <>
      <Navbar />



      <div className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center gap-12 bg-black shadow-lg">

        {/*   ARTICLE HERO   */}
        
        <div className="w-full h-full pt-36 pb-8 xl:p-0 xl:aspect-video relative my-auto">
          <img className="absolute top-0 w-full h-full object-cover rounded-sm" src="/sbtw/sbtw-2025-03-27.jpg" alt="Sparks falling from Highbay" />
          <div className="absolute bottom-0 h-3/4 w-full gradient-body"></div>

          <div className="w-full h-full flex items-center relative z-1">
            <div className="w-10/12 h-10/12 flex flex-col justify-end mx-auto text-center md:text-start">
              <h1 className="text-xl text-shadow-lg font-semibold">Starbase This Week</h1>
              <h2 className="text-2-lg font-semibold mb-2">March 27th, 2025</h2>

              <p>Highbay? What Highbay? More V2 booster hardware spotted and a plethora of Pad B Chopstick tests. Join us for today's Starbase this Week!</p>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto flex flex-col gap-6 pb-12 leading-loose">
          <div className="h-[1px] bg-gray"></div>
          
          <h2 className="font-semibold text-2-lg leading-tight">Launch Site</h2>
          
          <p>A week for testing it seems as this week, both sets of chopsticks underwent testing. On Tuesday, Pad A's sticks were raised to catch height for what was likely a quick verification checkup ahead of Flight 9 operations.</p>
          <p>On the west (not the best coast), Pad B's “shortsticks” have been undergoing multiple different tests. On Friday and Sunday and Tuesday, they were raised the highest they'd gone - all the way to catch height and as I'm writing this, they've been performing a series of translations throughout the past 24 hours.</p>
          <p>To finish up the launch site, early Wednesday morning, a potential 5th out of 5 spots for the small horizontal deluge tanks at Pad B was delivered.</p>
          
          
          <div className="h-[1px] bg-gray mt-12"></div>
          
          <h2 className="font-semibold text-2-lg leading-tight">Highbay Demo</h2>
          
          <p>Moving down to the build site, a new crane has entered the chat. The Liebherr LTM 112000, or in other words, the world's largest telescoping boom crane, has been delivered and assembled to assist with Highbay deconstruction.</p>
          <p>In fact, in just one week, it's already removed a significant amount of steel. The bridge crane has been entirely removed, along with a large section of the wall above the highbay bar. At the Starfactory, the new interior wall, being built to become the new exterior wall, at the main entrance has seen more progress. More wall panels have been installed on the steel frame and additional columns have been put up between the main building columns.</p>
          
          
          <div className="h-[1px] bg-gray mt-12"></div>
          
          <h2 className="font-semibold text-2-lg leading-tight">Ship Construction</h2>
          
          <p>Into Megabay 2, Ship 37 was moved onto the turntable where on Monday its forward section (FX:4) was stacked, now making it  N:7.</p>
          <p>In other ship construction news, Ship 39, the mysterious ship that has seen none, if any, progress in a long while, has… seen more progress this week!</p>
          <p>First, the LOX header tank was spotted, this is in addition to the CH4 header tank which dates no later than January. On Friday a nose cone was spotted still being assembled which is presumed to be for S39.</p>
          <p>The large gap this has created in the production timelines could be related to a design change, or maybe to allow time for a major rework of the nose cone door area to be completed before Ship 39 is ready to roll, or it could be something else, let us know what you think!</p>
          
          
          <div className="h-[1px] bg-gray mt-12"></div>
          
          <h2 className="font-semibold text-2-lg leading-tight">Boosters (V2 Hardware!!!)</h2>
          
          <p>In Megabay 1, Booster 16 is finally home from its extended stay at Massey's! It rolled back on Friday morning and just 3 days after, its booster cap was removed and placed in storage next to the bay.</p>
          <p>Now the promised V2 booster hardware. On Wednesday night, a very strange thing was spotted through the windows of Starfactory.</p>
          <p>It's less than 9m in diameter which means it's not the B18.1 test tank speculated to be a V2 FWD test tank. Its AFT is made of what looks like 2 rings with internal stringers. However, on top of this, there appears to be at least one, roughly 3 rings height worth of ring. Unlike the AFT rings, this ring appears to have no weld marks, making a very smooth looking surface.</p>
          <p>What do you think this tank is? Maybe some kind of large landing tank? We're as intrigued as you, let us know what you think.</p>
          <p>It's been a busy one but that's all for Starbase this Week, we'll see you again next Sunday!</p>
        </div>

      </div>



      <Footer />
    </>
  );
}
