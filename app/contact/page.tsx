import type { Metadata } from "next";
import { business } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Northern Hibiscus Drink",
  description:
    "Get in touch with Northern Hibiscus Drink in Bwari, Abuja. Call, WhatsApp, or send us a message — we'd love to hear from you.",
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12 fade-in-section">
        <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
          Contact Us
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-burgundy mb-4">
          Get In Touch
        </h1>
        <p className="text-burgundy/70 max-w-2xl mx-auto">
          Have a question or want to place an order? Reach out to us — we&apos;d love
          to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="fade-in-section space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-hibiscus/10">
            <h2 className="font-display text-xl font-bold text-burgundy mb-4">
              Contact Information
            </h2>
            <ul className="space-y-3 text-burgundy/80">
              <li className="flex items-center gap-3">
                <span className="text-hibiscus font-semibold">Phone:</span>
                <a href={`tel:${business.phone}`} className="hover:text-hibiscus transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-hibiscus font-semibold">WhatsApp:</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hibiscus transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hibiscus font-semibold">Location:</span>
                <span>{business.location}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-hibiscus/10">
            <h2 className="font-display text-xl font-bold text-burgundy mb-4">
              Business Hours
            </h2>
            <ul className="space-y-2 text-burgundy/80">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-hibiscus/5 pb-2 last:border-b-0 last:pb-0">
                  <span className="font-medium">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-hibiscus/10 h-64">
            <iframe
              title="Northern Hibiscus Drink location map - Bwari, Abuja"
              src="https://www.google.com/maps?q=Bwari,+Abuja,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="fade-in-section bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-hibiscus/10">
          <h2 className="font-display text-xl font-bold text-burgundy mb-4">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
