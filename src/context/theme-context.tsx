"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
	theme: "light",
	toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const apply = (dark: boolean) => {
			const resolved: Theme = dark ? "dark" : "light";
			setTheme(resolved);
			document.documentElement.classList.toggle("dark", dark);
		};
		const handler = (e: MediaQueryListEvent) => apply(e.matches);
		apply(mq.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);

	const toggle = () => {
		setTheme((prev) => {
			const next = prev === "light" ? "dark" : "light";
			localStorage.setItem("ori-theme", next);
			document.documentElement.classList.toggle("dark", next === "dark");
			return next;
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
