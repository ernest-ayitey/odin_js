import React from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data.js";

export default function Navbar({ menuOpen, setMenuOpen, scrollTo }) {
  return (
    <>
      <nav className="bp-nav">
        <div className="bp-nav__mark">
          {PROFILE.navMark}
          <span>/// {PROFILE.role}</span>
        </div>
        <div className="bp-nav__links">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="bp-nav__link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <button className="bp-nav__cta" onClick={() => scrollTo("contact")}>
          Work with me
        </button>
        <button className="bp-nav__toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={18} />
        </button>
      </nav>

      {menuOpen && (
        <div className="bp-mobile-menu">
          <button className="bp-mobile-menu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
          <div className="bp-mobile-menu__links">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
