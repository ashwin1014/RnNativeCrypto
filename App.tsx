import 'react-native-reanimated';

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { enableFreeze } from 'react-native-screens';
import ErrorBoundary from 'react-native-error-boundary';
import { useInitialTheme, createStyleSheet, useStyles } from 'react-native-unistyles';

import AppNavigator from './src/navigation/app-navigator';
import { ColorScheme } from './src/theme/constants';
import { STORAGE_KEYS } from './src/constants';
import useLocalStorage from './src/hooks/useLocalStorage';
import { View } from 'react-native';

import './src/i18n/config';

enableFreeze(true);

const errorHandler = (error: Error, stackTrace: string) => {
  console.log('Error: ', error);
  console.log('Stack Trace: ', stackTrace);
};

const themedStyles = createStyleSheet((theme, rt) => ({
  container: {
    backgroundColor: theme.appBackground,
    flex: 1,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left,
    paddingRight: rt.insets.right,
    paddingTop: rt.insets.top,
  },
  gestureRoot: {
    flex: 1,
    flexGrow: 1,
  },
}));

const App = () => {
  const [colorScheme] = useLocalStorage(STORAGE_KEYS.THEME, ColorScheme.DARK);

  useInitialTheme(colorScheme);

  const { styles } = useStyles(themedStyles);

  return (
    <View style={styles.container}>
      <ErrorBoundary onError={errorHandler}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView style={styles.gestureRoot}>
              <AppNavigator />
            </GestureHandlerRootView>
          </SafeAreaProvider>
      </ErrorBoundary>
    </View>
  );
};

export default App;
