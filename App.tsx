/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Group,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/components/Home'; 
import SignUp from './src/components/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import SignUpDetail from './src/components/SignUpDetail';
import VerifyPhoneNumber from './src/components/VerifyPhoneNumber';
import AddGroup from './src/components/AddGroup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GroupContext from './src/context/GroupContext';
import GroupMeeting from './src/components/GroupMeeting';
import Billdivide from './src/components/Billdivide';
import ServicesSetting from './src/components/ServicesSetting';


declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();


const App = () => {
  const[initializing, setInitializing] = useState(true);
  const [user,setUser]= useState();
  const Groups = useContext(GroupContext);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name='SignUpAccount' component={SignUpDetail} options={{headerShown:false}}/>
          <Stack.Screen name='SignUpCard' component={SignUpDetail} options={{headerShown:false}}/>
          <Stack.Screen name='VerifyPhoneNumber' component={VerifyPhoneNumber} options={{headerShown:false}}/>
          <Stack.Screen name='AddGroup' component={AddGroup} options={{headerShown:false}}/>
          <Stack.Screen name='Service' component={GroupMeeting} options={{headerShown:false}}/>
          <Stack.Screen name='Meeting' component={GroupMeeting} options={{headerShown:false}}/>
          <Stack.Screen name='Goods' component={GroupMeeting} options={{headerShown:false}}/>
          <Stack.Screen name='Billdivide' component={Billdivide} options={{headerShown:false}}/>
          <Stack.Screen name='ServiceDivide' component={Billdivide} options={{headerShown:false}}/>
          <Stack.Screen name='ServicesSetting' component={ServicesSetting} options={{headerShown:false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  
});

export default App;
