import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
//import BannerImg from '../assets/Images/homeBanner.png';

const HomeBanner = () => {
  return (
    <Image
        source={require('../assets/Images/homeBanner.png')}
        style={{width: 100, height: 100}}
    />
  )
}

export default HomeBanner

const styles = StyleSheet.create({})