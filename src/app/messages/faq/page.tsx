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
import {
	ChevronDown,
	Rocket,
	Cpu,
	CalendarCheck,
	SlidersHorizontal,
	Zap,
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
		theme: "Démarrage & connexion",
		icon: <Rocket size={15} />,
		items: [
			{
				question: "Dois-je changer mes comptes Instagram ou WhatsApp ?",
				answer:
					"Non. Ori se connecte directement à vos comptes existants (WhatsApp Business ou Instagram). Vous gardez vos accès, votre historique et votre fonctionnement habituel. Rien n'est recréé, rien n'est perdu.",
			},
			{
				question: "Combien de temps faut-il pour activer Ori Messages ?",
				answer:
					"Moins de 5 minutes. Vous connectez vos comptes, vous renseignez les informations de base, et Ori est prêt. Il peut commencer à répondre immédiatement à vos messages.",
			},
			{
				question: "L'installation est-elle technique ?",
				answer:
					"Non. Tout est guidé étape par étape. Aucune compétence technique n'est nécessaire. Vous suivez les étapes, et votre assistant est opérationnel rapidement.",
			},
		],
	},
	{
		theme: "Fonctionnement des messages",
		icon: <Cpu size={15} />,
		items: [
			{
				question: "Est-ce qu'Ori répond automatiquement aux messages ?",
				answer:
					"Oui. Ori répond automatiquement aux messages reçus sur WhatsApp et Instagram. Il comprend les demandes et répond de manière claire et immédiate. Vous ne laissez plus aucun message sans réponse.",
			},
			{
				question: "Est-ce qu'Ori répond comme un humain ?",
				answer:
					"Ori comprend le langage naturel et répond de façon fluide. Le ton est conversationnel, simple et direct. L'objectif est que l'échange soit rapide, naturel et utile pour le client.",
			},
			{
				question: "Que se passe-t-il si Ori ne comprend pas un message ?",
				answer:
					"Ori ne bloque pas la conversation. Il peut reformuler, poser une question ou transférer à votre équipe si nécessaire. Vous définissez les limites et les règles de passage à un humain.",
			},
			{
				question: "Puis-je reprendre la main sur une conversation ?",
				answer:
					"Oui, à tout moment. Vous pouvez intervenir directement depuis Instagram ou WhatsApp. Ori s'efface dès que vous reprenez la conversation.",
			},
			{
				question:
					"Puis-je choisir quand Ori répond et quand je réponds moi-même ?",
				answer:
					"Oui. Vous pouvez décider que Ori répond en continu, uniquement en dehors des horaires, ou sur certains types de messages. Vous gardez le contrôle total.",
			},
		],
	},
	{
		theme: "Réservations & conversion",
		icon: <CalendarCheck size={15} />,
		items: [
			{
				question: "Est-ce qu'Ori peut gérer les réservations via message ?",
				answer:
					"Oui. Ori peut comprendre une demande de réservation, poser les bonnes questions et enregistrer les informations. Le client est pris en charge immédiatement, sans attente.",
			},
			{
				question: "Ori peut-il générer plus de ventes via messages ?",
				answer:
					"Oui. Ori peut répondre rapidement, relancer, suggérer des options et guider le client. Résultat : plus de conversions et moins d'opportunités perdues.",
			},
			{
				question: "Peut-il envoyer des liens (paiement, menu, réservation) ?",
				answer:
					"Oui. Ori peut partager des liens utiles : menu, réservation, paiement ou autre. Il guide le client jusqu'à l'action finale.",
			},
		],
	},
	{
		theme: "Contrôle & suivi",
		icon: <SlidersHorizontal size={15} />,
		items: [
			{
				question: "Est-ce que je peux voir les conversations ?",
				answer:
					"Oui. Vous avez accès à l'historique complet des échanges. Vous pouvez lire, suivre et comprendre ce qui a été dit à chaque client.",
			},
			{
				question: "Puis-je modifier les réponses d'Ori ?",
				answer:
					"Oui. Vous pouvez ajuster les messages, les informations, les réponses fréquentes et le ton utilisé. Ori s'adapte à votre restaurant.",
			},
			{
				question: "Est-ce que je peux voir les performances ?",
				answer:
					"Oui. Vous pouvez suivre le nombre de messages reçus, traités et les actions réalisées. Vous voyez concrètement l'impact sur votre activité.",
			},
		],
	},
	{
		theme: "Utilisation avancée",
		icon: <Zap size={15} />,
		items: [
			{
				question: "Puis-je utiliser Ori uniquement quand je suis fermé ?",
				answer:
					"Oui. Vous pouvez activer Ori uniquement pendant vos heures de fermeture ou en dehors des services. Cela permet de répondre aux clients sans mobiliser votre équipe.",
			},
			{
				question:
					"Est-ce qu'Ori peut gérer plusieurs comptes ou établissements ?",
				answer:
					"Oui. Vous pouvez connecter plusieurs comptes et gérer plusieurs établissements. Chaque compte peut avoir ses propres règles et son propre fonctionnement.",
			},
		],
	},
	{
		theme: "Sécurité & engagement",
		icon: <ShieldCheck size={15} />,
		items: [
			{
				question: "Mes données sont-elles sécurisées ?",
				answer:
					"Oui. Les données sont protégées et utilisées uniquement pour faire fonctionner le service. Vous gardez le contrôle de vos comptes et de vos échanges.",
			},
			{
				question: "Puis-je arrêter quand je veux ?",
				answer:
					"Oui. Vous restez libre d'arrêter à tout moment selon les conditions prévues. L'objectif est simple : que vous restiez parce que ça vous apporte de la valeur.",
			},
		],
	},
];

const FILTERED_GROUPS = FAQ_GROUPS;

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
					<div className="w-1.5 h-[24px] xs:h-[28px] md:h-[33px] rounded-sm shrink-0 bg-ori-message" />
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

export default function MessagesFAQPage() {
	const [open, setOpen] = useState<number | null>(null);
	const [activeTheme, setActiveTheme] = useState(ALL_THEMES);

	const tabs = [ALL_THEMES, ...FILTERED_GROUPS.map((g) => g.theme)];
	const visibleGroups =
		activeTheme === ALL_THEMES
			? FILTERED_GROUPS
			: FILTERED_GROUPS.filter((g) => g.theme === activeTheme);

	let globalIndex = 0;

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-4xl mx-auto px-5 md:px-10 pt-24 lg:pt-32 pb-16 lg:pb-24">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<span className="font-display font-semibold text-sm text-ori-message tracking-widest">
						FAQ
					</span>
					<h1 className="font-display font-bold text-5xl text-text-primary dark:text-text mt-3">
						Tout savoir sur Ori Message
					</h1>
					<p className="font-sans font-normal text-lg text-text-secondary dark:text-text-tertiary mt-3">
						Les réponses à vos questions pour automatiser vos réseaux en toute
						confiance.
					</p>
				</motion.div>

				{/* Filter — select on mobile, tabs on desktop */}
				<div className="mt-8">
					{/* Mobile dropdown */}
					<div className="md:hidden">
						<Select
							value={activeTheme}
							onValueChange={(v) => {
								setActiveTheme(v);
								setOpen(null);
							}}
						>
							<SelectTrigger className="w-full focus:ring-ori-message">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{tabs.map((tab) => {
									const group = FILTERED_GROUPS.find((g) => g.theme === tab);
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
					<div className="hidden md:flex flex-wrap gap-2">
						{tabs.map((tab) => {
							const group = FILTERED_GROUPS.find((g) => g.theme === tab);
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
											? "bg-ori-message/10 text-ori-message"
											: "text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated"
									}`}
								>
									{group && (
										<span
											className={
												isActive
													? "text-ori-message"
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

				<div className="mt-10 flex flex-col gap-12">
					{visibleGroups.map((group) => {
						const startIndex = globalIndex;
						globalIndex += group.items.length;

						return (
							<div key={group.theme}>
								<h2 className="flex items-center gap-3 font-display font-bold text-3xl text-text-heading dark:text-text mb-2">
									<span className="text-text-heading dark:text-text [&>svg]:size-[18px]">
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
