import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme
} from '@ui-kitten/components';

const { width, height } = Dimensions.get("screen");

const OfferAlert = (props) => {

  const theme = useTheme();

  return (
    <Layout style={styles.alertContainer}>
      <Layout style={{padding: 12, paddingHorizontal: 20, backgroundColor: props.alertBackground, borderRadius: 6}}>
        <Text category='s1' status='danger'>{props.alertTitle}</Text>
        <Layout style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent'}}>
          <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: theme['color-basic-100'], margin: 12}}/>
          <Text category='s2' style={{fontFamily: 'Inter-SemiBold'}}>{props.alertedFor}</Text>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default OfferAlert

const styles = StyleSheet.create({
    alertContainer: {
        width: width,
        paddingHorizontal: 15,
        //padding: 16,
    },
})