import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './seeAllItemsStyle';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function SeeAllItems({route}) {
    const navigation = useNavigation()
    const {id } = route.params || {};
    
  return (
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
        <Text> See  all items</Text>
    </View>
  )
}