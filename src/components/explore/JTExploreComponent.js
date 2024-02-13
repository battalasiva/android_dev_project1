import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './JTExploreComponentStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
const buttonsData = [
  {
    id: 0,
    name: 'Famous Places',
  },
  {
    id: 1,
    name: 'Famous Celebrities',
  },
  {
    id: 2,
    name: 'Hotels',
  },
  {
    id: 3,
    name: 'Top Temples',
  },
  {
    id: 4,
    name: 'Restarents',
  },
];
export default function JTExploreComponent({handleFileterData, active, data}) {
  return (
    <View>
      <View style={styles.btnContainer}>
        <FlatList
          data={buttonsData}
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                style={
                  active === index
                    ? [styles.exploreBtn, styles.active]
                    : styles.exploreBtn
                }
                onPress={() => handleFileterData(item.id)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.actorDetailsContainer}>
              <Image source={{uri: item.image}} style={styles.actorImage} />
              <View>
                <Text
                  style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
                  {item.name}
                </Text>
                <Text>{item.proffesion}</Text>
              </View>
              <View style={styles.starIcon}>
                <Icon name="star-check" size={30} color={Colors.primaryPink} />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
