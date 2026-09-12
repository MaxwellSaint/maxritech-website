import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

const cases = [
  {
    id: "01",
    tag: "Government — Ghana",
    client: "Government Agency, Accra",
    title: "Appointment Management System",
    subtitle: "Separating visitors from clients. Saving time. Saving money.",
    status: "Delivered",
    statusColor: "text-blue-400",
    duration: "1 Week",
    team: "MaxRi Tech Team",
    stack: ["React", "Vite", "Tailwind CSS", "PostgreSQL", "AI Integration"],
    url: "nia-ams.gov.gh/dashboard",
    images: [
      "/portfolio/ams-login.png",
      "/portfolio/ams-admin.png",
      "/portfolio/ams-frontdesk.png",
      "/portfolio/ams-secretary.png",
      "/portfolio/ams-security.png",
    ],
    slideLabels: ["Login", "Admin", "Front Desk", "Secretary", "Security"],
    problem: {
      heading: "The Problem",
      body: "The institution had a single queue system where visitors coming to see top management and clients coming for client-related business were all lumped together. Staff had no reliable way to differentiate between them. A visitor with a scheduled appointment to see a director would wait alongside walk-in clients with no appointment, creating confusion, delays, and a poor experience for everyone. Appointment records were scattered and unreliable. Management had no visibility into who was coming, when, or why.",
    },
    solution: {
      heading: "The Solution",
      body: "MaxRi built a dedicated Appointment Management System that completely separates the two flows. Visitors coming to see management are handled through a structured, role-based appointment pipeline — booked, approved, tracked, and logged independently of the client queue. The system features five role-based dashboards: Admin, Front Desk, Secretary, Management, and Security. Each role sees only what they need. Front desk books the visitor. The secretary reviews and approves. Management sees their schedule. Security logs entry and exit in real time. Nobody is in the wrong queue ever again.",
    },
    results: [
      { metric: "Queue Separation", detail: "Visitors and clients no longer share the same queue — zero confusion" },
      { metric: "Appointment Clarity", detail: "Every appointment is logged, tracked, and visible to the right person" },
      { metric: "Cost Reduction", detail: "Faster processing means less staff time wasted on manual sorting" },
      { metric: "1 Week Delivery", detail: "Full system designed, built, and delivered in 7 days with AI integration" },
      { metric: "5 Role Dashboards", detail: "Admin, Front Desk, Secretary, Management, and Security — each purpose-built" },
      { metric: "Real-Time Security Log", detail: "Every visitor entry and exit tracked live with flagging capability" },
    ],
    quote: {
      text: "Professional process and relentlessly on schedule. Our appointment management system shipped under budget without any issues from their team.",
      author: "Dr. Bedzra",
      role: "Deputy Executive Secretary, NIA",
    },
  },
  {
    id: "02",
    tag: "Desktop ERP — Cold Storage",
    client: "Confidential Client, Ghana",
    title: "ColdStore ERP",
    subtitle: "From handwritten sales books to a fully digital enterprise system. In one week.",
    status: "Live",
    statusColor: "text-green-500",
    duration: "1 Week",
    team: "MaxRi Tech Team",
    stack: ["React", "Electron", "PostgreSQL", "Tailwind CSS"],
    url: "ColdStore ERP — Desktop Application",
    images: [
      "/portfolio/coldstore-pos.png",
      "/portfolio/coldstore-users.png",
      "/portfolio/coldstore-audit.png",
      "/portfolio/coldstore-config.png",
    ],
    slideLabels: ["Point of Sale", "User Management", "Audit Log", "System Config"],
    problem: {
      heading: "The Problem",
      body: "The business was running its entire operation on handwritten books. Every sale was recorded manually — no receipts, no running totals, no stock tracking. At the end of each day staff had to manually count and reconcile everything by hand, which was slow, error-prone, and impossible to audit. Stock levels were unknown until something ran out. There was no way to tell which products were selling, which weren't, or whether staff records matched actual sales. The business was flying blind.",
    },
    solution: {
      heading: "The Solution",
      body: "MaxRi built ColdStore ERP — a full desktop enterprise resource planning system tailored specifically for cold storage retail. The Point of Sale module handles all transactions with real-time receipt generation. Inventory tracking shows live stock levels for every product across every category. The End of Day module generates automatic sales summaries and reconciliation reports. User management controls staff access by role — administrators see everything, sales agents see only what they need. A complete audit log records every action in the system so nothing is ever lost or disputed. System configuration lets the owner set store details, tax rates, currency, and receipt messages without touching any code.",
    },
    results: [
      { metric: "Sales Recording", detail: "Every sale captured digitally in real time — handwritten books eliminated entirely" },
      { metric: "Faster Checkout", detail: "Products searchable by name and category — no more flipping through books" },
      { metric: "Stock Tracking", detail: "Live inventory levels across all products — out-of-stock flagged automatically" },
      { metric: "Error Reduction", detail: "Automatic calculations replace manual arithmetic — no more reconciliation errors" },
      { metric: "Audit Trail", detail: "Every transaction, every user action logged with timestamp and details" },
      { metric: "1 Week Delivery", detail: "Full ERP system built and deployed in 7 days" },
    ],
    quote: null,
  },
];

function BrowserMockup({ images, slideLabels, url }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full rounded overflow-hidden border border-zinc-700 shadow-2xl shadow-black/80">
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-3 border-b border-zinc-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-zinc-900 rounded px-3 py-1 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-zinc-400 text-xs truncate">{url}</span>
        </div>
        <span className="text-zinc-500 text-xs tracking-widest uppercase flex-shrink-0">
          {slideLabels?.[current] || `Screen ${current + 1}`}
        </span>
      </div>
      <div className="relative bg-zinc-950 overflow-hidden" style={{ height: "320px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Screen ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className="bg-zinc-800 py-3 flex justify-center gap-2 border-t border-zinc-700">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-4 h-1.5 bg-red-600" : "w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Case Studies — MaxRi Tech Solutions</title>
        <meta name="description" content="Deep dives into how MaxRi Tech Solutions builds enterprise systems — real problems, real solutions, real results." />
        <meta property="og:title" content="Case Studies — MaxRi Tech Solutions" />
        <meta property="og:url" content="https://maxritech.com/case-studies" />
        <link rel="canonical" href="https://maxritech.com/case-studies" />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.6em] text-zinc-300 uppercase mb-6">
          Case Studies — How We Build
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8 font-serif">
          Real Problems.<br />
          <span className="text-red-600 italic">Real Solutions.</span>
        </h1>
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
          We don't just ship code. We solve problems that cost organisations time and money every single day.
          Here's exactly how we do it.
        </p>
      </section>

      {/* Case Studies */}
      {cases.map((cs, idx) => (
        <article key={idx} className="border-b border-zinc-900">

          {/* Case Header */}
          <div className="max-w-7xl mx-auto px-6 py-16 border-b border-zinc-900">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <p className="text-xs tracking-widest text-zinc-600 uppercase mb-2">{cs.tag}</p>
                <p className="text-xs tracking-widest text-zinc-700 uppercase mb-4">{cs.client}</p>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-serif mb-3">
                  {cs.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  {cs.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <span className={`text-xs tracking-widest uppercase ${cs.statusColor}`}>● {cs.status}</span>
                <span className="text-zinc-600 text-xs tracking-widest uppercase">⏱ {cs.duration}</span>
                <span className="text-zinc-600 text-xs tracking-widest uppercase">👥 {cs.team}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((s, i) => (
                <span key={i} className="text-xs tracking-widest uppercase border border-zinc-800 text-zinc-500 px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Problem + Mockup */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-zinc-900">
            <div className="flex flex-col justify-center">
              <div className="w-8 h-0.5 bg-red-600 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6 font-serif">
                {cs.problem.heading}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {cs.problem.body}
              </p>
            </div>
            <div className="flex items-center">
              <BrowserMockup images={cs.images} slideLabels={cs.slideLabels} url={cs.url} />
            </div>
          </div>

          {/* Solution + Results */}
          <div className="max-w-7xl mx-auto px-6 py-16 border-b border-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="w-8 h-0.5 bg-red-600 mb-6" />
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6 font-serif">
                  {cs.solution.heading}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {cs.solution.body}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {cs.results.map((r, i) => (
                  <div key={i} className="border border-zinc-900 p-4 hover:bg-zinc-950 transition-colors duration-200">
                    <p className="text-red-600 text-xs tracking-widest uppercase font-black mb-1">{r.metric}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote if exists */}
          {cs.quote && (
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="border-l-4 border-red-600 pl-8 max-w-3xl">
                <p className="text-zinc-300 text-lg md:text-xl leading-relaxed italic mb-6">
                  &ldquo;{cs.quote.text}&rdquo;
                </p>
                <div className="w-6 h-0.5 bg-red-600 mb-4" />
                <p className="text-red-600 text-xs tracking-widest uppercase font-black">{cs.quote.author}</p>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1">{cs.quote.role}</p>
              </div>
            </div>
          )}

        </article>
      ))}

      {/* More Coming */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">More Coming</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-serif">
            More Case Studies<br />
            <span className="text-red-600 italic">In Progress</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mb-10">
            The Canadian corporate platform and blockchain infrastructure case studies are being documented. Check back soon.
          </p>
          <Link
            to="/portfolio"
            className="inline-block border border-zinc-700 text-white px-8 py-4 text-xs tracking-widest uppercase font-black hover:border-white transition-colors duration-200"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-serif">
            Have a Problem<br />
            <span className="text-red-600 italic">Worth Solving?</span>
          </h2>
          <p className="text-zinc-500 text-sm tracking-wider mb-10">
            Tell us what's broken and we'll tell you how we'd fix it.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-12 py-4 text-xs tracking-widest uppercase font-black hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            Start a Mission
          </Link>
        </div>
      </section>

    </div>
  );
}