/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/components/Home'; 
import SignUp from './src/components/SignUp';
import Header from './src/components/Header';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import SignUpDetail from './src/components/SignUpDetail';
import VerifyPhoneNumber from './src/components/VerifyPhoneNumber';
import AddGroup from './src/components/AddGroup';
declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="AddGroup">
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name='SignUpAccount' component={SignUpDetail} options={{headerShown:false}}/>
          <Stack.Screen name='SignUpCard' component={SignUpDetail} options={{headerShown:false}}/>
          <Stack.Screen name='VerifyPhoneNumber' component={VerifyPhoneNumber} options={{headerShown:false}}/>
          <Stack.Screen name='AddGroup' component={AddGroup} options={{headerShown:false}}></Stack.Screen>
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
