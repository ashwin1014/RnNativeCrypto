import React, { useEffect, type ReactNode } from 'react';

import { AppStateStatus } from 'react-native';

import {
  focusManager,
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { DevToolsBubble } from 'react-native-react-query-devtools';

import useOnlineManager from '../hooks/react-query-utils/useOnlineManager';
import useAppState from '../hooks/react-query-utils/useAppState';
import AxiosProvider from './axios-provider';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 180000,
        refetchOnWindowFocus: true,
      },
    },
  });

function onAppStateChange(status: AppStateStatus) {
 focusManager.setFocused(status === 'active');
}

const ServiceProvider = ({ children }: { children: ReactNode }) => {
useOnlineManager();
useAppState(onAppStateChange);

const isOnline = onlineManager.isOnline();

useEffect(() => {
  if (!isOnline) {
    console.log('isOnline', isOnline);
  }
}, [isOnline]);

  return (
    <QueryClientProvider client={queryClient}>
      <AxiosProvider token={undefined}>
        {children}
        {__DEV__ && <DevToolsBubble />}
      </AxiosProvider>
    </QueryClientProvider>
  );
};

export { ServiceProvider, queryClient };
