import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import VectorIcons from '../components/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';
import { Color } from '../Data/Color';


const SignUp = ({ navigation }) => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [check_textInputChange, setcheck_textInputChange] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [confirm_secureTextEntry, setconfirm_secureTextEntry] = useState(true)


    const textInputChange = (val) => {
        if (val.length !== 0) {
            setUsername(val)
            setcheck_textInputChange(true)
        } else {
            setUsername(val)
            setcheck_textInputChange(false)
        }
    };

    const handlePasswordChange = (val) => {
        setPassword(val)
    };

    const updateSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)

    };
    const handleConfirmPasswordChange = (val) => {
        setConfirm_password(val)
    };
    const updateConfirmSecureTextEntry = () => {
        setconfirm_secureTextEntry(!confirm_secureTextEntry)

    };

    const setEmailPassword = async () => {
        try {
            await AsyncStorage.setItem("userName", userName)
            await AsyncStorage.setItem("password", password)
            await AsyncStorage.setItem("confirm_password", confirm_password)
            if (userName !== null && userName !== '' && userName !== undefined && password !== null && password !== '' && password !== undefined && confirm_password !== null && confirm_password !== '' && confirm_password !== undefined) {
                navigation.navigate('HomeScreen')
            }
            else {
                Alert.alert('First you have to SignUp', 'SignUp Please')
                navigation.navigate('SignUp')
            }
        }
        catch (e) {
            Alert.alert('Something Went Wrong', e)
        }
    }

  

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Color.PrimaryColor} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headertext}>Register Now!</Text>
            </View>
            <Animatable.View style={styles.footer}
                animation={'fadeInUpBig'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.input_outer}>
                        <VectorIcons type='FontAwesome' name='user-o' color="#05375a" size={20} />
                        <TextInput placeholder='Username'
                            style={styles.textInput}
                            onChangeText={(val) => textInputChange(val)}
                            autoCapitalize="none"

                        />
                        {check_textInputChange ? (
                            <Animatable.View animation="bounceIn">
                                <VectorIcons type='Feather' name="check-circle" color="green" size={20} />
                            </Animatable.View>
                        ) : null}
                    </View>
                    <Text
                        style={[
                            styles.text_footer,
                            {
                                marginTop: 35,
                            },
                        ]}
                    >
                        Password
                    </Text>
                    <View style={styles.input_outer}>
                        <VectorIcons type='Feather' name="lock" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {secureTextEntry ? (
                                <VectorIcons type='Feather' name="eye-off" color="grey" size={20} />
                            ) : (
                                <VectorIcons type='Feather' name="eye" color="grey" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={[
                            styles.text_footer,
                            {
                                marginTop: 35,
                            },
                        ]}
                    >
                        Confirm Password
                    </Text>
                    <View style={styles.input_outer}>
                        <VectorIcons type='Feather' name="lock" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Your Confirm Password"
                            secureTextEntry={confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                            {secureTextEntry ? (
                                <VectorIcons type='Feather' name="eye-off" color="grey" size={20} />
                            ) : (
                                <VectorIcons type='Feather' name="eye" color="grey" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By signing up you agree to our
                    </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                        {' '}
                        Terms of service
                    </Text>
                    <Text style={styles.color_textPrivate}> and</Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                        {' '}
                        Privacy policy
                    </Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signinButton}
                        onPress={setEmailPassword}>
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
                                Sign Up
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
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
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PrimaryColor
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    headertext: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    input_outer: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,


    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    color_textPrivate: {
        color: 'grey',
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
})