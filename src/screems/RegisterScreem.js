import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RegisterScreem({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Registers</Text>
            <Text onPress={() =>{navigation.navigate("Login")}}>Volver al login</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 18,
        paddingTop: 120,
        alignItems: 'center',
    }
})
