import { StatusBar, Animated, Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import VectorIcons from '../VectorIcons'
import { Rooms } from '../../Data/Rooms';
import { TopRooms } from '../../Data/TopRooms';
const { width } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native'
import { Color } from '../../Data/Color';

const cardWidhth = width / 1.8;
const Home = () => {
  const Navigation = useNavigation();


  const Categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
  const [selectedCategoryItem, setSelectedCategoryItem] = useState('All');
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const scrollAnimationCard = useRef(new Animated.Value(0)).current;




  const Categorylist = () => {
    return (
      <View style={styles.Categorylist}>
        {
          Categories.map((item, index) => (

            <TouchableOpacity key={index} activeOpacity={0.8} 
            onPress={() => {
              setSelectedCategoryItem(item)
              Navigation.navigate('Categories', {item:item})
              }}>
              <Text style={[styles.category, { backgroundColor: selectedCategoryItem == item ? Color.PrimaryColor : '#e6e6e6' }, { color: selectedCategoryItem == item ? '#fff' : '#009387' }]}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  const Card = ({ item, index }) => {
    const inputRange = [
      (index - 1) * cardWidhth,
      index * cardWidhth,
      (index + 1) * cardWidhth
    ];
    const opacity = scrollAnimationCard.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7]
    })
    const scale = scrollAnimationCard.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9]
    })
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => Navigation.navigate('DetailScreen', { item: item })}>

        <Animated.View style={{ ...styles.card}}>
          <Animated.View style={{ ...styles.cardOverlay}}>
            <View style={styles.pricetag}>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
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
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  const TopRoomsCard = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={1}
        onPress={() => Navigation.navigate('DetailScreen', { item: item })}
      >
        <View style={styles.toproomscard}>
          <View style={styles.toproomscardpricetag}>
            <VectorIcons type='AntDesign' name="star" color="yellow" size={13} />
            <Text style={styles.toproomscardpricetagtxt}>5.0</Text>
          </View>
          <Image source={item.photo} style={styles.toproomscardimage} />
          <View style={styles.toproomscarddetails}>

            <Text style={styles.toproomscardtxt}>{item.name}</Text>
            <Text style={styles.toproomscardlocation}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (


    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headertxt}>Find your best rooms</Text>
            <Text style={styles.headertxt}>in <Text style={styles.hotelname}>Gharsa</Text></Text>
          </View>
          <TouchableOpacity onPress={() => Navigation.navigate('Profile')} style={styles.iconouter}>
            <VectorIcons type='FontAwesome' name="user-circle-o" color="#009387" size={23} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Pressable style={styles.searchbar} onPress={()=>Navigation.navigate('SearchRooms')}>
            <VectorIcons type='AntDesign' name="search1" color="#009387" size={23} style={styles.icon} />
            <Text style={styles.searchbartxt}>Search for rooms, suites, deluxe...</Text>
          </Pressable>
          <Categorylist />
          <View>
            <Animated.FlatList
              onMomentumScrollEnd={(event) => {
                setActiveCardIndex(Math.round(event.nativeEvent.contentOffset.x / cardWidhth))
              }}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollAnimationCard } } }],
                { useNativeDriver: true },
              )}
              horizontal
              data={Rooms}
              contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20, paddingRight: cardWidhth / 2 - 40 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => <Card item={item} index={index} />}
              snapToInterval={cardWidhth}
            />

          </View>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardtxt}>Top rooms</Text>
            <Text style={styles.smallCardtxt}>Show all</Text>
          </View>
          <FlatList
            data={TopRooms}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30
            }}
            renderItem={({ item }) => <TopRoomsCard item={item} />}
          />

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    flexDirection: 'row',
    padding: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  headertxt: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
  },

  hotelname: {
    fontWeight: 'bold',
    color: Color.PrimaryColor,
    fontSize: 23,
  },
  body: {
    // paddingHorizontal: 10
  },
  searchbar: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 2,
    backgroundColor: '#fff',
    paddingVertical:10

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
  Categorylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10



  },
  category: {
    backgroundColor: '#e6e6e6',
    color: Color.SecondaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,


  },
  card: {
    height: 280,
    width: cardWidhth,
    elevation: 10,
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius: 10,

  },
  cardimg: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  pricetag: {
    position: 'absolute',
    height: 40,
    width: 60,
    backgroundColor: Color.PrimaryColor,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  cardDetails: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 14,


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
  cardOverlay: {
    height: 280,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 100,
    borderRadius: 15,
    width: cardWidhth,

  },
  smallCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  smallCardtxt: {
    fontSize: 13,
    color: '#009387',
    fontWeight: '400'
  },
  toproomscard: {
    height: 120,
    width: 120,
    backgroundColor: '#fff',
    elevation: 15,
    marginRight: 20,
    borderRadius: 10
  },
  toproomscardimage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  toproomscarddetails: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  toproomscardtxt: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 10
  },
  toproomscardlocation: {
    fontWeight: 'bold',
    color: '#009387',
    fontSize: 6
  },
  toproomscardpricetag: {
    position: 'absolute',
    height: 30,
    width: 50,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',

  },
  toproomscardpricetagtxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5
  }


})