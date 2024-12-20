import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rooms = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headertxt}>Bookings</Text>
      </View>
    </View>
  )
}

export default Rooms

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
      paddingVertical:15,
      borderBottomWidth:1,
      borderBottomColor:'#ccc',
      marginHorizontal:15
    },
    headertxt:{
      fontWeight:'500',
      fontSize:24,
      color: '#000',
      marginLeft:10
    }
})