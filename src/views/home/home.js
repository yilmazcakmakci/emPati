import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native';
import CustomButton from '../../components/button';
import { Back } from '../../components/icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const img1 = 'https://res.cloudinary.com/valkyrja/image/upload/v1587209380/odevler/dilos.jpg'
const img2 = 'https://res.cloudinary.com/valkyrja/image/upload/v1587209421/odevler/storytel.jpg'

function HomeScreen({ navigation : { navigate } }) {
  return (
    <View>
      <ImageBackground source={require('../../components/icons/dog.jpg')} style={{height:325}} />
      <CustomButton title='BESLE' style={{mt:-30,mx:60,fontSize:24,py:10}} onPress={() => navigate('QRCode')} />

      <View style={styles.container}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.text}>Fırsatlar</Text>
          <TouchableOpacity style={styles.icon} onPress={() => navigate('Purchase')}>
            <Back fill='black' />
          </TouchableOpacity>
        </View>

        <View style={styles.imgContainer}>
          <Image source={{uri : img1, width:170,height:110}} style={{borderRadius:20}} />
          <Image source={{uri : img2, width:170,height:110}} style={{borderRadius:20}} />
        </View>

        <ImageBackground source={require('../../components/icons/mama.png')} style={{height:150,marginTop:50,justifyContent:'flex-end',paddingBottom:25,paddingRight:25}}>
          <CustomButton title='Sipariş Ver' style={{alignSelf:'flex-end',px:30,py:12}} />
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal : 40,
    marginTop : 30
  },
  icon : {
    transform : [{ rotate : '180deg'}]
  },
  text : {
    fontSize : 20,
    fontWeight : 'bold'
  },
  imgContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 25
  }
})

export default HomeScreen