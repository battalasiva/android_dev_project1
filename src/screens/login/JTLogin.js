import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View , TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import Colors from '../../constants/Colors';
import Config from '../../constants/Config';
import * as Yup from 'yup';
import loginSlice from '../../reducers/JTLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import JTLoginService from '../../integrations/JTLoginService';

const LoginValidationSchema = Yup.object({ 
    email: Yup.string().required('Mobile number required'),
    password: Yup.string().trim().required('Password required'),
});

const JTLogin = () =>{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user  =  useSelector(state => state.loginDetails)
    const submitForm = (data) => {
       
        data.email = data.email.toLowerCase();
        
        dispatch(JTLoginService(data , {dispatch}))
    }
//    console.log(user);
    return( 
        <View>
            <View style={styles.formContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Hey!</Text>
                    <Text style={styles.headerText}>Login now.</Text>
                </View>
                <View style={styles.headerParaContainer}>
                    <Text style={styles.headerPara}>new to fanfun?</Text><Text style={styles.signupBtn} onPress={()=>navigation.navigate("signup")}> Create new account</Text>
                </View>
                <View style={styles.fields}>
                    <Formik initialValues={{email : '', password: ''}} onSubmit={(values, formikActions) =>
                        submitForm(values)
                    } validationSchema={LoginValidationSchema}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors}) => {
                            return(
                                <View>
                                    <View>
                                        <TextInput placeholder='  Enter your username' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} style={styles.inputText}/>
                                        {errors && <Text style={styles.errorText}>{errors.email}</Text>}
                                    </View>
                                    <View>
                                        <TextInput placeholder='  Enter your password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} 
                                        secureTextEntry={true} style={styles.inputText}/>
                                        {errors && <Text style={styles.errorText}>{errors.password}</Text>}
                                    </View>
                                    <TouchableOpacity onPress={handleSubmit} style={[styles.inputText, styles.submitBtn]}>
                                        <Text style={styles.btnTextColor}>LOGIN</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    </Formik>
                    <View>
                    <TouchableOpacity onPress={() => navigation.navigate('bottomtabs')}>
                        <Text>forgot password</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default JTLogin;

const styles = StyleSheet.create({

    container: {
        
    },
    formContainer:{
        height: 900,
        marginTop: 250
    },
    fields:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    headerTextContainer:{
        marginLeft: Config.deviceWidth*0.04,
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 26,
        color: 'black'
    },
    headerParaContainer:{
        marginLeft: Config.deviceWidth*0.04,
        flexDirection: 'row',
        marginTop: 10
    },
    headerPara:{
        color: Colors.primaryGrey
    },
    signupBtn:{
        color: Colors.primaryPink
    },
    inputText: {
        width: 380,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.primaryGrey,
        marginTop: 10,
        marginLeft: Config.deviceWidth*0.04
    },
    submitBtn:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: Colors.primaryPink,
        marginLeft: Config.deviceWidth*0.04,
        marginRight: Config.deviceWidth*0.04
    },
    btnTextColor:{
        color: Colors.primaryWhite
    },
    errorText:{
        marginLeft: Config.deviceWidth*0.04,
        color: 'red'
    }
});