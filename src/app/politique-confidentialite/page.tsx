"use client";

import Link from "next/link";
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

export default function PolitiqueConfidentialitePage() {
	const { t } = useLocale();
	const l = t.privacyPolicy;

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-4xl mx-auto px-5 md:px-10 pt-24 lg:pt-32 pb-16 lg:pb-24">
				<Link
					href="/"
					className="flex items-center gap-2 font-display font-normal text-lg text-text-heading dark:text-text hover:text-primary dark:hover:text-primary transition-colors mb-6"
				>
					<ArrowLeft size={20} />
					{l.back}
				</Link>

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

									{/* Section 1 — Responsable */}
									{"companyName" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.intro}
											</p>
											<div className="mt-4 flex flex-col gap-1.5 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												<p className="font-semibold text-text-heading dark:text-text">{section.companyName}</p>
												{section.companyDetails.map((d) => <p key={d}>{d}</p>)}
												<p>
													{section.emailLabel}{" "}
													<a href="mailto:contact@lumiron.ai" className="text-primary hover:underline">contact@lumiron.ai</a>
												</p>
											</div>
										</>
									)}

									{/* Section 2 — Rôles */}
									{"roles" in section && !("dataIntro" in section) && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.intro}
											</p>
											<div className="mt-3">
												<Bullet items={section.roles} />
											</div>
											<p className="mt-4 font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
												{section.clientResponsibilityIntro}
											</p>
											<div className="mt-2">
												<Bullet items={section.clientResponsibilities} />
											</div>
										</>
									)}

									{/* Sections 3 & 4 — Groupes */}
									{"groups" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.intro}
											</p>
											<div className="mt-4 flex flex-col gap-5">
												{section.groups.map((group) => (
													<div key={group.label}>
														<p className="font-display font-semibold text-base text-text-heading dark:text-text mb-2">
															{group.label}
														</p>
														<ul className="flex flex-col gap-1.5">
															{group.items.map((item) => (
																<li key={item} className="flex items-start gap-3 font-sans font-normal text-base text-text-primary dark:text-text/80">
																	<span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
																	{item}
																</li>
															))}
														</ul>
													</div>
												))}
											</div>
										</>
									)}

									{/* Section 7 — Transferts (double liste) */}
									{"basisItems" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
												{section.intro}
											</p>
											<div className="mt-3">
												<Bullet items={section.items} />
											</div>
											<p className="mt-4 font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
												{section.basisIntro}
											</p>
											<div className="mt-2">
												<Bullet items={section.basisItems} />
											</div>
										</>
									)}

									{/* Sections 5, 6, 10, 11 — Liste simple + note optionnelle */}
									{"items" in section && !("groups" in section) && !("basisItems" in section) && (
										<>
											<p className="font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
												{section.intro}
											</p>
											<div className="mt-3">
												<Bullet items={section.items} />
											</div>
											{"note" in section && (
												<p className="mt-4 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
													{section.note}
												</p>
											)}
										</>
									)}

									{/* Section 8 — Durée (p1 + tableau) */}
									{"p1" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p1}
											</p>
											{section.number === "8" && (
												<div className="mt-4 rounded-2xl border border-background-secondary dark:border-dark-elevated overflow-hidden">
													{l.retentionRows.map((row, i) => (
														<div
															key={row.label}
															className={`flex items-center justify-between px-5 py-3 font-sans text-base ${
																i < l.retentionRows.length - 1
																	? "border-b border-background-secondary dark:border-dark-elevated"
																	: ""
															}`}
														>
															<span className="font-medium text-text-heading dark:text-text">{row.label}</span>
															<span className="font-normal text-text-secondary dark:text-text-tertiary">{row.value}</span>
														</div>
													))}
												</div>
											)}
										</>
									)}

									{/* Section 9 — Droits */}
									{"requestNote" in section && (
										<>
											<p className="font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
												{section.intro}
											</p>
											<div className="mt-3 flex flex-wrap gap-2">
												{l.rights.map((right) => (
													<span
														key={right}
														className="px-3 py-1 rounded-full bg-background-secondary dark:bg-dark-elevated font-display font-medium text-sm text-text-heading dark:text-text"
													>
														{right}
													</span>
												))}
											</div>
											<div className="mt-4 flex flex-col gap-2 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												<p>
													{section.requestNote}{" "}
													<a href="mailto:contact@lumiron.ai" className="text-primary hover:underline">contact@lumiron.ai</a>
												</p>
												<p>{section.responseDelay}</p>
												<p>
													{section.cnilNote}{" "}
													<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
														www.cnil.fr
													</a>
												</p>
											</div>
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
