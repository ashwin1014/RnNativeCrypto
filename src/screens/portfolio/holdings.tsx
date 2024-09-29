import React from 'react';

import { View, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';

import portfolioStyles from './portfolio.styles';
import { Text } from '../../components';
import commonStyles from '../../theme/common-styles';
import { INTL_NAMESPACE } from '../../i18n/constants';

const PositionCard = () => {
  const { styles } = useStyles(portfolioStyles);
  const { t } = useTranslation([INTL_NAMESPACE.SCREENS]);
  return (
    <View style={styles.holdingsCard}>
    <Text style={styles.positionSymbol}>ETHUSDT</Text>
    <View style={[commonStyles.flexRow]}>
      <View style={{ flex: 0.3 }}>
        <Text>Notional</Text>
        <Text variant="body">1.2345</Text>
      </View>
      <View style={{ flex: 0.3 }}>
        <Text>Qty</Text>
        <Text variant="body">13</Text>
      </View>
      <View style={{ flex: 0.3 }}>
        <Text>UPNL</Text>
        <Text variant="body">0.23 USDT</Text>
      </View>
    </View>
    <Pressable style={({ pressed }) => styles.closeButton(pressed)}>
      <Text color="error" style={commonStyles.textCenter}>{t('screens:close')}</Text>
    </Pressable>
  </View>
  );
};

const Holdings = () => {

  const { styles } = useStyles(portfolioStyles);

  return (
    <View style={styles.container}>
      <PositionCard />
      <PositionCard />
      <PositionCard />
    </View>
  );
};

export default Holdings;
