'use client';

import { useLanguage } from '@/lib/LanguageContext';

const WebIcon = () => (
  <svg
    className="eta-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const AndroidIcon = () => (
  <svg
    className="eta-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.523 15.341c-.754 0-1.366-.611-1.366-1.366 0-.754.612-1.366 1.366-1.366.754 0 1.366.612 1.366 1.366 0 .755-.612 1.366-1.366 1.366zm-11.046 0c-.754 0-1.366-.611-1.366-1.366 0-.754.612-1.366 1.366-1.366.754 0 1.366.612 1.366 1.366 0 .755-.612 1.366-1.366 1.366zm11.405-6.472l1.716-3.08c.094-.169.035-.386-.135-.48-.169-.094-.386-.035-.48.135l-1.742 3.129C15.797 8.213 14.268 7.82 12 7.82c-2.268 0-3.797.393-5.241.753L5.017 5.444c-.094-.17-.311-.229-.48-.135-.17.094-.229.311-.135.48l1.716 3.08C3.23 10.059 1.5 12.356 1.5 15.019h21c0-2.663-1.73-4.96-4.618-6.15z" />
  </svg>
);

const AppleIcon = () => (
  <svg
    className="eta-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

export default function AppETA() {
  const { t } = useLanguage();

  return (
    <section className="app-eta" id="status">
      <h2 className="eta-title">{t.etaTitle}</h2>
      <div className="eta-grid">
        <a
          href="https://app.udenusa.dk"
          className="eta-card eta-card-live eta-card-link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="eta-platform">
            <WebIcon />
            {t.etaWeb}
          </div>
          <div className="eta-status">{t.etaWebStatus}</div>
          <div className="eta-date">{t.etaWebDate}</div>
          <div className="eta-markets">{t.etaWebMarkets}</div>
        </a>
        <a
          href="https://apps.apple.com/app/id6742805777"
          className="eta-card eta-card-live eta-card-link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="eta-platform">
            <AppleIcon />
            {t.etaIos}
          </div>
          <div className="eta-status">{t.etaIosStatus}</div>
          <div className="eta-date">{t.etaIosDate}</div>
          <div className="eta-markets">{t.etaIosMarkets}</div>
        </a>
        <div className="eta-card eta-card-pending">
          <div className="eta-platform">
            <AndroidIcon />
            {t.etaAndroid}
          </div>
          <div className="eta-status">{t.etaAndroidStatus}</div>
          <div className="eta-date">{t.etaAndroidDate}</div>
          <div className="eta-markets">{t.etaAndroidMarkets}</div>
        </div>
      </div>
    </section>
  );
}
