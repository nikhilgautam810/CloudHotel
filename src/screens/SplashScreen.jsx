import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import React,{useEffect} from 'react'
import VectorIcons from '../components/VectorIcons';
import { Color } from '../Data/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {


    const checkLogin = async () => {
      const email = await AsyncStorage.getItem('userName');
      const password = await AsyncStorage.getItem('password');
      if (email !== null && password !== null) {
        navigation.navigate('HomeScreen')
      }
      else {
        navigation.navigate('SplashScreen')

      }
  
    };
  
   
    useEffect(() => {
      checkLogin()
     
  
    },[])




    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Color.PrimaryColor} barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    resizeMode='stretch'
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Stay connected with Gharsa Homestay</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <LinearGradient
                            colors={[Color.PrimaryColor, Color.SecondaryColor]}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <VectorIcons type='MaterialIcons' name='navigate-next' color={'#fff'} size={18} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen

const { height, width } = Dimensions.get('screen')
const height_logo = height * 0.14;
const width_logo = width * 0.6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PrimaryColor,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    logo: {
        height: height_logo,
        width: width_logo
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontWeight: '400',
        color: '#ccc',
        marginTop: 5
    },
    button: {
        marginTop: 30,
        alignItems: 'flex-end',

    },
    signIn: {
        width: 150,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row'

    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold',

    }

})