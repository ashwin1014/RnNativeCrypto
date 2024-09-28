import React from 'react';

import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

const Switch = (props: RNSwitchProps) => {

    const { theme } = useStyles();

  return <RNSwitch trackColor={{ false: theme.textSecondary, true: theme.primary }} thumbColor={theme.primary} {...props} />;
};

export default Switch;
