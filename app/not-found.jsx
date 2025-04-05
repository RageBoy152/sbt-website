import Link from "next/link";



export default function NotFound() {
  return (
    <section className="w-1/2 mx-auto h-dvh flex items-center">
      <div className="flex flex-col">
        <h1 className="text-xl">{"Page not found :("}</h1>
        <h2 className="text-lg">404</h2>
        <Link href="/" className="w-fit transition-colors hover:text-accent hover:underline">Back to home</Link>
      </div>
    </section>
  );
}
