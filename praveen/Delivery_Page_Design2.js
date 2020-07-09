import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Button_compo1 from "./Button_compo1";
import Button_compo2 from "./Button_compo2";
import Header_Component from './Header_Component';
export default class Delivery_Page_Design2 extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            pageshow: false
        }

    }
    menu = () => {
        this.props.navigation.navigate("Details_Page_Design3");
    }
    press1 = () => {
        this.setState({
            pageshow: true
        })
    }
    press2 = () => {
        this.setState({
            pageshow: false
        })
    }

    onButton = () => {
        this.setState({
            show: true
        })
    }
    on_of = () => {
        this.setState({
            show: false
        })
    }
    Button_Action1=()=>{
        return(
            <View style={{ flex: 1, flexDirection: 'row' }}>

                   
            <View style={{ marginStart: 50, marginTop: 30 }} >
            <Button_compo1 Buttonname1={'PENDING'}
            color1={'white'}
                backgroundColor1={'blue'} 
                    onPress1={this.press2} />
            </View>
            <View style={{ marginTop: 30 }}>
                <Button_compo2 Buttonname2={'HISTORY'}
                  color1={'back'} backgroundColor2={'white'}
                    onPress2={this.press1} />
            </View>
           

        </View>
       
        )

    }
    Button_Action2=()=>{
return(

    <View style={{ flex: 1, flexDirection: 'row' }}>

                   
    <View style={{ marginStart: 50, marginTop: 30 }} >
    <Button_compo1 Buttonname1={'PENDING'}
      color2={'back'}
        backgroundColor1={'white'} 
            onPress1={this.press2} />
    </View>
    <View style={{ marginTop: 30 }}>
        <Button_compo2 Buttonname2={'HISTORY'} backgroundColor2={'blue'}
         color2={'white'}
            onPress2={this.press1} />
    </View>
   

</View>
)


    }
    render() {
        const { navigation } = this.props;
        return (

            <View style={{ flex: 1, marginHorizontal: 10 }}>
                <View style={{ flex: 1 }}>
                    {this.state.show === false ?
                        //this.di()
                        <Header_Component source1={require('./ICON/menu.png')}
                            onPress1={() => navigation.openDrawer()}
                            source2={require('./ICON/of.png')}
                            headerTitle={'DELIVERY'}
                            onPress={this.onButton}
                        />
                        :
                        //this.dd()
                        <Header_Component source1={require('./ICON/menu.png')}
                            onPress1={() => navigation.openDrawer()}
                            source2={require('./ICON/on_of.png')}
                            headerTitle={'DELIVERY'}
                            onPress={this.on_of}
                            backgroundColorHeader={'white'} />
                    }
                </View>
                {this.state.pageshow == false ?
                        this.Button_Action1() : this.Button_Action2()
                    }
                {/* <View style={{ flex: 1, flexDirection: 'row' }}>

                   
                    <View style={{ marginStart: 50, marginTop: 30 }} >
                    <Button_compo1 Buttonname1={'PENDING'}
                        backgroundColor1={'blue'} 
                            onPress1={this.press2} />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button_compo2 Buttonname2={'HISTORY'} backgroundColor2={'white'}
                            onPress2={this.press1} />
                    </View>
                   

                </View> */}

                <View style={{ flex: 8, paddingVertical: 10 }}>
                    {/* <ScrollView> */}
                    {this.state.pageshow == false ?
                        this.fun1() : this.fun2()
                    }
                    {/* </ScrollView> */}
                </View>
            </View>

        )
    }

    fun1 = () => {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 2, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{
                                flexDirection: 'row', borderWidth: 0.1, backgroundColor: 'white',
                                width: 190, height: 100, borderRadius: 20, paddingVertical: 10
                            }} >

                                <Image style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: 30 }} source={require('./ICON/delevery.png')} />

                                <View style={{ marginLeft: 20, alignSelf: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>08</Text>
                                    <View style={{ flexDirection: 'column' }}>

                                        <Text>Delivery</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row', borderWidth: 0.1, backgroundColor: 'white',
                                width: 190, height: 100, borderRadius: 20
                            }} >

                                <Image style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: 30 }} source={require('./ICON/completed.png')} />

                                <View style={{ marginLeft: 20, alignSelf: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>24</Text>
                                    <View style={{ flexDirection: 'column' }}>

                                        <Text>compeleted</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'white', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>



                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>


        )
    }

    fun2 = () => {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'white', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'white', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>



                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 2 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 20, width: 390, height: 150 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>ORDER ID :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10 }}> 000123</Text>
                                <Text style={{ marginTop: 10, marginLeft: 130 }}>736999hdkkskj</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 30, height: 20, marginLeft: 10 }} source={require('./ICON/delevery_blue.png')} />
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>3208 macBookk:</Text>
                                <Text style={{ marginLeft: 10 }}> class 10 98btkn Memory Card</Text>
                            </View>
                            <Text style={{ marginLeft: 50 }}> class 10 98btkn Memory Card</Text>
                            <View style={{
                                flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
                                borderRadius: 20, backgroundColor: 'lightgrey', width: 370, height: 40, marginLeft: 10
                            }}>
                                <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

                                <Text style={{ marginTop: 10 }}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
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

{/* <View style={{ flex: 2,marginTop:15}}>
<View style={{  flexDirection: 'row', justifyContent: 'space-between' }}>

    <View style={{
        flexDirection: 'row', borderWidth: 0.1, backgroundColor: 'white',
        width: 190, height: 100, borderRadius: 20, paddingVertical: 10
    }} >

        <Image style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: 30 }} source={require('./ICON/delevery.png')} />

        <View style={{ marginLeft: 20, alignSelf: 'center' }}>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>08</Text>
            <View style={{ flexDirection: 'column' }}>

                <Text>Delivery</Text>
            </View>
        </View>
    </View>

    <View style={{
        flexDirection: 'row', borderWidth: 0.1, backgroundColor: 'white',
        width: 190, height: 100, borderRadius: 20
    }} >

        <Image style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: 30 }} source={require('./ICON/completed.png')} />

        <View style={{ marginLeft: 20, alignSelf: 'center' }}>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>24</Text>
            <View style={{ flexDirection: 'column' }}>

                <Text>compeleted</Text>
            </View>
        </View>
    </View>

</View>
</View>
<View style={{flex: 2 }}>
    <View style={{ backgroundColor:'white', marginTop: 15,borderRadius:20,width:390,height:150}}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'white',marginTop:10,marginLeft:10 }}>ORDER ID :</Text>
            <Text style={{ marginTop:10,marginLeft:10 }}> 000123</Text>
            <Text style={{ marginTop:10,marginLeft: 130 }}>736999hdkkskj</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image style={{ width: 30, height: 20,marginLeft:10 }} source={require('./ICON/delevery_blue.png')} />
            <Text style={{ fontWeight: 'bold',marginLeft:10 }}>3208 macBookk:</Text>
            <Text style={{ marginLeft:10 }}> class 10 98btkn Memory Card</Text>
        </View>
        <Text style={{ marginLeft:50 }}> class 10 98btkn Memory Card</Text>
        <View style={{
            flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
            borderRadius: 20, backgroundColor: 'lightgrey',width:370,height:40,marginLeft:10
        }}>
            <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

            <Text style={{marginTop:10}}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
        </View>
    </View>
    </View>


   
    <View style={{flex: 2 }}>
    <View style={{ backgroundColor:'white', marginTop: 15,borderRadius:20,width:390,height:150}}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold',marginTop:10,marginLeft:10 }}>ORDER ID :</Text>
            <Text style={{ marginTop:10,marginLeft:10 }}> 000123</Text>
            <Text style={{ marginTop:10,marginLeft: 130 }}>736999hdkkskj</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image style={{ width: 30, height: 20,marginLeft:10 }} source={require('./ICON/delevery_blue.png')} />
            <Text style={{ fontWeight: 'bold',marginLeft:10 }}>3208 macBookk:</Text>
            <Text style={{ marginLeft:10 }}> class 10 98btkn Memory Card</Text>
        </View>
        <Text style={{ marginLeft:50 }}> class 10 98btkn Memory Card</Text>
        <View style={{
            flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
            borderRadius: 20, backgroundColor: 'lightgrey',width:370,height:40,marginLeft:10
        }}>
            <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

            <Text style={{marginTop:10}}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
        </View>
    </View>
    </View>                            

    <View style={{flex: 2 }}>
    <View style={{ backgroundColor:'white', marginTop: 15,borderRadius:20,width:390,height:150}}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold',marginTop:10,marginLeft:10 }}>ORDER ID :</Text>
            <Text style={{ marginTop:10,marginLeft:10 }}> 000123</Text>
            <Text style={{ marginTop:10,marginLeft: 130 }}>736999hdkkskj</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image style={{ width: 30, height: 20,marginLeft:10 }} source={require('./ICON/delevery_blue.png')} />
            <Text style={{ fontWeight: 'bold',marginLeft:10 }}>3208 macBookk:</Text>
            <Text style={{ marginLeft:10 }}> class 10 98btkn Memory Card</Text>
        </View>
        <Text style={{ marginLeft:50 }}> class 10 98btkn Memory Card</Text>
        <View style={{
            flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
            borderRadius: 20, backgroundColor: 'lightgrey',width:370,height:40,marginLeft:10
        }}>
            <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

            <Text style={{marginTop:10}}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
        </View>
    </View>
    </View>


     <View style={{flex: 2 }}>
    <View style={{ backgroundColor:'white', marginTop: 15,borderRadius:20,width:390,height:150}}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold',marginTop:10,marginLeft:10 }}>ORDER ID :</Text>
            <Text style={{ marginTop:10,marginLeft:10 }}> 000123</Text>
            <Text style={{ marginTop:10,marginLeft: 130 }}>736999hdkkskj</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image style={{ width: 30, height: 20,marginLeft:10 }} source={require('./ICON/delevery_blue.png')} />
            <Text style={{ fontWeight: 'bold',marginLeft:10 }}>3208 macBookk:</Text>
            <Text style={{ marginLeft:10 }}> class 10 98btkn Memory Card</Text>
        </View>
        <Text style={{ marginLeft:50 }}> class 10 98btkn Memory Card</Text>
        <View style={{
            flexDirection: "row", marginTop: 25, borderWidth: 1, borderColor: "grey",
            borderRadius: 20, backgroundColor: 'lightgrey',width:370,height:40,marginLeft:10
        }}>
            <Image style={{ width: 40, height: 40 }} source={require('./ICON/location.png')} />

            <Text style={{marginTop:10}}>  shhlljld snkdlnsk sndksljl fdkkc kdnknklds dn</Text>
        </View>
    </View>
    </View> */}