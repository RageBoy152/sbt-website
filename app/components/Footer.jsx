'use client';



export default function Footer() {
  return (
    <footer className="bg-black border-t border-white text-center">
      <div className="w-10/12 mx-auto flex flex-col gap-12 md:gap-8 pt-12 pb-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-around">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-semibold text-lg">Socials</h3>
            <a href="https://x.com/TrackingTheSB" target="_blank" className="transition-colors text-white/80 hover:text-accent hover:underline">X / Twitter</a>
            <a href="https://discord.com/invite/starbasetracking" target="_blank" className="transition-colors text-white/80 hover:text-accent hover:underline">Discord</a>
            <a href="https://www.figma.com/design/2AvC161FuB1VFNLUpAVAV2/Starship-Tracking---Starbase?node-id=0-1&t=KabiO3QSbvtf0pKw-1" target="_blank" className="transition-colors text-white/80 hover:text-accent hover:underline">Figma</a>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h3 className="font-semibold text-lg">Other Stuff</h3>
            <a href="" className="transition-colors text-white/80 hover:text-accent hover:underline">Give us Feedback</a>
            <a href="" className="transition-colors text-white/80 hover:text-accent hover:underline">Join the Team</a>
            <a href="" className="transition-colors text-white/80 hover:text-accent hover:underline">Team Login</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-xs text-gray">
          <p>Developed by <a href="https://discord.com/users/693191740961718420" target="_blank" className="transition-colors text-white/80 hover:text-accent hover:underline">Rage</a></p>
          <p>&copy; Starbase Tracking, 2025</p>
        </div>
      </div>
    </footer>
  );
}