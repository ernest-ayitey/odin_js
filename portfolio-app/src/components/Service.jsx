import React from "react";
import { Check } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import Reveal from "./Reveal.jsx";
import { SERVICES } from "../data.js";

export default function Service() {
  return (
    <section id="service" className="bp-section">
      <SectionLabel no="005" title="Service" scale="What I can help with" />
      <Reveal>
        <div className="bp-service">
          <div>
            <h2 className="bp-service__title">What can I help you with?</h2>
            <p className="bp-service__lede">
              From a single feature to a full product build, here's where I'm
              most useful.
            </p>
          </div>
          <div className="bp-service-list">
            {SERVICES.map((s) => (
              <div className="bp-service-item" key={s}>
                <Check size={16} />
                {s}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
