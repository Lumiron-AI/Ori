/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.mdx"],

	darkMode: "class",

	theme: {
		extend: {
			// ═══════════════════════════════════════════════════════════════════════
			// COLORS — Source: Charte graphique, Lumiron / Ori phone Figma
			//          fileKey: 3bbfpp468BTC9HL3yVQjGC · node: 1419:3967
			//
			// Two palettes extracted:
			//   "Couleurs (Light)" = palette for dark/night mode
			//   "Couleurs (Dark)"  = palette for light/day mode
			// ═══════════════════════════════════════════════════════════════════════
			colors: {
				// ── Brand (shared across both modes) ────────────────────────────────
				primary: {
					DEFAULT: "#FF4F38", // Primaire — CTA buttons, active states, highlights
				},
				"ori-message": {
					DEFAULT: "#3E67B5", // Ori Messages branding (blue, not in charte graphique)
				},
				"brand-accent": {
					DEFAULT: "#99ADD3", // Secondaire — blue-gray accent, badges, secondary labels
				},

				// ── Light mode (day) surfaces ─────────────────────────────────────
				// Source: "Couleurs (Dark)" row in charte graphique
				background: {
					DEFAULT: "#FAF8F6", // Fond           — page root, screen background
					secondary: "#E9E9E9", // Fond secondaire — cards, input fills, chips
					tertiary: "#DFDFDF", // Fond tertiaire  — dividers, subtle borders
					element: "#FFFFFF", // Élement         — pure white surfaces
				},

				// ── Light mode text ───────────────────────────────────────────────
				text: {
					DEFAULT: "#FFFFFF", // White — text on dark/primary backgrounds
					primary: "#131923", // Texte — dark body text (Figma charte graphique)
					heading: "#243447", // Heading variant — used in cards/pricing (components)
					secondary: "#6F7C8C", // Texte secondaire — muted labels, placeholders
					tertiary: "#9EAEC2", // Texte tertiaire  — hints, disabled states, captions
				},

				// ── Dark mode (night) surfaces ─────────────────────────────────────
				// Source: "Couleurs (Light)" row in charte graphique
				"dark-bg": "#0E1116", // Fond          — root dark page background
				"dark-surface": "#131923", // Fond 2        — secondary dark surface (nav, footer)
				"dark-elevated": "#1F293A", // Fond secondaire — panels, modals, cards
				"dark-overlay": "#2A374D", // Fond tertiaire  — chips, tags, hover states

				// ── Legacy aliases (kept for backwards compatibility) ──────────────
				// These were in the old config and may still be referenced in components.
				// They are being phased out — prefer the tokens above.
				secondary: { DEFAULT: "#243447" }, // old dark-navy; use dark-overlay or text-heading
				accent: { DEFAULT: "#1F293A" }, // corrected to Figma "Fond secondaire" dark
				"dark-chip": "#2A374D", // updated to Figma "Fond tertiaire" dark
			},

			// ═══════════════════════════════════════════════════════════════════════
			// BACKGROUND IMAGES
			// ═══════════════════════════════════════════════════════════════════════
			backgroundImage: {
				// Dark solution card gradient (Figma: PhoneAssistantCard / MessagesAssistantCard)
				"dark-card":
					"linear-gradient(137.11deg, #121C26 4.97%, #0E1319 90.42%)",
				// Primary glow (used in hero backgrounds)
				"primary-glow":
					"radial-gradient(ellipse at 50% 0%, rgba(255,79,56,0.2) 0%, transparent 70%)",
				// Agent avatar gradient (AutomationPanel — active agent icon bg)
				"agent-active": "linear-gradient(180deg, #FF4F38 0%, #EB3A3D 100%)",
			},

			// ═══════════════════════════════════════════════════════════════════════
			// TYPOGRAPHY
			// Source: Red Hat Display (all weights), confirmed across all frames
			// ═══════════════════════════════════════════════════════════════════════
			fontFamily: {
				sans: ['"Red Hat Display"', "sans-serif"],
				display: ['"Red Hat Display"', "sans-serif"],
			},

			fontWeight: {
				normal: "400", // Red Hat Display Regular
				medium: "500", // Red Hat Display Medium
				semibold: "600", // Red Hat Display SemiBold
				bold: "700", // Red Hat Display Bold
			},

			// Type scale — extracted from Figma node sizes across all frames
			// Scaled down ~20% on large sizes (3xl–6xl) for optimal desktop density
			//
			//  xs   → 12px  micro labels, badges
			//  sm   → 14px  footnotes, captions
			//  base → 16px  body text
			//  lg   → 18px  emphasized body
			//  xl   → 20px  card titles, subheadings
			//  2xl  → 20px  section labels
			//  3xl  → 26px  sub-section headings  (was 32px)
			//  4xl  → 32px  display numbers, section prices  (was 40px)
			//  5xl  → 36px  screen headings  (was 45px / lh:80px)
			//  6xl  → 52px  hero / display titles  (was 64px / lh:80px)
			fontSize: {
				xs: ["12px", { lineHeight: "1.5", letterSpacing: "0" }],
				sm: ["14px", { lineHeight: "1.5", letterSpacing: "0" }],
				base: ["16px", { lineHeight: "1.5", letterSpacing: "0" }],
				lg: ["18px", { lineHeight: "1.4", letterSpacing: "0" }],
				xl: ["20px", { lineHeight: "1.4", letterSpacing: "0" }],
				"2xl": ["20px", { lineHeight: "1.3", letterSpacing: "0" }],
				"3xl": ["26px", { lineHeight: "1.2", letterSpacing: "0" }],
				"4xl": ["32px", { lineHeight: "1.15", letterSpacing: "0" }],
				"5xl": ["36px", { lineHeight: "56px", letterSpacing: "0" }],
				"6xl": ["52px", { lineHeight: "64px", letterSpacing: "0" }],
			},

			// ═══════════════════════════════════════════════════════════════════════
			// BORDER RADIUS
			// Extracted from Figma component measurements
			// ═══════════════════════════════════════════════════════════════════════
			borderRadius: {
				none: "0",
				xs: "3px", // chips, small tags
				sm: "4px", // accent bars (FAQ indicator)
				DEFAULT: "6px", // default — inputs, small buttons
				md: "8px", // input field fills (InterfaceSection)
				lg: "10px", // medium panels
				xl: "14px", // tab buttons, form sections
				"2xl": "20px", // large buttons, CTA buttons
				"3xl": "24px", // cards, main panels
				"4xl": "28px", // hero panels, large overlays
				"5xl": "40px", // solution cards
				full: "9999px",
			},

			// ═══════════════════════════════════════════════════════════════════════
			// SHADOWS
			// Source: Figma effects — confirmed across components
			// ═══════════════════════════════════════════════════════════════════════
			boxShadow: {
				// Button shadows
				"orange-btn": "0px 4px 40px 0px rgba(255, 79, 56, 0.30)",
				"blue-btn": "0px 4px 40px 0px rgba(62, 103, 181, 0.30)",
				// Card shadows
				card: "0px 0px 50px 0px rgba(0, 0, 0, 0.18)",
				"card-sm": "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
				// Inset (for inputs / active states)
				"inner-sm": "inset 0 1px 3px rgba(0, 0, 0, 0.08)",
			},

			// ═══════════════════════════════════════════════════════════════════════
			// LAYOUT
			// ═══════════════════════════════════════════════════════════════════════
			maxWidth: {
				"6xl": "72rem", // 1152px — default content container
				"7xl": "80rem", // 1280px — wider layouts
				"8xl": "72rem", // 1152px — replaces old 1408px (all sections using max-w-8xl)
				"9xl": "80rem", // 1280px — replaces old 1536px (all sections using max-w-9xl)
			},

			// ═══════════════════════════════════════════════════════════════════════
			// SPACING — 4px base grid
			// Standard Tailwind scale is kept; only additions listed here.
			// ═══════════════════════════════════════════════════════════════════════
			spacing: {
				0.5: "2px",
				1: "4px",
				1.5: "6px",
				2: "8px",
				2.5: "10px",
				3: "12px",
				3.5: "14px",
				4: "16px",
				5: "20px",
				6: "24px",
				7: "28px",
				8: "32px",
				9: "36px",
				10: "40px",
				11: "44px",
				12: "48px",
				14: "56px",
				16: "64px",
				18: "72px",
				20: "80px",
				24: "96px",
				27.75: "111px",
				28: "112px",
				32: "128px",
				36: "144px",
				40: "160px",
				48: "192px",
				56: "224px",
				64: "256px",
			},
		},
	},

	plugins: [],
};
