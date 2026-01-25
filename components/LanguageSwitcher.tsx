'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'da' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('da')}
      >
        🇩🇰 Dansk
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        🇬🇧 English
      </button>
      <button
        className={`lang-btn ${language === 'de' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('de')}
      >
        🇩🇪 Deutsch
      </button>
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('fr')}
      >
        🇫🇷 Français
      </button>
      <button
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('es')}
      >
        🇪🇸 Español
      </button>
    </div>
  );
}
