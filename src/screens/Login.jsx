import { Alert, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import VectorIcons from '../components/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color } from '../Data/Color';



const Login = ({ navigation }) => {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [check_textInputChange, setcheck_textInputChange] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [isValidUser, setisValidUser] = useState(true)
    const [isValidPassword, setisValidPassword] = useState(true)


    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setUsername(val);
            setcheck_textInputChange(true);
            setisValidUser(true)
        } else {
            setUsername(val);
            setcheck_textInputChange(false);
            setisValidUser(false)
        }
    };

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setisValidUser(true);
        } else {
            setisValidUser(false);

        }
    };

    const updateSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 6) {
            setPassword(val)
            setisValidPassword(true)
        } else {
            setPassword(val)
            setisValidPassword(false)
        }
    };

   

    const checkLogin = async () => {
        const asyncuserName = await AsyncStorage.getItem('userName');
        const asyncpassword = await AsyncStorage.getItem('password');
        
        console.log('username', asyncuserName, 'password', asyncpassword)
        if (asyncuserName !== userName && asyncpassword !== password) {
            Alert.alert('First you have to SignUp', 'SignUp Please')
            navigation.navigate('SignUp');

        }
        else {
            navigation.navigate('HomeScreen')
 
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Color.PrimaryColor} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
                <Text style={styles.text_sub_header}>Sign in to Gharsa Homestay</Text>
            </View>
            <Animatable.View
                animation={"fadeInUpBig"}
                style={styles.footer}>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.input_outer}>
                    <VectorIcons type='FontAwesome' name='user-o' size={20} />
                    <TextInput
                        placeholder='Your Username'
                        placeholderTextColor={'#666666'}
                        autoCapitalize='none'
                        style={styles.txtinput}
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)} />
                    {check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <VectorIcons type='Feather' name='check-circle' size={20} color="green" />
                        </Animatable.View>
                    ) : null}
                </View>
                {isValidUser ? null : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            Username must be 4 characters long.
                        </Text>
                    </Animatable.View>
                )}
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

                <View style={styles.input_outer}>
                    <VectorIcons type='Feather' name='lock' size={20} />
                    <TextInput
                        placeholder='Your Password'
                        placeholderTextColor={'#666666'}
                        autoCapitalize='none'
                        style={styles.txtinput}
                        onChangeText={(val) => handlePasswordChange(val)}
                        secureTextEntry={secureTextEntry ? true : false}

                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {secureTextEntry ? (
                            <VectorIcons type='Feather' name="eye-off" color="grey" size={20} />
                        ) : (
                            <VectorIcons type='Feather' name="eye" color="grey" size={20} />
                        )}
                    </TouchableOpacity>
                </View>
                {isValidPassword ? null : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            Password must be 6 characters long.
                        </Text>
                    </Animatable.View>
                )}

                <TouchableOpacity>
                    <Text style={{ color: '#009387', marginTop: 15 }}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signinButton}
                        onPress={checkLogin}>
                        <LinearGradient
                            colors={[Color.PrimaryColor, Color.SecondaryColor]}
                            style={styles.signinButton}
                        >
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: '#fff',
                                    },
                                ]}
                            >
                                Sign In
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[
                            styles.signUpButton,
                            {
                                borderColor: Color.PrimaryColor,
                                borderWidth: 1,
                                marginTop: 15,
                            },
                        ]}>

                        <Text
                            style={[
                                styles.textSign,
                                {
                                    color: Color.PrimaryColor,
                                },
                            ]}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PrimaryColor
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 40,
        padding: 50
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_sub_header: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    input_outer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },
    txtinput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signinButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    signUpButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textUpSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})