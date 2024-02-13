import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { intrestSuccess } from "../../reducers/JTIntrestSlice";
import { useEffect } from "react";
import JTIntrestService from "../../integrations/JTIntrestService";

const JTInterest =()=>{
    const dispatch=useDispatch();
    const intrestData=useSelector(state => state.intrestDetails);
    // console.log(intrestData,"intrestdataaaaaaa");

    useEffect(() => {
    //   apicall();
        dispatch(JTIntrestService())
    }, [])
    
    const apicall=()=>{
        const obj={name:"intrestJuvarya",userIntrests:["comedy","news"],suggestedInterstes:["cricket","sports","movies"]};
        dispatch(intrestSuccess(obj))
    }

    return (
        <View>
            <Text>Intrest</Text>
            <Text>{intrestData.name}</Text>
        </View>
    )
}

export default JTInterest;