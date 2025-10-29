import en from './en/translation.json';
import ru from './ru/translation.json';
import az from './az/translation.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  az: { translation: az },
} as const;

export default resources;