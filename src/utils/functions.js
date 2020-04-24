import AsyncStorage from '@react-native-community/async-storage';
import { Clipboard } from 'react-native'

export const setData = async (key,user) => {
    try {
        await AsyncStorage.setItem(key.toString(), JSON.stringify(user))
    } 
    catch(e) {
        console.log(e)
    }
}
export const getData = async (key) => {
    try {
        const user = await AsyncStorage.getItem(key.toString())
        return JSON.parse(user)
    } 
    catch (e) {
        console.log(e)
    }
}

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key.toString());
        return true;
    }
    catch(exception) {
        return false;
    }
}

export const calcPoint = (kg, quality) => {
    return kg * quality * 100
}

export const copyToClipboard = async (text) => {
    Clipboard.setString(text)
}