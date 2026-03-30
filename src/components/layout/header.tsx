"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, AudioLines, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const NAV_LINKS = [
	{ href: "/solutions/messages", label: "Ori messages" },
	{ href: "/solutions/phone", label: "Ori téléphone" },
	{ href: "/blog", label: "Ressources" },
];

export function Header() {
	const [open, setOpen] = useState(false);
	const { theme, toggle } = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const ctaHref = pathname === "/solutions/phone" ? "#pricing" : "/pricing";
	const isMessages = pathname === "/solutions/messages";

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 ">
			<div
				className={`w-[94vw] sm:w-[88vw] md:w-[80vw] rounded-full border transition-all duration-300 py-1 ${
					scrolled
						? "bg-white/75 dark:bg-dark-bg/80 backdrop-blur-md border-white dark:border-secondary shadow-[-1px_-1px_31px_-1px_rgba(0,0,0,0.12)]"
						: "bg-transparent border-transparent shadow-none backdrop-blur-none"
				}`}
			>
				<div className="px-4 sm:px-5 md:px-8 lg:px-6 h-[44px] sm:h-[50px] grid grid-cols-3 items-center">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 shrink-0 w-fit">
						<Image
							src="/img/LogoOriText.svg"
							alt="Ori"
							width={80}
							height={32}
							className="h-7 w-auto"
							priority
						/>
					</Link>

					{/* Desktop nav — centered */}
					<nav className="hidden md:flex items-center gap-5 lg:gap-8 justify-center">
						{NAV_LINKS.filter((link) => link.href !== pathname).map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="font-display font-normal text-sm lg:text-base text-text-primary dark:text-text hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Desktop right — dark mode toggle + account + CTA */}
					<div className="hidden md:flex items-center gap-3 lg:gap-8 justify-end">
						<button
							onClick={toggle}
							aria-label="Basculer le thème"
							className="w-[28px] h-[28px] flex items-center justify-center text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-text transition-colors"
						>
							{theme === "dark" ? (
								<Sun size={16} strokeWidth={1.5} />
							) : (
								<Moon size={16} strokeWidth={1.5} />
							)}
						</button>

						<Link
							href="/compte"
							className="hidden lg:block font-display font-bold text-sm lg:text-base text-text-primary dark:text-text hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
						>
							Mon compte
						</Link>

						<Link
							href={ctaHref}
							className={`inline-flex items-center gap-1.5 text-text font-display font-bold text-sm lg:text-base rounded-xl px-3 lg:px-4 py-1.5 lg:py-2 transition-colors whitespace-nowrap ${isMessages ? "bg-ori-message hover:bg-ori-message/90 active:bg-ori-message/80 shadow-blue-btn" : "bg-primary hover:bg-primary/90 active:bg-primary/80 shadow-orange-btn"}`}
						>
							Commencer
							<ArrowRight
								size={14}
								strokeWidth={2}
								className="hidden lg:block"
							/>
						</Link>
					</div>

					{/* Mobile toggle */}
					<button
						className="md:hidden p-2 text-text-primary dark:text-text justify-self-end min-w-[44px] min-h-[44px] flex items-center justify-center"
						onClick={() => setOpen((v) => !v)}
						aria-label="Toggle menu"
					>
						{open ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.2 }}
							className="md:hidden bg-background dark:bg-dark-bg border-t border-background-secondary dark:border-secondary px-5 py-6 flex flex-col gap-4 rounded-b-3xl"
						>
							{NAV_LINKS.filter((link) => link.href !== pathname).map(
								(link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setOpen(false)}
										className="font-display font-normal text-lg text-text-primary dark:text-text min-h-[44px] flex items-center"
									>
										{link.label}
									</Link>
								),
							)}
							<div className="flex items-center justify-between pt-2">
								<Link
									href="/compte"
									onClick={() => setOpen(false)}
									className="font-display font-bold text-base text-text-primary dark:text-text hover:text-primary transition-colors"
								>
									Mon compte
								</Link>
								<button
									onClick={toggle}
									aria-label="Basculer le thème"
									className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary dark:text-text-tertiary"
								>
									{theme === "dark" ? (
										<Sun size={20} strokeWidth={1.5} />
									) : (
										<Moon size={20} strokeWidth={1.5} />
									)}
								</button>
							</div>
							<Link
								href={ctaHref}
								onClick={() => setOpen(false)}
								className={`inline-flex items-center justify-center gap-2 text-text font-display font-bold text-lg rounded-xl px-5 py-3 mt-1 w-full transition-colors ${isMessages ? "bg-ori-message hover:bg-ori-message/90" : "bg-primary hover:bg-primary/90"}`}
							>
								Commencer <ArrowRight size={18} />
							</Link>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
