'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <div className="newsletter-section">
      <div id="sib-form-container">
        <div
          id="sib-container"
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,1)',
            maxWidth: '540px',
            borderRadius: '3px',
            borderWidth: '1px',
            borderColor: '#C0CCD9',
            borderStyle: 'solid',
            direction: 'ltr',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <form
            id="sib-form"
            method="POST"
            action="https://0b3f884c.sibforms.com/serve/MUIFAEErFcld4TbNgNOqw45PgnHyUzAeOz3TV6HWHFMFnoRQ43F_mAtUVXJkiX3fXUlA7Z0FtO_15RgPWaI4swogHYYU0Pz6kcv95s0aLEYBk5kGof6V_xjHLkYu7ZtQSab7vfYpITiZ4hG_u5MD4nzENkw0gg3KcSgSOGsSNrkVsfGiWFcDj5xoasGW-8BxViAXmOIF6MVPWqJyfg=="
            data-type="subscription"
          >
            <div style={{ padding: '8px 0' }}>
              <div
                style={{
                  fontSize: '26px',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontFamily: 'Helvetica, sans-serif',
                  color: '#3C4858',
                  backgroundColor: 'transparent',
                }}
              >
                <p>
                  <strong>{t.newsletterTitle}</strong>
                </p>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              <div
                style={{
                  fontSize: '16px',
                  textAlign: 'center',
                  fontFamily: 'Helvetica, sans-serif',
                  color: '#3C4858',
                  backgroundColor: 'transparent',
                }}
              >
                <div>
                  <p>{t.newsletterDescription}</p>
                </div>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              <div>
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <div className="entry__field">
                      <input
                        className="input"
                        type="text"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder={t.newsletterPlaceholder}
                        data-required="true"
                        required
                        style={{
                          width: '100%',
                          padding: '10px',
                          fontSize: '16px',
                          border: '1px solid #C0CCD9',
                          borderRadius: '3px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                  <label
                    style={{
                      fontSize: '12px',
                      textAlign: 'left',
                      fontFamily: 'Helvetica, sans-serif',
                      color: '#8390A4',
                      display: 'block',
                      marginTop: '5px',
                    }}
                  >
                    {t.newsletterEmailHint}
                  </label>
                </div>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              <div style={{ textAlign: 'left' }}>
                <button
                  className="sib-form-block__button"
                  type="submit"
                  style={{
                    fontSize: '20px',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontFamily: 'Helvetica, sans-serif',
                    color: '#FFFFFF',
                    backgroundColor: '#31d74a',
                    borderRadius: '3px',
                    borderWidth: '0px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  {t.newsletterButton}
                </button>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              <div
                style={{
                  fontSize: '16px',
                  textAlign: 'left',
                  fontFamily: 'Helvetica, sans-serif',
                  color: '#3C4858',
                  backgroundColor: 'transparent',
                }}
              >
                <div>
                  <p>{t.newsletterDisclaimer}</p>
                </div>
              </div>
            </div>
            <input type="text" name="email_address_check" defaultValue="" style={{ display: 'none' }} />
            <input type="hidden" name="locale" value="en" />
          </form>
        </div>
      </div>
    </div>
  );
}
