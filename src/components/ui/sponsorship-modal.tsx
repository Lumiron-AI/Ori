"use client";

import { useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SponsorshipFormValues } from "@/hooks/use-sponsorship-modal";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SponsorshipModalProps {
	isOpen: boolean;
	form: SponsorshipFormValues;
	onClose: () => void;
	onSetField: (field: keyof SponsorshipFormValues, value: string) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface InputFieldProps {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
}

function EmailField({ id, label, value, onChange }: InputFieldProps) {
	return (
		<div className="flex flex-col gap-1.5">
			<label
				htmlFor={id}
				className="font-display font-normal text-base sm:text-lg text-text-heading dark:text-text"
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
					"w-full h-[52px] sm:h-[60px] px-4 rounded-xl border-2",
					"bg-background dark:bg-dark-bg",
					"border-text-heading/60 dark:border-text-tertiary",
					"text-text-heading dark:text-text font-display font-normal text-base",
					"placeholder:text-text-secondary dark:placeholder:text-text-tertiary",
					"transition-colors focus:border-primary dark:focus:border-primary outline-none"
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
}: SponsorshipModalProps) {
	const firstInputRef = useRef<HTMLInputElement>(null);

	return (
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
						className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
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
						className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
					>
						<div
							role="dialog"
							aria-modal="true"
							aria-labelledby="sponsorship-title"
							className={cn(
								"relative w-full max-w-[582px] rounded-3xl p-6 sm:p-8",
								"bg-background dark:bg-dark-bg",
								"border border-transparent dark:border-text-secondary/40",
								"shadow-card dark:shadow-[0px_4px_50px_0px_rgba(255,255,255,0.10)]"
							)}
						>
							{/* Close button */}
							<button
								type="button"
								onClick={onClose}
								aria-label="Fermer"
								className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated transition-colors"
							>
								<X size={20} strokeWidth={2} />
							</button>

							{/* Header */}
							<div className="pr-10 mb-3">
								<h2
									id="sponsorship-title"
									className="font-display font-bold text-xl sm:text-2xl text-text-heading dark:text-text"
								>
									Comment fonctionne le parrainage ?
								</h2>
							</div>

							<p className="font-display font-normal text-sm sm:text-lg text-text-secondary dark:text-text-tertiary mb-6 leading-relaxed">
								Le restaurant recommandé crée son compte et active Ori.
								<br />
								Vous êtes tous les deux récompensés.
							</p>

							{/* Form */}
							<form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
								<p className="font-display font-semibold text-lg sm:text-2xl text-text-heading dark:text-text">
									Indiquez les adresses e-mails
								</p>

								<div className="flex flex-col gap-4" ref={firstInputRef as unknown as React.RefObject<HTMLDivElement>}>
									<EmailField
										id="recommended-email"
										label="E-mail du restaurant recommandé"
										value={form.recommendedEmail}
										onChange={(v) => onSetField("recommendedEmail", v)}
									/>
									<EmailField
										id="your-email"
										label="Votre e-mail"
										value={form.yourEmail}
										onChange={(v) => onSetField("yourEmail", v)}
									/>
								</div>

								<p className="font-display font-normal text-xs sm:text-base text-text-secondary dark:text-text-tertiary text-center">
									Offre valable pour tout nouveau compte activé.
								</p>

								<button
									type="submit"
									className={cn(
										"w-full h-[52px] sm:h-[60px] rounded-2xl",
										"inline-flex items-center justify-center gap-3",
										"bg-primary text-text font-display font-bold text-base sm:text-xl",
										"shadow-orange-btn hover:bg-primary/90 active:bg-primary/80 transition-colors"
									)}
								>
									Envoyer la demande
									<Send size={20} strokeWidth={2} className="rotate-12" />
								</button>
							</form>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
