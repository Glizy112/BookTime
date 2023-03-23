import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState } from 'react'
import {
  Button,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import { data } from '../data';
import CategoryButton from '../components/CategoryButton';
import HomeBanner from '../components/HomeBanner';
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

const Home = () => {

  const [ selectedCategory, setSelectedCategory ] = useState('1');

  return (
    <Layout style={styles.container}>
      <Layout style={{paddingTop: 24, paddingHorizontal: 24}}>
        <Text style={{textAlign: 'center'}} category='h1'>Home</Text>
      </Layout>

      <HomeBanner/>
    
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>(
            <CategoryButton 
              btnKey={item.id} 
              btnStyle={{marginHorizontal: 4, paddingVertical: 8, height: 42}}
              iconName={item.name}
              categoryName={item?.category}
              handleButtonPress={()=> setSelectedCategory(item.id)}
              selectedId={selectedCategory}
            />
          )}
          contentContainerStyle={{
            justifyContent: 'center', 
            alignContent: 'center', 
            //maxHeight: 100, 
            height: 100,
            padding: 12
          }}
        // {
        //   [0,1,2,3].map(item=> (
        //     <CategoryButton id={item}/>   
        //   ))
        // }
        />

      <View style={{justifyContent: 'center', alignItems: 'center', padding: 12, alignSelf: 'center'}}>
        <Text>Welcome Here</Text>
        {/* <FlatList
        horizontal
          data={data}
          keyExtractor={(item)=> item.userId}
          renderItem={({item})=> <Text>{item.userId}</Text>}
        /> */}
      </View>
      {/* <BottomNavigator/> */}
      {/* <TabNavigator/> */}
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
})