import { ImageBackground, StyleSheet, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import BookmarkButton from '../components/BookmarkButton';
import { SafeAreaView } from 'react-native-safe-area-context';  
import ActionButton from '../components/ActionButton';

const { width, height } = Dimensions.get("screen");

export const BackIcon =(props)=> {
    const theme = useTheme();
    return(
        <Icon 
            {...props}
            name="arrow-back-outline" 
            width={26} height={26} 
            //fill={theme['background-basic-color-1']} 
            onPress={props.handleBackPress}
        />
    );
}

const FavIcon =(props)=> {
    const theme = useTheme();
    return(
        <View key={props.itemKey}>
            <Icon name="star" fill={theme['color-warning-100']} width={20} height={20} style={props.iconStyle}/>
        </View>
    );
}

const PageIcon =()=> {
    const theme = useTheme();
    return(
        <Icon name="file" fill={theme['background-basic-color-4']} width={20} height={20}/>
    );
}

const BuyIcon =()=> {
    const theme = useTheme();
    return(
        <Icon name="shopping-cart-outline" fill={theme['color-basic-100']} width={24} height={24}/>
    );
}

const Detail = () => {
  
  const theme = useTheme();
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);
//   const routes = navigation.getState()?.routes;
//   const prevRoute = routes[routes.length - 2];
//   console.log("Yeah can go back....", navigation.canGoBack(), prevRoute);

  return (
    <SafeAreaView>
    <Layout style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      {/* <Layout style={{width: width, flex: 1}}> */}
        <ImageBackground 
            source= {{uri: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg'}}
            resizeMode= "cover"
            style={[StyleSheet.absoluteFillObject, { flex: 1, justifyContent: 'center', height: 220 }]}
        />
        <View style={styles.overlay}/>
        <BackIcon 
            style={{margin: 16, zIndex: 999999}}
            handleBackPress={()=> navigation.goBack()}
            fill={theme['background-basic-color-1']}
        />
      {/* </Layout> */}
      <Layout style={styles.itemPhotoContainer}>
        <Image 
            source={{uri: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg'}}
            resizeMode="cover"
            style={{width: 129, height: 150, borderRadius: 20}}
        /> 
        <Layout style={styles.itemInfoContainer}>
            <Text 
                category='h4' 
                style={{color: theme['background-basic-color-1']}}
                lineBreakMode="tail"
                numberOfLines={1}
            > The Article Name </Text>
            <Text 
                category='s2' 
                style={{color: theme['background-basic-color-1'], opacity: 0.8, paddingVertical: 4, paddingHorizontal: 2}}
            > The Author Name </Text>
        </Layout>
        <BookmarkButton handlePress={()=> setFavorite(!favorite)} isFavorite={favorite}/>
      </Layout>

      <ScrollView contentContainerStyle={{paddingVertical: 4, backgroundColor: 'transparent'}} contentInsetAdjustmentBehavior="automatic">
      <Layout style={[styles.itemRatingContainer, { backgroundColor: theme['background-basic-color-3'] }]}>
        <FavIcon/>
        <Text 
            category='s1' 
            style={{paddingStart: 6, paddingEnd: 12}}
        > 4.5 <Text category='s2' style={{color: theme['color-basic-200']}}>/ 5</Text> 
        </Text>
        <View style={{height: 24, backgroundColor: theme['color-basic-200'], width: 1.5, opacity: 0.8}}/>

        <Text 
            category='s1' 
            style={{paddingStart: 12, paddingEnd: 12}}
        > 300 <Text category='s2' style={{color: theme['color-basic-200']}}>pages</Text></Text>
        <View style={{height: 24, backgroundColor: theme['color-basic-200'], width: 1.5, marginEnd: 12, opacity: 0.8}}/>

        <PageIcon/>
        <Text category='s1' style={{paddingStart: 6}}> Paperback </Text>
      </Layout>

      <Layout style={styles.itemDetailContainer}>
        <Text category='s1' style={{paddingStart: 2}}> DESCRIPTION </Text>
        <Text category='c2' numberOfLines={8} style={{textAlign: 'justify', padding: 6}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Less 
        </Text>
      </Layout>

      <Layout style={styles.itemReviewContainer}>
        <Text category='s1' style={{paddingStart: 2}}> Reviews (18) </Text>
        <Layout style={{flexDirection: 'row', paddingHorizontal: 2, paddingTop: 12}}>
            {
                [0,1,2,3].map(rating=> (
                    <FavIcon itemKey={rating} iconStyle={{marginHorizontal: 2}}/>
                ))
            }
            <Text category="s1"> 4.0 </Text> 
        </Layout>
        <Text category='c2' numberOfLines={8} style={{textAlign: 'justify', padding: 6}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text>
        <Layout style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6}}>
            <Text category="s2" style={{color: theme['color-basic-200']}}>26 Mar 2023</Text>
            <View style={[styles.reviewerIcon , { backgroundColor: theme['color-basic-200'] }]}/>
            <Text category="c2" style={{color: theme['color-basic-200']}}>Arsh K.</Text>
        </Layout>
        <Layout style={{flexDirection: 'row', paddingHorizontal: 2, paddingTop: 12}}>
            {
                [0,1,2,3,4].map(rating=> (
                    <FavIcon itemKey={rating} iconStyle={{marginHorizontal: 2}}/>
                ))
            }
            <Text category="s1"> 5.0 </Text> 
        </Layout>
        <Text category='c2' numberOfLines={8} style={{textAlign: 'justify', padding: 6}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text>
        <Layout style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6}}>
            <Text category="s2" style={{color: theme['color-basic-200']}}>26 Mar 2023</Text>
            <View style={[styles.reviewerIcon , { backgroundColor: theme['color-basic-200'] }]}/>
            <Text category="c2" style={{color: theme['color-basic-200']}}>Arsh K.</Text>
        </Layout>
      </Layout>
      </ScrollView>

      <Layout style={styles.itemActionContainer}>
        <Button 
            accessoryLeft={BuyIcon}
            activeOpacity={0.4}
            style={{
                height: 48,
                borderWidth: 2, 
                flex: 0.20, 
                borderRadius: 8, 
                borderColor: theme['color-basic-400'], 
                padding: 4, 
                backgroundColor: 'transparent'
            }}
            onPress={()=> console.log("Buy Clicked")}
        >
            {
                (props)=> (<Text {...props} category="label" style={{fontFamily: 'Inter-SemiBold'}}> Buy </Text>)
            }
        </Button>
        <ActionButton
            btnStyle={{
                height: 50,
                flex: 0.75, 
                borderRadius: 8, 
                borderColor: theme['color-basic-400'], 
                padding: 4, 
            }}
            handleBtnPress={()=> navigation.navigate("RentItem")}
            btnStatus= "secondary"
            btnText= "Rent Book"
            btnTextCategory="s1"
        /> 
      </Layout>
    </Layout>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: height,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },  
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 8, 29, 0.6)',
        maxHeight: 220,
        //pointerEvents: 'none',
    },
    itemPhotoContainer: {
        width: width,
        backgroundColor: 'transparent',
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        borderRadius: 20, 
        marginHorizontal: 20, 
        marginTop: 64,
        //borderWidth: 1
    },
    itemInfoContainer: {
        flexDirection: 'column', 
        backgroundColor: 'transparent', 
        marginLeft: 8, 
        marginVertical: 26, 
        //borderWidth: 1, 
        //width: width/2,
    },
    itemRatingContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        //borderWidth: 1, 
        alignSelf: 'center', 
        marginTop: 32,
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
    },
    itemDetailContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        //borderWidth: 1,
    },
    itemReviewContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        //borderWidth: 1,
    },
    reviewerIcon: {
        width: 6, 
        height: 6, 
        borderRadius: 3, 
        marginHorizontal: 8,
        opacity: 0.4
    },
    itemActionContainer: {
        width: width,
        //backgroundColor: 'rgba(255,255,255,1)',
        elevation: 0,
        //flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingTop: 16,
        marginBottom: 48,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        //borderWidth: 1,
    },
})