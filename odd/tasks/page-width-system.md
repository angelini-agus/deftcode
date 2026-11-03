# Feature: page-width-system

Normalize one content width (`--page-max: 80rem` = Tailwind max-w-7xl)
across pages and make the 2px black section separators span exactly the
content box, never the html edges (user request 2026-11-03).

## Tasks

- [x] T1 global.css: `:root --page-max` + `.rule-page-bottom`
      (absolute ::after, inset = max(ms padding, centered 80rem)).
- [x] T2 30 top-level section separators migrated off
      `border-b-2 border-black` to `.rule-page-bottom` (with `relative`).
- [x] T3 structural containers max-w-6xl -> max-w-7xl; hero divider row
      capped with max-w-7xl mx-auto.
- [x] T4 navbar: uniform px-4 md:px-12; pill nav hidden lg:flex,
      toggle + drawer lg:hidden (kills the 768px squeeze).
- [x] T5 verify: computed ::after edges == container edges at 1440
      (68px == 68px); document horizontal overflow 0 on 4 pages x 4
      sizes via plain headless launches (unit-e-final.mjs log).
      Emulation.setDeviceMetricsOverride artifacts ignored (phantom ICB).

## Evidence log

- rule at 1440: left/right = 68px, container box [68..1348] (772 at 768).
- ovf log: w=360/744/1280/1920 x 4 urls all ovf=0.
- Mobile fit at 360: brand 120px + controls 122px + toggle fits 328px row.
