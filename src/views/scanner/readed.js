import React, { useContext, useEffect } from 'react';
import { Text,Image } from 'react-native';
import Box from '../../components/box'
import CustomButton from '../../components/button'
import { calcPoint } from '../../utils/functions';
import { AppContext } from '../../context';

function ReadedScreen( { route : { params : { quality, kg, id, title } }, navigation } ) {
  
  const { feed } = useContext(AppContext)
  
  useEffect(()=> {
    feed(calcPoint(kg,quality))
},[])

  return (
      <Box flex={1}>
        <Image source={require('../../components/icons/cat.png')} style={{width:256,height:256}} />
        <Text style={{fontWeight:'bold',fontSize:24}}>TEŞEKKÜRLER</Text>
        <Text> {`${title} karşılığında ${calcPoint(kg,quality)} PUAN KAZANDINIZ.`} </Text>
        <CustomButton title='Puanları Harca' showIcon size={24} style={{px:24,py:12,mt:25}} leftSpace={10} onPress={() => navigation.navigate('Home',{ screen : 'Purchase'})} />
      </Box>
    )
}

export default ReadedScreen