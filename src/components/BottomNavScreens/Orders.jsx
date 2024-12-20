import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headertxt}>Your Orders</Text>
      </View>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
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