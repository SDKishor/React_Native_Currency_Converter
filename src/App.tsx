import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {currencyByTaka} from './constants'
import Snackbar from 'react-native-snackbar';
import CurrencyBtn from './components/CurrencyBtn';


function App(): JSX.Element {
  const [inputValue, setinputValue] = useState('');
  const [resultValue, setResultValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState(''); 

  const btnPressed = (targetValue: Currency) =>{
    if(!inputValue){
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#Ea7773",
        textColor:"#aaaaaa"
      })
    }

    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }else{
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#Ea7773",
        textColor:"#aaaaaa"
      })
    }
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.takaInputContainer}>
            <Text style={styles.taka}>৳</Text>
          <TextInput
          maxLength={14}
          value={inputValue}
          clearButtonMode='always'
          onChangeText={setinputValue}
          keyboardType='number-pad'
          placeholder='Enter Amount in Taka'
          />
          </View>
          {
            resultValue && (<Text style={styles.resultText}>
              {resultValue}
            </Text>)
          }
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByTaka}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[styles.btnItem,
              targetCurrency === item.name && styles.itemSelected]}
            onPress={()=>btnPressed(item)}
            >
              <CurrencyBtn {...item}/>
            </Pressable>
          )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    
  },
  container: {
    marginVertical:10,
    marginHorizontal:20,
    flex:1,
    justifyContent:"space-between"
  },
  topContainer: {
    marginBottom:10,
  },
  takaInputContainer: {
  display:'flex',
  flexDirection:'row',
  alignItems:"center",
  justifyContent:"center"
  },
  taka: {
    fontSize:20,
    marginRight:5
  },
  resultText: {
    marginTop:20,
    textAlign:'center',
    fontSize:26,
    color:"gold"
  },
  bottomContainer: {
    marginBottom:40
    
  },
  btnItem: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
  },
  itemSelected: { 
    backgroundColor:"#AAA",
  },
  sectionContainer2: {},
});

export default App;
