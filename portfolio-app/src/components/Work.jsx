import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import Reveal from "./Reveal.jsx";
import { PROJECTS } from "../data.js";

export default function Work() {
  return (
    <section id="work" className="bp-section">
      <SectionLabel
        no="002"
        title="Selected works"
        scale={`${PROJECTS.length} projects`}
      />

      <Reveal>
        <div className="bp-work-grid">
          {PROJECTS.map((p) => (
            <a
              className="bp-work-card"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.id}
            >
              {/* Project Image */}
              <div className="bp-work-card__image">
                <img
                  src={p.image}
                  alt={`${p.name} project`}
                  loading="lazy"
                />
              </div>

              <div className="bp-work-card__top">
                <span className="bp-work-card__id">{p.id}</span>

                <span className="bp-work-card__arrow">
                  <ArrowUpRight size={15} />
                </span>
              </div>

              <h3 className="bp-work-card__name">{p.name}</h3>

              <span className="bp-work-card__tag">
                {p.tag}
              </span>

              <p className="bp-work-card__desc">
                {p.desc}
              </p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}