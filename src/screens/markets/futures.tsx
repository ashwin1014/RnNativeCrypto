import React from 'react';

import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import marketStyles from './markets.styles';
import Text from '../../components/text';

const Futures = () => {
  const { styles } = useStyles(marketStyles);

  return (
    <View style={styles.container}>
      <Text variant="title">Futures Tab!!</Text>
    </View>
  );
};

export default Futures;
