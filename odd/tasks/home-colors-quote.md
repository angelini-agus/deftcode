# Feature: home-colors-quote

Refinements to the home color scheme + the client quote (2026-11-14,
after the first inversion pass felt wrong to the user):

- FeaturedCase ("// CASOS & ENTREGABLES / SOFTWARE EN PRODUCCIÓN")
  stays ORANGE and now carries the real client testimonial: Paola
  Zorila (AZ Servicios de Limpieza), copied from misura-web's
  clientQuote. Vertical 2px black rule as the quote mark, highlight
  phrase ("se resuelve de forma automática") as black mark with orange
  text, signature in the site's mono. Quote text stays in Spanish on
  both locales — translating a real client's voice would be inventing.
- ForWho ("// PARA QUIÉN", black section): the NO card ("NO ES PARA VOS
  SI") is now the first one and wears the orange solid background with
  black crosses; the YES card answers second as the ghost card with
  orange checks. Leads with the section's message.
- TeamTeaser ("// QUIÉN CONSTRUYE"): reverted to the black design
  (ghost member cards, orange closing band) per user.

Final home sequence: Hero orange -> Marquee black -> Servicios black ->
Casos ORANGE (+ Paola quote) -> ParaQuién black -> QuiénConstruye black
-> FAQ black -> CTA orange -> Footer black.

## Verified (CDP 1920x970)

- Section backgrounds read as listed above.
- Quote present: text, author PAOLA ZORILA, mark text exact.
- ParaQuién card order: NO (orange solid) first, YES (ghost) second.
