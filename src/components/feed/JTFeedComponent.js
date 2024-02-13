import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const JTFeedComponent = () => {
  const DATA = [
    {
      id: 1,
      name: 'Ajay',
      image:
        'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '2h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
      feedImage:
        'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.webp?b=1&s=170667a&w=0&k=20&c=oFqufpm9fBA9dnU1bzIZ_CTFNSCHzDUtoykmufW797Y=',
      likes: 23,
      liked: false,
    },
    {
      id: 2,
      name: 'Rahul',
      image:
        'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '1h',
      // message:
      //   'This is really good and close to my heart! Lets comment your thoughts!',
      feedImage:
        'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.webp?b=1&s=170667a&w=0&k=20&c=oFqufpm9fBA9dnU1bzIZ_CTFNSCHzDUtoykmufW797Y=',
      likes: 23,
      liked: false,
    },
    {
      id: 3,
      name: 'Pavan',
      image:
        'https://images.unsplash.com/photo-1509219411165-3ec3195b4842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '1h',
      message:
        'This is really good and close to my heart! Lets comment yours https://images.unsplash.com/photo-1509219411165-3ec3195b4842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBuZ3xlbnwwfHwwfHx8MA%3D%3Dthoughts hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj!',
      feedImage:
        'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.webp?b=1&s=170667a&w=0&k=20&c=oFqufpm9fBA9dnU1bzIZ_CTFNSCHzDUtoykmufW797Y=',
      likes: 23,
      liked: false,
    },
    {
      id: 4,
      name: 'Sai',
      image:
        'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '1h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
      feedImage:
        'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.webp?b=1&s=170667a&w=0&k=20&c=oFqufpm9fBA9dnU1bzIZ_CTFNSCHzDUtoykmufW797Y=',
      likes: 23,
      liked: false,
    },
    {
      id: 5,
      name: 'Harish',
      image:
        'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8fHww',
      time: '1h',
      message:
        'This is really good and close to my hearyt! Lets comment your thoughts!',
      feedImage:
        'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.webp?b=1&s=170667a&w=0&k=20&c=oFqufpm9fBA9dnU1bzIZ_CTFNSCHzDUtoykmufW797Y=',
      likes: 23,
      liked: false,
    },
    {
      id: 6,
      name: 'Ganesh',
      image:
        'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
      time: '3h',
      message:
        'This is really good and close to my heart! Lets comment your thoughts!',
      feedImage:
        'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.webp?b=1&s=170667a&w=0&k=20&c=oFqufpm9fBA9dnU1bzIZ_CTFNSCHzDUtoykmufW797Y=',
      likes: 23,
      liked: false,
    },
  ];

  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={DATA}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.feedCard}>
            <View style={styles.feedCardArea}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('userprofile')}>
                  <Image source={{uri: item.image}} style={styles.feedIcon} />
                </TouchableOpacity>

                <View style={styles.profileDetails}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text>{item.time}</Text>
                </View>
              </View>
              <Icon name="dots-three-vertical" size={20} marginTop={5}/>
            </View>
            <View style={styles.feedContainer}>
              <Image source={{uri: item.feedImage}} style={styles.feedImage} />
            </View>
            <View style={styles.feedIconsContainer}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={styles.eachIcon}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../asserts/like.png')}
                      alt="teli"
                      style={{height: 23, width: 23}}
                    />
                  </TouchableOpacity>
                  <Text style={{marginHorizontal: 15}}>{item.likes}</Text>
                </View>
                <View style={styles.eachIcon}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../asserts/comment.png')}
                      alt="teli"
                      style={{height: 23, width: 23}}
                    />
                  </TouchableOpacity>
                  <Text style={{marginHorizontal: 15}}>{item.likes}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../../asserts/teligram.png')}
                    alt="teli"
                    style={{height: 23, width: 23}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {item.name}
              </Text>
              <Text numberOfLines={3} style={{fontSize: 13}}>
                {item.message}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default JTFeedComponent;

const styles = StyleSheet.create({
  feedContainer: {
    height: 250,
  },
  feedCard: {
    minHeight: 200,
    height: 'auto',
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FDFCF6',
    borderRadius: 10,
    paddingBottom: 10,
  },
  feedCardArea: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight:10
  },
  feedIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  feedImage: {
    height: '90%',
    width: '100%',
  },
  profileDetails: {
    marginLeft: 10,
  },
  feedIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flex: 1,
  },
  eachIcon: {
    flexDirection: 'row',
  },
});
