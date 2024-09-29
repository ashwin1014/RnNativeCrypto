import { useEffect, useCallback } from 'react';

import { AppState, AppStateStatus } from 'react-native';

/**
 * Tells you if the app is in the foreground or background
 */
function useAppState(onAppStateChange: (status: AppStateStatus) => void) {

  const handleAppStateChange = useCallback(
    (status: AppStateStatus) => {
      onAppStateChange(status);
    },
    [onAppStateChange]
  );

  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      appStateListener?.remove();
    };
  }, [handleAppStateChange]);
}

export default useAppState;
