import { createContext } from "react";
import {Dimensions, StyleSheet} from 'react-native';

export default createContext(
  StyleSheet.create(
  {
    
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
    height: Dimensions.get('window').height/2,
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
  groupBox:{
    borderRadius: 100,
    backgroundColor:'red',
    width:300,
    height:300
  },
  groupContainer:{
    height: Dimensions.get('window').height*.34,
    flexDirection:'row',
    alignItems:'center',
  },
  groupItems:{
    width :Dimensions.get('window').width*.7,
    margin: Dimensions.get('window').width*.14,
    height : '60%',
    backgroundColor : 'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth:1,
    borderRadius:10,
    borderColor:'gray'
  },
  groupIcon:{
    width :Dimensions.get('window').width,
    
  },
  leftContainer:{
    alignItems:'center'
    
  },
  groupChatBox:{
    backgroundColor:'#98BB97',
    width: Dimensions.get('screen').width*.85,
    height: 40,
    marginTop:10,
    borderRadius: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
  },
  modalUnder:{
    borderTopWidth:3,
    borderRadius:10,
    shadowOpacity:150,
    height:200,
    alignItems:'center'
  },
  modalTextInput:{
    marginTop:30,
    backgroundColor:'#95B891',
    fontSize:15,
    height:40,
    width:Dimensions.get('window').width*.8,
    borderRadius:10,
  },
  chattingText:{
    fontSize:10,
    fontFamily:'GmarketSansTTFMedium'
  }})
);