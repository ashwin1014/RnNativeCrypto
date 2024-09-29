import React from 'react';

import {
    createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { INTL_NAMESPACE } from '../i18n/constants';
import { SCREEN_WIDTH } from '../utils/common';
import { MARKETS_TABS_STACK } from '../constants';
import Futures from '../screens/markets/futures';
import Options from '../screens/markets/options';

const MarketsTopTabsNavigator = createMaterialTopTabNavigator();

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

const MarketsTopTabs = () => {
    const { styles, theme } = useStyles(themedStyles);
    const { t } = useTranslation([INTL_NAMESPACE.COMMON]);
    return (
        <View style={styles.wrapper}>
            <MarketsTopTabsNavigator.Navigator
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
                initialRouteName={MARKETS_TABS_STACK.FUTURES}
            >
                <MarketsTopTabsNavigator.Screen
                    name={MARKETS_TABS_STACK.FUTURES}
                    options={{
                        tabBarLabel: t('common:tabs.futures'),
                        tabBarTestID: 'MarketsFuturesTab'   ,
                    }}
                    key="MarketsFuturesTab"
                >
                    {(props) => <Futures {...props} key={props.route.key} />}
                </MarketsTopTabsNavigator.Screen>
                <MarketsTopTabsNavigator.Screen
                    name={MARKETS_TABS_STACK.OPTIONS}
                    options={{
                        tabBarLabel: t('common:tabs.options'),
                        tabBarTestID: 'MarketsOptionsTab',
                    }}
                    key="MarketsOptionsTab"
                >
                    {(props) => <Options {...props} key={props.route.key} />}
                </MarketsTopTabsNavigator.Screen>
            </MarketsTopTabsNavigator.Navigator>
        </View>
    );
};

export default MarketsTopTabs;
