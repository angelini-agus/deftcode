# Feature: contact-page-ux

Batch of contact-page changes requested by the user (2026-11-11):

1. Any entry to /contacto/ (navbar CONTACTO, CTA button, any link that
   leads to contact) must scroll so the form is centered in the viewport,
   on every resolution. Rule: card slack >= 90px -> perfect vertical
   centering; tighter fits -> pin the card top with 64px air so the
   heading never hides under the fixed navbar. Smooth scroll, instant
   under prefers-reduced-motion, waits for document.fonts.ready.
2. Remove the "WHATSAPP DIRECTO" rapid action card. No direct WhatsApp
   contact channel anywhere on the site (wa.me purged from src). Rapid
   cards: correo electrónico (mailto), Instagram (profile), LinkedIn
   (company), in that order.
3. Optional phone field in the form with the promise: leave your number
   and Deftcode contacts you via WhatsApp. Phone is the only sanctioned
   WhatsApp touchpoint.
4. CtaSection "AGENDÁ 20 MIN." button (was wa.me) -> /contacto/ (es)
   and /en/contact/ (en); external new-tab behavior kept only for
   external hrefs.
5. Turnaround copy: "< 2 HORAS" -> "< 24 HORAS" (es + en).
6. Project-type select replaced by a custom listbox: native popups can't
   be themed to the black/white/orange palette. Panel opens 2px below
   the trigger (the 1px focus ring stays visible), options sit 2px
   apart, orange highlight on hover/focus, full keyboard support
   (arrows/Home/End/Enter/Space/Escape/Tab, outside-click close), value
   carried by a hidden input so web3forms still receives project_type.
   No preselected option: trigger starts as "ELEGÍ UNA OPCIÓN".
7. Form focus rings: 2px -> 1px (name, email, phone, trigger, textarea).

## Tasks

- [x] ContactFormSection: id on form card + load script that scrolls the
      card into centered position after fonts.ready. Commit: 5f1e1f8
- [x] ContactFormSection: swap WhatsApp card for Instagram + LinkedIn
      cards (icons reused from Navbar SVG paths). Commit: 5f1e1f8
- [x] ContactFormSection: optional phone field (type=tel, name=phone)
      with WhatsApp hint under the field. Commit: 5f1e1f8
- [x] content.ts: ctaContent.buttonHref -> /contacto/ + /en/contact/
      (both langs); wa.me removed from codebase. Commit: 5f1e1f8
- [x] Turnaround copy 2h -> 24h (es + en). Commit: 5f1e1f8
- [x] Custom project-type listbox (palette-safe, keyboard accessible).
      Commit: 5f1e1f8
- [x] Focus rings 2px -> 1px across the form. Commit: 5f1e1f8

## Notes

- Descriptive copy that mentions WhatsApp (services modules, case
  studies) stays: those describe product features, not Deftcode's own
  contact channel.
- Uppercase mono copy kept to match the form's established convention.
- Verified at 1920x970 (card centered, delta ~0), 1366x768 and 390x844
  (tight fit -> top pinned with 64px air, heading clear of the navbar)
  via CDP; dropdown measured: panel gap 2px, option gaps 2px, keyboard
  selection writes hidden input and closes.
- Headless quirk: :focus never matches in the CDP window, so ring
  rendering was verified by CSS rule inspection (calc(1px...) present),
  not computed style.
