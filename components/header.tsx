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

const MyHeader = () => {
  const hambergerIcon = <Icon.Button color='black' backgroundColor='white' name='menu' size={40} />;
  const mypageIcon = <Icon.Button name='person-outline'color='black' backgroundColor='white' size={40} ></Icon.Button>
  return (

    <View style={styles.rootContainer}>
      {hambergerIcon}
      <View style= {styles.textContainer}>  
        <Text>Fare Dutch Pay Service</Text>
        <Text style= {styles.largeText}>Fitch Pay</Text>
      </View>
      {mypageIcon}
    </View>

  );
}

const styles = StyleSheet.create({
  rootContainer :{

    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems:'stretch',
    height: 65,
    padding: 5,
  },
  textContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent: "center",
    width:'70%',
    paddingTop: 5
  },

  largeText:{
    fontSize: 30,
    fontWeight: "bold"
  }



});

export default MyHeader ;
