import { createStyleSheet } from 'react-native-unistyles';
import { GUTTERS } from '../../theme/constants';

const marketStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.appBackground,
    paddingHorizontal: GUTTERS.md,
  },
  tableHeaderContainer: {
    flexDirection: 'row',
    marginBottom: GUTTERS.xs,
  },
  priceChangeBadge: (isNegative: boolean) => ({
    borderRadius: 5,
    height: 30,
    backgroundColor: isNegative ? theme.errorBadge : theme.successBadge,
    justifyContent: 'center',
    alignItems: 'center',
  }),
}));

export default marketStyles;
