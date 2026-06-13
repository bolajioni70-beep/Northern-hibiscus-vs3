import Link from "next/link";
import Image from "next/image";
import { business, products, whyChooseUs, testimonials, eventTypes, faqs } from "@/lib/data";

export default function Home() {
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-hibiscus/5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-hibiscus/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gold/15 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="fade-in-section">
            <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              {business.tagline}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-burgundy leading-tight mb-6">
              Premium Hibiscus Drinks Made Fresh in Abuja
            </h1>
            <p className="text-lg text-burgundy/80 mb-8 max-w-xl">
              Enjoy refreshing pineapple, citrus orange, sugar-free wellness, and
              tigernut hibiscus drinks crafted from quality ingredients and delivered
              fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-leaf text-cream font-semibold px-6 py-3.5 rounded-full hover:bg-leaf/90 transition-all hover:scale-105 shadow-md"
              >
                Order on WhatsApp
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-hibiscus text-cream font-semibold px-6 py-3.5 rounded-full hover:bg-hibiscus-dark transition-all hover:scale-105 shadow-md"
              >
                View Products
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center justify-center border-2 border-burgundy text-burgundy font-semibold px-6 py-3.5 rounded-full hover:bg-burgundy hover:text-cream transition-all"
              >
                Book Event Catering
              </Link>
            </div>
          </div>

          <div className="relative h-72 md:h-[28rem] fade-in-section">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-drinks.jpg"
                alt="Bottles of Northern Hibiscus Drink with fresh hibiscus flowers and fruit"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-3">
            Why Choose Us
          </h2>
          <p className="text-burgundy/70 max-w-2xl mx-auto">
            Every bottle reflects our commitment to quality, freshness, and taste.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className="fade-in-section bg-white rounded-2xl p-6 shadow-sm border border-hibiscus/10 hover:shadow-lg hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display text-lg font-bold text-hibiscus mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-burgundy/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-3">
              Our Signature Drinks
            </h2>
            <p className="text-burgundy/70 max-w-2xl mx-auto">
              Crafted from carefully selected ingredients for every occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => {
              const productMessage = `Hello Northern Hibiscus Drink. I would like to order ${product.name}.`;
              const productWhatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                productMessage
              )}`;
              return (
                <div
                  key={product.slug}
                  className="fade-in-section bg-cream rounded-2xl overflow-hidden shadow-sm border border-hibiscus/10 hover:shadow-xl hover:-translate-y-1 transition-all group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-burgundy mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-burgundy/70 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.sizes.map((s) => (
                        <span
                          key={s.size}
                          className="text-xs font-semibold bg-hibiscus/10 text-hibiscus px-3 py-1 rounded-full"
                        >
                          {s.size} — ₦{s.price.toLocaleString()}
                        </span>
                      ))}
                    </div>
                    <a
                      href={productWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-leaf text-cream font-semibold py-2.5 rounded-full hover:bg-leaf/90 transition-colors text-sm"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-hibiscus text-hibiscus font-semibold px-6 py-3 rounded-full hover:bg-hibiscus hover:text-cream transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-3">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </section>

      {/* CATERING PREVIEW */}
      <section className="bg-burgundy text-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 fade-in-section">
            Event Catering Services
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-10 fade-in-section">
            From intimate gatherings to large celebrations, we bring premium hibiscus
            drinks to every occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {eventTypes.map((type) => (
              <span
                key={type}
                className="bg-cream/10 border border-cream/20 px-4 py-2 rounded-full text-sm"
              >
                {type}
              </span>
            ))}
          </div>
          <Link
            href="/catering"
            className="inline-flex items-center justify-center bg-gold text-burgundy font-semibold px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all hover:scale-105 shadow-md"
          >
            Request Event Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-3">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              className="fade-in-section group bg-white rounded-2xl p-5 shadow-sm border border-hibiscus/10"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <summary className="font-display font-semibold text-burgundy cursor-pointer list-none flex justify-between items-center gap-4">
                {faq.question}
                <span className="text-hibiscus group-open:rotate-45 transition-transform text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-burgundy/70 mt-3 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
