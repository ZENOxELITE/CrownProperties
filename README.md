# Crown Properties

Modern real-estate agency website for Crown Properties, focused on property discovery, listings, property details, agency services, and contact workflows for Karachi, Pakistan.

## Overview

Crown Properties is a client-side React application built with Vite, TypeScript, Tailwind CSS, and React Router. The site presents residential and commercial property listings with responsive layouts, SEO metadata, agent contact actions, image galleries, and a Formspree-powered contact form.

## Main Features

- Responsive homepage with a featured-property hero section.
- Property listings with search, filtering, sorting, status labels, prices, specifications, and agent contact actions.
- Dynamic property detail pages using property slugs.
- Property image gallery with full-screen lightbox behavior.
- About, services, and contact pages.
- Reusable navigation, footer, SEO, contact form, WhatsApp button, and scroll-to-top components.
- Route-level document titles and metadata for search and social sharing.
- Keyboard focus styles and responsive mobile navigation.
- Shared Tailwind design tokens for the Crown Properties visual system.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, featured listings, agency information, statistics, and testimonials |
| `/listings` | Searchable and sortable property listing view |
| `/property/:slug` | Dynamic property detail page |
| `/about` | Agency history, values, and team information |
| `/services` | Services offered by Crown Properties |
| `/contact` | Contact form, office information, map, and contact methods |

Unknown routes fall back to the homepage.

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- PostCSS and Autoprefixer
- React Router
- Lucide React icons
- Formspree contact form endpoint
- Google Fonts: Bricolage Grotesque, DM Sans, and JetBrains Mono

The project also includes the Supabase client dependency for future or optional backend integration. The current property, agency, agent, and testimonial content is stored in local TypeScript data modules.

## Requirements

- Node.js with npm
- A modern browser

## Installation

From the project root:

```powershell
npm install
```

## Development

Start the Vite development server:

```powershell
npm run dev
```

Vite will print the local URL in the terminal. Open that URL in a browser while working on the site.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run typecheck` | Run TypeScript checks without emitting files |

Recommended validation before delivery:

```powershell
npm run lint
npm run typecheck
npm run build
```

## Project Structure

```text
.
├── .github/
│   └── skills/
│       └── estate-design/
│           └── SKILL.md              # Project visual design guidance
├── .bolt/
│   └── prompt                       # Legacy project workflow guidance
├── public/
│   └── favicon.svg                  # Browser favicon
├── src/
│   ├── components/                  # Reusable UI components
│   ├── data/                        # Agency, property, agent, and testimonial data
│   ├── pages/                       # Route-level page components
│   ├── App.tsx                      # Router and application shell
│   ├── index.css                    # Global CSS, fonts, Tailwind layers, and animations
│   ├── main.tsx                     # React entry point
│   └── vite-env.d.ts                # Vite TypeScript declarations
├── index.html                       # HTML shell and global SEO metadata
├── PROJECT_STRUCTURE.md             # File-by-file project inventory
├── package.json                     # Scripts and dependencies
├── package-lock.json                # Locked dependency versions
├── tailwind.config.js               # Tailwind theme tokens
├── postcss.config.js                # PostCSS configuration
├── vite.config.ts                   # Vite and path-alias configuration
├── tsconfig.json                    # TypeScript project references
├── tsconfig.app.json                # Application TypeScript configuration
├── tsconfig.node.json               # Tooling TypeScript configuration
├── eslint.config.js                 # ESLint configuration
└── README.md                        # Project documentation
```

For a more detailed description of every file, see [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

## Application Architecture

### Entry Point And Shell

- `src/main.tsx` mounts the React application and imports global styles.
- `src/App.tsx` defines the router, shared navigation, footer, page container, and route fallback.
- The `@/` import alias maps to `src/`, so imports should use paths such as `@/components/Nav`.

### Pages

Page components in `src/pages/` compose route-level content and use the shared `SEO` component to update the document title and metadata.

### Components

Components in `src/components/` hold reusable behavior and visual patterns:

- `Nav.tsx` - sticky header and responsive navigation.
- `Footer.tsx` - agency details, links, and social navigation.
- `Hero.tsx` - featured-property homepage hero.
- `PropertyCard.tsx` - reusable listing card.
- `SearchBar.tsx` - listing filters and search controls.
- `Gallery.tsx` - property images and lightbox.
- `ContactForm.tsx` - Formspree submission form.
- `WhatsAppButton.tsx` - WhatsApp contact action.
- `SEO.tsx` - route-level title and meta tag updates.
- `ScrollToTop.tsx` - resets scroll position after navigation.

### Data

The app currently uses local TypeScript data rather than a remote CMS:

- `src/data/agency.ts` - canonical Crown Properties identity and contact configuration.
- `src/data/properties.ts` - property records, types, statuses, and price formatting.
- `src/data/agents.ts` - agent records, biographies, and contact information.
- `src/data/testimonials.ts` - customer testimonials.

When updating the agency name, email, phone number, social links, office details, or statistics, start with `src/data/agency.ts`. Most visible agency references are derived from that object.

## Current Agency Configuration

- Name: Crown Properties
- Location: Karachi, Pakistan
- Areas served: Clifton, DHA, Bahria Town, Gulshan-e-Iqbal, PECHS, Malir Cantt, and North Nazimabad
- Currency: PKR, displayed with the `Rs` symbol
- Contact form: Formspree endpoint configured in `src/data/agency.ts`
- WhatsApp: configured in `src/data/agency.ts` and used by property and contact actions

Operational contact values are maintained in the agency and agent data files. Update those values before production use if the displayed contact channels change.

## Design System

The design system is documented in [.github/skills/estate-design/SKILL.md](.github/skills/estate-design/SKILL.md).

### Fonts

- `font-display` and `font-serif`: Bricolage Grotesque for headings, logos, and prominent values.
- `font-body`: DM Sans for readable paragraph and interface copy.
- `font-mono`: JetBrains Mono for navigation, labels, metadata, prices, and statistics.

### Tailwind Color Tokens

The shared tokens are defined in `tailwind.config.js`:

| Token | Purpose |
| --- | --- |
| `paper` | Warm page and card surface |
| `ink` | Primary text and dark navigation/sections |
| `copper` | Main green accent and action color |
| `copper-light` | Accent text on dark backgrounds |
| `copper-dark` | Hover and pressed accent state |
| `stamp` | Status and attention color |
| `border`, `border-light`, `border-dark` | Interface rules and separators |

Use the existing token classes instead of adding repeated hex values in components.

## SEO And Metadata

- Global title, description, favicon, Open Graph, and Twitter metadata are in `index.html`.
- Page-specific metadata is managed through `src/components/SEO.tsx`.
- When adding a page, provide a meaningful title and description through `SEO`.
- Keep the Crown Properties name and Karachi service-area language consistent across metadata and visible copy.

## Contact And External Services

- Contact form submissions are sent to the Formspree URL in `src/data/agency.ts`.
- WhatsApp links are generated from agent and agency phone data.
- The contact page uses the configured Google Maps embed URL.
- Property images currently use remote image URLs stored in the property data.
- Social profile URLs are configured in `src/data/agency.ts`.

Review these endpoints and URLs before deploying to a real business environment.

## Styling And Content Guidelines

- Reuse existing components and Tailwind tokens before introducing new patterns.
- Keep layouts responsive on mobile and desktop.
- Preserve visible keyboard focus states.
- Use Lucide React for interface icons.
- Keep property images useful and maintain their intended aspect ratios.
- Use `font-display`, `font-body`, and `font-mono` roles consistently.
- Keep status colors meaningful: green accent for primary actions, navy for structure, red stamp for attention or sold states.
- Avoid hard-coded values when an existing token or shared data value expresses the same concept.

## Deployment

Build the production assets with:

```powershell
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider that supports client-side history fallback. Configure the host to serve `index.html` for application routes such as `/listings` and `/property/:slug`.

Before deployment, verify:

1. Contact and social URLs are correct.
2. The Formspree endpoint is active.
3. Remote property images load over HTTPS.
4. Deep links work after a page refresh.
5. The production build passes lint, typecheck, and build checks.

## Maintenance Notes

- `node_modules/` is generated by `npm install` and should not be edited manually.
- `dist/` is generated by `npm run build` and should not be edited manually.
- Keep `package-lock.json` synchronized when dependency versions change.
- Update `PROJECT_STRUCTURE.md` when adding or removing major project files.
- Update this README when routes, integrations, scripts, or architecture change.
