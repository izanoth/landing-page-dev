"use client";

import React from "react";

interface GradientCharsProps {
  text: string;
  from: string;
  to: string;
  className?: string;
}

/** Parse hex (#rgb or #rrggbb) or rgb(r,g,b). Returns [r,g,b] or null. */
function parseColor(input: string): [number, number, number] | null {
  const s = input.trim();

  const hexFull = /^#?([a-f\d]{6})$/i.exec(s);
  if (hexFull) {
    const v = hexFull[1];
    return [
      parseInt(v.slice(0, 2), 16),
      parseInt(v.slice(2, 4), 16),
      parseInt(v.slice(4, 6), 16),
    ];
  }

  const hexShort = /^#?([a-f\d]{3})$/i.exec(s);
  if (hexShort) {
    const v = hexShort[1];
    return [
      parseInt(v[0] + v[0], 16),
      parseInt(v[1] + v[1], 16),
      parseInt(v[2] + v[2], 16),
    ];
  }

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

  if (!fromRgb || !toRgb) {
    return (
      <span className={className} style={{ color: from }}>
        {text}
      </span>
    );
  }

  // Texto completo como array de caracteres (para gradiente contínuo)
  const allChars = Array.from(text);
  const totalLen = allChars.length;

  const colors = allChars.map((_, i) => {
    const t = totalLen === 1 ? 0 : i / (totalLen - 1);
    return rgbToCss([
      lerp(fromRgb[0], toRgb[0], t),
      lerp(fromRgb[1], toRgb[1], t),
      lerp(fromRgb[2], toRgb[2], t),
    ]);
  });

  // Split por palavras (mantendo espaços)
  const words = text.split(" ");

  let globalCharIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wIndex) => (
        <span
          key={wIndex}
          className="inline-block whitespace-nowrap"
        >
          {Array.from(word).map((ch, cIndex) => {
            const color = colors[globalCharIndex++];
            return (
              <span
                key={cIndex}
                style={{
                  color,
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                {ch}
              </span>
            );
          })}

          {/* Espaço entre palavras (fora do wrapper da palavra) */}
          {wIndex < words.length - 1 && (
            <span
              style={{
                whiteSpace: "pre",
                color: colors[globalCharIndex++] ?? colors[colors.length - 1],
              }}
            >
              {" "}
            </span>
          )}
        </span>
      ))}
    </span>
  );
}

export default GradientChars;
