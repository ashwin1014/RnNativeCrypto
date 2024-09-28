import React, { useMemo } from 'react';

import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface TextProps extends RNTextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  color?: 'textPrimary' | 'textSecondary' | 'primaryColor'
}

const themedStyles = createStyleSheet((theme) => ({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
  },
  textPrimary: {
    color: theme.textPrimary,
  },
  primaryColor: {
    color: theme.primary,
  },
  textSecondary: {
    color: theme.textSecondary,
  },
}));

const Text = ({ variant = 'body', color = 'textPrimary', style, ...props }: TextProps) => {
  const { styles } = useStyles(themedStyles);


  const combinedStyles = useMemo(() => [
    styles[variant],
    styles[color],
    style,
  ], [styles, variant, color, style]);

  return <RNText {...props} style={combinedStyles} />;
};

export default Text;
