"use client";

import { useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
	ChevronDown,
	ArrowLeft,
	Rocket,
	Cpu,
	CalendarCheck,
	SlidersHorizontal,
	ShieldCheck,
} from "lucide-react";

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQGroup {
	theme: string;
	icon: React.ReactNode;
	items: FAQItem[];
}

const FAQ_GROUPS: FAQGroup[] = [
	{
		theme: "Démarrage & installation",
		icon: <Rocket size={15} />,
		items: [
			{
				question: "Comment fonctionne l'essai gratuit de 7 jours ?",
				answer:
					"Vous créez votre compte, vous suivez les étapes de configuration et vous activez votre agent. Une carte bancaire peut être demandée à l'inscription, mais elle n'est pas débitée pendant les 7 jours d'essai. Une fois l'agent configuré, Ori peut répondre à vos appels entrants pendant 7 jours en conditions réelles. Vous pouvez utiliser soit votre numéro habituel, soit un numéro vers lequel vous redirigez vos appels. À la fin de l'essai, vous choisissez simplement si vous continuez ou non.",
			},
			{
				question: "L'installation d'Ori est-elle compliquée ?",
				answer:
					"Non. L'activation est simple et guidée étape par étape. Vous créez votre agent, vous renseignez les informations utiles sur votre restaurant, puis vous choisissez comment faire arriver les appels vers Ori. Tout est pensé pour que vous puissiez démarrer rapidement, sans installation technique complexe. En quelques minutes, votre agent peut être prêt à répondre.",
			},
			{
				question: "Dois-je changer de numéro ou de matériel ?",
				answer:
					"Non. Vous pouvez garder votre numéro actuel et votre matériel actuel. Ori peut fonctionner avec votre ligne existante. Et si vous préférez, vous pouvez aussi rediriger vos appels vers un autre numéro relié à Ori. Vous choisissez l'option la plus simple pour vous.",
			},
			{
				question: "Comment les appels arrivent-ils chez Ori ?",
				answer:
					"Deux possibilités : soit Ori répond directement via votre numéro habituel, soit vous mettez en place une redirection d'appels vers un numéro connecté à Ori. Dans les deux cas, le but est le même : ne plus laisser d'appels sans réponse.",
			},
		],
	},
	{
		theme: "Fonctionnement",
		icon: <Cpu size={15} />,
		items: [
			{
				question: "Est-ce qu'Ori répond vraiment comme un humain ?",
				answer:
					"Ori parle de façon naturelle, sans menus du type « tapez 1, tapez 2 ». Le client s'exprime normalement, et Ori répond en temps réel, sans latence gênante. L'expérience est fluide et bien plus naturelle qu'un répondeur classique. La voix peut rester légèrement synthétique, mais la conversation est claire, rapide et efficace.",
			},
			{
				question:
					"Que se passe-t-il si Ori ne peut pas répondre à une question ?",
				answer:
					"Si une demande sort du cadre prévu, Ori ne bloque pas l'appel. Il peut transférer immédiatement vers votre équipe si vous l'avez prévu. Il peut aussi prendre les coordonnées du client et le motif de l'appel pour que vous rappeliez ensuite. Vous définissez les règles, Ori les applique.",
			},
			{
				question: "Est-ce qu'Ori fonctionne 24h/24 ?",
				answer:
					"Oui. Ori peut répondre à n'importe quelle heure, y compris pendant les services, le soir, le week-end ou les jours fériés. Vous pouvez aussi choisir de l'activer uniquement sur certains créneaux. C'est vous qui décidez quand il prend le relais.",
			},
			{
				question: "Que se passe-t-il en cas de demande urgente ?",
				answer:
					"Ori peut détecter certains cas prioritaires et transférer l'appel à votre équipe selon les règles que vous avez définies. Par exemple : grosse réservation, client mécontent, demande sensible ou besoin de parler à quelqu'un immédiatement. L'objectif n'est pas de bloquer les situations importantes, mais de les faire remonter au bon moment.",
			},
		],
	},
	{
		theme: "Réservations & commandes",
		icon: <CalendarCheck size={15} />,
		items: [
			{
				question:
					"Est-ce qu'Ori peut prendre des réservations automatiquement ?",
				answer:
					"Oui. Ori peut prendre une réservation par téléphone en demandant la date, l'heure, le nombre de personnes et le nom du client. Il enregistre les informations et confirme la demande selon le fonctionnement prévu. Le client est pris en charge immédiatement, sans faire attendre votre équipe au téléphone.",
			},
			{
				question: "Ori peut-il modifier ou annuler une réservation ?",
				answer:
					"Oui, si ce fonctionnement est activé dans votre configuration. Le client peut rappeler pour modifier ou annuler sa réservation, et Ori suit les règles que vous avez définies. Cela évite à votre équipe de gérer manuellement chaque changement simple.",
			},
			{
				question:
					"Ori peut-il prendre des commandes à emporter ou en livraison ?",
				answer:
					"Oui. Ori peut prendre une commande par téléphone, enregistrer les articles demandés et guider le client tout au long de l'échange. Selon votre configuration, il peut aussi suggérer des produits complémentaires et transmettre les informations utiles pour la suite. Le but est simple : traiter plus d'appels sans surcharger votre équipe.",
			},
		],
	},
	{
		theme: "Contrôle & suivi",
		icon: <SlidersHorizontal size={15} />,
		items: [
			{
				question: "Puis-je décider quand un appel est transféré à mon équipe ?",
				answer:
					"Oui. Vous choisissez précisément dans quels cas Ori doit passer la main. Par exemple : demande complexe, gros panier, réclamation, urgence ou demande spéciale. Vous gardez le contrôle sur les règles de transfert.",
			},
			{
				question: "Est-ce que je peux voir ce qu'Ori a traité ?",
				answer:
					"Oui. Vous disposez d'un espace de suivi pour voir les appels reçus, les réservations prises, les demandes traitées et les actions réalisées. Vous savez exactement ce qu'Ori a géré pour vous.",
			},
			{
				question: "Est-ce que je peux réécouter les appels ?",
				answer:
					"Oui. Vous pouvez réécouter les appels et consulter l'historique des échanges. Cela vous permet de vérifier ce qui a été dit, de suivre la qualité des conversations et de garder une vraie visibilité sur le service rendu.",
			},
			{
				question: "Puis-je modifier ce qu'Ori dit aux clients ?",
				answer:
					"Oui. Vous pouvez ajuster les informations utiles : horaires, messages, consignes, réponses fréquentes, règles de transfert ou fonctionnement général. Ori s'adapte à votre restaurant. Vous gardez la main sur l'expérience client.",
			},
		],
	},
	{
		theme: "Multi-sites, sécurité & abonnement",
		icon: <ShieldCheck size={15} />,
		items: [
			{
				question:
					"J'ai plusieurs restaurants. Est-ce qu'Ori peut tous les gérer ?",
				answer:
					"Oui. Ori peut être utilisé sur plusieurs établissements. Chaque restaurant peut avoir ses propres horaires, ses propres consignes et son propre fonctionnement. Vous gardez une gestion claire, même à plusieurs sites.",
			},
			{
				question:
					"Les données de mon restaurant et de mes clients sont-elles protégées ?",
				answer:
					"Oui. Les données sont sécurisées et utilisées uniquement pour faire fonctionner le service. L'objectif est de garantir un traitement fiable, confidentiel et conforme aux exigences de protection des données.",
			},
			{
				question: "Puis-je arrêter quand je veux ?",
				answer:
					"Oui. À la fin de l'essai, vous choisissez librement si vous souhaitez continuer. Et si vous êtes abonné, vous pouvez arrêter selon les conditions prévues, sans mauvaise surprise. Le but est que vous restiez parce que le service vous est utile, pas parce que vous êtes bloqué.",
			},
		],
	},
];

function AccordionItem({
	item,
	index,
	globalIndex,
	open,
	onToggle,
}: {
	item: FAQItem;
	index: number;
	globalIndex: number;
	open: number | null;
	onToggle: (i: number) => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: index * 0.08,
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			<div className="border-b border-background-secondary dark:border-dark-elevated">
				<button
					onClick={() => onToggle(globalIndex)}
					className="w-full flex items-center gap-3 xs:gap-4 md:gap-6 text-left group min-h-[72px] xs:min-h-[80px] md:min-h-[82px]"
				>
					<div className="w-1.5 h-[24px] xs:h-[28px] md:h-[33px] rounded-sm shrink-0 transition-colors bg-primary" />
					<span className="flex-1 font-display font-semibold text-sm xs:text-base md:text-xl lg:text-2xl text-text-primary dark:text-text">
						{item.question}
					</span>
					<ChevronDown
						size={22}
						strokeWidth={2}
						className={`shrink-0 text-text-secondary dark:text-text transition-transform ${
							open === globalIndex ? "rotate-180" : ""
						}`}
					/>
				</button>

				<AnimatePresence initial={false}>
					{open === globalIndex && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							className="overflow-hidden"
						>
							<p className="font-display font-normal text-sm md:text-base text-text-primary dark:text-text-tertiary pb-5 md:pb-8 pl-4 md:pl-6 leading-relaxed">
								{item.answer}
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

const ALL_THEMES = "Tout voir";

export default function PhoneFAQPage() {
	const [open, setOpen] = useState<number | null>(null);
	const [activeTheme, setActiveTheme] = useState(ALL_THEMES);

	const tabs = [ALL_THEMES, ...FAQ_GROUPS.map((g) => g.theme)];
	const visibleGroups =
		activeTheme === ALL_THEMES
			? FAQ_GROUPS
			: FAQ_GROUPS.filter((g) => g.theme === activeTheme);

	let globalIndex = 0;

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-4xl mx-auto px-5 md:px-10 pt-24 lg:pt-32 pb-16 lg:pb-24">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<Link
						href="/solutions/phone"
						className="flex items-center gap-2 font-display font-normal text-lg text-text-heading dark:text-text hover:text-primary dark:hover:text-primary transition-colors mb-6"
					>
						<ArrowLeft size={20} />
						Retour
					</Link>
					<span className="font-display font-semibold text-sm text-primary tracking-widest">
						FAQ
					</span>
					<h1 className="font-display font-bold text-3xl sm:text-5xl my-2 text-text-primary dark:text-text">
						Tout savoir sur Ori phone.
					</h1>
					<p className="font-sans font-normal text-lg text-text-secondary dark:text-text-tertiary">
						Tout savoir sur l'assistant conçu pour les restaurants.
					</p>
				</motion.div>

				{/* Filter — select on mobile, tabs on desktop */}
				<div className="my-4">
					{/* Mobile dropdown */}
					<div className="md:hidden">
						<Select
							value={activeTheme}
							onValueChange={(v) => {
								setActiveTheme(v);
								setOpen(null);
							}}
						>
							<SelectTrigger className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{tabs.map((tab) => {
									const group = FAQ_GROUPS.find((g) => g.theme === tab);
									return (
										<SelectItem key={tab} value={tab}>
											<span className="flex items-center gap-2">
												{group && (
													<span className="text-text-secondary dark:text-text-tertiary">
														{group.icon}
													</span>
												)}
												{tab}
											</span>
										</SelectItem>
									);
								})}
							</SelectContent>
						</Select>
					</div>

					{/* Desktop tabs */}
					<div className="hidden md:flex flex-wrap gap-2 mt-10">
						{tabs.map((tab) => {
							const group = FAQ_GROUPS.find((g) => g.theme === tab);
							const isActive = activeTheme === tab;
							return (
								<button
									key={tab}
									onClick={() => {
										setActiveTheme(tab);
										setOpen(null);
									}}
									className={`flex items-center gap-1.5 font-display font-bold text-sm rounded-full px-4 py-2 transition-colors ${
										isActive
											? "bg-primary/10 text-primary"
											: "text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated"
									}`}
								>
									{group && (
										<span
											className={
												isActive
													? "text-primary"
													: "text-text-secondary dark:text-text-tertiary"
											}
										>
											{group.icon}
										</span>
									)}
									{tab}
								</button>
							);
						})}
					</div>
				</div>

				<div className="mt-14 flex flex-col gap-14">
					{visibleGroups.map((group) => {
						const startIndex = globalIndex;
						globalIndex += group.items.length;

						return (
							<div key={group.theme}>
								<h2 className="flex items-center gap-3 font-display font-bold text-3xl text-text-heading dark:text-text mb-2">
									<span className="text-text-heading dark:text-text [&>svg]:size-[20px]">
										{group.icon}
									</span>
									{group.theme}
								</h2>
								<div>
									{group.items.map((item, i) => (
										<AccordionItem
											key={i}
											item={item}
											index={i}
											globalIndex={startIndex + i}
											open={open}
											onToggle={(idx) => setOpen(open === idx ? null : idx)}
										/>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
