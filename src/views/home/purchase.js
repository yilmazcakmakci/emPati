import React, { useState } from 'react';
import { Text, StatusBar, View, YellowBox } from 'react-native';
import Card from '../../components/card';
import { FlatList } from 'react-native-gesture-handler';
import { opportunities } from '../../utils/variables';

YellowBox.ignoreWarnings(['Warning: Encountered two children'])

function PurchaseScreen() {
  

    return (
      <View flex={1}>
        <StatusBar backgroundColor='black' />
        
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{paddingHorizontal:25,paddingVertical:20}}
          data={opportunities}
          renderItem={({item}) => <Card data={item} />} 
          removeClippedSubviews={true}
          initialNumToRender={4}
          />

          

      </View>
    )
}

export default PurchaseScreen