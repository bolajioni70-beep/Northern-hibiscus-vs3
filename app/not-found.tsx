import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
        404
      </p>
      <h1 className="font-display text-3xl md:text-5xl font-extrabold text-burgundy mb-4">
        Page Not Found
      </h1>
      <p className="text-burgundy/70 mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
        been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-hibiscus text-cream font-semibold px-8 py-3.5 rounded-full hover:bg-hibiscus-dark transition-all hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
