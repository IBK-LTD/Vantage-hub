---
name: Opportunity Hub
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#474651'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#777682'
  outline-variant: '#c8c5d3'
  surface-tint: '#5654a8'
  primary: '#1a146b'
  on-primary: '#ffffff'
  primary-container: '#312e81'
  on-primary-container: '#9c9af4'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#372000'
  on-tertiary: '#ffffff'
  tertiary-container: '#543300'
  on-tertiary-container: '#e49200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#100563'
  on-primary-fixed-variant: '#3e3c8f'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.35'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.55'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.025em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-3xs: 0.125rem
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 75rem
---

## Brand & Style

This design system establishes an authoritative yet welcoming platform for ambitious individuals seeking transformative internships, fellowships, and academic grants. Merging the rigorous discernment of an academic institution with the crisp efficiency of modern fintech SaaS, it projects credibility, intellectual rigor, and forward momentum.

### Key Tenets
- **Scholarly Authority:** High-contrast editorial typography sets an intentional, considered cadence that dignifies life-changing career milestones.
- **Utilitarian Clarity:** Information-dense opportunity cards and application criteria are rendered with functional minimalism, avoiding visual noise.
- **Tactile Trust:** Grounded borders and delicate ambient shadows invoke the tactile precision of archival portfolios and premium legal stationery.

## Colors

The palette is anchored by an imperial midnight indigo seed, imparting institutional weight without the coldness of corporate navy.

### Palette Roles
- **Primary (`#312E81`):** Applied to primary navigation markers, core structural typography, active states, and authoritative accents.
- **Secondary (`#10B981`):** Serves as the action catalyst—used for high-value "Apply Now" triggers, acceptance confirmations, and open application badges.
- **Tertiary (`#F59E0B`):** Reserved strictly for urgency indicators, nearing deadlines, and pending requirement callouts.
- **Neutral Surface & Base:**
  - Base Background: `#F9FAFB` provides a calm, glare-free reading canvas.
  - Surface Elevation 1 (Cards, Overlays): `#FFFFFF` maintains sharp, clinical contrast.
  - Border and Dividers: `#E5E7EB` for quiet structural scaffolding.
  - Text Primary: `#111827` delivers crisp legibility across all viewport sizes.
  - Text Secondary: `#6B7280` for metadata, dates, and auxiliary notes.

## Typography

The editorial pairing marries `Newsreader`—a humanist serif with literary pedigree—with `Plus Jakarta Sans`, a geometric sans-serif that retains warmth through open apertures and friendly curves.

- **Editorial Headings:** `Newsreader` is employed for section headings, opportunity titles, and feature narratives. Large titles should utilize optical italic accents selectively for prestige.
- **Interface & Metadata:** `Plus Jakarta Sans` is designated for UI labels, search filters, form entries, and tabular application data, maintaining clarity at small scales.

## Layout & Spacing

The layout utilizes a structured 12-column responsive fluid grid pinned to a maximum container width of `75rem` (1200px), maintaining focused readability for programmatic search workflows.

### Breakpoints & Adaptive Rules
- **Mobile (< 640px):** Single-column layout. Gutters and outer margins reduce to `space-md` (16px). Search filters collapse into a bottom-anchored modal sheet.
- **Tablet (640px - 1024px):** 6-column grid with `space-lg` (24px) gutters. Complex dashboards split into stacked modules.
- **Desktop (> 1024px):** 12-column grid. Common layout pattern features a 3-column sticky filter and contextual sidebar paired with a 9-column dynamic feed.

### Rhythm
Spacers strictly follow an 8pt base grid (`0.5rem`, `1rem`, `1.5rem`, `2rem`), allowing elements to align harmoniously against adjacent card edges and input perimeters.

## Elevation & Depth

Visual hierarchy is maintained through subtle, diffused ambient shadows paired with razor-sharp borders, reflecting the exacting precision of fintech tools.

### Elevation Hierarchy
- **Level 0 (Canvas Base):** Plain `#F9FAFB` surface with no shadows.
- **Level 1 (Default Cards & Fields):** Solid `#FFFFFF` fill bounded by a 1px `#E5E7EB` border. Box shadow: `0 1px 2px 0 rgba(17, 24, 39, 0.04)`.
- **Level 2 (Interactive Hover & Flyouts):** Slight uplift for active cards and standard dropdown menus. Box shadow: `0 4px 6px -1px rgba(49, 46, 129, 0.06), 0 2px 4px -2px rgba(17, 24, 39, 0.04)`. Border shifts subtly to `#D1D5DB`.
- **Level 3 (Modals & Overlays):** Used for application forms and deep filter draws. Box shadow: `0 20px 25px -5px rgba(49, 46, 129, 0.08), 0 8px 10px -6px rgba(17, 24, 39, 0.04)`. Accompanied by a muted backdrop blur (`backdrop-filter: blur(4px)`) over `#111827` at 20% opacity.

## Shapes

The design system adopts a soft, disciplined geometry (`roundedness: 1`), conveying structured craftsmanship.

- **Base Components:** Standard buttons, text fields, and badges utilize `0.25rem` (4px) to `0.375rem` (6px) corner radiuses.
- **Cards & Data Panels:** Mid-tier content groupings use `0.5rem` (8px).
- **Hero Containers & Sticky Shelves:** Major structural containers scale up to `0.75rem` (12px).
- **Pill Exceptions:** Micro status pips and circular counter badges alone may employ full pill curves (`9999px`) to distinguish categorical metadata from interactive elements.

## Components

### Buttons
- **Primary Action ("Apply Now"):** `#10B981` background, white label, medium weight. On hover: shifts to `#059669` with an active transition of 150ms.
- **Secondary (Brand Anchor):** `#312E81` background, white label. Used for core navigation and high-level platform workflows.
- **Outline / Ghost:** 1px border in `#E5E7EB`, text `#111827`, `#FFFFFF` background. Hover state introduces `#F9FAFB` fill and `#D1D5DB` border.

### Opportunity Cards
- Built on Level 1 elevation with a minimum padding of `1.5rem`.
- Headline uses `Newsreader` (`headline-sm`), providing immediate visual separation between the program name and organization.
- Includes a dedicated metadata tray along the bottom border containing funding amount, location badge, and an urgency marker.

### Badges & Chips
- **Open Status:** `#ECFDF5` background with `#065F46` label and a 4px secondary-colored interior pulse dot.
- **Urgent / Approaching Deadline:** `#FFFBEB` background with `#92400E` label.
- **Filter Tags:** Neutral `#F3F4F6` background, `#374151` text, with an inline dismiss trigger using roundedness level 1.

### Inputs & Search Bars
- Background: `#FFFFFF` with inset 1px `#D1D5DB` outline.
- Height: 42px default, padded with `0.75rem` horizontal inset.
- Focus State: Replaces default border with `#312E81` accompanied by a 3px ambient focus ring tinted at 15% opacity (`rgba(49, 46, 129, 0.15)`).

### Lists & Key-Value Grids
- Used extensively within scholarship eligibility breakdowns.
- Key items render in `label-sm` muted `#6B7280`, values render in `body-sm` `#111827`. Items are separated by subtle horizontal dividers (`#F3F4F6`).