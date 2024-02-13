import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native-stack';
import Colors from '../../constants/Colors';
import { saveLoginSessionDetails, getLogionSessionDetails } from '../../utils/LocalStorage';
import { PreferencesKeys } from '../../utils/preferences/PreferenceKeys';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../reducers/JTLoginSlice';

const SplashScreen = ({navigation}) =>{
    const dispatch = useDispatch()
    const user = useSelector( state => state.loginDetails)
    useEffect(() =>{
        setTimeout(async () => {
           getloginDetails()
        }, 3000);
    }, [] )
    const getloginDetails = async()=>{
        let accessToken = await getLogionSessionDetails();
        if(accessToken !== "" || accessToken !== undefined){
            dispatch(loginStart())
            dispatch(loginSuccess(accessToken.authToken))
            navigation.navigate('bottomtabs');
        } else {
            dispatch(loginFailure((error)=> error.message))
            navigation.navigate('login');
        }
    }

    console.log(user,"userrrrrrrrrrr");


    return (
        <View style= {styles.container}>
            <Text style= {styles.fanfun}>FanFun</Text>
        </View>
    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },   
    fanfun: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})