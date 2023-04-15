import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon, useTheme } from '@ui-kitten/components';

const CheckIcon =(props)=> {
    const theme = useTheme();
    return (
        <Icon name={props.iconName} width={16} height={16} fill={theme['color-basic-100']}/>
    );
}

const Checkbox = (props) => {

  const theme = useTheme();  

  return (
    <Button 
        // status={props.isChecked ? "secondary" : "basic"} 
        // appearance={props.isChecked ? 'filled' : 'outline'} 
        size= "tiny"
        style={[
          {borderRadius: 6, height: 12, width: 12},
          props.isChecked ? {backgroundColor: theme['color-primary-500']} 
          : {backgroundColor: theme['background-basic-color-2']}
        ]} 
        onPress={props.handleIsChecked}
    >
      {/* {
        props.isChecked===true ? */}
        { props.isChecked ? <CheckIcon iconName="checkmark"/> : null} 
        {/* : */}
        {/* (<CheckIcon iconName="checkmark-outline"/>)   */}
      {/* } */}
      {/* <View style={{width: 2, height: 4, borderWidth: 11, backgroundColor: '#1f2831', zIndex: 99999}}/> */}
    </Button>
  )
}

export default Checkbox

const styles = StyleSheet.create({})