import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const modals = {
  Privacy: {
    title: "Privacy Policy",
    content: `MaxRiTech Solutions is committed to protecting your personal data and privacy.

INFORMATION WE COLLECT
We collect information you provide directly — such as name, email address, phone number, and project details when you submit a mission brief or contact form on our website.

HOW WE USE YOUR INFORMATION
We use your information solely to respond to your enquiries, deliver our services, and communicate project updates. We do not sell, rent, or share your personal data with third parties for marketing purposes.

DATA STORAGE
All data submitted through our website is handled securely. We use industry-standard encryption and access controls to protect your information.

COOKIES
Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.

THIRD-PARTY SERVICES
We may use trusted third-party tools (such as EmailJS for form delivery) that process data on our behalf. These services are bound by their own privacy policies and are selected for their compliance standards.

YOUR RIGHTS
You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make a request, contact us at hello@maxritech.solutions.

CONTACT
For any privacy-related concerns, reach us at:
Email: hello@maxritech.solutions
Location: Accra, Ghana

© 2026 MaxRiTech Solutions. All rights reserved.`,
  },
  Terms: {
    title: "Terms & Conditions",
    content: `By accessing and using the MaxRiTech Solutions website, you agree to the following terms and conditions.

USE OF WEBSITE
This website is provided for informational and commercial purposes. You agree not to misuse, copy, or redistribute any content from this site without written permission from MaxRiTech Solutions.

SERVICES
MaxRiTech Solutions provides technology consulting, software development, cybersecurity, cloud infrastructure, and related digital services. All service engagements are governed by individual project agreements signed between MaxRiTech and the client.

INTELLECTUAL PROPERTY
All content on this website — including text, graphics, logos, and code — is the property of MaxRiTech Solutions and is protected by applicable copyright and intellectual property laws.

PROJECT DELIVERABLES
Ownership of custom-built software is transferred to the client upon full payment as specified in the project agreement. MaxRiTech retains the right to showcase completed work in our portfolio unless otherwise agreed in writing.

PAYMENT
Our standard payment structure is 40% deposit, 30% at project midpoint, and 30% upon delivery. Payment terms for enterprise projects are defined in the project agreement.

LIMITATION OF LIABILITY
MaxRiTech Solutions is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the scope of the signed project agreement.

CHANGES TO TERMS
We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the updated terms.

GOVERNING LAW
These terms are governed by the laws of the Republic of Ghana.

CONTACT
For any terms-related enquiries:
Email: hello@maxritech.solutions
Location: Accra, Ghana

© 2026 MaxRiTech Solutions. All rights reserved.`,
  },
  Careers: {
    title: "Careers at MaxRiTech",
    content: `We are building the future of technology in Africa and beyond — and we are always looking for exceptional people to join the mission.

WHO WE ARE LOOKING FOR
MaxRiTech is a UK-based technology company with roots in Ghana and a global reach. We build enterprise-grade software, mobile applications, blockchain systems, and IoT solutions for clients across Africa, the UK, and North America.

We are looking for people who are exceptional at what they do, take ownership of their work, and believe that African technology can compete at the highest global level.

OPEN ROLES
We are always interested in hearing from talented individuals across these areas:

— Frontend Engineers (React, Next.js, Tailwind)
— Backend Engineers (Node.js, Python, APIs)
— Mobile Developers (React Native)
— UI/UX Designers (Figma, product thinking)
— Cybersecurity Specialists
— Cloud & DevOps Engineers
— IoT & Hardware Engineers
— Business Development & Sales

WHAT WE OFFER
— Work on real products used by real clients across multiple countries
— A team that holds itself to a global standard
— Remote-first and flexible working environment
— Direct mentorship from leadership
— The opportunity to build something that matters

HOW TO APPLY
We do not have a formal application portal yet. If you believe you are exceptional and want to be part of what MaxRiTech is building, reach out directly:

Email: hello@maxritech.solutions
Subject: Careers — [Your Role] — [Your Name]

Include a brief introduction, links to your work or portfolio, and what you would bring to the team. We respond to every application personally.

© 2026 MaxRiTech Solutions. All rights reserved.`,
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <footer className="bg-black border-t border-zinc-700">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="MaxRiTech" className="h-10 w-auto" />
          </Link>

          {/* Copyright */}
          <p className="text-zinc-300 text-xs tracking-widest uppercase text-center">
            © 2026 MaxRi Tech Solutions. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Careers"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveModal(item)}
                className="text-zinc-400 text-xs tracking-widest uppercase hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4 py-8"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-800 flex-shrink-0">
              <div>
                <p className="text-xs tracking-widest text-red-600 uppercase mb-1">
                  MaxRiTech Solutions
                </p>
                <h2 className="text-white text-xl font-black uppercase tracking-wide font-serif">
                  {modals[activeModal].title}
                </h2>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-zinc-400 hover:text-white text-2xl font-black transition-colors duration-200 leading-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Content — scrollable */}
            <div className="px-8 py-6 overflow-y-auto flex-1">
              {modals[activeModal].content.split("\n\n").map((block, i) => (
                <div key={i} className="mb-5">
                  {block.startsWith("—") ? (
                    <div className="flex flex-col gap-2">
                      {block.split("\n").map((line, j) => (
                        <p key={j} className="text-zinc-400 text-xs leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : block === block.toUpperCase() && block.length < 60 ? (
                    <h3 className="text-white text-xs font-black uppercase tracking-widest mb-2">
                      {block}
                    </h3>
                  ) : (
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {block}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-zinc-800 flex-shrink-0">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-white text-black text-xs tracking-widest uppercase font-black px-8 py-3 hover:bg-red-600 hover:text-white transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}