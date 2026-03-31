"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Translations } from "@/lib/translations";
import { translations } from "@/lib/translations";

export type Locale = "fr" | "en";

interface LocaleContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
}

const LocaleContext = createContext<LocaleContextValue>({
	locale: "fr",
	setLocale: () => {},
	t: translations.fr,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("fr");

	useEffect(() => {
		const stored = localStorage.getItem("ori-locale") as Locale | null;
		if (stored === "en") {
			setLocaleState("en");
			document.documentElement.lang = "en";
		}
	}, []);

	const setLocale = (next: Locale) => {
		setLocaleState(next);
		localStorage.setItem("ori-locale", next);
		document.documentElement.lang = next;
	};

	return (
		<LocaleContext.Provider
			value={{ locale, setLocale, t: translations[locale] }}
		>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocale() {
	return useContext(LocaleContext);
}
