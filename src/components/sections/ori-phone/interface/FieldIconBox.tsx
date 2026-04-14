"use client";

export function FieldIconBox({ icon: Icon }: { icon: React.ElementType }) {
	return (
		<Icon size={24} className="w-4 h-4 lg:w-6 lg:h-6 text-text-primary dark:text-text-tertiary shrink-0 mt-0.5 mx-1" />
	);
}
