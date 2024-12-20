import React,{useEffect} from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RootStackNavigator = ({navigation}) => {

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
 
};

export default RootStackNavigator;
