import { Pressable, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import VectorIcons from '../components/VectorIcons'
import DatePicker from '@sabroso/react-native-date-range-picker'
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from '@react-native-async-storage/async-storage'



const RoomBooking = ({ route }) => {
    const { item } = route.params;
    const [selectedDate, setSelectedDate] = useState('');
    const [name, setName] = useState('')
    const [finalPrice, setFinalPrice] = useState(item.price)
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0);
   

    useEffect(() => {

        if (selectedDate && selectedDate.startDate && selectedDate.endDate) {
            const startDateParts = selectedDate.startDate.split("/");
            const endDateParts = selectedDate.endDate.split("/");

            const formattedStartDate = new Date(
                `${startDateParts[0]}-${startDateParts[1]}-${startDateParts[2]}`
            );
            const formattedEndDate = new Date(
                `${endDateParts[0]}-${endDateParts[1]}-${endDateParts[2]}`
            );

            const startDate = new Date(formattedStartDate);
            const endDate = new Date(formattedEndDate);

            // Calculate the time difference in milliseconds
            const timeDifference = endDate - startDate;

            // Convert milliseconds to days
            const daysDifference = (timeDifference / (1000 * 60 * 60 * 24)) + 1;

            const price = (item.price * daysDifference) * rooms;
            setFinalPrice(price)

        }
    }, [selectedDate, item.price, rooms])

    const UserInfo = async () => {
        const email = await AsyncStorage.getItem('userName');
        setName(email);

    }
    useEffect(() => {
        UserInfo()
    }, [])

    const refRBSheet = useRef();

   

    const BookRoom = async() => {
        
    }
    

    const BottomSheet = () => {
        return (
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.heading}>Select rooms and guests</Text>
                <View style={styles.bottomsheet}>
                    <Text style={styles.room}>Rooms</Text>
                    <View style={styles.quantityouter}>
                        <VectorIcons type='AntDesign' name="minuscircle" color="#ccc" size={20} onPress={() => setRooms(Math.max(1, rooms - 1))} />
                        <Text style={styles.quantity}>{rooms}</Text>
                        <VectorIcons type='AntDesign' name="pluscircle" color="#ccc" size={20} onPress={() => setRooms((num) => num + 1)} />
                    </View>
                </View>
                <View style={styles.bottomsheet}>
                    <Text style={styles.room}>Adults</Text>
                    <View style={styles.quantityouter}>
                        <VectorIcons type='AntDesign' name="minuscircle" color="#ccc" size={20} onPress={() => setAdults(Math.max(1, rooms - 1))} />
                        <Text style={styles.quantity}>{adults}</Text>
                        <VectorIcons type='AntDesign' name="pluscircle" color="#ccc" size={20} onPress={() => setAdults((num) => num + 1)} />
                    </View>
                </View>
                <View style={styles.bottomsheet}>
                    <Text style={styles.room}>Childrens</Text>
                    <View style={styles.quantityouter}>
                        <VectorIcons type='AntDesign' name="minuscircle" color="#ccc" size={20} onPress={() => setChildren(Math.max(0, rooms - 1))} />
                        <Text style={styles.quantity}>{children}</Text>
                        <VectorIcons type='AntDesign' name="pluscircle" color="#ccc" size={20} onPress={() => setChildren((num) => num + 1)} />
                    </View>
                </View>
                <TouchableOpacity style={styles.btnbottomsheet}
                    onPress={() => refRBSheet.current.close()}
                >
                    <Text style={styles.btntxtbottomsheet}>Apply</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.Container} >

            <StatusBar barStyle={'dark-content'} />
            <View style={styles.header}>
                <Text style={styles.headertxt}>Book your suite</Text>
            </View>
            <View style={styles.inputcontainer}>

                <Pressable style={styles.input}>
                    <VectorIcons type='Feather' name="user" color="#ccc" size={24} />
                    <TextInput style={styles.textinput} placeholder='Enter your name'
                        value={name}
                        onChangeText={(txt) => setName(txt)}
                    />
                </Pressable>
                <Pressable style={styles.input}>
                    <VectorIcons type='Feather' name="calendar" color="#ccc" size={24} />
                    <TextInput placeholder='Date' />
                    <DatePicker
                        style={{ width: 300, height: 30, borderWidth: 0 }}
                        customStyles={{
                            placeholderText: {
                                fontSize: 14,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: 'auto'
                            },
                            headerStyle: { backgroundColor: '#009387' },
                            contentText: {
                                fontSize: 13,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: 'auto',
                                color: '#009387'
                            },
                        }}

                        onConfirm={(startDate, endDate) => setSelectedDate(startDate, endDate)}
                        allowFontScaling={false}
                        placeholder={'Apr 27, 2023 → Jul 10, 2023'}
                        mode={'range'}
                    />
                </Pressable>
                <Pressable style={styles.input}>
                    <VectorIcons type='SimpleLineIcons' name="login" color="#ccc" size={20} />
                    <TextInput placeholder='Check In'
                        onChangeText={(txt) => setCheckIn(txt)}

                    />

                </Pressable>
                <Pressable style={styles.input}>
                    <VectorIcons type='SimpleLineIcons' name="logout" color="#ccc" size={20} />
                    <TextInput placeholder='Check Out'
                        onChangeText={(txt) => setCheckOut(txt)}

                    />
                </Pressable>
                <Pressable style={styles.input}
                    onPress={() => refRBSheet.current.open()}
                >
                    <VectorIcons type='Feather' name="users" color="#ccc" size={20} />
                    <TextInput placeholder={`${rooms} room - ${adults} adults - ${children} children`}
                    />
                </Pressable>
            </View>

            <View style={styles.footer}>
                <View style={styles.left}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.totalamount}>{finalPrice}/-</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={BookRoom}>
                    <Text style={styles.btntxt}>Book now</Text>
                </TouchableOpacity>
            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    container: {
                        borderTopWidth: 1,
                        borderColor: '#ccc',
                        height: 300,
                        animationType: 'slide'
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }

                }}
            >
                <BottomSheet />
            </RBSheet>

        </SafeAreaView>
    )
}

export default RoomBooking

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        padding: 20
    },
    headertxt: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputcontainer: {
        margin: 20,

    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        gap: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    textinput:{
        textTransform:'capitalize',
        fontWeight:'500'
    },
   
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopWidth: 0.7,
        borderColor: '#ccc',
        flexDirection: 'row',
        paddingVertical: 8,
        justifyContent: 'space-around',


    },
    left: {
        alignItems: 'center',

    },
    total: {
        fontWeight: '500',
        color: '#009387',
        fontSize: 15
    },
    totalamount: {
        fontWeight: '700',
        color: '#000',
        fontSize: 18
    },
    btn: {
        backgroundColor: '#2C73D2',
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntxt: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 15
    },
    bottomsheet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    room: {
        fontWeight: '500',
        color: '#009387',
        fontSize: 18
    },
    quantityouter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantity: {
        fontWeight: 'bold',
        marginHorizontal: 12,
        fontSize: 19
    },
    btnbottomsheet: {
        backgroundColor: '#845EC2',
        padding: 9,
        width: '40%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10
    },
    btntxtbottomsheet: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    },
    heading: {
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 18,
        color: '#a2a2aa',
        marginBottom: 20
    }

})