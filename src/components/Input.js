import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { borderRadiusCostom } from '../config/styles'

export default function Input({style, ...props}) {
    return <TextInput {...props} style={[styles.input, style]}/>
    
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:"white",
        width:"100%",
        padding: 20,
        // ...borderRadiusCostom,
        borderColor:'white',
        borderBottomColor:"#BDC4CC",
        borderWidth: .5,
        fontSize:20,
        color:"black"
    }
})
