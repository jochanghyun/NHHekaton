
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
import { GroupMettingProps, selectedGroupProps } from '../type';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import { loadOptions } from '@babel/core';
import { launchCamera, CameraOptions } from 'react-native-image-picker';
import { BaseRouter, getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';
import NextButton from '../components/smallComponents/NextButton';
const GroupMeeting: React.FC<GroupMettingProps> = ({ navigation }) => {
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

  const lateList = [
    {name:'김건희',time:'12월 11일 오후 09:35',type:'in'},
    {name:'김건희',time:'12월 11일 오후 11:00',type:'out'},
    {name:'임은범',time:'12월 11일 오후 11:20',type:'in'},
    {name:'임은범',time:'12월 12일 오전 12:22',type:'out'},
    
  ];
  const [lateMemberList, setLateMemberList] = useState<Array<any>>([]);

  const route = useRoute();
  const [startTime,setStratTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [image, setImage] = useState<any>();

  const launchCamera = ()=>{
    launchImageLibrary(
      { mediaType: 'photo' },
      (response) => {setImage(response.uri)}
    );
  }
  const startButtonOnpress = ()=>{
    setStratTime('2020년 12월 11일 오후 09:00');
  }
  const endButtonOnpress = async()=>{
    route.name==='Service'? navigation.push('ServiceDivide') :await launchCamera();
    
  }
  
  route.name==='Service'?null:
    useEffect(()=>{
    setTimeout(()=>{
        setLateMemberList(lateList.slice(0,1));
      },3000);
      setTimeout(()=>{
        setLateMemberList(lateList.slice(0,2));
      },10000);
      setTimeout(()=>{
        setLateMemberList(lateList.slice(0,3));
    
      },15000);
      setTimeout(()=>{
        setLateMemberList(lateList.slice(0,4));
      },20000);
      
    },[]);

  useEffect(()=>{
    console.log(image);
  },[image])


  return (
    <>
      <Header
        mainName={route.name}
        leftIcon='chevron-back'
        secondIcon='home'
        navigation={navigation}
      >
      </Header>
      <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', height:'auto', paddingBottom:100, }}>
        {dataList[0].members.map((element, index) =>
          <View key={index} style={styles.groupChatBox}>
            <Text style={styles.chattingText}>{element.name}님이 입장하셨습니다.</Text>
            <Text style={styles.chattingText}>{element.time}</Text>
          </View>
        )}

        {startTime? 
          <View style={{alignItems:'center', margin:10}}>
            <Text style={styles.startText}>모임이 시작되었습니다</Text>
            <Text style={styles.startTimeText}>{startTime}</Text>
          </View>:null}
        {
          lateMemberList.map((element, index) =>
          <View key={index} style={element.type==='in' ?styles.groupChatBox:[styles.groupChatBox,{backgroundColor:"#F6A698"}]}>
            <Text style={styles.chattingText}>{element.name}님이 {element.type==='in'?'입장':'퇴장'}하셨습니다.</Text>
            <Text style={styles.chattingText}>{element.time}</Text>
          </View>
        )}
        {endTime?
           <View style={{alignItems:'center', margin:10}}>
           <Text style={styles.startText}>모임이 종료되었습니다</Text>
           <Text style={styles.startTimeText}>{endTime}</Text>
         </View>:null}
        {image? 
          <>
            <Image style={{width:300,height:300}}
              source={{uri:image}}
            ></Image>
            <NextButton navigation={navigation} nextView='Billdivide' buttonText="나가기"></NextButton>
          </>
        :null}


      </ScrollView>
      <View style={styles.modalUnder}>
        <View>
          <TextInput style={styles.modalTextInput}></TextInput>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => startButtonOnpress()}
          >
            <Ionicons name='caret-forward-circle-outline' size={80} color='#95B891'></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>endButtonOnpress()}
          >
            <Ionicons name='stop-circle-outline' size={80} color='#95B891'></Ionicons>
          </TouchableOpacity>
        </View>
      </View>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',

  },
  imageBox: {
    marginTop: 0,
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: Dimensions.get('window').height / 2,
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
  },
  groupBox: {
    borderRadius: 100,
    backgroundColor: 'red',
    width: 300,
    height: 300
  },
  groupContainer: {
    height: Dimensions.get('window').height * .34,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupItems: {
    width: Dimensions.get('window').width * .7,
    margin: Dimensions.get('window').width * .14,
    height: '60%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray'
  },
  groupIcon: {
    width: Dimensions.get('window').width,

  },
  leftContainer: {
    alignItems: 'center'

  },
  groupChatBox: {
    backgroundColor: '#98BB97',
    width: Dimensions.get('screen').width * .85,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  modalUnder: {
    borderTopWidth: 3,
    borderRadius: 10,
    shadowOpacity: 150,
    height: 200,
    alignItems: 'center'
  },
  modalTextInput: {
    marginTop: 30,
    backgroundColor: '#95B891',
    fontSize: 15,
    height: 40,
    width: Dimensions.get('window').width * .8,
    borderRadius: 10,
  },
  chattingText: {
    fontSize: 10,
    fontFamily: 'GmarketSansTTFMedium'
  },
  startTimeText:{
    fontSize: 15,
    fontFamily: 'GmarketSansTTFBold'
  },
  startText:{
    fontSize: 18,
    fontFamily: 'GmarketSansTTFBold'
  },
  groupChatOutChatBox:{
    backgroundColor: '#F6A698',
    width: Dimensions.get('screen').width * .85,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }

})



export default GroupMeeting;