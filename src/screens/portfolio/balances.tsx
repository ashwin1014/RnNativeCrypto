import React from 'react';

import { View } from 'react-native';
import portfolioStyles from './portfolio.styles';
import { useStyles } from 'react-native-unistyles';
import { Text } from '../../components';

const Balances = () => {

  const { styles } = useStyles(portfolioStyles);

  return (
    <View style={styles.container}>
      <View style={styles.balancesCard}>
        <Text variant="subtitle" color="textSecondary">Equity</Text>
        <Text variant="body" color="textPrimary">$512,123.12  <Text variant="caption">~BTC 12.12345678</Text></Text>
      </View>
    </View>
  );
};

export default Balances;
