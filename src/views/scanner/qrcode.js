import React, { useRef, useContext } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Box from '../../components/box'
import { qrCodes } from '../../utils/variables'
import { AppContext } from '../../context';
import { calcPoint } from '../../utils/functions';

function QrCodeScreen({ navigation : { navigate } }) {

  const { feed } = useContext(AppContext)
  const scanner = useRef(null)
  const onRead = (e) => {
    
    const checkQR = data => {
      return data.id === e.data
    }

    const check = qrCodes.find(checkQR)
    
    if(check === undefined) {
      scanner.current.reactivate()
    }
    else {
      navigate('Readed', { kg : check.weight, id : check.id, title : check.name, quality : check.quality })
    }
  
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