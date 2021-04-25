import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { borderRadiusCostom, colors } from '../config/styles'

export default function Button({children, style, ...props}) {
    return (
        <TouchableOpacity {...props} style={[styles.button, style]}>
           {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width:300,
        backgroundColor:colors.primaryColor,
        padding:20,
        alignItems:'center',
        ...borderRadiusCostom
    }
})
