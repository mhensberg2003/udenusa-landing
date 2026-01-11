import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import BrevoScripts from '@/components/BrevoScripts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UdenUSA - Find alternativer til amerikanske produkter',
  description: 'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden. Støtter du Trump, når du handler?',
  keywords: 'UdenUSA, amerikanske produkter, boykot, danske alternativer, produkt scanner, app',
  authors: [{ name: 'UdenUSA' }],
  openGraph: {
    title: 'UdenUSA - Find alternativer til amerikanske produkter',
    description: 'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
    images: ['/images/UdenUSAtransparent.png'],
    url: 'https://udenusa.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UdenUSA - Find alternativer til amerikanske produkter',
    description: 'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
    images: ['/images/UdenUSAtransparent.png'],
  },
  robots: 'index, follow',
  icons: {
    icon: '/images/UdenUSAtransparent.png',
  },
};

function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://udenusa.com/" />
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <BrevoScripts />
        <Analytics />
      </body>
    </html>
  );
}
