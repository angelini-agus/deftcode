# Feature: flip-stack-hold

User report (2026-11-14): in the projects deck the next card starts
covering the current one immediately, so the "VER CASO COMPLETO" link
is nearly unreachable and no scroll moment shows a full card.

## Root cause (in src/lib/flip-stack.ts)

flipCardState mapped each card's rise over the ENTIRE previous card's
segment, so a fully-uncovered moment never existed. Also every waiting
card sat at the same offset, so the topmost (last) project peeked
instead of the next one.

## Changes

- New hold phase: each card stays fully visible for the first half of
  its segment (hold = 0.5); the next card rises only during the second
  half. Waiting cards now stagger below each other (stackGap 64px), so
  the immediate next card peeks in the right order.
- entryOffset = cardHeight + 48 (was cardHeight * 0.9): during hold the
  next card clears the current one with visible air.
- Runway per card 75vh -> 90vh: calmer pace with the hold.

## Verified (CDP at 1920x970)

- Sampled card transforms across card 2's segment: waiting below,
  staggered order ([03] peeks, [04]/[05]/[06] deeper), rise in the
  second half, landed at the end.
- Screenshot at the hold moment: card [02] fully visible including
  VER CASO COMPLETO, clean gap, [03]/[04] tabs waiting below.
