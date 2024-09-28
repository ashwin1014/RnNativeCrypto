import React from 'react';

import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import marketStyles from './markets.styles';
import Text from '../../components/Text';

const Markets = () => {
  const { styles } = useStyles(marketStyles);

  return (
    <View style={styles.container}>
      <Text variant="title">Markets Tab!!</Text>
    </View>
  );
};

export default Markets;
