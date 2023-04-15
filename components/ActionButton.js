import { StyleSheet, View } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    Icon,
} from '@ui-kitten/components';

const ActionButton = (props) => {
  return (
    <Button {...props} status={props.btnStatus} style={props.btnStyle} onPress={props.handleBtnPress}>
      {()=> (<Text category={props.btnTextCategory} style={props.btnTextStyle}>{props.btnText}</Text>)}
    </Button>
  )
}

export default ActionButton

const styles = StyleSheet.create({})