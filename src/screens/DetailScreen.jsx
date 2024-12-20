import { StyleSheet, Text, View, ScrollView, ImageBackground, StatusBar, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import VectorIcons from '../components/VectorIcons';
import { Color } from '../Data/Color';

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scollview} >
      <StatusBar barStyle={'light-content'}
        translucent
        backgroundColor={'rgba(0,0,0,0)'}
      />
      <ImageBackground style={styles.headerimage} source={item.photo}>
        <View style={styles.header}>
          <VectorIcons type='Ionicons' name="chevron-back" color="#fff" size={28} onPress={() => navigation.goBack()} />
          <VectorIcons type='Feather' name="bookmark" color="#fff" size={28} />
        </View>
      </ImageBackground>
      <View>
        <Pressable style={styles.iconcontainer} onPress={()=>navigation.navigate('MapScreen',{item : item})}>
          <VectorIcons type='Entypo' name="location-pin" color="#fff" size={32} />
        </Pressable>
        <View style={styles.roomdetails}>
          <Text style={styles.roomname}>{item.name}</Text>
          <Text style={styles.roomlocation}>{item.location}</Text>
          <View style={styles.roomratings}>
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
          <View style={{ marginTop: 20 }}>
            <Text style={styles.roomdetail}>{item.details}</Text>
          </View>
        </View>
        <View style={styles.prices}>
          <Text style={{fontSize:20,fontWeight:'bold', color:'#000', marginLeft:10}}>Price per night</Text>
          <View style={styles.pricetag}>
            <Text style={{fontSize:16, fontWeight:'bold', color:'grey', marginLeft:5}}>₹{item.price}</Text>
            <Text style={{fontSize:12, fontWeight:'bold', color:'grey', marginLeft:5}}>+ Breakfast</Text>
          </View>
        </View>

        
      </View>

      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('RoomBooking',{item: item})}>
          <Text style={styles.btntxt}>Book Now</Text>
        </TouchableOpacity>

    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  scollview: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20
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
  iconcontainer: {
    backgroundColor: Color.SecondaryColor,
    height: 60,
    width: 60,
    borderRadius: 50,
    position: 'absolute',
    top: -35,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:10
  },
  roomdetails: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  roomname: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold'
  },
  roomdetail: {
    fontSize: 14,
    color: '#009387',
    fontWeight: '400',
    lineHeight: 20

  },
  roomlocation: {
    fontSize: 12,
    color: '#009387',
    fontWeight: '300',
    marginTop: 5

  },
  roomratings: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  prices:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    alignItems:'center'
  },
  pricetag:{
    height:40,
    alignItems:'center',
    paddingLeft:20,
    backgroundColor:'#e6e8eb',
    flex:1,
    marginLeft:40,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    flexDirection:'row',
    elevation:3
  },
  btn:{
    height:55,
    marginTop:40,
    backgroundColor:Color.SecondaryColor,
    marginHorizontal:20,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
    position:'absolute',
    bottom:10,
    width:'90%'
  },
  btntxt:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
  }
})