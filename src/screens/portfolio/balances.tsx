import React from 'react';

import { View } from 'react-native';
import portfolioStyles from './portfolio.styles';
import { useStyles } from 'react-native-unistyles';
import { Text } from '../../components';

const Balances = () => {

  const { styles } = useStyles(portfolioStyles);

  return (
    <View style={styles.container}>
      <Text>Balances Tab!!</Text>
    </View>
  );
};

export default Balances;
