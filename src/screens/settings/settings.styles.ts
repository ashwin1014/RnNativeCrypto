import { createStyleSheet } from 'react-native-unistyles';
import { GUTTERS } from '../../theme/constants';

const settingsStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.appBackground,
    padding: GUTTERS.md,
  },
  section: {
    backgroundColor: theme.infoBackground,
    padding: GUTTERS.md,
    borderRadius: GUTTERS.sm,
    marginTop: GUTTERS.md,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: GUTTERS.sm,
  },
}));

export default settingsStyles;
