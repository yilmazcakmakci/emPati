import React, { useState, useEffect } from 'react';
import { StatusBar, View, YellowBox, ActivityIndicator } from 'react-native';
import Card from '../../components/card';
import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios'

YellowBox.ignoreWarnings(['Warning: Encountered two children'])

function PurchaseScreen() {
  
  const [data, getData] = useState(null)

  useEffect(()=> {
        
    Axios.get('https://raw.githubusercontent.com/yilmazcakmakci/emPati/master/src/utils/variables/opportunities.json')
    .then( data => getData(data.data))
    .catch( err => console.log(err))

  }, [])

    return (
      <View flex={1}>
        <StatusBar backgroundColor='black' />
        
        {
          data === null ? (
            <ActivityIndicator size="large" color="#ff3838" />
          ) : (
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{paddingHorizontal:25,paddingVertical:20}}
              data={data}
              renderItem={({item}) => <Card data={item} />} 
              removeClippedSubviews={true}
              initialNumToRender={4}
          />
          )
        }

      </View>
    )
}

export default PurchaseScreen