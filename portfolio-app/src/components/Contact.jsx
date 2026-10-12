import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import Reveal from "./Reveal.jsx";
import { PROFILE, SOCIALS } from "../data.js";

const ICONS = { Mail, Github, Linkedin, Twitter };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bp-section">
      <SectionLabel no="006" title="Contact" scale="Get in touch" />
      <Reveal>
        <div className="bp-contact">
          <div>
            <h2 className="bp-contact__title">Let's spec out your build.</h2>
            <p className="bp-contact__lede">
              Tell me what you're building and where it's stuck. I reply to
              every message within a business day.
            </p>
            <div className="bp-contact__detail">
              <Mail size={16} /> {PROFILE.email}
            </div>
            <div className="bp-contact__detail">
              <Phone size={16} /> {PROFILE.phone}
            </div>
            <div className="bp-contact__detail">
              <MapPin size={16} /> {PROFILE.location}
            </div>
            <div className="bp-contact__links">
              {SOCIALS.map((s) => {
                const Icon = ICONS[s.icon];
                if (!Icon) return null;
                return (
                  <a className="bp-icon-link" href={s.href} aria-label={s.label} key={s.label}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="bp-map">Map — {PROFILE.location}</div>
          </div>
          <form className="bp-form" onSubmit={handleSubmit}>
            <div className="bp-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="bp-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="name@company.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="bp-field">
              <label htmlFor="message">Project details</label>
              <textarea id="message" placeholder="What are you building?" value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="bp-btn" style={{ alignSelf: "flex-start" }}>
              Send message <ArrowUpRight size={15} />
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
