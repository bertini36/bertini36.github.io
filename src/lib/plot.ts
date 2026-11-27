const SVG_NS = "http://www.w3.org/2000/svg";

export function svgEl<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {},
  parent?: Element,
): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attrs)) {
    el.setAttribute(name, String(value));
  }
  parent?.appendChild(el);
  return el;
}

export function normalPdf(x: number, mean: number, sd: number): number {
  const z = (x - mean) / sd;
  return Math.exp(-0.5 * z * z) / (sd * Math.sqrt(2 * Math.PI));
}

export function linspace(lo: number, hi: number, count: number): number[] {
  return Array.from({ length: count }, (_, i) => lo + ((hi - lo) * i) / (count - 1));
}

/** Numeric KL[a || b] on [lo, hi]. */
export function klDivergence(
  a: (x: number) => number,
  b: (x: number) => number,
  lo: number,
  hi: number,
): number {
  const xs = linspace(lo, hi, 1200);
  const step = xs[1] - xs[0];
  let total = 0;
  for (const x of xs) {
    const pa = a(x);
    if (pa > 1e-12) total += pa * Math.log(pa / Math.max(b(x), 1e-300)) * step;
  }
  return total;
}

export function linePath(points: [number, number][]): string {
  return points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join("");
}
