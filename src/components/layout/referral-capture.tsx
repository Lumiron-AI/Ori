"use client";

import { useEffect } from "react";

/**
 * Reads ?ref= from the URL on landing and persists it for 30 days in a cookie
 * scoped to .lumiron.ai so it is readable from app.lumiron.ai on signup.
 * Also writes localStorage as a same-origin fallback. Silent no-op if no ref
 * is present or the format is invalid.
 */
export function ReferralCapture() {
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const ref = params.get("ref");
		if (!ref) return;
		if (!/^r_[a-f0-9]{10}$/.test(ref)) return;

		const maxAge = 60 * 60 * 24 * 30;
		const isLumironDomain = /(^|\.)lumiron\.ai$/.test(window.location.hostname);
		const domainAttr = isLumironDomain ? "; domain=.lumiron.ai" : "";
		document.cookie = `lumiron_ref=${ref}; max-age=${maxAge}; path=/${domainAttr}; SameSite=Lax`;
		try {
			localStorage.setItem("lumiron_pending_ref", ref);
		} catch {
			// ignore storage errors
		}
	}, []);

	return null;
}
