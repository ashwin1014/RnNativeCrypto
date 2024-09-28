import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList } from './types';
import { MAIN_STACK } from '../constants';
import BottomTabNavigator from './bottom-tab-navigator';

const Stack = createNativeStackNavigator<NavigationParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={MAIN_STACK.MAIN}
    >
      <Stack.Screen name={MAIN_STACK.MAIN} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
