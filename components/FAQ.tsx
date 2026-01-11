'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>{t.faqTitle}</h2>
      <div id="faq-container">
        {t.faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <strong>{item.question}</strong>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
            <div className="faq-answer">
              <p dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
