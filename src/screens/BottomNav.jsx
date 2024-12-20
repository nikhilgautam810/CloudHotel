import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import VectorIcons from '../components/VectorIcons'
import Home from '../components/BottomNavScreens/Home';
import Food from '../components/BottomNavScreens/Food';
import Bookings from '../components/BottomNavScreens/Bookings';
import Offers from '../components/BottomNavScreens/Offers';
import Orders from '../components/BottomNavScreens/Orders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color } from '../Data/Color';


const Tab = createBottomTabNavigator();

const BottomNav = () => {



    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    bottom: 5,
                    left: 10,
                    right: 10,
                    height: 55,
                    elevation: 0,
                    borderRadius: 15,
                    ...styles.shadow,
                    borderWidth: 1,
                    borderColor: '#ccc'
                }
            }}
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            {
                                focused ? (<VectorIcons type='Ionicons' name="home" color={focused ? Color.PrimaryColor : '#009387'} size={22} />) : (<VectorIcons type='Ionicons' name="home-outline" color={focused ? '#aa65f7' : '#009387'} size={20} />)
                            }
                            <Text style={[styles.icontxt, { color: focused ? Color.PrimaryColor : '#009387' }]}>Home</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Food' component={Food}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            {
                                focused ? (<VectorIcons type='MaterialCommunityIcons' name="food" color={focused ? Color.food : '#009387'} size={22} />) : (<VectorIcons type='MaterialCommunityIcons' name="food-outline" color={focused ? '#aa65f7' : '#009387'} size={20} />)
                            }
                            <Text style={[styles.icontxt, { color: focused ? Color.food : '#009387' }]}>Food</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name='Bookings' component={Bookings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            {
                                focused ? (<VectorIcons type='Ionicons' name="bed" color={focused ? Color.PrimaryColor : '#009387'} size={23} />) : (<VectorIcons type='Ionicons' name="bed-outline" color={focused ? '#aa65f7' : '#009387'} size={20} />)
                            }
                            <Text style={[styles.icontxt, { color: focused ? Color.PrimaryColor : '#009387' }]}>Bookings</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name='Offers' component={Offers}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            {
                                focused ? (<VectorIcons type='Fontisto' name="bell-alt" color={focused ? Color.PrimaryColor : '#009387'} size={22} />) : (<VectorIcons type='Fontisto' name="bell" color={focused ? '#aa65f7' : '#009387'} size={20} />)
                            }
                            <Text style={[styles.icontxt, { color: focused ? Color.PrimaryColor : '#009387' }]}>Offers</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name='Orders' component={Orders}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            {
                                focused ? (<VectorIcons type='Ionicons' name="bag-handle" color={focused ? Color.PrimaryColor : '#009387'} size={22} />) : (<VectorIcons type='Ionicons' name="bag-handle-outline" color={focused ? '#aa65f7' : '#009387'} size={20} />)
                            }
                            <Text style={[styles.icontxt, { color: focused ? Color.PrimaryColor : '#009387' }]}>Orders</Text>
                        </View>
                    )

                }}
            />

        </Tab.Navigator>




    )

}

export default BottomNav

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    icon: {
        alignItems: 'center'
    },
    icontxt: {
        fontWeight: '400',
        fontSize: 11,
        color: '#4f048c'
    }
})