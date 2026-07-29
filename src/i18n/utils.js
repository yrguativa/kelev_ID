import { translations } from './translations.js';

export function t(lang, key) {
  return translations[lang]?.[key] ?? translations['es']?.[key] ?? key;
}

export function getTranslations(lang) {
  const keys = translations[lang] || translations['es'];
  return (key) => keys?.[key] ?? key;
}
