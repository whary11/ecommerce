import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { colors } from '../config/styles'
import { logCompany } from '../functions/log'
import { getTranslate } from '../functions/translation'

export default function LoginScreen({navigation}) {
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlerFocus = (h)=>{
        setFocusEmail(true)
        setFocusPassword(false)
    }

    useEffect(() => {
        return () => {
            logCompany(email, ' ---- ', password)
        }
    }, [password, email])

    const handlerFocusPassword = (h)=>{
        setFocusPassword(true)
        setFocusEmail(false)
    }
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTextWelcome}>{getTranslate('welcome')},</Text>
                <Text 
                    style={styles.headerTextSignUp}
                    onPress={() =>{navigation.navigate("Register")}}
                >{getTranslate('signup')}</Text>
            </View>
            <Text style={styles.textContinue}>{getTranslate('sign_in_to_ontinue')}</Text>
            <View style={styles.container}>
                <Input placeholder={getTranslate('email')} type="email" onFocus={handlerFocus} style={focusEmail && styles.focusStyle} onChangeText={text => setEmail(text)} />
                <Input placeholder={getTranslate('password')} secureTextEntry={true} onFocus={handlerFocusPassword} onChangeText={text => setPassword(text)}  style={[styles.inputPassword, focusPassword && styles.focusStyle]}/>
                <View style={styles.forgotPasswordContainer}>
                    {/* <TouchableOpacity>
                        <Text style={styles.textRegister} onPress={() =>{navigation.navigate("Register")}}>{getTranslate('register')}</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>{getTranslate('forgot_password')} ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => logCompany('Iniciar sesión.', 'Email: ',email, ' Password: ', password)}>
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
        borderBottomColor:"green"
    },
    forgotPasswordContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:10,
    },
    forgotPasswordText:{
        fontSize:16,
        color:"black"
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
