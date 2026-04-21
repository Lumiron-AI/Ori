export type ContentBlock =
	| { type: "p"; text: string }
	| { type: "bold"; text: string }
	| { type: "ul"; items: string[] }
	| { type: "ol"; items: string[] }
	| { type: "source"; text: string };

export interface ArticleSection {
	heading: string;
	blocks: ContentBlock[];
}

export interface Article {
	slug: string;
	title: string;
	category: string;
	date: string;
	dateIso: string;
	readingTime: string;
	/** Image shown on the listing card (BigArticleCard) */
	image: string;
	intro: string;
	sections: ArticleSection[];
	conclusion: {
		heading: string;
		blocks: ContentBlock[];
	};
}

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES — FR
// Images: Figma asset URLs (expire in 7 days — replace with local /public/ paths)
// ─────────────────────────────────────────────────────────────────────────────

const ARTICLES_FR: Article[] = [
	{
		slug: "pourquoi-le-telephone",
		title:
			"Pourquoi le téléphone est devenu un vrai problème dans les restaurants (et comment l'IA vocale change la donne)",
		category: "Tech",
		date: "15 avril 2026",
		dateIso: "2026-04-15",
		readingTime: "8 minutes",
		image:
			"https://www.figma.com/api/mcp/asset/efd96450-66b4-4dc3-8c16-9bf20c3a090a",
		intro:
			"Dans la restauration, le téléphone n'est plus un simple outil de communication. Il est devenu une source d'interruptions, de stress opérationnel et de pertes invisibles. Pendant le service, chaque appel coupe la salle, la cuisine ou le manager.\n\nEt pourtant, une part importante des réservations se concentre précisément sur ces créneaux critiques.\n\nSelon Zenchef, la demande de réservation téléphonique se concentre majoritairement autour des heures de service, notamment 12h–14h et 19h–21h.\n\nAutrement dit : le client appelle exactement quand l'équipe ne peut pas décrocher sans perturber le service.\n\nLe problème n'est pas technologique. Il est organisationnel.",
		sections: [
			{
				heading:
					"1. La surcharge téléphonique en restauration : un phénomène mesurable",
				blocks: [
					{
						type: "p",
						text: "Dans la majorité des établissements, les appels entrants concernent :",
					},
					{
						type: "ul",
						items: [
							"Réservations de dernière minute",
							"Questions fréquentes (horaires, menu, terrasse, parking)",
							"Commandes à emporter",
							"Livraisons",
							"Privatisations ou groupes",
						],
					},
					{
						type: "p",
						text: "Ces demandes sont légitimes côté client. Mais elles arrivent au moment le moins favorable côté équipe. D'après Food Hotel Tech 2025, 3 restaurateurs sur 4 considèrent désormais l'IA comme incontournable pour optimiser les tâches répétitives et réduire la pression opérationnelle.",
					},
					{
						type: "source",
						text: "https://resto.zepros.fr/actus-metiers/ia-est-devenue-incontournable-3-restaurateurs-hoteliers-4",
					},
					{
						type: "p",
						text: "Ce n'est plus une question d'innovation. C'est une question d'efficacité.",
					},
				],
			},
			{
				heading: "2. Le vrai coût des appels mal gérés",
				blocks: [
					{
						type: "p",
						text: "Un appel mal géré génère trois types d'impact :",
					},
					{ type: "bold", text: "Interruption opérationnelle" },
					{
						type: "p",
						text: "Décrocher en plein rush fragmente l'attention. La salle ralentit. La cuisine attend. Le manager arbitre.",
					},
					{ type: "bold", text: "Erreurs humaines" },
					{ type: "p", text: "Sous pression :" },
					{
						type: "ul",
						items: [
							"réservation mal notée",
							"nom mal orthographié",
							"erreur d'horaire",
							"commande incomplète",
						],
					},
					{ type: "bold", text: "Opportunités perdues" },
					{
						type: "p",
						text: "Si l'appel n'est pas pris immédiatement, le client :",
					},
					{
						type: "ul",
						items: [
							"ne rappelle pas",
							"réserve ailleurs",
							"passe à autre chose",
						],
					},
					{
						type: "p",
						text: "Overfull indique qu'une part significative des réservations par téléphone est perdue faute de réponse immédiate.",
					},
					{
						type: "source",
						text: "https://blog.overfull.fr/linconvenient-des-reservations-par-telephone-pour-votre-restaurant/",
					},
					{
						type: "p",
						text: "Un appel manqué n'apparaît dans aucun tableau de bord. Mais il existe.",
					},
				],
			},
			{
				heading:
					"3. Les appels hors horaires : la partie invisible du problème",
				blocks: [
					{
						type: "p",
						text: "Contrairement à une idée reçue, les appels ne se concentrent pas uniquement pendant les heures d'ouverture calmes.",
					},
					{ type: "p", text: "Selon Tala Assistant :" },
					{
						type: "ul",
						items: [
							"82 % des réservations téléphoniques arrivent en dehors des heures « calmes »",
							"32 % des appels ont lieu entre minuit et 8h du matin",
						],
					},
					{
						type: "source",
						text: "https://www.tala-assistant.com/blog/reservation-restaurant-automatique-par-telephone-ia",
					},
					{
						type: "p",
						text: "Le client appelle quand il pense à réserver. Pas quand le restaurant est prêt à répondre.",
					},
				],
			},
			{
				heading: "4. L'acceptation de l'IA vocale par les clients",
				blocks: [
					{
						type: "p",
						text: "L'un des freins historiques était culturel : « Les clients ne voudront pas parler à une IA. »",
					},
					{ type: "p", text: "Les chiffres montrent l'inverse." },
					{
						type: "p",
						text: "Médiamétrie indique qu'en septembre 2025, 38,1 % des Français ont déjà utilisé un agent conversationnel (vocal ou textuel).",
					},
					{
						type: "source",
						text: "https://www.mediametrie.fr/fr/les-jeunes-aux-avant-postes-de-la-revolution-de-lia-conversationnelle",
					},
					{
						type: "p",
						text: "L'interaction avec une IA devient normale dès lors que :",
					},
					{
						type: "ul",
						items: [
							"la réponse est immédiate",
							"la conversation est fluide",
							"la confirmation est claire",
						],
					},
					{
						type: "p",
						text: "Dans un contexte restaurant, c'est exactement ce que le client recherche.",
					},
				],
			},
			{
				heading: "5. Ce qu'un agent vocal IA change concrètement",
				blocks: [
					{
						type: "p",
						text: "Un agent vocal spécialisé en restauration peut :",
					},
					{
						type: "ul",
						items: [
							"décrocher automatiquement chaque appel",
							"comprendre l'intention (réservation, commande, question)",
							"structurer l'information",
							"envoyer une confirmation par SMS",
							"transférer vers un humain si nécessaire",
						],
					},
					{
						type: "p",
						text: "Il agit comme un tampon opérationnel intelligent. Le bénéfice n'est pas « tech ». Le bénéfice est organisationnel.",
					},
				],
			},
			{
				heading: "6. Le point clé : garder le contrôle",
				blocks: [
					{
						type: "p",
						text: "Une IA utile ne remplace pas le restaurateur.",
					},
					{ type: "p", text: "Elle applique des règles définies :" },
					{
						type: "ul",
						items: [
							"horaires d'ouverture",
							"capacité maximale",
							"politique d'annulation",
							"gestion des groupes",
							"conditions de privatisation",
						],
					},
					{ type: "p", text: "Le restaurant garde la main. L'IA exécute." },
				],
			},
			{
				heading: "7. Exemple d'application concrète : Ori",
				blocks: [
					{ type: "p", text: "Un agent vocal comme Ori permet :" },
					{
						type: "ul",
						items: [
							"de gérer les appels entrants (réservations, commandes, FAQ)",
							"de configurer les règles propres au restaurant",
							"d'envoyer des confirmations automatiques",
							"de consulter chaque appel avec transcription",
							"de suivre l'activité téléphonique en temps réel",
						],
					},
					{
						type: "p",
						text: "L'objectif n'est pas d'ajouter un outil. L'objectif est de supprimer une friction.",
					},
				],
			},
			{
				heading: "8. Indicateurs simples pour évaluer votre situation",
				blocks: [
					{ type: "p", text: "Posez-vous 5 questions :" },
					{
						type: "ol",
						items: [
							"Le téléphone sonne-t-il pendant le rush ?",
							"Rappelez-vous réellement les appels manqués ?",
							"Avez-vous déjà eu des réservations mal notées ?",
							"Répondez-vous aux mêmes questions chaque jour ?",
							"Savez-vous combien d'appels vous recevez réellement ?",
						],
					},
					{
						type: "p",
						text: "Si la réponse est oui à plusieurs points, le téléphone vous coûte déjà du temps et de la sérénité.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "Le téléphone n'est pas le problème. Son impact sur l'organisation en est un.",
				},
				{ type: "p", text: "Les données montrent que :" },
				{
					type: "ul",
					items: [
						"les appels se concentrent pendant les services",
						"une partie des demandes est perdue",
						"l'acceptation de l'IA progresse rapidement",
					],
				},
				{
					type: "p",
					text: "Dans ce contexte, l'IA vocale devient progressivement un standard opérationnel. Non pas pour remplacer l'humain. Mais pour préserver le service.",
				},
			],
		},
	},
	{
		slug: "reservations-par-telephone",
		title:
			"Réservations par téléphone : pourquoi les appels manqués coûtent cher",
		category: "Tech",
		date: "19 février 2026",
		dateIso: "2026-02-19",
		readingTime: "5 minutes",
		image:
			"https://www.figma.com/api/mcp/asset/bc35c627-ed8d-46e2-b651-2f461418dfe6",
		intro:
			"Chaque appel non décroché est une opportunité perdue. Dans un restaurant, ce phénomène est particulièrement visible : le client qui n'obtient pas de réponse réserve ailleurs, en quelques secondes. Comprendre ce mécanisme est la première étape pour y remédier.",
		sections: [
			{
				heading: "1. La réservation téléphonique reste un canal majeur",
				blocks: [
					{
						type: "p",
						text: "Malgré la montée des plateformes en ligne, le téléphone reste le premier canal de réservation pour une part significative des restaurants, notamment ceux qui ne disposent pas de système de réservation en ligne intégré.",
					},
					{
						type: "p",
						text: "Pour ces établissements, chaque appel manqué représente directement une table vide.",
					},
				],
			},
			{
				heading: "2. Quand les appels sont-ils manqués ?",
				blocks: [
					{
						type: "p",
						text: "Les appels sont massivement concentrés sur des créneaux critiques :",
					},
					{
						type: "ul",
						items: [
							"Pendant le service du midi (12h–14h)",
							"Pendant le service du soir (19h–21h)",
							"Les week-ends et jours fériés",
						],
					},
					{
						type: "p",
						text: "Ces moments correspondent exactement aux pics d'activité en salle. L'équipe est occupée, le téléphone sonne dans le vide.",
					},
				],
			},
			{
				heading: "3. Le coût réel d'un appel manqué",
				blocks: [
					{
						type: "p",
						text: "Un appel manqué ne génère pas seulement une réservation perdue. Il produit également :",
					},
					{
						type: "ul",
						items: [
							"Une image négative auprès du client",
							"Un appel de rappel rarement effectué",
							"Une réservation prise chez un concurrent",
						],
					},
					{
						type: "p",
						text: "En cumulant sur une semaine, les pertes deviennent substantielles — sans jamais apparaître dans les tableaux de bord.",
					},
				],
			},
			{
				heading: "4. Comment l'automatisation réduit les pertes",
				blocks: [
					{
						type: "p",
						text: "Un agent vocal IA comme Ori décroche chaque appel, même en plein service. Il prend la réservation, répond aux questions courantes et envoie une confirmation.",
					},
					{
						type: "p",
						text: "Résultat : zéro appel manqué, zéro réservation perdue pour absence de réponse.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "Les appels manqués ne sont pas une fatalité. Ils sont le symptôme d'une organisation qui n'a pas encore adapté ses outils au rythme réel du service.",
				},
				{
					type: "p",
					text: "Automatiser la prise d'appel n'est pas une perte de contact humain. C'est garantir que chaque client obtient une réponse — immédiatement.",
				},
			],
		},
	},
	{
		slug: "les-appels-hors-horaires",
		title: "Les appels hors horaires : le manque à gagner invisible",
		category: "Tech",
		date: "15 avril 2026",
		dateIso: "2026-04-15",
		readingTime: "8 minutes",
		image:
			"https://www.figma.com/api/mcp/asset/1fddc083-09cd-4bce-b618-aa633b6f1c44",
		intro:
			"Un restaurant ne ferme jamais vraiment. Les clients, eux, n'ont pas d'horaires. Ils cherchent des informations, veulent réserver ou poser des questions — à 23h, le dimanche matin, ou pendant les jours de fermeture. Ces appels hors horaires constituent un manque à gagner structurel que peu d'établissements ont mesuré.",
		sections: [
			{
				heading: "1. La demande ne respecte pas les horaires d'ouverture",
				blocks: [
					{
						type: "p",
						text: "Selon plusieurs études du secteur, une part significative des appels entrants arrive en dehors des plages d'activité des équipes :",
					},
					{
						type: "ul",
						items: [
							"Avant l'ouverture (avant 10h)",
							"Après la fermeture (après 22h)",
							"Les jours de congé et fermetures hebdomadaires",
						],
					},
					{
						type: "p",
						text: "Le client appelle quand il pense à réserver. Pas quand le restaurant est ouvert.",
					},
				],
			},
			{
				heading: "2. Pourquoi ces appels sont perdus",
				blocks: [
					{
						type: "p",
						text: "En dehors des heures d'ouverture, plusieurs scénarios se répètent :",
					},
					{
						type: "ul",
						items: [
							"Le téléphone sonne dans le vide",
							"Un répondeur générique décourage le client",
							"Aucun système ne prend note de la demande",
						],
					},
					{
						type: "p",
						text: "Le lendemain matin, l'équipe ne sait pas combien d'opportunités ont été manquées.",
					},
				],
			},
			{
				heading: "3. Le manque à gagner : calcul simple",
				blocks: [
					{
						type: "p",
						text: "Si un restaurant rate en moyenne 3 appels par jour hors horaires, et que chaque réservation représente une valeur de 40 € par couvert pour une table de 2 :",
					},
					{
						type: "ul",
						items: [
							"3 appels × 80 € = 240 € perdus par jour",
							"Soit environ 7 200 € par mois",
							"Soit plus de 86 000 € par an",
						],
					},
					{
						type: "p",
						text: "Ce calcul est conservateur. Et ces pertes n'apparaissent dans aucune ligne comptable.",
					},
				],
			},
			{
				heading: "4. La solution : une disponibilité 24h/24",
				blocks: [
					{
						type: "p",
						text: "Un agent vocal IA ne dort pas. Il répond aux appels à minuit comme à 8h du matin, les jours fériés comme les lundis de fermeture.",
					},
					{
						type: "p",
						text: "Chaque appel hors horaires devient une opportunité captée plutôt qu'une opportunité perdue.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "Le manque à gagner des appels hors horaires est invisible mais réel. Il s'accumule silencieusement, semaine après semaine.",
				},
				{
					type: "p",
					text: "Rendre un restaurant disponible 24h/24 n'est plus réservé aux grandes chaînes. C'est désormais accessible à tout établissement qui choisit d'automatiser intelligemment.",
				},
			],
		},
	},
	{
		slug: "questions-frequentes",
		title: "Questions fréquentes : comment les absorber sans équipe dédiée",
		category: "Tech",
		date: "15 avril 2026",
		dateIso: "2026-04-15",
		readingTime: "8 minutes",
		image:
			"https://www.figma.com/api/mcp/asset/617d2ac5-ac77-4602-b958-bc4613fb817e",
		intro:
			"Dans un restaurant, les mêmes questions reviennent chaque jour. Horaires, carte, allergènes, accès, parking, terrasse, groupes... Ces demandes sont légitimes mais chronophages. Répondre manuellement à chacune mobilise du temps humain qui pourrait être consacré au service. Comment absorber ce flux sans embaucher une personne dédiée ?",
		sections: [
			{
				heading: "1. Les questions fréquentes : un volume sous-estimé",
				blocks: [
					{
						type: "p",
						text: "Dans un restaurant de taille moyenne, les questions récurrentes représentent souvent plus de 60 % des appels entrants. Les thèmes les plus fréquents :",
					},
					{
						type: "ul",
						items: [
							"Horaires d'ouverture et jours de fermeture",
							"Disponibilité pour une date précise",
							"Informations sur la carte et les allergènes",
							"Accès, parking, transports",
							"Conditions pour les groupes et privatisations",
						],
					},
					{
						type: "p",
						text: "Ces questions ne nécessitent pas de décision humaine. Elles nécessitent une réponse précise et immédiate.",
					},
				],
			},
			{
				heading: "2. Le coût humain de la répétition",
				blocks: [
					{
						type: "p",
						text: "Chaque question répétée mobilise un membre de l'équipe pendant 1 à 3 minutes. Multiplié par 20 ou 30 appels par jour, c'est une à deux heures de travail consommées uniquement pour répondre aux mêmes informations.",
					},
					{
						type: "p",
						text: "Ce temps n'est pas récupérable. Et il génère une frustration progressive chez les équipes.",
					},
				],
			},
			{
				heading: "3. La base de connaissances : clé de la délégation",
				blocks: [
					{
						type: "p",
						text: "Pour qu'un agent IA réponde correctement aux questions fréquentes, il doit disposer d'une base de connaissances structurée :",
					},
					{
						type: "ul",
						items: [
							"Informations sur l'établissement (nom, adresse, horaires)",
							"Carte et informations alimentaires",
							"Politique de réservation et d'annulation",
							"Conditions spéciales (groupes, événements, privatisations)",
						],
					},
					{
						type: "p",
						text: "Une fois configurée, cette base permet à l'agent de répondre instantanément et avec précision — sans intervention humaine.",
					},
				],
			},
			{
				heading: "4. Ce que gagne l'équipe",
				blocks: [
					{
						type: "p",
						text: "En déléguant les questions fréquentes à un agent IA, l'équipe récupère du temps pour :",
					},
					{
						type: "ul",
						items: [
							"La qualité du service en salle",
							"Les demandes complexes qui nécessitent un jugement humain",
							"L'accueil et la relation client directe",
						],
					},
					{
						type: "p",
						text: "La valeur ajoutée humaine se concentre là où elle est irremplaçable.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "Absorber les questions fréquentes sans équipe dédiée n'est pas une question de budget. C'est une question d'organisation.",
				},
				{
					type: "p",
					text: "Un agent IA bien configuré répond à 80 % des demandes entrantes de manière autonome. L'équipe, elle, se concentre sur les 20 % qui méritent vraiment son attention.",
				},
			],
		},
	},
];

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES — EN
// ─────────────────────────────────────────────────────────────────────────────

const ARTICLES_EN: Article[] = [
	{
		slug: "pourquoi-le-telephone",
		title:
			"Why the phone has become a real problem in restaurants (and how voice AI is changing the game)",
		category: "Tech",
		date: "April 15, 2026",
		dateIso: "2026-04-15",
		readingTime: "8 min",
		image:
			"https://www.figma.com/api/mcp/asset/efd96450-66b4-4dc3-8c16-9bf20c3a090a",
		intro:
			"In the restaurant industry, the phone is no longer just a communication tool. It has become a source of interruptions, operational stress, and invisible losses. During service, every call disrupts the floor, the kitchen, or the manager.\n\nAnd yet, a significant portion of reservations are concentrated precisely in these critical time slots.\n\nAccording to Zenchef, phone reservation demand peaks heavily around service hours — notably 12pm–2pm and 7pm–9pm.\n\nIn other words: customers call exactly when the team cannot answer without disrupting service.\n\nThe problem is not technological. It is organisational.",
		sections: [
			{
				heading:
					"1. Phone overload in restaurants: a measurable phenomenon",
				blocks: [
					{
						type: "p",
						text: "In most establishments, inbound calls concern:",
					},
					{
						type: "ul",
						items: [
							"Last-minute reservations",
							"Frequently asked questions (hours, menu, terrace, parking)",
							"Takeaway orders",
							"Deliveries",
							"Private events or group bookings",
						],
					},
					{
						type: "p",
						text: "These requests are entirely legitimate from the customer's perspective. But they arrive at the worst possible moment for the team. According to Food Hotel Tech 2025, 3 out of 4 restaurateurs now consider AI essential for optimising repetitive tasks and reducing operational pressure.",
					},
					{
						type: "source",
						text: "https://resto.zepros.fr/actus-metiers/ia-est-devenue-incontournable-3-restaurateurs-hoteliers-4",
					},
					{
						type: "p",
						text: "This is no longer a question of innovation. It is a question of efficiency.",
					},
				],
			},
			{
				heading: "2. The real cost of poorly managed calls",
				blocks: [
					{
						type: "p",
						text: "A poorly managed call generates three types of impact:",
					},
					{ type: "bold", text: "Operational disruption" },
					{
						type: "p",
						text: "Answering during a rush fragments attention. The floor slows down. The kitchen waits. The manager arbitrates.",
					},
					{ type: "bold", text: "Human error" },
					{ type: "p", text: "Under pressure:" },
					{
						type: "ul",
						items: [
							"Reservation noted incorrectly",
							"Name misspelled",
							"Wrong time slot",
							"Incomplete order",
						],
					},
					{ type: "bold", text: "Lost opportunities" },
					{
						type: "p",
						text: "If the call is not answered immediately, the customer:",
					},
					{
						type: "ul",
						items: [
							"doesn't call back",
							"books elsewhere",
							"moves on",
						],
					},
					{
						type: "p",
						text: "Overfull reports that a significant share of phone reservations are lost due to lack of immediate response.",
					},
					{
						type: "source",
						text: "https://blog.overfull.fr/linconvenient-des-reservations-par-telephone-pour-votre-restaurant/",
					},
					{
						type: "p",
						text: "A missed call appears on no dashboard. But it exists.",
					},
				],
			},
			{
				heading: "3. After-hours calls: the invisible part of the problem",
				blocks: [
					{
						type: "p",
						text: "Contrary to popular belief, calls are not concentrated only during quiet opening hours.",
					},
					{ type: "p", text: "According to Tala Assistant:" },
					{
						type: "ul",
						items: [
							"82% of phone reservations come in outside 'quiet' hours",
							"32% of calls occur between midnight and 8am",
						],
					},
					{
						type: "source",
						text: "https://www.tala-assistant.com/blog/reservation-restaurant-automatique-par-telephone-ia",
					},
					{
						type: "p",
						text: "The customer calls when they think of booking. Not when the restaurant is ready to answer.",
					},
				],
			},
			{
				heading: "4. Customer acceptance of voice AI",
				blocks: [
					{
						type: "p",
						text: "One of the historic barriers was cultural: 'Customers won't want to talk to an AI.'",
					},
					{ type: "p", text: "The data shows the opposite." },
					{
						type: "p",
						text: "Médiamétrie reports that in September 2025, 38.1% of French people had already used a conversational agent (voice or text).",
					},
					{
						type: "source",
						text: "https://www.mediametrie.fr/fr/les-jeunes-aux-avant-postes-de-la-revolution-de-lia-conversationnelle",
					},
					{
						type: "p",
						text: "Interacting with an AI becomes normal when:",
					},
					{
						type: "ul",
						items: [
							"the response is immediate",
							"the conversation is fluid",
							"the confirmation is clear",
						],
					},
					{
						type: "p",
						text: "In a restaurant context, that is exactly what the customer is looking for.",
					},
				],
			},
			{
				heading: "5. What a voice AI agent concretely changes",
				blocks: [
					{
						type: "p",
						text: "A voice agent specialised for restaurants can:",
					},
					{
						type: "ul",
						items: [
							"automatically answer every call",
							"understand the intent (reservation, order, question)",
							"structure the information",
							"send a confirmation by SMS",
							"transfer to a human when necessary",
						],
					},
					{
						type: "p",
						text: "It acts as an intelligent operational buffer. The benefit is not 'tech'. The benefit is organisational.",
					},
				],
			},
			{
				heading: "6. The key point: staying in control",
				blocks: [
					{
						type: "p",
						text: "A useful AI does not replace the restaurateur.",
					},
					{ type: "p", text: "It applies defined rules:" },
					{
						type: "ul",
						items: [
							"opening hours",
							"maximum capacity",
							"cancellation policy",
							"group management",
							"private event conditions",
						],
					},
					{ type: "p", text: "The restaurant stays in control. The AI executes." },
				],
			},
			{
				heading: "7. A concrete example: Ori",
				blocks: [
					{ type: "p", text: "A voice agent like Ori enables you to:" },
					{
						type: "ul",
						items: [
							"handle inbound calls (reservations, orders, FAQ)",
							"configure rules specific to your restaurant",
							"send automatic confirmations",
							"review each call with a transcript",
							"monitor phone activity in real time",
						],
					},
					{
						type: "p",
						text: "The goal is not to add a tool. The goal is to remove friction.",
					},
				],
			},
			{
				heading: "8. Simple indicators to assess your situation",
				blocks: [
					{ type: "p", text: "Ask yourself 5 questions:" },
					{
						type: "ol",
						items: [
							"Does the phone ring during the rush?",
							"Do you actually call back missed calls?",
							"Have you ever had incorrectly noted reservations?",
							"Do you answer the same questions every day?",
							"Do you know how many calls you actually receive?",
						],
					},
					{
						type: "p",
						text: "If the answer is yes to several of these, the phone is already costing you time and peace of mind.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "The phone is not the problem. Its impact on organisation is.",
				},
				{ type: "p", text: "The data shows that:" },
				{
					type: "ul",
					items: [
						"calls are concentrated during service hours",
						"a portion of requests are lost",
						"AI acceptance is growing rapidly",
					],
				},
				{
					type: "p",
					text: "In this context, voice AI is progressively becoming an operational standard. Not to replace the human. But to protect the service.",
				},
			],
		},
	},
	{
		slug: "reservations-par-telephone",
		title: "Phone reservations: why missed calls are costly",
		category: "Tech",
		date: "February 19, 2026",
		dateIso: "2026-02-19",
		readingTime: "5 min",
		image:
			"https://www.figma.com/api/mcp/asset/bc35c627-ed8d-46e2-b651-2f461418dfe6",
		intro:
			"Every unanswered call is a lost opportunity. In a restaurant, this is especially visible: a customer who gets no response books elsewhere in seconds. Understanding this mechanism is the first step to solving it.",
		sections: [
			{
				heading: "1. Phone reservations remain a major channel",
				blocks: [
					{
						type: "p",
						text: "Despite the rise of online platforms, the phone remains the primary reservation channel for a significant proportion of restaurants — particularly those without an integrated online booking system.",
					},
					{
						type: "p",
						text: "For these establishments, every missed call directly means an empty table.",
					},
				],
			},
			{
				heading: "2. When are calls missed?",
				blocks: [
					{
						type: "p",
						text: "Calls are heavily concentrated in critical time slots:",
					},
					{
						type: "ul",
						items: [
							"During the lunch service (12pm–2pm)",
							"During the dinner service (7pm–9pm)",
							"On weekends and public holidays",
						],
					},
					{
						type: "p",
						text: "These moments correspond exactly to peak activity on the floor. The team is busy, the phone rings unanswered.",
					},
				],
			},
			{
				heading: "3. The real cost of a missed call",
				blocks: [
					{
						type: "p",
						text: "A missed call does not just mean a lost reservation. It also produces:",
					},
					{
						type: "ul",
						items: [
							"A negative impression on the customer",
							"A callback that rarely happens",
							"A reservation made at a competitor",
						],
					},
					{
						type: "p",
						text: "Accumulated over a week, the losses become substantial — without ever appearing on any dashboard.",
					},
				],
			},
			{
				heading: "4. How automation reduces losses",
				blocks: [
					{
						type: "p",
						text: "A voice AI agent like Ori answers every call, even during service. It takes the reservation, handles common questions and sends a confirmation.",
					},
					{
						type: "p",
						text: "Result: zero missed calls, zero lost reservations due to no response.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "Missed calls are not inevitable. They are the symptom of an organisation that has not yet adapted its tools to the real pace of service.",
				},
				{
					type: "p",
					text: "Automating call handling is not a loss of human contact. It is ensuring that every customer gets a response — immediately.",
				},
			],
		},
	},
	{
		slug: "les-appels-hors-horaires",
		title: "After-hours calls: the invisible revenue loss",
		category: "Tech",
		date: "April 15, 2026",
		dateIso: "2026-04-15",
		readingTime: "8 min",
		image:
			"https://www.figma.com/api/mcp/asset/1fddc083-09cd-4bce-b618-aa633b6f1c44",
		intro:
			"A restaurant never truly closes. Customers, on the other hand, have no schedule. They search for information, want to book or ask questions — at 11pm, on a Sunday morning, or during closed days. These after-hours calls represent a structural revenue loss that few establishments have measured.",
		sections: [
			{
				heading: "1. Demand does not respect opening hours",
				blocks: [
					{
						type: "p",
						text: "According to several industry studies, a significant share of inbound calls arrive outside the team's active hours:",
					},
					{
						type: "ul",
						items: [
							"Before opening (before 10am)",
							"After closing (after 10pm)",
							"On days off and weekly closing days",
						],
					},
					{
						type: "p",
						text: "The customer calls when they think of booking. Not when the restaurant is open.",
					},
				],
			},
			{
				heading: "2. Why these calls are lost",
				blocks: [
					{
						type: "p",
						text: "Outside opening hours, several scenarios repeat themselves:",
					},
					{
						type: "ul",
						items: [
							"The phone rings unanswered",
							"A generic voicemail discourages the customer",
							"No system captures the request",
						],
					},
					{
						type: "p",
						text: "The next morning, the team has no idea how many opportunities were missed.",
					},
				],
			},
			{
				heading: "3. The revenue loss: a simple calculation",
				blocks: [
					{
						type: "p",
						text: "If a restaurant misses an average of 3 calls per day outside hours, and each reservation represents a value of €40 per cover for a table of 2:",
					},
					{
						type: "ul",
						items: [
							"3 calls × €80 = €240 lost per day",
							"Around €7,200 per month",
							"More than €86,000 per year",
						],
					},
					{
						type: "p",
						text: "This calculation is conservative. And these losses appear in no accounting line.",
					},
				],
			},
			{
				heading: "4. The solution: 24/7 availability",
				blocks: [
					{
						type: "p",
						text: "A voice AI agent never sleeps. It answers calls at midnight just as at 8am, on public holidays just as on Monday closing days.",
					},
					{
						type: "p",
						text: "Every after-hours call becomes a captured opportunity rather than a lost one.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "The revenue loss from after-hours calls is invisible but real. It accumulates silently, week after week.",
				},
				{
					type: "p",
					text: "Making a restaurant available 24/7 is no longer reserved for large chains. It is now accessible to any establishment that chooses to automate intelligently.",
				},
			],
		},
	},
	{
		slug: "questions-frequentes",
		title: "Frequently asked questions: how to handle them without a dedicated team",
		category: "Tech",
		date: "April 15, 2026",
		dateIso: "2026-04-15",
		readingTime: "8 min",
		image:
			"https://www.figma.com/api/mcp/asset/617d2ac5-ac77-4602-b958-bc4613fb817e",
		intro:
			"In a restaurant, the same questions come up every day. Hours, menu, allergens, directions, parking, terrace, groups... These requests are legitimate but time-consuming. Answering each one manually takes human time that could be spent on service. How do you absorb this volume without hiring a dedicated person?",
		sections: [
			{
				heading: "1. Frequently asked questions: an underestimated volume",
				blocks: [
					{
						type: "p",
						text: "In an average-sized restaurant, recurring questions often represent more than 60% of inbound calls. The most common topics:",
					},
					{
						type: "ul",
						items: [
							"Opening hours and closing days",
							"Availability for a specific date",
							"Menu and allergen information",
							"Directions, parking, public transport",
							"Conditions for groups and private events",
						],
					},
					{
						type: "p",
						text: "These questions require no human decision. They require a precise, immediate answer.",
					},
				],
			},
			{
				heading: "2. The human cost of repetition",
				blocks: [
					{
						type: "p",
						text: "Each repeated question takes a team member 1 to 3 minutes. Multiplied by 20 or 30 calls per day, that is one to two hours of work consumed solely by answering the same information.",
					},
					{
						type: "p",
						text: "This time cannot be recovered. And it generates progressive frustration within teams.",
					},
				],
			},
			{
				heading: "3. The knowledge base: the key to delegation",
				blocks: [
					{
						type: "p",
						text: "For an AI agent to answer frequently asked questions correctly, it needs a structured knowledge base:",
					},
					{
						type: "ul",
						items: [
							"Establishment information (name, address, hours)",
							"Menu and dietary information",
							"Reservation and cancellation policy",
							"Special conditions (groups, events, private hire)",
						],
					},
					{
						type: "p",
						text: "Once configured, this base allows the agent to respond instantly and accurately — without human intervention.",
					},
				],
			},
			{
				heading: "4. What the team gains",
				blocks: [
					{
						type: "p",
						text: "By delegating frequently asked questions to an AI agent, the team reclaims time for:",
					},
					{
						type: "ul",
						items: [
							"Quality of service on the floor",
							"Complex requests that require human judgement",
							"Welcome and direct customer relationship",
						],
					},
					{
						type: "p",
						text: "Human added value concentrates where it is irreplaceable.",
					},
				],
			},
		],
		conclusion: {
			heading: "Conclusion",
			blocks: [
				{
					type: "p",
					text: "Handling frequently asked questions without a dedicated team is not a question of budget. It is a question of organisation.",
				},
				{
					type: "p",
					text: "A well-configured AI agent handles 80% of incoming requests autonomously. The team focuses on the 20% that truly deserve its attention.",
				},
			],
		},
	},
];

const ARTICLES_BY_LOCALE: Record<string, Article[]> = {
	fr: ARTICLES_FR,
	en: ARTICLES_EN,
};

export function getAllArticles(locale = "fr"): Article[] {
	return ARTICLES_BY_LOCALE[locale] ?? ARTICLES_FR;
}

export function getArticleBySlug(slug: string, locale = "fr"): Article | undefined {
	return getAllArticles(locale).find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, locale = "fr"): Article[] {
	return getAllArticles(locale).filter((a) => a.slug !== currentSlug);
}
