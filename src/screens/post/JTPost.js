import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { postSuccess } from "../../reducers/JTPostSlice";
import { useEffect } from "react";


const JTPost =()=>{

    const dispatch=useDispatch();
    const data=useSelector(state => state.postDetails);
    // console.log(data,"postdataaaaa");

    useEffect(() => {
      apicall();
    }, [])
    

    const apicall = ()=>{
        const obj={name:"hello juvarya",image:"image",category:"software"}
        dispatch(postSuccess(obj))
    }
    


    return (
        <View>
            <Text>Post</Text>
            <Text>{data.name}</Text>
        </View>
    )
}

export default JTPost;