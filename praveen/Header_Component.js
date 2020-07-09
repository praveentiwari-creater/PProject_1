import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const Header_Component = (props) => {


    return (
        <View style={[styles.main,props.BackgroundColor]} >
        <View>
            <TouchableOpacity onPress={props.onPress1} style={styles.imag1}>
                <Image source={props.source1} />
            </TouchableOpacity>
          </View>
            <View >
                <Text style={styles.tex}>
                    {props.headerTitle}
                </Text>
            </View>
            <View>
            <TouchableOpacity onPress={props.onPress} style={styles.imag2}>
                <Image style={{ width: 50, height: 50 }} source={props.source2} />
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
       // backgroundColor: props.backgroundColorHeader,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

    },
    imag1: {

        alignSelf: 'flex-start'
    },
    imag2: {
        alignSelf: 'flex-end',

        marginTop: 2
    },
    tex: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 13,
        fontSize: 20

    }

})


export default Header_Component;

//         options={{
        //   title: 'My home',
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}