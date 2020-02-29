import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from '../Screens/Loading/LoadingScreen';
import RootStackNavigator from './RootStackNavigator';

const AppSwitchNavigator = createSwitchNavigator({
  Loading: {
    screen: LoadingScreen,
  },
  Root: {
    screen: RootStackNavigator,
  },
});

export default createAppContainer(AppSwitchNavigator);
