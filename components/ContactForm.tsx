"use client";

import { useState } from "react";
import { business } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    const text = `Hello Northern Hibiscus Drink.

Name: ${name}
Phone: ${phone}
Message: ${message}`;

    const link = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p role="alert" className="text-hibiscus text-sm font-medium bg-hibiscus/10 p-3 rounded-xl">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-burgundy mb-1.5">
          Full Name *
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-burgundy mb-1.5">
          Phone Number *
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
          placeholder="080xxxxxxxx"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-burgundy mb-1.5">
          Message *
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-hibiscus text-cream font-semibold py-3.5 rounded-full hover:bg-hibiscus-dark transition-colors"
      >
        Send Message via WhatsApp
      </button>
    </form>
  );
}
