"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/context/locale-context";

function Bullet({ items }: { items: readonly string[] }) {
	return (
		<ul className="flex flex-col gap-2">
			{items.map((item) => (
				<li
					key={item}
					className="flex items-start gap-3 font-sans font-normal text-base text-text-primary dark:text-text/80"
				>
					<span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
					{item}
				</li>
			))}
		</ul>
	);
}

function SubLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-sans font-normal text-base text-text-secondary dark:text-text-tertiary leading-relaxed">
			{children}
		</p>
	);
}

function Body({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
			{children}
		</p>
	);
}

function GroupLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-display font-semibold text-base text-text-heading dark:text-text mb-2">
			{children}
		</p>
	);
}

function SubSection({
	number,
	title,
	children,
}: {
	number: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="mt-6">
			<p className="font-display font-semibold text-lg text-text-heading dark:text-text mb-3">
				{number}. {title}
			</p>
			<div className="flex flex-col gap-3">{children}</div>
		</div>
	);
}

function PriceCard({
	title,
	price,
	includes,
	overage,
	includedLabel,
	overageLabel,
}: {
	title: string;
	price: string;
	includes: readonly string[];
	overage: string;
	includedLabel: string;
	overageLabel: string;
}) {
	return (
		<div className="rounded-2xl py-2 flex flex-col gap-3">
			<div className="flex flex-col gap-0.5">
				<p className="font-display font-semibold text-base text-text-heading dark:text-text">
					{title}
				</p>
				<span className="font-display font-bold text-xl text-primary">
					{price}
				</span>
			</div>
			<div>
				<GroupLabel>{includedLabel}</GroupLabel>
				<Bullet items={includes} />
			</div>
			<p className="font-sans font-normal text-sm text-text-secondary dark:text-text-tertiary">
				{overageLabel}{" "}
				<span className="font-medium text-text-primary dark:text-text/80">
					{overage}
				</span>
			</p>
		</div>
	);
}

export default function CGVPage() {
	const { t } = useLocale();
	const l = t.cgv;

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
						<div
							key={section.number}
							className="border-t border-background-secondary dark:border-dark-elevated pt-8"
						>
							<div className="flex items-start gap-4">
								<span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
									{section.number}
								</span>
								<div className="flex-1">
									<h2 className="font-display font-semibold text-2xl text-text-heading dark:text-text mb-4">
										{section.title}
									</h2>

									{/* Section 1 — Identification */}
									{"companyName" in section && (
										<>
											<Body>{section.intro}</Body>
											<div className="mt-4 flex flex-col gap-1.5 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												<p className="font-semibold text-text-heading dark:text-text">
													{section.companyName}
												</p>
												{section.companyDetails.map((d) => (
													<p key={d}>{d}</p>
												))}
												<p>
													{section.emailLabel}{" "}
													<a
														href="mailto:contact@lumiron.ai"
														className="text-primary hover:underline"
													>
														contact@lumiron.ai
													</a>
												</p>
											</div>
											<p className="mt-4 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.proNote}
											</p>
										</>
									)}

									{/* Section 2 — Définitions */}
									{"items" in section && section.number === "2" && (
										<div className="flex flex-col gap-3">
											{(
												section.items as readonly {
													term: string;
													def: string;
												}[]
											).map(({ term, def }) => (
												<div key={term} className="flex items-start gap-3">
													<span className="mt-0.5 shrink-0 font-display font-semibold text-sm text-primary">
														{term}
													</span>
													<span className="font-sans font-normal text-base text-text-primary dark:text-text/80">
														: {def}
													</span>
												</div>
											))}
										</div>
									)}

									{/* Section 3 — Objet */}
									{"serviceIntro" in section && (
										<>
											<Body>{section.p1}</Body>
											<div className="mt-3">
												<SubLabel>{section.serviceIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.serviceItems} />
												</div>
											</div>
											<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p2}
											</p>
										</>
									)}

									{/* Section 4 — Description (sous-sections) */}
									{"subsections" in section && section.number === "4" && (
										<>
											{section.subsections.map((sub) => (
												<SubSection
													key={sub.number}
													number={sub.number}
													title={sub.title}
												>
													{"featuresIntro" in sub && (
														<>
															<SubLabel>{sub.featuresIntro}</SubLabel>
															<Bullet items={sub.features} />
															{"limitationsIntro" in sub && (
																<>
																	<SubLabel>{sub.limitationsIntro}</SubLabel>
																	<Bullet items={sub.limitations} />
																</>
															)}
														</>
													)}
													{"p1" in sub && !("featuresIntro" in sub) && (
														<Body>{sub.p1}</Body>
													)}
												</SubSection>
											))}
										</>
									)}

									{/* Section 5 — Absence de garantie */}
									{"clientAcknowledgesIntro" in section && (
										<>
											<SubLabel>{section.clientAcknowledgesIntro}</SubLabel>
											<Bullet items={section.clientAcknowledges} />
											<div className="mt-3">
												<SubLabel>{section.noGuaranteeIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.noGuarantee} />
												</div>
											</div>
											<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p1}
											</p>
										</>
									)}

									{/* Section 6 — Souscription */}
									{"conditionsIntro" in section && section.number === "6" && (
										<>
											<SubLabel>{section.conditionsIntro}</SubLabel>
											<Bullet items={section.conditions} />
											<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p1}
											</p>
										</>
									)}

									{/* Section 7 — Essai gratuit */}
									{"afterTrialIntro" in section && (
										<>
											<Body>{section.p1}</Body>
											<div className="mt-3">
												<SubLabel>{section.conditionsIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.conditions} />
												</div>
											</div>
											<div className="mt-3">
												<SubLabel>{section.afterTrialIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.afterTrial} />
												</div>
											</div>
										</>
									)}

									{/* Section 8 — Durée et résiliation */}
									{"subsections" in section && section.number === "8" && (
										<>
											{section.subsections.map((sub) => (
												<SubSection
													key={sub.number}
													number={sub.number}
													title={sub.title}
												>
													{"intro" in sub && <SubLabel>{sub.intro}</SubLabel>}
													<Bullet items={sub.items} />
												</SubSection>
											))}
										</>
									)}

									{/* Section 9 — Tarifs */}
									{"subsections" in section && section.number === "9" && (
										<>
											{section.subsections.map((sub) => (
												<SubSection
													key={sub.number}
													number={sub.number}
													title={sub.title}
												>
													{"card" in sub && (
														<PriceCard
															title={sub.card.title}
															price={sub.card.price}
															includes={sub.card.includes}
															overage={sub.card.overage}
															includedLabel={l.includedLabel}
															overageLabel={l.overageLabel}
														/>
													)}
													{"cards" in sub && (
														<div className="flex flex-col gap-4">
															{sub.cards.map((card) => (
																<PriceCard
																	key={card.title}
																	title={card.title}
																	price={card.price}
																	includes={card.includes}
																	overage={card.overage}
																	includedLabel={l.includedLabel}
																	overageLabel={l.overageLabel}
																/>
															))}
														</div>
													)}
													{"items" in sub &&
														!("card" in sub) &&
														!("cards" in sub) && <Bullet items={sub.items} />}
												</SubSection>
											))}
										</>
									)}

									{/* Section 10 — Paiement */}
									{"nonPaymentIntro" in section && (
										<>
											<Body>{section.p1}</Body>
											<div className="mt-3">
												<Bullet items={section.items} />
											</div>
											<div className="mt-3">
												<SubLabel>{section.nonPaymentIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.nonPayment} />
												</div>
											</div>
										</>
									)}

									{/* Section 11 — Parrainage */}
									{"referrerLabel" in section && (
										<>
											<Body>{section.p1}</Body>
											<div className="mt-3 flex flex-col gap-3">
												<div>
													<GroupLabel>{section.referrerLabel}</GroupLabel>
													<Bullet items={section.referrerItems} />
												</div>
												<div>
													<GroupLabel>{section.referredLabel}</GroupLabel>
													<Bullet items={section.referredItems} />
												</div>
											</div>
											<div className="mt-3">
												<SubLabel>{section.conditionsIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.conditions} />
												</div>
											</div>
											<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p2}
											</p>
										</>
									)}

									{/* Section 12 — Obligations */}
									{"obligationsIntro" in section && (
										<>
											<SubLabel>{section.obligationsIntro}</SubLabel>
											<Bullet items={section.obligations} />
											<div className="mt-3">
												<SubLabel>{section.responsibilityIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.responsibilities} />
												</div>
											</div>
										</>
									)}

									{/* Section 13 — Données personnelles */}
									{"dataIntro" in section && (
										<>
											<Bullet items={section.roles} />
											<div className="mt-3">
												<SubLabel>{section.dataIntro}</SubLabel>
												<div className="mt-2">
													<Bullet items={section.dataItems} />
												</div>
											</div>
											<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
												{section.p1}
											</p>
										</>
									)}

									{/* Sections 14, 15, 16, 17 — Intro + liste + note optionnelle */}
									{"noGuaranteeIntro" in section &&
										!("clientAcknowledgesIntro" in section) && (
											<>
												<SubLabel>{section.intro}</SubLabel>
												<Bullet items={section.items} />
												<div className="mt-3">
													<SubLabel>{section.noGuaranteeIntro}</SubLabel>
													<div className="mt-2">
														<Bullet items={section.noGuarantee} />
													</div>
												</div>
											</>
										)}

									{"intro" in section &&
										"items" in section &&
										!("noGuaranteeIntro" in section) &&
										!("companyName" in section) &&
										!("referrerLabel" in section) &&
										!("obligationsIntro" in section) &&
										!("dataIntro" in section) &&
										!("serviceIntro" in section) && (
											<>
												<SubLabel>{section.intro}</SubLabel>
												<Bullet items={section.items} />
												{"p1" in section && (
													<p className="mt-3 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
														{section.p1}
													</p>
												)}
											</>
										)}

									{/* Sections simples p1 seul (18, 19, 20) */}
									{"p1" in section &&
										!("intro" in section) &&
										!("companyName" in section) &&
										!("serviceIntro" in section) &&
										!("clientAcknowledgesIntro" in section) &&
										!("conditionsIntro" in section) &&
										!("afterTrialIntro" in section) &&
										!("subsections" in section) &&
										!("nonPaymentIntro" in section) &&
										!("referrerLabel" in section) &&
										!("obligationsIntro" in section) &&
										!("dataIntro" in section) &&
										!("noGuaranteeIntro" in section) && (
											<>
												<Body>{section.p1}</Body>
												{"p2" in section && (
													<p className="mt-2 font-sans font-normal text-base text-text-primary dark:text-text/80 leading-relaxed">
														{section.p2}
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
