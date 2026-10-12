import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Crosshair() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setCoords({ x: e.clientX, y: e.clientY });
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <>
      <div className="bp-crosshair" aria-hidden="true">
        <span className="bp-crosshair__h" style={{ top: coords.y }} />
        <span className="bp-crosshair__v" style={{ left: coords.x }} />
      </div>
      <div className="bp-coord-readout">
        X {String(coords.x).padStart(4, "0")} &nbsp; Y {String(coords.y).padStart(4, "0")}
      </div>
    </>
  );
}
