import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'
export const styles = StyleSheet.create({
    exploreBtn:{
    backgroundColor:"lightgray",
    paddingVertical: 5,
    paddingHorizontal: 13,
    alignSelf: 'flex-start',
    borderRadius: 50,
    marginHorizontal:4,
    marginTop: 12,
    },
    btnContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginBottom:5,
    },
    actorDetailsContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        marginVertical:5,
        borderRadius:10,
        gap:20,
        padding:7
        
    },
    actorImage:{
        width:90,
        height:70,
        borderRadius:10
    },
    starIcon:{
        position:"absolute",
        right:20
    },
    active:{
        backgroundColor:Colors.primaryPink
    }
})