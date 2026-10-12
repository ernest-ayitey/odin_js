import React from "react";

function CropMarks() {
  return (
    <div className="bp-crop" aria-hidden="true">
      <span className="bp-crop__mark bp-crop__mark--tl" />
      <span className="bp-crop__mark bp-crop__mark--tr" />
    </div>
  );
}

export default function SectionLabel({ no, title, scale }) {
  return (
    <div className="bp-section-label">
      <CropMarks />
      <span className="bp-section-label__no">DWG {no}</span>
      <span className="bp-section-label__title">{title}</span>
      <span className="bp-section-label__scale">{scale}</span>
    </div>
  );
}
