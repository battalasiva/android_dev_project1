import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './SignupStyles';
import {Formik} from 'formik';
const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerContainer}>
      <View style={styles.formContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hey!</Text>
          <Text style={styles.headerText}>Register now.</Text>
        </View>
        <View style={styles.headerParaContainer}>
          <Text style={styles.headerPara}>Already A Member?</Text>
          <Text
            style={styles.signupBtn}
            onPress={() => navigation.navigate('login')}>
            Login Now
          </Text>
        </View>
        <View style={styles.fields}>
          <Formik
            initialValues={{firstname: ''}}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => {
              return (
                <View>
                  <View>
                    <TextInput
                      placeholder=" 🤵  |  First Name"
                      onChangeText={handleChange('firstname')}
                      onBlur={handleBlur('firstname')}
                      value={values.firstname}
                      style={styles.inputText}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="🤵  |  Last Name"
                      onChangeText={handleChange('lastname')}
                      onBlur={handleBlur('lastname')}
                      value={values.lastname}
                      style={styles.inputText}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder=" @  |  Enter your username"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      style={styles.inputText}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder=" 🔒  |  your password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={true}
                      style={styles.inputText}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder=" 🔒  |  Confirm password"
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      secureTextEntry={true}
                      style={styles.inputText}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('bottomtabs')}
                    style={[styles.inputText, styles.submitBtn]}>
                    <Text style={styles.btnTextColor}>REGISTER</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Signup;
