'use client';


import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="z-10 shadow-lg">
      <div className="w-10/12 flex items-center gap-8 py-3 mx-auto">
        <Link href="/"><img className="h-[50px]" src="./logo.png" alt="SBT Logo" /></Link>
        <Link className="transition-colors hover:text-accent hover:underline" href="/">Home</Link>
        <Link className="transition-colors hover:text-accent hover:underline" href="/articles">Articles</Link>
        <Link className="transition-colors hover:text-accent hover:underline" href="/our-team">Our Team</Link>
      </div>
    </nav>
  );
}