import { I18nResources } from '../i18n/types';

declare module 'i18next' {
    interface CustomTypeOptions {
      resources: I18nResources;
    }
}
