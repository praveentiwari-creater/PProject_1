import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Button_compo1 from "./Button_compo1";
import Button_compo2 from "./Button_compo2";
import Header_Component from './Header_Component';
export default class Details_Page_Design3 extends React.Component {
    USER2 = () => {
        this.props.navigation.navigate("Delivery");
    }
    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal:10 }}>
                <View style={{ flex: 1 }}>
                    <Header_Component
                        source1={require('./ICON/back_arrow.png')}
                        onPress1={this.USER2}
                        headerTitle={'#ID 01256C'}
                        
                    />
                </View>

                <View style={{ flex: 9 ,marginVertical:10}}>
                <ScrollView >
                    <View style={{ flex: 4.5, backgroundColor: 'white', borderRadius: 10 }} >
                        <View >
                            <Image style={{ width: 400, height: 140 }} source={require('./ICON/map.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>

                            <Text style={{ fontWeight: 'bold',marginLeft: 20 }}>ORDER ID :</Text>
                            <Text> D012456C</Text>
                            <Text style={{ marginLeft: 120 }}> mar-18-2020</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image style={{ width: 30, height: 30, marginLeft: 12 }} source={require('./ICON/delevery_blue.png')} />
                            <Text style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 20 }}>32 GB dkhfh:</Text>
                            <Text style={{ marginTop: 5 }}> Glass dkwkkdwk  kkkdwl</Text>
                        </View>
                        <Text style={{ marginLeft: 60 }} > mekbkdbfdo dfbnd</Text>

                        <View style={{
                            flexDirection: 'row', marginTop: 10,
                        }}>
                            <Image style={{ width: 30, height: 30, marginLeft: 15,marginBottom:20 }} source={require('./ICON/location.png')} />
                            <Text style={{ marginLeft: 15 ,marginTop:5}} > mekbkdbfdo dfbnd</Text>
                        </View>

                    </View>
                    <View style={{ flex: 3.5 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>MOBILE WORLD SHOP</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row', width: 390, height: 70,
                            borderRadius: 15, backgroundColor: 'white', marginTop: 5, justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: 60, height: 60, borderRadius: 30, backgroundColor: 'grey'
                                , marginLeft: 5, marginTop: 5
                            }}>
                                <Image style={{ width: 60, height: 60 }} source={require('./ICON/sandisk.png')} />
                            </View>
                            <View>
                                <Text> SanDisk Ultra 32 Gb</Text>
                                <Text > kjdlfldslds dnnd ndld</Text>
                                <Text > kjdlfldslds dnnd ndld</Text>

                            </View>
                            <View style={{
                                width: 20, height: 20, borderRadius: 10, backgroundColor: 'grey'
                                , marginTop: 25, marginRight: 20
                            }}>

                            </View>

                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>MOBILE STORE</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row', width: 390, height: 70,
                            borderRadius: 15, backgroundColor: 'white', marginTop: 5, justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: 60, height: 60, borderRadius: 30, backgroundColor: 'grey'
                                , marginLeft: 5, marginTop: 5
                            }}>
                                <Image style={{ width: 60, height: 60 }} source={require('./ICON/sandisk.png')} />
                            </View>
                            <View>
                                <Text> SanDisk Ultra 32 Gb</Text>
                                <Text > kjdlfldslds dnnd ndld</Text>
                                <Text > kjdlfldslds dnnd ndld</Text>

                            </View>
                            <View style={{
                                width: 20, height: 20, borderRadius: 10, backgroundColor: 'grey'
                                , marginTop: 25, marginRight: 20
                            }}>
                                <Image style={{ width: 20, height: 20 }} source={require('./ICON/correct.png')} />
                            </View>

                        </View>

                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10,marginVertical:10 }}>
                            <View style={{
                                width: 185, height: 50, borderRadius: 20, backgroundColor: 'white'
                                , marginRight: 20
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 20, height: 20, marginTop: 15, marginLeft: 15 }} source={require('./ICON/calling.png')} />
                                    <Text style={{ marginTop: 15, marginLeft: 20 }}>center</Text>
                                </View>
                            </View>
                            <View style={{
                                width: 185, height: 50, borderRadius: 20, backgroundColor: 'white'
                                , marginRight: 20
                            }}>
                                <TouchableOpacity onPress={this.USER1}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 20, height: 20, marginTop: 15, marginLeft: 15 }} source={require('./ICON/contact.png')} />
                                    <Text style={{ marginTop: 15, marginLeft: 20 }}>CUSTOMER</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <TouchableOpacity onPress={this.USER}>
                                <View style={{
                                    width: 185, height: 50, borderRadius: 20, backgroundColor: 'blue'
                                    , marginRight: 20
                                }}>

                                    <View style={{ flexDirection: 'row' }}>

                                        <Image style={{ width: 20, height: 20, marginTop: 15, marginLeft: 15 }} source={require('./ICON/QR_Code.png')} />
                                        <Text style={{ marginTop: 15, marginLeft: 20 }}>SCAN QR CODE</Text>
                                    </View>

                                </View>
                            </TouchableOpacity >
                            <View style={{
                                width: 185, height: 50, borderRadius: 20, backgroundColor: 'white'
                                , marginRight: 20
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 20, height: 20, marginTop: 15, marginLeft: 15 }} source={require('./ICON/correct.png')} />
                                    <Text style={{ marginTop: 15, marginLeft: 20 }}>DESIDED</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    </ScrollView>
                </View>
        
            </View>
        )
    }
    USER=()=>{
        this.props.navigation.navigate("QR_Code");
    }
    USER1=()=>{
        this.props.navigation.navigate("Profile");
    }
}





const styles = StyleSheet.create({
    text: {
        width: 360,
        height: 40,
        borderWidth: 2,
        borderRadius: 7,
        margin: 5,
        borderColor: 'blue'
    },
    button: {
        width: 360,
        height: 40,
        margin: 20,

    },
    bottonCol: {
        backgroundColor: 'red'
    }

})

