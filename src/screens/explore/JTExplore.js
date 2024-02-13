import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAweSomeIcon from 'react-native-vector-icons/FontAwesome';
import {styles} from './JTExploreSTyles';
import {useState} from 'react';
import LoveIcon from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Entypo';
import BellIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';

const famousActors = [
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    images: [
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
    ],
    proffesion: 'Indian Actor',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    images: [
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
    ],
    proffesion: 'Indian Actor',
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    images: [
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
    ],
    proffesion: 'Indian Actor',
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    images: [
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
    ],
    proffesion: 'Indian Actor',
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    images: [
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
      {
        img: 'https://i.pinimg.com/736x/4c/2a/40/4c2a4094839dd9198dac45835fa17ae1.jpg',
      },
    ],
    proffesion: 'Indian Actor',
  },
];
const hotels = [
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    images: [
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
    ],
    proffesion: 'Famous Hotels',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    images: [
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
    ],
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    images: [
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
    ],
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    images: [
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
    ],
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    images: [
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
    ],
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    images: [
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
      {
        img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/465685729.jpg?k=9d4718e7a3269fe4fe6648f304ffaef6ed1980d8f36c5f30965e12820b6a5ece&o=',
      },
    ],
    proffesion: 'Famous Hotels',
  },
];

const popularplaces = [
  {
    name: 'Araku',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIFd1thkfpQzJUp5ZMuH3K3sZx-d2LwHDK16la5Z3ZQ&s',
    images: [
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
      {
        img: 'https://i.ytimg.com/vi/5g0lQa4lnnA/maxresdefault.jpg',
      },
    ],
    proffesion: 'Famous Places',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    famousPlaces: [
      {
        name: 'Araku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Araku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Araku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Araku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Araku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Araku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
    ],
    temples: [
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
    ],
    restarents: [
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
    ],
  },
  {
    name: 'Vizag ',
    image:
      'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
    images: [
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
      {
        img: 'https://static2.tripoto.com/media/filter/tst/img/1380936/TripDocument/1609037967_1609037966419.jpg',
      },
    ],
    proffesion: 'Famous Places',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    famousActors: [
      {
        name: 'DQ💖 dhulkarrrrrrrrrrrrrrrrrrrrrrrrrrr',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
    ],
    famousPlaces: [
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
    ],
    temples: [
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
    ],
    restarents: [
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
    ],
  },
];
const JTExplore = () => {
  const navigation = useNavigation();
  const [searchData, setSearchData] = useState();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.exploreContainer}>
        <View style={styles.serchContainer}>
          <View style={styles.searchIcon}>
            <FontAweSomeIcon name="search" size={15} color={'white'} />
          </View>
          <TextInput
            placeholder="Search Here"
            style={{width: '90%', fontSize: 16, paddingLeft: 10}}
          />
        </View>
        <View>
          <View style={styles.seeAllContainer}>
            <Text style={styles.headingText}>Popular Places </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('seeall', {
                  id: popularplaces,
                })
              }>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={popularplaces}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('eachexplore', {
                    id: item,
                    famousPlaces: item.famousPlaces,
                    famousActors: famousActors,
                    hotels: hotels,
                    temples: item.temples,
                    restarents: item.restarents,
                  })
                }
                style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={[styles.nameAnsLikeContainer, styles.placeName]}>
                  <Text numberOfLines={2} style={styles.hotelText}>
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <LoveIcon name="heart" size={15} color="red" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <View style={styles.seeAllContainer}>
            <Text style={styles.headingText}>Popular Hotels </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('seeall', {
                  id: hotels,
                })
              }>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={hotels}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('eachexplore', {
                    id: item,
                    hotels: hotels,
                  })
                }
                style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.hotelImages} />
                <View style={styles.nameAnsLikeContainer}>
                  <Text numberOfLines={2} style={styles.hotelText}>
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <LoveIcon name="heart" size={15} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <View style={styles.seeAllContainer}>
            <Text style={styles.headingText}>Famous Celebrities </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('seeall', {
                  id: famousActors,
                })
              }>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={famousActors}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('eachexplore', {
                    id: item,
                    hotels: famousActors,
                  })
                }
                style={[styles.imageContainer, styles.famousActorsContainer]}>
                <Image source={{uri: item.image}} style={styles.actorsImage} />
                <View style={styles.nameAnsLikeContainer}>
                  <Text numberOfLines={2} style={styles.hotelText}>
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <Icon
                      name="star-check"
                      size={22}
                      color={Colors.primaryPink}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default JTExplore;
