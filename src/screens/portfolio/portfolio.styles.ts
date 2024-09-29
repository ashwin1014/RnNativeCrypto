import { createStyleSheet } from 'react-native-unistyles';
import { GUTTERS } from '../../theme/constants';

const portfolioStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.appBackground,
    paddingHorizontal: GUTTERS.md,
  },
}));

export default portfolioStyles;
