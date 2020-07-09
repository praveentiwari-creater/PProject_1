import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Header_Component from './Header_Component';
import Button_component from './Button_component';
export default class Profile_Page_Design5 extends React.Component {

    navig=()=>{
        this.props.navigation.navigate("Login_Page_Design1");
    }

    render() {
        
        return (
          <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header_Component
                        source1={require('./ICON/menu.png')}
                        onPress1={ this.navig}
                        headerTitle={'PROFILE'}
                       />
                </View>
                <View style={{ flex: 9 }}>
                    <View style={{ flex: 3 }}>
                        <View style={{width:80,height:80,borderRadius:40,
                            borderWidth:5,borderColor:'blue',alignItems:'center',
                            justifyContent:'center',marginLeft:150,marginTop:30}}>
                            <Image source={require('./ICON/contact.png')}/>
                        </View>
                    </View>
                    <View style={{ flex: 4 }}>
                        <View style={{marginLeft:30}}>
                        <Text >
                            Name
                        </Text>
                        </View>
                        <View style={{borderWidth:2,borderColor:'green',
                    width:350,height:40,borderRadius:5,marginTop:5,
                    backgroundColor:'white',marginLeft:30,marginTop:5}}>
                        <TextInput placeholder={'Rohit Sharma'}/>
                        </View>

                        <View style={{marginLeft:30,marginTop:10}}>
                        <Text >
                            CRN No
                        </Text>
                        </View>
                        <View style={{borderWidth:2,borderColor:'grey',
                    width:350,height:40,borderRadius:5,marginTop:5,
                    backgroundColor:'white',marginLeft:30,marginTop:5}}>
                        <TextInput placeholder={'Enter Your CRN No'}/>
                        </View>

                        <View style={{marginLeft:30,marginTop:10}}>
                        <Text >
                            Phone Number
                        </Text>
                        </View>
                        <View style={{ flexDirection:'row'}}>
                        <View style={{borderWidth:2,borderColor:'grey',
                    width:70,height:40,borderRadius:5,marginTop:5,
                    backgroundColor:'white',marginLeft:30,
                    marginTop:5}}>
                        <TextInput style={{fontWeight:'bold',color:'black',fontSize:15}}
                         placeholder={'+91 ^'}/>
                         
                        </View>
                        <View style={{borderWidth:2,borderColor:'grey',
                    width:260,height:40,borderRadius:5,marginTop:5,
                    backgroundColor:'white',marginLeft:20,
                    marginTop:5}}>
                        <TextInput placeholder={'Type Your Phone Number'}/>
                         
                        </View>
                        </View>
                        
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{marginTop:25,marginLeft:25}}>
                        <Button_component Buttonname={'SUBMIT'}/>
                    </View>
                    </View>


                </View>
            </View>
        )
    }
}