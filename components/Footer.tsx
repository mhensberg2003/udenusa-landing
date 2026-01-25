'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <p>
        2026, Vocata Studio | <a href="mailto:info@nonusa.org">info@nonusa.org</a> |{' '}
        <Link href="/privacy" className="privacy-link">
          {t.privacyPolicy}
        </Link>{' '}
        |{' '}
        <Link href="/tos" className="tos-link">
          {t.termsOfService}
        </Link>{' '}
        |{' '}
        <Link href="/pressekit" className="pressekit-link">
          {t.pressKit}
        </Link>
      </p>
    </footer>
  );
}
