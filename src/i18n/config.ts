import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

export const defaultNS = 'translation';

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  debug: true,
  defaultNS,
  interpolation: { escapeValue: false },
});

export default i18next;
