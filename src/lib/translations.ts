export const translations = {
	fr: {
		// ── Header ────────────────────────────────────────────────────────────────
		header: {
			navOriMessages: "Ori Messages",
			navOriPhone: "Ori Téléphone",
			myAccount: "Mon compte",
			start: "Démarrer",
			toggleTheme: "Basculer le thème",
			toggleMenu: "Toggle menu",
		},

		// ── Footer ────────────────────────────────────────────────────────────────
		footer: {
			brandTagline:
				"Le standard téléphonique IA pour restaurants. Ori gère vos réservations, commandes et questions clients, 24h/24.",
			messagesBrandTagline:
				"L'assistant messaging IA pour restaurants. Ori répond à vos messages WhatsApp et Instagram, 24h/24.",
			navTitle: "Navigation",
			legalTitle: "Légal",
			socialTitle: "Réseaux sociaux",
			changeLang: "Changer de langue",
			copyright: "© 2026 ORI. Tous droits réservés.",
			madeBy: "Un produit de",
			navLinks: [
				{ href: "/solutions/phone#use-case", label: "Cas d'usage" },
				{ href: "/solutions/phone#interface", label: "Interface" },
				{ href: "/solutions/phone#comparison", label: "Comparatif" },
				{ href: "/solutions/phone#sponsorship", label: "Parrainage" },
				{ href: "/solutions/phone#faq", label: "FAQ" },
				{ href: "/solutions/phone#pricing", label: "Tarifs" },
				{ href: "/ressources", label: "Ressources" },
			],
			messagesNavLinks: [
				{ href: "/solutions/messages#use-case", label: "Cas d'usage" },
				{ href: "/solutions/messages#interface", label: "Interface" },
				{ href: "/solutions/messages#comparison", label: "Comparatif" },
				{ href: "/solutions/messages#sponsorship", label: "Parrainage" },
				{ href: "/solutions/messages#faq", label: "FAQ" },
				{ href: "/solutions/messages#pricing", label: "Tarifs" },
				{ href: "/ressources", label: "Ressources" },
			],
			legalLinks: [
				{ href: "/legal/mentions", label: "Mentions légales" },
				{ href: "/legal/cgv", label: "CGV" },
				{
					href: "/legal/confidentialite",
					label: "Politique de confidentialité",
				},
			],
		},

		// ── Hero (phone) ──────────────────────────────────────────────────────────
		hero: {
			title1: "Ori,",
			title2: "le",
			titleHighlight: "standard téléphonique",
			title3: "automatique pour votre",
			titleUnderline: "restaurant",
			subtitle:
				"Il décroche instantanément, répond aux questions de vos clients et enregistre vos réservations.",
			subtitleLine2: "24h/24, sans jamais interrompre votre équipe.",
			testPrompt: "Parlez à Ori comme un vrai client",
			stats: [
				{ suffix: "%", label: "Appels pris en charge" },
				{ suffix: "h", label: "Économisées par semaine" },
				{ suffix: "min", label: "De configuration" },
				{ suffix: "/7", label: "Disponibilité" },
			],
		},

		// ── TestOriButton ─────────────────────────────────────────────────────────
		testOriButton: {
			start: "Tester Ori maintenant",
			stop: "Arrêter la démo",
			mute: "Mettre en sourdine",
			unmute: "Réactiver le son",
		},

		// ── Use Case ──────────────────────────────────────────────────────────────
		useCase: {
			label: "CAS D'USAGE",
			title: "L'assistant téléphone qui travaille à votre place.",
			subtitle: "Ori comprend chaque demande et exécute l'action.",
			footer:
				"Ces exemples illustrent la gestion de vos appels en totale autonomie, sans aucune intervention de votre équipe.",
			cards: [
				{
					title: "Gestion des réservations",
					tagGroups: [
						{
							at: 10,
							tags: [
								"Créneau 20h complet",
								"Proposition alternative 20h30 acceptée",
							],
						},
						{
							at: 23,
							tags: [
								"Client identifié via numéro",
								"Préférence « table au calme » confirmée",
							],
						},
						{ at: 30, tags: ["Réservation enregistrée dans le CRM"] },
					],
				},
				{
					title: "Questions fréquentes",
					tagGroups: [
						{
							at: 7,
							tags: ["Informations menu communiquées", "Horaires transmis"],
						},
						{
							at: 19,
							tags: ["Demande anniversaire qualifiée (15 pers)"],
						},
						{
							at: 28,
							tags: [
								"Responsable événements notifié",
								"Formules groupe envoyées par SMS",
							],
						},
					],
				},
			],
		},

		// ── AudioCard ─────────────────────────────────────────────────────────────
		audioCard: {
			listenLabel: "Écouter la conversation",
			play: "Lire",
			stop: "Arrêter",
		},

		// ── Comparison ────────────────────────────────────────────────────────────
		comparison: {
			label: "COMPARATIF",
			title: "Bien plus qu'un standard, un atout pour votre équipe.",
			subtitle:
				"Comparez l'impact d'Ori sur votre quotidien face à une gestion classique.",
			withoutHeader: "Standard classique",
			withHeader: "Avec Ori",
			ctaLabel: "Voir avec Ori",
			footer:
				"Maximisez votre chiffre d'affaires en ne laissant plus aucun appel sans réponse. Chaque appel décroché est une opportunité préservée.",
			rows: [
				{
					topic: "Disponibilité",
					without: "Appels manqués pendant le rush ou après minuit",
					with: "Décroché instantané 24h/24 et 7j/7",
				},
				{
					topic: "Charge de travail",
					without: "Interruption constante du personnel en plein service",
					with: "Équipe 100% concentrée sur les clients en salle",
				},
				{
					topic: "Réservations",
					without: "Risque d'erreurs de saisie et d'oublis",
					with: "Saisie automatique et fiable dans votre logiciel",
				},
				{
					topic: "Coût d'exploitation",
					without: "Un poste coûteux et difficile à recruter",
					with: "Un investissement rentable dès le premier jour",
				},
				{
					topic: "Sérénité",
					without: "Stress lié au téléphone qui sonne dans le vide",
					with: "Esprit libre : chaque appel est traité",
				},
			],
		},

		// ── Interface ─────────────────────────────────────────────────────────────
		interface: {
			label: "INTERFACE",
			title: "Votre assistant, vos règles.",
			subtitle:
				"Une interface pensée pour le terrain : définissez vos règles et suivez vos résultats en temps réel.",
			footer:
				"Une gestion simplifiée pour vous concentrer sur l'essentiel : l'accueil de vos clients et la qualité de votre service.",
			back: "Retour",
			tabs: [
				{
					label: "Mise en service immédiate",
					description:
						"Renseignez les informations de votre restaurant, vos horaires et vos règles. Ori est prêt à répondre aux appels, sans installation complexe.",
				},
				{
					label: "Personnalisation sur-mesure",
					description:
						"Définissez le message d'accueil, le ton et les règles de transfert. Ori s'adapte précisément à l'image de votre établissement.",
				},
				{
					label: "Autonomie complète",
					description:
						"Ori prend en charge les réservations, commandes et questions fréquentes. Votre équipe n'est plus interrompue pendant le service.",
				},
				{
					label: "Suivi et statistiques",
					description:
						"Retrouvez l'historique complet de vos appels et mesurez l'impact d'Ori sur votre taux de remplissage.",
				},
			],
		},

		// ── Pricing ───────────────────────────────────────────────────────────────
		pricing: {
			label: "TARIFS",
			title: "Ne courez plus jamais après le téléphone.",
			subtitle: "Ori prend le relais. Vous gardez l'esprit libre.",
			footer: "Un seul client perdu coûte plus cher qu'un mois d'Ori.",
			standard: {
				name: "STANDARD",
				tagline: "1 établissement",
				perMonth: "/ mois",
				perYear: "/ an",
				annual: "Annuel",
				discount: "-10%",
				cta: "Commencer l'essai gratuit",
				annualLabel: "Facturation annuelle",
				extraMinutes: "Minutes supplémentaires : 0,20 € / minute",
				trialNote: "Essai gratuit 7 jours — sans engagement",
				billingNote: "Facturation uniquement après l'essai",
				features: [
					"Jusqu'à 400 minutes d'appels entrants",
					"Réservations, annulations et réponses aux questions fréquentes prises en charge",
					"Transfert vers l'équipe si nécessaire",
					"Statistiques en temps réel",
					"Interface de gestion complète",
				],
			},
			advanced: {
				name: "AVANCÉ",
				tagline: "Multi-sites et options personnalisés",
				price: "Sur-mesure",
				priceNote: "Configuration adaptée",
				cta: "Planifier un appel",
				note: "Solution et tarification personnalisée selon votre organisation.",
				features: [
					"Multi-établissements",
					"Modules complémentaires",
					"Règles spécifiques",
					"Intégrations techniques",
					"Suivi centralisé",
				],
			},
		},

		// ── FAQ ───────────────────────────────────────────────────────────────────
		faq: {
			label: "FAQ",
			title: "Vos questions sur Ori",
			subtitle: "Tout savoir sur l'assistant conçu pour les restaurants.",
			seeAll: "Voir toutes les questions",
			items: [
				{
					question: "Dois-je changer de numéro ou de matériel ?",
					answer:
						"Non. Ori se connecte à votre numéro existant via un simple renvoi d'appel. Aucun matériel à acheter, aucune installation technique — tout fonctionne avec votre ligne actuelle.",
				},
				{
					question:
						"Ori peut-il vraiment prendre des réservations automatiquement ?",
					answer:
						"Oui. Ori dispose de votre planning en temps réel et peut confirmer, modifier ou annuler une réservation directement dans votre logiciel. Le client reçoit une confirmation par SMS.",
				},
				{
					question: "Que se passe t-il en cas de demande urgente ?",
					answer:
						"Ori détecte les situations urgentes et peut transférer l'appel à votre équipe selon des règles que vous définissez : plages horaires, mots-clés, ou à tout moment sur demande du client.",
				},
				{
					question: "Est-ce rentable pour un petit restaurant ?",
					answer:
						"Absolument. Un seul client perdu à cause d'un appel manqué peut coûter plus qu'un mois d'abonnement à Ori. Et les heures économisées par votre équipe sur la gestion des appels représentent un gain immédiat.",
				},
				{
					question: "Comment fonctionne l'essai de 7 jours ?",
					answer:
						"Vous activez Ori en 5 minutes, sans carte bancaire requise. Pendant 7 jours, Ori gère vos appels réels. À la fin de l'essai, vous choisissez si vous continuez — sans aucun engagement.",
				},
			],
		},

		// ── Sponsorship ───────────────────────────────────────────────────────────
		sponsorship: {
			label: "PARRAINAGE",
			title: "Partagez Ori, gagnez ensemble.",
			subtitle:
				"Recommandez Ori à vos confrères et profitez d'avantages exclusifs sur votre abonnement.",
			seeCta: "Voir les conditions",
			cards: [
				{
					tag: "POUR LE RESTAURANT PARRAIN",
					highlight: "200 minutes",
					rest: " offertes",
				},
				{
					tag: "POUR LE RESTAURANT RECOMMANDÉ",
					highlight: "1 mois",
					rest: " offert",
				},
			],
		},

		// ── Sponsorship Modal ─────────────────────────────────────────────────────
		sponsorshipModal: {
			title: "Comment fonctionne le parrainage ?",
			description:
				"Le restaurant recommandé crée son compte et active Ori.\nVous êtes tous les deux récompensés.",
			formTitle: "Indiquez les adresses e-mails",
			recommendedEmailLabel: "E-mail du restaurant recommandé",
			yourEmailLabel: "Votre e-mail",
			offerNote: "Offre valable pour tout nouveau compte activé.",
			submit: "Envoyer la demande",
			close: "Fermer",
		},

		// ── Trial CTA ─────────────────────────────────────────────────────────────
		trialCta: {
			title1: "ESSAYER ORI",
			titleHighlight: "7 JOURS",
			title2: "GRATUITS",
			subtitle: "Sans engagement. Configuration en 5 minutes.",
			cta: "Démarrer l'essai",
		},

		// ── Dashboard Phone panels ────────────────────────────────────────────────
		dashboardPhone: {
			tabs: ["Informations", "Fonctionnement", "Récapitulatif"],
			welcome: "Bienvenue dans votre espace",
			subtitle: "Je suis Ori, votre assistant vocal",
			fields: {
				name: "Nom de l'établissement",
				website: "Site web",
				address: "Adresse",
				email: "Email",
				phone: "Téléphone",
			},
			voiceAgent: "Voix de l'agent",
			voiceGender: "Genre :",
			voiceMale: "Homme",
			voiceFemale: "Femme",
			greeting: "Phrase prononcée au début de l'appel",
			transfer: "Transfert de l'appel à votre équipe",
			transferSubtitle:
				"Choisissez les situations où l'agent doit vous passer l'appel",
			transferChips: ["Annulation d'une réservation", "Demande urgente"],
			aiAgents: "Agents IA",
			callsReceived: "Appels reçus",
			availability: "Disponibilité",
			activity: "Activité",
			statusAllDay: "Toute la journée",
			statusUnavailable: "Indisponible",
			trackingTitle: "Historique — Ori",
			totalCalls: "Total des appels passés",
			avgDuration: "Durée moyenne par appel",
			tableHeaders: ["Date & Heure", "De", "Durée", "Action"],
		},

		// ── Dashboard Messages panels ─────────────────────────────────────────────
		dashboardMessages: {
			tabs: ["Informations", "Fonctionnement", "Récapitulatif"],
			welcome: "Bienvenue dans votre espace",
			subtitle: "Je suis Ori, votre assistant vocal",
			fields: {
				name: "Nom de l'établissement",
				website: "Site web",
				address: "Adresse",
				email: "Email",
				phone: "Téléphone",
			},
			toneChoice: "Choix du ton",
			toneGender: "Genre :",
			toneProfessional: "Professionnel",
			toneCasual: "Décontracté",
			activitySlots: "Plages d'activité de l'agent IA",
			activitySlotsSubtitle:
				"Indiquez les heures pendant lesquelles votre agent IA doit être actif",
			days: [
				"Lundi",
				"Mardi",
				"Mercredi",
				"Jeudi",
				"Vendredi",
				"Samedi",
				"Dimanche",
			],
			closed: "Fermé",
			aiAgents: "Agents IA",
			messagesReceived: "Messages reçus",
			availability: "Disponibilité",
			activity: "Activité",
			statusAllDay: "Toute la journée",
			statusUnavailable: "Indisponible",
			trackingTitle: "Historique - Ori",
			totalCalls: "Total des appels passés",
			avgDuration: "Durée moyenne par appel",
			tableHeaders: ["Date & Heure", "De", "Durée", "Action"],
		},

		// ── Ori Messages — Hero ───────────────────────────────────────────────────
		messagesHero: {
			titlePrefix: "Ori,",
			titleAssistant: "l'assistant automatique ",
			titleWhatsApp: "WhatsApp",
			titleAnd: " et ",
			titleInstagram: "Instagram",
			titleFor: " pour votre ",
			titleUnderline: "restaurant",
			subtitle:
				"Ori répond instantanément aux messages de vos clients, prend vos réservations et confirme chaque demande. 24h/24.",
			stats: [
				{ suffix: "%", label: "Des messages traités" },
				{ suffix: "s", label: "Temps moyen de réponse" },
				{ suffix: "/7", label: "Disponibilité" },
				{ suffix: "", label: "Canaux gérés simultanément" },
			],
		},

		// ── Ori Messages — Use Case ───────────────────────────────────────────────
		messagesUseCase: {
			label: "CAS D'USAGE",
			title: "Ne laissez plus aucun message sans réponse.",
			subtitle:
				"Ne perdez plus aucune opportunité : Ori prend le relais sur vos messageries pour répondre à chaque sollicitation, instantanément.",
			cards: [
				{
					platform: "Instagram",
					caption:
						"Ori traite vos messages privés instantanément pour transformer l'intérêt de vos contacts en actions concrètes, sans aucun délai.",
				},
				{
					platform: "WhatsApp",
					caption:
						"Questions sur la carte, réservations ou infos pratiques : Ori répond avec précision à toutes les demandes de vos clients, 24h/24",
				},
			],
		},

		// ── Ori Messages — Interface ──────────────────────────────────────────────
		messagesInterface: {
			label: "INTERFACE",
			title: "Votre messagerie en pilote automatique.",
			subtitle:
				"Configurez Ori en quelques minutes et laissez-le gérer chaque message avec précision, selon vos règles.",
			footer:
				"Une gestion simplifiée pour vous concentrer sur l'essentiel : l'accueil de vos clients et la qualité de votre service.",
			back: "Retour",
			tabs: [
				{
					id: "setup",
					label: "Connexion en un clic",
					description:
						"Liez vos comptes WhatsApp et Instagram instantanément. Ori est prêt à répondre à vos clients en moins de 5 minutes.",
				},
				{
					id: "customize",
					label: "Personnalisation métier",
					description:
						"Définissez le ton des réponses, vos horaires d'activité et les règles propres à votre établissement. Ori s'adapte à votre image.",
				},
				{
					id: "automation",
					label: "Gestion 100% autonome",
					description:
						"Ori prend en charge les réservations, les questions fréquentes et chaque sollicitation en temps réel. Votre équipe reste concentrée sur l'essentiel.",
				},
				{
					id: "tracking",
					label: "Historique complet",
					description:
						"Retrouvez l'historique de tous les échanges et mesurez l'impact d'Ori sur votre taux de conversion et vos réservations.",
				},
			],
		},

		// ── Ori Messages — Comparison ─────────────────────────────────────────────
		messagesComparison: {
			label: "COMPARATIF",
			title: "Pourquoi choisir Ori pour vos messageries ?",
			subtitle:
				"Comparez la gestion manuelle avec la puissance de l'automatisation intelligente et mesurez l'impact sur votre quotidien.",
			headerManual: "Gestion manuelle",
			headerOri: "Avec Ori",
			ctaLabel: "Voir avec Ori",
			footer:
				"Ne laissez plus aucune opportunité vous échapper. Chaque message reçu est une chance de convertir un prospect en client fidèle.",
			rows: [
				{
					topic: "Délai de réponse",
					without: "Plusieurs heures d'attente selon votre disponibilité",
					with: "Réponse immédiate en moins de 2 secondes",
				},
				{
					topic: "Taux de conversion",
					without: "Perte de clients faute de réactivité immédiate",
					with: "Engagement maximal grâce à un traitement instantané",
				},
				{
					topic: "Précision des infos",
					without: "Risque d'erreurs ou d'informations incomplètes",
					with: "Réponses fiables basées sur vos données réelles",
				},
				{
					topic: "Gestion du flux",
					without: "Interruption constante de vos tâches prioritaires",
					with: "Autonomie complète pour une tranquilité totale",
				},
				{
					topic: "Accessibilité",
					without: "Dépend de la présence humaine sur chaque application",
					with: "Disponibilité totale, 24h/24 sur tous vos canaux",
				},
			],
		},

		// ── Ori Messages — FAQ ────────────────────────────────────────────────────
		messagesFaq: {
			label: "FAQ",
			title: "Tout savoir sur Ori Message",
			subtitle:
				"Les réponses à vos questions pour automatiser vos réseaux en toute confiance.",
			seeAll: "Voir toutes les questions",
			items: [
				{
					question: "Dois-je changer mes comptes WhatsApp ou Instagram ?",
					answer:
						"Non. Ori se connecte directement à vos comptes existants (Business ou Pro). Vous gardez vos accès, votre historique et vous pouvez continuer à les utiliser normalement.",
				},
				{
					question: "Est-ce qu'Ori peut vraiment gérer mes réservations ?",
					answer:
						"Oui. Ori est capable de comprendre une demande de table, de vérifier vos disponibilités et de confirmer la réservation en suivant vos règles spécifiques, comme le ferait un membre de votre équipe.",
				},
				{
					question:
						"Puis-je reprendre la main sur une discussion à tout moment ?",
					answer:
						"Absolument. Vous gardez le contrôle total. Si vous souhaitez intervenir personnellement dans une conversation sur WhatsApp ou Instagram, vous pouvez le faire instantanément depuis votre application habituelle.",
				},
				{
					question:
						"Est-ce que je peux utiliser Ori seulement quand je suis fermé ?",
					answer:
						"Oui. Vous pouvez programmer Ori pour qu'il ne s'active que pendant vos coupures, la nuit ou vos jours de fermeture. C'est vous qui déterminez ses plages d'activité selon vos besoins.",
				},
				{
					question: "Combien de temps faut-il pour activer l'assistant ?",
					answer:
						"Moins de 5 minutes. La connexion est simplifiée au maximum : vous liez vos comptes, vous renseignez vos infos de base, et Ori commence à répondre à vos clients immédiatement.",
				},
			],
		},

		// ── Ori Messages — Sponsorship ────────────────────────────────────────────
		messagesSponsorship: {
			label: "PARRAINAGE",
			title: "Parrainez vos confrères.",
			subtitle:
				"Recommandez Ori à vos confrères et profitez d'avantages exclusifs sur votre abonnement.",
			seeConditions: "Voir les conditions",
			cards: [
				{
					tag: "POUR LE RESTAURANT PARRAIN",
					highlight: "200 discussions",
					rest: " offertes",
				},
				{
					tag: "POUR LE RESTAURANT RECOMMANDÉ",
					highlight: "1 mois",
					rest: " offert",
				},
			],
		},

		// ── Ori Messages — Trial CTA ──────────────────────────────────────────────
		messagesTrialCta: {
			titlePrefix: "ESSAYER ORI ",
			titleHighlight: "7 JOURS",
			titleSuffix: " GRATUITS",
			subtitle: "Sans engagement. Configuration en 5 minutes.",
			cta: "Démarrer l'essai",
		},

		// ── Ori Messages — Pricing ────────────────────────────────────────────────
		messagesPricing: {
			label: "TARIFS",
			title: "Choisissez le canal adapté à votre restaurant",
			subtitle:
				"Commencez avec un canal ou combinez-les pour une gestion complète.",
			footer: "Un seul client perdu coûte plus cher qu'un mois d'Ori.",
			perMonth: "/ mois",
			perYear: "/ an",
			annual: "Annuel",
			discount: "-10%",
			trialNote: "Essai gratuit 7 jours — sans engagement",
			billingNote: "Facturation uniquement après l'essai",
			instagram: {
				title: "ASSISTANT INSTAGRAM",
				tagline: "Boostez vos DMs",
				cta: "Activer Instagram",
				features: [
					"Jusqu'à 500 discussions",
					"Réponses automatiques 24/7",
					"Prise de réservation intégrée",
					"100% des messages traités",
					"0,10€ par discussion supplémentaire",
				],
			},
			whatsapp: {
				title: "ASSISTANT WHATSAPP",
				tagline: "Votre numéro en automatique",
				cta: "Activer WhatsApp",
				features: [
					"Jusqu'à 500 discussions",
					"Réponses automatiques 24/7",
					"Prise de réservation intégrée",
					"Zéro client ignoré",
					"0,10€ par discussion supplémentaire",
				],
			},
			duo: {
				badge: "Le plus populaire",
				title: "PACK DUO",
				tagline: "Le combo complet.",
				cta: "Activer le Pack Duo",
				features: [
					"Jusqu'à 500 discussions",
					"Réponses automatiques 24/7",
					"Prise de réservation intégrée",
					"Centralisation complète",
					"0,10€ par discussion supplémentaire",
				],
			},
		},
	},

	en: {
		// ── Header ────────────────────────────────────────────────────────────────
		header: {
			navOriMessages: "Ori Messages",
			navOriPhone: "Ori Téléphone",
			myAccount: "My account",
			start: "Get started",
			toggleTheme: "Toggle theme",
			toggleMenu: "Toggle menu",
		},

		// ── Footer ────────────────────────────────────────────────────────────────
		footer: {
			brandTagline:
				"The AI phone system for restaurants. Ori handles your reservations, orders and customer questions, 24/7.",
			messagesBrandTagline:
				"The AI messaging assistant for restaurants. Ori replies to your WhatsApp and Instagram messages, 24/7.",
			navTitle: "Navigation",
			legalTitle: "Legal",
			socialTitle: "Social media",
			changeLang: "Change language",
			copyright: "© 2026 ORI. All rights reserved.",
			madeBy: "A product by",
			navLinks: [
				{ href: "/solutions/phone#use-case", label: "Use cases" },
				{ href: "/solutions/phone#interface", label: "Interface" },
				{ href: "/solutions/phone#comparison", label: "Comparison" },
				{ href: "/solutions/phone#sponsorship", label: "Referral" },
				{ href: "/solutions/phone#faq", label: "FAQ" },
				{ href: "/solutions/phone#pricing", label: "Pricing" },
				{ href: "/ressources", label: "Resources" },
			],
			messagesNavLinks: [
				{ href: "/solutions/messages#use-case", label: "Use cases" },
				{ href: "/solutions/messages#interface", label: "Interface" },
				{ href: "/solutions/messages#comparison", label: "Comparison" },
				{ href: "/solutions/messages#sponsorship", label: "Referral" },
				{ href: "/solutions/messages#faq", label: "FAQ" },
				{ href: "/solutions/messages#pricing", label: "Pricing" },
				{ href: "/ressources", label: "Resources" },
			],
			legalLinks: [
				{ href: "/legal/mentions", label: "Legal notice" },
				{ href: "/legal/cgv", label: "Terms of sale" },
				{ href: "/legal/confidentialite", label: "Privacy policy" },
			],
		},

		// ── Hero (phone) ──────────────────────────────────────────────────────────
		hero: {
			title1: "Ori,",
			title2: "the",
			titleHighlight: "automatic phone system",
			title3: "for your",
			titleUnderline: "restaurant",
			subtitle:
				"It answers instantly, responds to your customers' questions and records your reservations.",
			subtitleLine2: "24/7, without ever interrupting your team.",
			testPrompt: "Talk to Ori like a real customer",
			stats: [
				{ suffix: "%", label: "Calls handled" },
				{ suffix: "h", label: "Saved per week" },
				{ suffix: "min", label: "To configure" },
				{ suffix: "/7", label: "Availability" },
			],
		},

		// ── TestOriButton ─────────────────────────────────────────────────────────
		testOriButton: {
			start: "Try Ori now",
			stop: "Stop demo",
			mute: "Mute",
			unmute: "Unmute",
		},

		// ── Use Case ──────────────────────────────────────────────────────────────
		useCase: {
			label: "USE CASES",
			title: "The phone assistant that works for you.",
			subtitle: "Ori understands every request and takes action.",
			footer:
				"These examples illustrate how your calls are handled autonomously, without any intervention from your team.",
			cards: [
				{
					title: "Reservation management",
					tagGroups: [
						{
							at: 10,
							tags: ["8 PM slot full", "8:30 PM alternative accepted"],
						},
						{
							at: 23,
							tags: [
								"Customer identified by number",
								"Preference \u201cquiet table\u201d confirmed",
							],
						},
						{ at: 30, tags: ["Reservation recorded in CRM"] },
					],
				},
				{
					title: "Frequently asked questions",
					tagGroups: [
						{
							at: 7,
							tags: ["Menu information provided", "Opening hours shared"],
						},
						{
							at: 19,
							tags: [
								"Birthday request qualified (15 guests)",
								"Group packages sent by SMS",
							],
						},
						{ at: 28, tags: ["Events manager notified"] },
					],
				},
			],
		},

		// ── AudioCard ─────────────────────────────────────────────────────────────
		audioCard: {
			listenLabel: "Listen to the conversation",
			play: "Play",
			stop: "Stop",
		},

		// ── Comparison ────────────────────────────────────────────────────────────
		comparison: {
			label: "COMPARISON",
			title: "More than a phone system — an asset for your team.",
			subtitle:
				"Compare Ori's impact on your daily operations against traditional management.",
			withoutHeader: "Traditional system",
			withHeader: "With Ori",
			ctaLabel: "See with Ori",
			footer:
				"Maximize your revenue by never missing another call. Every answered call is an opportunity preserved.",
			rows: [
				{
					topic: "Availability",
					without: "Missed calls during rush hours or after midnight",
					with: "Instant answer 24/7",
				},
				{
					topic: "Workload",
					without: "Staff constantly interrupted during service",
					with: "Team 100% focused on in-house customers",
				},
				{
					topic: "Reservations",
					without: "Risk of entry errors and forgotten bookings",
					with: "Automatic, reliable logging in your software",
				},
				{
					topic: "Operating cost",
					without: "An expensive and hard-to-fill position",
					with: "A profitable investment from day one",
				},
				{
					topic: "Peace of mind",
					without: "Stress from a phone ringing unanswered",
					with: "Every call handled — mind at ease",
				},
			],
		},

		// ── Interface ─────────────────────────────────────────────────────────────
		interface: {
			label: "INTERFACE",
			title: "Your assistant, your rules.",
			subtitle:
				"An interface built for real-world use: define your rules and track your results in real time.",
			footer:
				"Simplified management so you can focus on what matters: welcoming your customers and delivering great service.",
			back: "Back",
			tabs: [
				{
					label: "Instant setup",
					description:
						"Enter your restaurant's information, opening hours and rules. Ori is ready to answer calls — no complex installation required.",
				},
				{
					label: "Custom personalisation",
					description:
						"Set the welcome message, tone, and transfer rules. Ori adapts precisely to your establishment's identity.",
				},
				{
					label: "Full autonomy",
					description:
						"Ori handles reservations, orders, and frequently asked questions. Your team is never interrupted during service.",
				},
				{
					label: "Tracking & statistics",
					description:
						"Access the full history of your calls and measure Ori's impact on your occupancy rate.",
				},
			],
		},

		// ── Pricing ───────────────────────────────────────────────────────────────
		pricing: {
			label: "PRICING",
			title: "Never chase the phone again.",
			subtitle: "Ori takes over. You keep peace of mind.",
			footer: "One lost customer costs more than a month of Ori.",
			standard: {
				name: "STANDARD",
				tagline: "1 establishment",
				perMonth: "/ month",
				perYear: "/ year",
				annual: "Annual",
				discount: "-10%",
				cta: "Start free trial",
				annualLabel: "Annual billing",
				extraMinutes: "Additional minutes: €0.20 / minute",
				trialNote: "7-day free trial — no commitment",
				billingNote: "Billing only after the trial",
				features: [
					"Up to 400 minutes of inbound calls",
					"Reservations, cancellations and FAQ handled",
					"Transfer to your team if needed",
					"Real-time statistics",
					"Full management interface",
				],
			},
			advanced: {
				name: "ADVANCED",
				tagline: "Multi-site and custom options",
				price: "Custom",
				priceNote: "Tailored configuration",
				cta: "Schedule a call",
				note: "Custom solution and pricing tailored to your organisation.",
				features: [
					"Multi-establishment",
					"Add-on modules",
					"Custom rules",
					"Technical integrations",
					"Centralised tracking",
				],
			},
		},

		// ── FAQ ───────────────────────────────────────────────────────────────────
		faq: {
			label: "FAQ",
			title: "Your questions about Ori",
			subtitle:
				"Everything you need to know about the assistant built for restaurants.",
			seeAll: "See all questions",
			items: [
				{
					question: "Do I need to change my number or equipment?",
					answer:
						"No. Ori connects to your existing number via a simple call forwarding setup. No hardware to buy, no technical installation — everything works with your current line.",
				},
				{
					question: "Can Ori really take reservations automatically?",
					answer:
						"Yes. Ori has access to your schedule in real time and can confirm, modify, or cancel a reservation directly in your software. The customer receives an SMS confirmation.",
				},
				{
					question: "What happens in case of an urgent request?",
					answer:
						"Ori detects urgent situations and can transfer the call to your team based on rules you define: time slots, keywords, or at any time upon the customer's request.",
				},
				{
					question: "Is it worth it for a small restaurant?",
					answer:
						"Absolutely. Just one lost customer due to a missed call can cost more than a month of Ori. And the hours your team saves on call management represent an immediate gain.",
				},
				{
					question: "How does the 7-day trial work?",
					answer:
						"You activate Ori in 5 minutes, no credit card required. For 7 days, Ori handles your real calls. At the end of the trial, you decide whether to continue — with no commitment.",
				},
			],
		},

		// ── Sponsorship ───────────────────────────────────────────────────────────
		sponsorship: {
			label: "REFERRAL",
			title: "Share Ori, win together.",
			subtitle:
				"Recommend Ori to your peers and enjoy exclusive benefits on your subscription.",
			seeCta: "See the terms",
			cards: [
				{
					tag: "FOR THE REFERRING RESTAURANT",
					highlight: "200 minutes",
					rest: " offered",
				},
				{
					tag: "FOR THE REFERRED RESTAURANT",
					highlight: "1 month",
					rest: " free",
				},
			],
		},

		// ── Sponsorship Modal ─────────────────────────────────────────────────────
		sponsorshipModal: {
			title: "How does the referral programme work?",
			description:
				"The referred restaurant creates their account and activates Ori.\nYou both get rewarded.",
			formTitle: "Enter the email addresses",
			recommendedEmailLabel: "Referred restaurant's email",
			yourEmailLabel: "Your email",
			offerNote: "Offer valid for any new activated account.",
			submit: "Send request",
			close: "Close",
		},

		// ── Trial CTA ─────────────────────────────────────────────────────────────
		trialCta: {
			title1: "TRY ORI",
			titleHighlight: "7 DAYS",
			title2: "FREE",
			subtitle: "No commitment. Set up in 5 minutes.",
			cta: "Start trial",
		},

		// ── Dashboard Phone panels ────────────────────────────────────────────────
		dashboardPhone: {
			tabs: ["Information", "Configuration", "Summary"],
			welcome: "Welcome to your space",
			subtitle: "I am Ori, your voice assistant",
			fields: {
				name: "Establishment name",
				website: "Website",
				address: "Address",
				email: "Email",
				phone: "Phone",
			},
			voiceAgent: "Agent voice",
			voiceGender: "Gender:",
			voiceMale: "Male",
			voiceFemale: "Female",
			greeting: "Phrase spoken at the start of the call",
			transfer: "Transfer the call to your team",
			transferSubtitle:
				"Choose the situations where the agent should forward the call",
			transferChips: ["Reservation cancellation", "Urgent request"],
			aiAgents: "AI Agents",
			callsReceived: "Calls received",
			availability: "Availability",
			activity: "Activity",
			statusAllDay: "All day",
			statusUnavailable: "Unavailable",
			trackingTitle: "History — Ori",
			totalCalls: "Total calls made",
			avgDuration: "Average call duration",
			tableHeaders: ["Date & Time", "From", "Duration", "Action"],
		},

		// ── Dashboard Messages panels ─────────────────────────────────────────────
		dashboardMessages: {
			tabs: ["Information", "Configuration", "Summary"],
			welcome: "Welcome to your space",
			subtitle: "I am Ori, your voice assistant",
			fields: {
				name: "Establishment name",
				website: "Website",
				address: "Address",
				email: "Email",
				phone: "Phone",
			},
			toneChoice: "Tone choice",
			toneGender: "Style:",
			toneProfessional: "Professional",
			toneCasual: "Casual",
			activitySlots: "Agent activity hours",
			activitySlotsSubtitle:
				"Set the hours during which your AI agent should be active",
			days: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday",
			],
			closed: "Closed",
			aiAgents: "AI Agents",
			messagesReceived: "Messages received",
			availability: "Availability",
			activity: "Activity",
			statusAllDay: "All day",
			statusUnavailable: "Unavailable",
			trackingTitle: "History - Ori",
			totalCalls: "Total calls made",
			avgDuration: "Average call duration",
			tableHeaders: ["Date & Time", "From", "Duration", "Action"],
		},

		// ── Ori Messages — Hero ───────────────────────────────────────────────────
		messagesHero: {
			titlePrefix: "Ori,",
			titleAssistant: "the automatic ",
			titleWhatsApp: "WhatsApp",
			titleAnd: " and ",
			titleInstagram: "Instagram",
			titleFor: " assistant for your ",
			titleUnderline: "restaurant",
			subtitle:
				"Ori instantly replies to your customers' messages, takes your reservations and confirms every request. 24/7.",
			stats: [
				{ suffix: "%", label: "Messages handled" },
				{ suffix: "s", label: "Average response time" },
				{ suffix: "/7", label: "Availability" },
				{ suffix: "", label: "Channels managed simultaneously" },
			],
		},

		// ── Ori Messages — Use Case ───────────────────────────────────────────────
		messagesUseCase: {
			label: "USE CASES",
			title: "Never leave a message unanswered.",
			subtitle:
				"Don't miss another opportunity: Ori takes over your messaging to reply to every request, instantly.",
			cards: [
				{
					platform: "Instagram",
					caption:
						"Ori handles your direct messages instantly to turn your contacts' interest into concrete actions, with no delay.",
				},
				{
					platform: "WhatsApp",
					caption:
						"Menu questions, reservations or practical info: Ori answers all your customers' requests with precision, 24/7.",
				},
			],
		},

		// ── Ori Messages — Interface ──────────────────────────────────────────────
		messagesInterface: {
			label: "INTERFACE",
			title: "Your messaging on autopilot.",
			subtitle:
				"Set up Ori in minutes and let it handle every message with precision, according to your rules.",
			footer:
				"Simplified management so you can focus on what matters: welcoming your customers and delivering quality service.",
			back: "Back",
			tabs: [
				{
					id: "setup",
					label: "One-click connection",
					description:
						"Link your WhatsApp and Instagram accounts instantly. Ori is ready to reply to your customers in under 5 minutes.",
				},
				{
					id: "customize",
					label: "Business customization",
					description:
						"Set the response tone, your activity hours and the rules specific to your establishment. Ori adapts to your image.",
				},
				{
					id: "automation",
					label: "100% autonomous management",
					description:
						"Ori handles reservations, frequently asked questions and every request in real time. Your team stays focused on what matters.",
				},
				{
					id: "tracking",
					label: "Full history",
					description:
						"Access the history of all exchanges and measure Ori's impact on your conversion rate and reservations.",
				},
			],
		},

		// ── Ori Messages — Comparison ─────────────────────────────────────────────
		messagesComparison: {
			label: "COMPARISON",
			title: "Why choose Ori for your messaging?",
			subtitle:
				"Compare manual management with the power of intelligent automation and measure the impact on your daily workflow.",
			headerManual: "Manual management",
			headerOri: "With Ori",
			ctaLabel: "See with Ori",
			footer:
				"Don't let another opportunity slip away. Every message received is a chance to turn a prospect into a loyal customer.",
			rows: [
				{
					topic: "Response time",
					without: "Several hours of waiting depending on your availability",
					with: "Immediate reply in under 2 seconds",
				},
				{
					topic: "Conversion rate",
					without: "Lost customers due to lack of immediate responsiveness",
					with: "Maximum engagement through instant processing",
				},
				{
					topic: "Information accuracy",
					without: "Risk of errors or incomplete information",
					with: "Reliable answers based on your actual data",
				},
				{
					topic: "Flow management",
					without: "Constant interruption of your priority tasks",
					with: "Full autonomy for total peace of mind",
				},
				{
					topic: "Accessibility",
					without: "Depends on human presence on each application",
					with: "Total availability, 24/7 across all your channels",
				},
			],
		},

		// ── Ori Messages — FAQ ────────────────────────────────────────────────────
		messagesFaq: {
			label: "FAQ",
			title: "Everything about Ori Message",
			subtitle:
				"Answers to your questions so you can automate your channels with confidence.",
			seeAll: "See all questions",
			items: [
				{
					question: "Do I need to change my WhatsApp or Instagram accounts?",
					answer:
						"No. Ori connects directly to your existing accounts (Business or Pro). You keep your access, your history and can continue using them normally.",
				},
				{
					question: "Can Ori really manage my reservations?",
					answer:
						"Yes. Ori can understand a table request, check your availability and confirm the reservation following your specific rules, just as a member of your team would.",
				},
				{
					question: "Can I take over a conversation at any time?",
					answer:
						"Absolutely. You keep full control. If you want to step into a conversation on WhatsApp or Instagram personally, you can do so instantly from your usual app.",
				},
				{
					question: "Can I use Ori only when I'm closed?",
					answer:
						"Yes. You can schedule Ori to activate only during your breaks, at night or on your closing days. You decide its activity hours based on your needs.",
				},
				{
					question: "How long does it take to activate the assistant?",
					answer:
						"Less than 5 minutes. The connection process is as simple as it gets: link your accounts, fill in your basic info, and Ori starts replying to your customers immediately.",
				},
			],
		},

		// ── Ori Messages — Sponsorship ────────────────────────────────────────────
		messagesSponsorship: {
			label: "REFERRAL",
			title: "Refer your peers.",
			subtitle:
				"Recommend Ori to your peers and enjoy exclusive benefits on your subscription.",
			seeConditions: "See conditions",
			cards: [
				{
					tag: "FOR THE REFERRING RESTAURANT",
					highlight: "200 conversations",
					rest: " offered",
				},
				{
					tag: "FOR THE REFERRED RESTAURANT",
					highlight: "1 month",
					rest: " free",
				},
			],
		},

		// ── Ori Messages — Trial CTA ──────────────────────────────────────────────
		messagesTrialCta: {
			titlePrefix: "TRY ORI ",
			titleHighlight: "7 DAYS",
			titleSuffix: " FREE",
			subtitle: "No commitment. Setup in 5 minutes.",
			cta: "Start free trial",
		},

		// ── Ori Messages — Pricing ────────────────────────────────────────────────
		messagesPricing: {
			label: "PRICING",
			title: "Choose the channel that fits your restaurant",
			subtitle:
				"Start with one channel or combine them for complete management.",
			footer: "One lost customer costs more than a month of Ori.",
			perMonth: "/ mo",
			perYear: "/ yr",
			annual: "Annual",
			discount: "-10%",
			trialNote: "7-day free trial — no commitment",
			billingNote: "Billing only after the trial",
			instagram: {
				title: "INSTAGRAM ASSISTANT",
				tagline: "Boost your DMs",
				cta: "Activate Instagram",
				features: [
					"Up to 500 conversations",
					"Automatic replies 24/7",
					"Integrated reservation booking",
					"100% of messages handled",
					"€0.10 per additional conversation",
				],
			},
			whatsapp: {
				title: "WHATSAPP ASSISTANT",
				tagline: "Your number on autopilot",
				cta: "Activate WhatsApp",
				features: [
					"Up to 500 conversations",
					"Automatic replies 24/7",
					"Integrated reservation booking",
					"Zero customers ignored",
					"€0.10 per additional conversation",
				],
			},
			duo: {
				badge: "Most popular",
				title: "DUO PACK",
				tagline: "The complete combo.",
				cta: "Activate Duo Pack",
				features: [
					"Up to 500 conversations",
					"Automatic replies 24/7",
					"Integrated reservation booking",
					"Complete centralization",
					"€0.10 per additional conversation",
				],
			},
		},
	},
} as const;

export type Translations = (typeof translations)[keyof typeof translations];
