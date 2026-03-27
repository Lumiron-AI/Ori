"use client";

export function FieldIconBox({ icon: Icon }: { icon: React.ElementType }) {
	return (
		<Icon size={24} className="text-text-primary dark:text-text-tertiary shrink-0 mt-0.5 mx-1" />
	);
}
