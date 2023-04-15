import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Icon, Text, useTheme } from '@ui-kitten/components'

const CategoryIcon =(props)=> {
  return (
    <Icon {...props} name={props?.iconName} width={20} height={20}/>
  );
}

const CategoryButton = ({ btnKey, iconName, btnStyle, categoryName, handleButtonPress, selectedId }) => {
  //console.log(props);

  const theme = useTheme();

  return (
    <Button 
      key={btnKey}
      size="tiny"
      style={[styles.container, btnStyle]} 
      status={selectedId === categoryName ? "secondary" : "primary"}
      accessoryLeft={<CategoryIcon iconName={iconName}/>}
      onPress={handleButtonPress}
    >
        {(props)=> (
            <Text {...props} style={[{paddingRight: 8}, selectedId===categoryName && {fontFamily: 'Inter-SemiBold'}]} category="s2">{categoryName}</Text>
        )}
    </Button>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24
    }
})