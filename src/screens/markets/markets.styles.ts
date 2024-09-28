import { createStyleSheet } from 'react-native-unistyles';

const marketStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.appBackground,
  },
}));

export default marketStyles;
