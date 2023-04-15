import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon, useTheme } from '@ui-kitten/components';

const BookmarkButton = (props) => {

  const theme = useTheme();  

  return (
    <Button 
      style={[styles.bookmarkBtnContainer, 
        props.isFavorite===true ? { backgroundColor: theme['color-warning-500'], elevation: 4 } 
        : { backgroundColor: 'rgba(232, 244, 255, 1)', elevation: 4 }
      ]}
      onPress={props.handlePress}
    >
      {
        props.isFavorite===true ? 
        <Icon 
          name="bookmark" 
          fill={theme['color-basic-100']} 
          width={26}
          height={26}
        />
        :
        <Icon 
          name="bookmark-outline" 
          fill={theme['color-basic-300']} 
          width={26}
          height={26}
        />
      }
    </Button>
  )
}

export default BookmarkButton

const styles = StyleSheet.create({
    bookmarkBtnContainer: {
        width: 56, 
        height: 58, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 28, 
        marginTop: 75, 
        marginLeft: 8,
    },
})