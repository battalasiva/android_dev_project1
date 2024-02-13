import {Image,Pressable,StyleSheet,Text,View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { windowHeight, windowWidth } from '../../constants/Dimensions';

export default function JTExploreEachImage({route}) {
  const navigation = useNavigation();
  const {id, famousPlaces, famousActors, hotels, temples, restarents} = route.params || {};
  // console.log(id.image,"iiiiiiiiiiiiiiiiiii");
  return (
    <ScrollView>
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
          <Text style={styles.mainText}>{id.name}</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.picturetextCon}>
          <Text style={styles.pictureText}>Pictures</Text>
        </View>
        <View style={styles.mainImageCon}>
          <Image source={{uri : id.image}} style={styles.mainImage}/>
        </View>
        <View style={{marginHorizontal: windowWidth * 0.042}}>
          <View style={styles.imageContainer}>
            {id.images.map((item, index) => {
              return (
                <Image key={index} source={{uri: item.img}} style={styles.image} />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: windowWidth * 0.03,
    marginTop: windowHeight * 0.004,
    width: windowWidth * 0.075,
  },
  maintextCon: {
    width: windowWidth * 0.78,
    paddingTop: windowHeight * 0.01,
  },
  mainText: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  picturetextCon:{
    marginLeft: windowWidth * 0.05,
    marginBottom:windowWidth * 0.01
  },
  pictureText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  mainImageCon:{
    marginHorizontal: windowWidth * 0.049
  },
  mainImage:{
    height: windowHeight * 0.17,
    width: windowWidth * 0.899,
    marginBottom:windowHeight * 0.002
  },
  mainContainer: {
    marginTop: windowHeight * 0.02,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  image: {
    width: windowWidth * 0.44,
    height: windowHeight * 0.15,
    marginHorizontal: windowWidth * 0.009,
    marginVertical: windowHeight * 0.004,
  },
});
