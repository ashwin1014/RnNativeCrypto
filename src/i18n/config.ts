import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './constants';

const { languageDetectorPlugin } = require('./languageDetectorPlugin');

i18n
  .use(languageDetectorPlugin)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    react: {
      useSuspense: false,
    },
    resources,
    debug: __DEV__,
  });

export default i18n;
