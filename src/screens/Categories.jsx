import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { RoomCategory } from '../Data/RoomCategory';
import VectorIcons from '../components/VectorIcons';
import { Color } from '../Data/Color';
const { width } = Dimensions.get('screen');

const cardWidhth = width / 1.1;
const Categories = ({ navigation, route }) => {
    const category = route.params;
    console.log(category)


    const Card = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={1}
                onPress={()=>{navigation.navigate('DetailScreen', {item: item})}}
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
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.headertxt}>{category.item}</Text>
            </View>
            <FlatList
                data={RoomCategory}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 20,
                    paddingBottom: 20,
                }}
                renderItem={( {item} ) => {
                    if(category.item === 'All'){
                        return(
                            <Card item={item}/>
                        )
                    }
                    else if(item.tag === category.item){
                        return(
                           <Card item={item}/>
                        )
                    }
                    else{
                        return null
                    }
                }}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        elevation: 10,


    },
    headertxt: {
        fontWeight: 'bold',
        fontSize: 26,
        color: Color.SecondaryColor,
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