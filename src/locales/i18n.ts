import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from 'locales/en/translation.json';
import frTranslation from 'locales/fr/translation.json';

export const languages = ['en', 'fr'];

const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['cookie', 'navigator'],
      cookieDomain: `.${typeof window !== 'undefined' ? window.location.hostname : ''}`,
      checkWhitelist: true,
      caches: ['cookie']
    },
    resources,
    ns: ['translation'],
    defaultNS: 'translation',
    load: 'currentOnly',
    whitelist: languages,
    fallbackLng: [languages[0]],
    debug: true
  });

export default i18n;
