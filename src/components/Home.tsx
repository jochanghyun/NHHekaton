import { transformFile } from '@babel/core';
import React,{useContext, useEffect, useState} from 'react';
import {
  Alert,

  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  Dimensions,

} from 'react-native';

import Header from './Header';
import LoginContext from '../context/LoginContext';



const Home: React.FC<any> = ({ navigation }) => {
  const LoginJoin = 
    <>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('SignUp')}
        >
          <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('SignUp')}
        >
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
    </>
  
  

  return (
    <>
      <Header
        mainName='나누다'
        leftIcon='chevron-back'
        secondIcon='home'
        navigation={navigation}
      >
      </Header>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer} >
          <Image
            style={styles.imageBox}
            source={require('../assets/image/logo.png')}
            resizeMode={'contain'}
  
          ></Image>
        </View>
        <View style={styles.textBox}>
          {LoginJoin}
        </View>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',

  },
  imageBox: {
    marginTop: 30,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: Dimensions.get('window').height/2,
    backgroundColor: 'white',
    
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white'
  },
  bar: {
    backgroundColor: '#2DA64C',
    height: 50,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    padding: 12,
    color: 'gray',
    fontFamily: 'GmarketSansTTFMedium',
    paddingLeft: '30%',
    paddingRight: '30%',
    borderStyle: "solid",
    borderColor: 'gray',
    borderWidth: 1,
  },
  textBox: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    borderRadius: 60,
  },
  btnText: {
    fontSize: 20,
    padding: 12,
    color: 'gray',
    fontFamily: 'GmarketSansTTFMedium'
  }

})

export default Home;