import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import VectorIcons from '../components/VectorIcons'
import { RoomCategory } from '../Data/RoomCategory'
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

const cardWidhth = width / 1.1;
 

const SearchRooms = ({navigation}) => {

    const [input, setInput] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Search for rooms, suites, deluxe...</Text>
            <View style={styles.searchbar}>
                <VectorIcons type='AntDesign' name="search1" color="#009387" size={21} style={styles.icon} />
                <TextInput
                    style={styles.searchbartxt}
                    placeholder='Search'
                    value={input}
                    onChangeText={(txt) => setInput(txt)}

                />
            </View>
                <ScrollView showsVerticalScrollIndicator={false}>

            {
                RoomCategory.map((item)=>{
                    
                    if (input === '') {
                        
                        return null;
                    }
                    else if(item.name.toLowerCase().includes(input.toLowerCase())) {
                        return (
                            <TouchableOpacity activeOpacity={1}
                                onPress={() => { navigation.navigate('DetailScreen', { item: item }) }} key={item.id}
                            >
                                <View style={styles.card}>
                                    <Image source={item.photo} style={styles.cardimg} />
                                    <View style={styles.cardDetails}>
                                        <View style={styles.cardDetailsupper}>
                                            <View>
                                                <Text style={styles.name}>{item.name}</Text>
                                                <Text style={styles.location}>{item.location}</Text>
                                            </View>
                                            <View>
                                                <VectorIcons type='Feather' name="bookmark" color="#009387" size={20} />
                                            </View>
                                        </View>
                                        <View style={styles.starreview}>
                                            <View style={styles.star}>
                                                <VectorIcons type='AntDesign' name="star" color="yellow" size={13} />
                                                <VectorIcons type='AntDesign' name="star" color="yellow" size={13} />
                                                <VectorIcons type='AntDesign' name="star" color="yellow" size={13} />
                                                <VectorIcons type='AntDesign' name="star" color="yellow" size={13} />
                                                <VectorIcons type='AntDesign' name="star" color="grey" size={13} />

                                            </View>
                                            <Text style={styles.review}>354 Reviews</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    else{
                        return null;
                    }

                })
            }
            </ScrollView>
           
                  
                  </SafeAreaView>
    )
}

export default SearchRooms

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    heading: {
        paddingHorizontal: 20,
        paddingTop: 10,
        fontWeight: '700',
        fontSize: 19
    },
    searchbar: {
        margin: 15,
        flexDirection: "row",
        borderWidth: 0.7,
        borderRadius: 10,
        borderColor: '#ccc',
        alignItems: 'center',
        marginHorizontal: 10,
        elevation: 5,
        backgroundColor: '#fff'

    },
    icon: {
        marginLeft: 10
    },
    searchbartxt: {
        color: '#009387',
        marginHorizontal: 5,
        width: '85%',
        fontSize: 16
    },
    card: {
        height: 280,
        width: cardWidhth,
        borderRadius: 15,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        marginBottom: 25,
        elevation:10


    },
    cardimg: {
        height: 200,
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    cardDetails: {
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 14,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    location: {
        fontSize: 12,
        fontWeight: '500',
        color: '#009387'
    },
    cardDetailsupper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    location: {
        fontSize: 10,
        fontWeight: '500',
        color: '#009387'
    },
    starreview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    star: {
        flexDirection: 'row',
    },
    review: {
        fontWeight: '400',
        fontSize: 12,
        color: '#009387'
    },
})