import { createStyleSheet } from 'react-native-unistyles';
import { GUTTERS } from '../../theme/constants';

const portfolioStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.appBackground,
    padding: GUTTERS.md,
  },
  balancesCard: {
    backgroundColor: theme.infoBackground,
    borderRadius: 16,
    padding: GUTTERS.lg,
  },
  holdingsCard: {
    backgroundColor: theme.componentBackground,
    padding: GUTTERS.sm,
    height: 160,
    width: '100%',
    marginBottom: GUTTERS.sm,
  },
  closeButton: (pressed: boolean) => ({
    padding: GUTTERS.xs,
    backgroundColor: theme.infoBackground,
    borderRadius: 16,
    width: 80,
    marginTop: GUTTERS.xs,
    opacity: pressed ? 0.8 : 1,
  }),
  positionSymbol: {
    marginBottom: GUTTERS.sm,
  },
  holdingItem: {
    flex: 0.3,
  },
}));

export default portfolioStyles;
