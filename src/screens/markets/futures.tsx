/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';

import marketStyles from './markets.styles';
import Text from '../../components/text';
import { useProductsTickerQuery } from '../../service';
import { ContractType, TickerProductsResponse } from '../../types/products';
import millify from 'millify';
import FuturesTableHeader from './table-header';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/common';
import commonStyles from '../../theme/common-styles';
import useRefreshByUser from '../../hooks/react-query-utils/useRefreshByUser';

const generateFormattedData = (data: TickerProductsResponse['result']) => {

  return data.map((product) => {
    return {
      contractType: product.contract_type,
      dailyPriceChange: product?.mark_change_24h ? millify(Number(product.mark_change_24h), { precision: 2 }) : '-',
      description: product.description!,
      price: product?.close ? millify(Number(product.close), { precision: 2 }) : '-',
      productId: Number(product.product_id),
      rawPrice: product.mark_price,
      rawVolume: product.turnover ?? '-',
      symbol: product.symbol,
      volume: product.turnover_usd ?? '-',
    };
  });
};

const Futures = () => {
  const isFocused = useIsFocused();
  const { styles, theme } = useStyles(marketStyles);

  const { isLoading, data, refetch } = useProductsTickerQuery({
    contractType: `${ContractType.PERPETUAL_FUTURES},${ContractType.FUTURES}`,
    pollApi: isFocused,
  });

  const formattedData = generateFormattedData(data?.result ?? []);

  const { refetchByUser, isRefetchingByUser } = useRefreshByUser(refetch);

  const showLoading = isLoading || isRefetchingByUser;


  return (
    <View style={styles.container}>
      <FuturesTableHeader />
      {
        showLoading ? <ActivityIndicator size="large" color={theme.primary} /> : (
          <FlashList
          data={formattedData}
          estimatedItemSize={65}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          renderScrollComponent={ScrollView}
          renderItem={({ item }) => {

            const isNegative = Number(item.dailyPriceChange) < 0;

            return (
              <View style={[commonStyles.flexRow, { height: 65 }]}>
                <View style={{ flex: 0.5 }}>
                  <Text variant="body" color="textSecondary">
                    {item?.symbol}
                  </Text>
                  <Text variant="caption" color="textSecondary" truncate style={{ maxWidth: 150 }}>
                    {item?.description}
                  </Text>
                </View>
                <View style={[{ flex: 0.27 }]}>
                  <Text variant="body" color="textSecondary" style={commonStyles.textLeft}>
                    {item.price}
                  </Text>
                  <Text variant="caption" color="textSecondary" style={commonStyles.textLeft}>
                    {item.volume}
                  </Text>
                </View>
                <View style={[{ flex: 0.23 }, styles.priceChangeBadge(isNegative), commonStyles.flexRow]}>
                  <Text variant="body" color={isNegative ? 'error' : 'success'} style={commonStyles.textJustify}>
                    {item.dailyPriceChange}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => String(item.productId)}
          estimatedListSize={{
            height: SCREEN_HEIGHT - 50,
            width: SCREEN_WIDTH - 32,
          }}
          refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}
        />
        )
      }
    </View>
  );
};

export default Futures;
