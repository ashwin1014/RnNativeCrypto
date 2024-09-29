import { useCallback, useRef } from 'react';

import { useFocusEffect } from '@react-navigation/native';

/**
 * Re-fetches api on Screen/Tab Focus
 *
 * @see https://tanstack.com/query/latest/docs/react/react-native#refresh-on-screen-focus
 *
 * @example
 * ```ts
 *   const { refetch } = useProductsQuery(searchQuery);
 *   useRefreshOnFocus(refetch);
 * ```
 */
function useRefreshOnFocus<T>(refetch: (options?: any) => Promise<T>) {
  const firstTimeRef = useRef(true);

  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch])
  );
}

export default useRefreshOnFocus;
