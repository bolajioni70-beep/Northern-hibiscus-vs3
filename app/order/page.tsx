import type { Metadata } from "next";
import OrderBuilder from "@/components/OrderBuilder";

export const metadata: Metadata = {
  title: "Place an Order | Northern Hibiscus Drink",
  description:
    "Build your order from our range of premium hibiscus drinks and send it directly to us via WhatsApp.",
};

export default function OrderPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-10 fade-in-section">
        <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
          Place an Order
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-burgundy mb-4">
          Build Your Order
        </h1>
        <p className="text-burgundy/70 max-w-2xl mx-auto">
          Select your drinks, sizes, and quantities. We&apos;ll prepare a summary you
          can send straight to us on WhatsApp.
        </p>
      </div>

      <OrderBuilder />
    </div>
  );
}
