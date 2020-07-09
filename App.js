import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  headerStyle,
  headerTitleStyle,
  headerMode
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login_Page_Design1 from './praveen/Login_Page_Design1';
import Delivery_Page_Design2 from './praveen/Delivery_Page_Design2';
import Details_Page_Design3 from './praveen/Details_Page_Design3';
import QR_Code_Page_Design4 from './praveen/QR_Code_Page_Design4';
import Profile_Page_Design5 from './praveen/Profile_Page_Design5';
import Google_Login from './praveen/Google_Login';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login_Page_Design1" component={Login_Page_Design1} />
      <Stack.Screen name="Home_Drawer" component={Home_Drawer} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
function Home_Drawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Delivery_Page_Design2">
      <Drawer.Screen name="Delivery" component={Delivery_Page_Design2} />
      <Drawer.Screen name="Details" component={Details_Page_Design3} />
        <Drawer.Screen name="QR_Code" component={QR_Code_Page_Design4} />
        <Drawer.Screen name="Profile" component={ Profile_Page_Design5} />
        <Drawer.Screen name="Google_Login" component={ Google_Login} />
    </Drawer.Navigator>
  );
}


















const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});




{/* <>
<StatusBar barStyle="dark-content" />
<SafeAreaView>
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}>
    <Header />
    {global.HermesInternal == null ? null : (
      <View style={styles.engine}>
        <Text style={styles.footer}>Engine: Hermes</Text>
      </View>
    )}
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step One</Text>
        <Text style={styles.sectionDescription}>
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>See Your Changes</Text>
        <Text style={styles.sectionDescription}>
          <ReloadInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Debug</Text>
        <Text style={styles.sectionDescription}>
          <DebugInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>
          Read the docs to discover what to do next:
        </Text>
      </View>
      <LearnMoreLinks />
    </View>
  </ScrollView>
</SafeAreaView>
</> */}
