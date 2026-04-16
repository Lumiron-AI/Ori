"use client";

import { useRef, useState, useEffect, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonClass } from "@/components/ui/button";
import type { SponsorshipFormValues } from "@/hooks/use-sponsorship-modal";
import { useLocale } from "@/context/locale-context";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SponsorshipModalProps {
	isOpen: boolean;
	form: SponsorshipFormValues;
	onClose: () => void;
	onSetField: (field: keyof SponsorshipFormValues, value: string) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	product?: "ori-phone" | "ori-messages";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface InputFieldProps {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	product?: "ori-phone" | "ori-messages";
}

function EmailField({ id, label, value, onChange, product }: InputFieldProps) {
	return (
		<div className="flex flex-col gap-1">
			<label
				htmlFor={id}
				className="font-display font-normal text-sm sm:text-base text-text-heading dark:text-text"
			>
				{label}
			</label>
			<input
				id={id}
				type="email"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				required
				className={cn(
					"w-full h-[36px] sm:h-[42px] px-3 rounded-xl border-2",
					"bg-background dark:bg-dark-bg",
					"border-text-heading/60 dark:border-text-tertiary",
					"text-text-heading dark:text-text font-display font-normal text-base",
					"placeholder:text-text-secondary dark:placeholder:text-text-tertiary",
					"transition-colors outline-none",
					product === "ori-messages"
						? "focus:border-ori-message dark:focus:border-ori-message"
						: "focus:border-primary dark:focus:border-primary",
				)}
			/>
		</div>
	);
}

// ─── Main component ───────────────────────────────────────────────────────────

export function SponsorshipModal({
	isOpen,
	form,
	onClose,
	onSetField,
	onSubmit,
	product = "ori-phone",
}: SponsorshipModalProps) {
	const firstInputRef = useRef<HTMLInputElement>(null);
	const [mounted, setMounted] = useState(false);
	const { t } = useLocale();
	const { sponsorshipModal } = t;

	useEffect(() => {
		setMounted(true);
	}, []);

	// ── Shared form content ────────────────────────────────────────────────────
	const formContent = (
		<>
			<p className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary mb-4 leading-relaxed">
				{sponsorshipModal.description.split("\n").map((line, i) => (
					<span key={i}>
						{line}
						{i === 0 && <br />}
					</span>
				))}
			</p>

			<form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
				<p className="font-display font-semibold text-lg sm:text-2xl text-text-heading dark:text-text">
					{sponsorshipModal.formTitle}
				</p>

				<div
					className="flex flex-col gap-3"
					ref={firstInputRef as unknown as React.RefObject<HTMLDivElement>}
				>
					<EmailField
						id="recommended-email"
						label={sponsorshipModal.recommendedEmailLabel}
						value={form.recommendedEmail}
						onChange={(v) => onSetField("recommendedEmail", v)}
						product={product}
					/>
					<EmailField
						id="your-email"
						label={sponsorshipModal.yourEmailLabel}
						value={form.yourEmail}
						onChange={(v) => onSetField("yourEmail", v)}
						product={product}
					/>
				</div>

				<p className="font-display font-normal text-xs sm:text-base text-text-secondary dark:text-text-tertiary text-center">
					{sponsorshipModal.offerNote}
				</p>

				<button
					type="submit"
					className={buttonClass({
						variant: "primary",
						size: "md",
						className: cn(
							"w-full gap-3",
							product === "ori-messages" &&
								"bg-ori-message shadow-blue-btn hover:bg-ori-message/90 active:bg-ori-message/80",
						),
					})}
				>
					{sponsorshipModal.submit}
					<Send size={16} strokeWidth={2} className="rotate-12" />
				</button>
			</form>
		</>
	);

	return (
		<>
			{/* ── Mobile: slide-in panel (< sm) ────────────────────────────────── */}
			{mounted &&
				createPortal(
					<AnimatePresence>
						{isOpen && (
							<motion.div
								key="mobile-panel"
								className="fixed inset-0 z-[60] bg-background dark:bg-dark-bg overflow-y-auto sm:hidden"
								initial={{ x: "100%" }}
								animate={{ x: 0 }}
								exit={{ x: "100%" }}
								transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
							>
								<div className="px-5 pt-8 pb-12">
									{/* Back button */}
									<button
										type="button"
										onClick={onClose}
										aria-label={sponsorshipModal.close}
										className="flex items-center gap-1 text-text-heading dark:text-text font-display font-medium text-base mb-5"
									>
										<ChevronLeft size={20} />
										<span>{sponsorshipModal.back}</span>
									</button>

									{/* Title */}
									<h2
										id="sponsorship-title-mobile"
										className="font-display font-bold text-xl text-text-heading dark:text-text mb-2"
									>
										{sponsorshipModal.title}
									</h2>

									{formContent}
								</div>
							</motion.div>
						)}
					</AnimatePresence>,
					document.body,
				)}

			{/* ── Desktop: centered modal (sm+) ────────────────────────────────── */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							key="backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden sm:block"
							aria-hidden
							onClick={onClose}
						/>

						{/* Dialog */}
						<motion.div
							key="dialog"
							initial={{ opacity: 0, scale: 0.95, y: 16 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 16 }}
							transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
							className="fixed inset-0 z-50 items-center justify-center p-4 sm:p-6 hidden sm:flex"
						>
							<div
								role="dialog"
								aria-modal="true"
								aria-labelledby="sponsorship-title"
								className={cn(
									"relative w-full max-w-[480px] rounded-3xl p-6 sm:p-8",
									"bg-background dark:bg-dark-bg",
									"border border-transparent dark:border-text-secondary/40",
									"shadow-card dark:shadow-[0px_4px_50px_0px_rgba(255,255,255,0.10)]",
								)}
							>
								{/* Close button */}
								<button
									type="button"
									onClick={onClose}
									aria-label={sponsorshipModal.close}
									className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated transition-colors"
								>
									<X size={18} strokeWidth={2} />
								</button>

								{/* Header */}
								<div className="pr-8 mb-2">
									<h2
										id="sponsorship-title"
										className="font-display font-bold text-xl sm:text-2xl text-text-heading dark:text-text"
									>
										{sponsorshipModal.title}
									</h2>
								</div>

								{formContent}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
