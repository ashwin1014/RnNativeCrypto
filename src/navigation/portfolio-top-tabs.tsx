import React from 'react';

import {
    createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { INTL_NAMESPACE } from '../i18n/constants';
import { SCREEN_WIDTH } from '../utils/common';
import { PORTFOLIO_TABS_STACK } from '../constants';
import Balances from '../screens/portfolio/balances';
import Holdings from '../screens/portfolio/holdings';

const PortfolioTopTabsNavigator = createMaterialTopTabNavigator();

const themedStyles = createStyleSheet((theme) => ({
    wrapper: {
        backgroundColor: theme.appBackground,
        flex: 1,
    },
    tabBar: {
        backgroundColor: theme.appBackground,
    },
    tabBarIndicator: {
        backgroundColor: 'transparent',
    },
}));


/**
 * Open Issue: React keys must be passed directly to JSX without using spread:
 * https://github.com/react-navigation/react-navigation/issues/11989
 */

const PortfolioTopTabs = () => {
    const { styles, theme } = useStyles(themedStyles);
    const { t } = useTranslation([INTL_NAMESPACE.COMMON]);
    return (
        <View style={styles.wrapper}>
            <PortfolioTopTabsNavigator.Navigator
                renderToHardwareTextureAndroid
                tabBarPosition="top"
                screenOptions={{
                    lazy: true,
                    tabBarStyle: styles.tabBar,
                    tabBarActiveTintColor: theme.primary,
                    tabBarInactiveTintColor: theme.textSecondary,
                    tabBarIndicator: () => null,
                }}
                sceneContainerStyle={styles.wrapper}
                initialLayout={{
                    width: SCREEN_WIDTH,
                }}
            >
                <PortfolioTopTabsNavigator.Screen
                    name={PORTFOLIO_TABS_STACK.BALANCES}
                    options={{
                        tabBarLabel: t('common:tabs.balances'),
                        tabBarTestID: 'PortfolioBalancesTab'   ,
                    }}
                    key="PortfolioBalancesTab"
                >
                    {(props) => <Balances {...props} key={props.route.key} />}
                </PortfolioTopTabsNavigator.Screen>
                <PortfolioTopTabsNavigator.Screen
                    name={PORTFOLIO_TABS_STACK.HOLDINGS}
                    options={{
                        tabBarLabel: t('common:tabs.holdings'),
                        tabBarTestID: 'PortfolioHoldingsTab',
                    }}
                    key="PortfolioHoldingsTab"
                >
                    {(props) => <Holdings {...props} key={props.route.key} />}
                </PortfolioTopTabsNavigator.Screen>
            </PortfolioTopTabsNavigator.Navigator>
        </View>
    );
};

export default PortfolioTopTabs;
