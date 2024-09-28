const INTL_NAMESPACE = {
    COMMON: 'common',
    SCREENS: 'screens',
} as const;

const resources = {
    en: {
        [INTL_NAMESPACE.COMMON]: require('./locales/en/common.json'),
        [INTL_NAMESPACE.SCREENS]: require('./locales/en/screens.json'),
    },
    es: {
        [INTL_NAMESPACE.COMMON]: require('./locales/es/common.json'),
        [INTL_NAMESPACE.SCREENS]: require('./locales/es/screens.json'),
    },
} as const;

export { INTL_NAMESPACE, resources };
