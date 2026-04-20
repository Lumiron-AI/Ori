"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/locale-context";

export function Header() {
	const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const isMessages = pathname === "/solutions/messages" || pathname === "/solutions/messages/faq";
	const ctaHref = isMessages ? "/solutions/messages#pricing" : pathname === "/solutions/phone" ? "#pricing" : "/solutions/phone#pricing";
	const isPhone = pathname === "/solutions/phone";
	const isProduct = isMessages || isPhone;
	const { t } = useLocale();
	const { header } = t;
	const hoverColor = isMessages
		? "hover:text-ori-message dark:hover:text-ori-message"
		: "hover:text-primary dark:hover:text-primary";

	const NAV_LINKS = [
		{ href: "/solutions/phone", label: header.navOriPhone },
		{ href: "/solutions/messages", label: header.navOriMessages },
	];

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4">
			<div
				className={`w-[94vw] xs:w-[92vw] md:w-[88vw] lg:w-[83vw] 3xl:w-[78vw] rounded-2xl md:rounded-full border transition-all duration-300 py-2 px-1 md:px-0 md:py-1 ${
					scrolled || open
						? "bg-white/75 dark:bg-dark-bg/80 backdrop-blur-md border-white dark:border-secondary shadow-[-1px_-1px_31px_-1px_rgba(0,0,0,0.12)]"
						: "bg-transparent border-transparent shadow-none backdrop-blur-none"
				}`}
			>
				<div className="px-4 xs:px-4 md:px-6 lg:px-8 h-[44px] md:h-[50px] grid grid-cols-2 md:grid-cols-3 items-center">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 shrink-0 w-fit">
						<>
							<Image
								src="/img/LogoOriTextDark.svg"
								alt="Ori"
								width={80}
								height={32}
								className="h-5 md:h-7 w-auto dark:hidden"
								priority
							/>
							<Image
								src="/img/LogoOriTextLight.svg"
								alt="Ori"
								width={80}
								height={32}
								className="h-5 md:h-7 w-auto hidden dark:block"
								priority
							/>
						</>
					</Link>

					{/* Desktop nav — centered */}
					<nav className="hidden md:flex items-center gap-5 lg:gap-8 justify-center">
						{NAV_LINKS.filter((link) => link.href !== pathname).map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`font-display font-normal text-sm lg:text-base text-text-primary dark:text-text ${hoverColor} transition-colors whitespace-nowrap`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Desktop right — account + CTA */}
					<div className="hidden md:flex items-center gap-3 lg:gap-8 justify-end">
						<Link
							href="https://ori.lumiron.ai/connexion"
							className={`hidden lg:block font-display font-bold text-sm lg:text-base text-text-primary dark:text-text ${hoverColor} transition-colors whitespace-nowrap`}
						>
							{header.myAccount}
						</Link>

						<Link
							href={ctaHref}
							className={`inline-flex items-center gap-1.5 text-text font-display font-bold text-sm lg:text-base rounded-xl px-3 lg:px-4 py-1.5 lg:py-2 transition-colors whitespace-nowrap ${isMessages ? "bg-ori-message hover:bg-ori-message/90 active:bg-ori-message/80 shadow-blue-btn" : "bg-primary hover:bg-primary/90 active:bg-primary/80 shadow-orange-btn"}`}
						>
							{header.start}
							<ArrowRight
								size={14}
								strokeWidth={2}
								className="hidden lg:block"
							/>
						</Link>
					</div>

					{/* Mobile toggle */}
					<div className="md:hidden flex items-center justify-end gap-1">
						<button
							className="text-text-primary dark:text-text min-w-[44px] min-h-[44px] flex items-center justify-center"
							onClick={() => setOpen((v) => !v)}
							aria-label={header.toggleMenu}
						>
							{open ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.2 }}
						>
							{NAV_LINKS.filter((link) => link.href !== pathname).map(
								(link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setOpen(false)}
										className="font-display font-normal px-5 pt-4 text-sm text-text-primary dark:text-text min-h-[44px] flex items-center"
									>
										{link.label}
									</Link>
								),
							)}
							<div className="flex items-center justify-between pt-4">
								<Link
									href="https://ori.lumiron.ai/login"
									onClick={() => setOpen(false)}
									className={`font-display font-bold text-sm px-5 text-text-primary dark:text-text ${hoverColor} transition-colors`}
								>
									{header.myAccount}
								</Link>
							</div>
							<div className="flex justify-center my-4">
								<Link
									href={ctaHref}
									onClick={() => setOpen(false)}
									className={`inline-flex items-center justify-center gap-2 text-text font-display font-bold text-sm rounded-xl px-4 py-2 w-[90%] transition-colors ${isMessages ? "bg-ori-message hover:bg-ori-message/90" : "bg-primary hover:bg-primary/90"}`}
								>
									{header.start} <ArrowRight size={14} />
								</Link>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
