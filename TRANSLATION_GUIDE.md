# Translation System Documentation

## Overview

This translation system provides automatic translation capabilities for the entire application using various translation APIs. It's designed to be easy to use and performant with caching support.

## Features

- **Multiple Translation Providers**: Supports Google Translate, Azure Translator, LibreTranslate, and MyMemory
- **Automatic Fallback**: If one provider fails, it automatically tries the next one
- **Caching**: Translations are cached to improve performance and reduce API calls
- **Context API**: Centralized language management using React Context
- **Easy Integration**: Simple components and hooks for easy integration
- **Offline Support**: Graceful fallback to original text when translation fails

## Quick Start

### 1. Environment Setup

Copy `.env.example` to `.env` and add your API keys:

```bash
# Google Translate API Key (optional)
VITE_GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key_here

# Azure Translator API Key (optional)
VITE_AZURE_TRANSLATOR_KEY=your_azure_translator_key_here
VITE_AZURE_TRANSLATOR_REGION=your_azure_region_here

# Translation Provider (libre is free and doesn't require API key)
VITE_TRANSLATION_PROVIDER=libre
```

### 2. Wrap Your App

The app is already wrapped with `TranslationProvider` in `App.jsx`:

```jsx
import { TranslationProvider } from './contexts/TranslationContext';

function App() {
  return (
    <TranslationProvider>
      <Routes />
    </TranslationProvider>
  );
}
```

### 3. Use Translation Components

#### Basic Text Translation

```jsx
import { T } from '../hooks/useTranslation';

function MyComponent() {
  return (
    <div>
      <h1><T>Welcome to Digital India</T></h1>
      <p><T>Access government services online</T></p>
    </div>
  );
}
```

#### Dynamic Translation with Hooks

```jsx
import { useTranslatedText } from '../hooks/useTranslation';

function DynamicComponent() {
  const { translatedText, isLoading } = useTranslatedText("Dynamic content");
  
  return (
    <div>
      {isLoading ? 'Translating...' : translatedText}
    </div>
  );
}
```

#### Language Selector

```jsx
import { useTranslation } from '../contexts/TranslationContext';

function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useTranslation();
  
  return (
    <select 
      value={currentLanguage} 
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {supportedLanguages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  );
}
```

## Supported Languages

- English (en) 🇬🇧
- Hindi (hi) 🇮🇳
- Malayalam (ml) 🇮🇳
- Bengali (bn) 🇧🇩
- Tamil (ta) 🇮🇳
- Telugu (te) 🇮🇳

## Translation Providers

### 1. LibreTranslate (Default - Free)
- **API Key Required**: No
- **Rate Limit**: Generous free tier
- **Setup**: Works out of the box

### 2. Google Translate
- **API Key Required**: Yes
- **Rate Limit**: Based on your plan
- **Setup**: Add `VITE_GOOGLE_TRANSLATE_API_KEY` to .env

### 3. Azure Translator
- **API Key Required**: Yes
- **Rate Limit**: Based on your plan
- **Setup**: Add `VITE_AZURE_TRANSLATOR_KEY` and `VITE_AZURE_TRANSLATOR_REGION` to .env

### 4. MyMemory
- **API Key Required**: No (has free tier)
- **Rate Limit**: 1000 chars/day free
- **Setup**: Works out of the box

## Components and Hooks

### TranslationContext

Provides translation state and methods:

```jsx
const {
  currentLanguage,        // Current selected language code
  changeLanguage,         // Function to change language
  supportedLanguages,     // Array of supported languages
  getCurrentLanguageInfo  // Get current language info
} = useTranslation();
```

### T Component

Automatic translation wrapper:

```jsx
<T 
  fallback={<Spinner />}    // Optional loading fallback
  className="text-xl"       // Pass through className
  tag="div"                 // HTML tag to render (default: span)
>
  Text to translate
</T>
```

### useTranslatedText Hook

For dynamic content:

```jsx
const { 
  translatedText,    // Translated text
  isLoading,         // Loading state
  error             // Error state
} = useTranslatedText("Text to translate", "target_language");
```

### useTranslatedArray Hook

For arrays of text:

```jsx
const { 
  translatedArray,   // Array of translated texts
  isLoading,         // Loading state
  error             // Error state
} = useTranslatedArray(["Text 1", "Text 2", "Text 3"]);
```

## Performance Optimization

### Caching
- Translations are automatically cached in memory
- Cache key format: \`{text}|{sourceLanguage}|{targetLanguage}\`
- Cache persists until page reload

### Batch Translation
- Use `translateBatch` for multiple texts
- Reduces API calls and improves performance

### Lazy Loading
- Translations happen on-demand when language changes
- Original text is shown immediately, translation loads in background

## Error Handling

The system has robust error handling:

1. **Provider Fallback**: If one translation provider fails, it tries the next
2. **Graceful Degradation**: Shows original text if all providers fail
3. **Cache Fallback**: Uses cached translation if available
4. **Network Resilience**: Handles network errors gracefully

## Debugging

Add `<TranslationDebug />` component in development to see:
- Current language
- Supported languages
- Translation status

## Best Practices

1. **Wrap Static Text**: Use `<T>` component for all static text
2. **Use Hooks for Dynamic Content**: Use `useTranslatedText` for dynamic content
3. **Batch When Possible**: Use `translateBatch` for multiple texts
4. **Provide Fallbacks**: Always provide fallback content for better UX
5. **Test All Languages**: Test your app with different languages
6. **Cache Consideration**: Be mindful of memory usage with large amounts of text

## Examples

Check `src/components/TranslationDemo.jsx` for a complete working example.

## Troubleshooting

### Translation Not Working
1. Check if `TranslationProvider` wraps your app
2. Verify API keys in environment variables
3. Check browser console for errors
4. Ensure text is wrapped with `<T>` component

### Performance Issues
1. Use `translateBatch` for multiple texts
2. Consider implementing lazy loading for large content
3. Monitor cache size and clear if needed

### API Rate Limits
1. Switch to a different provider
2. Implement request throttling
3. Use caching more aggressively

## Contributing

When adding new languages:
1. Update `SUPPORTED_LANGUAGES` in `TranslationContext.jsx`
2. Add language mappings in `translationService.js`
3. Test with the new language

When adding new providers:
1. Add provider configuration to `translationService.js`
2. Implement the provider method
3. Add to the provider fallback chain
