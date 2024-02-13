import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Config from '../../constants/Config';

export const styles = StyleSheet.create({
  serchBarContainer: {
    marginHorizontal: Config.deviceWidth * 0.02,
    marginVertical: Config.deviceWidth * 0.01,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    gap: 10,
    height: 38,
    
    zIndex:10
  },
  backArrow: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 50,
  },
  placeImage: {
    width: '35%',
    height: 170,
    borderRadius: 10,
  },
  PlaceDescContainer: {
    width: '60%',
  },
  ExplorePLaceConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
  },
  videoANdImagesBtn: {
    backgroundColor: Colors.primaryPink,
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    borderRadius: 50,
    marginTop: 12,
  },
  ExploreMoreContainer: {
    marginHorizontal: Config.deviceWidth * 0.02,
    paddingTop: 5,
  },
  Heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
