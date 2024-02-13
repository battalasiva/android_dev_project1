import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {styles} from './JTProfileStyles';
import {windowWidth} from '../../constants/Dimensions';
import MusicIcon from 'react-native-vector-icons/FontAwesome5';
import DanceIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonIcon from 'react-native-vector-icons/MaterialIcons';
import PersonIcon2 from 'react-native-vector-icons/Ionicons';
import WindowIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const JTProfile = () => {
  const PostData = [
    {
      image:
        'https://c0.wallpaperflare.com/preview/629/482/375/forest-view-landscape-nature.jpg',
      id: 1,
    },
    {
      image:
        'https://i.pinimg.com/originals/8f/6f/c7/8f6fc75c740429dcc5a2e9f79bfbde2b.jpg',
      id: 2,
    },
    {
      image:
        'https://www.travelandleisure.com/thmb/Ne05bVVgbqpA8FQIvI4vCifNUxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hallerbos-forest-halle-belgium-2-BEAUTFORESTS0721-4ff5b556613e4814b5b7165f8851de39.jpg',
      id: 3,
    },
    {
      image:
        'https://c8.alamy.com/comp/H1RGPC/beautiful-forest-view-with-fall-color-branches-taken-in-dudas-conservation-H1RGPC.jpg',
      id: 4,
    },
    {
      image:
        'https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg',
      id: 5,
    },
    {
      image:
        'https://i.vimeocdn.com/video/730118819-965bcf6f51094aa866cef81355b3daf71973ffc4f407c15e469467b846cef670-d_640x360.jpg',
      id: 6,
    },
    {
      image:
        'https://i.pinimg.com/736x/1c/f4/71/1cf4717842f708df09cd1df2de15d505.jpg',
      id: 7,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopAKGojoCiVYdiS5ciym8e799P8vAUu-QVA&usqp=CAU',
      id: 8,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbLJCMNhN_50piVEWZQaOtWr00ziW73dnQw&usqp=CAU',
      id: 9,
    },
    {
      image:
        'https://c8.alamy.com/comp/H1RGPC/beautiful-forest-view-with-fall-color-branches-taken-in-dudas-conservation-H1RGPC.jpg',
      id: 10,
    },
    {
      image:
        'https://c8.alamy.com/comp/H1RGPC/beautiful-forest-view-with-fall-color-branches-taken-in-dudas-conservation-H1RGPC.jpg',
      id: 11,
    },
    {
      image:
        'https://i.pinimg.com/originals/8f/6f/c7/8f6fc75c740429dcc5a2e9f79bfbde2b.jpg',
      id: 12,
    },
  ];
  const storyData = [
    {
      storyId: 1,
      image:
        'https://as2.ftcdn.net/v2/jpg/01/06/87/09/1000_F_106870989_UhH08vlYeaz8Z4Qo66bRQ9AmpOPSxFWI.jpg',
      caption: 'New',
    },
    {
      storyId: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpJjh3sACf7hus_dOF77GvMDurmrX3oS7UySiYs0dkA&s',
      caption: 'Trip',
    },
    {
      storyId: 3,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpJjh3sACf7hus_dOF77GvMDurmrX3oS7UySiYs0dkA&s',
      caption: 'Style',
    },
    {
      storyId: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpJjh3sACf7hus_dOF77GvMDurmrX3oS7UySiYs0dkA&s',
      caption: 'Reels',
    },
    {
      storyId: 5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpJjh3sACf7hus_dOF77GvMDurmrX3oS7UySiYs0dkA&s',
      caption: 'Sports',
    },
    {
      storyId: 6,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpJjh3sACf7hus_dOF77GvMDurmrX3oS7UySiYs0dkA&s',
      caption: 'Travel',
    },
  ];

  const [readmore, setReadmore] = useState(false);
  const toggleViews = () => {
    setReadmore(!readmore);
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userDetails);
 
console.log(user);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <IonicIcon
            name="chevron-back"
            style={styles.backIcon}
            size={windowWidth * 0.07}
            color={'black'}
          />
        </Pressable>
        <View style={styles.maintextCon}>
          <Text style={styles.mainText}>My Account</Text>
        </View>
      </View>
      <View style={styles.imageAndFollowersCon}>
        <TouchableOpacity >
          <View style={styles.dpImageCon}>
            {<Image source={{uri: user.profilePicture}} style={styles.dpImage} />}
          </View>
        </TouchableOpacity>
        <View style={styles.followersmainCon}>
          <View>
            <Text style={styles.numberofposts}>1,058</Text>
            <Text style={styles.postText}>Posts</Text>
          </View>
          <View>
            <Text style={styles.numberofposts}>57M</Text>
            <Text style={styles.postText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.numberofposts}>586</Text>
            <Text style={styles.postText}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>Mohan Ajay</Text>
        <Text style={styles.bioText}>wish me on 20-09</Text>
        <Text style={styles.bioText}>
          <MusicIcon name="music" size={14} color="black" /> makes me positive
          {!readmore && (
            <TouchableOpacity onPress={toggleViews}>
              <Text style={styles.readMoreButton}>...Read More</Text>
            </TouchableOpacity>
          )}
        </Text>
        {readmore && (
          <Text style={styles.bioText}>
            love to dance{' '}
            <DanceIcon name="human-female-dance" size={20} color="black" />
          </Text>
        )}
      </View>
      <View style={styles.shareprofilecon}>
        <TouchableOpacity onPress={()=>navigation.navigate('updatedp')}>
          <Text style={styles.shareProfile}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.shareProfile}>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <PersonIcon
            name="person-outline"
            size={25}
            style={styles.personicon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>Story highlights</Text>
        <Text style={styles.bioText}>
          Keep your favorite stories on your profile
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.storyHighlightCon}>
          {storyData.map((item, index) => {
            return (
              <View key={index}>
                <Image
                  key={index}
                  source={{uri: item.image}}
                  style={styles.storyImage}
                />
                <Text style={styles.storycaption}>{item.caption}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.icons}>
        <WindowIcon name="windows" size={20} color="black" />
        <PersonIcon2 name="person" size={20} color="black" />
      </View>
      <View style={{marginHorizontal: windowWidth * 0.004}}>
        <View style={styles.imageContainer}>
          {PostData.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item.image}}
                style={styles.postImage}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default JTProfile;
