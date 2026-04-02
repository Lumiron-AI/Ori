"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Linkedin, Instagram } from "lucide-react";
import { useLocale } from "@/context/locale-context";
import type { Locale } from "@/context/locale-context";

const XIcon = () => (
	<svg
		viewBox="0 0 24 24"
		width={18}
		height={18}
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
	const { locale, setLocale, t } = useLocale();
	const { footer } = t;

	function toggle(next: Locale) {
		if (next !== locale) setLocale(next);
	}

	return (
		<footer className="relative mt-16 overflow-hidden bg-background dark:bg-dark-bg border-t border-text-secondary/20 dark:border-text-tertiary/50  max-w-[85%] mx-auto">
			{/* Lights glow effect (dark mode only) */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[480px] dark:block hidden"
			/>

			{/* Main content */}
			<div className="py-8 sm:py-10 max-w-[83rem]">
				<div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-10 items-start">
					{/* Brand */}
					<div className="w-full md:flex-[2] flex flex-col gap-4">
						<Link href="/" className="flex items-center gap-3 w-fit">
							<>
								<Image
									src="/img/LogoOriTextDark.svg"
									alt="Ori"
									width={64}
									height={26}
									className="h-6 w-auto dark:hidden"
									priority
								/>
								<Image
									src="/img/LogoOriTextLight.svg"
									alt="Ori"
									width={64}
									height={26}
									className="h-6 w-auto hidden dark:block"
									priority
								/>
							</>
						</Link>
						<p className="font-display font-normal text-sm text-text-primary dark:text-text max-w-xs leading-relaxed">
							{isMessages ? footer.messagesBrandTagline : footer.brandTagline}
						</p>
					</div>

					{/* Nav + Legal + Social — responsive grid on mobile */}
					<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:contents gap-6 md:gap-0">
						{/* Navigation */}
						<div className="flex flex-col gap-3 sm:gap-4 md:flex-1">
							<p className="font-display font-bold text-base sm:text-lg text-text-primary dark:text-text">
								{footer.navTitle}
							</p>
							{(isMessages ? footer.messagesNavLinks : footer.navLinks).map(
								(link) => (
									<Link
										key={link.href}
										href={link.href}
										className={`font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text transition-colors ${isMessages ? "hover:text-ori-message dark:hover:text-ori-message" : "hover:text-primary dark:hover:text-primary"}`}
									>
										{link.label}
									</Link>
								),
							)}
						</div>

						{/* Legal */}
						<div className="flex flex-col gap-3 sm:gap-4 md:flex-1">
							<p className="font-display font-bold text-base sm:text-lg text-text-primary dark:text-text">
								{footer.legalTitle}
							</p>
							{footer.legalLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text transition-colors ${isMessages ? "hover:text-ori-message dark:hover:text-ori-message" : "hover:text-primary dark:hover:text-primary"}`}
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Social */}
						<div className="col-span-2 sm:col-span-1 flex flex-col items-end gap-3 sm:gap-4 md:flex-1">
							<p className="font-display font-bold text-base sm:text-lg text-text-primary dark:text-text">
								{footer.socialTitle}
							</p>
							<div className="flex gap-2">
								{SOCIAL.map(({ label, href, icon: Icon }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										className={`w-10 h-10 rounded-full bg-background-secondary dark:bg-dark-chip flex items-center justify-center text-text-primary dark:text-text transition-colors ${isMessages ? "hover:bg-ori-message hover:text-text dark:hover:bg-ori-message" : "hover:bg-primary dark:hover:bg-primary hover:text-text"}`}
									>
										<Icon size={18} strokeWidth={1.75} />
									</a>
								))}
							</div>
							{/* Language toggle */}
							<div
								className="w-fit font-display font-semibold text-sm flex gap-2 items-center"
								aria-label={footer.changeLang}
							>
								<button
									type="button"
									onClick={() => toggle("fr")}
									className={`transition-colors ${
										locale === "fr"
											? isMessages
												? "text-ori-message"
												: "text-primary"
											: "text-text-secondary dark:text-text/50 hover:text-text-primary dark:hover:text-text"
									}`}
								>
									FR
								</button>
								<span className="text-text-secondary dark:text-text/50">|</span>
								<button
									type="button"
									onClick={() => toggle("en")}
									className={`transition-colors ${
										locale === "en"
											? isMessages
												? "text-ori-message"
												: "text-primary"
											: "text-text-secondary dark:text-text/50 hover:text-text-primary dark:hover:text-text"
									}`}
								>
									EN
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-text-secondary/20 dark:border-text-tertiary/50 max-w-[83rem]">
				<div className="py-4 sm:py-8 pb-8 sm:pb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
					<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
						{footer.copyright}
					</p>
					<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
						{footer.madeBy}{" "}
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
