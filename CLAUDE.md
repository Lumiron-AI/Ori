# CLAUDE.md — Lumiron · Ori · Landing Page

> Read this file **in full before taking any action** on this project.

---

## 1. Project Context

**Lumiron** is an AI-focused agency. It builds and commercializes **Ori**, a next-generation AI agent designed to automate customer interaction management.

### Ori — What it does

Ori is a conversational and voice AI agent that can:

- **Answer incoming phone calls** on behalf of human teams
- **Reply to messages** on WhatsApp, Instagram, and other messaging channels
- **Handle customer requests**: reservations, frequently asked questions (FAQ), service information
- **Adapt to multiple industries**: restaurants, hospitality, healthcare, beauty, personal services, and more

### The website

The site is a **landing page** whose mission is to:

1. Present Ori and its benefits clearly and convincingly
2. Generate qualified leads (contact requests, demo bookings)
3. Establish Lumiron's credibility and premium positioning in the AI ecosystem

---

## 2. Project Goals

| Priority | Goal                                                       |
| -------- | ---------------------------------------------------------- |
| 🔴 P0    | Convert visitors into leads (demo / contact CTA)           |
| 🔴 P0    | Communicate Ori's value in under 10 seconds (hero section) |
| 🟠 P1    | Showcase concrete use cases by industry                    |
| 🟠 P1    | Build trust through design, copywriting, and social proof  |
| 🟡 P2    | Be fully responsive and performant on mobile and desktop   |
| 🟡 P2    | Strictly respect Lumiron's visual identity                 |

---

## 3. Stack & Tooling

| Layer      | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Framework  | Next.js 14 (App Router) — React + TypeScript                  |
| Styling    | Tailwind CSS v3 — config at `tailwind.config.js`              |
| Font       | **Red Hat Display** — loaded via Google Fonts (`globals.css`) |
| Icons      | Lucide React                                                  |
| Animation  | Framer Motion                                                 |
| Components | ShadCN                                                        |

**Hard rules:**

- ❌ Never use `style={{}}` for values that exist in the Tailwind config
- ❌ Never use arbitrary `[]` values for design-token properties
- ✅ Always extend `tailwind.config.js` to add a missing token

---

## 4. Design Tokens — Source of Truth (Figma Charte Graphique)

> Figma file: **Lumiron - Ori phone 2** (`3bbfpp468BTC9HL3yVQjGC`)
> Reference node: **Charte graphique** `1419:3967`

### 4.1 Color Palette

```ts
// tailwind.config.js → theme.extend.colors

// ── Brand (shared across both modes) ────────────────────────────────────
primary:              '#FF4F38'  // Primaire   — CTAs, highlights, active states
'brand-accent':       '#99ADD3'  // Secondaire — blue-gray accent, badges
'ori-message':        '#3E67B5'  // Ori Messages product color

// ── Light mode (day) surfaces ────────────────────────────────────────────
background:           '#FAF8F6'  // Fond           — root page background
'background-secondary': '#E9E9E9' // Fond secondaire — cards, inputs, chips
'background-tertiary':  '#DFDFDF' // Fond tertiaire  — dividers, subtle borders
'background-element':   '#FFFFFF' // Élément         — pure white UI surfaces

// ── Light mode text ──────────────────────────────────────────────────────
text:                 '#FFFFFF'  // White — on dark/primary surfaces
'text-primary':       '#131923'  // Main body text
'text-heading':       '#243447'  // Heading variant — cards, pricing
'text-secondary':     '#6F7C8C'  // Muted labels, placeholders
'text-tertiary':      '#9EAEC2'  // Hints, captions, disabled

// ── Dark mode (night) surfaces ────────────────────────────────────────────
'dark-bg':            '#0E1116'  // Root dark page background
'dark-surface':       '#131923'  // Secondary dark surface (nav, footer)
'dark-elevated':      '#1F293A'  // Panels, modals, cards
'dark-overlay':       '#2A374D'  // Chips, tags, hover states
```

**Usage rules:**

- `bg-primary` → primary CTAs and key interaction surfaces
- `bg-dark-bg` / `bg-dark-surface` → dark page backgrounds and nav
- `bg-background` → root light background; `bg-background-secondary` → cards
- Text on dark surfaces → `text-text` (white)
- Text on light surfaces → `text-text-primary`
- Card/pricing headings → `text-text-heading`
- Muted/meta text → `text-text-secondary` or `text-text-tertiary`
- ❌ Never use raw hex values in `className` — always use the token alias

**Dark mode pairing (always add both classes together):**

```tsx
<div className="bg-background dark:bg-dark-bg">
<h1 className="text-text-primary dark:text-text">
<div className="bg-background-secondary dark:bg-dark-elevated">
<p className="text-text-secondary dark:text-text-tertiary">
```

### 4.2 Typography

Single font: **Red Hat Display**. Both `font-sans` and `font-display` map to it.

**Type scale:**

| Class       | px   | Use case                                 |
| ----------- | ---- | ---------------------------------------- |
| `text-xs`   | 12px | Micro labels, badges, tags               |
| `text-sm`   | 14px | Footnotes, captions                      |
| `text-base` | 16px | Default body text                        |
| `text-lg`   | 18px | Emphasized body, pricing subtitles       |
| `text-xl`   | 20px | Card titles, subheadings                 |
| `text-2xl`  | 23px | Section labels, card headings            |
| `text-3xl`  | 32px | Sub-section headings                     |
| `text-4xl`  | 40px | Display prices, stat numbers             |
| `text-5xl`  | 45px | Page headings — `leading-[80px]`         |
| `text-6xl`  | 64px | Hero / display titles — `leading-[80px]` |

**Font weight rules:**

- `font-normal` (400) — body text, captions, descriptions
- `font-medium` (500) — subheadings, list labels, tab buttons
- `font-semibold` (600) — card headings (`text-2xl`), section labels
- `font-bold` (700) — page titles, hero headings, CTA labels, prices

**Typography patterns:**

```tsx
// Hero title
<h1 className="font-display font-bold text-6xl text-text-primary dark:text-text leading-[80px]">

// Section heading
<h2 className="font-display font-bold text-5xl text-text-primary dark:text-text leading-[80px]">

// Card / panel heading
<h3 className="font-display font-semibold text-2xl text-text-heading dark:text-text">

// Body text
<p className="font-sans font-normal text-base text-text-primary dark:text-text/80">

// Muted text
<span className="font-sans font-normal text-sm text-text-secondary dark:text-text-tertiary">

// Caption / hint
<span className="font-sans font-normal text-xs text-text-tertiary">

// Section badge / label
<span className="font-display font-semibold text-sm text-primary tracking-widest">
  SECTION LABEL
</span>
```

### 4.3 Border Radius

```
rounded-xs    →  4px   (chips, small tags)
rounded-sm    →  5px   (accent bars, FAQ indicator)
rounded        →  8px   (inputs, small buttons)
rounded-md    → 10px   (input field fills)
rounded-lg    → 12px   (medium panels) — reserved
rounded-xl    → 15px   (tab buttons)
rounded-2xl   → 20px   (large CTA buttons)
rounded-3xl   → 25px   (cards, main panels)
rounded-4xl   → 30px   (hero panels, large overlays)
rounded-5xl   → 50px   (solution feature cards)
rounded-full           (pills, avatars, icon buttons)
```

### 4.4 Spacing

Base grid: **4px**.

| Use                      | Class                     | Value   |
| ------------------------ | ------------------------- | ------- |
| Micro gap (icon + label) | `gap-1` / `gap-2`         | 4–8px   |
| Small inner padding      | `p-3`                     | 12px    |
| Component inner padding  | `p-4`                     | 16px    |
| Card padding             | `p-6` / `p-8`             | 24–32px |
| Section gap (vertical)   | `gap-6` / `gap-8`         | 24–32px |
| Section rhythm           | `py-16 md:py-20 lg:py-24` | 64–96px |
| Screen horizontal margin | `px-5 md:px-10`           | 20–40px |

### 4.5 Shadows

```
shadow-orange-btn  → 0px 4px 40px rgba(255, 79, 56, 0.30)   — primary CTA buttons
shadow-blue-btn    → 0px 4px 40px rgba(62, 103, 181, 0.30)  — ori-message buttons
shadow-card        → 0px 0px 50px rgba(0, 0, 0, 0.18)       — cards and panels
shadow-card-sm     → 0px 0px 20px rgba(0, 0, 0, 0.10)       — subtle card lift
```

---

## 5. Inputs & Expected Outputs

### Inputs provided

| Source           | Content                                             |
| ---------------- | --------------------------------------------------- |
| Figma file (MCP) | Desktop & mobile mockups, design system, components |
| This `CLAUDE.md` | Directives, tokens, code rules                      |
| Copywriting      | Text content provided throughout the project        |

### Expected outputs

| Deliverable      | Format                | Quality criteria                     |
| ---------------- | --------------------- | ------------------------------------ |
| React components | `.tsx` — App Router   | Typed, accessible, responsive        |
| Styles           | Tailwind classes only | No `style={{}}`, no raw values       |
| File structure   | Convention below      | Organized and consistent             |
| Code             | Strict TypeScript     | No `any`, props typed via interfaces |

**Expected file structure:**

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # HeroSection, FeaturesSection, PricingSection…
│   └── ui/           # Button, Card, Badge, Input…
└── lib/              # Utilities, constants
```

---

## 6. Rules to Follow

### 6.1 Code

```tsx
// ✅ Correct pattern — Button component
interface ButtonProps {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
	onClick?: () => void;
}

export function Button({
	variant = "primary",
	size = "md",
	children,
	onClick,
}: ButtonProps) {
	const base =
		"inline-flex items-center justify-center gap-2 font-display font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

	const variants = {
		primary:
			"bg-primary text-text hover:bg-primary/90 active:bg-primary/80 shadow-orange-btn",
		secondary:
			"bg-background-secondary dark:bg-dark-elevated text-text-primary dark:text-text hover:bg-background-tertiary dark:hover:bg-dark-overlay",
		ghost:
			"bg-transparent text-text-primary dark:text-text border border-background-secondary dark:border-dark-elevated hover:bg-background-secondary dark:hover:bg-dark-elevated",
	};

	const sizes = {
		sm: "px-4 py-2 text-sm h-9",
		md: "px-6 py-3 text-base h-11",
		lg: "px-8 py-4 text-lg h-[60px]",
	};

	return (
		<button
			className={`${base} ${variants[variant]} ${sizes[size]}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
```

```tsx
// ✅ Card pattern (light)
<div className="bg-background-secondary dark:bg-dark-elevated rounded-3xl p-6 shadow-card">

// ✅ Card pattern (white surface)
<div className="bg-background-element dark:bg-dark-elevated rounded-3xl p-6 shadow-card">

// ✅ Standard section pattern
<section className="bg-background dark:bg-dark-bg py-16 md:py-20 lg:py-24 px-5 md:px-10">
  <div className="max-w-8xl mx-auto">
    <span className="font-display font-semibold text-sm text-primary tracking-widest">LABEL</span>
    <h2 className="font-display font-bold text-5xl text-text-primary dark:text-text leading-[80px] mt-4">Title</h2>
    <p className="font-sans font-normal text-lg text-text-secondary dark:text-text-tertiary mt-3">Subtitle</p>
    <div className="mt-12">…</div>
  </div>
</section>
```

### 6.2 Interactive States

```
Default   → base token color
Hover     → /90 opacity modifier   (e.g. bg-primary/90)
Active    → /80 opacity modifier   (e.g. bg-primary/80)
Disabled  → opacity-50 cursor-not-allowed
Focus     → ring-2 ring-primary ring-offset-2
```

### 6.3 Naming Conventions

| Element          | Convention           | Example                            |
| ---------------- | -------------------- | ---------------------------------- |
| Components       | PascalCase           | `ComparisonSection`, `PricingCard` |
| Props interfaces | `ComponentNameProps` | `ButtonProps`                      |
| Files            | kebab-case.tsx       | `comparison-section.tsx`           |
| Folders          | feature-grouped      | `sections/`, `ui/`, `layout/`      |

### 6.4 Mobile-First Layout

```tsx
// Vertical stack
<div className="flex flex-col gap-4">

// Row (icon + text)
<div className="flex flex-row items-center gap-3">

// Responsive 2-col
<div className="flex flex-col lg:flex-row gap-8">

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
```

### 6.5 Dark Mode

`darkMode: 'class'` — toggled via `.dark` on `<html>`.

| Light token                   | Dark token                  |
| ----------------------------- | --------------------------- |
| `bg-background`               | `dark:bg-dark-bg`           |
| `bg-background-secondary`     | `dark:bg-dark-elevated`     |
| `bg-background-tertiary`      | `dark:bg-dark-overlay`      |
| `text-text-primary`           | `dark:text-text`            |
| `text-text-heading`           | `dark:text-text`            |
| `text-text-secondary`         | `dark:text-text-tertiary`   |
| `border-background-secondary` | `dark:border-dark-elevated` |

### 6.6 Do / Don't

| ✅ Do                              | ❌ Don't                                |
| ---------------------------------- | --------------------------------------- |
| `text-text-secondary`              | `text-[#6F7C8C]`                        |
| `bg-primary`                       | `bg-[#FF4F38]`                          |
| `rounded-3xl`                      | `rounded-[25px]`                        |
| `bg-background-secondary`          | `bg-[#E9E9E9]`                          |
| `text-text-primary dark:text-text` | `text-[#131923]`                        |
| `bg-dark-elevated`                 | `bg-[#1F293A]`                          |
| `font-display font-bold`           | `style={{ fontFamily: '…' }}`           |
| `flex flex-col gap-6`              | Margin stacking (`mt-4 mb-4`)           |
| `text-text` on dark backgrounds    | `text-white` (use the alias)            |
| `container-site` utility           | Hardcoded `max-w-[1408px] mx-auto px-5` |

---

## 7. Decision-Making

### 7.1 Reading Directives

Before generating or modifying **any** file, Claude must:

1. Re-read the relevant sections of this `CLAUDE.md`
2. Query the Figma MCP for the relevant mockup if available
3. Identify the component or section and its associated tokens
4. Verify that the produced code complies with all rules above

### 7.2 Asking for Clarification

Claude **must** ask for clarification before acting if:

- 🟡 A Figma mockup is missing or inaccessible for the requested section
- 🟡 Copywriting is missing for a section
- 🟡 An interactive behavior (animation, logic) is not specified
- 🟡 A design token appears to be missing from `tailwind.config.js`
- 🔴 The request contradicts a rule in this file (e.g. using `style={{}}`)

Claude should **not** block on minor layout or spacing decisions that can be inferred from the patterns defined in this file.

### 7.3 Error Handling

When something goes wrong, Claude must:

| Situation                         | Action                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------- |
| Missing Tailwind token            | Propose extending `tailwind.config.js` before continuing                      |
| Figma mockup unreadable via MCP   | Report the issue, continue with this file's patterns, then ask for validation |
| Component breaking dark mode      | Identify missing classes and add them (always pair light + dark)              |
| Conflict between mockup and token | Prioritize the `CLAUDE.md` token and flag the discrepancy                     |
| Ambiguous component requirement   | Produce the most likely version + offer 1–2 commented alternatives            |

---

## 8. Execution

### 8.1 Robust Code

- **Strict TypeScript**: no `any`, all props typed via named interfaces
- **Pure components**: no unnecessary global state, business logic isolated in hooks or `lib/`
- **Accessibility**: `aria-*` attributes on interactive components, minimum WCAG AA contrast
- **Performance**: `next/image` for all images, `next/font` for Red Hat Display, lazy loading on off-screen sections

### 8.2 Front-End Conventions

- Mobile-first throughout (`sm:` → `md:` → `lg:`)
- No `!important`, no global CSS outside `globals.css`
- No `console.log` in production
- Framer Motion only for meaningful animations (no superfluous micro-interactions)
- Sorted imports: React → Next → external libs → internal components → styles

### 8.3 Respecting Figma Mockups

Claude must **always**:

1. Query the Figma MCP before creating any new section or component
2. Respect mockup dimensions, spacing, and layout as the primary reference
3. Only interpret freely when the mockup is absent or incomplete
4. Flag any discrepancy between the mockup and the tokens in this file

**Source priority order:**

```
Figma mockup > CLAUDE.md tokens > Inference from existing patterns
```

---

_This file is the source of truth for all code generation on the Lumiron · Ori project._
_Last updated: 2026-03-27_
