import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { company } from "../data/company";
import {
  buildWhatsAppLink,
  buildInquiryMessage,
  buildMailtoLink,
} from "../utils/contact";

const needOptions = [
  "Website Development",
  "Web Application",
  "Mobile App",
  "Digital Marketing",
  "IT Solutions",
  "Other",
];

const inputClass =
  "w-full border border-border rounded-lg px-3.5 py-2.5 text-sm bg-paper text-ink placeholder:text-slate/60 focus:border-blue outline-none";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    need: needOptions[0],
    message: "",
  });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleWhatsApp(e) {
    e.preventDefault();
    const message = buildInquiryMessage(form);
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  function handleEmail(e) {
    e.preventDefault();
    window.location.href = buildMailtoLink(form);
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
          Let's Talk About Your Project
        </h2>
        <p className="text-slate mt-3 leading-relaxed">
          Available for Website Development, Web Applications, Mobile Apps,
          Digital Marketing and IT Solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleWhatsApp} className="lg:col-span-3 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Name</label>
              <input
                required
                className={inputClass}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">
                Business / Company
              </label>
              <input
                className={inputClass}
                placeholder="Optional"
                value={form.business}
                onChange={(e) => update("business", e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
              <input
                required
                type="email"
                className={inputClass}
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Phone</label>
              <input
                type="tel"
                className={inputClass}
                placeholder="Optional"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              What do you need?
            </label>
            <select
              className={inputClass}
              value={form.need}
              onChange={(e) => update("need", e.target.value)}
            >
              {needOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">Message</label>
            <textarea
              required
              rows={4}
              className={inputClass}
              placeholder="Tell us a bit about your project..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue text-white font-semibold px-6 py-3.5 text-sm hover:bg-navy transition"
            >
              Send Project Inquiry
            </button>
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center rounded-full border border-border text-ink font-semibold px-6 py-3.5 text-sm hover:border-blue hover:text-blue transition"
            >
              Send via Email Instead
            </button>
          </div>
        </form>

        {/* Direct contact info */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-mist p-6 sm:p-7 space-y-5">
            <div className="flex gap-3">
              <Phone className="text-blue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-ink text-sm">Phone</p>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="text-sm text-slate hover:text-blue mt-0.5 block select-all"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="text-blue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-ink text-sm">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-slate hover:text-blue mt-0.5 block break-all select-all"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <MessageCircle className="text-blue shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-ink text-sm">WhatsApp</p>
                <p className="text-sm text-slate mt-0.5">Fastest way to reach us directly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
