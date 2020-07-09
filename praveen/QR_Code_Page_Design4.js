import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Header_Component from './Header_Component';
export default class QR_Code_Page_Design4 extends React.Component {

    USER=()=>{
        this.props.navigation.navigate("Details");
    }
    render() {
        return (

            <View style={{flex:1}}>
                <View style={{flex:1}}>
                <Header_Component
                    source2={require('./ICON/cancel.png')}
                    onPress={this.USER}
                    headerTitle={'SCAN'}
                    />
                    </View>
                <View style={{ flex:9 }}>
                    <View style={{ flex: 6,backgroundColor:'grey' }}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:120}} >
                            <Image  style={{width:150,height:150}} source={require('./ICON/QR_Code.png')}/>
                            <Text>Scanning...</Text>
                        </View>
                    </View>
                       
                    </View>
                    <View style={{ flex: 4}}>
                    <View style={{marginLeft:30,marginTop:40}}>
                    <Text>
                            Trouble Scanning QR Code? Enter Manually
                    </Text>
                    <View style={{borderWidth:2,borderColor:'grey',
                    width:350,height:40,borderRadius:5,marginTop:5,backgroundColor:'white'}}>
                    <TextInput placeholder={'Enter Pass ID'}/>
                    </View>
                    </View>
                    </View>
                </View>
            
        )
    }
}