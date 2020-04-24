import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import TabBar from './tab-bar'
import HomeStackScreen from '../views/home'
import QRCodeStackScreen from '../views/scanner'
import ProfilesScreen from '../views/profile'
import { AppContext } from '../context'
import SplashScreen from '../views/splash'
import header from '../utils/header'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function CustomNavigator() {

    const { isLoggedIn, point } = useContext(AppContext)

    return (
        <NavigationContainer>
            {
                isLoggedIn ? (
                    <Tab.Navigator initialRouteName='Home' tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="Home"  component={HomeStackScreen} />
                        <Tab.Screen name="QRCode" component={QRCodeStackScreen} />
                        <Tab.Screen name="Profile" component={ProfilesScreen} />
                    </Tab.Navigator>
                ) : (
                    <Stack.Navigator>
                        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}} />
                    </Stack.Navigator>
                )
            }
      </NavigationContainer>
    )
}