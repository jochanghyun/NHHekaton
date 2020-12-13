import React, { useContext, useState } from 'react';

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
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import Header from './Header';
import NextButton from './smallComponents/NextButton';
import GroupContext from '../context/GroupContext';
import { Value } from 'react-native-reanimated';
import DatePicker from 'react-native-date-picker';

const ServicesSetting: React.FC<any> = ({navigation})=>{
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  
  return(
    <>
      <Header
        navigation={navigation}
        leftIcon='chevron-back'
        mainName='Services'
        secondIcon='home'
      >
      </Header>
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Text style={styles.textGray}>정기결제 서비스 이용료를 매달 개인에게 청구합니다.</Text>
        </View>    
        <View style={styles.dateBox}>
          <Text style={styles.textBlackBold}>시작날짜</Text>
          <DatePicker
            date={startDate}
            onDateChange={setStartDate}
          ></DatePicker>
        </View>
        <View style={styles.dateBox}> 
          <Text style={styles.textBlackBold}>끝나는날짜</Text>
          <DatePicker
            date={endDate}
            onDateChange={setEndDate}
          ></DatePicker>
        </View>
        <NextButton
          navigation={navigation}
          nextView='Home'
          buttonText='완료'
        ></NextButton>
      </View>
      
    
    </>
  )

}

const styles = StyleSheet.create({
  container:{
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    backgroundColor:'white',
    alignItems:'center'
  },
  textGray:{
    fontFamily:'GmarketSansTTFBold',
    color:'gray',

  },
  topBox:{
    borderColor:'gray',
    borderBottomWidth:2,
    width:'80%',
    paddingTop:15,
    paddingBottom:15,
  },
  dateBox:{
    marginTop:10,
    alignItems:'center',
    marginBottom:10,
    
  },
  textBlackBold:{
    fontSize:20,
    fontFamily:'GmarketSansTTFBold'
  }

})

export default ServicesSetting;