import React from 'react';
import {
  Alert,
  
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

import Header from './Header';


const screenHeight = Dimensions.get('window').height;
const calcIcon = <Icon name='calculator' color={'green'} size={50}></Icon>
const cardIcon = <Icon name='card-outline' color={'green'} size={50}></Icon>

const SignUp : React.FC<any> = ({navigation})=>{
  return(
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Header
          mainName='회원가입'
          leftIcon='chevron-back'
          secondIcon='home'
          navigation={navigation}
        >
        </Header>
        <View style={styles.textContainer}>
          <Text style={styles.textGray}>Verfication Type</Text>
          <View>
            <View style={styles.underLine}></View>
            <Text style={styles.textBlackBold}>연동할 계좌 및 </Text>
          </View>
          <View>
            <View style={styles.underLine}></View>
            <Text style={styles.textBlackBold}>카드를 선택 해주세요 </Text>
          </View>
          
        </View>
      
        <TouchableOpacity style={styles.button}>
          
          <Text style={styles.textGray}>Account Number</Text>
          <Text style={styles.textBlackBoldBtn}>계좌번호 인증 가입</Text>
          <Text style={styles.textGrayBtn}>어느 은행을 사용해도 OK!</Text>
          <View style={styles.icon}>{calcIcon}</View>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button}>

          <Text style={styles.textGray}>Card Number</Text>
          <Text style={styles.textBlackBoldBtn}>신용/체크카드 인증 가입</Text>
          <Text style={styles.textGrayBtn}>어느 카드를 사용해도 OK!</Text>
          <View style={styles.icon}>{cardIcon}</View>
        </TouchableOpacity>

      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow :1,
    width: '100%',
    backgroundColor: 'white',
    alignItems:'center'
  },
  textGray:{
    fontSize:20,
    fontFamily: 'GmarketSansTTFMedium',
    color:'gray',
    paddingBottom:8
  },
  textBlackBold:{
    fontSize:35,
    fontFamily: 'GmarketSansTTFBold',
    color:'black',
    
  },
  textContainer:{

    padding: 25
  },
  button:{
    width:'90%',
    justifyContent:'center',
    padding:30,
    marginBottom: 30,
    backgroundColor:'white',
    shadowColor: "#000000", 
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 }, 
    elevation: 3,
    
  },
  textGrayBtn:{
    fontSize:20,
    fontFamily: 'GmarketSansTTFMedium',
    color:'gray',

  },
  textBlackBoldBtn:{
    fontSize:25,
    fontFamily: 'GmarketSansTTFBold',
    paddingBottom:8,
  },
  icon:{
    position:'absolute',
    right:5,
    bottom :7,
  },
  underLine:{
    backgroundColor:'green',
    width:180,
    height:10,
    position:'absolute',
    top:25,
    opacity:0.3,
   
  }

})

export default SignUp;