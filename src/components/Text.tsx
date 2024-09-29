import React, { useMemo } from 'react';

import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface TextProps extends RNTextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'caption' | 'label';
  color?: 'textPrimary' | 'textSecondary' | 'primaryColor' | 'error' | 'success';
  truncate?: boolean;
  weight?: 'bold' | 'normal' | 'medium';
}

const themedStyles = createStyleSheet((theme) => ({
  title: {
    fontSize: 24,
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
  label: {
    fontSize: 10,
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
  error: {
    color: theme.error,
  },
  success: {
    color: theme.success,
  },
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal',
  },
  medium: {
    fontWeight: 'medium',
  },
}));

const Text = ({ variant = 'body', color = 'textPrimary', weight = 'normal', style, truncate, ...props }: TextProps) => {
  const { styles } = useStyles(themedStyles);


  const combinedStyles = useMemo(() => [
    styles[variant],
    styles[color],
    styles[weight],
    style,
  ], [styles, variant, color, weight, style]);

  const truncateProps = truncate ? { ellipsizeMode: 'tail' as const, numberOfLines: 1 } : {};

  return <RNText {...truncateProps} {...props} style={combinedStyles} />;
};

export default Text;
