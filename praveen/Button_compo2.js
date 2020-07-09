import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const Button_compo1 = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress2}>
            <View style={{
                backgroundColor: props.backgroundColor2,
                width: 130, height: 40, borderTopRightRadius: 20, borderBottomRightRadius: 20
            }}>
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', 
                marginTop: 8 ,color:props.color2}}>
                    {props.Buttonname2}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button_compo1;