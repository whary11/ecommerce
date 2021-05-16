import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { borderRadiusCostom, colors } from '../config/styles'
import { getTranslate } from '../functions/translation'

export default function Button({children, style, ...props}) {
    getTranslate()
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
        padding:15,
        alignItems:'center',
        ...borderRadiusCostom
    }
})
