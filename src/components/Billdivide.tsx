import React, { useContext, useEffect, useMemo, useState, useRef } from 'react';
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
  Modal,
  useWindowDimensions,
  Permission,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/ko';
import Header from './Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Value } from 'react-native-reanimated';
import GroupContext from '../context/GroupContext';
import { BilldivideProps, GroupMettingProps, selectedGroupProps } from '../type';
import { TextInput } from 'react-native-gesture-handler';
import NextButton from '../components/smallComponents/NextButton';
import { useRoute } from '@react-navigation/native';

const Billdivide: React.FC<BilldivideProps>=({navigation})=>{
  const route = useRoute();
  
  const dataList = route.name==='ServiceDivide'?
  [
    {name:'조창현',time:'31일', drink:'', total:'5000'},
    {name:'한의석',time:'31일', drink:'', total:'5000'},
    {name:'정민석',time:'31일', drink:'', total:'5000'},
  ]
  :[
    {name:'정민석',time:'4시간 2분', drink:'O', total:'14,410'},
    {name:'김건희',time:'2시간', drink:'O', total:'7,140'},
    {name:'임은범',time:'1시간', drink:'X', total:'2,350'},
    {name:'한의석',time:'5시간 25분', drink:'X', total:'12,730'},
    {name:'조창현',time:'5시간 25분', drink:'O', total:'19,330'},
  ];

  return(
    <>
      <Header
        mainName={route.name==='ServiceDivide'?'Service':'Meeting'}
        leftIcon='chevron-back'
        secondIcon='home'
        navigation={navigation}
      >
      </Header>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <View style={{marginTop:20, marginBottom:30}}>
          <View style={styles.topContainer}>
            <View><Text style={styles.textBlackMeduim}>모임명</Text><Text style={styles.textGreenMeduim}>{route.name==='ServiceDivide'?'다치패S':'다치패M'}</Text></View>
            <View><Text style={styles.textBlackMeduim}>지출금액</Text><Text style={styles.textGreenMeduim}>{route.name==='ServiceDivide'?'15000':'56000'}</Text></View>
            <View><Text style={styles.textGrayMeduim}>{'자세히 보기 >'}</Text></View>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View style={styles.center}>
              <View><Text style={styles.textBlackMeduim}>이름</Text></View>
              {dataList.map((element)=>
                <View><Text style={styles.textBlackMeduim}>{element.name}</Text></View>
              )}
            </View>
             <View style={styles.center}>
              <View><Text style={styles.textBlackMeduim}>시간</Text></View>
              {dataList.map((element)=>
                <View><Text style={styles.textBlackMeduim}>{element.time}</Text></View>
              )}
            </View>
            {route.name==='ServiceDivide'?null:
            <View style={styles.center}>
              <View><Text style={styles.textBlackMeduim}>음주여부</Text></View>
              {dataList.map((element)=>
                <View><Text style={styles.textBlackMeduim}>{element.drink}</Text></View>
              )}
            </View>
            }
            
            <View style={styles.center}>
              <View><Text style={styles.textBlackMeduim}>총액</Text></View>
              {dataList.map((element)=>
                <View><Text style={styles.textBlackMeduim}>{element.total}</Text></View>
              )}
            </View>
          </View>
      
        </View>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{ToastAndroid.show('정구되었습니다',5)}}>
           <NextButton
            navigation={navigation}
            nextView={'Home'}
            buttonText='확인'
            
          ></NextButton>
        </TouchableOpacity>  
      </ScrollView>

    </>
  )

}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor: 'white',
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:40,
  },
  textBlackMeduim:{
    fontSize:16,
    fontFamily:'GmarketSansTTFMedium'
  },
  textGreenMeduim:{
    fontSize:20,
    fontFamily:'GmarketSansTTFBold',
    color:'green'
},
  textGrayMeduim:{
    fontSize:15,
    fontFamily:'GmarketSansTTFBold',
    color:'gray'
  },
  center:{
    alignItems:'center',
    height: 250,
    justifyContent:'space-around'

  }
})


export default Billdivide;