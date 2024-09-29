// /* eslint-disable @typescript-eslint/default-param-last */
// import { useCallback } from 'react';

// import { useQuery, keepPreviousData } from '@tanstack/react-query';

// import { ContractType, TickerProductsResponse, TickerProduct } from '../../types/products';

// import { PRODUCTS_API } from 'src/constants/endpoints';
// import { CACHE_KEYS } from 'src/constants/queryKeys';
// import { useAxios } from 'src/providers/AxiosProvider';
// import { refetchInterval } from 'src/utility/utils';

// type SortKeys = 'mark_change_24h' | 'funding_rate' | 'oi' | 'volume' | 'oi_value_usd' | 'strike_price';

// interface ProductsTickerRedactedQuery {
//   activeSortKey?: SortKeys;
//   contractType: ContractType | string;
//   filter?: { settlement_time?: string } | { settlement_time?: string[] };
//   pollApi: boolean;
//   sortOrder?: 'ascending' | 'descending';
// }

// // This is done since we are following 'ascending' | 'descending' approach in app
// function getSortOrderKey(sortOrder: 'ascending' | 'descending') {
//   if (sortOrder === 'ascending') {
//     return 'asc';
//   }
//   return 'desc';
// }

// /**
//  * List of live tickers products data for given contract types.
//  *
//  * @param {ContractType} contractType -
//  * Fetches ticker data for given contract type. This also gives all formatted data from BE
//  *
//  * @param {boolean} pollApi - poll ticker api. Default true
//  *
//  * @returns TickerProductsRedactedReturnType
//  */
// function useProductsRedactedTickerQuery({
//   activeSortKey,
//   contractType,
//   filter,
//   pollApi,
//   sortOrder,
// }: ProductsTickerRedactedQuery) {
//   const axios = useAxios();

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const params = {
//     contract_types: contractType,
//     redacted: true,
//     ...(sortOrder ? { order_by: getSortOrderKey(sortOrder) } : {}),
//     ...(activeSortKey ? { sort_by: activeSortKey } : {}),
//     ...filter,
//   };

//   const fetchTicker = useCallback(
//     async (signal: AbortSignal | undefined): Promise<TickerProductsRedactedResponse> => {
//       const { data } = await axios.get<TickerProductsRedactedResponse>(PRODUCTS_API.productsTickerRedacted, {
//         params,
//         signal,
//       });
//       return data;
//     },
//     [axios, params],
//   );

//   return useQuery<TickerProductsRedactedResponse, ErrorType1, TickerProductsRedactedResponse>({
//     placeholderData: keepPreviousData,
//     queryFn: ({ signal }) => fetchTicker(signal),
//     queryKey: [CACHE_KEYS.PRODUCTS_REDACTED_TICKERS, contractType, sortOrder, activeSortKey, filter?.settlement_time],
//     refetchInterval: refetchInterval(pollApi),
//     refetchOnWindowFocus: true,
//   });
// }

// export default useProductsRedactedTickerQuery;
