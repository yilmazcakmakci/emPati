import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import header from '../utils/header'
import { AppContext } from '../context';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { Back } from '../components/icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../components/button';
import { removeItem } from '../utils/functions'

const ProfileStack = createStackNavigator();

const  ProfileStackScreen = () => {
  
  const { point } = useContext(AppContext)

  return (
    <ProfileStack.Navigator screenOptions={{headerShown : false}} headerMode='screen'>
      <ProfileStack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={({route, navigation}) => header('Profil',false,() => navigation.navigate('Home',{ screen : 'Purchase'}),point, () => navigation.goBack())} />
    </ProfileStack.Navigator>
  )
}

const ProfileScreen = () => {

  const { changeUser, user } = useContext(AppContext)

  const signOut = () => {
    removeItem('user').then( data => data ? changeUser({},false) : false)
  }

  return (
    <View style={{paddingHorizontal:25,marginTop:110,flex:1}}>
      <StatusBar backgroundColor='black' />

      <View style={styles.container}>
        <Image source={require('../components/icons/profile.png')} style={{marginTop: -40}} />
        <Text style={styles.text}> {user.name} </Text>
        <Text style={styles.text2}> {user.email} </Text>
        
        <TouchableOpacity style={styles.card}>
          <Text>Besleme Geçmişi</Text>
          <View style={styles.icon}>
            <Back fill='black' />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text>Satın Alım Geçmişi</Text>
          <View style={styles.icon}>
            <Back stroke='black' fill='black' />
          </View>
        </TouchableOpacity>

        <CustomButton title='Çıkış Yap' style={{px:24,py:12,mt:50,width:300}} onPress={signOut}/>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    backgroundColor : 'white',
    borderRadius : 15,
    flex : 0.75
  },
  text : {
    fontWeight : 'bold',
    fontSize : 20,
    marginTop : 25
  },
  text2 : {
    color : 'gray',
    fontSize : 14
  },
  icon : {
    transform : [{ rotate : '180deg'}]
  },
  card : {
    flexDirection : 'row',
    backgroundColor : '#E2E2E2',
    paddingHorizontal:25,
    paddingVertical:10,
    width : 300,
    justifyContent : 'space-between',
    alignItems : 'center',
    borderRadius : 10,
    marginTop : 25
  }
})

export default ProfileStackScreen