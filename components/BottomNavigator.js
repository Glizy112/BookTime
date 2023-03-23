import { BackHandler, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, useTheme } from '@ui-kitten/components';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {

  //const homeIconRef = useRef();
  const navigation = useNavigation();

  const HomeIcon =(props)=> (
    selectedIndex===0 ? 
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Icon {...props} ref={props?.innerRef} name="home-outline"/>
      <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(64,111,231,0.8)', marginTop: 2}}/>
    </View>
    :
    <Icon {...props} ref={props?.innerRef} name="home-outline"/>
  )
  const FavIcon =(props)=> (
    selectedIndex===1 ?
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Icon {...props} name="bookmark-outline" animation="shake"/>
      <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(64,111,231,0.8)', marginTop: 2}}/>
    </View>
    :
    <Icon {...props} name="bookmark-outline" animation="shake"/>
  )
  const SearchIcon =(props)=> (
    selectedIndex===2 ?
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Icon {...props} name="search-outline" animation="pulse"/>
      <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(64,111,231,0.8)', marginTop: 2}}/>
    </View>
    :
    <Icon {...props} name="search-outline" animation="pulse"/>
  )
  const UserIcon =(props)=> (
    selectedIndex===3 ?
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Icon {...props} name="person-outline" animation="pulse"/>
      <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(64,111,231,0.8)', marginTop: 2}}/>
    </View>
    :
    <Icon {...props} name="person-outline" animation="pulse"/>
  )

  const theme = useTheme();

  useEffect(()=> {
    BackHandler.addEventListener("hardwareBackPress", ()=> {
      setSelectedIndex(0);
    })
    return ()=> BackHandler.removeEventListener();
    //homeIconRef.current.startAnimation;
  },[]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  //const [selectedIcon, setSelectedIcon] = useState({idx: 0, isSelected: false});
  
  return (
    <BottomNavigation
      style={{position: 'absolute', bottom: 0, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderWidth: 1.2, borderColor: theme['background-basic-color-2']}}
      //selectedIndex={selectedIndex}
      appearance="noIndicator"
      //onSelect={index => setSelectedIndex(index)}
    >
      {/* <Pressable style={{alignItems: 'center', justifyContent: 'center'}} > */}
        <BottomNavigationTab icon={<HomeIcon fill={selectedIndex===0 ? theme['background-basic-color-4'] : '#8F9BB3'} onPress={()=> { setSelectedIndex(0); navigation.navigate("Home"); }}/>}/>
      {/* </Pressable> */}
      {/* <Pressable style={{alignItems: 'center', justifyContent: 'center'}} > */}
        <BottomNavigationTab icon={<FavIcon fill={selectedIndex===1 ? theme['background-basic-color-4'] : '#8F9BB3'} onPress={()=> { setSelectedIndex(1); navigation.navigate("Favorites"); }}/>}/>
      {/* </Pressable> */}
      {/* <Pressable style={{alignItems: 'center', justifyContent: 'center'}} > */}
        <BottomNavigationTab icon={<SearchIcon fill={selectedIndex===2 ? theme['background-basic-color-4'] : '#8F9BB3'} onPress={()=> { setSelectedIndex(2); navigation.navigate("Search"); }}/>}/>
      {/* </Pressable> */}
      {/* <Pressable style={{alignItems: 'center', justifyContent: 'center'}} > */}
        <BottomNavigationTab icon={<UserIcon fill={selectedIndex===3 ? theme['background-basic-color-4'] : '#8F9BB3'} onPress={()=> { setSelectedIndex(3); navigation.navigate("Profile"); }}/>}/>
      {/* </Pressable> */}
      {/* <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={FavIcon}/>
      <BottomNavigationTab icon={SearchIcon}/>
      <BottomNavigationTab icon={UserIcon}/> */}
    </BottomNavigation>
  )
}

//export default BottomNavigator;

export const TabNavigator =()=> {
  return(
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={(props)=> <BottomNavigator {...props}/>}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Favorites" component={Favorites}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})