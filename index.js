/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import IsLoginContext from './src/context/LoginContext'
import LoadingContext from './src/context/LoadingContext';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

//const store = createStore(null,composeWithDevTools(applyMiddleware()));

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
