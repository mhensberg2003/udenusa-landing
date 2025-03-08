document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, initializing language system");
  
  // Elements that need translation
  const translatableElements = {
    'title': document.querySelector('title'),
    'tagline': document.querySelector('.tagline'),
    'description': document.querySelector('.description'),
    'cta': document.querySelector('.cta'),
    'qr-code': document.querySelector('.qr-code'),
    'problem-title': document.querySelector('.problem h2'),
    'problem-text': document.querySelector('.problem p'),
    'solution-title': document.querySelector('.solution h2'),
    'solution-items': document.querySelectorAll('.solution li'),
    'quote': document.querySelector('.quote p'),
    'faq-title': document.querySelector('.faq h2'),
    'faq-items': document.querySelectorAll('.faq-item')
  };
  
  // Get language buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  console.log("Found language buttons:", langButtons.length);
  
  // Get saved language preference or default to Danish
  const savedLang = localStorage.getItem('preferredLanguage') || 'da';
  console.log("Saved language preference:", savedLang);
  
  // Initialize with saved language
  setActiveLanguage(savedLang);
  translatePage(savedLang);
  
  // Handle language button clicks
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      console.log("Language button clicked:", lang);
      
      // Save preference to localStorage
      localStorage.setItem('preferredLanguage', lang);
      
      // Update active button
      setActiveLanguage(lang);
      
      // Translate the page
      translatePage(lang);
    });
  });
  
  // Set the active language button
  function setActiveLanguage(lang) {
    console.log("Setting active language:", lang);
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
  
  // Translate the page content
  function translatePage(lang) {
    console.log("Translating page to:", lang);
    console.log("Available translations:", Object.keys(translations));
    
    if (!translations[lang]) {
      console.error("Translation not found for language:", lang);
      return;
    }
    
    try {
      // Update page title
      translatableElements.title.textContent = translations[lang].pageTitle;
      
      // Update header content
      translatableElements.tagline.textContent = translations[lang].tagline;
      translatableElements.description.textContent = translations[lang].description;
      translatableElements.cta.textContent = translations[lang].ctaButton;
      translatableElements['qr-code'].textContent = translations[lang].qrCode;
      
      // Update problem section
      translatableElements['problem-title'].textContent = translations[lang].problemTitle;
      translatableElements['problem-text'].textContent = translations[lang].problemText;
      
      // Update solution section
      translatableElements['solution-title'].textContent = translations[lang].solutionTitle;
      translatableElements['solution-items'].forEach((item, index) => {
        if (translations[lang].solutionItems[index]) {
          item.textContent = translations[lang].solutionItems[index];
        }
      });
      
      // Update quote
      translatableElements.quote.textContent = translations[lang].quote;
      
      // Update FAQ section
      translatableElements['faq-title'].textContent = translations[lang].faqTitle;
      translatableElements['faq-items'].forEach((item, index) => {
        if (translations[lang].faqItems[index]) {
          const faqData = translations[lang].faqItems[index];
          const questionElement = item.querySelector('strong');
          const answerElement = item.querySelector('p');
          
          if (questionElement && answerElement) {
            questionElement.textContent = faqData.question;
            answerElement.innerHTML = faqData.answer;
          }
        }
      });
      
      console.log("Translation complete");
    } catch (error) {
      console.error("Error during translation:", error);
    }
  }
}); 