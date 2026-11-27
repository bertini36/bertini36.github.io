export type Side = "top" | "right" | "bottom" | "left";
export type Point = [number, number];

export interface NodeGeometry {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface EdgeRoute {
  fromSide?: Side;
  toSide?: Side;
  fromT?: number;
  toT?: number;
  via?: Point[];
}

const CORNER_RADIUS = 8;
const TIP_LENGTH = 9;
const TIP_HALF_WIDTH = 4.5;

function anchor(node: NodeGeometry, side: Side, t = 0.5): Point {
  if (side === "top") return [node.x + node.w * t, node.y];
  if (side === "bottom") return [node.x + node.w * t, node.y + node.h];
  if (side === "left") return [node.x, node.y + node.h * t];
  return [node.x + node.w, node.y + node.h * t];
}

function isHorizontal(side: Side): boolean {
  return side === "left" || side === "right";
}

function pickSides(from: NodeGeometry, to: NodeGeometry): [Side, Side] {
  const dx = to.x + to.w / 2 - (from.x + from.w / 2);
  const dy = to.y + to.h / 2 - (from.y + from.h / 2);
  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx > 0 ? ["right", "left"] : ["left", "right"];
  }
  return dy > 0 ? ["bottom", "top"] : ["top", "bottom"];
}

function buildElbow(
  start: Point,
  end: Point,
  startSide: Side,
  endSide: Side,
): Point[] {
  const startHorizontal = isHorizontal(startSide);
  const endHorizontal = isHorizontal(endSide);
  if (startHorizontal && endHorizontal) {
    if (Math.abs(start[1] - end[1]) < 0.5) return [start, end];
    const mid = (start[0] + end[0]) / 2;
    return [start, [mid, start[1]], [mid, end[1]], end];
  }
  if (!startHorizontal && !endHorizontal) {
    if (Math.abs(start[0] - end[0]) < 0.5) return [start, end];
    const mid = (start[1] + end[1]) / 2;
    return [start, [start[0], mid], [end[0], mid], end];
  }
  if (startHorizontal) return [start, [end[0], start[1]], end];
  return [start, [start[0], end[1]], end];
}

export function routeEdge(
  from: NodeGeometry,
  to: NodeGeometry,
  route: EdgeRoute,
): Point[] {
  const [autoFrom, autoTo] = pickSides(from, to);
  const fromSide = route.fromSide ?? autoFrom;
  const toSide = route.toSide ?? autoTo;
  const start = anchor(from, fromSide, route.fromT);
  const end = anchor(to, toSide, route.toT);
  if (route.via) return [start, ...route.via, end];
  return buildElbow(start, end, fromSide, toSide);
}

function pull(from: Point, toward: Point, distance: number): Point {
  const length = Math.hypot(toward[0] - from[0], toward[1] - from[1]);
  if (length === 0) return from;
  const ratio = Math.min(distance, length / 2) / length;
  return [
    from[0] + (toward[0] - from[0]) * ratio,
    from[1] + (toward[1] - from[1]) * ratio,
  ];
}

function format(point: Point): string {
  return `${+point[0].toFixed(1)} ${+point[1].toFixed(1)}`;
}

/** Path through the points with rounded corners; stops short of the arrow tip. */
export function buildPath(points: Point[], withTip: boolean): string {
  const trimmed = points.slice();
  if (withTip) {
    const last = trimmed.length - 1;
    trimmed[last] = pull(points[last], points[last - 1], TIP_LENGTH - 1);
  }
  let d = `M${format(trimmed[0])}`;
  for (let i = 1; i < trimmed.length - 1; i++) {
    const before = pull(trimmed[i], trimmed[i - 1], CORNER_RADIUS);
    const after = pull(trimmed[i], trimmed[i + 1], CORNER_RADIUS);
    d += `L${format(before)}Q${format(trimmed[i])} ${format(after)}`;
  }
  d += `L${format(trimmed[trimmed.length - 1])}`;
  return d;
}

export function buildTip(points: Point[]): string {
  const tip = points[points.length - 1];
  const prev = points[points.length - 2];
  const length = Math.hypot(tip[0] - prev[0], tip[1] - prev[1]) || 1;
  const ux = (tip[0] - prev[0]) / length;
  const uy = (tip[1] - prev[1]) / length;
  const base: Point = [tip[0] - ux * TIP_LENGTH, tip[1] - uy * TIP_LENGTH];
  const left: Point = [base[0] - uy * TIP_HALF_WIDTH, base[1] + ux * TIP_HALF_WIDTH];
  const right: Point = [base[0] + uy * TIP_HALF_WIDTH, base[1] - ux * TIP_HALF_WIDTH];
  return `M${format(tip)}L${format(left)}L${format(right)}Z`;
}

/** Midpoint of the longest segment, where the edge label goes. */
export function labelPoint(points: Point[]): Point {
  let best: [Point, Point] = [points[0], points[1]];
  let bestLength = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const length = Math.hypot(
      points[i + 1][0] - points[i][0],
      points[i + 1][1] - points[i][1],
    );
    if (length > bestLength) {
      bestLength = length;
      best = [points[i], points[i + 1]];
    }
  }
  return [(best[0][0] + best[1][0]) / 2, (best[0][1] + best[1][1]) / 2];
}

export interface Detail {
  title?: string;
  kind?: string;
  text?: string;
  facts?: string[];
  code?: string;
}

export interface DiagramNode extends NodeGeometry {
  id: string;
  /** Plain-text name shown in the details pane and chips. */
  name: string;
  /** SVG-safe HTML for each line of the label (tspans allowed). */
  lines?: string[];
  shape?: "rect" | "circle";
  shaded?: boolean;
  /** Rich content rendered inside the node instead of lines. */
  html?: string;
  detail?: Detail;
}

export interface DiagramEdge extends EdgeRoute {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  detail?: Detail;
}

export interface DiagramPlate {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

export interface DiagramNote {
  x: number;
  y: number;
  lines: string[];
  anchor?: "start" | "middle" | "end";
  strong?: boolean;
}
