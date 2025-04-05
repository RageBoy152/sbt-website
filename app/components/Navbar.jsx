'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Navbar() {
  const pathname = usePathname();
  const [navbarSolid, setNavbarSolid] = useState(false);



  useEffect(() => {
    function handleScroll() {
      setNavbarSolid(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });



  return (
    <nav className={`transition-all fixed top-0 w-full z-50 ${navbarSolid ? 'shadow-lg bg-black' : ''}`}>
      <div className="w-10/12 flex items-center gap-8 py-3 mx-auto">
        <Link href="/"><img className="h-[50px]" src="/logo.png" alt="SBT Logo" /></Link>
        <Link className={`transition-colors hover:text-accent hover:underline ${pathname == '/' ? 'text-white/80' : ''}`} href="/">Home</Link>
        <Link className={`transition-colors hover:text-accent hover:underline ${pathname == '/articles' ? 'text-white/80' : ''}`} href="/articles">Articles</Link>
        <Link className={`transition-colors hover:text-accent hover:underline ${pathname == '/our-team' ? 'text-white/80' : ''}`} href="/our-team">Our Team</Link>
      </div>
    </nav>
  );
}