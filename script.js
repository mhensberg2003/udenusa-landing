document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, initializing language system");
  
  // Set up FAQ dropdowns
  setupFaqDropdowns();
  
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
    'faq-questions': document.querySelectorAll('.faq-question strong'),
    'faq-answers': document.querySelectorAll('.faq-answer p')
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
  
  // Set up FAQ dropdowns with improved performance
  function setupFaqDropdowns() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        
        // If this item is already active and we're closing it
        if (faqItem.classList.contains('active')) {
          // Set a specific height before collapsing to improve animation
          const height = faqAnswer.scrollHeight;
          faqAnswer.style.maxHeight = height + 'px';
          
          // Force reflow
          faqAnswer.offsetHeight;
          
          // Then set to 0
          setTimeout(() => {
            faqAnswer.style.maxHeight = '0px';
            
            // Remove active class after animation completes
            setTimeout(() => {
              faqItem.classList.remove('active');
              faqAnswer.style.maxHeight = '';
            }, 300);
          }, 10);
        } else {
          // Opening the item
          faqItem.classList.add('active');
        }
      });
    });
  }
  
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
      
      // Update FAQ questions and answers
      translatableElements['faq-questions'].forEach((question, index) => {
        if (translations[lang].faqItems[index]) {
          question.textContent = translations[lang].faqItems[index].question;
        }
      });
      
      translatableElements['faq-answers'].forEach((answer, index) => {
        if (translations[lang].faqItems[index]) {
          answer.innerHTML = translations[lang].faqItems[index].answer;
        }
      });
      
      // Update privacy policy link in footer
      const privacyLink = document.querySelector('footer .privacy-link');
      if (privacyLink) {
        privacyLink.textContent = lang === 'da' ? 'Privatlivspolitik' : 'Privacy Policy';
      }
      
      // Update pressekit link in footer
      const pressekitLink = document.querySelector('footer .pressekit-link');
      if (pressekitLink) {
        pressekitLink.textContent = lang === 'da' ? 'Pressekit' : 'Press Kit';
      }
      
      console.log("Translation complete");
    } catch (error) {
      console.error("Error during translation:", error);
    }
  }
}); 