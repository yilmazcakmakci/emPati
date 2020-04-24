import React from 'react'
import MenuButton from '../components/menu-button'
import { Text } from 'react-native'
import { Pati, Back } from '../components/icons'

const header = (title, disabled, onPress, point, goBack) => {
    return {
        headerLeft : () => {
            return (
                <MenuButton flex={1} px={20} onPress={goBack} >
                    <Back size={24} fill='#fff' />
                </MenuButton>
            )
        },
        headerLeftContainerStyle:{paddingLeft:15},
        headerRight : () => {
            return (
                <MenuButton flex={1} px={20} disabled={disabled} onPress={onPress} >
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginRight:10}}> {point} </Text>
                    <Pati size={24} />
                </MenuButton>
            )
        },
        headerShown:true,
        title,
        headerTintColor:'white',
        headerStyle:{height:60,backgroundColor:'#FF3838',borderBottomStartRadius:25},
    }
}

export default header