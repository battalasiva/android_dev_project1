import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Config from '../../constants/Config';

export const styles = StyleSheet.create({
    exploreContainer:{
        marginHorizontal:Config.deviceWidth*0.02,
        
    },
    serchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
      },
      searchIcon: {
        backgroundColor: Colors.primaryPink,
        padding: 5,
        borderRadius: 50,
      },
      flatListContainer: {
        flexDirection: 'row', 
      },
      imageContainer: {
        marginRight: 10, 
        marginBottom: 10, 
        backgroundColor:"white",
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:10,
      },
      famousActorsContainer:{
        alignItems:"center"
      },

      image: {
        width: 200, 
        height: 120,
        resizeMode: 'cover', 
        borderRadius:10
      },
      nameAnsLikeContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
        // padding:5,
      },
      placeName:{
      
      },
      headingText:{
        fontWeight:"bold",
        color:"black", 
        fontSize:16,
        margin:3
      },
      seeAllContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      },
      seeAllText:{
        color:Colors.primaryPink
      },
      hotelImages:{
        width: 100, 
        height: 80,
        resizeMode: 'cover', 
        borderRadius:10
      },
      hotelText:{
        fontWeight:"600",
        color:"black", 
        fontSize:14,
        margin:5,
        width:68
      },
      actorsImage:{
        width:85,
        height:85,
        borderRadius:80/2
      },
})


