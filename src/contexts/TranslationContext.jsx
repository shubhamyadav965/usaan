import React, { createContext, useContext, useState, useEffect } from 'react';

// Translation context
const TranslationContext = createContext();

// Available languages
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
];

// Translation provider component
export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translationCache, setTranslationCache] = useState(new Map());
  const [isTranslating, setIsTranslating] = useState(false);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && SUPPORTED_LANGUAGES.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  // Change language function
  const changeLanguage = (languageCode) => {
    if (SUPPORTED_LANGUAGES.some(lang => lang.code === languageCode)) {
      setCurrentLanguage(languageCode);
    }
  };

  // Get cached translation
  const getCachedTranslation = (text, targetLanguage) => {
    const key = `${text}|${targetLanguage}`;
    return translationCache.get(key);
  };

  // Set cached translation
  const setCachedTranslation = (text, targetLanguage, translation) => {
    const key = `${text}|${targetLanguage}`;
    setTranslationCache(prev => new Map(prev).set(key, translation));
  };

  // Translate text function
  const translateText = async (text, targetLanguage = currentLanguage) => {
    // Return original text if target language is English
    if (targetLanguage === 'en' || !text) {
      return text;
    }

    // Check cache first
    const cached = getCachedTranslation(text, targetLanguage);
    if (cached) {
      return cached;
    }

    try {
      setIsTranslating(true);
      
      // Use a translation service API (Google Translate, Azure Translator, etc.)
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage,
          sourceLanguage: 'en'
        })
      });

      if (response.ok) {
        const data = await response.json();
        const translatedText = data.translatedText;
        
        // Cache the translation
        setCachedTranslation(text, targetLanguage, translatedText);
        
        return translatedText;
      } else {
        console.error('Translation API error:', response.statusText);
        return text; // Return original text on error
      }
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    } finally {
      setIsTranslating(false);
    }
  };

  // Batch translate multiple texts
  const translateBatch = async (texts, targetLanguage = currentLanguage) => {
    if (targetLanguage === 'en') {
      return texts;
    }

    try {
      setIsTranslating(true);
      
      // Filter out already cached translations
      const uncachedTexts = texts.filter(text => !getCachedTranslation(text, targetLanguage));
      
      if (uncachedTexts.length === 0) {
        // All texts are cached
        return texts.map(text => getCachedTranslation(text, targetLanguage) || text);
      }

      const response = await fetch('/api/translate/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          texts: uncachedTexts,
          targetLanguage,
          sourceLanguage: 'en'
        })
      });

      if (response.ok) {
        const data = await response.json();
        const translatedTexts = data.translatedTexts;
        
        // Cache all translations
        uncachedTexts.forEach((text, index) => {
          setCachedTranslation(text, targetLanguage, translatedTexts[index]);
        });
        
        // Return all translations (cached + new)
        return texts.map(text => getCachedTranslation(text, targetLanguage) || text);
      } else {
        console.error('Batch translation API error:', response.statusText);
        return texts;
      }
    } catch (error) {
      console.error('Batch translation error:', error);
      return texts;
    } finally {
      setIsTranslating(false);
    }
  };

  const value = {
    currentLanguage,
    changeLanguage,
    translateText,
    translateBatch,
    isTranslating,
    supportedLanguages: SUPPORTED_LANGUAGES,
    getCurrentLanguageInfo: () => SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage)
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use translation context
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
