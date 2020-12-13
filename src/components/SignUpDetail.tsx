import React,{useState} from 'react';

import {
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  Modal,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import  Header  from './Header';
import {useRoute} from '@react-navigation/native';
import { State, TextInput } from 'react-native-gesture-handler';
import { SelectModalProps } from '../type';

import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUpDetail : React.FC<any>  = ({navigation})=>{
  const route = useRoute();
  const list = route.name === "SignUpAccount"?  ['농협','국민','신한','우리','하나','카카오','부산','대구','경남','광주','전북','제주','수협']
  :['NH','KB','삼성','신한','우리','하나','롯데','현대','IBK','씨티','SC','수협','대구','부산','경남','광주','전북','제주','산업','K뱅크','카카오','새마을']
  const [firstNumber,setFirstNumber] = useState<string>('');
  const [secondNumber,setSecondNumber] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  
  const nextBtnHandler = async()=>{
    const info = {
      RegisterationNumber : firstNumber+secondNumber,
      AccountNumber : number,
      agentName : modalValue,
    }
    try{
      const jsonValue = JSON.stringify(info);
      await AsyncStorage.setItem('info',jsonValue);
    }catch(e){
      console.error(e);
    }
    navigation.push('VerifyPhoneNumber');
  }
  const RegistrationNumber = (placeholder:string,value:string,setter:Function)=>
    <TextInput
      maxLength={7}
      placeholder={placeholder}
      style={styles.registrationNumber}
      value={value}
      onChange={(e)=>setter(e.nativeEvent.text)}
      keyboardType='number-pad'
    ></TextInput>;
  
  const SelectModal : React.FC<SelectModalProps> = ({list}) =>{
    const modalStyle = StyleSheet.create({
      container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
      },
      paper:{
        position:"absolute",
        width:'100%',
        height:'100%',
        backgroundColor:'gray',
        opacity:.7,
        zIndex:-1,
      },
      btnContainer:{
        width: '80%',
        height: '60%',
        backgroundColor:'white', 
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'5%',
        borderRadius: 10
      },
      button:{
        width: '20%',
        margin: '2.5%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10
      }

    });
    return(
    <Modal
      visible={modalVisible}
      transparent={true}
    >
      <View style={modalStyle.container}>
        <TouchableOpacity style={modalStyle.paper} onPress={()=>setModalVisible(false)}></TouchableOpacity>
        <View style ={modalStyle.btnContainer}>
          {list.map((element)=>
            <TouchableOpacity 
              style={modalStyle.button}
              key={element.toString()}
              onPress={()=>
                {
                setModalValue(element.toString()); setModalVisible(false)
                }}
                >
                <Text>{element}</Text>
            </TouchableOpacity>)}
        </View>
        

      </View>
      
    </Modal>
  )};

  return(
    <>
      <Header
        mainName={'회원가임'}
        leftIcon='chevron-back'
        secondIcon='home'
        navigation={navigation}
      ></Header>
      <ScrollView contentContainerStyle={styles.container}>
        <SelectModal list={list} ></SelectModal>
        <View style={styles.textContainer}>
          <Text style={styles.textGray}>Identity Verfication</Text>
          <View>
            <View style={styles.rowContainer}>
              <View>
                <View style={styles.underLine}></View>
                <Text style={styles.textBlackBoldBtn}>주민번호와 </Text>
              </View>
              <View>
                <View style={styles.underLine}></View>
                <Text style={styles.textBlackBoldBtn}>계좌번호를</Text>
              </View>
            </View>
            <Text style={styles.textBlackBoldBtn}>입력해주세요 </Text>
          </View>
          <Text style ={styles.textGraySmall}>주민번호(Alien Registeration Number)</Text>
          <View style={styles.rowContainerCenter}>
            {RegistrationNumber('앞 6자리',firstNumber,setFirstNumber)}
            <Text style={styles.textGrayBigBold}> - </Text>
            {RegistrationNumber('뒤 6자리',secondNumber,setSecondNumber)}
          </View>
          <Text style ={styles.textGraySmall}>{route.name==='SignUpCard'? '카드명(Card Name)':'은행명(Bank Name)'}</Text>
          <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              editable={false}
              value={modalValue}
            >
            </TextInput>
          </TouchableOpacity>
          <Text style ={styles.textGraySmall}>{route.name==='SignUpCard'? '카드번호(Card Number)':'계좌번호(Account Number)'}</Text>
          <TextInput 
            style={styles.inputText}
            underlineColorAndroid='gray' 
            maxLength={19} 
            keyboardType='number-pad'
            value={number} 
            onChange={(e)=>setNumber(e.nativeEvent.text)}>
          </TextInput>
          <Text style ={styles.textGraySmall}>{route.name==='SignUpCard'? '카드비밀번호 앞자리(Password Number)':'계좌비밀번호 앞자리(Password Number)'}</Text>
          <View style={styles.rowContainer}>
            <TextInput 
              style={styles.passwordInput}
              secureTextEntry={true}
              underlineColorAndroid='gray'
              maxLength={2} 
              keyboardType='number-pad'
              value={password}
              onChange={(e)=>setPassword(e.nativeEvent.text)}>
            </TextInput>
            <Text style={styles.textGraySmall}>**</Text>
            </View>
        </View>

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={()=>nextBtnHandler()}
        >
          <Text style={styles.nextBtnText}>다음</Text>
        </TouchableOpacity>
        {route.name ==='SignUpCard'? <View></View>:null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow :1,
    width: '100%',
    backgroundColor: 'white',
    alignItems:'center'
  },
  textGray : 
  {
    fontSize:20,
    fontFamily: 'GmarketSansTTFMedium',
    color:'gray',
    paddingBottom:8
  },
  underLine:{
    backgroundColor:'green',
    width:95,
    height:20,
    position:'absolute',
    top:3,
    opacity:0.3, 
  },  
  textBlackBoldBtn:{
    fontSize:25,
    fontFamily: 'GmarketSansTTFBold',
    paddingBottom:8,
  },
  textContainer:{
    width:'90%',
    paddingTop: 25,
    
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  rowContainerCenter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  registrationNumber:{
    fontSize:22,
    fontFamily: 'GmarketSansTTFMedium',
    width: 120,
    textAlign:'center',
    padding: 5,
    paddingBottom:0,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    opacity: 0.5
  },
  textGraySmall:{
    fontSize:14,
    paddingLeft: 4,
    fontFamily: 'GmarketSansTTFMedium',
    color:'gray',
    paddingBottom:8,
    marginTop:20,
  },
  textGrayBigBold:{
    fontSize:34,
    fontFamily: 'GmarketSansTTFMedium',
    color:'gray',
    opacity:.7
  },
  passwordInput:{
    width:60,
    textAlign:"center", 
    fontSize: 25,
    fontFamily: 'GmarketSansTTFBold',
    color: 'black',
    marginRight: 10
  },
  nextBtn:{
    width:'80%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 100,
    justifyContent:'center',
    alignItems:'center'
  },
  nextBtnText:{
    color:'white',
    fontSize: 20,
    fontFamily: 'GmarketSansTTFMedium',
  },
  inputText:{
    fontSize: 25,
    fontFamily: 'GmarketSansTTFBold',
    color: 'black',
    paddingLeft:10,
  }
  

});

export default SignUpDetail;
