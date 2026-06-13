import type { Metadata } from "next";
import { business, eventTypes } from "@/lib/data";
import EventInquiryForm from "@/components/EventInquiryForm";
import BulkOrderForm from "@/components/BulkOrderForm";

export const metadata: Metadata = {
  title: "Catering & Events | Northern Hibiscus Drink",
  description:
    "Premium hibiscus drink catering for weddings, corporate events, conferences, birthdays, and more in Abuja. Request a quote or place a bulk order today.",
};

const eventDescriptions: Record<string, string> = {
  Weddings: "Elegant hibiscus drink service that complements your special day.",
  "Corporate Events": "Professional refreshment packages for meetings and conferences.",
  "Birthday Parties": "Add a refreshing, colorful touch to any celebration.",
  Conferences: "Reliable bulk supply for large-scale gatherings.",
  "Religious Gatherings": "Generous quantities for congregations and fellowships.",
  "School Events": "Safe, naturally refreshing drinks suitable for all ages.",
  "Outdoor Events": "Perfectly refreshing for outdoor functions and festivals.",
};

export default function CateringPage() {
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    "Hello Northern Hibiscus Drink. I would like to request a quote for an event."
  )}`;

  return (
    <div>
      <section className="bg-burgundy text-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Catering & Events
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Premium Refreshments for Every Occasion
          </h1>
          <p className="text-cream/80 max-w-2xl mx-auto">
            From intimate gatherings to large celebrations, Northern Hibiscus Drink
            brings premium, naturally refreshing beverages to your event.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((type, i) => (
            <div
              key={type}
              className="fade-in-section bg-white rounded-2xl p-6 shadow-sm border border-hibiscus/10 hover:shadow-lg hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display text-lg font-bold text-hibiscus mb-2">
                {type}
              </h3>
              <p className="text-sm text-burgundy/70">{eventDescriptions[type]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 fade-in-section">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-3">
              Event Inquiry
            </h2>
            <p className="text-burgundy/70">
              Tell us about your event and we&apos;ll get back to you with a tailored
              quote.
            </p>
          </div>
          <EventInquiryForm />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 fade-in-section">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-3">
              Bulk Order
            </h2>
            <p className="text-burgundy/70">
              Ordering a large quantity of our drinks? Fill in the details below.
            </p>
          </div>
          <BulkOrderForm />
        </div>
      </section>

      <section className="bg-burgundy text-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Prefer to chat directly?
          </h2>
          <p className="text-cream/80 mb-6">
            Reach out to us on WhatsApp for a quick response to your event quote
            request.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold text-burgundy font-semibold px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all hover:scale-105"
          >
            Request Quote on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
