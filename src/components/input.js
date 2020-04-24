import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'

const Input = ({placeholder, textChange, isPassword, value}) => {
    return (
        <TextInput value={value} secureTextEntry={isPassword} placeholder={placeholder} style={styles.input} onChangeText={textChange} />
    )
}

const styles = StyleSheet.create({
    input : {
        paddingHorizontal : 20,
        paddingVertical : 5,
        marginTop : 25,
        fontSize : 16,
        color : '#2d2525',
        backgroundColor : '#e2e2e2',
        height : 50,
        borderRadius : 37
    }
})

export default Input