import React, { memo, useState } from 'react';

import { View, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { FlashList } from '@shopify/flash-list';

import portfolioStyles from './portfolio.styles';
import { Text } from '../../components';
import commonStyles from '../../theme/common-styles';
import { INTL_NAMESPACE } from '../../i18n/constants';
import { Holding, holdings } from './mock';
import { ScrollView } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/common';

interface PositionCardProps extends Holding {
  onClose: (productId: number) => void;
}


const PositionCard = memo(({ symbol, notional, qty, upnl, onClose, productId }: PositionCardProps) => {
  const { styles } = useStyles(portfolioStyles);
  const { t } = useTranslation([INTL_NAMESPACE.SCREENS]);
  return (
    <View style={styles.holdingsCard}>
    <Text style={styles.positionSymbol}>{symbol}</Text>
    <View style={[commonStyles.flexRow]}>
      <View style={styles.holdingItem}>
        <Text>Notional</Text>
        <Text variant="body">{notional}</Text>
      </View>
      <View style={styles.holdingItem}>
        <Text>Qty</Text>
        <Text variant="body">{qty}</Text>
      </View>
      <View style={styles.holdingItem}>
        <Text>UPNL</Text>
        <Text variant="body">{upnl}</Text>
      </View>
    </View>
    <Pressable onPress={() => onClose(productId)} style={({ pressed }) => styles.closeButton(pressed)}>
      <Text color="error" style={commonStyles.textCenter}>{t('screens:close')}</Text>
    </Pressable>
  </View>
  );
});

const Holdings = () => {

  const { styles } = useStyles(portfolioStyles);

  const [positions, setPositions] = useState<Holding[]>(() => holdings);

  const handleClosePosition = (productId: number) => {
    setPositions(prevPositions => prevPositions.filter(position => position.productId !== productId));
  };

  return (
    <View style={styles.container}>
      <FlashList
          data={positions}
          estimatedItemSize={65}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          renderScrollComponent={ScrollView}
          renderItem={({ item }) => {
            return (
              <PositionCard {...item} onClose={handleClosePosition} />
            );
          }}
          estimatedListSize={{
            height: SCREEN_HEIGHT - 50,
            width: SCREEN_WIDTH - 32,
          }}
          ListEmptyComponent={<Text>No positions</Text>}
        />
    </View>
  );
};

export default Holdings;
