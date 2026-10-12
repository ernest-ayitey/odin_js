import React from "react";
import { SERVICE_STRIP } from "../data.js";

export default function ServiceStrip() {
  return (
    <div className="bp-strip">
      <div className="bp-strip__grid">
        {SERVICE_STRIP.map((s) => (
          <div className="bp-strip__item" key={s.code}>
            <div className="bp-strip__code">{s.code}</div>
            <h3 className="bp-strip__title">{s.title}</h3>
            <p className="bp-strip__body">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
