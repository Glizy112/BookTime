import { StyleSheet, ScrollView, Dimensions, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon,
    Modal,
} from '@ui-kitten/components';
import { BackIcon } from './Detail';
import { useNavigation } from '@react-navigation/native';
import OfferAlert from '../components/OfferAlert';
import ActionButton from '../components/ActionButton';
//import {UPIcomp as UPIcon} from '../assets/Icons/UPIcon.svg';
import UPIMethodIcon from '../assets/Icons/UpiIcon';
import PayMethodModal from '../components/PayMethodModal';
import CashIconSmall from '../assets/Icons/CashIconSmall';
//import UpiIcon from '../assets/Icons/UpiIcon';
import MasterPay from '../assets/Icons/MasterPay';
import UpiLargeIcon from '../assets/Icons/UpiLargeIcon';
import CashOnIcon from '../assets/Icons/CashIcon';

const { width, height } = Dimensions.get("screen");

export const AddressCard =(props)=> {
    const theme = useTheme();
    return(
        <Layout style={[{padding: 10, backgroundColor: props.addressCardBackground, borderRadius: 8, marginTop: 18}, props?.borderStyles]}>
            <Layout style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
                <Text category="s2"> {props.addressLabel} </Text>
                {props.changeOption===true && <Text category="s1"> Change </Text>}
                {props.payMethod!==undefined &&
                (<Layout style={{flexDirection: 'column', alignItems: 'flex-end', backgroundColor: 'transparent'}}>
                    <CashIconSmall/>
                    <Text category='s2'> {props?.payMethod} </Text>
                </Layout>)
                }
            </Layout>
            <Layout style={{flexDirection: 'column', paddingTop: props.payMethod!==undefined ? 2 : 8, backgroundColor: 'transparent'}}>
                <Text category="s1"> {props.recipientName} </Text>
                <Text category="s2" style={{marginTop: 8}}> {props.recipientAddress} </Text>
            </Layout>
        </Layout>
    );
}

const ItemTypeIndicator =(props)=> (
    <Layout style={{backgroundColor: props.itemType==="Rent" ? props.theme['color-warning-500'] : 'rgba(77,210,186,0.8)', padding: 4, borderRadius: 16, width: 34, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 8}}> {props.itemType} </Text>
    </Layout>
)

export const OrderItem =(props)=> (
    <Layout style={{borderRadius: 8, padding: 10, marginTop: 12, backgroundColor: props.orderCardBackground}}>
        <Layout style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
            <Layout style={{flexDirection: 'row', alignItems: 'flex-start', backgroundColor: 'transparent'}}>
                <Image 
                    source={{uri: props.item.image}} 
                    resizeMode="cover" 
                    style={{width: 68, height: 86, borderRadius: 12}}
                />
                <Layout style={{flexDirection: 'column', paddingLeft: 8, backgroundColor: 'transparent'}}>
                    <ItemTypeIndicator theme={props.theme} itemType={props.item.itemType}/>
                    <Text category='s1' style={{marginTop: 6}}> {props.item.itemName} </Text>
                    <Text style={{fontFamily: 'Inter-Regular', fontSize: 10, marginTop: 6}}> {props.item.itemAuthor} </Text>
                    {props.item.rentPeriod &&
                        (<Text style={{fontFamily: 'Inter-Regular', fontSize: 10, marginTop: 6}}> {props.item.rentPeriod} </Text>)
                    }
                </Layout>
            </Layout>
            <Text category='h4'> {props.item.itemPrice} </Text>
        </Layout>
    </Layout>
);

export const testItems = [
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
        rentPeriod: 'A week',
        itemType: 'Buy',
        itemPrice: 'Rs. 87.00',
        image: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg',
    },
]

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

const payMethods = [
    {
        id: 1,
        methodName: 'Mastercard / VISA / Rupay',
        methodCaption: 'Pay using Debit / Credit card', 
        icon: <MasterPay/>,
    },
    {
        id: 2,
        methodName: 'BHIM UPI / Google Pay / Paytm',
        methodCaption: 'Pay via UPI', 
        icon: <UpiLargeIcon/>,
    },
    {
        id: 3,
        methodName: 'Cash on Delivery',
        methodCaption: 'Pay in Cash', 
        icon: <CashOnIcon/>,
    },
    {
        id: 4,
        methodName: 'ashish@axis.upi',
        methodCaption: 'Google Pay', 
        icon: <UpiLargeIcon/>,
    },
]

const Checkout = () => {

  const theme = useTheme();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPayMethod, setSelectedPayMethod] = useState(4);

  useEffect(()=> {
    console.log("Selected Payment Method-> ", selectedPayMethod);
  },[]);

  return (
    <Layout style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      <Layout style={styles.checkoutHeader}>
        <BackIcon handleBackPress={()=> navigation.goBack()} fill={theme['color-basic-100']}/>
        <Text category="h2" style={{marginLeft: width/4.2}}> Checkout </Text>
      </Layout>

    <ScrollView contentContainerStyle={{paddingVertical: 4}} contentInsetAdjustmentBehavior="automatic">
      <Layout style={styles.addressContainer}>
        <Text category="label"> Delivery To </Text>
        <AddressCard 
            changeOption={true}
            addressCardBackground={theme['background-basic-color-2']}
            addressLabel= "Shipping Address"
            recipientName= "Ashish Garg"
            recipientAddress= "1174, Model Town Phase - 3 Bathinda, PB, India 151001"
        />
      </Layout>

      <Layout style={styles.orderSummaryContainer}>
        <Text category="label"> Order Summary </Text>
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
      
      <Layout style={styles.rentalSummary}>
        {
            itemRentDetail.map(item=> (
                <Layout key={item.id} style={styles.itemRentDetailContainer}>
                    <Text category={item.id===4 ? "label": 's2'}> {item.typeName} </Text>
                    <Text category={item.id===4 ? "s1" : "c2"}> {item.value} </Text>
                </Layout>
            ))   
        }
      </Layout>

      <OfferAlert 
        alertBackground={theme['color-danger-100']} 
        alertTitle="Your Savings: Rs. 14.70 (10%)"
        alertedFor="Product Discount"
      />

      <Layout style={styles.actionContainer}>
        <Pressable style={{flex: 0.4, paddingBottom: 8}} onPress={()=> setModalVisible(!modalVisible)}>
            <Text category='s1' numberOfLines={1}> {payMethods?.filter(method=> method.id===selectedPayMethod)[0].methodName} </Text>
            <Layout style={styles.payMethodContainer}>
                <UPIMethodIcon/>
                <Text category='s1' numberOfLines={1} style={{fontFamily: 'Inter-Medium'}}> 
                    {payMethods?.filter(method=> method.id===selectedPayMethod)[0].methodCaption} 
                </Text>
            </Layout>
        </Pressable>
        <ActionButton
            btnStyle={{
                height: 50,
                //flex: 80, 
                borderRadius: 8, 
                //borderColor: theme['color-basic-400'], 
                padding: 4, 
                flex: 0.55
            }}
            handleBtnPress={()=> navigation.navigate("OrderDetails")}
            btnStatus= "secondary"
            btnText= "Place Order"
            btnTextCategory="s1"
        />
      </Layout>
    </ScrollView>

    <Modal 
        visible={modalVisible} 
        style={{alignItems: 'flex-start', justifyContent: 'flex-start', width: width, height: height/1.5}}
        backdropStyle={[styles.modalBackdrop, {backgroundColor: theme['color-basic-200']}]} 
        onBackdropPress={()=> setModalVisible(false)}
    >
        <PayMethodModal 
            modalTitle={'Payment Options'}
            modalContentWidth={width}
            handlePayMethodCardPress={(methodIdx)=> setSelectedPayMethod(methodIdx)} 
            modalContentHeight={height} 
            handleExit={()=> setModalVisible(false)}
            payMethods={payMethods}
            selectedPayMethod={selectedPayMethod}
        />
    </Modal>
    </Layout>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    checkoutHeader: {
        paddingHorizontal: 15,
        paddingTop: 32,
        paddingBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressContainer: {
        width: width,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    orderSummaryContainer: {
        width: width,
        paddingHorizontal: 15,
        paddingTop: 32,
    },
    rentalSummary: {
        width: width,
        padding: 16,
        marginTop: 0,  //should be 45
    },
    itemRentDetailContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop: 16,
    },
    actionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 24,
    },
    payMethodContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        paddingTop: 4, 
        justifyContent: 'space-around', 
        alignItems: 'center',
    },
    modalBackdrop: {
        //flex: 1,
        width: width,
        height: height,
    },
})