import Link from "next/link";
import { business } from "@/lib/data";

export default function Footer() {
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <footer className="bg-burgundy text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold text-gold mb-2">
            {business.name}
          </h3>
          <p className="text-sm text-cream/80 italic mb-4">{business.tagline}</p>
          <p className="text-sm text-cream/70">{business.location}</p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/products" className="hover:text-gold transition-colors">Products</Link></li>
            <li><Link href="/catering" className="hover:text-gold transition-colors">Catering & Events</Link></li>
            <li><Link href="/reviews" className="hover:text-gold transition-colors">Reviews</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>
              <a href={`tel:${business.phone}`} className="hover:text-gold transition-colors">
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-leaf text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-leaf/90 transition-colors"
              >
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4">
        <p className="text-center text-xs text-cream/60">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
