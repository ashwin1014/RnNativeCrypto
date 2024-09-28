import common from './locales/en/common.json';
import screens from './locales/en/screens.json';

interface I18nResources {
    common: typeof common;
    screens: typeof screens;
}

export type { I18nResources };
