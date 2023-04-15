import { StyleSheet, View, ScrollView, FlatList, Dimensions } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon,
    Modal,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from './Detail';
import { AddressCard } from './Checkout';
import { OrderItem } from './Checkout';
import ActionButton from '../components/ActionButton';

const { width, height } = Dimensions.get("screen");

const itemRentDetail = [
    {
        id: 1,
        typeName: 'Sub Total',
        value: 'Rs. 137.00',
    },
    {
        id: 2,
        typeName: 'Delivery Charges',
        value: 'Rs. 10.00',
    },
    {
        id: 3,
        typeName: 'Discount',
        value: 'Rs. 10%',
    },
    {
        id: 4,
        typeName: 'Grand Total',
        value: 'Rs. 132.30',
    },
]

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
]

const OrderDetail = () => {

  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Layout style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
        <Layout style={styles.orderDetailsHeader}>
            <BackIcon handleBackPress={()=> navigation.goBack()} fill={theme['color-basic-100']}/>
            <Text category="h2" style={{marginLeft: width/4.8}}> Order Details </Text>
        </Layout>
        <ScrollView contentContainerStyle={{paddingVertical: 4}} contentInsetAdjustmentBehavior="automatic">
            <Layout style={styles.orderInfoContainer}>
                <Layout style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text category='s1'>Order Id</Text>
                    <Text category='s2'>1f2eeer212121</Text>
                </Layout>
                <Layout style={{flexDirection: 'column', alignItems: 'flex-end'}}>
                    <Text category='s1'>Transaction id</Text>
                    <Text category='s2'>t23221fdwfs</Text>
                </Layout>
            </Layout>
            <Layout style={styles.addressContainer}>
                <AddressCard
                    borderStyles={{borderWidth: 0.3, borderColor: 'rgba(8,156,239,0.5)'}} 
                    changeOption={false}
                    addressCardBackground={theme['background-basic-color-2']}
                    addressLabel= "Shipping Address"
                    recipientName= "Ashish Garg"
                    recipientAddress= "1174, Model Town Phase - 3 Bathinda, PB, India 151001"
                />
            </Layout>
            <Layout style={styles.rentalSummary}>
                <Text category="label"> Order Summary </Text>
                <Layout style={{padding: 2}}>
                    {
                        itemRentDetail.map(item=> (
                            <Layout key={item.id} style={styles.itemRentDetailContainer}>
                                <Text category={item.id===4 ? "label": 's2'}> {item.typeName} </Text>
                                <Text category={item.id===4 ? "s1" : "c2"} style={item.id!==4 && {fontFamily: 'Inter-Medium'}}> {item.value} </Text>
                            </Layout>
                        ))   
                    }
                </Layout>
            </Layout>
            <Layout style={styles.addressContainer}>
                <AddressCard
                    payMethod="Cash on Delivery"
                    borderStyles={{borderWidth: 0.5, borderColor: 'rgba(255,194,177,0.5)'}} 
                    changeOption={false}
                    addressCardBackground={'rgba(255,194,77,0.2)'}
                    addressLabel= "Billing Address"
                    recipientName= "Ashish Garg"
                    recipientAddress= "1174, Model Town Phase - 3 Bathinda, PB, India 151001"
                />
            </Layout>

            <Layout style={styles.orderSummaryContainer}>
                <Text category="label"> Ordered Items </Text>
                <FlatList
                    data={testItems}
                    keyExtractor={(item)=> item.id}
                    contentContainerStyle={{paddingTop: 4}}
                    renderItem={({item})=> (
                        <OrderItem 
                            itemKey={item.id} 
                            item={item} 
                            theme={theme} 
                            orderCardBackground={item.itemType==="Rent" ? 'rgba(255,194,77,0.1)' : 'rgba(77,210,186,0.1)'}
                        />
                    )}
                />
            </Layout>
        </ScrollView>
        <Layout style={styles.actionContainer}>
            <ActionButton
                btnStyle={{
                    height: 50,
                    flex: 1,
                    width: width/1.3,
                    //flex: 80, 
                    borderRadius: 8, 
                    //borderColor: theme['color-basic-400'], 
                    padding: 4, 
                    //flex: 0.55
                }}
                handleBtnPress={()=> navigation.navigate("RecentOrders")}
                btnStatus= "secondary"
                btnText= "Go to Profile"
                btnTextCategory="s1"
            />
        </Layout>
    </Layout>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    orderDetailsHeader: {
        paddingHorizontal: 12,
        paddingTop: 32,
        paddingBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderInfoContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: width,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    addressContainer: {
        width: width,
        paddingHorizontal: 15,
    },
    rentalSummary: {
        width: width,
        padding: 12,
        marginTop: 12,  //should be 45
    },
    itemRentDetailContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop: 16,
    },
    orderSummaryContainer: {
        width: width,
        paddingHorizontal: 15,
        paddingTop: 24,
        paddingBottom: 72,
    },
    actionContainer: {
        width: width,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.84)',
        //flex: 1,
        //flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
})