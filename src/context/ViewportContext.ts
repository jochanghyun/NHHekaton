
import {createContext} from 'react';
import {Dimensions} from 'react-native';
export default createContext({
  
  width: Dimensions.get('window').width,
  height:Dimensions.get('window').height,
})