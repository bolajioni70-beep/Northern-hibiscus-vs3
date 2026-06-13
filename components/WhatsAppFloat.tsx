import { business } from "@/lib/data";

export default function WhatsAppFloat() {
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-leaf text-cream rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 px-4 py-3 md:px-5 md:py-3"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.347-.397.521-.595.173-.198.232-.297.347-.495.116-.198.024-.371-.052-.521-.073-.149-.6-1.448-.822-1.984-.218-.522-.44-.452-.6-.46-.155-.008-.333-.01-.51-.01-.178 0-.466.066-.715.33-.248.264-.95.93-.95 2.27 0 1.339.97 2.633 1.105 2.815.135.18 1.85 2.825 4.487 3.846.627.27 1.117.43 1.499.55.63.2 1.204.171 1.658.104.506-.076 1.555-.636 1.774-1.25.219-.615.219-1.142.153-1.252-.066-.11-.247-.176-.547-.325z" />
        <path d="M12.001 2C6.486 2 2 6.486 2 12.001c0 1.86.5 3.604 1.373 5.106L2 22l4.992-1.31A9.953 9.953 0 0012.001 22C17.515 22 22 17.514 22 12.001 22 6.486 17.515 2 12.001 2zm0 18.182a8.16 8.16 0 01-4.16-1.14l-.298-.177-3.097.812.83-3.018-.194-.31a8.157 8.157 0 01-1.262-4.348c0-4.516 3.674-8.19 8.181-8.19 4.506 0 8.179 3.674 8.179 8.19 0 4.515-3.673 8.181-8.179 8.181z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">Order Now</span>
    </a>
  );
}
