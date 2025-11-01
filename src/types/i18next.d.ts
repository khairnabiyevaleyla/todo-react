import resources from '../i18n/resources';
import { defaultNS } from '../i18n/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}