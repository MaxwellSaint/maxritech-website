import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_2xjektc";
const TEMPLATE_ID = "template_aug2qlt";
const PUBLIC_KEY = "2Q8tuEgsMZvAaez-M";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope. A standard website takes 3-5 weeks. A full web application or mobile app typically runs 6-14 weeks. We provide a precise timeline after the discovery phase.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — we have delivered projects for clients in Canada, the UK, and across Africa. We work fully remotely and are experienced with cross-timezone collaboration.",
  },
  {
    q: "What is your payment structure?",
    a: "We typically work on a 40% deposit, 30% at midpoint, and 30% on delivery. For larger enterprise projects, milestone-based payment schedules are available.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every project includes a 30-day post-launch support window. For ongoing maintenance and monitoring, our Managed Systems plans provide continuous coverage.",
  },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({
    from_name: "",
    company: "",
    from_email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({
        from_name: "",
        company: "",
        from_email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err) {
  console.error("EmailJS Error:", err);
  alert(JSON.stringify(err));
  setStatus("error");
}
  }

  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Contact — MaxRi Tech Solutions</title>
        <meta name="description" content="Start a project with MaxRi Tech Solutions. Contact us for web development, mobile apps, cybersecurity, cloud solutions, and more." />
        <meta property="og:title" content="Contact — MaxRi Tech Solutions" />
        <meta property="og:url" content="https://maxritech.com/contact" />
        <link rel="canonical" href="https://maxritech.com/contact" />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-28 pb-20 border-b border-zinc-900 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.6em] text-zinc-400 uppercase mb-6">
          Contact — Start a Mission
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-8 font-serif">
          Let's Build<br />
          <span className="text-red-600 italic">Together</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
          Whether you have a project brief, a rough idea, or just a question —
          we want to hear from you. We respond within 2 mins, always.
        </p>
      </section>

      {/* Contact Body */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

          {/* Left — Contact Details */}
          <div className="px-6 py-16 border-b md:border-b-0 md:border-r border-zinc-900">
            <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase mb-3">
              Reach Us Directly
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-10 font-serif">
              Get in Touch
            </h2>

            {/* Email */}
            <div className="flex items-start gap-4 py-5 border-b border-zinc-900">
              <div className="w-9 h-9 border border-red-900 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs tracking-widest text-zinc-400 uppercase mb-1">Email</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=infomaxri@gmail.com"
                  className="text-zinc-300 text-sm font-medium hover:text-white transition-colors duration-200"
                >
                  infomaxri@gmail.com
                </a>
                <p className="text-xs text-zinc-400 mt-1">For project enquiries and proposals</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 py-5 border-b border-zinc-900">
              <div className="w-9 h-9 border border-red-900 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.02-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs tracking-widest text-zinc-400 uppercase mb-1">Phone</p>
                <p className="text-zinc-300 text-sm font-medium">+233 24 011 4345</p>
                <p className="text-xs text-zinc-300 mt-1">Mon — Fri, 8am — 12am GMT</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 py-5 border-b border-zinc-900">
              <div className="w-9 h-9 border border-red-900 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-red-600 fill-none" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs tracking-widest text-zinc-400 uppercase mb-1">Location</p>
                <p className="text-zinc-300 text-sm font-medium">Accra, Ghana</p>
                <p className="text-xs text-zinc-300 mt-1">Available globally — remote and on-site</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/233240114345"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 mt-6 px-5 py-4 border border-green-900 bg-green-900 text-green-400 text-xs tracking-widest uppercase font-bold hover:border-green-600 hover:bg-green-800 transition-colors duration-200"
            >
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Chat on WhatsApp
            </a>

            {/* Offices */}
            <div className="mt-10">
              <p className="text-xs tracking-widest text-zinc-400 uppercase mb-5">
                Our Offices
              </p>
              <div className="flex flex-col gap-3">
                <div className="bg-zinc-950 border border-zinc-900 p-5">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-1">
                    Accra HQ
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Greater Accra Region<br />Accra, Ghana
                  </p>
                  <span className="inline-block mt-3 text-xs tracking-widest text-red-800 uppercase border border-red-900 px-2 py-0.5">
                    Physical Office
                  </span>
                </div>
                <div className="bg-zinc-950 border border-zinc-900 p-5">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-1">
                    Remote Operations
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Available across Africa, Europe<br />and North America
                  </p>
                  <span className="inline-block mt-3 text-xs tracking-widest text-blue-500 uppercase border border-blue-900 px-2 py-0.5">
                    Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="px-6 py-16">
            <p className="text-xs font-black tracking-widest uppercase text-white border-b border-zinc-900 pb-5 mb-8">
              Send a Mission Brief
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-zinc-500 uppercase">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Mensah"
                    className="bg-zinc-950 border border-zinc-900 text-white text-sm px-4 py-3 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-zinc-500 uppercase">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                    className="bg-zinc-950 border border-zinc-900 text-white text-sm px-4 py-3 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-500 uppercase">Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="bg-zinc-950 border border-zinc-900 text-white text-sm px-4 py-3 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-500 uppercase">Phone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+233 XX XXX XXXX"
                  className="bg-zinc-950 border border-zinc-900 text-white text-sm px-4 py-3 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-500 uppercase">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                >
                  <option value="">Select a service...</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Solutions</option>
                  <option>AI &amp; Automation</option>
                  <option>Managed IT Systems</option>
                  <option>IoT Development</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-500 uppercase">Budget Range</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                >
                  <option value="">Select a range...</option>
                  <option>Under GH₵1,000</option>
                  <option>GH₵1,000 – GH₵5,000</option>
                  <option>GH₵5,000 – GH₵15,000</option>
                  <option>GH₵15,000 – GH₵50,000</option>
                  <option>GH₵50,000+</option>
                  <option>Prefer to discuss</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-700 uppercase">Project Brief</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you're building, what problem you're solving, and any key requirements or deadlines..."
                  className="bg-zinc-950 border border-zinc-900 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="border border-green-800 bg-green-950 px-4 py-3 text-green-400 text-xs tracking-widest uppercase">
                  Mission brief sent. We will respond within 2 mins.
                </div>
              )}
              {status === "error" && (
                <div className="border border-red-800 bg-red-950 px-4 py-3 text-red-400 text-xs tracking-widest uppercase">
                  Something went wrong. Please try WhatsApp or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-white text-black text-xs tracking-widest uppercase font-black py-4 hover:bg-red-600 hover:text-white transition-colors duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Mission Brief"}
              </button>

              <div className="flex items-start gap-3 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 flex-shrink-0" />
                <p className="text-zinc-400 text-xs leading-relaxed">
                  <span className="text-zinc-600 font-bold">We respond within 2 mins.</span> For urgent projects, reach us directly on WhatsApp or phone for a live chat.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-3">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-12 font-serif">
            FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-900">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-r border-zinc-900 p-6 hover:bg-zinc-950 transition-colors duration-200"
              >
                <div className="w-5 h-0.5 bg-red-700 mb-4" />
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3">
                  {faq.q}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}