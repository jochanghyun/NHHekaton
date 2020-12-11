import React, { useState } from 'react';

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

const Service: React.FC<any> = ({ navigation }) => {
  const [groupStyle, setGroupStyle] = useState<string>();

  return (
    <>
      <Header
        mainName='모임추가'
        leftIcon='chevron-back'
        secondIcon='home'
        navigation={navigation}
      >
      </Header>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <View style={styles.imageContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.grayMedium}>그룹의 종류를 선택하고, 그룹을 만들어요</Text>
          </View>
          <Image
            style={styles.imageBox}
            source={require('../assets/image/serviceDetail.png')}
            resizeMode={'contain'}
          ></Image>
          <View style={styles.infoContainer}>
            <View style={styles.infoSubContainer}>
              <Text style={styles.textBlackMedium}>그룹 정보 입력하기</Text>
              <TextInput
                style={[styles.grayMedium,]}
                placeholder='그룹 이름 입력'
                underlineColorAndroid='#C5C5C5'
              ></TextInput>
            </View>
            <View style={styles.infoSubContainer}>
              <Text style={styles.textBlackMedium}>그룹 형태 선택하기</Text>
              <Picker
                selectedValue={groupStyle}
                mode={'dialog'}
                style={styles.picker}
                onValueChange={(itemValue) => setGroupStyle(itemValue.toString())}

              >
                <Picker.Item label="Goods" value="Goods"></Picker.Item>
                <Picker.Item label="Service" value="Service"></Picker.Item>
                <Picker.Item label="Meeting" value="Meeting"></Picker.Item>
              </Picker>
            </View>

          </View>
        </View>
        <NextButton
          navigation={navigation}
          nextView={''}>

        </NextButton>

      </ScrollView>

    </>
  )


}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  imageBox: {
    display: 'flex',
    height: Dimensions.get('screen').height / 3,
    width: '100%'
  },
  imageContainer: {
    display: 'flex',
    width: '90%',
    backgroundColor: 'white',
  },
  grayMedium: {
    fontSize: 16,
    fontFamily: 'GmarketSansTTFMedium',
    color: 'gray',
  },
  textContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderRadius: 2,
    borderBottomColor: '#C5C5C5',
    alignItems: 'center'
  },
  infoContainer: {
    borderWidth: 2,
    borderRadius: 14,
    borderColor: '#C5C5C5',
    padding: 15
  },
  textBlackMedium: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'GmarketSansTTFMedium'
  },
  infoSubContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  picker: {
    fontFamily: 'GmarketSansTTFBold',
    color: 'gray',

  },
  pickerItems: {
    color: 'red',
  },


})
export default Service;