import { company } from "../data/company";

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
}

export function buildGeneralMessage() {
  return `Hello ${company.name}, I'd like to talk about a project.`;
}

export function buildInquiryMessage({ name, business, email, phone, need, message }) {
  const lines = [
    `Hello ${company.name},`,
    ``,
    `I'd like to send a project inquiry:`,
    ``,
    `Name: ${name}`,
  ];
  if (business) lines.push(`Business / Company: ${business}`);
  lines.push(`Email: ${email}`);
  if (phone) lines.push(`Phone: ${phone}`);
  lines.push(`What I need: ${need}`, ``, `Message: ${message}`);
  return lines.join("\n");
}

export function buildMailtoLink({ name, business, email, phone, need, message }) {
  const subject = encodeURIComponent(`Project Inquiry from ${name}`);
  const bodyLines = [
    `Name: ${name}`,
    business ? `Business / Company: ${business}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `What I need: ${need}`,
    ``,
    `Message:`,
    message,
  ].filter(Boolean);
  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}
