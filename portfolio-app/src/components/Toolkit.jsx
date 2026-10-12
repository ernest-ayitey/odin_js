import React from "react";
import SectionLabel from "./SectionLabel.jsx";
import Reveal from "./Reveal.jsx";
import { TOOLKIT } from "../data.js";

export default function Toolkit() {
  return (
    <section id="toolkit" className="bp-section">
      <SectionLabel no="003" title="Toolkit" scale="By category" />
      <Reveal>
        <div className="bp-toolkit-grid">
          {TOOLKIT.map((group) => (
            <div key={group.group}>
              <div className="bp-toolkit-group__title">{group.group}</div>
              {group.items.map((item) => (
                <div className="bp-toolkit-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
