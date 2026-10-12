import React from "react";
import SectionLabel from "./SectionLabel.jsx";
import Reveal from "./Reveal.jsx";
import { ABOUT, PROFILE } from "../data.js";

export default function About() {
  return (
    <section id="about" className="bp-section">
      <SectionLabel no="001" title={`About ${PROFILE.name.split(" ")[0]}`} scale="Scale 1:1" />
      <Reveal>
        <div className="bp-about">
          <div className="bp-about__body">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="bp-about__panel">
            <div className="bp-about__panel-title">Project specification</div>
            {ABOUT.spec.map((row) => (
              <div className="bp-about__row" key={row.label}>
                <span className="bp-about__row-label">{row.label}</span>
                <span className="bp-about__row-value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
