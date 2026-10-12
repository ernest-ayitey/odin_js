import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import Reveal from "./Reveal.jsx";
import { BLOG_CATEGORIES } from "../data.js";

export default function Blogs() {
  return (
    <section id="blogs" className="bp-section">
      <SectionLabel no="004" title="Blogs" scale="My thoughts, in words" />
      <Reveal>
        <div className="bp-blog-grid">
          {BLOG_CATEGORIES.map((b) => (
            <a className="bp-blog-card" href={b.link} key={b.title}>
              <h3 className="bp-blog-card__title">
                {b.title} <ArrowUpRight size={15} />
              </h3>
              <p className="bp-blog-card__desc">{b.desc}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
