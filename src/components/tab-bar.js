import React from 'react'
import { Qrcode, Home, User } from './icons'
import MenuButton from './menu-button';
import Box from './box';
import { View,Text } from 'react-native'

export default function TabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          return label === 'QRCode' ? 
              <MenuButton onPress={onPress}  mt={-10} px={16}>
                <Text> <Qrcode /> </Text>
              </MenuButton>
           : <MenuButton height={48} onPress={onPress} flex={1} flexDirection='column'>
                { label === 'Home' && <Home />}
                { label === 'Profile' && <User />}
                <Box size={3} mt={5} bg={ isFocused ? 'red' : 'white'} borderRadius='9999px' />
              </MenuButton>
        })}
      </View>
    );
  }