import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data.js";

export default function Hero({ scrollTo }) {
  return (
    <header className="bp-hero">
      <div className="bp-hero__eyebrow">Available for select engagements</div>
      <h1 className="bp-hero__title ">
        Building
        <br />
        worldclass <em>software.</em>
      </h1>
      <p className="bp-hero__lede">
        I'm {PROFILE.name}, a software enthusiast. I design and ship web
        and mobile products, the APIs underneath them, and the infrastructure
        that keeps them running.
      </p>
      <div className="bp-hero__actions">
        <button className="bp-btn" onClick={() => scrollTo("contact")}>
          Work with me <ArrowUpRight size={15} />
        </button>
        <button className="bp-btn bp-btn--ghost" onClick={() => scrollTo("work")}>
          See the work
        </button>
      </div>
    </header>
  );
}
