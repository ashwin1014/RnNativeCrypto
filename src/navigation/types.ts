import { ComponentProps } from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import {
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
  type RouteProp,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import { MAIN_STACK, BOTTOM_TABS_STACK, PORTFOLIO_TABS_STACK, MARKETS_TABS_STACK } from '../constants';

type CreateNavigationParams<
  ScreenEnum extends string,
  ExtensionType extends Partial<Record<ScreenEnum, unknown>>,
> = {
  [K in ScreenEnum | keyof ExtensionType]: K extends keyof ExtensionType
    ? ExtensionType[K]
    : undefined;
};

/**
 * * https://reactnavigation.org/docs/typescript/#organizing-types
 */

type TabNavigationParamsList = CreateNavigationParams<
  BOTTOM_TABS_STACK,
  {}
>;

type NavigationParamList = CreateNavigationParams<
  MAIN_STACK,
  {
    [MAIN_STACK.MAIN]?: NavigatorScreenParams<TabNavigationParamsList>;
  }
>;

type PortfolioTabNavigationParamsList = CreateNavigationParams<PORTFOLIO_TABS_STACK, {}>;

type MarketsTabNavigationParamsList = CreateNavigationParams<MARKETS_TABS_STACK, {}>;

type RootRouteProps<RouteName extends keyof NavigationParamList> = RouteProp<
  NavigationParamList,
  RouteName
>;

type NavigationProps = Partial<ComponentProps<typeof NavigationContainer>>;

type RootStackScreenProps<T extends keyof NavigationParamList> = StackScreenProps<
  NavigationParamList,
  T
>;

type MarketsTabScreenProps<T extends keyof TabNavigationParamsList> = CompositeScreenProps<
  BottomTabScreenProps<TabNavigationParamsList, T>,
  RootStackScreenProps<keyof NavigationParamList>
>;

type PortfolioScreenProps<T extends keyof PortfolioTabNavigationParamsList> = CompositeScreenProps<
  MaterialTopTabScreenProps<PortfolioTabNavigationParamsList, T>,
  RootStackScreenProps<keyof NavigationParamList>
>;

export type {
    NavigationParamList,
    TabNavigationParamsList,
    PortfolioTabNavigationParamsList,
    MarketsTabNavigationParamsList,
    RootRouteProps,
    NavigationProps,
    RootStackScreenProps,
    MarketsTabScreenProps,
    PortfolioScreenProps,
};
