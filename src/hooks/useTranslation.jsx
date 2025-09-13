import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import translationService from '../services/translationService';

/**
 * Custom hook for translating text
 */
export const useTranslate = () => {
  const { currentLanguage } = useTranslation();
  
  const translate = async (text, targetLang = currentLanguage) => {
    if (!text || targetLang === 'en') return text;
    
    try {
      return await translationService.translateText(text, targetLang);
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  const translateBatch = async (texts, targetLang = currentLanguage) => {
    if (!texts || texts.length === 0 || targetLang === 'en') return texts;
    
    try {
      return await translationService.translateBatch(texts, targetLang);
    } catch (error) {
      console.error('Batch translation error:', error);
      return texts;
    }
  };

  return { translate, translateBatch, currentLanguage };
};

/**
 * Translation component that automatically translates its children
 */
export const T = ({ 
  children, 
  fallback = null, 
  className = '', 
  tag: Tag = 'span',
  ...props 
}) => {
  const { currentLanguage } = useTranslation();
  const [translatedText, setTranslatedText] = useState(children);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const translateContent = async () => {
      if (!children || typeof children !== 'string' || currentLanguage === 'en') {
        setTranslatedText(children);
        return;
      }

      setIsLoading(true);
      try {
        const translated = await translationService.translateText(children, currentLanguage);
        setTranslatedText(translated);
      } catch (error) {
        console.error('Translation error in T component:', error);
        setTranslatedText(children); // Fallback to original text
      } finally {
        setIsLoading(false);
      }
    };

    translateContent();
  }, [children, currentLanguage]);

  if (isLoading && fallback) {
    return fallback;
  }

  return (
    <Tag className={className} {...props}>
      {translatedText}
    </Tag>
  );
};

/**
 * Hook for translating dynamic content with loading state
 */
export const useTranslatedText = (text, targetLang = null) => {
  const { currentLanguage } = useTranslation();
  const [translatedText, setTranslatedText] = useState(text);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const lang = targetLang || currentLanguage;

  useEffect(() => {
    const translateText = async () => {
      if (!text || typeof text !== 'string' || lang === 'en') {
        setTranslatedText(text);
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        const translated = await translationService.translateText(text, lang);
        setTranslatedText(translated);
      } catch (err) {
        console.error('Translation error:', err);
        setError(err);
        setTranslatedText(text); // Fallback to original text
      } finally {
        setIsLoading(false);
      }
    };

    translateText();
  }, [text, lang]);

  return { translatedText, isLoading, error };
};

/**
 * Hook for translating arrays of text
 */
export const useTranslatedArray = (textArray, targetLang = null) => {
  const { currentLanguage } = useTranslation();
  const [translatedArray, setTranslatedArray] = useState(textArray);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const lang = targetLang || currentLanguage;

  useEffect(() => {
    const translateArray = async () => {
      if (!textArray || !Array.isArray(textArray) || lang === 'en') {
        setTranslatedArray(textArray);
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        const translated = await translationService.translateBatch(textArray, lang);
        setTranslatedArray(translated);
      } catch (err) {
        console.error('Batch translation error:', err);
        setError(err);
        setTranslatedArray(textArray); // Fallback to original array
      } finally {
        setIsLoading(false);
      }
    };

    translateArray();
  }, [textArray, lang]);

  return { translatedArray, isLoading, error };
};

/**
 * Higher-order component to add translation capabilities
 */
export const withTranslation = (WrappedComponent) => {
  return function TranslatedComponent(props) {
    const translationContext = useTranslation();
    const { translate, translateBatch } = useTranslate();

    return (
      <WrappedComponent
        {...props}
        translation={translationContext}
        translate={translate}
        translateBatch={translateBatch}
      />
    );
  };
};

/**
 * Component for loading state during translation
 */
export const TranslationLoader = ({ className = '', size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      <span className="ml-2 text-sm text-gray-500">Translating...</span>
    </div>
  );
};

/**
 * Debug component to show translation status
 */
export const TranslationDebug = () => {
  const { currentLanguage, supportedLanguages } = useTranslation();
  
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
      <div>Current Language: {currentLanguage}</div>
      <div>Supported: {supportedLanguages.map(l => l.code).join(', ')}</div>
    </div>
  );
};
