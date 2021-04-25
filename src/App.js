import React from 'react'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AuthStackNavigator from './navigators/AuthStackNavigator'
import { ligthTheme } from './themes/ligthTheme'
// Icons
// https://www.npmjs.com/package/react-native-ionicons

const RootStack = createStackNavigator()


export default function() {
  return (
    <NavigationContainer theme={ligthTheme}>
        <RootStack.Navigator screenOptions={{
           headerShown:false
        }}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
        </RootStack.Navigator>
    </NavigationContainer>
  )
}

