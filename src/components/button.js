import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, flex, space, flexbox, layout, borderRadius, typography } from 'styled-system'
import { Pati } from './icons'
import theme from '../utils/theme'

const Button = styled(TouchableOpacity)(compose(color,borderRadius,space,flexbox,layout,flex,size, typography))

Button.defaultProps = {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
}

const CustomButton = ({onPress, showIcon, size, leftSpace, title, style}) => {
    return (
        <Button {...style} onPress={onPress}  bg={theme.colors.primary} borderRadius={theme.radii.full} activeOpacity={0.7}>
            {
                showIcon && <Pati size={size} />
            }
            <Text style={{color:'white',fontSize:style.fontSize,fontWeight:'bold',marginLeft:leftSpace}}> {title} </Text>
        </Button>
    )
}

export default CustomButton