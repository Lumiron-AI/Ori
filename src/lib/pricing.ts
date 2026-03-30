export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Pour tester Ori et gérer un premier canal.',
    price: 49,
    interval: 'month',
    features: [
      '1 canal (téléphone ou message)',
      '500 conversations / mois',
      'Réponses automatiques 24/7',
      'Support par email',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Le plan recommandé pour les restaurants et commerces.',
    price: 99,
    interval: 'month',
    highlighted: true,
    features: [
      '2 canaux (téléphone + message)',
      '2 000 conversations / mois',
      'Prise de réservations automatique',
      'Tableau de bord analytique',
      'Support prioritaire',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Pour les groupes avec plusieurs établissements.',
    price: 249,
    interval: 'month',
    features: [
      'Canaux illimités',
      'Conversations illimitées',
      'Intégration CRM sur mesure',
      'Manager de compte dédié',
      'SLA 99,9 %',
    ],
  },
];
