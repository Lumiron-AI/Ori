export const translations = {
	fr: {
		// ── Header ────────────────────────────────────────────────────────────────
		header: {
			navOriMessages: "Ori Messages",
			navOriPhone: "Ori Téléphone",
			myAccount: "Connexion",
			start: "Démarrer",
			toggleTheme: "Basculer le thème",
			toggleMenu: "Toggle menu",
		},

		// ── Footer ────────────────────────────────────────────────────────────────
		footer: {
			brandTagline:
				"Ori, l’assistant IA qui prend en charge les appels de votre restaurant.",
			indexBrandTagline:
				"Ori, l'assistant IA qui répond à vos appels et messages pour la restauration.",
			messagesBrandTagline:
				"Ori, l’assistant IA qui gère les messages Instagram et WhatsApp de votre restaurant.",
			navTitle: "Navigation",
			legalTitle: "Légal",
			socialTitle: "Réseaux sociaux",
			changeLang: "Changer de langue",
			preferences: "Préférences",
			copyright: "© 2026 ORI. Tous droits réservés.",
			madeBy: "Un produit de",
			indexNavLinks: [
				{ href: "/#solutions", label: "Nos solutions" },
				{ href: "/#fonctionnement", label: "Fonctionnement" },
				{ href: "/ressources", label: "Ressources" },
			],
			navLinks: [
				{ href: "/phone#use-case", label: "Cas d'usage" },
				{ href: "/phone#interface", label: "Interface" },
				{ href: "/phone#comparison", label: "Comparatif" },
				{ href: "/phone#sponsorship", label: "Parrainage" },
				{ href: "/phone#faq", label: "FAQ" },
				{ href: "/phone#pricing", label: "Tarifs" },
				{ href: "/ressources", label: "Ressources" },
			],
			messagesNavLinks: [
				{ href: "/messages#use-case", label: "Cas d'usage" },
				{ href: "/messages#interface", label: "Interface" },
				{ href: "/messages#comparison", label: "Comparatif" },
				{ href: "/messages#sponsorship", label: "Parrainage" },
				{ href: "/messages#faq", label: "FAQ" },
				{ href: "/messages#pricing", label: "Tarifs" },
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
			connecting: "Connexion…",
			listening: "Parlez à Ori",
			timeLeftSuffix: "s restantes",
			timeUp: "Démo terminée",
			micDenied:
				"Accès micro refusé. Autorisez le micro dans votre navigateur pour tester.",
			connectionError: "Connexion impossible. Réessayez dans un instant.",
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
				"Maximisez votre chiffre d'affaires en ne laissant plus aucun appel sans réponse.\nChaque appel décroché est une opportunité préservée.",
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
					"Jusqu'à 350 minutes d'appels entrants",
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
			subtitlePart1: "Tout savoir sur l'assistant conçu",
			subtitlePart2: "pour les restaurants.",
			seeAll: "Voir toutes les questions",
			items: [
				{
					question: "Dois-je changer de numéro ou de matériel ?",
					answer:
						"Non. Ori se connecte à votre numéro existant via un simple renvoi d'appel. Aucun matériel à acheter, aucune installation technique, tout fonctionne avec votre ligne actuelle.",
				},
				{
					question:
						"Ori peut-il vraiment prendre des réservations automatiquement ?",
					answer:
						"Oui. Ori dispose de votre planning en temps réel et peut confirmer, modifier ou annuler une réservation directement dans votre logiciel. Le client reçoit une confirmation immédiate par SMS ou email.",
				},
				{
					question: "Que se passe t-il en cas de demande urgente ?",
					answer:
						"Ori détecte les situations urgentes et peut transférer l'appel à votre équipe selon des règles que vous définissez : plages horaires, mots-clés, ou à tout moment sur demande du client.",
				},
				{
					question: "Est-ce rentable pour un petit restaurant ?",
					answer:
						"Oui. Chaque appel manqué est une réservation potentiellement perdue. Ori les capte tous, sans mobiliser votre équipe.",
				},
				{
					question: "Comment fonctionne l'essai de 7 jours ?",
					answer:
						"L’essai dure 7 jours. Vous configurez votre agent, ajoutez votre carte bancaire sans être débité, puis Ori peut commencer à répondre à vos appels entrants. À la fin de l’essai, vous décidez simplement si vous souhaitez continuer.",
				},
			],
		},

		// ── Sponsorship ───────────────────────────────────────────────────────────
		sponsorship: {
			label: "PARRAINAGE",
			title: "Partagez Ori, gagnez ensemble.",
			subtitle:
				"Invitez un restaurant et profitez d’avantages exclusifs sur votre abonnement.",
			seeCta: "Se connecter pour parrainer",
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
			back: "Retour",
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
			sophiaThreadTitle: "Messages de Sophia",
			conversations: [
				{
					name: "Sophia",
					preview: "Bonjour, est-ce que vous proposez des plats végétariens...",
				},
				{
					name: "Clément",
					preview: "Vous autorisez les animaux ? ...",
				},
				{
					name: "Martin",
					preview:
						"Et pour anniversaire de quinze personnes, c'est possible ? ...",
				},
			],
			messages: [
				{
					sender: "Sophia",
					time: "18:03",
					text: "Bonjour, avez vous des créneaux pour 20h ?",
				},
				{
					sender: "Ori",
					time: "18:03",
					text: "20h est complet ce soir, mais nous avons des disponibilités après 20h30.",
				},
				{ sender: "Sophia", time: "18:03", text: "Ok pour 20h30 !" },
				{
					sender: "Ori",
					time: "18:03",
					text: "Avez vous d'autres questions ?",
				},
				{
					sender: "Sophia",
					time: "18:03",
					text: "C'est tout pour moi, bonne journée.",
				},
				{
					sender: "Ori",
					time: "18:03",
					text: "Avez vous d'autres questions ?",
				},
			],
		},

		// ── Ori Messages — Hero ───────────────────────────────────────────────────
		messagesHero: {
			titlePrefix: "Ori,",
			titleOri: "",
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
			title: "Votre messagerie, sous contrôle.",
			subtitle:
				"Configurez Ori en quelques minutes et gérez chaque message depuis une interface claire, selon vos règles.",
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
					question: "Dois-je changer mes comptes Instagram ou WhatsApp?",
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
						"Absolument. Vous gardez le contrôle total. Si vous souhaitez intervenir personnellement dans une conversation sur Instagram ou WhatsApp, vous pouvez le faire instantanément depuis votre application habituelle.",
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
				"Invitez un restaurant et profitez d’avantages exclusifs sur votre abonnement.",
			seeConditions: "Se connecter pour parrainer",
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

		// ── Home index ───────────────────────────────────────────────────────────
		homeHero: {
			stats: [
				{ value: "+30%", label: "De demandes traitées", color: "text-primary" },
				{
					value: "0",
					label: "Intervention humaine",
					color: "text-ori-message",
				},
				{ value: "20+", label: "Langues en temps réel", color: "text-primary" },
				{
					value: "Illimitée",
					label: "Conversations simultanées",
					color: "text-ori-message",
				},
			],
			title: "l\u2019assistant IA qui répond à vos appels et messages.",
			subtitle:
				"Maximisez vos revenus en automatisant vos échanges. Sur Instagram, WhatsApp ou par téléphone, Ori gère chaque demande et enregistre vos réservations en\ntemps réel, 24h/24 et 7j/7.",
			subtitleBold: "",
			ctaPhone: "Découvrir Ori téléphone",
			ctaMessages: "Découvrir Ori messages",
		},

		homeSolutions: {
			label: "NOS SOLUTIONS",
			title: "Deux assistants, un même objectif",
			subtitle:
				"Ne laissez plus aucun client sans réponse. Ori prend en charge vos échanges pour vous permettre de vous concentrer sur l\u2019essentiel.",
			solutions: [
				{
					label: "Ori Téléphone",
					title: "Assistant IA",
					description:
						"Ori décroche à votre place, répond aux questions de vos clients et prend vos réservations en temps réel, sans jamais interrompre votre équipe.",
					features: [
						"Appels 24/7",
						"Prise de réservation",
						"Transfert d'appel",
					],
					cta: "Découvrir",
				},
				{
					label: "Ori Message",
					title: "Assistant IA",
					description:
						"Ori gère vos conversations sur WhatsApp et Instagram. Il répond aux demandes et enregistre vos réservations en toute autonomie, sans aucune intervention de votre part.",
					features: [
						"Multiplateforme",
						"Réservation par écrit",
						"Planning synchronisé",
					],
					cta: "Découvrir",
				},
			],
		},

		homeHowItWorks: {
			label: "Fonctionnement",
			title: "Comment ça marche ?",
			subtitle:
				"Déployez Ori en quelques minutes. Aucune compétence technique n'est nécessaire.",
			steps: [
				{
					number: "01",
					title: "Configuration",
					description:
						"Renseignez les informations de votre restaurant en 5 minutes.",
				},
				{
					number: "02",
					title: "Activation",
					description:
						"Ori se connecte à vos canaux (téléphone, Instagram, WhatsApp).",
				},
				{
					number: "03",
					title: "Conversations",
					description: "Ori répond automatiquement à vos clients, 24h/24.",
				},
				{
					number: "04",
					title: "Suivi",
					description:
						"Suivez vos statistiques et conversations en temps réel.",
				},
			],
		},

		homeCta: {
			title: "Essayer Ori",
			titleHighlight: "7 jours",
			title2: "gratuits",
			subtitle: "Sans engagement. Configuration en 5 minutes.",
			subtitleFooter:
				"Un seul client perdu coûte plus cher qu\u2019un mois d\u2019Ori.",
			ctaPhone: "Essayer Ori Téléphone",
			ctaMessages: "Essayer Ori Message",
		},

		// ── Ressources ────────────────────────────────────────────────────────────
		ressources: {
			title: "Ressources",
			seeAll: "Tout voir",
			empty: "Aucun article dans cette catégorie pour le moment.",
			publishedOn: "Publié le",
			readingTime: "Temps de lecture",
			back: "Retour",
			readMore: "Consulter",
			relatedTitle: "À lire également",
		},

		// ── Phone FAQ page ────────────────────────────────────────────────────────
		phoneFaqPage: {
			back: "Retour",
			title: "Tout savoir sur Ori phone.",
			subtitle: "Tout savoir sur l'assistant conçu pour les restaurants.",
			seeAll: "Tout voir",
			groups: [
				{
					theme: "Démarrage & installation",
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
					items: [
						{
							question: "Est-ce qu'Ori répond vraiment comme un humain ?",
							answer:
								"Ori parle de façon naturelle, sans menus du type « tapez 1, tapez 2 ». Le client s'exprime normalement, et Ori répond en temps réel, sans latence gênante. L'expérience est fluide et bien plus naturelle qu'un répondeur classique. La voix peut rester légèrement synthétique, mais la conversation est claire, rapide et efficace.",
						},
						{
							question: "Que se passe-t-il si Ori ne peut pas répondre à une question ?",
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
					items: [
						{
							question: "Est-ce qu'Ori peut prendre des réservations automatiquement ?",
							answer:
								"Oui. Ori peut prendre une réservation par téléphone en demandant la date, l'heure, le nombre de personnes et le nom du client. Il enregistre les informations et confirme la demande selon le fonctionnement prévu. Le client est pris en charge immédiatement, sans faire attendre votre équipe au téléphone.",
						},
						{
							question: "Ori peut-il modifier ou annuler une réservation ?",
							answer:
								"Oui, si ce fonctionnement est activé dans votre configuration. Le client peut rappeler pour modifier ou annuler sa réservation, et Ori suit les règles que vous avez définies. Cela évite à votre équipe de gérer manuellement chaque changement simple.",
						},
						{
							question: "Ori peut-il prendre des commandes à emporter ou en livraison ?",
							answer:
								"Oui. Ori peut prendre une commande par téléphone, enregistrer les articles demandés et guider le client tout au long de l'échange. Selon votre configuration, il peut aussi suggérer des produits complémentaires et transmettre les informations utiles pour la suite. Le but est simple : traiter plus d'appels sans surcharger votre équipe.",
						},
					],
				},
				{
					theme: "Contrôle & suivi",
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
					items: [
						{
							question: "J'ai plusieurs restaurants. Est-ce qu'Ori peut tous les gérer ?",
							answer:
								"Oui. Ori peut être utilisé sur plusieurs établissements. Chaque restaurant peut avoir ses propres horaires, ses propres consignes et son propre fonctionnement. Vous gardez une gestion claire, même à plusieurs sites.",
						},
						{
							question: "Les données de mon restaurant et de mes clients sont-elles protégées ?",
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
			],
		},

		// ── Messages FAQ page ──────────────────────────────────────────────────────
		messagesFaqPage: {
			back: "Retour",
			title: "Tout savoir sur Ori Message",
			subtitle:
				"Les réponses à vos questions pour automatiser vos réseaux en toute confiance.",
			seeAll: "Tout voir",
			groups: [
				{
					theme: "Démarrage & connexion",
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
							question: "Puis-je choisir quand Ori répond et quand je réponds moi-même ?",
							answer:
								"Oui. Vous pouvez décider que Ori répond en continu, uniquement en dehors des horaires, ou sur certains types de messages. Vous gardez le contrôle total.",
						},
					],
				},
				{
					theme: "Réservations & conversion",
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
					items: [
						{
							question: "Puis-je utiliser Ori uniquement quand je suis fermé ?",
							answer:
								"Oui. Vous pouvez activer Ori uniquement pendant vos heures de fermeture ou en dehors des services. Cela permet de répondre aux clients sans mobiliser votre équipe.",
						},
						{
							question: "Est-ce qu'Ori peut gérer plusieurs comptes ou établissements ?",
							answer:
								"Oui. Vous pouvez connecter plusieurs comptes et gérer plusieurs établissements. Chaque compte peut avoir ses propres règles et son propre fonctionnement.",
						},
					],
				},
				{
					theme: "Sécurité & engagement",
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
			],
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
			trialNote: "Essai gratuit 7 jours. Sans engagement.",
			billingNote: "Facturation uniquement après l'essai.",
			instagram: {
				title: "ASSISTANT INSTAGRAM",
				tagline: "Instagram uniquement",
				cta: "Activer Instagram",
				features: [
					"Jusqu'à 500 discussions",
					"Réponses 24h/24",
					"Réservations intégrées",
					"Tous les messages traités",
					"0,05€ par conversation supplémentaire",
				],
			},
			whatsapp: {
				title: "ASSISTANT WHATSAPP",
				tagline: "WhatsApp uniquement",
				cta: "Activer WhatsApp",
				features: [
					"Jusqu'à 500 discussions",
					"Réponses 24h/24",
					"Réservations intégrées",
					"Aucun message sans réponse",
					"0,05€ par conversation supplémentaire",
				],
			},
			duo: {
				badge: "Le plus populaire",
				title: "DUO",
				tagline: "Instagram + WhatsApp",
				cta: "Activer le Duo",
				features: [
					"Jusqu'à 500 discussions",
					"Réponses 24h/24",
					"Réservations intégrées",
					"Centralisation complète",
					"0,05€ par conversation supplémentaire",
				],
			},
		},
	},

	en: {
		// ── Header ────────────────────────────────────────────────────────────────
		header: {
			navOriMessages: "Ori Messages",
			navOriPhone: "Ori Téléphone",
			myAccount: "Log in",
			start: "Get started",
			toggleTheme: "Toggle theme",
			toggleMenu: "Toggle menu",
		},

		// ── Footer ────────────────────────────────────────────────────────────────
		footer: {
			brandTagline:
				"Ori, the AI assistant that answers calls for your restaurant.",
			indexBrandTagline:
				"Ori, the AI assistant that answers your restaurant's calls and messages.",
			messagesBrandTagline:
				"Ori, the AI assistant that handles your Instagram and WhatsApp messages for your restaurant.",
			navTitle: "Navigation",
			legalTitle: "Legal",
			socialTitle: "Social media",
			changeLang: "Change language",
			preferences: "Preferences",
			copyright: "© 2026 ORI. All rights reserved.",
			madeBy: "A product by",
			indexNavLinks: [
				{ href: "/#solutions", label: "Our solutions" },
				{ href: "/#fonctionnement", label: "How it works" },
				{ href: "/ressources", label: "Resources" },
			],
			navLinks: [
				{ href: "/phone#use-case", label: "Use cases" },
				{ href: "/phone#interface", label: "Interface" },
				{ href: "/phone#comparison", label: "Comparison" },
				{ href: "/phone#sponsorship", label: "Referral" },
				{ href: "/phone#faq", label: "FAQ" },
				{ href: "/phone#pricing", label: "Pricing" },
				{ href: "/ressources", label: "Resources" },
			],
			messagesNavLinks: [
				{ href: "/messages#use-case", label: "Use cases" },
				{ href: "/messages#interface", label: "Interface" },
				{ href: "/messages#comparison", label: "Comparison" },
				{ href: "/messages#sponsorship", label: "Referral" },
				{ href: "/messages#faq", label: "FAQ" },
				{ href: "/messages#pricing", label: "Pricing" },
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
			connecting: "Connecting…",
			listening: "Speak to Ori",
			timeLeftSuffix: "s left",
			timeUp: "Demo ended",
			micDenied:
				"Microphone blocked. Allow microphone access in your browser to try Ori.",
			connectionError: "Connection failed. Please try again shortly.",
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
			label: "COMPARE",
			title: "More than a phone system, an asset for your team.",
			subtitle:
				"Compare Ori's impact on your daily operations against traditional management.",
			withoutHeader: "Traditional system",
			withHeader: "With Ori",
			ctaLabel: "See with Ori",
			footer:
				"Maximize your revenue by never missing a call. Every answered call is a captured opportunity.",
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
					with: "No missed calls. No stress.",
				},
			],
		},

		// ── Interface ─────────────────────────────────────────────────────────────
		interface: {
			label: "DASHBOARD",
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
						"Enter your restaurant's information, opening hours and rules. Ori is ready to answer calls, no complex installation required.",
				},
				{
					label: "Fully-custom solution",
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
			title: "Never miss a call again.",
			subtitle: "Ori takes over. You stay in control.",
			footer: "One lost customer costs more than a month of Ori.",
			standard: {
				name: "STANDARD",
				tagline: "1 location",
				perMonth: "/ month",
				perYear: "/ year",
				annual: "Annual",
				discount: "-10%",
				cta: "Start your free trial",
				annualLabel: "Annual billing",
				extraMinutes: "Additional minutes: €0.20 / minute",
				trialNote: "7-day free trial. No commitment.",
				billingNote: "You’re only charged after the trial.",
				features: [
					"Up to 350 minutes of inbound calls",
					"Reservations, cancellations and FAQ handled",
					"Seamless transfer to your team",
					"Real-time analytics",
					"Full management dashboard",
				],
			},
			advanced: {
				name: "ADVANCED",
				tagline: "Multi-location & custom setup",
				price: "Custom pricing",
				priceNote: "Built for your operations",
				cta: "Schedule a call",
				note: "Custom solution and pricing tailored to your organization.",
				features: [
					"Multi-location support",
					"Add-on modules",
					"Custom workflows",
					"Technical integrations",
					"Centralised dashboard",
				],
			},
		},

		// ── FAQ ───────────────────────────────────────────────────────────────────
		faq: {
			label: "FAQ",
			title: "Your questions about Ori",
			subtitlePart1: "Everything you need to know about the assistant",
			subtitlePart2: "built for restaurants.",
			seeAll: "See all questions",
			items: [
				{
					question: "Do I need to change my number or equipment?",
					answer:
						"No. Ori connects to your existing number via a simple call forwarding setup. No hardware to buy, no technical installation, everything works with your current line.",
				},
				{
					question: "Can Ori really take reservations automatically?",
					answer:
						"Yes. Ori has real-time access to your schedule and can confirm, modify, or cancel reservations directly in your system. Guests receive instant confirmation via SMS or email.",
				},
				{
					question: "What happens in case of an urgent request?",
					answer:
						"Ori detects urgent situations and can transfer the call to your team based on rules you define: time slots, keywords, or at any time upon the customer's request.",
				},
				{
					question: "Is it worth it for a small restaurant?",
					answer:
						"Yes. Every missed call is a lost reservation. Ori captures them all, without pulling your team away from service.",
				},
				{
					question: "How does the 7-day trial work?",
					answer:
						"The trial lasts 7 days. You set up your agent, add your card without being charged, and Ori can start handling your incoming calls. At the end of the trial, you simply decide whether to continue.",
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
			back: "Back",
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
			sophiaThreadTitle: "Sophia's messages",
			conversations: [
				{
					name: "Sophia",
					preview: "Hi, do you offer vegetarian dishes...",
				},
				{
					name: "Clément",
					preview: "Do you allow pets? ...",
				},
				{
					name: "Martin",
					preview: "What about a birthday party for fifteen people? ...",
				},
			],
			messages: [
				{
					sender: "Sophia",
					time: "6:03 PM",
					text: "Hi, do you have any slots available at 8 PM?",
				},
				{
					sender: "Ori",
					time: "6:03 PM",
					text: "8 PM is fully booked tonight, but we have availability from 8:30 PM.",
				},
				{ sender: "Sophia", time: "6:03 PM", text: "8:30 PM works for me!" },
				{
					sender: "Ori",
					time: "6:03 PM",
					text: "Is there anything else I can help you with?",
				},
				{
					sender: "Sophia",
					time: "6:03 PM",
					text: "That's all, have a great day.",
				},
				{
					sender: "Ori",
					time: "6:03 PM",
					text: "Is there anything else I can help you with?",
				},
			],
		},

		// ── Ori Messages — Hero ───────────────────────────────────────────────────
		messagesHero: {
			titlePrefix: "Meet",
			titleOri: "Ori,",
			titleAssistant: "your",
			titleWhatsApp: "WhatsApp",
			titleAnd: "and",
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
						"Menu, reservations, and general questions. Ori responds to your customers 24/7, accurately.",
				},
			],
		},

		// ── Ori Messages — Interface ──────────────────────────────────────────────
		messagesInterface: {
			label: "DASHBOARD",
			title: "Your messaging, under control.",
			subtitle:
				"Set up Ori in minutes and manage every message from a clear dashboard, based on your rules.",
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
						"Set the response tone, your activity hours and the rules specific to your location. Ori adapts to your image.",
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
			label: "COMPARE",
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
			cta: "Start your free trial",
		},

		// ── Home index ───────────────────────────────────────────────────────────
		homeHero: {
			stats: [
				{ value: "+30%", label: "Requests handled", color: "text-primary" },
				{ value: "0", label: "Human intervention", color: "text-ori-message" },
				{
					value: "20+",
					label: "Languages in real time",
					color: "text-primary",
				},
				{
					value: "Unlimited",
					label: "Simultaneous conversations",
					color: "text-ori-message",
				},
			],
			title:
				"the AI agent that answers your restaurant\u2019s calls and messages.",
			subtitle:
				"Drive more revenue with automated conversations. Across Instagram, WhatsApp, and phone, Ori handles every request and logs your bookings in real-time, 24/7.",
			subtitleBold: "",
			ctaPhone: "Discover Ori Phone",
			ctaMessages: "Discover Ori Messages",
		},

		homeSolutions: {
			label: "OUR SOLUTIONS",
			title: "Two assistants, one goal",
			subtitle:
				"Ensure no customer is left behind. Ori manages your conversations while you concentrate on your core business.",
			solutions: [
				{
					label: "Ori Phone",
					title: "AI Assistant",
					description:
						"Ori answers for you, handles customer inquiries, and takes bookings in real-time\u2014without ever interrupting your team.",
					features: [
						"24/7 Availability",
						"Appointment Booking",
						"Smart Call Transfer",
					],
					cta: "Discover",
				},
				{
					label: "Ori Messages",
					title: "AI Assistant",
					description:
						"Ori manages your conversations on WhatsApp and Instagram. It handles inquiries and records bookings autonomously, with zero intervention required.",
					features: ["Multi-platform", "Chat-based Booking", "Calendar Sync"],
					cta: "Discover",
				},
			],
		},

		homeHowItWorks: {
			label: "How it works",
			title: "Up and running in minutes.",
			subtitle: "Set up Ori in minutes. No technical skills required.",
			steps: [
				{
					number: "01",
					title: "Setup",
					description: "Enter your restaurant\u2019s information in 5 minutes.",
				},
				{
					number: "02",
					title: "Activation",
					description:
						"Ori connects to your channels (phone, Instagram, WhatsApp).",
				},
				{
					number: "03",
					title: "Conversations",
					description: "Ori automatically responds to your customers, 24/7.",
				},
				{
					number: "04",
					title: "Tracking",
					description:
						"Monitor your statistics and conversations in real time.",
				},
			],
		},

		homeCta: {
			title: "Try Ori",
			titleHighlight: "7 days",
			title2: "free",
			subtitle: "No commitment. Setup in 5 minutes.",
			subtitleFooter: "One lost customer costs more than a month of Ori.",
			ctaPhone: "Try Ori Phone",
			ctaMessages: "Try Ori Messages",
		},

		// ── Ressources ────────────────────────────────────────────────────────────
		ressources: {
			title: "Resources",
			seeAll: "View all",
			empty: "No articles in this category yet.",
			publishedOn: "Published on",
			readingTime: "Reading time",
			back: "Back",
			readMore: "Read more",
			relatedTitle: "Read also",
		},

		// ── Phone FAQ page ────────────────────────────────────────────────────────
		phoneFaqPage: {
			back: "Back",
			title: "Everything about Ori Phone.",
			subtitle: "All you need to know about the assistant built for restaurants.",
			seeAll: "View all",
			groups: [
				{
					theme: "Getting started",
					items: [
						{
							question: "How does the 7-day free trial work?",
							answer:
								"You create your account, follow the setup steps and activate your agent. A payment card may be required at sign-up, but you won't be charged during the 7-day trial. Once your agent is configured, Ori can answer your incoming calls for 7 days under real conditions. You can use either your regular number or a number to which you forward your calls. At the end of the trial, you simply choose whether to continue or not.",
						},
						{
							question: "Is setting up Ori complicated?",
							answer:
								"Not at all. Activation is simple and guided step by step. You create your agent, enter relevant information about your restaurant, then choose how to route calls to Ori. Everything is designed so you can get started quickly, with no complex technical setup. In just a few minutes, your agent can be ready to answer.",
						},
						{
							question: "Do I need to change my number or equipment?",
							answer:
								"No. You can keep your current number and current equipment. Ori works with your existing line. And if you prefer, you can also forward your calls to another number connected to Ori. You choose the simplest option for you.",
						},
						{
							question: "How do calls reach Ori?",
							answer:
								"Two options: either Ori answers directly via your regular number, or you set up call forwarding to a number connected to Ori. In both cases, the goal is the same: no more missed calls.",
						},
					],
				},
				{
					theme: "How it works",
					items: [
						{
							question: "Does Ori really respond like a human?",
							answer:
								"Ori speaks naturally, with no menus like 'press 1, press 2'. The customer speaks normally, and Ori responds in real time with no noticeable delay. The experience is smooth and far more natural than a traditional answering machine. The voice may sound slightly synthetic, but the conversation is clear, quick and effective.",
						},
						{
							question: "What happens if Ori can't answer a question?",
							answer:
								"If a request falls outside the defined scope, Ori doesn't block the call. It can immediately transfer to your team if you've set that up. It can also take the customer's contact details and the reason for the call so you can follow up. You define the rules, Ori follows them.",
						},
						{
							question: "Does Ori work 24/7?",
							answer:
								"Yes. Ori can answer at any time, including during service, in the evening, on weekends or on public holidays. You can also choose to activate it only during certain time slots. You decide when it takes over.",
						},
						{
							question: "What happens in case of an urgent request?",
							answer:
								"Ori can detect certain priority situations and transfer the call to your team according to the rules you've defined. For example: a large reservation, a dissatisfied customer, a sensitive request or someone who needs to speak to a person immediately. The goal isn't to block important situations, but to escalate them at the right moment.",
						},
					],
				},
				{
					theme: "Reservations & orders",
					items: [
						{
							question: "Can Ori take reservations automatically?",
							answer:
								"Yes. Ori can take a reservation over the phone by asking for the date, time, number of guests and customer name. It records the information and confirms the request according to your configured workflow. The customer is taken care of immediately, without keeping your team on the phone.",
						},
						{
							question: "Can Ori modify or cancel a reservation?",
							answer:
								"Yes, if this feature is enabled in your configuration. The customer can call back to modify or cancel their reservation, and Ori follows the rules you've defined. This saves your team from manually handling every simple change.",
						},
						{
							question: "Can Ori take takeaway or delivery orders?",
							answer:
								"Yes. Ori can take an order over the phone, record the requested items and guide the customer throughout the exchange. Depending on your configuration, it can also suggest complementary products and pass on the relevant information for the next steps. The goal is simple: handle more calls without overloading your team.",
						},
					],
				},
				{
					theme: "Control & monitoring",
					items: [
						{
							question: "Can I decide when a call is transferred to my team?",
							answer:
								"Yes. You choose precisely in which cases Ori should hand over. For example: a complex request, a large order, a complaint, an emergency or a special request. You stay in control of the transfer rules.",
						},
						{
							question: "Can I see what Ori has handled?",
							answer:
								"Yes. You have a tracking space to view received calls, reservations taken, requests handled and actions completed. You know exactly what Ori has managed for you.",
						},
						{
							question: "Can I replay calls?",
							answer:
								"Yes. You can replay calls and consult the history of exchanges. This lets you verify what was said, monitor conversation quality and keep full visibility over the service provided.",
						},
						{
							question: "Can I change what Ori says to customers?",
							answer:
								"Yes. You can adjust useful information: opening hours, messages, instructions, common answers, transfer rules or general operation. Ori adapts to your restaurant. You stay in control of the customer experience.",
						},
					],
				},
				{
					theme: "Multi-site, security & subscription",
					items: [
						{
							question: "I have several restaurants. Can Ori manage all of them?",
							answer:
								"Yes. Ori can be used across multiple locations. Each restaurant can have its own hours, its own instructions and its own workflow. You keep a clear overview, even across multiple sites.",
						},
						{
							question: "Is my restaurant and customer data protected?",
							answer:
								"Yes. Data is secured and used solely to operate the service. The goal is to ensure reliable, confidential processing that meets data protection requirements.",
						},
						{
							question: "Can I cancel at any time?",
							answer:
								"Yes. At the end of the trial, you freely choose whether to continue. And if you're a subscriber, you can cancel under the terms provided, with no nasty surprises. The goal is for you to stay because the service is useful to you, not because you're locked in.",
						},
					],
				},
			],
		},

		// ── Messages FAQ page ──────────────────────────────────────────────────────
		messagesFaqPage: {
			back: "Back",
			title: "Everything about Ori Message",
			subtitle:
				"Answers to your questions so you can automate your channels with confidence.",
			seeAll: "View all",
			groups: [
				{
					theme: "Getting started",
					items: [
						{
							question: "Do I need to change my Instagram or WhatsApp accounts?",
							answer:
								"No. Ori connects directly to your existing accounts (WhatsApp Business or Instagram). You keep your access, your history and your usual workflow. Nothing is recreated, nothing is lost.",
						},
						{
							question: "How long does it take to activate Ori Messages?",
							answer:
								"Less than 5 minutes. You connect your accounts, enter the basic information, and Ori is ready. It can start replying to your messages immediately.",
						},
						{
							question: "Is the setup technical?",
							answer:
								"No. Everything is guided step by step. No technical skills required. Follow the steps and your assistant will be up and running quickly.",
						},
					],
				},
				{
					theme: "How messaging works",
					items: [
						{
							question: "Does Ori reply to messages automatically?",
							answer:
								"Yes. Ori automatically replies to messages received on WhatsApp and Instagram. It understands requests and responds clearly and immediately. No message goes unanswered.",
						},
						{
							question: "Does Ori respond like a human?",
							answer:
								"Ori understands natural language and responds in a fluid way. The tone is conversational, simple and direct. The goal is for the exchange to be fast, natural and useful for the customer.",
						},
						{
							question: "What happens if Ori doesn't understand a message?",
							answer:
								"Ori doesn't block the conversation. It can rephrase, ask a clarifying question or transfer to your team if needed. You define the limits and the rules for handing over to a human.",
						},
						{
							question: "Can I take over a conversation?",
							answer:
								"Yes, at any time. You can step in directly from Instagram or WhatsApp. Ori steps back as soon as you take over the conversation.",
						},
						{
							question: "Can I choose when Ori replies and when I reply myself?",
							answer:
								"Yes. You can set Ori to reply continuously, only outside opening hours, or only for certain types of messages. You keep full control.",
						},
					],
				},
				{
					theme: "Reservations & conversion",
					items: [
						{
							question: "Can Ori handle reservations via message?",
							answer:
								"Yes. Ori can understand a reservation request, ask the right questions and record the information. The customer is taken care of immediately, with no wait.",
						},
						{
							question: "Can Ori generate more sales via messages?",
							answer:
								"Yes. Ori can respond quickly, follow up, suggest options and guide the customer. The result: more conversions and fewer missed opportunities.",
						},
						{
							question: "Can it send links (payment, menu, reservation)?",
							answer:
								"Yes. Ori can share useful links: menu, reservation, payment or anything else. It guides the customer all the way to the final action.",
						},
					],
				},
				{
					theme: "Control & monitoring",
					items: [
						{
							question: "Can I view conversations?",
							answer:
								"Yes. You have access to the full history of exchanges. You can read, follow and understand what was said to each customer.",
						},
						{
							question: "Can I edit Ori's replies?",
							answer:
								"Yes. You can adjust messages, information, common answers and the tone used. Ori adapts to your restaurant.",
						},
						{
							question: "Can I track performance?",
							answer:
								"Yes. You can monitor the number of messages received, handled and the actions taken. You see the concrete impact on your business.",
						},
					],
				},
				{
					theme: "Advanced use",
					items: [
						{
							question: "Can I use Ori only when I'm closed?",
							answer:
								"Yes. You can activate Ori only during your closed hours or outside service times. This allows you to respond to customers without mobilising your team.",
						},
						{
							question: "Can Ori manage multiple accounts or locations?",
							answer:
								"Yes. You can connect multiple accounts and manage multiple locations. Each account can have its own rules and its own workflow.",
						},
					],
				},
				{
					theme: "Security & commitment",
					items: [
						{
							question: "Is my data secure?",
							answer:
								"Yes. Data is protected and used solely to operate the service. You retain control of your accounts and your exchanges.",
						},
						{
							question: "Can I cancel at any time?",
							answer:
								"Yes. You are free to cancel at any time under the terms provided. The goal is simple: for you to stay because it brings you value.",
						},
					],
				},
			],
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
			trialNote: "7-day free trial. No commitment.",
			billingNote: "You’re only charged after the trial.",
			instagram: {
				title: "INSTAGRAM ASSISTANT",
				tagline: "Instagram only",
				cta: "Start with Instagram",
				features: [
					"Up to 500 conversations",
					"Replies 24/7",
					"Reservation booking included",
					"Every message handled",
					"€0.05 per additional conversation",
				],
			},
			whatsapp: {
				title: "WHATSAPP ASSISTANT",
				tagline: "WhatsApp only",
				cta: "Start with WhatsApp",
				features: [
					"Up to 500 conversations",
					"Replies 24/7",
					"Reservation booking included",
					"No message left unanswered",
					"€0.05 per additional conversation",
				],
			},
			duo: {
				badge: "Most popular",
				title: "DUO",
				tagline: "Instagram + WhatsApp",
				cta: "Start Duo",
				features: [
					"Up to 500 conversations",
					"Replies 24/7",
					"Reservation booking included",
					"Centralised dashboard",
					"€0.05 per additional conversation",
				],
			},
		},
	},
} as const;

export type Translations = (typeof translations)[keyof typeof translations];
