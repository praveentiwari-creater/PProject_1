import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header_Component from './Header_Component';
import Button_component from "./Button_component";
export default class Login_Page_Design1 extends React.Component {
    render() {
       
        return (
            
                <View style={{ flex: 1,backgroundColor:'white' }}>
                <Header_Component
                 source1={require('./ICON/back_arrow.png')}
                
                    headerTitle={'Log In'}
                    
                     BackgroundColor={{backgroundColor : 'white'}}
                    />
                <View style={{ flex: 3 }}>
                    <View style={{ alignItems: "center", justifyContent: "center", height: 150 }}>
                        <Image style={{ width: 90, height: 90 }} source={require('./ICON/D_icon.png')} />
                        </View>
                        <View style={{ alignItems: "center",}}>
                        <Text style={{ fontSize: 22, color: "black" ,fontWeight:'bold',}}>DAIL<Text style={{ fontSize: 22,
                             color: "blue",fontWeight:'bold', }}>
                            MART</Text>
                        </Text>
                        </View>
                        <View style={{ alignItems: "center"}}>
                        <Text>Where do you want you delivery?</Text>
                       
                        </View>
                </View>

                <View style={{ flex: 5 }}>
                    <View>
                    <Text style={{ fontSize: 15, color: 'blue', marginLeft:28,marginTop:20}}>CRN No. </Text>
                    </View>
                    <View >
                    <TextInput placeholder={"D0909799"}style={styles.text}/>
                    </View>
                    <View>
                    <Text style={{ fontSize: 15, color: 'blue', marginLeft:28,marginTop:20 }}>Password </Text>
                    </View>
                    <View >
                    <TextInput placeholder={"Enter your password"} style={styles.text} />
                </View>
                <View style={{ flex: 2}}>
                    <View style={{marginTop:40, alignItems:'center', justifyContent:'center'}}>
                   <Button_component Buttonname={'Log In'} onPress={this.USER}/>
                   </View>
                </View>

            </View>
            </View>
        )
    }
    USER = () => {
        this.props.navigation.navigate("Home_Drawer");
    }
}
const styles = StyleSheet.create({
    text: {
        width: 360,
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        marginLeft:28,
        marginTop:10,
        borderColor: 'blue'
    },
    button:{
        width: 360,
        height: 40,
        margin: 20,
       
        
        
    }

})

