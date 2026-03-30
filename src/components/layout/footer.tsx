"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AudioLines, Linkedin, Instagram } from "lucide-react";

const NAV_LINKS = [
	{ href: "/solutions/phone#use-case", label: "Cas d'usage" },
	{ href: "/solutions/phone#interface", label: "Interface" },
	{ href: "/solutions/phone#comparison", label: "Comparatif" },
	{ href: "/solutions/phone#sponsorship", label: "Parrainage" },
	{ href: "/solutions/phone#faq", label: "FAQ" },
	{ href: "/solutions/phone#pricing", label: "Tarifs" },
	{ href: "/blog", label: "Ressources" },
];

const LEGAL_LINKS = [
	{ href: "/legal/mentions", label: "Mentions légales" },
	{ href: "/legal/cgv", label: "CGV" },
	{ href: "/legal/confidentialite", label: "Politique de confidentialité" },
];

const XIcon = () => (
	<svg
		viewBox="0 0 24 24"
		width={14}
		height={14}
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const SOCIAL = [
	{
		label: "X (Twitter)",
		href: "https://x.com/LumironAI",
		icon: XIcon,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/lumiron.ai/",
		icon: Linkedin,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/lumiron.ai/",
		icon: Instagram,
	},
];

export function Footer() {
	const pathname = usePathname();
	const isMessages = pathname === "/solutions/messages";
	return (
		<footer className="relative mt-16 overflow-hidden bg-background dark:bg-gradient-to-t dark:from-dark-surface dark:to-dark-bg border-t border-text-secondary/20 dark:border-text-tertiary/50">
			{/* Lights glow effect (dark mode only) */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[480px] dark:block hidden"
				style={{
					background:
						"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,79,56,0.13) 0%, transparent 70%)",
				}}
			/>

			{/* Main content */}
			<div className="container-site py-6 sm:py-8 max-w-[82rem] px-5">
				<div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-10 items-start">
					{/* Brand */}
					<div className="w-full md:flex-[2] flex flex-col gap-4">
						<Link href="/" className="flex items-center gap-3 w-fit">
							<Image
								src="/img/LogoOriText.svg"
								alt="Ori"
								width={64}
								height={26}
								className="h-6 w-auto"
								priority
							/>
						</Link>
						<p className="font-display font-normal text-sm text-text-primary dark:text-text max-w-xs leading-relaxed">
							Le standard téléphonique IA pour restaurants. Ori gère vos
							réservations, commandes et questions clients, 24h/24.
						</p>
					</div>

					{/* Nav + Legal + Social — responsive grid on mobile */}
					<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:contents gap-6 md:gap-0">
						{/* Navigation */}
						<div className="flex flex-col gap-3 sm:gap-4 md:flex-1">
							<p className="font-display font-bold text-base sm:text-lg text-text-primary dark:text-text">
								Navigation
							</p>
							{NAV_LINKS.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text hover:text-primary dark:hover:text-primary transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Legal */}
						<div className="flex flex-col gap-3 sm:gap-4 md:flex-1">
							<p className="font-display font-bold text-base sm:text-lg text-text-primary dark:text-text">
								Légal
							</p>
							{LEGAL_LINKS.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text hover:text-primary dark:hover:text-primary transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Social */}
						<div className="col-span-2 sm:col-span-1 flex flex-col items-end gap-3 sm:gap-4 md:flex-1">
							<p className="font-display font-bold text-base sm:text-lg text-text-primary dark:text-text">
								Réseaux sociaux
							</p>
							<div className="flex gap-2">
								{SOCIAL.map(({ label, href, icon: Icon }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										className="w-9 h-9 rounded-full bg-background-secondary dark:bg-dark-chip flex items-center justify-center text-text-primary dark:text-text hover:bg-primary hover:text-text transition-colors"
									>
										<Icon size={14} strokeWidth={1.75} />
									</a>
								))}
							</div>
							{/* Language toggle */}
							<button
								type="button"
								className="w-fit font-display font-semibold text-sm text-text-secondary dark:text-text/50 flex gap-2 items-center hover:text-text-primary dark:hover:text-text transition-colors"
								aria-label="Changer de langue"
							>
								<span className="text-text-secondary dark:text-text/50">
									FR
								</span>
								<span className="text-text-secondary dark:text-text/50">|</span>
								<span
									className={isMessages ? "text-ori-message" : "text-primary"}
								>
									EN
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-text-secondary/20 dark:border-text-tertiary/50">
				<div className="container-site max-w-[82rem] py-3 sm:py-4 pb-8 sm:pb-10 px-5 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
					<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
						© 2026 ORI. Tous droits réservés.
					</p>
					<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
						Un produit de{" "}
						<span
							className={`${isMessages ? "text-ori-message" : "text-primary"} font-semibold`}
						>
							Lumiron
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
