import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  stripePriceId: string;
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
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER ?? '',
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
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO ?? '',
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
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BUSINESS ?? '',
    features: [
      'Canaux illimités',
      'Conversations illimitées',
      'Intégration CRM sur mesure',
      'Manager de compte dédié',
      'SLA 99,9 %',
    ],
  },
];
