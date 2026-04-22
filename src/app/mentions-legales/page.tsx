"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/context/locale-context";

function Bullet({ items }: { items: readonly string[] }) {
	return (
		<ul className="flex flex-col gap-2">
			{items.map((item) => (
				<li key={item} className="flex items-start gap-3 font-sans font-normal text-base text-text-primary dark:text-text/80">
					<span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
					{item}
				</li>
			))}
		</ul>
	);
}

export default function MentionsLegalesPage() {
	const { t } = useLocale();
	const l = t.legalNotice;
	const router = useRouter();

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-4xl mx-auto px-5 md:px-10 pt-24 lg:pt-32 pb-16 lg:pb-24">
				<button
					onClick={() => router.back()}
					className="flex items-center gap-2 font-display font-normal text-lg text-text-heading dark:text-text hover:text-primary dark:hover:text-primary transition-colors mb-6"
				>
					<ArrowLeft size={20} />
					{l.back}
				</button>

				<h1 className="font-display font-bold text-5xl text-text-primary dark:text-text mt-3 leading-[80px]">
					{l.title}
				</h1>
				<p className="font-sans font-normal text-sm text-text-secondary dark:text-text-tertiary mt-2">
					{l.lastUpdated}
				</p>

				<div className="mt-12 flex flex-col gap-10">
					{l.sections.map((section) => (
						<div key={section.number} className="border-t border-background-secondary dark:border-dark-elevated pt-8">
							<div className="flex items-start gap-4">
								<span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
									{section.number}
								</span>
								<div className="flex-1">
									<h2 className="font-display font-semibold text-2xl text-text-heading dark:text-text mb-4">
										{section.title}
									</h2>

									{/* Section 1 — Éditeur */}
									{"publisherIntro" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.publisherIntro}
											</p>
											<div className="mt-4 flex flex-col gap-1.5 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												<p className="font-semibold text-text-heading dark:text-text">{section.companyName}</p>
												{section.companyDetails.map((d) => <p key={d}>{d}</p>)}
												<p>
													{section.emailLabel}{" "}
													<a href="mailto:contact@lumiron.ai" className="text-primary hover:underline">contact@lumiron.ai</a>
												</p>
												<p>{section.directorLabel} <span className="font-medium">{section.directorName}</span>, {section.directorTitle}</p>
												<p>{section.editorLabel} <span className="font-medium">{section.editorName}</span></p>
											</div>
										</>
									)}

									{/* Section 2 — Hébergement */}
									{"hostingIntro" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.hostingIntro}
											</p>
											<div className="mt-4 flex flex-col gap-1.5 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												<p className="font-semibold text-text-heading dark:text-text">{section.hostName}</p>
												{section.hostAddress.map((line) => <p key={line}>{line}</p>)}
												<p>
													{section.hostWebsiteLabel}{" "}
													<a href="https://www.heroku.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
														https://www.heroku.com
													</a>
												</p>
												<p>{section.hostPhone}</p>
											</div>
											<p className="mt-4 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.hostNote}
											</p>
										</>
									)}

									{/* Sections simples p1 + p2 */}
									{"p1" in section && !("listItems" in section) && !("publisherIntro" in section) && !("hostingIntro" in section) && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p1}
											</p>
											{"p2" in section && (
												<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
													{section.p2}
												</p>
											)}
										</>
									)}

									{/* Section 5 — Responsabilité (liste + contact) */}
									{"listItems" in section && (
										<>
											{"p1" in section && (
												<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
													{section.p1}
												</p>
											)}
											<p className="mt-3 font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
												{section.listIntro}
											</p>
											<div className="mt-2">
												<Bullet items={section.listItems} />
											</div>
											{"contactNote" in section && (
												<p className="mt-4 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
													{section.contactNote}{" "}
													<a href="mailto:contact@lumiron.ai" className="text-primary hover:underline">contact@lumiron.ai</a>.
												</p>
											)}
											{"note" in section && (
												<p className="mt-4 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
													{section.note}
												</p>
											)}
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
