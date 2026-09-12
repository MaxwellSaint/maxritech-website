import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    category: "web",
    tag: "Web Platform — Government",
    name: "Appointment Management System",
    description:
      "A multi-role visitor and appointment management platform. Separates visitor queues from client queues — five role-based dashboards (Admin, Front Desk, Secretary, Management, Security), real-time messaging, session security, and government-grade authentication.",
    features: ["5 Role Dashboards", "Real-Time Messaging", "Session Security", "Appointment Tracking", "Visitor Log", "AI Integration"],
    price: "Request a Quote",
    status: "available",
    badge: null,
  },
  {
    id: 2,
    category: "desktop",
    tag: "Desktop ERP",
    name: "ColdStore ERP",
    description:
      "A full enterprise resource planning system for cold storage and retail businesses. Point of Sale, real-time inventory tracking, end-of-day reporting, audit logs, user management, and system configuration. Replaces manual book-based recording entirely.",
    features: ["Point of Sale", "Inventory Tracking", "End of Day Reports", "Audit Log", "User Management", "System Config"],
    price: "Request a Quote",
    status: "available",
    badge: "New",
  },
  {
    id: 3,
    category: "web",
    tag: "Web Platform",
    name: "Learning Management System",
    description:
      "A complete LMS built for schools, universities, and corporate training. Course builder, video lessons, student enrollment, progress tracking, quizzes, and auto-certification — all in one platform.",
    features: ["Course Builder", "Video Lessons", "Auto Certification", "Progress Tracking", "Quiz Engine", "Multi-Role Access"],
    price: "Request a Quote",
    status: "available",
    badge: null,
  },
  {
    id: 4,
    category: "web",
    tag: "Web Platform",
    name: "Report Management System",
    description:
      "Automated reporting infrastructure for enterprises. Scheduled generation, multi-format export, role-based access control, and full audit trail logging built for finance and compliance teams.",
    features: ["Auto Scheduling", "PDF & Excel Export", "Role-Based Access", "Audit Trail", "Dashboard Analytics", "Multi-Department"],
    price: "Request a Quote",
    status: "available",
    badge: null,
  },
  {
    id: 5,
    category: "web",
    tag: "E-Commerce",
    name: "E-Commerce Platform",
    description:
      "Full-featured online store with inventory management, payment gateway integration, order tracking, and analytics dashboards. Built for retail and wholesale businesses ready to sell online.",
    features: ["Product Catalog", "Paystack & Stripe", "Order Tracking", "Inventory Mgmt", "Customer Portal", "Sales Analytics"],
    price: "Request a Quote",
    status: "available",
    badge: "Popular",
  },
  {
    id: 6,
    category: "web",
    tag: "Web3 — Blockchain",
    name: "Blockchain Solution",
    description:
      "Smart contract development, tokenisation, and decentralised application architecture. Tamper-proof record systems built on proven Web3 infrastructure for enterprises requiring verifiable data integrity.",
    features: ["Smart Contracts", "Tokenisation", "DApp Development", "Tamper-Proof Records", "Web3 Integration", "Audit Trail"],
    price: "Request a Quote",
    status: "available",
    badge: null,
  },
  {
    id: 7,
    category: "mobile",
    tag: "Mobile App",
    name: "Custom Mobile App",
    description:
      "Native-performance iOS and Android applications. Single codebase, full platform coverage, app store ready. Covers productivity, service booking, and business management use cases.",
    features: ["iOS & Android", "Push Notifications", "Offline Mode", "App Store Ready", "API Integration", "Analytics"],
    price: "Request a Quote",
    status: "available",
    badge: null,
  },
  {
    id: 8,
    category: "merch",
    tag: "MaxRi Merch",
    name: "MaxRi T-Shirt",
    description:
      "Premium quality MaxRi Tech branded t-shirt. Clean, bold, and built to make a statement. Wear the brand that is building Africa's digital future.",
    features: ["Premium Cotton", "MaxRi Logo", "Multiple Sizes", "Limited Edition"],
    price: "Coming Soon",
    status: "coming_soon",
    badge: "Soon",
  },
  {
    id: 9,
    category: "merch",
    tag: "MaxRi Merch",
    name: "MaxRi Cap",
    description:
      "Structured snapback cap with the MaxRi shield logo embroidered on the front. Built for the boardroom and the street.",
    features: ["Embroidered Logo", "Snapback", "One Size Fits All", "Limited Edition"],
    price: "Coming Soon",
    status: "coming_soon",
    badge: "Soon",
  },
  {
    id: 10,
    category: "merch",
    tag: "MaxRi Merch",
    name: "MaxRi Socks & Belt",
    description:
      "Complete the look. MaxRi branded socks and belt — understated, premium, and built for those who know. Details matter.",
    features: ["MaxRi Logo", "Premium Quality", "Limited Edition", "Gift Ready"],
    price: "Coming Soon",
    status: "coming_soon",
    badge: "Soon",
  },
];

const filters = ["All", "Web Apps", "Desktop", "Mobile", "Merch"];

const categoryMap = {
  "All": null,
  "Web Apps": "web",
  "Desktop": "desktop",
  "Mobile": "mobile",
  "Merch": "merch",
};

export default function Products() {
  const [active, setActive] = useState("All");

  const filtered = products.filter((p) => {
    if (active === "All") return true;
    return p.category === categoryMap[active];
  });

  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.6em] text-zinc-300 uppercase mb-6">
          Shop — MaxRi Products
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8 font-serif">
          Built by MaxRi<br />
          <span className="text-red-600 italic">Owned by You</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
          Enterprise-grade software systems, desktop ERP solutions, mobile applications,
          and MaxRi branded gear — everything we build is engineered to global standards
          and ready to deploy for your business.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="border-b border-zinc-900 flex overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`flex-shrink-0 px-6 py-4 text-xs tracking-widest uppercase border-r border-zinc-900 transition-colors duration-200 ${
              active === f
                ? "text-white border-b-2 border-b-red-600"
                : "text-zinc-600 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-12">
            {filtered.length} Products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-900">
            {filtered.map((product) => (
              <div
                key={product.id}
                className={`border-b border-r border-zinc-900 flex flex-col transition-colors duration-200 ${
                  product.status === "coming_soon"
                    ? "opacity-70"
                    : "hover:bg-zinc-950"
                }`}
              >
                {/* Visual Header */}
                <div className="h-40 bg-zinc-950 flex items-center justify-center relative overflow-hidden border-b border-zinc-900">
                  <span className="text-6xl font-black text-zinc-800 font-serif select-none tracking-tight">
                    {product.name.slice(0, 2).toUpperCase()}
                  </span>
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-red-950 border border-red-900 px-2 py-1">
                      <span className="text-red-600 text-xs tracking-widest uppercase">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs tracking-widest uppercase px-2 py-1 border ${
                      product.status === "available"
                        ? "text-green-500 border-green-900"
                        : "text-zinc-600 border-zinc-700"
                    }`}>
                      {product.status === "available" ? "● Available" : "● Soon"}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-xs tracking-widest text-zinc-500 uppercase mb-2">
                      {product.tag}
                    </p>
                    <h3 className="text-white font-black text-base uppercase tracking-wide font-serif leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 uppercase"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-4">
                    <p className="text-white text-sm font-black uppercase tracking-wide">
                      {product.price}
                    </p>
                    {product.status === "available" ? (
                      <Link
                        to="/contact"
                        className="bg-white text-black text-xs tracking-widest uppercase font-black px-5 py-2.5 hover:bg-red-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
                      >
                        Get This →
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="border border-zinc-700 text-zinc-500 text-xs tracking-widest uppercase font-bold px-5 py-2.5 hover:border-zinc-400 hover:text-zinc-300 transition-colors duration-200 whitespace-nowrap"
                      >
                        Notify Me
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build Banner */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-zinc-800 bg-zinc-950 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-widest text-red-600 uppercase mb-3">
                Custom Builds
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-serif mb-3">
                Don't See What<br />
                <span className="text-red-600 italic">You Need?</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">
                Every system we sell started as a custom build for a client. If
                you have an idea — a platform, a tool, an app — we will engineer
                it from scratch to your exact specification. No templates. No
                shortcuts. Built to own.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 bg-white text-black px-10 py-4 text-xs tracking-widest uppercase font-black hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Start a Custom Build
            </Link>
          </div>
        </div>
      </section>

      {/* Merch Coming Soon Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-4">
            MaxRi Merch Store
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-serif">
            Wear the Brand That's<br />
            <span className="text-red-600 italic">Building the Future</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            T-shirts, caps, socks, belts — all MaxRi branded and built with the
            same standard we apply to our software. Premium quality. Limited
            runs. Launching soon.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-zinc-700 text-zinc-400 px-10 py-4 text-xs tracking-widest uppercase font-black hover:border-white hover:text-white transition-colors duration-200"
          >
            Notify Me When Live
          </Link>
        </div>
      </section>

    </div>
  );
}