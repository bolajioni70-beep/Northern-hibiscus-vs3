import type { Metadata } from "next";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Northern Hibiscus Drink",
  description:
    "Learn the story behind Northern Hibiscus Drink — our mission, quality promise, natural ingredients, and commitment to freshness in Bwari, Abuja.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-burgundy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            About Us
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Our Story
          </h1>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Naturally Refreshing. Naturally Northern.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        <div className="fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-hibiscus mb-4">
            Brand Story
          </h2>
          <p className="text-burgundy/80 leading-relaxed">
            Northern Hibiscus Drink was born from a simple idea: bring the rich,
            time-honored taste of hibiscus to everyone, made with care and crafted to
            premium standards. Based in Bwari, Abuja, we set out to create a drink
            that captures the natural beauty of hibiscus while embracing flavors that
            bring people together — at home, at parties, and at life&apos;s biggest
            celebrations.
          </p>
        </div>

        <div className="fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-hibiscus mb-4">
            Our Mission
          </h2>
          <p className="text-burgundy/80 leading-relaxed">
            Our mission is to deliver naturally refreshing hibiscus beverages that
            combine quality, taste, and trust — making every occasion, big or small,
            a little more special.
          </p>
        </div>

        <div className="fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-hibiscus mb-4">
            Our Quality Promise
          </h2>
          <p className="text-burgundy/80 leading-relaxed">
            Every bottle of Northern Hibiscus Drink is made in small batches to
            guarantee freshness. We hold ourselves to high standards in sourcing,
            preparation, and presentation, so that what you receive is always
            consistent, safe, and delicious.
          </p>
        </div>

        <div className="fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-hibiscus mb-4">
            Natural Ingredients
          </h2>
          <p className="text-burgundy/80 leading-relaxed">
            We use carefully selected hibiscus petals, fresh fruits, and natural
            extracts — with no artificial preservatives. Our sugar-free option is
            crafted for those who want all the flavor without the added sugar.
          </p>
        </div>

        <div className="fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-hibiscus mb-4">
            Community Impact
          </h2>
          <p className="text-burgundy/80 leading-relaxed">
            As a proudly Abuja-based business, we&apos;re committed to supporting our
            local community — from sourcing ingredients locally where possible to
            being part of the celebrations, gatherings, and events that bring people
            together across the city.
          </p>
        </div>

        <div className="fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-hibiscus mb-4">
            Commitment to Freshness
          </h2>
          <p className="text-burgundy/80 leading-relaxed">
            Freshness is at the heart of everything we do. From preparation to
            delivery, we work to ensure every bottle reaches you tasting just as
            vibrant as the day it was made.
          </p>
        </div>
      </section>

      <section className="bg-cream border-t border-hibiscus/10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-burgundy mb-4">
            Ready to taste the difference?
          </h2>
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-leaf text-cream font-semibold px-8 py-3.5 rounded-full hover:bg-leaf/90 transition-all hover:scale-105"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
