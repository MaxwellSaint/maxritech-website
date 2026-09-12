import { useState } from "react";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    num: "01",
    type: "Web Platform — Government",
    title: "Appointment Management System",
    description:
      "A multi-role visitor and appointment management platform built for a Ghana government agency. Features 5 role-based dashboards (Admin, Front Desk, Secretary, Management, Security), real-time messaging, session timeout security, and government-grade authentication.",
    status: "live",
    statusLabel: "Delivered",
    category: "web",
    images: [
      "/portfolio/ams-login.png",
      "/portfolio/ams-admin.png",
      "/portfolio/ams-frontdesk.png",
      "/portfolio/ams-secretary.png",
      "/portfolio/ams-security.png",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: "02",
    type: "Desktop ERP — Cold Storage",
    title: "ColdStore ERP",
    description:
      "A full enterprise resource planning system for a cold storage business — Point of Sale, real-time inventory tracking, end-of-day reporting, audit logs, user management, and system configuration. Replaced a manual book-based sales recording process entirely.",
    status: "live",
    statusLabel: "Live",
    category: "web",
    images: [
      "/portfolio/coldstore-pos.png",
      "/portfolio/coldstore-users.png",
      "/portfolio/coldstore-audit.png",
      "/portfolio/coldstore-config.png",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "03",
    type: "International — Canada",
    title: "Canadian Corporate Website",
    description:
      "Premium corporate site built to international standards with mobile-first layout, fast CDN delivery, and polished brand execution for a Canadian enterprise client.",
    status: "live",
    statusLabel: "Live",
    category: "web",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "04",
    type: "LMS — Web",
    title: "Learning Management System",
    description:
      "Full LMS with course builder, video lessons, student enrollment, progress tracking, quizzes, and auto-certification — built for educational institutions and corporate training.",
    status: "live",
    statusLabel: "Live",
    category: "web",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    num: "05",
    type: "Web — Finance",
    title: "Report Management System",
    description:
      "Automated reporting infrastructure with scheduled generation, multi-format export, role-based access control, and full audit trail logging for financial enterprises.",
    status: "live",
    statusLabel: "Live",
    category: "web",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: "06",
    type: "Web3 — Blockchain",
    title: "Blockchain Infrastructure",
    description:
      "Smart contract development and decentralised application architecture — tamper-proof record systems built on Ethereum and deployed for enterprise clients requiring verifiable data integrity.",
    status: "live",
    statusLabel: "Live",
    category: "web",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    num: "07",
    type: "Mobile Apps",
    title: "Mobile App Suite",
    description:
      "Multiple cross-platform mobile applications delivered for clients — covering productivity, service booking, and business management use cases across iOS and Android.",
    status: "progress",
    statusLabel: "In Progress",
    category: "mobile",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    num: "08",
    type: "E-Commerce",
    title: "E-Commerce Platforms",
    description:
      "Full-featured online stores with inventory management, payment gateway integration, order tracking, and analytics dashboards — built for retail and wholesale clients.",
    status: "live",
    statusLabel: "Live",
    category: "web",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    num: "09",
    type: "Cybersecurity",
    title: "Security & Infrastructure",
    description:
      "Ongoing cybersecurity audits, penetration testing, and infrastructure hardening engagements for enterprise clients across the financial, healthcare, and commercial sectors.",
    status: "ongoing",
    statusLabel: "Ongoing",
    category: "web",
    images: [],
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const rd = [
  {
    id: "R01",
    title: "ElectVote — Ghana Election Platform",
    description:
      "A secure, transparent digital election infrastructure system for Ghana — real-time results, verified voter authentication, and tamper-proof data architecture built to international electoral standards.",
  },
  {
    id: "R02",
    title: "WorkFlow — Job Finder App",
    description:
      "A smart job-matching platform connecting African talent to local and global opportunities — powered by AI-driven matching, verified employer profiles, and real-time alerts across mobile and web.",
  },
];

const filters = ["All Work", "Web", "Mobile", "In Progress"];

function ProjectCard({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  const statusColor = (status) => {
    if (status === "live") return "text-green-500";
    if (status === "progress") return "text-amber-500";
    if (status === "ongoing") return "text-blue-400";
    return "text-zinc-500";
  };

  return (
    <div className="border-b border-r border-zinc-900 flex flex-col hover:bg-zinc-950 transition-colors duration-200">
      <div className="h-44 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        {hasImages ? (
          <>
            <img
              src={project.images[imgIndex]}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            {project.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      i === imgIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <span className="text-7xl font-black text-zinc-900 font-serif select-none">
            {project.num}
          </span>
        )}
        <div className="absolute top-3 right-3 w-8 h-8 border border-red-900 bg-black flex items-center justify-center">
          {project.icon}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-xs tracking-widest text-zinc-600 uppercase">
          {project.type}
        </p>
        <h3 className="text-white text-sm font-black uppercase tracking-wide leading-tight">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
          <span className={`text-xs tracking-widest uppercase ${statusColor(project.status)}`}>
            ● {project.statusLabel}
          </span>
          <span className="text-zinc-600 text-sm">→</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All Work");

  const filtered = projects.filter((p) => {
    if (active === "All Work") return true;
    if (active === "Web") return p.category === "web";
    if (active === "Mobile") return p.category === "mobile";
    if (active === "In Progress") return p.status === "progress";
    return true;
  });

  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Portfolio — MaxRi Tech Solutions</title>
        <meta name="description" content="Explore MaxRi Tech Solutions' portfolio — enterprise platforms, government systems, blockchain, e-commerce, and more built for clients across Africa, Canada, and the UK." />
        <meta property="og:title" content="Portfolio — MaxRi Tech Solutions" />
        <meta property="og:url" content="https://maxritech.com/portfolio" />
        <link rel="canonical" href="https://maxritech.com/portfolio" />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.6em] text-zinc-300 uppercase mb-6">
          Our Work — Delivered
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8 font-serif">
          Built for<br />
          <span className="text-red-600 italic">Impact</span>
        </h1>
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
          From enterprise platforms to government systems — every project
          we ship raises the bar for what technology can do in Africa, the UK,
          Canada, and beyond.
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

      {/* Projects Grid */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-12">
            {filtered.length} Projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-900">
            {filtered.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* R&D Pipeline */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-800" />
            <p className="text-xs tracking-widest text-red-800 uppercase">
              Active R&D — Launching Soon
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-serif">
            Beyond the Horizon
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-12">
            MaxRi is not just building for today. These breakthrough projects
            are currently in deep research and development — each one positioned to
            redefine an industry in Africa and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-900">
            {rd.map((item, i) => (
              <div key={i} className="border-b border-r border-zinc-900 p-6 bg-zinc-950">
                <p className="text-xs tracking-widest text-red-800 uppercase mb-4">
                  {item.id}
                </p>
                <div className="w-5 h-0.5 bg-red-600 mb-4" />
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-serif">
            Have a Project<br />
            <span className="text-red-600 italic">In Mind?</span>
          </h2>
          <p className="text-zinc-400 text-sm tracking-wider mb-10">
            We turn complex ideas into world-class digital products. Let's talk.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-10 py-4 text-xs tracking-widest uppercase font-black hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            Start a Mission
          </a>
        </div>
      </section>

    </div>
  );
}