import React from 'react';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import MainStack from './main-stack';

const AppNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
