
import React,{useContext, useEffect, useMemo, useState,useRef} from 'react';
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
import { GroupMettingProps,selectedGroupProps } from '../type';
import { TextInput } from 'react-native-gesture-handler';
import  ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import { loadOptions } from '@babel/core';
import { launchCamera,CameraOptions} from 'react-native-image-picker';
import StyleContext from '../context/StyleContext';

const Home: React.FC<any> = ({ navigation }) => {
  const [dataList,setDataList] = useState([
    {
    groupName:'다치패M',
    groupType:'Meeting',
    members:[
      {name:'정민석',time:'12월 11일 오후 08:20'},
      {name:'한의석',time:'12월 11일 오후 08:22'},
      {name:'조창현',time:'12월 11일 오후 08:35'},
    ],
    startTime : moment().format('LLL'),
    },
  {
    groupName:'다치패S',
    groupType:'Service',
    members:[
      {name:'김건희',time:'12월 11일 오후 08:20'},
      {name:'임은범',time:'12월 11일 오후 08:20'},
      {name:'정민석',time:'12월 11일 오후 09:00'},
      {name:'조창현',time:'12월 11일 오후 10:00'},
      {name:'한의석',time:'12월 11일 오후 10:10'}
    ],
    startTime : moment().format('LLL'),
    },
    {
      groupName:'다치패G',
      groupType:'Goods',
      members:[
        {name:'김건희',time:'12월 11일 오후 08:20'},
        {name:'임은범',time:'12월 11일 오후 08:20'},
        {name:'정민석',time:'12월 11일 오후 09:00'},
        {name:'조창현',time:'12월 11일 오후 10:00'},
        {name:'한의석',time:'12월 11일 오후 10:10'}
      ],
      startTime : moment().format('LLL'),
      },  
  
  ]);
  
  const [modalVisible,setModalVisible] = useState<boolean>(false);
  const [selectedGroup, setSelectedGtoup] = useState<selectedGroupProps>(dataList[0]);
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if(hasPermission){
      return true;
    }
  }
  const styles = useContext(StyleContext);
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
  
  const MyGroup = ()=>{
    
    return(
    <>
      <View style={{borderRadius:10, backgroundColor:'#98BB97'}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.groupContainer}
          showsHorizontalScrollIndicator={true}
          scrollIndicatorInsets={{top:100,bottom:100 ,right:100,left:1}}
        >
          
          <View style={styles.groupIcon}>
            <TouchableOpacity 
              style={{alignItems:'center'}}
              onPress={()=>{navigation.push('AddGroup')}}      
            >
              <Ionicons name='md-person-add' size={40} color='green'></Ionicons>
              <Text style={{fontSize:15, fontFamily:'GmarketSansTTFMedium'}}>모임추가하기</Text>
            </TouchableOpacity>
          </View>

          {dataList.map((element,index)=>
              <TouchableOpacity key={index} style={styles.groupItems} onPress={()=>navigation.push(element.groupType)}>
                <View style={styles.leftContainer}>
                  <Ionicons name='person-circle-outline' size={50} color="green"></Ionicons>
                  <Text style={{fontFamily:"GmarketSansTTFMedium",fontSize:15}}>{element.groupName}</Text>
                </View>
                <View >
                  <Text style={{fontFamily:"GmarketSansTTFMedium",fontSize:18}}>{element.groupType}</Text>
                  <Text></Text>
                  <Text style={{fontFamily:'GmarketSansTTFMedium'}}>  시작 일시</Text>
                  <Text style={{fontFamily:'GmarketSansTTFMedium', fontSize:10}}>    {element.startTime}</Text>
                </View>
              </TouchableOpacity>
            )}

        </ScrollView>
      </View>
    
    </>
    )
  }
  

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
          {navigation.canGoBack() ? <MyGroup></MyGroup>:LoginJoin}
        </View>
      </ScrollView>
    </>

  );
};



export default Home;