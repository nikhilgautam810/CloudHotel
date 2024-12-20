import { StyleSheet, Text, View, FlatList, Pressable, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { Color } from '../Data/Color'
import VectorIcons from '../components/VectorIcons'
import { FoodList } from '../Data/FoodList'
const { width } = Dimensions.get('screen');

const cardWidhth = width / 1.1;

const FoodCategories = ({ navigation, route }) => {
    const category = route.params;
    console.log(category)

    const Card = ({ item }) => {
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

  return (
    <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.headertxt}>{category.item}</Text>
            </View>
            <FlatList
                data={FoodList}
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

export default FoodCategories

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
        color: Color.food,
    },
    card: {
        height: 160,
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
        height: 160,
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
    type: {
        fontSize: 16,
        fontWeight: '500',
        color: '#009387'
    },
})