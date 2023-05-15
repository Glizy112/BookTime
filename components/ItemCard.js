import { StyleSheet, View, Image, Pressable } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon
} from '@ui-kitten/components';

const ItemCard = (props) => {

  const theme = useTheme();

  return (
    <Pressable onPress={props?.handlePress}>
    <Layout id={props.itemKey} style={styles.itemCardContainer}>
      
        <View 
          style={{
              width: '110%', 
              height: '77%', 
              borderRadius: 10, 
              borderWidth: 1, 
              borderColor: theme['color-basic-200'], 
              elevation: 8
          }}
        >
          <Image 
              source={{uri: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg'}}
              resizeMode='stretch'
              style={{width: '100%', height: '100%', borderRadius: 14}}
          />
        </View>
        <Layout style={{paddingTop: 12}}>
          <Text category="s1" numberOfLines={1} ellipsizeMode='tail'>{props.itemName}</Text>
          <Text category="s2" style={{marginTop: 4}}> {props.itemPrice} </Text>
        </Layout>
      
    </Layout>
    </Pressable>
  )
}

export default ItemCard

const styles = StyleSheet.create({
    itemCardContainer: {
        padding: 8,
        marginLeft: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',      
    },
})