"use client";

import { useState } from "react";
import { business, products } from "@/lib/data";

type LineItem = {
  productSlug: string;
  size: string;
  quantity: number;
};

export default function BulkOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { productSlug: products[0].slug, size: products[0].sizes[0].size, quantity: 1 },
  ]);
  const [error, setError] = useState("");

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
      setError("Please fill in your name, phone number, and at least one item.");
      return;
    }
    setError("");

    const lines = items
      .map((item) => {
        const product = products.find((p) => p.slug === item.productSlug);
        return `${item.quantity} × ${product?.name} ${item.size}`;
      })
      .join("\n");

    const message = `Hello Northern Hibiscus Drink.
My Bulk Order:
${lines}
Total: ₦${total.toLocaleString()}

Name: ${name}
Phone: ${phone}`;

    const link = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 fade-in-section">
      {error && (
        <p role="alert" className="text-hibiscus text-sm font-medium bg-hibiscus/10 p-3 rounded-xl">
          {error}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="bulk-name" className="block text-sm font-semibold text-burgundy mb-1.5">
            Full Name *
          </label>
          <input
            id="bulk-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="bulk-phone" className="block text-sm font-semibold text-burgundy mb-1.5">
            Phone Number *
          </label>
          <input
            id="bulk-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
            placeholder="080xxxxxxxx"
          />
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const product = products.find((p) => p.slug === item.productSlug)!;
          return (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_auto] gap-3 items-end bg-cream p-4 rounded-xl border border-hibiscus/10"
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
                      {s.size}
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

      <div className="flex justify-between items-center bg-burgundy/5 rounded-xl p-4">
        <span className="font-semibold text-burgundy">Estimated Total</span>
        <span className="font-display text-xl font-bold text-hibiscus">
          ₦{total.toLocaleString()}
        </span>
      </div>

      <button
        type="submit"
        className="w-full bg-hibiscus text-cream font-semibold py-3.5 rounded-full hover:bg-hibiscus-dark transition-colors"
      >
        Send Bulk Order via WhatsApp
      </button>
      </form>
210    );
211  }
  );)
    
    
210    );
211  }
}
}
