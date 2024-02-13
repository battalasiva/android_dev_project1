import {StyleSheet, FlatList, Text, View , TouchableOpacity, Image} from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const JTStoryComponent =() =>{

    const DATA = [
        {
          name:'Ajay',
          image:'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
          time:'2h',
          message:'This is really good and close to my heart! Lets comment your thoughts!'
        },
        {
          name:'Rahul',
          image:'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
          time:'1h',
          message:'This is really good and close to my heart! Lets comment your thoughts!'
        },
        {
          name:'Pavan',
          image:'https://images.unsplash.com/photo-1509219411165-3ec3195b4842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
          time:'1h',
          message:'This is really good and close to my heart! Lets comment your thoughts!'
    
        },
        {
          name:'Sai',
          image:'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
          time:'1h',
          message:'This is really good and close to my heart! Lets comment your thoughts!'
    
        },
        {
          name:'Harish',
          image:'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8fHww',
          time:'1h',
          message:'This is really good and close to my heart! Lets comment your thoughts!'
    
        },
        {
          name:'Ganesh',
          image:'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
          time:'3h',
          message:'This is really good and close to my heart! Lets comment your thoughts!'
    
        }
      ]

    return (
        <View style={{ backgroundColor: '#FDFCF6', borderRadius: 10}}>
            <View>
                <FlatList data={DATA} horizontal={true} showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                                <View style={{height:95, flex: 1, alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity>
                                        <Image source={{uri:item.image}} style={styles.statusImages} />
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{left:5, fontSize: 10}}>{item.name.toLowerCase()}</Text>
                                    </View>
                                </View>
                }/>
            </View>
        </View>
    )
}

export default JTStoryComponent;

const styles = StyleSheet.create({
    statusImages:{
        width:55,
        height:55,
        borderRadius:10,
        marginLeft:10,
        marginTop:0,
        borderWidth:1,
    },
    feedIcon: {
        width:40,
        height:40,
        borderRadius:10,
        marginBottom:10,
        marginLeft:10,
        marginTop:5
    },
    feedImages:{
        width:responsiveScreenWidth(100),
        height:responsiveScreenHeight(40),
    }
})