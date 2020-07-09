import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const Button_compo1 = (props) => {
return (
    <TouchableOpacity onPress={props.onPress1}>
    <View style={{backgroundColor:props.backgroundColor1, width: 130, height: 40,
        borderTopLeftRadius: 20,borderBottomLeftRadius: 20}}>
       <Text style={{ color:props.color1,textAlign:'center',fontSize: 15,fontWeight:'bold', marginTop:8}}>
                {props.Buttonname1}
            </Text>
          </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    // butt1: {
        
       
       
    //     borderTopLeftRadius:20,
    //     borderBottomLeftRadius:20,

    // }
})

export default Button_compo1;