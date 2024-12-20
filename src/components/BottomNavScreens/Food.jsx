import { FlatList, StyleSheet, Text, View, ScrollView, Image, Dimensions,Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { foodCategory } from '../../Data/foodCategory'
import VectorIcons from '../VectorIcons';
import { FoodList } from '../../Data/FoodList';
const { width } = Dimensions.get('screen');
const cardWidhth = width / 2.2;
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper';
import { FoodOffer } from '../../Data/FoodOffer';
import { Color } from '../../Data/Color';



const Food = () => {
  const navigation = useNavigation();

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState('All');
  const Categories = ['All', 'Beverages', 'Breakfast', 'Lunch', 'Dinner'];

  const FoodCategory = ({ item }) => {
    return (
      <View style={styles.foodcategory}>
        <Image source={item.picture} style={styles.foodcategoryimage} />
        <Text style={styles.foodcategoryname}>{item.name}</Text>
      </View>
    )
  }
  const Categorylist = () => {
    return (
      <View style={styles.Categorylist}>
        {
          Categories.map((item, index) => (

            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => {
              setSelectedCategoryIndex(item)
              navigation.navigate('FoodCategories', {item: item})
              }}>
              <Text style={[styles.category, { backgroundColor: selectedCategoryIndex == item ? Color.food : '#e6e6e6' }, { color: selectedCategoryIndex == item ? '#fff' : '#009387' }]}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  const FoodOfferSwiper = () => {
    return (
      <View style={styles.swipercontainer}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          dotColor='#ccc'
          activeDotColor='#f2ff'
          // showsPagination={false}
          dotStyle={{  height:5, width:5 , backgroundColor:'#ccc'}}
        >
          {
            FoodOffer.map((item) => (
              <View style={styles.slider} key={item.id}>
                <Image source={item.image} style={styles.sliderimage} />
              </View>
            ))
          }
        </Swiper>
      </View>
    )
  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headertxt}>Find delicious {`\n`}food <Text style={styles.headertxtbold}>here</Text></Text>
        </View>
        <Pressable style={styles.searchbar} onPress={()=>navigation.navigate('FoodSearch')}>
          <VectorIcons type='AntDesign' name="search1" color="#009387" size={23} style={styles.icon} />
          <Text style={styles.searchbartxt}>Search food here...</Text>
        </Pressable>
        <FoodOfferSwiper />
        <View>
          <FlatList
            data={foodCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 10,
              // marginTop: 5,
              paddingBottom: 20
            }}
            renderItem={({ item }) => <FoodCategory item={item} />}
          />
        </View>
        <Categorylist />

        <View style={styles.foodcardOuter}>
          {
            FoodList.map((item) => (
              <TouchableOpacity activeOpacity={1} key={item.id}
                onPress={() => navigation.navigate('FoodDetailScreen', {item: item})}
                style={{
                  width: '50%', // Divide the width by 2 to create a 2-column layout
                  paddingHorizontal: 10,
                  marginBottom: 20,
                }}
              >

                <View style={styles.foodcard}>
                  <Image source={item.picture} style={styles.foodcardimg} />
                  <View style={styles.cardDetails}>
                    <View style={styles.cardDetailsupper}>
                      <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.location}>{item.type}</Text>
                      </View>
                      <View style={[styles.type, { borderColor: item.type == 'veg' ? '#04c735' : '#ab0207' }]}>
                        <Text style={[styles.typeinside, { borderColor: item.type == 'veg' ? '#04c735' : '#ab0207' }]}></Text>
                      </View>
                    </View>
                    <Text style={styles.price}>₹{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>

      </View>
    </ScrollView>
  )
}

export default Food

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20
  },
  header: {
    display: 'flex',
    padding: 15
  },
  headertxt: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
  },
  headertxtbold: {
    fontWeight: 'bold',
    color: Color.food,
    fontSize: 23,
  },
  searchbar: {

    flexDirection: "row",
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 5,
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
    fontSize: 16,
  },
  foodcategory: {
    alignItems: 'center',
    marginRight: 10
  },
  foodcategoryimage: {
    height: 95,
    width: 95,
  },
  foodcategoryname: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginTop: 10
  },
  Categorylist: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    marginHorizontal: 10



  },
  category: {
    backgroundColor: '#e6e6e6',
    color: '#009387',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,


  },
  foodcardOuter: {

    marginTop: 25,
    paddingBottom: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  foodcard: {

    height: 200,
    width: cardWidhth,
    elevation: 5,
    marginRight: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  foodcardimg: {
    height: 130,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  cardDetails: {
    height: 80,
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
  price: {
    fontSize: 14,
    fontWeight: '400',
    color: '#009387'
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
  type: {
    height: 18,
    width: 18,
    borderWidth: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  typeinside: {
    height: 5,
    width: 5,
    borderWidth: 4,
    borderRadius: 50,


  },
  swipercontainer: {
    height: 260,
    width: '100%',
    marginTop: 20,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    backgroundColor:'#fff'

    
  },
  slider:{
    height:'80%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,

  },
  sliderimage:{
    height:'100%',
    width:'100%',
    borderRadius:15

  }

})