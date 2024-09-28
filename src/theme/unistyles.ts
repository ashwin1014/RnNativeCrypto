import { UnistylesRegistry } from 'react-native-unistyles';

import { DARK_COLORS, LIGHT_COLORS, ColorScheme, breakpoints } from './constants';

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
    [ColorScheme.DARK]: typeof DARK_COLORS;
    [ColorScheme.LIGHT]: typeof LIGHT_COLORS;
  };

declare module 'react-native-unistyles' {
    export interface UnistylesBreakpoints extends AppBreakpoints {}
    export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    [ColorScheme.DARK]: DARK_COLORS,
    [ColorScheme.LIGHT]: LIGHT_COLORS,
  })
  .addConfig({
    adaptiveThemes: false,
    initialTheme: ColorScheme.DARK,
  });
