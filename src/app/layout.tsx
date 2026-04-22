import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ReferralCapture } from '@/components/layout/referral-capture';
import { ThemeProvider } from '@/context/theme-context';
import { LocaleProvider } from '@/context/locale-context';

export const metadata: Metadata = {
  title: {
    default: 'Ori — L\'assistant IA pour vos appels et messages',
    template: '%s | Ori',
  },
  description:
    'Automatisez vos conversations clients par téléphone, WhatsApp et Instagram. Ori décroche, répond et prend les réservations — 24h/24, 7/7.',
  metadataBase: new URL('https://ori.lumiron.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Ori',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y6G11K7GPE" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y6G11K7GPE');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ori-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <LocaleProvider>
            <ReferralCapture />
            <Header />
            <main>{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
