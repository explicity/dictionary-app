import { AppRegistry } from 'react-native';
import Orientation from 'react-native-orientation';

import App from './src/App';
import { name as appName } from './app.json';

Orientation.lockToPortrait();

AppRegistry.registerComponent(appName, () => App);
