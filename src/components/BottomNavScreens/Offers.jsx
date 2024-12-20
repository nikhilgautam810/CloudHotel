import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Color } from '../../Data/Color';
const OfferBanner = [
  {
    id: 1,
    image: require('../../assets/Offers/offer1.jpg')
  },
  {
    id: 2,
    image: require('../../assets/Offers/offer2.jpg')
  },
  {
    id: 3,
    image: require('../../assets/Offers/offer3.jpg')
  },
];
const Offers = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Stay more spend<Text style={{ color: Color.SecondaryColor }}> less</Text></Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={styles.quotes}>
            <Text style={styles.quotesheading}>Weekend Getaway</Text>
            <Text style={styles.quotestxt}>Escape the weekday hustle and embrace relaxation with our exclusive weekend getaway offer.</Text>
        </Pressable>
        <Pressable style={styles.quotes}>
            <Text style={styles.quotesheading}>Romantic Retreat</Text>
            <Text style={styles.quotestxt}>Rekindle romance with our enchanting package, designed to create timeless memories together.</Text>
        </Pressable>
        <Pressable style={styles.quotesdiff}>
            <Text style={styles.quotesheadingdiff}>Honeymoon Paradise</Text>
            <Text style={styles.quotestxtdiff}>Begin your journey of love in a paradise built for two. Discover the magic of togetherness.</Text>
        </Pressable>
      </ScrollView>
      {
        OfferBanner.map((item) => (

          <View style={styles.offer} key={item.id}>
            <Image source={item.image} style={styles.offerimage} />
          </View>
        ))
      }
    </View>
    </ScrollView>
  )
}

export default Offers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    paddingBottom:50
  },
  header: {
    paddingVertical: 20,

  },
  headertxt: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    marginLeft: 10
  },
  headertxt2: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    marginLeft: 10
  },
  offer: {
    marginVertical: 15
  },
  offerimage: {
    height: 200,
    width: '100%',
    borderRadius: 10
  },
  quotes:{
    height:150,
    width:200,
    backgroundColor:'#003580',
    borderRadius:15,
    padding:20,
    marginHorizontal:10
  },
  quotesheading:{
    color:'#fff',
    alignSelf:'center',
    fontWeight:'600',
    fontSize:16,
    marginBottom:10
  },
  quotestxt:{
    color:'#fff',
    alignSelf:'center',
    fontWeight:'400',
    fontSize:13,
    marginBottom:5
  },
  quotesdiff:{
    height:150,
    width:200,
    backgroundColor:'#fafaf2',
    borderRadius:15,
    padding:20,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'#ccc'
  },
  quotesheadingdiff:{
    color:'#000',
    alignSelf:'center',
    fontWeight:'600',
    fontSize:16,
    marginBottom:10
  },
  quotestxtdiff:{
    color:'#000',
    alignSelf:'center',
    fontWeight:'400',
    fontSize:13,
    marginBottom:5,
  },
})