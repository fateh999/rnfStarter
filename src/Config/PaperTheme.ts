import {DefaultTheme} from 'react-native-paper';
import AppTheme from './AppTheme';

const PaperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: AppTheme.color.primary,
    error: AppTheme.color.danger,
  },
};

export default PaperTheme;
