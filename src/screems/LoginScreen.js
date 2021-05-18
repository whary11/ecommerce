import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { colors } from '../config/styles'
import { logCompany } from '../functions/log'
import { validateEmail, validatePassword } from '../functions/validations'
import { getTranslate } from '../functions/translation'

export default function LoginScreen({navigation}) {
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [isErrorPassword, setIsErrorPassword] = useState(false)
    const handlerFocus = (h)=>{
        setFocusEmail(true)
        setFocusPassword(false)
    }

    const handlerFocusPassword = (h)=>{
        setFocusPassword(true)
        setFocusEmail(false)
    }

    

    const handlerChangeText = (type, data) =>{
        setIsErrorEmail(false)
        setIsErrorPassword(false)
        type == "email" && setEmail(data)
        type == "password" && setPassword(data)
        if (type == 'email' && data.length > 1 && !validateEmail(data)) {
            setIsErrorEmail(true)
        }
        if (type == 'password' && data.length > 1 && !validatePassword(data)) {
            setIsErrorPassword(true)
        }
        
    }

    const handlerLogin = () =>{
        if (!isErrorEmail && !isErrorPassword) {
            alert(`Todo bien para loguearte [${email}, ${password}]`)
        }
    }
    return (
        <View style={{margin:10}}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTextWelcome}>{getTranslate('welcome')},</Text>
                <Text 
                    style={styles.headerTextSignUp}
                    onPress={() =>{navigation.navigate("Register")}}
                >{getTranslate('signup')}</Text>
            </View>
            <Text style={styles.textContinue}>{getTranslate('sign_in_to_ontinue')}</Text>
            <View style={styles.container}>
                <Input
                    autoCapitalize="none" 
                    placeholder={getTranslate('email')}
                    onFocus={handlerFocus}
                    style={[focusEmail && styles.focusStyle, isErrorEmail && styles.error]}
                    onChangeText={text => handlerChangeText('email', text)}
                />
                <Input 
                    placeholder={getTranslate('password')}
                    secureTextEntry={true}
                    onFocus={handlerFocusPassword}
                    onChangeText={text => handlerChangeText('password', text)}
                    style={[styles.inputPassword, focusPassword && styles.focusStyle, isErrorPassword && styles.error]}
                />
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>{getTranslate('forgot_password')} ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() =>  handlerLogin()}>
                        <Text style={styles.textButton}>{getTranslate("signin")}</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin:20
    },
    inputPassword:{
        marginTop:20,
    },
    focusStyle:{
        borderBottomColor:colors.primaryColor
    },
    error:{
        borderBottomColor:colors.colorError
    },
    forgotPasswordContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:10,
    },
    forgotPasswordText:{
        fontSize:16,
        color:"black",
        // fontWeight:"bold",
    },
    textRegister:{
        fontSize:16,
        color:colors.primaryColor
    },
    textButton:{
        color:"#FFFFFF",
        fontSize:24,
        textTransform:'uppercase'
    },
    buttonContainer:{
        marginTop:20
    },
    headerContainer:{
        margin:15,
        marginTop:200,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerTextWelcome:{
        color:'#000000',
        fontSize:30,
        fontWeight:'bold',
    },
    textContinue:{
        color:'#929292',
        fontSize:14,
        margin:15,
        marginTop:0
    },
    
    headerTextSignUp:{
        color:colors.primaryColor,
        fontSize:18
    },
})
