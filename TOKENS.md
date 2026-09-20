# Pulse design tokens (locked gates 1–7)

Teaching project. Rulers: A frontend-design + B Linear/Raycast.
Visual baseline: static preview at /workspace/pulse-preview/index.html

## Product
Developer "service heartbeat" monitoring. Dark, restrained, product-as-hero.
Hero = fake product panel with heartbeat polyline (left copy ~42% / right panel ~58%).

## Color
| Token | Value | Role |
|---|---|---|
| canvas | `#010102` | page bg |
| surface | `#0F1011` | nav / cards |
| surface-2 | `#141516` | panel inner |
| hairline | `#23252A` | 1px borders |
| hairline-hover | `#2E3238` | hover border |
| ink | `#F7F8F8` | primary text |
| ink-muted | `#8A8F98` | secondary |
| accent | `#3DDCFF` | ONLY accent (chart, Live, primary CTA) |
| accent-dim | `rgba(61,220,255,0.12)` | soft highlight |

## Type (Inter / Geist)
- Display: 56–64 / semibold / tracking ≈ -0.03em
- H2: 28–32 / medium / -0.02em
- Body: 16 / regular / 1.5
- Muted: 14
- CTA: 14 / medium
One family only. Do NOT color-highlight a single word in the headline.

## Spacing (4px grid)
space 4/8/12/16/24/32/48; section gap 80–96. max-width 1120px; page pad 24–32.

## Elevation
- hairline primary
- elev-1: `0 1px 2px rgba(0,0,0,0.35)`
- elev-2: `0 4px 12px rgba(0,0,0,0.25)` (hover only)
No multicolor glow. Shadow never replaces hairline.

## Radius & controls
- radius-lg 12 / md 8 / sm 6
- primary CTA h=40; secondary h=36; nav h=56

## Layout
- Sticky nav
- Hero min-h ≈ 72vh, left copy / right fake panel
- Three equal feature cards, gap 16–24
- Footer single row + top hairline

## Copy (EN ok)
- H1: Keep every service breathing.
- Lede: Pulse watches latency, errors, and uptime as one quiet signal — so you notice the skip before users do.
- Features: Unified heartbeat / Quiet alerts / One panel
