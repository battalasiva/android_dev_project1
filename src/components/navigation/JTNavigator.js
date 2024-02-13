import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../../screens/splash/SplashScreen';
import Signup from '../../screens/signup/Signup';
import JTLogin from '../../screens/login/JTLogin'
import JTBottomTabs from '../../components/navigation/JTBottomTabs';
import JTFeed from '../../screens/feed/JTFeed';
import JTUserProfile from '../../screens/profile/JTUserProfile';
import JTEachExplore from '../../screens/explore/JTEachExplore';
import SeeAllItems from '../seeAllItems/SeeAllItems';
import JTExploreEachImage from '../../screens/explore/JTExploreEachImage';
import UpdateDPScreen from '../../screens/updatedp/UpdateDPScreen';

const JTNavigator = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='splash'>
            <Stack.Screen name='splash' component={SplashScreen}/>
            <Stack.Screen name='signup' component={Signup}/>
            <Stack.Screen name='login' component={JTLogin}/>         
            <Stack.Screen name='bottomtabs' component={JTBottomTabs}/>
            <Stack.Screen name='feed' component={JTFeed}/>
            <Stack.Screen name='userprofile' component={JTUserProfile}/>
            <Stack.Screen name='eachexplore' component={JTEachExplore}/>
            <Stack.Screen name='seeall' component={SeeAllItems}/>
            <Stack.Screen name='eachimage' component={JTExploreEachImage}/>
            <Stack.Screen name='updatedp' component={UpdateDPScreen}/>
        </Stack.Navigator>
    )
}
export default JTNavigator;
