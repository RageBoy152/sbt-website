import Link from "next/link";



export default function LiveUpdates() {
  const liveUpdates = [
    {
      liveUpdateThumbnail: "./liveUpdates/01.jpg",
      timestamp: "2025-04-03T23:45:00",
      liveUpdateContent: "The booster transport stand and dance floor are being moved back to the launch site from danger lot following B14's static fire."
    },
    {
      liveUpdateThumbnail: "./liveUpdates/02.jpg",
      timestamp: "2025-04-03T23:25:00",
      liveUpdateContent: "B14-1 has become the first ever flight proven Superheavy booster to  preform a Static Fire!!!!"
    },
    {
      liveUpdateThumbnail: "./liveUpdates/03.jpg",
      timestamp: "2025-04-03T21:15:00",
      liveUpdateContent: "A frost line has appeared on the CH4 tank!"
    },
    {
      liveUpdateThumbnail: "./liveUpdates/04.jpg",
      timestamp: "2025-04-02T07:33:00",
      liveUpdateContent: "S37's A2:3 has been moved into MB2."
    }
  ];



  return (
    <section className="bg-black py-8">

      <h2 className="w-10/12 uppercase font-semibold text-lg mx-auto">Live Updates</h2>

      <div className="overflow-x-auto w-10/12 h-full mx-auto flex gap-4 py-8">

        {liveUpdates.map((liveUpdate, i) => 
          <div key={i} className="flex flex-col gap-2">
            <div className="aspect-video h-[275px]">
              <img className="w-full h-full object-cover brightness-50 rounded-sm" src={liveUpdate.liveUpdateThumbnail} />
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