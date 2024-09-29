import { useState } from 'react';

/**
 * Use When u manually need to refetch api
 *
 * @example
 * ```ts
 *   const { refetch } = useProductsQuery(searchQuery);
 *
 *   const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
 * ```
 */
function useRefreshByUser(refetch: () => Promise<unknown>) {
  const [isRefetchingByUser, setIsRefetchingByUser] = useState(false);

  async function refetchByUser() {
    setIsRefetchingByUser(true);

    try {
      await refetch();
    } finally {
      setIsRefetchingByUser(false);
    }
  }

  return {
    isRefetchingByUser,
    refetchByUser,
  };
}

export default useRefreshByUser;
