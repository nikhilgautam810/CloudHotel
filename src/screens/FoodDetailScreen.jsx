import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import VectorIcons from '../components/VectorIcons';
import { Color } from '../Data/Color';

const FoodDetailScreen = ({ navigation, route }) => {

  const { item } = route.params;
  console.log(item);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'rgba(0,0,0,0)'}
      />
      <ImageBackground source={item.picture} style={styles.headerimage}>
        <View style={styles.header}>
          <VectorIcons type='Ionicons' name="chevron-back" color="#fff" size={28} onPress={() => navigation.goBack()} />
          <VectorIcons type='Feather' name="bookmark" color="#fff" size={28} />
        </View>
      </ImageBackground>
      <View style={styles.fooddetails}>
        <Text style={styles.foodname}>{item.name}</Text>
        <Text style={styles.foodtype}>{item.type}</Text>
        <View style={styles.foodratings}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <VectorIcons type='AntDesign' name="star" color="orange" size={19} />
              <VectorIcons type='AntDesign' name="star" color="orange" size={19} />
              <VectorIcons type='AntDesign' name="star" color="orange" size={19} />
              <VectorIcons type='AntDesign' name="star" color="orange" size={19} />
              <VectorIcons type='AntDesign' name="star" color="grey" size={19} />
            </View>
            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18, marginLeft: 5 }}>4.0</Text>
          </View>
          <Text style={{ fontSize: 13, color: '#009387' }}>365 reviews</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.fooddetail}>{item.details}</Text>
        </View>
      </View>
      <View style={styles.prices}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: 20 }}>Price per plate</Text>
        <View style={styles.pricetag}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey', marginLeft: 5 }}>₹{item.price}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey', marginLeft: 5 }}></Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default FoodDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  headerimage: {
    height: 450,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fooddetails: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  foodname: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold'
  },
  foodratings: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  foodtype: {
    fontSize: 15,
    color: '#009387',
    fontWeight: '300',
    marginTop: 5

  },
  fooddetail: {
    fontSize: 14,
    color: '#009387',
    fontWeight: '400',
    lineHeight: 20

  },
  prices: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pricetag: {
    height: 40,
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#e6e8eb',
    flex: 1,
    marginLeft: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    elevation: 3
  },
  btn: {
    height: 55,
    marginTop: 20,
    backgroundColor: Color.food,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    bottom:10,
    width:'90%',
    position:'absolute'
  },
  btntxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})