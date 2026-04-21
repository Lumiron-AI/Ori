import { useCallback, useEffect, useState, type FormEvent } from "react";

const API_URL =
	process.env.NEXT_PUBLIC_LUMIRON_API_URL ?? "https://api.lumiron.ai";

export type SponsorshipSubmitStatus = "idle" | "loading" | "success" | "error";

export interface SponsorshipFormValues {
	recommendedEmail: string;
	yourEmail: string;
}

export interface UseSponsorshipModalReturn {
	isOpen: boolean;
	form: SponsorshipFormValues;
	status: SponsorshipSubmitStatus;
	errorMessage: string | null;
	open: () => void;
	close: () => void;
	setField: (field: keyof SponsorshipFormValues, value: string) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const INITIAL_FORM: SponsorshipFormValues = {
	recommendedEmail: "",
	yourEmail: "",
};

export function useSponsorshipModal(): UseSponsorshipModalReturn {
	const [isOpen, setIsOpen] = useState(false);
	const [form, setForm] = useState<SponsorshipFormValues>(INITIAL_FORM);
	const [status, setStatus] = useState<SponsorshipSubmitStatus>("idle");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const open = useCallback(() => setIsOpen(true), []);

	const close = useCallback(() => {
		setIsOpen(false);
		setForm(INITIAL_FORM);
		setStatus("idle");
		setErrorMessage(null);
	}, []);

	const setField = useCallback(
		(field: keyof SponsorshipFormValues, value: string) => {
			setForm((prev) => ({ ...prev, [field]: value }));
		},
		[]
	);

	const handleSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setStatus("loading");
			setErrorMessage(null);
			try {
				const res = await fetch(`${API_URL}/public/referrals/invite`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						sponsorEmail: form.yourEmail.trim(),
						inviteeEmail: form.recommendedEmail.trim(),
					}),
				});
				if (!res.ok) {
					const data = await res.json().catch(() => ({}));
					const message =
						(data as { message?: string }).message ||
						(res.status === 404
							? "Aucun compte Lumiron trouvé avec cet email. Créez un compte avant de parrainer."
							: res.status === 409
								? "Cet email est déjà inscrit ou déjà invité."
								: "Une erreur est survenue. Réessayez plus tard.");
					setErrorMessage(message);
					setStatus("error");
					return;
				}
				setStatus("success");
				setTimeout(() => close(), 2000);
			} catch {
				setErrorMessage("Impossible de contacter le serveur. Réessayez plus tard.");
				setStatus("error");
			}
		},
		[form, close]
	);

	// Close on Escape
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [isOpen, close]);

	// Lock body scroll when open
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return {
		isOpen,
		form,
		status,
		errorMessage,
		open,
		close,
		setField,
		handleSubmit,
	};
}
