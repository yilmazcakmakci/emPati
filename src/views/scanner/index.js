import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import QrCodeScreen from './qrcode'
import ReadedScreen from './readed'
import header from '../../utils/header'
import { AppContext } from '../../context'

const QRCodeStack = createStackNavigator();

export default function QRCodeStackScreen() {

  const { point } = useContext(AppContext)

  return (
    <QRCodeStack.Navigator screenOptions={{headerShown : false,title:'Yılmaz'}}>
      <QRCodeStack.Screen name="Scanner" component={QrCodeScreen}  />
      <QRCodeStack.Screen 
        name="Readed" 
        component={ReadedScreen} 
        options={ ({route : { params }, navigation})=> header(params.title, false, () => navigation.navigate('Home',{ screen : 'Purchase'}),point,  () => navigation.goBack())} />
    </QRCodeStack.Navigator>
  );
}