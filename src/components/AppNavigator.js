import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import DetailScreen from '../screens/DetailScreen';
import BottomNav from '../screens/BottomNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Categories from '../screens/Categories';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import RoomBooking from '../screens/RoomBooking';
import SearchRooms from '../screens/SearchRooms';
import MapScreen from '../screens/MapScreen';
import FoodSearch from '../screens/FoodSearch';
import FoodCategories from '../screens/FoodCategories';
import RootStackNavigator from './RootStackNavigator';


const Stack = createStackNavigator();
const AppNavigator = () => {


  return (
    <Stack.Navigator>
        <Stack.Screen name='RootStackNavigator' component={RootStackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='HomeScreen' component={BottomNav} options={{ headerShown: false }} />
      <Stack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name='FoodDetailScreen' component={FoodDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Categories' component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name='FoodCategories' component={FoodCategories} options={{ headerShown: false }} />
      <Stack.Screen name='RoomBooking' component={RoomBooking} options={{ headerShown: false }} />
      <Stack.Screen name='SearchRooms' component={SearchRooms} options={{ headerShown: false }} />
      <Stack.Screen name='FoodSearch' component={FoodSearch} options={{ headerShown: false }} />
      <Stack.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={Profile} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Slide from right
        headerShown: false
      }} />
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>


  );
};

export default AppNavigator;
