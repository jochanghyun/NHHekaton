import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {NextButtonProps} from '../../type';
const NextButton :React.FC<NextButtonProps> = ({navigation,nextView}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.push(nextView)}
      >
        <Text style={styles.nextBtnText}>다음</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
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

});

export default NextButton;