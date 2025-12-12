"use client";

import React from "react";

interface GradientCharsProps {
  text: string;
  from: string; // ex: "#06b6d4" or "rgb(6,182,212)"
  to: string;   // ex: "#3b82f6"
  className?: string;
}

/** Parse hex (#rgb or #rrggbb) or rgb(r,g,b). Returns [r,g,b] or null. */
function parseColor(input: string): [number, number, number] | null {
  const s = input.trim();
  // hex #rrggbb
  const hexFull = /^#?([a-f\d]{6})$/i.exec(s);
  if (hexFull) {
    const v = hexFull[1];
    return [
      parseInt(v.slice(0, 2), 16),
      parseInt(v.slice(2, 4), 16),
      parseInt(v.slice(4, 6), 16),
    ];
  }
  // hex #rgb
  const hexShort = /^#?([a-f\d]{3})$/i.exec(s);
  if (hexShort) {
    const v = hexShort[1];
    return [
      parseInt(v[0] + v[0], 16),
      parseInt(v[1] + v[1], 16),
      parseInt(v[2] + v[2], 16),
    ];
  }
  // rgb(r,g,b)
  const rgb = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/i.exec(
    s
  );
  if (rgb) {
    return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  }
  return null;
}

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function rgbToCss(rgb: [number, number, number]) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

export function GradientChars({
  text,
  from,
  to,
  className = "",
}: GradientCharsProps) {
  const fromRgb = parseColor(from);
  const toRgb = parseColor(to);

  // If parsing failed, fallback to using text color set to `from`
  if (!fromRgb || !toRgb) {
    return (
      <span className={className} style={{ color: from }}>
        {text}
      </span>
    );
  }

  const chars = Array.from(text); // preserves unicode characters
  const len = chars.length;
  // Precompute colors per index
  const colors = chars.map((_, i) => {
    const t = len === 1 ? 0 : i / (len - 1);
    const r = lerp(fromRgb[0], toRgb[0], t);
    const g = lerp(fromRgb[1], toRgb[1], t);
    const b = lerp(fromRgb[2], toRgb[2], t);
    return rgbToCss([r, g, b]);
  });

  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => {
        // preserve spaces visually but keep element for color
        if (ch === " ") {
          return (
            <span key={i} style={{ whiteSpace: "pre", color: colors[i] }}>
              {" "}
            </span>
          );
        }
        return (
          <span
            key={i}
            style={{ color: colors[i], display: "inline-block", lineHeight: 1 }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
}

export default GradientChars;
