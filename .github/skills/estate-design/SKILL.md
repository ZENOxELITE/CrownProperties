---
name: estate-design
description: "Use when changing Crown Properties fonts, colors, typography, spacing, responsive styling, imagery, components, or overall visual direction. Keep the real-estate interface consistent with its existing design tokens and verify frontend changes."
argument-hint: "Describe the visual change, such as changing the brand font, refreshing the color palette, or restyling a component."
user-invocable: true
---

# Estate Design System

Use this skill for visual changes in the Crown Properties React/Vite application. Preserve the existing editorial real-estate style unless the request explicitly asks for a new direction.

## Project Visual Direction

- Warm, paper-like surfaces with dark navy structure and muted green accents.
- Editorial typography: expressive display headings, readable body copy, and compact mono labels/data.
- Restrained borders, square corners, generous whitespace, and dense but scannable property information.
- Responsive layouts must work from small mobile screens through wide desktop screens.
- Use `lucide-react` for interface icons instead of drawing custom SVG icons.
- Keep property imagery prominent and useful. Do not replace real property images with decorative gradients or generic placeholders.

## Current Tokens

The canonical design tokens are in `tailwind.config.js`. Use these Tailwind names in JSX instead of repeating hex values:

| Token | Hex | Intended use |
| --- | --- | --- |
| `paper` | `#EFEBE2` | Main page and card surface |
| `ink` | `#16233F` | Primary text, dark navigation, dark sections |
| `copper` | `#5C7A66` | Primary accent, links, active states |
| `copper-light` | `#7A9A86` | Accent text on dark backgrounds |
| `copper-dark` | `#445E4D` | Accent hover and pressed states |
| `stamp` | `#8B3A2F` | Status and attention states, especially sold |
| `border` | `#C9C4B8` | Default rules and separators |
| `border-light` | `#D8D3C7` | Subtle borders |
| `border-dark` | `#B0A99A` | Stronger borders and field focus context |

Opacity variants such as `text-ink/60`, `bg-ink/80`, and `border-paper/10` are part of the existing visual language.

## Current Fonts

The Google Fonts import and global body font are in `src/index.css`. Tailwind aliases are in `tailwind.config.js`:

| Tailwind class | Font | Use |
| --- | --- | --- |
| `font-display` | Bricolage Grotesque | Page headings and expressive section titles |
| `font-serif` | Bricolage Grotesque | Existing property names, logos, and prominent values |
| `font-body` | DM Sans | Paragraphs and readable UI copy |
| `font-mono` | JetBrains Mono | Navigation, labels, metadata, prices, stats, form labels |

Note: `font-serif` is intentionally mapped to Bricolage Grotesque, not a serif typeface. Keep that alias behavior unless the task explicitly changes the design system.

## How To Change Fonts

1. Update the `@import` URL at the top of `src/index.css` with the required Google Font family and weights.
2. Update the matching `fontFamily` aliases in `tailwind.config.js`.
3. Preserve sensible fallbacks: `system-ui, sans-serif` for display/body and `ui-monospace, monospace` for data text.
4. Search `src/` for `font-display`, `font-serif`, `font-body`, and `font-mono` before changing component classes. Decide whether the new font belongs to an existing role or needs a new role.
5. Do not apply a new font family directly to individual components when an existing role can express the intent.
6. Load only the weights actually used. Current common weights are 300, 400, 500, 600, and 700 depending on the family.
7. Check long property titles, navigation labels, prices, form labels, and mobile headings after changing fonts. Adjust size, line height, or wrapping rather than allowing overlap or layout shifts.

## How To Change Colors

1. Update the named color in `tailwind.config.js` when changing a system color.
2. Update the matching raw color in `src/index.css` for `body`, focus outlines, scrollbar styling, or any global rule.
3. Search for hard-coded hex values with `rg "#[0-9A-Fa-f]{6}" src tailwind.config.js` and update intentional usages so the palette does not drift.
4. Keep semantic meaning stable: `ink` is structure/text, `paper` is surface, `copper` is the primary action/accent, `stamp` is status/attention, and `border` is separation.
5. Check contrast on both light and dark surfaces, including `text-paper` on `bg-ink`, `text-copper-light` on `bg-ink`, muted text, focus outlines, badges, and buttons.
6. Prefer token opacity classes over inventing near-duplicate colors. Add a new token only when the color has a distinct, reusable semantic role.

## Component And Layout Rules

- Reuse `PropertyCard`, `SearchBar`, `ContactForm`, `WhatsAppButton`, `Nav`, and `Gallery` patterns before creating new styling conventions.
- Keep page sections full-width with a constrained inner container. Use cards for repeated property records, framed tools, and dialogs, not for every page section.
- Preserve the existing container pattern: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` unless the feature needs a documented exception.
- Use stable dimensions for buttons, controls, grids, images, and property cards so font or content changes do not cause jumps.
- Keep controls keyboard accessible. Preserve visible `:focus-visible` outlines and add accessible labels to icon-only buttons.
- Use responsive classes and test narrow widths. Avoid fixed widths that make text, prices, or form controls overflow.
- For new motion, prefer the existing `fade-in`, `fade-in-up`, `scale-in`, and `draw-line` utilities. Keep animation purposeful and respect reduced-motion expectations.
- Keep copy concise and aligned with the property/agency context. Do not add explanatory UI text when an established control pattern is sufficient.

## Recommended Change Workflow

1. Identify the nearest owning file: global tokens in `src/index.css` or `tailwind.config.js`; page structure in `src/pages/`; reusable UI in `src/components/`.
2. Search existing token and font usage before editing.
3. Make the smallest token or component change that satisfies the request.
4. Inspect desktop and mobile layouts, especially navigation, hero content, property cards, status badges, forms, and footer contrast.
5. Run the focused checks below. Do not consider a visual change complete if it only looks correct at one viewport.

## Verification

Run from the project root:

```powershell
npm run lint
npm run typecheck
npm run build
```

For a visual check, start the app with `npm run dev` and inspect the affected route at mobile and desktop widths. Confirm:

- no text or controls overflow;
- all interactive states remain visible;
- colors remain legible on their backgrounds;
- font loading does not change the intended hierarchy;
- property images retain their aspect ratio and useful subject matter;
- no unrelated component has picked up the new style accidentally.

## Files To Know

- `src/index.css`: Google Fonts import, global body styles, focus styles, scrollbar, and animation utilities.
- `tailwind.config.js`: shared color and font tokens.
- `src/components/`: reusable visual building blocks.
- `src/pages/`: route-level composition and page-specific layout.
- `src/App.tsx`: app shell and global page background.