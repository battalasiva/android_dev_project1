import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JTFeed from '../../screens/feed/JTFeed';
import Icon from 'react-native-vector-icons/FontAwesome';
import JTExplore from "../../screens/explore/JTExplore";
import JTProfile from "../../screens/profile/JTProfile";
import JTInterest from "../../screens/interest/JTInterest";
import JTPost from "../../screens/post/JTPost";
import Colors from "../../constants/Colors";

const JTBottomTabs = () =>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown: false}} >
            <Tab.Screen name="feed" component={JTFeed} options={{ tabBarLabel: 'Feed' , tabBarIcon: ({color, size, focused}) => (
                <Icon name="feed" size={30}   color= {focused ? Colors.primaryPink : Colors.primaryGrey}/>
            )}}/>
            <Tab.Screen name="explore" component={JTExplore} options={{ tabBarLabel: 'Explore' , tabBarIcon: ({color, size, focused}) => (
                <Icon name="search" size={27} color= {focused ? Colors.primaryPink : Colors.primaryGrey}/>
            )}}/>
            <Tab.Screen name="post" component={JTPost} options={{ tabBarLabel: 'Explore' , tabBarIcon: ({color, size, focused}) => (
                <Icon name="plus" size={30}   color= {focused ? Colors.primaryPink : Colors.primaryGrey}/>
            )}}/>
            <Tab.Screen name="interest" component={JTInterest} options={{ tabBarLabel: 'Explore' , tabBarIcon: ({color, size, focused}) => (
                <Icon name="heart" size={27}  color= {focused ? Colors.primaryPink : Colors.primaryGrey}/>
            )}}/>
            <Tab.Screen name="profile" component={JTProfile} options={{ tabBarLabel: 'Explore' , tabBarIcon: ({color, size, focused}) => (
                <Icon name="user" size={27}   color= {focused ? Colors.primaryPink : Colors.primaryGrey}/>
            )}}/>   

        </Tab.Navigator>
    );
}

export default JTBottomTabs;