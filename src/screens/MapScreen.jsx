import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
    const { item } = route.params;
    const latitude = item ? item.latitude : 37.78825;
    const longitude = item ? item.longitude : -122.4324;
    console.log(item)
    return (
        <View style={styles.container}>
            <MapView style={{ flex: 1 }}
                initialRegion={{
                    latitude, 
                    longitude ,    
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker coordinate={{ latitude, longitude }} title={item ? item.name : 'Default Location'} />

            </MapView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})