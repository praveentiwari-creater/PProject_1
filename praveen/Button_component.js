import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const Button_component = (props) => {
return (
        <TouchableOpacity style={styles.butt1} onPress={props.onPress}>
            <Text style={{textAlign:'center',fontSize: 20,fontWeight:'bold',color:'white'}}>
                {props.Buttonname}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    butt1: {
        backgroundColor: 'blue',
        width: 360,
        height: 40,
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center'

    }
})

export default Button_component;
