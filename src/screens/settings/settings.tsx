import React, { memo } from 'react';

import { View } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import settingsStyles from './settings.styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../constants';
import { ColorScheme } from '../../theme/constants';
import { Switch, Text } from '../../components';
import { INTL_NAMESPACE } from '../../i18n/constants';

const ThemeSwitch = memo(() => {
  const { t } = useTranslation([INTL_NAMESPACE.COMMON, INTL_NAMESPACE.SCREENS]);

  const { styles } = useStyles(settingsStyles);
  const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.THEME, ColorScheme.DARK);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === ColorScheme.DARK ? ColorScheme.LIGHT : ColorScheme.DARK));
    UnistylesRuntime.setTheme(theme === ColorScheme.DARK ? ColorScheme.LIGHT : ColorScheme.DARK);
  };

  return (
     <View style={styles.section}>
        <Text variant="subtitle">{t('common:theme')}</Text>
        <View style={styles.switchContainer}>
          <Text variant="body">{t('screens:light')}</Text>
          <Switch value={theme === ColorScheme.DARK} onValueChange={handleThemeChange} />
          <Text variant="body">{t('screens:dark')}</Text>
        </View>
      </View>
  );
});

const LanguageSwitch = memo(() => {
  const { t, i18n } = useTranslation([INTL_NAMESPACE.COMMON, INTL_NAMESPACE.SCREENS]);

  const { styles } = useStyles(settingsStyles);
  const [language] = useLocalStorage(STORAGE_KEYS.LANGUAGE, 'en');

  const handleLanguageChange = () => {
    i18n.changeLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <View style={styles.section}>
      <Text variant="subtitle">{t('common:language')}</Text>
      <View style={styles.switchContainer}>
        <Text variant="body">{t('screens:spanish')}</Text>
        <Switch value={language === 'en'} onValueChange={handleLanguageChange} />
        <Text variant="body">{t('screens:english')}</Text>
      </View>
    </View>
  );
});

const Settings = () => {
  const { styles } = useStyles(settingsStyles);
  const { t } = useTranslation([INTL_NAMESPACE.COMMON]);

  return (
    <View style={styles.container}>
      <Text variant="title">{t('common:tabs.settings')}</Text>
      <ThemeSwitch />
      <LanguageSwitch />
    </View>
  );
};

export default Settings;
