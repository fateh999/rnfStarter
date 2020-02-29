import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppHeaderMain from '../Components/Shared/AppHeader/AppHeaderMain';
import HomeScreen from './../Screens/Home/HomeScreen';
import DetailScreen from '../Screens/Detail/DetailScreen';
import AppHeader from '../Components/Shared/AppHeader/AppHeader';

const RootStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: AppHeaderMain,
        headerTitle: 'Home',
      },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Detail',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export default RootStackNavigator;
