/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import marketStyles from './markets.styles';
import { useStyles } from 'react-native-unistyles';
import { Text } from '../../components';
import commonStyles from '../../theme/common-styles';

const TableHeader = ({ isOptions }: { isOptions: boolean }) => {

    const { styles } = useStyles(marketStyles);

  return (
    <View style={styles.tableHeaderContainer}>
        <View style={{ flex: 0.5 }}>
          <Text variant="body" color="textSecondary" weight="bold">
            {isOptions ? 'Contract / OI' : 'Contract'}
          </Text>
        </View>
        <View style={[{flex: 0.27}, commonStyles.flexRow]}>
          <Text variant="body" color="textSecondary" weight="bold">
            Price / Vol.
          </Text>
        </View>
        <View style={[{flex: 0.23}, commonStyles.jcEnd, commonStyles.flexRow]}>
          <Text variant="body" color="textSecondary" style={commonStyles.textRight} weight="bold">
            24h Chg.
          </Text>
        </View>
    </View>
  );
};

export default TableHeader;
