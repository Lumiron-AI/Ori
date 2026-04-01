"use client";

import { Settings, Globe, MapPin, Mail, Phone } from "lucide-react";

export function QuickSetUpPanel() {
	return (
		<div className="flex flex-col gap-4">
			{/* Header */}
			<div className="mb-1">
				<p className="font-display font-medium text-xl text-text-primary dark:text-text">
					Bienvenue dans votre espace
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					Je suis Ori, votre assistant vocal
				</p>
			</div>

			{/* Tabs */}
			<div className="flex items-center gap-2">
				<button className="px-4 py-2 rounded-xl bg-ori-message text-text font-display font-medium text-sm cursor-default">
					Informations
				</button>
				<button className="px-4 py-2 rounded-xl text-text-secondary dark:text-text-tertiary font-display font-medium text-sm cursor-default">
					Fonctionnement
				</button>
				<button className="px-4 py-2 rounded-xl text-text-secondary dark:text-text-tertiary font-display font-medium text-sm cursor-default">
					Récapitulatif
				</button>
			</div>

			{/* Fields */}
			<div className="flex flex-col gap-3 mt-1">
				<div className="bg-background-secondary dark:bg-dark-overlay rounded-xl p-3 flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<Settings
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<div className="flex flex-col min-w-0">
						<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
							Nom de l&apos;établissement
						</span>
						<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
							La Table du Phocéen
						</span>
					</div>
				</div>

				<div className="bg-background-secondary dark:bg-dark-overlay rounded-xl p-3 flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<Globe
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<div className="flex flex-col min-w-0">
						<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
							Site web
						</span>
						<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
							https://www.latableduphoceen.fr
						</span>
					</div>
				</div>

				<div className="bg-background-secondary dark:bg-dark-overlay rounded-xl p-3 flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<MapPin
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<div className="flex flex-col min-w-0">
						<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
							Adresse
						</span>
						<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
							18 Rue de la Mer, 13001 Marseille, France
						</span>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div className="bg-background-secondary dark:bg-dark-overlay rounded-xl p-3 flex items-center gap-3">
						<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
							<Mail
								size={18}
								className="text-text-secondary dark:text-text-tertiary"
							/>
						</div>
						<div className="flex flex-col min-w-0">
							<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
								Email
							</span>
							<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
								latableduphoceen.fr@gmail.com
							</span>
						</div>
					</div>
					<div className="bg-background-secondary dark:bg-dark-overlay rounded-xl p-3 flex items-center gap-3">
						<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
							<Phone
								size={18}
								className="text-text-secondary dark:text-text-tertiary"
							/>
						</div>
						<div className="flex flex-col min-w-0">
							<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
								Téléphone
							</span>
							<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
								04 91 23 45 67
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
