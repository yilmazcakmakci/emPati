import React, { useContext, useEffect, useState } from 'react'
import CustomButton from '../components/button'
import { ImageBackground, View, StatusBar, Alert } from 'react-native'
import { AppContext } from '../context'
import { getData, setData } from '../utils/functions'
import Input from '../components/input'
import { users } from '../utils/variables'
import { ScrollView } from 'react-native-gesture-handler'

export default function SplashScreen() {

    const user1 = {
        name : 'Yılmaz',
        age : 22
    }
    
    const { login, changeUser } = useContext(AppContext)

    const [showSıgnIn, show] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=> {
        
        getData('user').then( user => {
            user === null ? show(true) : setTimeout(() => {
                changeUser(user,true)
            }, 1000);
        })

    },[])

    const isUserExist = async (email,password) => {
        const result = users.find(user => {
            return user.email === email && user.password === password
        })
        return result
    }
    
    const handleSignErrors = () => {
        Alert.alert('Giriş Başarısız', 'Email veya şifre yanlış', [{text:'Tamam',onPress : () => {
            // setEmail('')
            // setPassword('')
        }}])
    }

    const signIn = (email,password) => {        
        isUserExist(email,password)
        .then( user => user !== undefined ? setData('user',user)
        .then(_ => changeUser(user,true)) : handleSignErrors())
    }


    return (
        <View style={{flex:1}}>
            <StatusBar barStyle="light-content" backgroundColor="#000" translucent = {false}/>
            <ImageBackground style={{flex:1,resizeMode:'cover',paddingBottom:'10%'}} source={require('../components/icons/splash-bg.jpg')}>
                {
                    showSıgnIn && (
                        <ScrollView contentContainerStyle={{justifyContent:'flex-end',flexGrow:1,marginHorizontal:'14%'}} keyboardShouldPersistTaps='handled' >
                            <Input value={email} isPassword={false} placeholder='Email' textChange={ text => setEmail(text)} />
                            <Input value={password} isPassword placeholder='Şifre' textChange={ text => setPassword(text)} />
                            <CustomButton title='Giriş Yap' onPress={()=> signIn(email,password)} style={{mt:60,height:50}} />
                        </ScrollView>
                    )
                }
            </ImageBackground>
        </View>
    )
}
