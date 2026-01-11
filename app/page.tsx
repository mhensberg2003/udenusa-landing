'use client';

import { useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import QRModal from '@/components/QRModal';
import { useLanguage } from '@/lib/LanguageContext';
import Script from 'next/script';

export default function Home() {
  const { t } = useLanguage();
  const [qrModalOpen, setQrModalOpen] = useState(false);

  return (
    <>
      <LanguageSwitcher />

      <header>
        <div className="app-screenshots">
          <Image
            src="/images/screenshot-american-phonmockup.png"
            alt="Screenshot af amerikansk produkt"
            width={250}
            height={500}
            className="screenshot left"
          />
          <Image
            src="/images/screenshot-nonamerican-phonemockup.png"
            alt="Screenshot af dansk produkt"
            width={250}
            height={500}
            className="screenshot right"
          />
        </div>
        <h1>
          <span>UdenUSA</span>{' '}
          <Image
            src="/images/UdenUSAtransparent.png"
            alt="UdenUSA Logo"
            width={70}
            height={70}
            className="logo-image"
          />
        </h1>
        <p className="tagline">{t.tagline}</p>
        <p className="description">{t.description}</p>
        <a
          href="https://apps.apple.com/app/id6742805777"
          className="cta"
          id="downloadButton"
        >
          {t.ctaButton}
        </a>
        <p className="app-availability">{t.appAvailability}</p>
        <div className="qr-code">
          <Image
            src="/images/qr-code-udenusa.png"
            alt="UdenUSA App Store QR Code"
            width={180}
            height={180}
            className="qr-code-img"
            onClick={() => setQrModalOpen(true)}
          />
          <div className="qr-code-text">{t.qrCode}</div>
        </div>
      </header>

      <Newsletter />

      <SocialIcons />

      <section className="problem">
        <h2>{t.problemTitle}</h2>
        <p>{t.problemText}</p>
      </section>

      <section className="solution">
        <h2>{t.solutionTitle}</h2>
        <ul>
          {t.solutionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="quote">
        <p>{t.quote}</p>
      </section>

      <FAQ />

      <Footer />

      <QRModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />

      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'UdenUSA',
            description:
              'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
            operatingSystem: 'iOS',
            applicationCategory: 'ShoppingApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'DKK',
            },
            author: {
              '@type': 'Organization',
              name: 'UdenUSA',
              url: 'https://udenusa.com',
            },
            screenshot:
              'https://udenusa.com/images/screenshot-nonamerican-phonemockup.png',
            softwareVersion: '1.0',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '25',
            },
          }),
        }}
      />

      {/* Brevo Form Scripts */}
      <Script
        id="brevo-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
            window.LOCALE = 'en';
            window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
            window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
            window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
            window.translation = {
              common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected',
                selectedOption: '{quantity} selected',
                selectedOptions: '{quantity} selected',
              }
            };
            var AUTOHIDE = Boolean(0);
          `,
        }}
      />
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="lazyOnload"
      />
    </>
  );
}
