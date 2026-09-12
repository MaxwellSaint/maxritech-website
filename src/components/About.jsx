import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const values = [
  {
    title: "Excellence",
    description: "We hold ourselves to a standard above the ordinary. Every line of code, every design decision, every client interaction is executed with precision.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We say what we mean and deliver what we promise. Trust is the foundation of every partnership we build — and we protect it fiercely.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We challenge convention. Our team relentlessly explores emerging technologies to keep our clients ahead of every curve the industry throws.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "People First",
    description: "Behind every project is a relationship. We invest in understanding our clients' goals deeply, because your success is the only metric we track.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "Founded",
    title: "The Master Class Idea",
    description: "Maxwell Boakye Saint envisioned a company that would bring global-standard digital infrastructure to African enterprises and beyond. That vision became MaxRi Tech Solutions, co-founded with Richmond K. Agbenyega to turn the blueprint into reality — with Godwin Asante joining as CEO to lead the company's strategic direction.",
  },
  {
    year: "First Products",
    title: "Built to a Global Standard",
    description: "MaxRi moved fast and built real things. A Learning Management System, an Appointment Management System, a Report Management System, a Blockchain solution, and E-commerce platforms — all engineered to the standard demanded in UK and European markets, now delivered from Accra to the world.",
  },
  {
    year: "Going Global",
    title: "Never Just a Local Company",
    description: "With an active client base across Britain, Europe, and North America, MaxRi was never just a local company. From day one the ambition was international — and the products, the standards, and the relationships reflect exactly that.",
  },
  {
    year: "Today",
    title: "Already in the Room",
    description: "Still in our early chapter but already building at a level most companies take years to reach. Real products. Real clients. A team that has operated at the highest levels of technology leadership across three continents. MaxRi Tech is not catching up to the world — we are already in the room.",
  },
];

const team = [
  {
    image: null,
    initials: "GA",
    name: "Godwin Asante",
    title: "Chief Executive Officer",
    badge: "CEO",
    bio: "Mr Godwin Asante is a UK-based businessman whose career spans enterprise transformation across Britain, Europe, and North America. He has spent over a decade converting traditional business operations into technology-driven powerhouses — working with clients from London to the US and across the African continent. As CEO, Godwin drives the company's strategic vision and continues to set the standard for everything MaxRi delivers. Based primarily in the UK with strong ties to Ghana, he brings a truly international perspective to every project MaxRi undertakes.",
  },
  {
    image: "/maxwell.jpeg",
    initials: "MS",
    name: "Maxwell Boakye Saint",
    title: "Founder",
    badge: "Founder",
    bio: "Maxwell Boakye Saint is the founder and creative technical architect behind MaxRi's product identity. Max built MaxRi from the ground up — championing a culture of engineering excellence and bold design that ensures every product MaxRi ships feels polished, purposeful, and built to compete on a global stage. From LMS platforms to blockchain solutions, Max's hands have been on every major build.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/maxwell-boakye-86250a327/" },
      { label: "X", href: "#" },
      { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=maxwellasamoah495@gmail.com" },
    ],
  },
  {
    image: "/richmond.jpeg",
    initials: "RK",
    name: "Richmond K. Agbenyega",
    title: "Co-Founder",
    badge: "Co-Founder",
    bio: "Richmond K. Agbenyega is the operational and systems mind of MaxRi. As co-founder, he oversees infrastructure, security architecture, and the technical delivery pipeline that keeps every project on time and bulletproof. His engineering rigor is the backbone of MaxRi's reputation for reliability — ensuring that what gets built not only looks great, but performs flawlessly under real-world conditions across every market MaxRi serves.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/richmond-k-agbenyega-0ba832262" },
      { label: "X", href: "#" },
      { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=roka202015@gmail.com" },
    ],
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — MaxRi Tech Solutions</title>
        <meta name="description" content="Learn about MaxRi Tech Solutions — founded by Maxwell Boakye Saint to deliver world-class digital infrastructure to enterprises across Britain, North America, and Africa." />
        <meta name="keywords" content="MaxRi Tech Solutions, about us, tech company Ghana, software company Accra, Maxwell Boakye Saint, Godwin Asante" />
        <meta property="og:title" content="About Us — MaxRi Tech Solutions" />
        <meta property="og:description" content="Meet the team behind MaxRi Tech Solutions — precision-engineered digital products built to global standards." />
        <meta property="og:url" content="https://maxritech.com/company" />
        <link rel="canonical" href="https://maxritech.com/company" />
      </Helmet>

      <div className="bg-black text-white">

        {/* Page Hero */}
        <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.6em] text-zinc-300 uppercase mb-6">About — MaxRiTech</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8">
            We Are<br />
            <span className="text-red-600 italic">MaxRi</span><br />
            Tech
          </h1>
          <p className="text-zinc-400 text-xs md:text-base leading-relaxed max-w-xl">
            A technology company delivering world-class digital infrastructure
            to enterprises across Britain, North America, and the African continent —
            engineered to global standards, rooted in purpose.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="relative px-6 py-16 border-b md:border-b-0 md:border-r border-zinc-800">
              <span className="absolute top-8 right-8 text-8xl font-black text-zinc-800 select-none font-serif">V</span>
              <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-4">Our Vision</p>
              <div className="w-7 h-0.5 bg-red-600 mb-6" />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-5 font-serif">
                To Lead Africa's<br />Digital Future
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We envision a world where African and international enterprises operate
                on the same technological playing field. From London to South Africa, New York
                to Accra — every business deserves infrastructure built to the highest global standard.
              </p>
            </div>
            <div className="relative px-6 py-16">
              <span className="absolute top-8 right-8 text-8xl font-black text-zinc-800 select-none font-serif">M</span>
              <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-4">Our Mission</p>
              <div className="w-7 h-0.5 bg-red-600 mb-6" />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-5 font-serif">
                Build. Secure.<br />Scale. Repeat.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To deliver precision-engineered digital products and infrastructure
                that empower businesses across the UK, North America, and Africa to
                scale with confidence — with integrity, innovation, and relentless execution as our foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="border-b border-zinc-900 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-800">
              {values.map((value, i) => (
                <div key={i} className="border-b border-r border-zinc-900 p-6 hover:bg-zinc-800 transition-colors duration-200">
                  <div className="w-9 h-9 border border-red-800 flex items-center justify-center mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3">{value.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-zinc-800 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">How It All Started</h2>
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={i} className="grid grid-cols-[100px_1px_1fr] gap-x-8 py-8 border-b border-zinc-800 last:border-b-0">
                  <p className="text-xs tracking-widest text-zinc-600 uppercase pt-1">{item.year}</p>
                  <div className="relative bg-zinc-800">
                    <div className="w-2 h-2 rounded-full bg-red-600 absolute top-1.5 left-1/2 -translate-x-1/2" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-black uppercase tracking-wider mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-b border-zinc-800 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">The Team Behind MaxRiTech</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-800">
              {team.map((member, i) => (
                <div key={i} className="border-b border-r border-zinc-900 flex flex-col overflow-hidden">
                  <div className="h-64 bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <span className="text-8xl font-black text-zinc-500 font-serif select-none">
                        {member.initials}
                      </span>
                    )}
                    <div className="absolute top-4 right-4 border border-red-800 bg-red-950 px-3 py-1">
                      <span className="text-red-400 text-xs tracking-widest uppercase">{member.badge}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <p className="text-white font-black text-lg uppercase tracking-wide font-serif">{member.name}</p>
                      <p className="text-red-700 text-xs tracking-widest uppercase mt-1">{member.title}</p>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed flex-1">{member.bio}</p>
                    {member.socials && member.socials.length > 0 && (
                      <div className="flex gap-6 pt-4 border-t border-zinc-800">
                        {member.socials.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target={social.href !== "#" ? "_blank" : undefined}
                            rel={social.href !== "#" ? "noreferrer" : undefined}
                            className="text-zinc-500 text-xs tracking-widest uppercase hover:text-white transition-colors duration-200"
                          >
                            {social.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 border-b border-zinc-800 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-serif">
              Ready to Build<br />
              <span className="text-red-600 italic">Something Great?</span>
            </h2>
            <p className="text-zinc-400 text-sm tracking-wider mb-10">
              Let's talk about your next project. We respond within 2 mins.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-10 py-4 text-xs tracking-widest uppercase font-black hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              Start a Mission
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}