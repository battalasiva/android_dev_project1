import { View , TextInput} from "react-native"

const JTInputText = () =>{
    return(
        <View>
            <TextInput placeholder='Email address' keyboardType='email-address'
                value="" />
        </View>
    )
}