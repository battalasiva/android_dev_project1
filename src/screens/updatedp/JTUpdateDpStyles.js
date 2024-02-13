import { StyleSheet } from "react-native";

import Config from "../../constants/Config";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    mainContainer:{
        marginHorizontal:Config.deviceWidth * 0.02,
        marginVertical:Config.deviceHeight * 0.01
    },
    backIcon:{
        backgroundColor: 'white',
        borderRadius: 50,
        marginLeft: Config.deviceWidth * 0.01,
        marginTop: Config.deviceHeight * 0.004,
        width: Config.deviceWidth * 0.075,
    },
    imageshow:{
        alignItems:"center",
        width: Config.deviceWidth * 0.24,
        height: Config.deviceWidth * 0.24,
        borderRadius:50,
        marginBottom:Config.deviceHeight * 0.008,
    },
    dpImage:{
        width: Config.deviceWidth * 0.23,
        height: Config.deviceWidth * 0.23,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:Colors.primaryPink
    },
    imageviewer:{
        width: Config.deviceWidth * 0.96,
        alignItems:'center',
        justifyContent:'center',
    },
    inputText:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        height: Config.deviceHeight * 0.05,
        marginBottom:Config.deviceHeight * 0.01
    },
    headingCon:{
        color:'black',
    },
    submitBtn:{
        marginRight:Config.deviceWidth * 0.01,
    },
    btnTextColor:{
        color:Colors.primaryPink,
        fontWeight:'bold',
        fontSize:Config.deviceWidth * 0.04,
        
    },
    updateBackContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',    
    },
   
})