export const business = {
  name: "Northern Hibiscus Drink",
  tagline: "Naturally Refreshing. Naturally Northern.",
  location: "Bwari, Abuja, Nigeria",
  phone: "+234 814 608 6121",
  whatsapp: "2348146086121",
  whatsappMessage: "Hello Northern Hibiscus Drink. I would like to place an order.",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "12:00 PM – 6:00 PM" },
  ],
  payment: {
    bank: "Moniepoint",
    accountNumber: "08146086121",
    accountName: "Northern Hibiscus Drink",
    note: "Please send proof of payment through WhatsApp after payment.",
  },
};

export type ProductSize = {
  size: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  sizes: ProductSize[];
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "pineapple-burst-zobo",
    name: "Pineapple Burst Zobo",
    description:
      "A vibrant blend of premium hibiscus infusion and sweet pineapple, bursting with tropical freshness in every sip.",
    image: "/images/pineapple-hibiscus.jpg",
    sizes: [
      { size: "25cl", price: 500 },
      { size: "50cl", price: 1000 },
    ],
    tags: ["Best Seller", "Tropical"],
  },
  {
    slug: "citrus-orange-zobo",
    name: "Citrus Orange Zobo",
    description:
      "Bright citrus meets deep hibiscus florals for a crisp, refreshing drink that awakens the senses.",
    image: "/images/lemon-hibiscus.jpg",
    sizes: [
      { size: "25cl", price: 500 },
      { size: "50cl", price: 1000 },
    ],
    tags: ["Citrus", "Refreshing"],
  },
  {
    slug: "sugar-free-wellness-zobo",
    name: "Sugar Free Wellness Blend Zobo",
    description:
      "All the rich hibiscus flavor you love, naturally sweetened and crafted for a healthier lifestyle.",
    image: "/images/sugar-free-hibiscus.jpg",
    sizes: [
      { size: "25cl", price: 500 },
      { size: "50cl", price: 1000 },
    ],
    tags: ["Wellness", "No Added Sugar"],
  },
  {
    slug: "tigernut-zobo-mix",
    name: "Tigernut Zobo Mix",
    description:
      "A rich, creamy twist on the classic — tigernut blended with hibiscus for a uniquely indulgent taste.",
    image: "/images/tigernut-hibiscus.jpg",
    sizes: [
      { size: "25cl", price: 500 },
      { size: "50cl", price: 1000 },
    ],
    tags: ["Signature", "Creamy"],
  },
];

export const whyChooseUs = [
  {
    title: "Freshly Made",
    description: "Every bottle is prepared in small batches to guarantee peak freshness.",
  },
  {
    title: "Premium Ingredients",
    description: "We source only the finest hibiscus, fruits, and natural extracts.",
  },
  {
    title: "Naturally Refreshing",
    description: "No shortcuts — just real flavor from real ingredients.",
  },
  {
    title: "No Artificial Preservatives",
    description: "Pure, clean drinks you can feel good about serving your family.",
  },
  {
    title: "Event Ready",
    description: "Bulk orders and catering packages for any occasion, large or small.",
  },
  {
    title: "Excellent Customer Service",
    description: "Friendly, responsive support from order to delivery.",
  },
];

export const testimonials = [
  {
    name: "Amaka O.",
    role: "Wedding Client, Abuja",
    quote:
      "Our guests could not stop talking about the hibiscus drinks at our wedding. So refreshing and beautifully presented!",
    rating: 5,
  },
  {
    name: "Ibrahim S.",
    role: "Corporate Event Organizer",
    quote:
      "We ordered for a 200-person conference and the team delivered on time with excellent quality. Highly recommend.",
    rating: 5,
  },
  {
    name: "Funmilayo A.",
    role: "Regular Customer",
    quote:
      "The tigernut hibiscus is my favorite. It tastes premium and you can tell it's made with real care.",
    rating: 5,
  },
  {
    name: "David E.",
    role: "Birthday Celebration Host",
    quote:
      "Ordering was so easy through WhatsApp, and the drinks were a huge hit at my daughter's birthday party.",
    rating: 5,
  },
];

export const eventTypes = [
  "Weddings",
  "Corporate Events",
  "Birthday Parties",
  "Conferences",
  "Religious Gatherings",
  "School Events",
  "Outdoor Events",
];

export const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our products, select your preferred drink, size, and quantity, then click the WhatsApp order button. Your order details will be pre-filled in a WhatsApp message for quick confirmation.",
  },
  {
    question: "Do you deliver outside Bwari, Abuja?",
    answer:
      "Yes, we deliver across Abuja. Delivery fees may vary depending on location. Please contact us via WhatsApp for delivery details to your area.",
  },
  {
    question: "Can I order for a large event?",
    answer:
      "Absolutely. We offer bulk ordering and full catering packages for weddings, corporate events, conferences, and more. Use our Catering & Events page to request a quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer via Moniepoint. Payment details are shared after your order is submitted. Please send proof of payment via WhatsApp to confirm your order.",
  },
  {
    question: "Are your drinks sugar-free or made with natural ingredients?",
    answer:
      "Yes. We offer a dedicated Sugar Free Wellness Blend Zobo, and all our drinks are made with premium natural ingredients and no artificial preservatives.",
  },
  {
    question: "How far in advance should I order for an event?",
    answer:
      "We recommend placing event and catering orders at least 3-5 days in advance to ensure freshness and availability, especially for large quantities.",
  },
];
