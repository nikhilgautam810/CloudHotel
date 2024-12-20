import React, { useEffect, useState } from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { ActivityIndicator, View } from 'react-native'
import AppNavigator from './src/components/AppNavigator'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },1000)

  },[])
  if(isLoading){

    
      return (
        <View style={{flex:1,backgroundColor:'#fff', justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size={50} collapsable={true} color={'#f2ff'} />
        </View>
      )
    
  }

  return (
      <NavigationContainer>
        <AppNavigator/> 
      </NavigationContainer>
    
   
  )
}

export default App

