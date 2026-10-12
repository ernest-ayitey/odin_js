import React from "react";
import { NAV_LINKS, PROFILE } from "../data.js";

export default function Footer({ scrollTo }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bp-footer">
      <div className="bp-footer__nav">
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
      <div className="bp-footer__meta">
        © {year} {PROFILE.name}. All rights reserved.
      </div>
      <span className="bp-stamp">DRAWN BY {PROFILE.name.split(" ").map((n) => n[0]).join("")}. — APPROVED FOR BUILD</span>
    </footer>
  );
}
