import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import JTStore from './src/store/JTStore';
import { Provider } from 'react-redux';
import JTNavigator from './src/components/navigation/JTNavigator';


const App =() => {
  return (
    <Provider store={JTStore}>
      <NavigationContainer>
        <JTNavigator/>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})