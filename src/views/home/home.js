import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native';
import CustomButton from '../../components/button';
import { Back } from '../../components/icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal, { ModalContent, SlideAnimation, ModalTitle, ModalButton }  from 'react-native-modals'
import CheckBox from '@react-native-community/checkbox';
import { alignItems } from 'styled-system';
import ModalFooter from 'react-native-modals/dist/components/ModalFooter';
import { setData, getData } from '../../utils/functions';

const img1 = 'https://res.cloudinary.com/valkyrja/image/upload/v1587209380/odevler/dilos.jpg'
const img2 = 'https://res.cloudinary.com/valkyrja/image/upload/v1587209421/odevler/storytel.jpg'

function HomeScreen({ navigation : { navigate } }) {
  
  const [ visiblity, hide] = useState(false)
  const [ checked, check] = useState(true)

  useEffect(()=> {
        
    getData('neverShow').then( data => {
        data === null ? hide(true) : hide(false)
    })

},[])

  const handleCheckbox = () => {
    checked && setData('neverShow', true)
    hide(false)
  }

  return (
    <View>
      <ImageBackground source={require('../../components/icons/dog.jpg')} style={{flexBasis:'40%'}} />
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

      <Modal
          onDismiss={handleCheckbox}
          onTouchOutside={handleCheckbox}
          swipeDirection="down"
          onSwipeOut={handleCheckbox}
          visible={visiblity}
          modalTitle={
            <ModalTitle
              title="Uyarı"
              hasTitleBar={false}
            />
          }
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom'})}
          footer={
            <ModalFooter>
              <ModalButton
                text="Tamam"
                onPress={handleCheckbox}
              />
            </ModalFooter>
          }
        >
          <ModalContent>
            <Text>
              Bu uygulama, Bilecik Şeyh Edebali Üniversitesi Yönetim Bilişim Sistemleri Bilişimde Proje Yönetimi dersi ödevi için yapılmıştır ve uygulama içerisindeki verilerin gerçek kişi ve kurumlarla ilgisi yoktur.
            </Text>
            <View style={styles.checkBox}>
              <CheckBox
                value={checked}
                disabled={false}
                onValueChange={() => check(!checked)}
              />
              <Text>Bir daha gösterme</Text>
            </View>
          </ModalContent>
        </Modal>

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
  },
  checkBox : {
    marginTop : 15,
    flexDirection : 'row',
    alignItems : 'center'
  }
})

export default HomeScreen