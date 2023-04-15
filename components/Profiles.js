import { StyleSheet, View, Image, FlatList } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon
} from '@ui-kitten/components';

export const authors = [
    {
        id: 1,
        authorName: 'R.D Sharma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 2,
        authorName: 'H.J Pains',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 3,
        authorName: 'Morris Mano',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 4,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 5,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 6,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 7,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 8,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 9,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
    {
        id: 10,
        authorName: 'H.C Verma',
        authorThumbnail: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
]

const Profiles = () => {
  return (
    <View style={styles.container}>
        <Text category="s1"> Top Authors </Text>
        <FlatList
            data={authors}
            keyExtractor={(item)=> item.id}
            horizontal
            renderItem={({item})=> (
                <Button status="primary" appearance="ghost" style={{padding: 2}}>
                    <Image 
                        source={{uri: item.authorThumbnail}} 
                        style={{width: 64, height: 64, borderRadius: 32}} 
                        resizeMode='contain'
                    />
                    {
                        ()=> (<Text category='s2'> {item.authorName} </Text>)
                    }
                </Button> 
            )}
            contentContainerStyle={{height: 64}}
        />
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
    container: {
        height: 64,
        paddingHorizontal: 16,
        paddingTop: 24,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})