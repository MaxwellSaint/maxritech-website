const plans = [
  {
    tier: "Starter",
    name: "Launch",
    price: "Custom",
    description:
      "Perfect for startups and small businesses ready to establish a professional digital presence and automate core operations.",
    features: [
      { text: "Website or Web App", on: true },
      { text: "Mobile Responsive", on: true },
      { text: "Basic CMS Integration", on: true },
      { text: "Email Support", on: true },
      { text: "Security Audit", on: false },
      { text: "Cloud Infrastructure", on: false },
      { text: "Dedicated Account Manager", on: false },
      { text: "SLA Guarantee", on: false },
    ],
    featured: false,
    btnStyle: "outline",
  },
  {
    tier: "Growth",
    name: "Scale",
    price: "Custom",
    description:
      "For growing businesses that need robust platforms, mobile apps, and the infrastructure to handle real enterprise demand.",
    features: [
      { text: "Website or Web App", on: true },
      { text: "Mobile Responsive", on: true },
      { text: "Basic CMS Integration", on: true },
      { text: "Email Support", on: true },
      { text: "Security Audit", on: true },
      { text: "Cloud Infrastructure", on: true },
      { text: "Dedicated Account Manager", on: false },
      { text: "SLA Guarantee", on: false },
    ],
    featured: true,
    btnStyle: "red",
  },
  {
    tier: "Enterprise",
    name: "Command",
    price: "Custom",
    description:
      "Full-service engagement for enterprises that demand the highest level of engineering, security, and ongoing managed support.",
    features: [
      { text: "Website or Web App", on: true },
      { text: "Mobile Responsive", on: true },
      { text: "Basic CMS Integration", on: true },
      { text: "Email Support", on: true },
      { text: "Security Audit", on: true },
      { text: "Cloud Infrastructure", on: true },
      { text: "Dedicated Account Manager", on: true },
      { text: "SLA Guarantee", on: true },
    ],
    featured: false,
    btnStyle: "outline",
  },
];

const features = [
  {
    num: "01",
    title: "LMS — Learning Management System",
    description:
      "Full learning platform with course builder, video lessons, student enrollment, progress tracking, quizzes, and auto-certification.",
  },
  {
    num: "02",
    title: "Appointment Management System",
    description:
      "Enterprise booking platform with real-time scheduling, automated SMS and email reminders, and staff calendar management.",
  },
  {
    num: "03",
    title: "Report Management System",
    description:
      "Automated reporting infrastructure — scheduled generation, multi-format export, role-based access, and audit trail logging.",
  },
  {
    num: "04",
    title: "E-Commerce Platforms",
    description:
      "Full-featured online stores with inventory management, payment gateway integration, order tracking, and analytics dashboards.",
  },
  {
    num: "05",
    title: "Blockchain Solutions",
    description:
      "Smart contract development, tokenisation, decentralised applications, and tamper-proof record systems built on proven Web3 infrastructure.",
  },
  {
    num: "06",
    title: "AI & Automation",
    description:
      "Intelligent process automation, AI-powered dashboards, predictive analytics, and custom machine learning integrations for any workflow.",
  },
  {
    num: "07",
    title: "Mobile App Development",
    description:
      "Native-performance iOS and Android applications built with React Native — single codebase, full platform coverage, app store ready.",
  },
  {
    num: "08",
    title: "Managed IT Systems",
    description:
      "24/7 infrastructure monitoring, incident response, patch management, and proactive system health checks on a retainer basis.",
  },
  {
    num: "09",
    title: "IoT Development",
    description:
      "Hardware-software integration for smart devices — sensor networks, real-time dashboards, push notifications, and cloud data pipelines.",
  },
];

const sla = [
  { value: "24", suffix: "/7", label: "System Monitoring" },
  { value: "99", suffix: ".9%", label: "Uptime SLA" },
  { value: "4", suffix: "hr", label: "Incident Response" },
  { value: "30", suffix: "-day", label: "Post-Launch Support" },
];

const comparison = [
  { feature: "Web Development", launch: true, scale: true, command: true },
  { feature: "Mobile App", launch: false, scale: true, command: true },
  { feature: "UI/UX Design", launch: true, scale: true, command: true },
  { feature: "Security Audit", launch: false, scale: true, command: true },
  { feature: "Cloud Setup", launch: false, scale: true, command: true },
  { feature: "Blockchain", launch: false, scale: false, command: true },
  { feature: "AI Integration", launch: false, scale: false, command: true },
  { feature: "IoT Development", launch: false, scale: false, command: true },
  { feature: "Dedicated Manager", launch: false, scale: false, command: true },
  { feature: "SLA Guarantee", launch: false, scale: false, command: true },
];

export default function Systems() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.6em] text-zinc-300 uppercase mb-6">
          Systems — What We Deliver
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8 font-serif">
          Platforms Built<br />
          to <span className="text-red-700 italic">Perform</span>
        </h1>
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
          From learning management systems to blockchain infrastructure — MaxRi
          engineers and deploys complete digital systems that enterprises across
          Africa, the UK, and North America depend on every day.
        </p>
      </section>

      {/* Plans */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
            Engagement Models
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            How We Work With You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-900">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`border-b border-r border-zinc-900 p-8 flex flex-col ${
                  plan.featured ? "bg-zinc-950 border-b-2 border-b-red-900" : ""
                }`}
              >
                <p className={`text-xs tracking-widest uppercase mb-3 ${plan.featured ? "text-red-700" : "text-zinc-500"}`}>
                  {plan.tier}
                </p>
                <h3 className="text-white text-2xl font-black uppercase tracking-wide font-serif mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-black text-white mb-1">
                  {plan.price}
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-1">
                  {plan.description}
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs">
                      <span className={f.on ? "text-red-700" : "text-zinc-800"}>
                        {f.on ? "✓" : "✕"}
                      </span>
                      <span className={f.on ? "text-zinc-400" : "text-zinc-800"}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className={`w-full py-3 text-xs tracking-widest uppercase font-bold text-center transition-colors duration-200 ${
                    plan.btnStyle === "red"
                      ? "bg-red-700 text-white hover:bg-red-700"
                      : "border border-zinc-900 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-300 uppercase mb-3">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            Our Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-900">
            {features.map((f, i) => (
              <div
                key={i}
                className="border-b border-r border-zinc-900 p-6 hover:bg-zinc-950 transition-colors duration-200"
              >
                <p className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                  {f.num}
                </p>
                <div className="w-5 h-0.5 bg-red-600 mb-4" />
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3">
                  {f.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Stats */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {sla.map((s, i) => (
            <div
              key={i}
              className="border-b md:border-b-0 border-r border-zinc-900 last:border-r-0 py-12 px-4 text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-white font-serif mb-2">
                {s.value}<span className="text-red-600">{s.suffix}</span>
              </p>
              <p className="text-xs tracking-widest text-zinc-400 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">
            Plan Comparison
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            What's Included
          </h2>
          <div className="border border-zinc-900 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-900">
                  <th className="text-left px-4 py-3 text-xs tracking-widest text-zinc-500 uppercase font-normal">
                    Feature
                  </th>
                  {["Launch", "Scale", "Command"].map((h) => (
                    <th key={h} className="text-center px-4 py-3 text-xs tracking-widest text-zinc-500 uppercase font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-900 last:border-b-0 hover:bg-zinc-950 transition-colors duration-200">
                    <td className="px-4 py-3 text-xs text-zinc-400">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-sm">{row.launch ? <span className="text-red-600">✓</span> : <span className="text-zinc-600">✕</span>}</td>
                    <td className="px-4 py-3 text-center text-sm">{row.scale ? <span className="text-red-600">✓</span> : <span className="text-zinc-600">✕</span>}</td>
                    <td className="px-4 py-3 text-center text-sm">{row.command ? <span className="text-red-600">✓</span> : <span className="text-zinc-600">✕</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-serif">
            Ready to Deploy<br />
            <span className="text-red-600 italic">Your System?</span>
          </h2>
          <p className="text-zinc-600 text-sm tracking-wider mb-10">
            Tell us what you need. We'll build it to last.
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