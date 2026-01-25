'use client';

import { useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import AppETA from '@/components/AppETA';
import QRModal from '@/components/QRModal';
import { useLanguage } from '@/lib/LanguageContext';
import Script from 'next/script';

export default function Home() {
  const { t, language } = useLanguage();
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const pressMentions = [
    {
      name: 'TV Midtvest',
      href: 'https://www.tvmidtvest.dk/',
      logo: '/images/press-logos/Tv-Midtvest-logo.png',
      width: 240,
      height: 80,
    },
    {
      name: 'Ekstra Bladet',
      href: 'https://ekstrabladet.dk/forbrug/Teknologi/21-aarig-udnytter-trump-kaos-app-stikker-helt-af/11065512',
      logo: '/images/press-logos/Ekstra-Bladet-logo.png',
      width: 240,
      height: 80,
    },
    {
      name: 'Computerworld',
      href: 'https://www.computerworld.dk/art/294241/morgen-briefing-dansk-app-rider-paa-trump-boelge-politiet-dropper-x-iran-slukker-for-droemmen-om-skotlands-uafhaengighed',
      logo: '/images/press-logos/Computer-World-logov2.png',
      width: 240,
      height: 80,
    },
  ];

  return (
    <>
      <div className="announcement-banner">
        <div className="banner-content">
          <span className="banner-text">{t.bannerText}</span>
          <a href="https://app.udenusa.dk" className="banner-button" target="_blank" rel="noreferrer">
            {t.bannerButton}
          </a>
        </div>
      </div>

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
        <div className="cta-buttons">
          <a
            href="https://apps.apple.com/app/id6742805777"
            className="cta"
            id="downloadButton"
          >
            {t.ctaButton}
          </a>
          <a
            href="https://app.udenusa.dk"
            className="cta cta-web"
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaWebButton}
          </a>
        </div>
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

      <AppETA />

      <Newsletter />

      <section className="press-mentions">
        <h2 className="press-title">{t.pressTitle}</h2>
        <div className="press-marquee" aria-label={t.pressTitle}>
          <div className="press-mask">
            <div className="press-track">
              {pressMentions.concat(pressMentions).map((mention, index) => {
                const hasLink = Boolean(mention.href);

                return (
                  <a
                    key={`${mention.name}-${index}`}
                    href={hasLink ? mention.href : undefined}
                    className={`press-logo${hasLink ? '' : ' is-disabled'}`}
                    target={hasLink ? '_blank' : undefined}
                    rel={hasLink ? 'noreferrer' : undefined}
                    aria-label={
                      hasLink
                        ? `${mention.name} article`
                        : `${mention.name} article coming soon`
                    }
                  >
                    <Image
                      src={mention.logo}
                      alt={mention.name}
                      width={mention.width}
                      height={mention.height}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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

    </>
  );
}
