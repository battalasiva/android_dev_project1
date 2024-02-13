import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../constants/Dimensions";

export const styles = StyleSheet.create({
    backIcon:{
        backgroundColor: 'white',
        borderRadius: 50,
        marginLeft: windowWidth * 0.03,
        marginTop: windowHeight * 0.004,
        width: windowWidth * 0.075,
    },
    maintextCon: {
        width: windowWidth * 0.78,
        paddingTop: windowHeight * 0.01,
    },
    mainText: {
        fontSize: 17,
        color: 'black',
        fontWeight: '600',
        textAlign: 'center',
    },
    imageAndFollowersCon:{
        flexDirection:'row',
        marginTop:windowHeight * 0.01,
    },
    dpImageCon:{
        marginLeft: windowWidth * 0.05,
    },
    dpImage:{
        height: windowHeight * 0.10,
        width: windowWidth * 0.20,
        borderRadius:50,
    },
    followersmainCon:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',
       width:windowWidth * 0.75
    },
    numberofposts:{
        fontSize: 17,
        fontWeight:'bold',
        color: 'black',
    },
    postText:{
        color: 'black',
    },
    bioContainer:{
        marginLeft:windowWidth * 0.06,
        marginTop:windowHeight * 0.008,
    },
    bioText:{
        color: 'black',
    },
    shareprofilecon:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:windowHeight * 0.013
    },
    shareProfile:{
        backgroundColor:'#c2bcbc',
        padding:windowWidth * 0.02,
        paddingHorizontal:windowWidth * 0.07,
        borderRadius:10,
        color:'black',
    },
    personicon:{
        backgroundColor:'#c2bcbc',
        padding:windowWidth * 0.01,
        paddingHorizontal:windowWidth * 0.02,
        borderRadius:10,
        color:'black',
    },
    storyHighlightCon:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:windowWidth*0.01
    },
    storyImage:{
        width : windowWidth * 0.16,
        height : windowHeight * 0.08,
        borderRadius: 50,
        marginTop:windowHeight*0.02,
        marginHorizontal:windowWidth*0.02
    },
    storycaption:{
        textAlign: 'center',
        color:'black'
    },
    icons:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop : windowHeight * 0.014,
        marginBottom : windowHeight * 0.005
    },
    imageContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        borderTopColor:'black',
        borderTopWidth:1
    },
    postImage: {
        width: windowWidth * 0.32,
        height: windowHeight * 0.15,
        marginHorizontal:windowWidth * 0.005,
        marginVertical : windowHeight * 0.003,
    },
    readMoreButton:{
        color:'gray',
    }
})