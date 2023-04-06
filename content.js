import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from './component/button';
import { Colors } from './utils/colors';

import { useSelector } from 'react-redux';

const Content = () => {
    const {result, number, even} = useSelector( state=>state )
    return(
      <>
        <View style={styles.contentNumber}>
            <View style={styles.Number}>
            {
                number?.split('').map((item, index) => {
                  return(
                    item === '/' ? (
                      <Text style={[!even?styles.textNumber :styles.textNumberFalse,{color: Colors.emerald}]} key={index}>{item}</Text>
                    ) : item === '*' ? (
                      <Text style={[!even?styles.textNumber :styles.textNumberFalse,{color: Colors.emerald}]} key={index}>{item}</Text>
                    ) : item === '-' ? (
                      <Text style={[!even?styles.textNumber :styles.textNumberFalse,{color: Colors.emerald}]} key={index}>{item}</Text>
                    ) : item === '+' ? (
                      <Text style={[!even?styles.textNumber :styles.textNumberFalse,{color: Colors.emerald}]} key={index}>{item}</Text>
                    ) : (
                      <Text style={[!even?styles.textNumber :styles.textNumberFalse,{color: !even?Colors.dark : Colors.grey}]} key={index}>{item}</Text>
                    )
                  )
                })
              }
              
            </View>
            <Text style={even? styles.inputNumber : styles.inputNumberFalse}>= {result}</Text>
        </View>
        <View style={styles.buttonCalculator}>
            <Button/>
        </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F8FB',
    },
    buttonCalculator: {
      paddingHorizontal: 35,
      paddingTop: 135,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      justifyContent: 'center',
    },
    contentNumber: {
      paddingHorizontal: 35,
      paddingTop: 140,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    Number: {
      display: 'flex',
      flexDirection: 'row',
    },
    textNumber:{
      fontSize: 48,
      fontWeight: 500,
    },
    textNumberFalse:{
      fontSize: 24,
      fontWeight: 400,
    },
    inputNumber:{
      fontSize: 48,
      fontWeight: 500,
      color: Colors.dark
    },
    inputNumberFalse:{
      fontSize: 24,
      fontWeight: 400,
      color: Colors.grey
    },
  });

export default Content