import type { Metadata } from "next";
import Image from "next/image";
import { business, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Drinks | Northern Hibiscus Drink",
  description:
    "Browse our full range of premium hibiscus drinks: Pineapple Burst, Citrus Orange, Sugar Free Wellness Blend, and Tigernut Zobo Mix. Order directly on WhatsApp.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12 fade-in-section">
        <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
          Our Drinks
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-burgundy mb-4">
          Premium Hibiscus Drinks
        </h1>
        <p className="text-burgundy/70 max-w-2xl mx-auto">
          Each bottle is crafted from carefully selected ingredients for a fresh,
          naturally refreshing taste — perfect for personal enjoyment or any occasion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <div
            key={product.slug}
            className="fade-in-section bg-white rounded-3xl overflow-hidden shadow-sm border border-hibiscus/10 hover:shadow-xl transition-all"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="relative h-56 sm:h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-wide bg-gold/15 text-gold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-2xl font-bold text-burgundy mb-2">
                {product.name}
              </h2>
              <p className="text-burgundy/70 mb-4">{product.description}</p>

              <div className="space-y-3 mb-5">
                {product.sizes.map((s) => {
                  const message = `Hello Northern Hibiscus Drink. I would like to order ${product.name} (${s.size}) — ₦${s.price.toLocaleString()}.`;
                  const link = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                    message
                  )}`;
                  return (
                    <div
                      key={s.size}
                      className="flex items-center justify-between bg-cream rounded-xl p-4 border border-hibiscus/10"
                    >
                      <div>
                        <p className="font-semibold text-burgundy">{s.size}</p>
                        <p className="text-hibiscus font-bold">
                          ₦{s.price.toLocaleString()}
                        </p>
                      </div>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-leaf text-cream font-semibold px-5 py-2.5 rounded-full hover:bg-leaf/90 transition-colors text-sm"
                      >
                        Order
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center fade-in-section bg-burgundy text-cream rounded-3xl p-8 md:p-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
          Need a large quantity for an event?
        </h2>
        <p className="text-cream/80 mb-6 max-w-xl mx-auto">
          We offer bulk orders and full catering packages for weddings, corporate
          events, conferences, and more.
        </p>
        <a
          href="/catering"
          className="inline-flex items-center justify-center bg-gold text-burgundy font-semibold px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all hover:scale-105"
        >
          Explore Catering & Events
        </a>
      </div>
    </div>
  );;
}
