import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderProps} from '../type';

const Header : React.FC<HeaderProps> =({subName,mainName,leftIcon,secondIcon,navigation}) => {


  const Icon1 = <Icon.Button color='black' backgroundColor='white' name={leftIcon} size={30} onPress={()=>navigation.pop()} />;
  const Icon2 = <Icon.Button name={secondIcon} color='black' backgroundColor='white' size={30} ></Icon.Button>
  const Icon3 = <Icon.Button name='menu' color='black' backgroundColor='white' size={30} onPress={()=>console.log(navigation.pop)} ></Icon.Button>
  
  return (

    <View style={styles.rootContainer}>
      <View style={styles.LeftIconContainer}>
        {Icon1}
      </View>
      <View style= {styles.textContainer}>  
        {subName? <Text>{subName}</Text>:null}
        <Text style= {styles.largeText}>{mainName}</Text>
      </View>
      <View style = {styles.RightIconContainer}>
        {Icon2}
        {Icon3}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  rootContainer :{

    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center',
    height: 65,
    marginBottom: 8,
    padding: 5,
    width: '100%',
    
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
  },
  textContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent: "center",
    paddingBottom: 5,
    paddingTop: 5,
    width:'100%'
  },

  largeText:{
    fontSize: 25,
    color:'gray',
    fontFamily: 'GmarketSansTTFBold'
  },

  RightIconContainer:{
    display:'flex',
    flexDirection: 'row',
    position:'absolute',
    right: 0
  },
  LeftIconContainer:{
    position:'absolute',
    left: 0
  }
});

export default Header ;
