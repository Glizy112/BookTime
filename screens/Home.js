import { StyleSheet, FlatList, View, ScrollView, Image, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  Button,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
//import { data } from '../data';
import CategoryButton from '../components/CategoryButton';
import HomeBanner from '../components/HomeBanner';
//import { testItems } from './Checkout';
import ItemCard from '../components/ItemCard';
import Profiles, { authors } from '../components/Profiles';
import { useNavigation } from '@react-navigation/native';
//import { BottomNavigator } from '../components/BottomNavigator';
//import { TabNavigator } from '../components/BottomNavigator';

const categories =[
  {
    id: '1',
    name: 'trending-up-outline',
    category: 'Popular',
  },
  {
    id: '2',
    name: 'bulb-outline',
    category: 'Engineering',
  },
  {
    id: '3',
    name: 'briefcase-outline',
    category: 'Management',
  },
  {
    id: '4',
    name: 'color-palette-outline',
    category: 'Abstracts',
  },
];

const moreItems = [
  {
    id: 3,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Popular',
    //rentPeriod: 'A week',
    itemType: 'Rent',
    itemPrice: 'Rs. 870.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 4,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Popular',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 375.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 5,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Engineering',
    //rentPeriod: 'A week',
    itemType: 'Rent',
    itemPrice: 'Rs. 900.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 6,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Engineering',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 400.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 7,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Management',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 400.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 8,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Management',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 400.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 9,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Management',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 400.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 10,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Abstracts',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 500.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 11,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Abstracts',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 600.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 12,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Popular',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 600.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 13,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Popular',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 600.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 14,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Popular',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 600.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 15,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    tag: 'Abstracts',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 600.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
]

const { width, height } = Dimensions.get("screen");

const Home = () => {

  const [ selectedCategory, setSelectedCategory ] = useState('Popular');
  const [ moreStateItems, setMoreStateItems ] = useState(moreItems);
  const [ filteredMoreItems, setFilteredMoreItems ] = useState(false);
  const navigation = useNavigation();

  useEffect(()=> {
    const filteredMoreArray = moreItems.filter(item=> item.tag === selectedCategory);
    setMoreStateItems(filteredMoreArray);
    setFilteredMoreItems(!filteredMoreItems);
  },[selectedCategory]);

  return (
    <ScrollView 
      contentContainerStyle={[
        //styles.container, 
        {paddingBottom: 108, backgroundColor: '#fff', minHeight: height*1.16}
      ]} 
      contentInsetAdjustmentBehavior='automatic'
    >
      <HomeBanner/>
      <View style={{height: 64, marginTop: 16}}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>(
            <CategoryButton 
              btnKey={item.id} 
              btnStyle={{marginHorizontal: 4, paddingVertical: 8, height: 42}}
              iconName={item.name}
              categoryName={item?.category}
              handleButtonPress={()=> setSelectedCategory(item.category)}
              selectedId={selectedCategory}
            />
          )}
          contentContainerStyle={{
            justifyContent: 'center', 
            alignContent: 'center', 
            padding: 8
          }}
        />
      </View>
      <View style={{ height: 248, borderWidth: 0 }}>
        <FlatList
          data={moreStateItems}
          extraData={filteredMoreItems}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> (<ItemCard itemKey={item.id} itemName={item.itemName} itemPrice={item.itemPrice} handlePress={()=> navigation.navigate("ItemDetail")}/>)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center', 
            alignContent: 'center', 
            paddingTop: 4,
            paddingBottom: 8,
            paddingEnd: 12,
          }}
        />
      </View>
      
      <Layout>
        <Text category='s1' style={{marginHorizontal: 16, marginTop: 40}}> Top Authors </Text>
        <FlatList
            data={authors}
            keyExtractor={(item)=> item.id}
            horizontal
            renderItem={({item})=> (
                <Pressable style={{padding: 8, alignItems: 'center'}}>
                    <Image 
                        source={{uri: item.authorThumbnail}} 
                        style={{width: 64, height: 64, borderRadius: 32}} 
                        resizeMode='cover'
                    />
                    <Text category='s2' style={{marginTop: 8}}> {item.authorName} </Text>
                </Pressable> 
            )}
            contentContainerStyle={{padding: 12}}
        />
      </Layout>

      <Layout>
        
      </Layout>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: height,
  },
})