import React, { useState, useContext } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import CustomButton from './button'
import Modal, { ModalContent, ModalButton } from 'react-native-modals'
import { AppContext } from '../context'
import { copyToClipboard } from '../utils/functions'

const Card = ({data : { title, img, price, code }}) => {
    
    const [visiblity, showModal] = useState(false)
    const [error, showError] = useState(false)
    const [isApproved, approve] = useState(false)


    const { purchase, point } = useContext(AppContext)

    const onModalClosed = () => {
        showModal(false)
        showError(false)
        approve(false)
    }

    return (
        <View style={{flexDirection:'row',marginVertical:20}}>
            <Image source={{uri : img, width:144,height:98}} style={{borderRadius:20}} />
            <View style={{flex:1,justifyContent:"space-between",paddingHorizontal:25}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{title}</Text>
                <CustomButton title={price} showIcon size={20} leftSpace={5} style={{px:15,py:6,flex:0,width:90}} onPress={ ()=> showModal(true)} />
            </View>

            <Modal.BottomModal
                height={0.5}
                visible={visiblity} 
                onTouchOutside={onModalClosed} 
                onSwipeOut={onModalClosed}
                >
                <ModalContent style={{alignItems:'center',paddingHorizontal:50}}>
                    {
                        error ? <Text>YETERSİZ PUAN</Text> : isApproved ? <Completed code={code} /> : (
                            <>
                            <Image source={{uri : img, width:144,height:98}} style={{borderRadius:20}} />
                            <Text style={{textAlign:'center',marginVertical:25}}><Text style={styles.bold}>{price}</Text> PUAN karşılığında <Text style={styles.bold}> {title} </Text> almak istiyor musunuz?  </Text>
                            <CustomButton
                                style={{px:16,py:12}} 
                                title='Onayla' 
                                onPress={()=>{
                                    if(point >= price) {
                                        approve(true)
                                        purchase(price)
                                    }
                                    else {
                                        showError(true)
                                    }
                                }}
                             />
                            </>
                        )
                    }
                </ModalContent>
          </Modal.BottomModal>
        </View>
    )
}

const Completed = ({code}) => {
    return (
        <>
        <Image source={require('./icons/cat.png')} style={{width:256,height:256}} />
        <Text style={styles.bold}>TEŞEKKÜRLER</Text>
        <Text style={{fontSize:20,marginVertical:25}} onPress={()=>copyToClipboard(code)}> {code} </Text>
        </>
    )
}

const styles = StyleSheet.create({
    bold : {
        fontWeight:'bold',
        fontSize : 18,
    }
})

export default Card