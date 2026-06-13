"use client";

import { useState } from "react";
import { business, products } from "@/lib/data";

type LineItem = {
  productSlug: string;
  size: string;
  quantity: number;
};

export default function OrderBuilder() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { productSlug: products[0].slug, size: products[0].sizes[0].size, quantity: 1 },
  ]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateItem = (index: number, field: keyof LineItem, value: string | number) => {
    setItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index], [field]: value };
      if (field === "productSlug") {
        const product = products.find((p) => p.slug === value);
        if (product) item.size = product.sizes[0].size;
      }
      updated[index] = item;
      return updated;
    });
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { productSlug: products[0].slug, size: products[0].sizes[0].size, quantity: 1 },
    ]);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const getPrice = (item: LineItem) => {
    const product = products.find((p) => p.slug === item.productSlug);
    const sizeData = product?.sizes.find((s) => s.size === item.size);
    return sizeData ? sizeData.price * item.quantity : 0;
  };

  const total = items.reduce((sum, item) => sum + getPrice(item), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || items.length === 0) {
      setError("Please fill in your name and phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const sendToWhatsApp = () => {
    const lines = items
      .map((item) => {
        const product = products.find((p) => p.slug === item.productSlug);
        return `${item.quantity} × ${product?.name} ${item.size}`;
      })
      .join("\n");

    const message = `Hello Northern Hibiscus Drink.
My Order:
${lines}
Total: ₦${total.toLocaleString()}

Name: ${name}
Phone: ${phone}`;

    const link = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    const lines = items.map((item) => {
      const product = products.find((p) => p.slug === item.productSlug);
      return { text: `${item.quantity} × ${product?.name} ${item.size}`, price: getPrice(item) };
    });

    return (
      <div className="fade-in-section bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-hibiscus/10 space-y-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-burgundy mb-1">
            Order Summary
          </h2>
          <p className="text-burgundy/60 text-sm">
            Review your order, then send it to us on WhatsApp to confirm.
          </p>
        </div>

        <div className="space-y-2">
          {lines.map((line, i) => (
            <div key={i} className="flex justify-between text-burgundy/80">
              <span>{line.text}</span>
              <span className="font-semibold">₦{line.price.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between border-t border-hibiscus/10 pt-3 mt-3">
            <span className="font-display font-bold text-burgundy">Total</span>
            <span className="font-display font-bold text-hibiscus text-xl">
              ₦{total.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="bg-cream rounded-xl p-4 text-sm text-burgundy/80 space-y-1">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Phone:</span> {phone}</p>
        </div>

        <button
          onClick={sendToWhatsApp}
          className="w-full bg-leaf text-cream font-semibold py-3.5 rounded-full hover:bg-leaf/90 transition-colors"
        >
          Send Order via WhatsApp
        </button>

        <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 space-y-2">
          <h3 className="font-display font-bold text-burgundy">Payment Instructions</h3>
          <p className="text-sm text-burgundy/80">
            <span className="font-semibold">Bank:</span> {business.payment.bank}
          </p>
          <p className="text-sm text-burgundy/80">
            <span className="font-semibold">Account Number:</span>{" "}
            {business.payment.accountNumber}
          </p>
          <p className="text-sm text-burgundy/80">
            <span className="font-semibold">Account Name:</span>{" "}
            {business.payment.accountName}
          </p>
          <p className="text-sm text-burgundy/70 italic">{business.payment.note}</p>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="w-full border-2 border-hibiscus text-hibiscus font-semibold py-3 rounded-full hover:bg-hibiscus hover:text-cream transition-colors"
        >
          Edit Order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 fade-in-section">
      {error && (
        <p role="alert" className="text-hibiscus text-sm font-medium bg-hibiscus/10 p-3 rounded-xl">
          {error}
        </p>
      )}

      <div className="space-y-4">
        {items.map((item, index) => {
          const product = products.find((p) => p.slug === item.productSlug)!;
          return (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_auto] gap-3 items-end bg-white p-4 rounded-xl shadow-sm border border-hibiscus/10"
            >
              <div>
                <label className="block text-xs font-semibold text-burgundy mb-1">
                  Product
                </label>
                <select
                  value={item.productSlug}
                  onChange={(e) => updateItem(index, "productSlug", e.target.value)}
                  className="w-full rounded-lg border border-hibiscus/20 px-3 py-2.5 text-sm text-burgundy bg-white outline-none focus:border-hibiscus"
                >
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-burgundy mb-1">
                  Size
                </label>
                <select
                  value={item.size}
                  onChange={(e) => updateItem(index, "size", e.target.value)}
                  className="w-full rounded-lg border border-hibiscus/20 px-3 py-2.5 text-sm text-burgundy bg-white outline-none focus:border-hibiscus"
                >
                  {product.sizes.map((s) => (
                    <option key={s.size} value={s.size}>
                      {s.size} — ₦{s.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-burgundy mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                  className="w-full rounded-lg border border-hibiscus/20 px-3 py-2.5 text-sm text-burgundy outline-none focus:border-hibiscus"
                />
              </div>
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  aria-label="Remove item"
                  className="text-hibiscus hover:text-hibiscus-dark font-semibold text-sm px-3 py-2.5"
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={addItem}
        className="text-hibiscus font-semibold text-sm hover:underline"
      >
        + Add another product
      </button>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="order-name" className="block text-sm font-semibold text-burgundy mb-1.5">
            Full Name *
          </label>
          <input
            id="order-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none bg-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="order-phone" className="block text-sm font-semibold text-burgundy mb-1.5">
            Phone Number *
          </label>
          <input
            id="order-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none bg-white"
            placeholder="080xxxxxxxx"
          />
        </div>
      </div>

      <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-hibiscus/10">
        <span className="font-semibold text-burgundy">Estimated Total</span>
        <span className="font-display text-xl font-bold text-hibiscus">
          ₦{total.toLocaleString()}
        </span>
      </div>

      <button
        type="submit"
        className="w-full bg-hibiscus text-cream font-semibold py-3.5 rounded-full hover:bg-hibiscus-dark transition-colors"
      >
        Review Order
      </button>
    </form>
  );
}
