import {StyleSheet, FlatList, ScrollView, Text, View} from 'react-native';
import JTStoryComponent from '../../components/story/JTStoryComponent';
import Config from '../../constants/Config';
import JTFeedComponent from '../../components/feed/JTFeedComponent';
import JTLogoTitle from '../../components/header/JTLogoTitle';
import {useDispatch, useSelector} from 'react-redux';
import {addFeedItems} from '../../reducers/JTFeedSlice';
import {useEffect} from 'react';
import { getAuthTokenDetails } from '../../utils/LocalStorage';

const JTFeed = () => {

  const DATA = [
    {
      name: 'Ajay',
      image:
        'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '2h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
    },
    {
      name: 'Rahul',
      image:
        'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '1h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
    },
    {
      name: 'Pavan',
      image:
        'https://images.unsplash.com/photo-1509219411165-3ec3195b4842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '1h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
    },
    {
      name: 'Sai',
      image:
        'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '1h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
    },
    {
      name: 'Harish',
      image:
        'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8fHww',
      time: '1h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
    },
    {
      name: 'Ganesh',
      image:
        'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '3h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{backgroundColor: '#FDFCF6'}}>
          <JTLogoTitle />
          <View>
            <JTStoryComponent />
          </View>
        </View>
        <View style={styles.feedContainer}>
          <JTFeedComponent />
        </View>
      </View>
    </ScrollView>
  );
};

export default JTFeed;

const styles = StyleSheet.create({
  feedContainer: {
    paddingLeft: Config.deviceWidth * 0.02,
    paddingRight: Config.deviceWidth * 0.02,
  },
  mainContainer: {
    flex: 1,
  },
});
