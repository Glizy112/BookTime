import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon,
    // Menu,
    // IndexPath,
    // MenuItem
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from './Detail';
import FilterIcon from '../assets/Icons/FilterIcon';
import SearchBar from '../components/SearchBar';
import { OrderItem } from './Checkout';
//import { ExitIcon } from '../components/PayMethodModal';

const { width, height } = Dimensions.get("screen");

const testItems = [
  {
    id: 1,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: 'A week',
    itemType: 'Rent',
    itemPrice: 'Rs. 87.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 2,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    //rentPeriod: 'A week',
    itemType: 'Buy',
    itemPrice: 'Rs. 200.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 3,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: 'A Semester',
    itemType: 'Rent',
    itemPrice: 'Rs. 450.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 4,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: '7 days',
    itemType: 'Rent',
    itemPrice: 'Rs. 30.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 5,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: '7 days',
    itemType: 'Rent',
    itemPrice: 'Rs. 30.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 6,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: '7 days',
    itemType: 'Rent',
    itemPrice: 'Rs. 30.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 7,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: '7 days',
    itemType: 'Rent',
    itemPrice: 'Rs. 30.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 8,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: '7 days',
    itemType: 'Rent',
    itemPrice: 'Rs. 30.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 9,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    //rentPeriod: '7 days',
    itemType: 'Buy',
    itemPrice: 'Rs. 320.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
  {
    id: 10,
    itemName: 'The Article Name',
    itemAuthor: 'The Author Name',
    rentPeriod: 'A Semester',
    itemType: 'Rent',
    itemPrice: 'Rs. 240.00',
    image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
  },
]

const filters = [
  {
    id: 1,
    filterName: 'Sort by Date',
    iconName: <Icon name="clock-outline" fill={'rgba(31, 40, 49, 0.75)'} width={20} height={20}/>
  },
  {
    id: 2,
    filterName: 'Sort By A',
    iconName: <Icon name="arrow-upward-outline" fill={'rgba(31, 40, 49, 0.75)'} width={20} height={20}/>
  },
  {
    id: 3,
    filterName: 'Sort By Z',
    iconName: <Icon name="arrow-downward-outline" fill={'rgba(31, 40, 49, 0.75)'} width={20} height={20}/>
  },
  {
    id: 4,
    filterName: 'Price low to high',
    iconName: <Icon name="trending-up" fill={'rgba(31, 40, 49, 0.75)'} width={20} height={20}/>
  },
  {
    id: 5,
    filterName: 'Price high to low',
    iconName: <Icon name="trending-down" fill={'rgba(31, 40, 49, 0.75)'} width={20} height={20}/>
  },
]

const ExitIcon =(props)=> (
  <Icon name="close" width={24} height={24} fill={props.theme['color-basic-100']} onPress={props.handlePress}/>
)

const FilterOptions =(props)=> {
  return(
    <Layout 
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        padding: 12, 
        zIndex: 999, 
        position: 'absolute',
        right: 0,
        bottom: height/4,
        width: width/2,
        height: height/2,
        //elevation: 4,
        borderWidth: 0.2,
        borderColor: props.theme['color-basic-200'],
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      }}
    >
      <Layout style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text category='h3'> Filters </Text>
        <ExitIcon handlePress={props.handleExitPress} theme={props.theme}/>
      </Layout>
      {/* <Menu
        appearance="noDivider"
        selectedIndex={props.menuSelectedIdx}
        onSelect={(index)=> props.handleMenuSelect(index)}
      >
        <MenuItem title="Price High to Low"/>
        <MenuItem title="Price Low to High"/>
        <MenuItem title="Sort by A"/>
        <MenuItem title="Sort by Z"/>
        <MenuItem title="Book Type"/>
      </Menu> */}

      <Layout style={{flexDirection: 'column', alignItems: 'stretch', marginTop: 16}}>
      {
        filters.map(filter=> (
          <Button 
            accessoryLeft={filter.iconName} 
            key={filter.id} 
            status={props.filterSelected===filter.id ? "secondary" : "primary"} 
            style={{padding: 4, marginVertical: 4, alignItems: 'flex-start', borderRadius: 8}}
            onPress={()=> props.handleFilterPress(filter.id)}
          >
            {
              ()=> (<Text category='c2'> {filter.filterName} </Text>)
            }
          </Button>
        ))
      }
      </Layout>
      <Button status="secondary" style={{borderRadius: 8, padding: 4, alignItems: 'center', marginTop: 32}}>
        {()=> (<Text category="s2">Apply</Text>)}
      </Button>
    </Layout>
  );
}

const PreviousOrders = () => {

  const navigation = useNavigation();
  const theme = useTheme();

  const [value, setValue] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [filteredItems, setFilteredItems] = useState(testItems);
  //const [selectedIdx, setSelectedIdx] = useState(new IndexPath(0));

  useEffect(()=> {
    let filteredArr = [];
    if(selectedFilter===4){
      filteredArr = testItems.sort((a,b)=> a.itemPrice < b.itemPrice);
      setFilteredItems(filteredArr);
    }
  },[]);

  return (
    <Layout style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      <Layout style={styles.previousOrdersHeader}>
          <BackIcon handleBackPress={()=> navigation.goBack()} fill={theme['color-basic-100']}/>
          <Text category="h2" style={{marginLeft: width/3.5}}> Orders </Text>
      </Layout>

      <Layout style={styles.searchFilterContainer}>
        <SearchBar 
          inputValue={value}
          inputPlaceholder="Search history..." 
          inputBackground={theme['background-basic-color-3']}
          handleInputChange={(text)=> setValue(text)}
        />
        <Button 
          status="basic" 
          appearance='ghost' 
          accessoryLeft={FilterIcon} 
          style={{marginLeft: 4}}
          theme={theme}
          onPress={()=> { console.log(value); setFiltersVisible(!filtersVisible); }}
        />
      </Layout>

      <Layout style={styles.orderSummaryContainer}>
        <FlatList
            data={filteredItems}
            keyExtractor={(item)=> item.id}
            contentContainerStyle={{paddingTop: 4, paddingBottom: 24}}
            renderItem={({item})=> (
                <OrderItem 
                    isPreviousOrder={true}
                    itemKey={item.id} 
                    item={item} 
                    theme={theme} 
                    orderCardBackground={item.itemType==="Rent" ? 'rgba(255,194,77,0.1)' : 'rgba(77,210,186,0.1)'}
                />
            )}
        />
      </Layout>

      {filtersVisible===true && 
      (<FilterOptions theme={theme} 
        handleExitPress={()=> setFiltersVisible(false)}
        handleFilterPress={(idx)=> setSelectedFilter(idx)}
        filterSelected={selectedFilter}
        //menuSelectedIdx={selectedIdx} 
        //handleMenuSelect={(idx)=> setSelectedIdx(idx)}
      />)
      }
    </Layout>
  )
}

export default PreviousOrders

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    previousOrdersHeader: {
      width: width,
      paddingHorizontal: 16,
      paddingTop: 32,
      paddingBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchFilterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    orderSummaryContainer: {
      width: width,
      paddingHorizontal: 15,
      paddingTop: 16,
      //paddingBottom: 72,
    },
})