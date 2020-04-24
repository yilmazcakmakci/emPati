import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './home'
import PurchaseScreen from './purchase'
import header from '../../utils/header'
import { AppContext } from '../../context';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  
  const { point } = useContext(AppContext)

  return (
    <HomeStack.Navigator screenOptions={{headerShown : false}} headerMode='screen'>
      <HomeStack.Screen name="Home" component={HomeScreen}  />
      <HomeStack.Screen 
        name="Purchase" 
        component={PurchaseScreen} 
        options={({route, navigation}) => header('Puanları Harca',true,null,point,() => navigation.goBack())} />
    </HomeStack.Navigator>
  )
}