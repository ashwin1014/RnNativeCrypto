import React from 'react';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import { BOTTOM_TABS_STACK } from '../constants';
import { HomeIcon, PortfolioIcon, SettingsIcon } from '../components/icons';
import Settings from '../screens/settings/settings';
import { INTL_NAMESPACE } from '../i18n/constants';
import MarketsTopTabs from './markets-top-tabs';
import PortfolioTopTabs from './portfolio-top-tabs';


const BottomTabs = createBottomTabNavigator();

const themedStyles = createStyleSheet((theme) => ({
  tabBar: {
    alignItems: 'center',
    backgroundColor: theme.componentBackground,
    borderTopColor: 'transparent',
  },
  wrapper: {
    backgroundColor: theme.appBackground,
    flex: 1,
  },
}));

const BottomTabNavigator = () => {

  const { styles, theme } = useStyles(themedStyles);
  const { t } = useTranslation([INTL_NAMESPACE.COMMON]);
  return (
    <View style={styles.wrapper}>
      <BottomTabs.Navigator
        screenOptions={{ tabBarStyle: styles.tabBar, headerShown: false, lazy: true, freezeOnBlur: true }}
        initialRouteName={BOTTOM_TABS_STACK.MARKETS}
      >
      <BottomTabs.Screen
        name={BOTTOM_TABS_STACK.MARKETS}
        options={{
          tabBarAccessibilityLabel: t('common:tabs.markets'),
          tabBarIcon: HomeIcon,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarActiveTintColor: theme.primary,
          tabBarLabel: t('common:tabs.markets'),
          tabBarTestID: 'MarketsTab',
        }}
        key="MarketsTab"
      >
        {(props) => <MarketsTopTabs key="marketsTab" {...props} />}
      </BottomTabs.Screen>
      <BottomTabs.Screen
        name={BOTTOM_TABS_STACK.PORTFOLIO}
        options={{
          tabBarAccessibilityLabel: t('common:tabs.portfolio'),
          tabBarIcon: PortfolioIcon,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarActiveTintColor: theme.primary,
          tabBarLabel: t('common:tabs.portfolio'),
          tabBarTestID: 'PortfolioTab',
        }}
        key="PortfolioTab"
      >
        {(props) => <PortfolioTopTabs {...props} key={props.route.key} />}
      </BottomTabs.Screen>
      <BottomTabs.Screen
        name={BOTTOM_TABS_STACK.SETTINGS}
        options={{
          tabBarAccessibilityLabel: t('common:tabs.settings'),
          tabBarIcon: SettingsIcon,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarActiveTintColor: theme.primary,
          tabBarLabel: t('common:tabs.settings'),
          tabBarTestID: 'SettingsTab',
        }}
        key="SettingsTab"
      >
        {(props) => <Settings {...props} key={props.route.key} />}
      </BottomTabs.Screen>
    </BottomTabs.Navigator>
    </View>
  );
};

export default BottomTabNavigator;
