import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import JTExploreComponent from '../../components/explore/JTExploreComponent';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {styles} from './JTEachExploreStyles';
import { ScrollView } from 'react-native-virtualized-view'

export default function JTEachExplore({route}) {
  const {id , famousPlaces,
    famousActors,
    hotels,
    temples,
    restarents} = route.params || {}
  
  const navigation = useNavigation();
  const [filterData, setFilterData] = useState(famousPlaces);
  const [active, setActive] = useState(0);
  const handleFileterData = btnNum => {
    setActive(btnNum);
    if (btnNum === 0) {
      setFilterData(famousPlaces);
    }
    if (btnNum === 1) {
      setFilterData(famousActors);
    }
    if (btnNum === 2) {
      setFilterData(hotels);
    }
    if (btnNum === 3) {
      setFilterData(temples);
    }
    if (btnNum === 4) {
      setFilterData(restarents);
    }
  };
  return (
    <ScrollView>
      <View>
        <View style={styles.serchBarContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('explore');
            }}>
            <IonicIcon
              name="chevron-back"
              style={styles.backArrow}
              size={25}
              color={'black'}
            />
          </Pressable>
        </View>
        <View style={styles.ExplorePLaceConatiner}>
          <Image
            source={{uri: id.image}}
            style={styles.placeImage}
          />
          <View style={styles.PlaceDescContainer}>
            <Text numberOfLines={1} style={styles.Heading}>
              {id.name}
            </Text>
            <Text numberOfLines={6}>{id.PlaceDesc}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("eachimage",{
              id,
              famousPlaces,
              famousActors,
              hotels,
              temples,
              restarents,
            })} style={styles.videoANdImagesBtn}>
              <Text style={{color: 'white'}}>View Images</Text>
            </TouchableOpacity>
          </View>
        </View>  
        <View style={styles.ExploreMoreContainer}>
          <Text style={styles.Heading}>
            View Best Things in {id.name}
          </Text>
          <JTExploreComponent
            handleFileterData={handleFileterData}
            active={active}
            data={filterData}
          />
        </View>
      </View>
    </ScrollView>
  );
}
