import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from './src/App';
import {name as appName} from './app.json';

MaterialCommunityIcons.loadFont();

AppRegistry.registerComponent(appName, () => App);
