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
} from 'react-native';

import Header from './Header';



const Home : React.FC<any> = ({navigation})=>{
  return(
    <>
      <Header
        mainName='더치페이'
        leftIcon='chevron-back'
        secondIcon='home'
        navigation={navigation}
      >
      </Header>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer} >
          <Image
            style={styles.imageBox}
            source={{
              uri :'https://blogpfthumb-phinf.pstatic.net/MjAyMDA2MTRfMTU1/MDAxNTkyMTA5OTE3NzM1.Rmn8TO8-pg4OWMA1MRmAXUE9pot3QW9C8uULYZLT-SEg.ayfEKi7DCVT8mxaJHeJLuYzTzfsvXczXQaM3ewkbD2gg.PNG.heyggun/profileImage.png',
            }}
          ></Image>
        </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>소개멘트</Text>
          </View>    
          <View style={styles.bar}>
            <Text></Text>
          </View>
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push('SignUp')}
            
          >
            <Text style={styles.btnText}>로그인하러가기</Text>
          </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow :1,
    width: '100%',
    backgroundColor: 'white',
  },
  imageBox:{
    marginTop: 30,
    marginBottom: 20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '80%',
    height:300,
    backgroundColor:'white'
  },
  imageContainer:{

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    backgroundColor:'white'
  },
  bar:{
    backgroundColor:'#2DA64C',
    height:50,
    marginTop:20,
  },
  text:{
    fontSize:20,
    padding:12,
    color:'gray',
    fontFamily: 'GmarketSansTTFMedium',
    paddingLeft:'30%',
    paddingRight:'30%',
    borderStyle: "solid",
    borderColor: 'gray',
    borderWidth: 1,
  },
  textBox:{
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  btnText:{
    fontSize:20,
    padding:12,
    color:'gray',
    fontFamily: 'GmarketSansTTFMedium'
  }

})

export default Home;