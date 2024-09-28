import React from 'react';

import { View } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

import settingsStyles from './settings.styles';
import Text from '../../components/Text';
import useLocalStorage from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../constants';
import { ColorScheme } from '../../theme/constants';
import Switch from '../../components/switch';
import { INTL_NAMESPACE } from '../../i18n/constants';

const Settings = () => {
  const { styles } = useStyles(settingsStyles);
  const { t, i18n } = useTranslation([INTL_NAMESPACE.COMMON]);

  const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.THEME, ColorScheme.DARK);
  const [language] = useLocalStorage(STORAGE_KEYS.LANGUAGE, 'en');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === ColorScheme.DARK ? ColorScheme.LIGHT : ColorScheme.DARK));
    UnistylesRuntime.setTheme(theme === ColorScheme.DARK ? ColorScheme.LIGHT : ColorScheme.DARK);
  };

  const handleLanguageChange = () => {
    i18n.changeLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <View style={styles.container}>
      <Text variant="title">{t('common:tabs.settings')}</Text>

      <View style={styles.section}>
        <Text variant="subtitle">{t('common:theme')}</Text>
        <View style={styles.switchContainer}>
          <Text variant="body">Light</Text>
          <Switch value={theme === ColorScheme.DARK} onValueChange={handleThemeChange} />
          <Text variant="body">Dark</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="subtitle">{t('common:language')}</Text>
        <View style={styles.switchContainer}>
          <Text variant="body">Spanish</Text>
          <Switch value={language === 'en'} onValueChange={handleLanguageChange} />
          <Text variant="body">English</Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
