import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-black px-6 py-24 md:py-36 max-w-7xl mx-auto">
      <p className="text-zinc-300 text-xs tracking-[0.4em] uppercase mb-6">
        MaxRi Tech Solutions — Ghana · Europe · North America
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-8">
        <span className="text-white">Building </span>
        <span className="text-red-600 italic">Beyond</span>
        <br />
        <span className="text-white">Tomorrow</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mb-12">
        We engineer precision-grade digital products for enterprises across Ghana,
        Europe, and North America. Government systems, enterprise platforms,
        blockchain infrastructure — built to global standards from Accra.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/contact"
          className="px-8 py-4 bg-red-600 text-white text-xs tracking-widest uppercase font-black hover:bg-red-700 transition-all duration-200 text-center"
        >
          Start a Mission
        </Link>
        <Link
          to="/portfolio"
          className="px-8 py-4 border border-zinc-700 text-white text-xs tracking-widest uppercase font-black hover:border-white transition-all duration-200 text-center"
        >
          See Our Work
        </Link>
      </div>
    </section>
  );
}

// ── STATS ─────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { number: "5", suffix: "+", label: "Enterprise Clients" },
    { number: "3", suffix: "", label: "Countries Served" },
    { number: "7", suffix: "+", label: "Products Shipped" },
    { number: "24/7", suffix: "", label: "Platform Support" },
  ];
  return (
    <section className="bg-black border-t border-b border-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-10 px-4 border-r border-zinc-950 last:border-r-0 odd:border-r even:md:border-r"
          >
            <p className="text-4xl md:text-5xl font-black text-white leading-none">
              {stat.number}
              <span className="text-red-600">{stat.suffix}</span>
            </p>
            <p className="text-zinc-400 text-xs tracking-widest uppercase mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── BROWSER MOCKUP SLIDESHOW ───────────────────────────────────────────────────
function BrowserMockup({ images, title, url }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-zinc-950 shadow-2xl shadow-black/60">
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-3 border-b border-zinc-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-zinc-950 rounded px-3 py-1 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-zinc-400 text-xs tracking-wide truncate">
            {url || "app.maxritech.com"}
          </span>
        </div>
      </div>
      <div className="relative bg-zinc-950 overflow-hidden" style={{ height: "300px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} screen ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="bg-zinc-700 py-3 flex justify-center gap-2 border-t border-zinc-950">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-4 h-1.5 bg-red-600"
                  : "w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── FEATURED WORK ─────────────────────────────────────────────────────────────
function FeaturedWork() {
  const works = [
    {
      tag: "Government System — Ghana",
      title: "Appointment Management System",
      description:
        "Multi-role visitor and appointment management platform engineered for a Ghana government agency. Five role-based dashboards, real-time internal messaging, session security, and government-grade authentication — delivered on time and under budget.",
      images: [
        "/portfolio/ams-login.png",
        "/portfolio/ams-admin.png",
        "/portfolio/ams-frontdesk.png",
        "/portfolio/ams-secretary.png",
        "/portfolio/ams-security.png",
      ],
      url: "nia-ams.gov.gh/dashboard",
      status: "Delivered",
      statusColor: "text-blue-400",
      tech: ["React", "Vite", "Tailwind", "FastAPI", "PostgreSQL"],
      useMockup: true,
      caseStudy: "/case-studies",
    },
    {
      tag: "Desktop ERP — Cold Storage",
      title: "ColdStore ERP",
      description:
        "A full enterprise resource planning system for a cold storage business — Point of Sale, real-time inventory tracking, end-of-day reporting, audit logs, user management, and system configuration. Replaced a manual book-based sales recording process entirely.",
      images: [
        "/portfolio/coldstore-pos.png",
        "/portfolio/coldstore-users.png",
        "/portfolio/coldstore-audit.png",
        "/portfolio/coldstore-config.png",
      ],
      url: "coldstore-erp / desktop app",
      status: "Live",
      statusColor: "text-green-500",
      tech: ["React", "Electron", "PostgreSQL", "Tailwind"],
      useMockup: true,
      caseStudy: "/case-studies",
    },
    {
      tag: "International — Canada",
      title: "Canadian Corporate Website",
      description:
        "Premium corporate site built to international standards for a Canadian enterprise client — mobile-first layout, fast CDN delivery, and polished brand execution that competes on the global stage.",
      images: [],
      url: null,
      status: "Live",
      statusColor: "text-green-500",
      tech: ["React", "Tailwind", "Netlify"],
      useMockup: false,
      caseStudy: null,
    },
  ];

  return (
    <section className="bg-black border-t border-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-serif">
              What We've Built
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:block text-xs tracking-widest uppercase text-zinc-500 hover:text-white transition-colors duration-200"
          >
            All Projects →
          </Link>
        </div>

        <div className="flex flex-col border-t border-zinc-950">
          {works.map((work, i) => (
            <div
              key={i}
              className="border-b border-zinc-900 grid grid-cols-1 md:grid-cols-2 hover:bg-zinc-950 transition-colors duration-200"
            >
              {/* Visual side */}
              <div
                className={`p-6 md:p-10 bg-zinc-950 flex items-center justify-center ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                {work.useMockup && work.images.length > 0 ? (
                  <BrowserMockup images={work.images} title={work.title} url={work.url} />
                ) : work.images.length > 0 ? (
                  <img
                    src={work.images[0]}
                    alt={work.title}
                    className="w-full h-64 object-cover object-top rounded"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center">
                    <span className="text-8xl font-black text-zinc-950 font-serif select-none">
                      0{i + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Content side */}
              <div
                className={`p-8 md:p-12 flex flex-col justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-xs tracking-widest text-zinc-500 uppercase mb-4">
                  {work.tag}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 font-serif">
                  {work.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs tracking-widest uppercase text-zinc-500 border border-zinc-950 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                  <span className={`text-xs tracking-widest uppercase ${work.statusColor}`}>
                    ● {work.status}
                  </span>
                  <div className="flex items-center gap-4">
                    {work.caseStudy && (
                      <Link
                        to={work.caseStudy}
                        className="text-xs tracking-widest uppercase text-red-600 hover:text-white transition-colors duration-200"
                      >
                        Case Study →
                      </Link>
                    )}
                    <Link
                      to="/portfolio"
                      className="text-xs tracking-widest uppercase text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      All Work →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote: "Professional process and relentlessly on schedule. Our appointment management system shipped under budget without any issues from their team.",
      name: "Dr. Bedzra",
      role: "Deputy Executive Secretary, NIA",
    },
    {
      quote: "MaxRiTech transformed our entire digital operation. The website they built doubled our inbound reach within 30 days of launch.",
      name: "Mr & Mrs Kwansh",
      role: "CEO, SugarFix Cafe",
    },
    {
      quote: "Their security team uncovered vulnerabilities no one else had spotted. I trust them with our entire infrastructure.",
      name: "Lt. Larbi",
      role: "CTO",
    },
  ];
  return (
    <section className="bg-black border-t border-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
          Client Voices
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-12 font-serif">
          Trusted by Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-950">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border-b border-r border-zinc-950 p-6 md:p-8 flex flex-col justify-between gap-8 hover:bg-zinc-950 transition-colors duration-200"
            >
              <p className="text-zinc-400 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="w-6 h-0.5 bg-red-600 mb-4" />
                <p className="text-red-600 text-xs tracking-widest uppercase font-bold">
                  {t.name}
                </p>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SERVICES ──────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    { tag: "Dev", title: "Web Development", description: "Fast, scalable websites and web applications engineered to perform at any scale." },
    { tag: "Mobile", title: "Mobile Apps", description: "Designed for native performance across iOS and Android mobile ecosystems." },
    { tag: "Sec", title: "Cybersecurity", description: "Audit, fortify and harden your digital infrastructure against threats." },
    { tag: "Cloud", title: "Cloud Solutions", description: "Scalable cloud infrastructure that evolves and adapts with your legacy systems." },
    { tag: "AI", title: "AI & Automation", description: "Intelligent process automation with AI integration to modernise any workflow." },
    { tag: "IT", title: "IT Support", description: "24/7 technical support and system maintenance for your infrastructure." },
  ];
  return (
    <section className="bg-black border-t border-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white font-serif">
              Core Services
            </h2>
          </div>
          <span className="text-zinc-400 text-xs tracking-widest uppercase hidden md:block">
            Full Stack · End to End
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-950">
          {services.map((service, i) => (
            <div
              key={i}
              className="border-b border-r border-zinc-950 p-6 md:p-8 hover:bg-zinc-950 transition-colors duration-200"
            >
              <p className="text-red-700 text-xs tracking-widest uppercase mb-3">
                {service.tag}
              </p>
              <div className="w-6 h-0.5 bg-zinc-950 mb-4" />
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FEATURES ──────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      eyebrow: "Architecture",
      ghost: "WEB",
      title: "Modern Web\nInterfaces",
      description: "Modular engines and experiences that prioritise speed, structure, and seamless interaction.",
      link: "Explore Platform",
      to: "/architecture",
      align: "left",
    },
    {
      eyebrow: "Mobile",
      ghost: "APP",
      title: "Mobile\nEcosystems",
      description: "Native performance tailored for the modern multiscreen: iOS and Android — built to scale from day one.",
      link: "View Ecosystem",
      to: "/systems",
      align: "right",
    },
    {
      eyebrow: "Security",
      ghost: "SEC",
      title: "Cyber\nDefense",
      description: "Enterprise-grade security audits, penetration testing and real-time threat monitoring for your infrastructure.",
      link: "Mission Brief",
      to: "/contact",
      align: "left",
    },
  ];
  return (
    <section className="bg-black">
      {features.map((feature, i) => (
        <div key={i} className="relative border-t border-zinc-950 overflow-hidden">
          <span
            className={`absolute top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-zinc-800 leading-none select-none pointer-events-none ${
              feature.align === "right" ? "left-4" : "right-4"
            }`}
          >
            {feature.ghost}
          </span>
          <div
            className={`relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 ${
              feature.align === "right"
                ? "flex flex-col items-start md:items-end md:text-right"
                : "flex flex-col items-start"
            }`}
          >
            <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-3">
              {feature.eyebrow}
            </p>
            <div className="w-8 h-0.5 bg-red-600 mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-white mb-5 whitespace-pre-line">
              {feature.title}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-8">
              {feature.description}
            </p>
            <Link
              to={feature.to}
              className="text-red-600 text-xs tracking-widest uppercase font-semibold hover:text-white transition-colors duration-200"
            >
              {feature.link} →
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-black border-t border-zinc-950 py-28 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-6">
          Ready to Build
        </p>
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-serif">
          Let's Build Something<br />
          <span className="text-red-800 italic">The World Will Notice</span>
        </h2>
        <p className="text-zinc-500 text-sm tracking-wider mb-10 max-w-lg mx-auto">
          From a rough idea to a deployed enterprise product — we take it all the way.
          Tell us what you're building.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-black px-12 py-4 text-xs tracking-widest uppercase font-black hover:bg-red-600 hover:text-white transition-colors duration-200"
        >
          Start a Mission
        </Link>
      </div>
    </section>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Helmet>
        <title>MaxRi Tech Solutions — World-Class Digital Infrastructure</title>
        <meta name="description" content="MaxRi Tech Solutions delivers precision-engineered digital products and infrastructure to enterprises across Ghana, Europe, and North America." />
        <meta property="og:title" content="MaxRi Tech Solutions" />
        <meta property="og:url" content="https://maxritech.com" />
        <link rel="canonical" href="https://maxritech.com" />
      </Helmet>
      <main className="bg-black min-h-screen">
        <Hero />
        <Stats />
        <FeaturedWork />
        <Testimonials />
        <Services />
        <Features />
        <CTA />
      </main>
    </>
  );
}