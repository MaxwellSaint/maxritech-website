const pillars = [
  {
    num: "01",
    title: "Tech Stack",
    description:
      "We select technologies based on your project's specific needs — not trends. Every tool in our stack is battle-tested, scalable, and supported by a strong ecosystem.",
  },
  {
    num: "02",
    title: "System Design",
    description:
      "Before a single line of code, we design the full system — database schemas, API contracts, infrastructure topology, and security model — with precision.",
  },
  {
    num: "03",
    title: "Delivery Standard",
    description:
      "Every system we ship is mobile-first, CI/CD-deployed, containerised, and security-audited. No shortcuts. No compromises. Enterprise grade from day one.",
  },
];

const stackLayers = [
  {
    label: "Frontend",
    type: "Client Layer",
    techs: ["React", "Next.js", "React Native", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "Backend",
    type: "API Layer",
    techs: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    label: "Database",
    type: "Data Layer",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    label: "Infrastructure",
    type: "Cloud Layer",
    techs: ["AWS", "Google Cloud", "Docker", "Nginx", "Vercel"],
  },
  {
    label: "Security",
    type: "Protection Layer",
    techs: ["JWT Auth", "OAuth 2.0", "SSL/TLS", "OWASP", "Pen Testing"],
  },
  {
    label: "Blockchain",
    type: "Web3 Layer",
    techs: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "IPFS"],
  },
];

const process = [
  {
    phase: "Phase 01",
    title: "Discovery & Scoping",
    description:
      "We start by deeply understanding your business goals, users, and technical constraints. No assumptions, no guesswork — we document everything into a precise project brief before a single line of code is written.",
    duration: "1 – 2 Weeks",
  },
  {
    phase: "Phase 02",
    title: "Architecture Design",
    description:
      "Our engineers design the full system architecture — database schemas, API contracts, infrastructure topology, and security model. We choose the right stack for your specific needs, not a one-size-fits-all template.",
    duration: "1 – 2 Weeks",
  },
  {
    phase: "Phase 03",
    title: "UI / UX Design",
    description:
      "We craft pixel-precise wireframes and high-fidelity designs in Figma — validated with your team before development begins. Mobile-first by default, responsive across every screen size.",
    duration: "1 – 3 Weeks",
  },
  {
    phase: "Phase 04",
    title: "Agile Development",
    description:
      "Development runs in focused sprints with weekly demos and continuous client visibility. Frontend, backend, and mobile teams work in parallel — never sequentially. You see real progress every single week.",
    duration: "4 – 12 Weeks",
  },
  {
    phase: "Phase 05",
    title: "QA & Security Testing",
    description:
      "Every system undergoes rigorous automated and manual testing — unit tests, integration tests, performance benchmarks, and full security audits before anything touches production.",
    duration: "1 – 2 Weeks",
  },
  {
    phase: "Phase 06",
    title: "Deployment & Support",
    description:
      "We deploy to production via automated CI/CD pipelines with zero-downtime releases. Post-launch, our team provides monitoring, incident response, and continuous improvement on a retainer or on-demand basis.",
    duration: "Ongoing",
  },
];

const infrastructure = [
  {
    title: "Mobile-First Design",
    description:
      "Every interface is designed and tested on mobile before desktop. Responsive from 320px to 4K — no layout breaks, no overflow bugs.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Security by Design",
    description:
      "OWASP-compliant architecture. JWT authentication, data encryption at rest and in transit, role-based access control, and regular penetration testing.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "High Availability",
    description:
      "Auto-scaling cloud infrastructure with load balancing and multi-region failover — engineered for 99.9% uptime even under peak traffic.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Automated build, test, and deployment pipelines via GitHub Actions. Every commit is tested. Every release is traceable. Zero-downtime deployments as standard.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Scalable Data Layer",
    description:
      "PostgreSQL for relational integrity, Redis for caching, and object storage for assets — architected to handle millions of records without degradation.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "Containerised & Portable",
    description:
      "Docker-based deployments mean every environment — dev, staging, production — is identical. No 'works on my machine' problems, ever.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

const standards = [
  { value: "99", suffix: ".9%", label: "Uptime Target" },
  { value: "<", suffix: "2s", label: "Page Load Time" },
  { value: "100", suffix: "%", label: "Mobile-First Builds" },
  { value: "A", suffix: "+", label: "Security Rating" },
];

export default function Architecture() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.6em] text-zinc-300 uppercase mb-6">
          Architecture — How We Build
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8 font-serif">
          Engineered<br />
          for <span className="text-red-600 italic">Scale</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
          MaxRiTech builds on a battle-tested technical foundation — combining the right
          tools, disciplined process, and enterprise-grade infrastructure to deliver
          systems that never break under pressure.
        </p>
      </section>

      {/* Pillars */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="px-6 py-12 border-b md:border-b-0 md:border-r border-zinc-900 last:border-r-0 relative"
            >
              <span className="text-7xl font-black text-zinc-950 font-serif select-none absolute top-6 right-6 leading-none">
                {pillar.num}
              </span>
              <div className="w-6 h-0.5 bg-red-600 mb-5" />
              <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
            What We Build With
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            Our Tech Stack
          </h2>
          <div className="flex flex-col gap-px bg-zinc-900 border border-zinc-900">
            {stackLayers.map((layer, i) => (
              <div
                key={i}
                className="bg-black grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] min-h-[72px]"
              >
                <div className="px-4 py-5 border-r border-zinc-900 flex flex-col justify-center gap-1">
                  <p className="text-xs font-black tracking-widest uppercase text-zinc-600">
                    {layer.label}
                  </p>
                  <p className="text-xs tracking-widest text-zinc-600 uppercase">
                    {layer.type}
                  </p>
                </div>
                <div className="px-4 py-5 flex flex-wrap items-center gap-2">
                  {layer.techs.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 px-3 py-1.5 border border-zinc-800 hover:border-red-900 hover:bg-red-950 transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                      <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
            How We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            Delivery Process
          </h2>
          <div className="flex flex-col">
            {process.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-[80px_1px_1fr] gap-x-8 py-8 border-b border-zinc-900 last:border-b-0"
              >
                <p className="text-xs tracking-widest text-zinc-600 uppercase pt-1 text-right">
                  {step.phase}
                </p>
                <div className="relative bg-zinc-900">
                  <div className="w-2 h-2 rounded-full bg-red-600 border-2 border-black absolute top-1.5 left-1/2 -translate-x-1/2" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-black uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-xl mb-3">
                    {step.description}
                  </p>
                  <span className="inline-block text-xs tracking-widest text-red-800 uppercase border border-red-900 px-3 py-1">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Standards */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
            Infrastructure Standards
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            Built to Enterprise Grade
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-900">
            {infrastructure.map((item, i) => (
              <div
                key={i}
                className="border-b border-r border-zinc-900 p-6 hover:bg-zinc-950 transition-colors duration-200"
              >
                <div className="w-9 h-9 border border-red-900 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Numbers */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
            By the Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            Our Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-900">
            {standards.map((s, i) => (
              <div
                key={i}
                className="border-b border-r border-zinc-900 py-10 px-4 text-center"
              >
                <p className="text-4xl md:text-5xl font-black text-white font-serif mb-2">
                  {s.value}<span className="text-red-600">{s.suffix}</span>
                </p>
                <p className="text-xs tracking-widest text-zinc-600 uppercase">
                  {s.label}
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
            Ready to Build on<br />
            <span className="text-red-600 italic">Solid Ground?</span>
          </h2>
          <p className="text-zinc-400 text-sm tracking-wider mb-10">
            Tell us about your project. We'll architect the right solution from day one.
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