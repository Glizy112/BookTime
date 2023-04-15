import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon
} from '@ui-kitten/components';
import { AddressCard } from '../screens/Checkout';

const ExitIcon =(props)=> (
    <Icon name="close" width={26} height={26} fill={props.theme['background-basic-color-1']} onPress={props.handlePress}/>
)

const PayMethodCard =(props)=> {

    console.log(props.method.id);
    return(
        <Pressable onPress={()=> { props.handlePress(props.method.id); props.handleExitOnMethodSelect }}>
        <Layout 
            key={props.method.id} 
            style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                marginVertical: 12,
                padding: 18,
                //paddingHorizontal: 12, 
                borderRadius: 8,
                backgroundColor: (
                    props.method.id===1 && 'rgba(255,194,77,0.1)' || 
                    (props.method.id===2 || props.method.id===4) && 'rgba(8,156,239,0.1)' || 
                    props.method.id===3 && 'rgba(77,210,186,0.1)'
                )
            }}
        >
            {props.method.icon}
            <Layout style={{flexDirection: 'column', marginHorizontal: 10, backgroundColor: 'transparent'}}>
                <Text category='label' style={{fontFamily: 'Inter-Medium'}}> {props.method.methodName} </Text>
                <Text category='s2' style={{fontFamily: 'Inter-Regular', marginTop: 4}}> {props.method.methodCaption} </Text>
            </Layout> 
        </Layout>
        </Pressable>
    );
}

const PayMethodsModalType =(props)=> {
  //const theme = useTheme();

  return (
      <Layout>
        <Text category='label' style={{marginBottom: 12, marginTop: 18}}> Selected Option </Text>
        <PayMethodCard 
            method={props?.payMethodModalProps?.payMethods?.filter(method=>method.id===props?.payMethodModalProps?.selectedPayMethod)[0]} 
            handlePress={props.payMethodModalProps?.handlePayMethodCardPress}
            handleExitOnMethodSelect={props.payMethodModalProps?.handleExit}
        />
        <Layout style={{backgroundColor: 'transparent', paddingVertical: 12}}>
            <Text category='label'> Other Payment Methods </Text>
            <Layout style={{paddingVertical: 12}}>
            {
                props.payMethodModalProps?.payMethods.filter(method=> method.id!==props?.payMethodModalProps?.selectedPayMethod).map(method=> (
                    <PayMethodCard method={method} handlePress={props.payMethodModalProps?.handlePayMethodCardPress}/>
                ))
            }
            </Layout>
        </Layout>
      </Layout>
  )
}

const AddressesModalType =(props)=> {
    return (
        <Layout style={{backgroundColor: props.theme['background-basic-color-1'], height: props.modalContentHeight}}>
            <Text category='label' style={{marginTop: 18}}> Selected Address </Text>
            <Layout style={{backgroundColor: 'transparent'}}>
                <AddressCard
                    borderStyles={{borderWidth: 0.3, borderColor: 'rgba(8,156,239,0.5)'}} 
                    changeOption={false}
                    addressCardBackground={props.theme['background-basic-color-2']}
                    addressLabel= "Shipping Address"
                    recipientName= "Ashish Garg"
                    recipientAddress= "1174, Model Town Phase - 3 Bathinda, PB, India 151001"
                />
            </Layout>
            <Text category='label' style={{marginTop: 24}}> All Addresses </Text>
            <ScrollView contentContainerStyle={{paddingBottom: 24}} contentInsetAdjustmentBehavior="automatic">
            <Layout style={{backgroundColor: 'transparent'}}>
                <AddressCard
                    borderStyles={{borderWidth: 0.3, borderColor: 'rgba(8,156,239,0.5)'}} 
                    changeOption={false}
                    addressCardBackground={props.theme['background-basic-color-2']}
                    addressLabel= "Shipping Address"
                    recipientName= "A.R. Rajpoot"
                    recipientAddress= "Platform #10/4, Tation, Abohar, PB, India Pin-unknown"
                />
                <AddressCard
                    borderStyles={{borderWidth: 0.3, borderColor: 'rgba(8,156,239,0.5)'}} 
                    changeOption={false}
                    addressCardBackground={props.theme['background-basic-color-2']}
                    addressLabel= "Shipping Address"
                    recipientName= "Arsh Kumar"
                    recipientAddress= "H.No.Unknown, Kamla Nehru Colony, Bathinda, PB, India 151001"
                />
            </Layout>
            </ScrollView>
        </Layout>
    )
}

const PayMethodModal = (props) => {

  const theme = useTheme();

  return (
    <Layout style={[styles.container, {width: props.modalContentWidth, position: 'absolute', top: props.modalBottomPad, height: props.modalContentHeight, backgroundColor: theme['color-basic-100'], zIndex: 9999}]}>
      <Layout style={[{width: props.modalContentWidth}, styles.payMethodModalHeader]}>
        <Text category='label' style={{color: theme['background-basic-color-1']}}> {props.modalTitle} </Text>
        <ExitIcon theme={theme} handlePress={props.handleExit}/>
      </Layout>
      <Layout style={{borderTopStartRadius: 16, borderTopEndRadius: 16, padding: 15, width: props.modalContentWidth}}>
        {
            props?.modalTitle === "Payment Options" ? 
            (<PayMethodsModalType payMethodModalProps={props}/>) :
            (<AddressesModalType theme={theme} modalContentHeight={props.modalContentHeight}/>)
        }
      </Layout>
    </Layout>
  )
}

export default PayMethodModal

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //padding: 12
    },
    payMethodModalHeader: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        backgroundColor: '#1F2831',
        //marginHorizontal: 12,
        //marginBottom: 12,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
})