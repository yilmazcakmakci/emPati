import React, { useRef, useContext } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Box from '../../components/box'
import { AppContext } from '../../context';
import Axios from 'axios'

function QrCodeScreen({ navigation : { navigate } }) {

  const { feed } = useContext(AppContext)
  const scanner = useRef(null)
  const onRead = (e) => {
    
    const isValidCode = async (id) => {
      const result = await Axios.get('https://raw.githubusercontent.com/yilmazcakmakci/emPati/master/src/utils/variables/qrCodes.json')
      .then(data => data.data.find(code => {
          return code.id === id
      }))
      return result
    }

    // const checkQR = data => {
    //   return data.id === e.data
    // }

    // const check = qrCodes.find(checkQR)

    isValidCode(e.data)
    .then( res => res !== undefined ? navigate('Readed', { kg : res.weight, id : res.id, title : res.name, quality : res.quality })
    : scanner.current.reactivate())
    .catch( err => console.log(err))
    
    // if(check === undefined) {
    //   scanner.current.reactivate()
    // }
    // else {
    //   navigate('Readed', { kg : check.weight, id : check.id, title : check.name, quality : check.quality })
    // }
  
  }
  
  return (
      <Box flex={1}>
        <QRCodeScanner vibrate={false} reactivate onRead={onRead} showMarker ref={scanner} 
          bottomViewStyle={styles.zeroContainer} 
          topViewStyle={styles.zeroContainer} 
          cameraStyle={styles.cameraContainer} />
      </Box>
    )
}

const styles = StyleSheet.create({
  zeroContainer: {
    height: 0,
    flex: 0,
  },

  cameraContainer: {
    height: Dimensions.get('window').height,
  },
})

export default QrCodeScreen

//Tekrar aynı QR kodu kullanma açık