import React, { ComponentProps } from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

type FeatherIconProps = Omit<ComponentProps<typeof FeatherIcon>, 'name'>;

const HomeIcon = (props: FeatherIconProps) => {
  return <FeatherIcon name="home" size={24} color="black" {...props} />;
};

const PortfolioIcon = (props: FeatherIconProps) => {
  return <FeatherIcon name="pie-chart" size={24} color="black" {...props} />;
};

const SettingsIcon = (props: FeatherIconProps) => {
  return <FeatherIcon name="settings" size={24} color="black" {...props} />;
};

export { HomeIcon, PortfolioIcon, SettingsIcon };
