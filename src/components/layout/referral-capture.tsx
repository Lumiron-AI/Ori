"use client";

import { useEffect } from "react";

/**
 * Reads ?ref= from the URL on landing and persists it for 30 days in both
 * a cookie (for future server-side reads) and localStorage (for the app's
 * register flow). Silent no-op if no ref is present or format is invalid.
 */
export function ReferralCapture() {
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const ref = params.get("ref");
		if (!ref) return;
		if (!/^r_[a-f0-9]{10}$/.test(ref)) return;

		const maxAge = 60 * 60 * 24 * 30;
		document.cookie = `lumiron_ref=${ref}; max-age=${maxAge}; path=/; SameSite=Lax`;
		try {
			localStorage.setItem("lumiron_pending_ref", ref);
		} catch {
			// ignore storage errors
		}
	}, []);

	return null;
}
