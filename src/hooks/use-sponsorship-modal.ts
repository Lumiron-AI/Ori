import { useCallback, useEffect, useState, type FormEvent } from "react";

export interface SponsorshipFormValues {
	recommendedEmail: string;
	yourEmail: string;
}

export interface UseSponsorshipModalReturn {
	isOpen: boolean;
	form: SponsorshipFormValues;
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

	const open = useCallback(() => setIsOpen(true), []);

	const close = useCallback(() => {
		setIsOpen(false);
		setForm(INITIAL_FORM);
	}, []);

	const setField = useCallback(
		(field: keyof SponsorshipFormValues, value: string) => {
			setForm((prev) => ({ ...prev, [field]: value }));
		},
		[]
	);

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			// TODO: wire to API
			console.log("Sponsorship form submitted", form);
			close();
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

	return { isOpen, form, open, close, setField, handleSubmit };
}
