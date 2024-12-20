import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import VectorIcons from '../components/VectorIcons';
import { FoodList } from '../Data/FoodList';
const { width } = Dimensions.get('screen');

const cardWidhth = width / 1.1;
const FoodSearch = ({ navigation }) => {

    const [input, setInput] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Search food here...</Text>
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
        FoodList.map((item)=>{
            
            if (input === '') {
                
                return null;
            }
            else if(item.name.toLowerCase().includes(input.toLowerCase())) {
                return (
                    <Pressable style={styles.card} onPress={()=>navigation.navigate('FoodDetailScreen', {item:item})} key={item.id}>
                    <View style={styles.ImageDetails}>

                    <Image source={item.picture} style={styles.cardimg} />
                        <VectorIcons type='Feather' name="heart" color="#fff" size={24} style={styles.hearticon}/>
                    </View>
                    <View style={styles.cardDetails}>
                        <Text style={styles.names}>{item.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <VectorIcons type='MaterialCommunityIcons' name="star-circle" color="green" size={25} />
                        <Text style={{fontWeight:'500',color:'#000', fontSize:20, paddingLeft:5}}>4.2</Text>
                        </View>
                        <Text style={{fontWeight:'500',color:'#000', fontSize:16, paddingLeft:5}}>(100+) • 10 mins</Text>
                        <Text style={styles.type}>{item.type}</Text>

                    </View>

                </Pressable>
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

export default FoodSearch

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
        marginHorizontal: 15,
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
        height: 150,
        width: cardWidhth,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginVertical: 5,
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
        



    },
    ImageDetails: {
        height: 150,
        width: '38%',


    },
    cardimg: {
        height: '100%',
        width: '100%',
        borderRadius: 18,


    },
    hearticon:{
        top:10,
        position:'absolute',
        right:10
        
    },
    cardDetails: {
        padding: 10,
        marginLeft:5
    },
    names: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        
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
    type: {
        fontSize: 16,
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