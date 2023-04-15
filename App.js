/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
  //Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { default as mapping } from './mapping.json';
import { default as theme } from './theme.json'; 
//import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import FavoriteScreen from './screens/Favorites';
import SearchScreen from './screens/Search';
import ProfileScreen from './screens/Profile';
import ResetPassScreen from './screens/Reset';
import DetailScreen from './screens/Detail';
import RentalScreen from './screens/Rental';
import CheckoutScreen from './screens/Checkout';
import OrderDetailScreen from './screens/OrderDetail';
import PreviousOrderScreen from './screens/PreviousOrders';
import { TabNavigator } from './components/BottomNavigator';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);

// const user ={name: 'ddasgga', age: '24'}

// const newUser = {...user};

// console.log(...user);

const Stack = createNativeStackNavigator();  //...spread operator-Deep shallow copy.

export default () => (
  <>
    <NavigationContainer>
    <IconRegistry icons={EvaIconsPack}/> 
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}} customMapping={mapping}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="ResetPass" component={ResetPassScreen}/>
          <Stack.Screen name="BottomTabs" component={TabNavigator}/>
          <Stack.Screen name="ItemDetail" component={DetailScreen}/>
          <Stack.Screen name="RentItem" component={RentalScreen}/>
          <Stack.Screen name="CheckoutItem" component={CheckoutScreen}/>
          <Stack.Screen name="OrderDetails" component={OrderDetailScreen}/>
          <Stack.Screen name="RecentOrders" component={PreviousOrderScreen}/>
          {/* <Stack.Screen name="Home" component={BottomNavigator}/>
          <Stack.Screen name="Favorites" component={FavoriteScreen}/>
          <Stack.Screen name="Search" component={SearchScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/> */}
          
          {/* <Layout style={styles.container}>
            <Login/>
          </Layout> */}
        
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
