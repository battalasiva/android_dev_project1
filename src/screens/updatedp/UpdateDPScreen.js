import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {windowWidth} from '../../constants/Dimensions';
import {Formik} from 'formik';
import {styles} from './JTUpdateDpStyles';
import Colors from '../../constants/Colors';
import DoneIcon from 'react-native-vector-icons/Ionicons';
import JTUserProfileService from '../../integrations/JTuserprofileServices';
import BidirectionArrow from 'react-native-vector-icons/Fontisto';

export default function UpdateDPScreen({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userDetails);
  const [newDp, setnewDp] = useState('');
  const [selectedGender, setSelectedGender] = useState();

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleChooseImage = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setnewDp(response.assets[0].uri);
      }
    });
  };

  const handleUpdateDP = async () => {
    try {
      dispatch(JTUserProfileService(newDp, {dispatch}));
      console.log('ram');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGenderSelection = gender => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.updateBackContainer}>
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
        <TouchableOpacity onPress={handleUpdateDP} style={styles.submitBtn}>
          <Text style={styles.btnTextColor}>UPDATE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageviewer}>
        <View style={styles.imageshow}>
          <TouchableOpacity onPress={handleChooseImage}>
            <Image
              source={{
                uri:
                  newDp ||
                  'https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png',
              }}
              style={styles.dpImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleChooseImage}>
          <Text style={{color: Colors.primaryPink}}>Edit Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Formik
          initialValues={{name: '', username: '', bio: ''}}
          onSubmit={(values, formikActions) => submitForm(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => {
            return (
              <View>
                <View>
                  <Text style={styles.headingCon}>Name</Text>
                  <TextInput
                    placeholder="  Enter your name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.inputText}
                  />
                </View>
                <View>
                  <Text style={styles.headingCon}>UserName</Text>
                  <TextInput
                    placeholder="  Enter your username"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    style={styles.inputText}
                  />
                </View>
                <View>
                  <Text style={styles.headingCon}>Bio</Text>
                  <TextInput
                    placeholder="  Enter your Bio"
                    onChangeText={handleChange('bio')}
                    onBlur={handleBlur('bio')}
                    value={values.bio}
                    style={styles.inputText}
                  />
                </View>
                <View style={styles.container}>
                  <Text style={styles.headingCon}>Select Gender</Text>
                  <View>
                    <TouchableOpacity
                      style={{justifyContent: 'center'}}
                      onPress={() => handleGenderSelection('male')}>
                      <Text>
                        Male{' '}
                        {selectedGender === 'male' && (
                          <DoneIcon
                            name="checkmark-done-circle"
                            color="green"
                            size={15}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{justifyContent: 'center'}}
                      onPress={() => handleGenderSelection('female')}>
                      <Text>
                        Female{' '}
                        {selectedGender === 'female' && (
                          <DoneIcon
                            name="checkmark-done-circle"
                            color="green"
                            size={15}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{justifyContent: 'center'}}
                      onPress={() => handleGenderSelection('other')}>
                      <Text>
                        Other{' '}
                        {selectedGender === 'other' && (
                          <DoneIcon
                            name="checkmark-done-circle"
                            color="green"
                            size={15}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}
