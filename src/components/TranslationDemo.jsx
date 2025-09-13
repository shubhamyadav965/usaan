import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { T, useTranslatedText, TranslationDebug } from '../hooks/useTranslation';
import Button from '../components/ui/Button';

const TranslationDemo = () => {
  const { currentLanguage, changeLanguage, supportedLanguages } = useTranslation();
  const { translatedText, isLoading } = useTranslatedText("Welcome to our digital services portal");

  const demoTexts = [
    "Government Services",
    "Digital India Initiative", 
    "Citizen Portal",
    "Online Applications",
    "Document Verification",
    "Service Status Tracking"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          <T>Translation System Demo</T>
        </h2>
        <p className="text-gray-600">
          <T>This demo shows how the translation system automatically translates content based on the selected language.</T>
        </p>
      </div>

      {/* Language Selector */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          <T>Select Language:</T>
        </h3>
        <div className="flex flex-wrap gap-3">
          {supportedLanguages.map((language) => (
            <Button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              variant={currentLanguage === language.code ? 'default' : 'outline'}
              className="flex items-center space-x-2"
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Current Language Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <T>Current Language:</T> <strong>{currentLanguage}</strong>
        </p>
      </div>

      {/* Demo Content */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">
            <T>Automatic Translation Examples:</T>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {demoTexts.map((text, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">
                  <T>Original (English):</T>
                </div>
                <div className="text-gray-800 mb-2">{text}</div>
                <div className="text-sm text-gray-500 mb-1">
                  <T>Translated:</T>
                </div>
                <div className="text-blue-600 font-medium">
                  <T>{text}</T>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Translation Example */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-3">
            <T>Dynamic Translation Hook Example:</T>
          </h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">
              <T>Original Text:</T>
            </div>
            <div className="text-gray-800 mb-2">
              "Welcome to our digital services portal"
            </div>
            <div className="text-sm text-gray-500 mb-1">
              <T>Translated Text:</T>
            </div>
            <div className="text-green-600 font-medium">
              {isLoading ? (
                <span className="flex items-center">
                  <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                  <T>Translating...</T>
                </span>
              ) : (
                translatedText
              )}
            </div>
          </div>
        </div>

        {/* Translation Info */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-3">
            <T>How It Works:</T>
          </h3>
          <div className="prose text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <T>Wrap any text with the T component: &lt;T&gt;Your text&lt;/T&gt;</T>
              </li>
              <li>
                <T>Use useTranslatedText hook for dynamic content translation</T>
              </li>
              <li>
                <T>Translation is cached to improve performance</T>
              </li>
              <li>
                <T>Supports multiple translation providers (Google, Azure, LibreTranslate)</T>
              </li>
              <li>
                <T>Automatically falls back to original text if translation fails</T>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Debug Info (Development only) */}
      <TranslationDebug />
    </div>
  );
};

export default TranslationDemo;
