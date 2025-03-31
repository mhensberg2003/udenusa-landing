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
    'app-availability': document.querySelector('.app-availability'),
    'qr-code': document.querySelector('.qr-code'),
    'problem-title': document.querySelector('.problem h2'),
    'problem-text': document.querySelector('.problem p'),
    'solution-title': document.querySelector('.solution h2'),
    'solution-items': document.querySelectorAll('.solution li'),
    'quote': document.querySelector('.quote p'),
    'faq-title': document.querySelector('.faq h2'),
    'social-media-note': document.querySelector('.social-media-note')
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

      // Close the dropdown by adding a temporary class
      const languageSwitcher = document.querySelector('.language-switcher');
      languageSwitcher.classList.add('no-hover');
      
      // Remove the class after a short delay
      setTimeout(() => {
        languageSwitcher.classList.remove('no-hover');
      }, 300);
    });
  });
  
  // Set up FAQ dropdowns with improved performance
  function setupFaqDropdowns() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    let animating = false;
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        if (animating) return;
        
        const faqItem = this.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');
        
        // Prevent interaction during animation
        animating = true;
        
        // Close all items
        document.querySelectorAll('.faq-item.active').forEach(item => {
          if (item !== faqItem) {
            item.classList.remove('active');
          }
        });
        
        if (isActive) {
          // Closing
          faqAnswer.style.height = faqAnswer.scrollHeight + 'px';
          
          // Force reflow
          faqAnswer.offsetHeight;
          
          // Animate to closed state
          faqAnswer.style.height = '0px';
          faqItem.classList.remove('active');
          
          setTimeout(() => {
            faqAnswer.style.height = '';
            animating = false;
          }, 400);
        } else {
          // Opening
          faqItem.classList.add('active');
          
          // Set height to scrollHeight to animate
          const height = faqAnswer.scrollHeight;
          faqAnswer.style.height = '0px';
          
          // Force reflow
          faqAnswer.offsetHeight;
          
          // Animate to open state
          faqAnswer.style.height = height + 'px';
          
          setTimeout(() => {
            faqAnswer.style.height = '';
            animating = false;
          }, 400);
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
  
  // Generate FAQ items
  function generateFaqItems(lang) {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = ''; // Clear existing items
    
    translations[lang].faqItems.forEach(item => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';
      
      faqItem.innerHTML = `
        <div class="faq-question">
          <strong>${item.question}</strong>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div class="faq-answer">
          <p>${item.answer}</p>
        </div>
      `;
      
      faqContainer.appendChild(faqItem);
    });
    
    // Set up dropdowns for the new items
    setupFaqDropdowns();
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
      
      // Update app availability text
      translatableElements['app-availability'].textContent = translations[lang].appAvailability;
      
      // Update QR code text
      const qrCodeTextElement = document.querySelector('.qr-code .qr-code-text');
      if (qrCodeTextElement) {
        qrCodeTextElement.textContent = translations[lang].qrCode;
      }
      
      // Update social media note
      translatableElements['social-media-note'].textContent = translations[lang].socialMediaNote;
      
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
      
      // Generate FAQ items
      generateFaqItems(lang);
      
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

  const popup = document.getElementById('asciiPopup');
  const closeButton = document.querySelector('.close-popup');

  closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
}); 