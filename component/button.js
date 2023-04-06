import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/colors';
import { ButtonsItem } from '../utils/buttons';
import { useDispatch } from 'react-redux';

const Button = () => {
    const dispatch = useDispatch()
    return(
        <>
        {
            ButtonsItem.map((item, index)=>(
                <TouchableOpacity style={[styles.buttonTouch, {backgroundColor: item.buttonColors}]} key={index} onPress={()=>dispatch({type : item.type})}>
                    <Text style={[styles.buttonText, {color: item.colors}]}>{item.title}</Text>
                </TouchableOpacity>
            ))
        }
        </>
        
    )
}

const styles = StyleSheet.create({
    buttonTouch : {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        width: 62,
        height: 62,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        padding: 7,
        fontSize: 32,
        fontWeight: 500,
    }
})

export default Button