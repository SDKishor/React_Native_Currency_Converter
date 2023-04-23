import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {PropsWithChildren} from 'react'

type currencyBtnProps = PropsWithChildren<{
    name: string,
    flag: string
}>

export default function CurrencyBtn(props: currencyBtnProps): JSX.Element {
  return (
    <View style={styles.btnContainer}>
      <Text >{props.name}</Text>
      <Text style={styles.btnFlag}>{props.flag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:15,
        margin:5,
        borderRadius:50,
    },
    btnFlag:{fontSize:20}
})