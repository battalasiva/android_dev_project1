import { Text, View } from "react-native"
import { styles } from "../../screens/signup/SignupStyles";
import Colors from "../../constants/Colors";
const JTLogoTitle = () =>{
    return (
        <View style={{marginTop: 10, marginLeft: 12}}>
            <Text style={{fontSize:30, fontWeight:"bold",color:Colors.primaryPink}}>FanFun</Text>
        </View>
    )
}

export default JTLogoTitle;