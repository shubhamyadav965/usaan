import { apiConnector } from '../apiconnector';

// Translation service configuration
const TRANSLATION_CONFIG = {
  // You can switch between different providers
  provider: 'libre', // 'google', 'azure', 'libre', 'mymemory'
  
  // API endpoints for different providers
  endpoints: {
    google: 'https://translation.googleapis.com/language/translate/v2',
    azure: 'https://api.cognitive.microsofttranslator.com/translate',
    libre: 'https://libretranslate.de/translate',
    mymemory: 'https://api.mymemory.translated.net/get'
  },
  
  // Fallback to LibreTranslate (free and open source)
  fallbackEndpoint: 'https://libretranslate.de/translate'
};

// Language code mapping for different providers
const LANGUAGE_MAPPINGS = {
  google: {
    'hi': 'hi',
    'ml': 'ml', 
    'bn': 'bn',
    'ta': 'ta',
    'te': 'te',
    'en': 'en'
  },
  libre: {
    'hi': 'hi',
    'ml': 'ml',
    'bn': 'bn', 
    'ta': 'ta',
    'te': 'te',
    'en': 'en'
  },
  mymemory: {
    'hi': 'hi',
    'ml': 'ml',
    'bn': 'bn',
    'ta': 'ta', 
    'te': 'te',
    'en': 'en'
  }
};

/**
 * Translation service class
 */
class TranslationService {
  constructor() {
    this.cache = new Map();
    this.apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY || '';
    this.azureKey = import.meta.env.VITE_AZURE_TRANSLATOR_KEY || '';
    this.azureRegion = import.meta.env.VITE_AZURE_TRANSLATOR_REGION || 'global';
  }

  /**
   * Translate text using Google Translate API
   */
  async translateWithGoogle(text, targetLang, sourceLang = 'en') {
    try {
      const response = await fetch(
        `${TRANSLATION_CONFIG.endpoints.google}?key=${this.apiKey}`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            target: LANGUAGE_MAPPINGS.google[targetLang],
            source: LANGUAGE_MAPPINGS.google[sourceLang],
            format: 'text'
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Google Translate API error: ${response.status}`);
      }

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Google Translate error:', error);
      throw error;
    }
  }

  /**
   * Translate text using Azure Translator
   */
  async translateWithAzure(text, targetLang, sourceLang = 'en') {
    try {
      const response = await fetch(
        `${TRANSLATION_CONFIG.endpoints.azure}?api-version=3.0&from=${sourceLang}&to=${targetLang}`,
        {
          method: 'POST',
          headers: {
            'Ocp-Apim-Subscription-Key': this.azureKey,
            'Ocp-Apim-Subscription-Region': this.azureRegion,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([{ text }])
        }
      );

      if (!response.ok) {
        throw new Error(`Azure Translator API error: ${response.status}`);
      }

      const data = await response.json();
      return data[0].translations[0].text;
    } catch (error) {
      console.error('Azure Translator error:', error);
      throw error;
    }
  }

  /**
   * Translate text using LibreTranslate (free, open source)
   */
  async translateWithLibre(text, targetLang, sourceLang = 'en') {
    try {
      const response = await fetch(TRANSLATION_CONFIG.endpoints.libre, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: LANGUAGE_MAPPINGS.libre[sourceLang],
          target: LANGUAGE_MAPPINGS.libre[targetLang],
          format: 'text'
        })
      });

      if (!response.ok) {
        throw new Error(`LibreTranslate API error: ${response.status}`);
      }

      const data = await response.json();
      return data.translatedText;
    } catch (error) {
      console.error('LibreTranslate error:', error);
      throw error;
    }
  }

  /**
   * Translate text using MyMemory (free tier available)
   */
  async translateWithMyMemory(text, targetLang, sourceLang = 'en') {
    try {
      const langPair = `${LANGUAGE_MAPPINGS.mymemory[sourceLang]}|${LANGUAGE_MAPPINGS.mymemory[targetLang]}`;
      const response = await fetch(
        `${TRANSLATION_CONFIG.endpoints.mymemory}?q=${encodeURIComponent(text)}&langpair=${langPair}`
      );

      if (!response.ok) {
        throw new Error(`MyMemory API error: ${response.status}`);
      }

      const data = await response.json();
      if (data.responseStatus === 200) {
        return data.responseData.translatedText;
      } else {
        throw new Error('MyMemory translation failed');
      }
    } catch (error) {
      console.error('MyMemory error:', error);
      throw error;
    }
  }

  /**
   * Main translation method with fallback chain
   */
  async translateText(text, targetLang, sourceLang = 'en') {
    // Return original text if target is same as source
    if (targetLang === sourceLang || !text || !text.trim()) {
      return text;
    }

    // Check cache first
    const cacheKey = `${text}|${sourceLang}|${targetLang}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Try different translation providers in order of preference
    const providers = [
      { name: 'libre', method: this.translateWithLibre.bind(this) },
      { name: 'mymemory', method: this.translateWithMyMemory.bind(this) }
    ];

    // Add Google and Azure if API keys are available
    if (this.apiKey) {
      providers.unshift({ name: 'google', method: this.translateWithGoogle.bind(this) });
    }
    if (this.azureKey) {
      providers.unshift({ name: 'azure', method: this.translateWithAzure.bind(this) });
    }

    for (const provider of providers) {
      try {
        // console.log(`Trying translation with ${provider.name}`);
        const translatedText = await provider.method(text, targetLang, sourceLang);
        
        // Cache successful translation
        this.cache.set(cacheKey, translatedText);
        
        return translatedText;
      } catch (error) {
        console.warn(`Translation failed with ${provider.name}:`, error.message);
        continue;
      }
    }

    // If all providers fail, return original text
    console.error('All translation providers failed, returning original text');
    return text;
  }

  /**
   * Batch translate multiple texts
   */
  async translateBatch(texts, targetLang, sourceLang = 'en') {
    const results = [];
    
    // Process in chunks to avoid overwhelming the API
    const chunkSize = 10;
    for (let i = 0; i < texts.length; i += chunkSize) {
      const chunk = texts.slice(i, i + chunkSize);
      const chunkResults = await Promise.all(
        chunk.map(text => this.translateText(text, targetLang, sourceLang))
      );
      results.push(...chunkResults);
    }
    
    return results;
  }

  /**
   * Clear translation cache
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Get supported languages
   */
  getSupportedLanguages() {
    return Object.keys(LANGUAGE_MAPPINGS.libre);
  }
}

// Create singleton instance
const translationService = new TranslationService();

export default translationService;

// Export specific methods for use in API endpoints
export const translateText = (text, targetLang, sourceLang = 'en') => 
  translationService.translateText(text, targetLang, sourceLang);

export const translateBatch = (texts, targetLang, sourceLang = 'en') => 
  translationService.translateBatch(texts, targetLang, sourceLang);

export const clearTranslationCache = () => translationService.clearCache();

export const getSupportedLanguages = () => translationService.getSupportedLanguages();
