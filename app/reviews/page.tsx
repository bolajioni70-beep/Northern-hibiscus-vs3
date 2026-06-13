import type { Metadata } from "next";
import { business, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Customer Reviews | Northern Hibiscus Drink",
  description:
    "See what customers are saying about Northern Hibiscus Drink — premium hibiscus beverages for personal enjoyment and events in Abuja.",
};

export default function ReviewsPage() {
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    "Hello Northern Hibiscus Drink. I would like to share a review of my experience."
  )}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12 fade-in-section">
        <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
          Reviews
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-burgundy mb-4">
          What Our Customers Say
        </h1>
        <p className="text-burgundy/70 max-w-2xl mx-auto">
          Real feedback from people who have enjoyed our drinks at home and at their
          events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="fade-in-section bg-white rounded-2xl p-6 shadow-sm border border-hibiscus/10"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex gap-1 text-gold mb-3" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, idx) => (
                <svg key={idx} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.299.921-.756 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.285-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-burgundy/80 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
            <p className="font-semibold text-burgundy">{t.name}</p>
            <p className="text-sm text-burgundy/60">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="fade-in-section bg-burgundy text-cream rounded-3xl p-8 md:p-12 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Had a great experience with us?
        </h2>
        <p className="text-cream/80 max-w-xl mx-auto mb-6">
          We&apos;d love to hear from you. Share your feedback with us on WhatsApp and
          we may feature your review here.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gold text-burgundy font-semibold px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all hover:scale-105"
        >
          Share Your Review on WhatsApp
        </a>
      </div>

      <div className="fade-in-section mt-8 bg-gold/10 border border-gold/30 rounded-2xl p-6 text-sm text-burgundy/80">
        <p className="font-semibold text-burgundy mb-1">For the business owner:</p>
        <p>
          This page currently displays curated sample reviews. To enable live customer
          ratings and reviews submitted directly through the website, a database
          (e.g. Supabase) can be connected. Once set up, this section can be upgraded
          to show real-time customer-submitted reviews with star ratings.
        </p>
      </div>
    </div>
  );
}
