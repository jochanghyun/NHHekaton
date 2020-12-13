import React,{useState,useEffect} from 'react';
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
  CheckBox,
} from 'react-native';
import Header from './Header';
import RoundCheckbox from 'rn-round-checkbox';
import {  TextInput } from 'react-native-gesture-handler';
import {CustomCheckBoxProps} from '../type'
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyPhoneNumber : React.FC<any> = ({navigation})=>{
 
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [agency, setAgency] = useState<string>('');
  const [isAllChecked, setisAllChecked] = useState<boolean>(false);
  const [isFirstChecked, setisFirstChecked] = useState<boolean>(false);
  const [isSecondChecked, setisSecondChecked] = useState<boolean>(false);
  const [isThirdChecked, setisThirdChecked] = useState<boolean>(false);
  const [isForthChecked, setisForthChecked] = useState<boolean>(false);
  
  const [initailizing, setInitializing] = useState<boolean>(true);
  const [user,setUser] = useState<any>();
  const [code,setCode] = useState<string>('');
  const [confirm,setConfirm] = useState<any>(null);
  
  const CustomCkeckBox : React.FC<CustomCheckBoxProps>= ({isChecked,setIsChecked,size})=>{
    return <RoundCheckbox
      size={size}
      backgroundColor={isChecked ? 'green' : 'gray'}
      onValueChange={() => setIsChecked(!isChecked)}
      checked={true}
    ></RoundCheckbox>;
  }


  async function confirmCode() {
    try{
      await confirm.confirm(code);
    }catch(error){
      ToastAndroid.show('Invalid code.',2);
    }
  }

  useEffect(()=>{
    if(isAllChecked){ 
      setisFirstChecked(true);
      setisSecondChecked(true);
      setisThirdChecked(true);
      setisForthChecked(true);
    }
  },[isAllChecked]);
  
  useEffect(()=>{
    if(isFirstChecked&&isSecondChecked&&isThirdChecked&&isForthChecked){
      setisAllChecked(true);
    }else{
      setisAllChecked(false);
    }
  },[isFirstChecked&&isSecondChecked&&isThirdChecked&&isForthChecked])

  const nextBtnHandler = async()=>{
    await AsyncStorage.setItem('phoneNumber',phoneNumber);
    navigation.push('Home');
  }

  return (
    <>
      <Header
          mainName='회원가입'
          leftIcon='chevron-back'
          secondIcon='home'
          navigation={navigation}
        ></Header>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textGray}>Verify Using Cell Phone Number</Text>
            <View>
              <View style={styles.underLine}></View>
                
              <Text style={styles.textBlackBoldBtn}>휴대폰 본인인증을 </Text>
            </View>
            <Text style={styles.textBlackBoldBtn}>진행해 주세요. </Text>
            <View style={styles.selectTel}>
              <TouchableOpacity 
                style={styles.telbox}
                onPress={()=>setAgency('SKT')}
                ><Text style={agency==='SKT'? [styles.telboxText,styles.greenText]:styles.telboxText}>SKT</Text>
              </TouchableOpacity>
              <TouchableOpacity   
                style={styles.telboxCenter}
                onPress={()=>setAgency('KT')}>
                <Text style={agency==='KT'? [styles.telboxText,styles.greenText]:styles.telboxText}>KT</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.telbox}
                onPress={()=>setAgency('LGU+')}>
                <Text style={agency==='LGU+'? [styles.telboxText,styles.greenText]:styles.telboxText}>LGU+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.phoneInputBox}>
              <TextInput 
                style={styles.phoneNumberFixed}
                editable={false}
                value='010'
              ></TextInput>
              <TextInput 
                style={styles.phoneNumber}
                keyboardType='number-pad'
                value={phoneNumber}
                maxLength={8}
                onChange={(e)=>setPhoneNumber(e.nativeEvent.text)}
                placeholder='[-] 없이 입력'
              ></TextInput>
            </View>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.textBlackMiduim}>본인인증을 위해 약관에 동의 합니다.</Text>
          
          <View style={styles.chackAll}>
            <CustomCkeckBox
              size={30}
              isChecked={isAllChecked}
              setIsChecked={setisAllChecked}
            ></CustomCkeckBox>
            <View style={{marginLeft:15}}>
              <Text style={styles.textBlackMiduim}>전체동의</Text>
            </View>
          </View>
          <View style={styles.detailCheckContainer}>
            <View style={styles.detailCkeck}>
            <CustomCkeckBox
              size={20}
              isChecked={isFirstChecked}
              setIsChecked={setisFirstChecked}
            ></CustomCkeckBox>
              <Text style={styles.textGrayBold}>[필수] 개인정보 수집 · 이용 동의</Text>
            </View>
            <View style={styles.detailCkeck}>
              <CustomCkeckBox
                size={20}
                isChecked={isSecondChecked}
                setIsChecked={setisSecondChecked}
              ></CustomCkeckBox>
              <Text style={styles.textGrayBold}>[필수] 개인정보제공 동의</Text>
            </View>
            <View style={styles.detailCkeck}>
              <CustomCkeckBox
                size={20}
                isChecked={isThirdChecked}
                setIsChecked={setisThirdChecked}
              ></CustomCkeckBox>
              <Text style={styles.textGrayBold}>[필수] 서비스 이용약관 동의</Text>
            </View>
            <View style={styles.detailCkeck}>
              <CustomCkeckBox
                size={20}
                isChecked={isForthChecked}
                setIsChecked={setisForthChecked}
              ></CustomCkeckBox>
              <Text style={styles.textGrayBold}>[필수] 통신사 이용약관 동의</Text>
            </View>
          </View>

        </View>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={()=>nextBtnHandler()}
        >
          <Text style={styles.nextBtnText}>다음</Text>
        </TouchableOpacity>            
        </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor: 'white',
    alignItems:'center',
  },
  textContainer:{
    width:'90%',
    paddingTop: 25,
    
  },
  textGray : 
  {
    fontSize:20,
    fontFamily: 'GmarketSansTTFMedium',
    color:'gray',
    paddingBottom:8
  },
  textBlackBoldBtn:{
    fontSize:25,
    fontFamily: 'GmarketSansTTFBold',
    paddingBottom:8,
  },
  underLine:{
    backgroundColor:'green',
    width:170,
    height:20,
    position:'absolute',
    top:3,
    opacity:0.3, 
  },
  selectTel:{
    marginTop:5,
    width:'100%',
    height: 50,
    borderColor :'gray',
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: 'row',
  },
  telbox:{
    width:'33.3%',
    justifyContent:'center',
    
  },
  telboxCenter:{
    width:'33%',
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderRightWidth:1,
    borderColor: 'gray',
    
  },
  telboxText:{
    textAlign:'center',
    fontFamily: 'GmarketSansTTFBold',
    color:'gray'
  },
  phoneNumberFixed:{
    fontSize:24,
    fontFamily: 'GmarketSansTTFBold',
    color:'black',
    borderBottomColor:'gray',
    borderBottomWidth:3,
    width: 80,
    textAlign:'center',
    padding:5,
  },
  phoneNumber:{
    fontSize:24,
    fontFamily: 'GmarketSansTTFBold',
    color:'black',
    borderBottomColor:'gray',
    borderBottomWidth:3,
    width: 200,
    textAlign:'center',
    padding:5,
  },
  
  phoneInputBox:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:0,
  },
  textBlackMiduim:{
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 20,
  },
  chackAll:{
    marginTop:18,
    borderWidth:3,
    borderColor:'black',
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    
  },
  textGrayBold:{
    fontSize:16,
    fontFamily: 'GmarketSansTTFBold',
    color:'gray',
    marginLeft:8,
  },
  detailCkeck:{
    flexDirection:'row',
    padding:5,
  },
  nextBtnText:{
    color:'white',
    fontSize: 20,
    fontFamily: 'GmarketSansTTFMedium',
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
  detailCheckContainer:{
    borderWidth:2,
    borderTopWidth:0
  },
  greenText:{
    color:'green'
  }
})

export default VerifyPhoneNumber;