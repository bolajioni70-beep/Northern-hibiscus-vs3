"use client";

import { useState } from "react";
import { business, eventTypes } from "@/lib/data";

export default function EventInquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !eventDate || !guests.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    const message = `Hello Northern Hibiscus Drink. I would like to request an event quote.

Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
Estimated Guests: ${guests}
Additional Details: ${details || "N/A"}`;

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
          <label htmlFor="event-name" className="block text-sm font-semibold text-burgundy mb-1.5">
            Full Name *
          </label>
          <input
            id="event-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="event-phone" className="block text-sm font-semibold text-burgundy mb-1.5">
            Phone Number *
          </label>
          <input
            id="event-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
            placeholder="080xxxxxxxx"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="event-type" className="block text-sm font-semibold text-burgundy mb-1.5">
            Event Type *
          </label>
          <select
            id="event-type"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none bg-white"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="event-date" className="block text-sm font-semibold text-burgundy mb-1.5">
            Event Date *
          </label>
          <input
            id="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
            className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="event-guests" className="block text-sm font-semibold text-burgundy mb-1.5">
          Estimated Number of Guests *
        </label>
        <input
          id="event-guests"
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
          placeholder="e.g. 100"
        />
      </div>

      <div>
        <label htmlFor="event-details" className="block text-sm font-semibold text-burgundy mb-1.5">
          Additional Details
        </label>
        <textarea
          id="event-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-hibiscus/20 px-4 py-3 text-burgundy focus:border-hibiscus outline-none"
          placeholder="Tell us more about your event, preferred drinks, location, etc."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-hibiscus text-cream font-semibold py-3.5 rounded-full hover:bg-hibiscus-dark transition-colors"
      >
        Send Inquiry via WhatsApp
      </button>
    </form>
  );
}
