/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import IsLoginContext from './src/context/LoginContext'
import LoadingContext from './src/context/LoadingContext';

const bind = {
  LoadingContext,
  IsLoginContext,
}
export default bind;

export {
  LoadingContext,
  IsLoginContext
}


AppRegistry.registerComponent(appName, () => App);
