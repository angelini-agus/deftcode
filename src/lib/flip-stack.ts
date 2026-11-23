// Matemática del mazo de tarjetas con resorte para la sección de proyectos.
// Librería pura: sin DOM, sin dependencias de runtime.

export type FlipGeometry = {
  readonly total: number;
  readonly segment: number;
  readonly step: number;
  readonly entryOffset: number;
  /** Fraction of each segment the front card stays fully visible
   *  before the next card starts rising over it (user request: there
   *  must be a scroll moment where the whole card reads uncovered). */
  readonly hold: number;
  /** Vertical stagger between waiting cards so only the next card
   *  peeks under the front one during the hold phase. */
  readonly stackGap: number;
};

export type FlipCardState = {
  y: number;
  scale: number;
  opacity: number;
};

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
const clamp = (n: number, lo: number, hi: number) =>
  n < lo ? lo : n > hi ? hi : n;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const flipGeometry = (
  total: number,
  step: number,
  entryOffset: number,
  hold = 0.5,
  stackGap = 64,
): FlipGeometry => {
  const safeTotal = Math.max(0, Math.floor(total));
  const m = Math.max(safeTotal, 1);
  return {
    total: safeTotal,
    segment: 1 / m,
    step: Math.max(0, step),
    entryOffset: Math.max(0, entryOffset),
    hold: clamp01(hold),
    stackGap: Math.max(0, stackGap),
  };
};

export const flipCardState = (
  progress: number,
  index: number,
  geometry: FlipGeometry,
  reduceMotion: boolean,
): FlipCardState => {
  const p = clamp01(progress);
  const { total, segment } = geometry;

  if (total === 0 || index < 0 || index >= total) {
    return { y: 0, scale: 1, opacity: 1 };
  }

  if (reduceMotion) {
    const opacity = clamp01(1 - Math.abs(p / segment - index));
    return { y: 0, scale: 1, opacity };
  }

  const { hold, entryOffset: rise, step } = geometry;
  const u = p / segment;
  // Every card — the first one included — stays HIDDEN until its own
  // rise starts: card i rises during the first `hold` portion of its
  // own segment [i, i + hold], so nothing of the deck is ever visible
  // before the user scrolls (user request: the deck must not peek at
  // the bottom of the viewport at any resolution). Once landed it holds
  // uncovered for the rest of its segment; fully covered cards drift
  // up by `step` per extra segment so the deck keeps its stacked peek.
  let y: number;
  let opacity: number;

  if (u > index + 1) {
    y = step * (index + 1 - u);
    opacity = 1;
  } else if (u >= index + hold) {
    y = 0;
    opacity = 1;
  } else if (u > index) {
    const t = (u - index) / Math.max(hold, 1e-6);
    y = rise * (1 - t);
    // Fade in fast while rising so a card never pops in abruptly.
    opacity = clamp01(t / 0.3);
  } else {
    // Waiting below the stage: fully hidden, zero footprint on screen.
    y = rise + (index - u) * geometry.stackGap;
    opacity = 0;
  }

  const scaleT = clamp01(Math.abs(y) / Math.max(rise, 1e-6));
  const scale = lerp(1, 0.98, scaleT);

  return { y, scale, opacity };
};

export const flipFront = (progress: number, geometry: FlipGeometry): number => {
  const { total, segment } = geometry;
  if (total === 0) return 0;
  const p = clamp01(progress);
  const raw = Math.floor(p / segment + 1e-9);
  return clamp(raw, 0, total - 1);
};

export const flipProgress = (
  scrollY: number,
  runwayTop: number,
  runwayHeight: number,
  stickyHeight: number,
): number => {
  const denom = runwayHeight - stickyHeight;
  if (denom <= 0) return 1;
  return clamp01((scrollY - runwayTop) / denom);
};

export type SpringConfig = {
  stiffness: number;
  damping: number;
  mass: number;
  restDelta: number;
};

export type SpringStep = {
  value: number;
  velocity: number;
  settled: boolean;
};

export const defaultSpringConfig = (): SpringConfig => ({
  stiffness: 140,
  damping: 24,
  mass: 0.8,
  restDelta: 0.0005,
});

export const springStep = (
  value: number,
  velocity: number,
  target: number,
  dt: number,
  config: SpringConfig,
): SpringStep => {
  const clampedDt = Math.min(Math.max(dt, 0), 1 / 30);
  const { stiffness, damping, mass, restDelta } = config;

  const force = stiffness * (target - value) - damping * velocity;
  const newVelocity = velocity + (force / mass) * clampedDt;
  const newValue = value + newVelocity * clampedDt;

  const settled =
    Math.abs(target - newValue) < restDelta &&
    Math.abs(newVelocity) < restDelta;

  return {
    value: settled ? target : newValue,
    velocity: settled ? 0 : newVelocity,
    settled,
  };
};
