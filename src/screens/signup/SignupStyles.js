import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import Config from '../../constants/Config';

 
export const styles = StyleSheet.create({
  registerContainer: {
      // width :Config.deviceWidth,
      // height:Config.deviceHeight,
      // alignItems:"center",
    //   marginLeft: Config.deviceWidth*0.02,

  },
  formContainer:{
      height: 900,
      marginTop:150
  },
  fields:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
  },
  headerTextContainer:{
      marginLeft: Config.deviceWidth*0.04,
  },
  headerText:{
      fontWeight: 'bold',
      fontSize: 26,
      color: 'black'
  },
  headerParaContainer:{
      marginLeft: Config.deviceWidth*0.04,
      flexDirection: 'row',
      marginTop: 10
  },
  headerPara:{
      color: Colors.primaryGrey
  },
  signupBtn:{
      color: Colors.primaryPink
  },
  inputText: {
      width: 380,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.primaryGrey,
      marginTop: 10
  },
  submitBtn:{
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: Colors.primaryPink,
    //   marginLeft: Config.deviceWidth*0.04,
    //   marginRight: Config.deviceWidth*0.04
  },
  btnTextColor:{
      color: Colors.primaryWhite
  }
});

  