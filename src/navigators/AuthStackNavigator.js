import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screems/LoginScreen'
import RegisterScreem from '../screems/RegisterScreem'


const AuthStack = createStackNavigator()

export default function AuthStackNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{
           headerShown:false
        }}>
           <AuthStack.Screen name={'Login'} component={LoginScreen} />
           <AuthStack.Screen name={'Register'} component={RegisterScreem} />
        </AuthStack.Navigator>
    )
}

const styles = StyleSheet.create({})
