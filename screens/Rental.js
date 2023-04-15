import { StyleSheet, View, ImageBackground, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon,
    Datepicker
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from './Detail';
import Checkbox from '../components/Checkbox';
import ActionButton from '../components/ActionButton';

const { width, height } = Dimensions.get("screen"); 

const itemRentDetail = [
    {
        id: 1,
        typeName: 'Charges',
        value: 'Rs. 70',
    },
    {
        id: 2,
        typeName: 'Total Amount',
        value: 'Rs. 87',
    },
    {
        id: 3,
        typeName: 'Amount to be Repaid',
        value: 'Rs. 93',
    },
]

const CalendarIcon =(props)=> {
    const theme = useTheme();
    return(
        <Icon {...props} name="calendar" fill={theme['color-basic-300']} width={22} height={22}/>
    );
}

const DatePlaceholder =()=> {
    return(
        <Text category="c2"> Pick a date </Text>
    );
}

const DateLabel =(props)=> {
    return(
        <Text category="s2" style={{marginBottom: props.bottomMargin}}> {props.dateLabelName} </Text>
    );
}

const Rental = () => {

  const theme = useTheme();  
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);
  const [periodSelected, setPeriodSelected] = useState("");
  const [date, setDate] = useState({startDate: new Date(), endDate: new Date()});

  return (
    <Layout style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
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
      <Layout style={styles.itemPhotoContainer}>
        <Image 
            source={{uri: 'https://img.freepik.com/premium-vector/geometric-background-book-cover-brochure-flyer-template-cover-design_125452-2704.jpg'}}
            resizeMode="cover"
            style={{width: 132, height: 156, borderRadius: 20}}
        /> 
        
      </Layout>
    <ScrollView contentContainerStyle={{paddingVertical: 4, alignItems: 'center'}} contentInsetAdjustmentBehavior="automatic">
      <Layout style={{paddingTop: 12, alignItems: 'center'}}>
            <Text 
                category='h3' 
                style={{color: theme['color-basic-100']}}
                lineBreakMode="tail"
                numberOfLines={1}
            > The Article Name </Text>
            <Text 
                category='s2' 
                style={{color: theme['color-basic-100'], opacity: 0.6, paddingHorizontal: 2}}
            > The Author Name </Text>
        </Layout>

     
        <Text category="c2" style={{color: theme['color-basic-200'], paddingTop: 8, marginHorizontal: 20}} lineBreakMode="tail" numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...
        </Text>
        <Text category="h3" style={{paddingVertical: 24}}> Rs. 100.00 </Text>

        <Layout style={{flexDirection: 'row'}}>
            {
                ["A week","A semester","Custom"].map(period=> (
                    <Button 
                        key={period} 
                        status={periodSelected===period && "secondary"}
                        style={{paddingHorizontal: 8, paddingVertical: 8, height: 40, marginHorizontal: 6, borderRadius: 8}}
                        onPress={()=> setPeriodSelected(period)}
                    >
                        {
                            (props)=> (<Text {...props} category="s2">{period}</Text>)
                        }
                    </Button>
                ))
            }
        </Layout>

        <Layout style={styles.datePickContainer}>
            <Datepicker
                size="large"
                status="basic"
                accessoryRight={CalendarIcon}
                label={<DateLabel bottomMargin={8} dateLabelName="Pickup"/>}
                placeholder={DatePlaceholder}
                date={date.startDate}
                onSelect={(nextDate)=> setDate({...date, startDate: nextDate})}
                style={{outline: 'none', borderWidth: 0 }}
            />
            <Datepicker
                size="large"
                accessoryRight={CalendarIcon}
                label={<DateLabel bottomMargin={8} dateLabelName="Dropoff"/>}
                placeholder={DatePlaceholder}
                date={date.endDate}
                onSelect={(nextDate)=> setDate({...date, endDate: nextDate})}
                style={{outline: 'none', borderWidth: 0 }}
            />
        </Layout>
        
        {/* <Layout style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <Text category="s1" status="danger"> To fit in calendar here. </Text>
        </Layout> */}

        <Layout style={styles.rentalSummary}>
            {
                itemRentDetail.map(item=> (
                    <Layout key={item.id} style={styles.itemRentDetailContainer}>
                        <Text category="s1"> {item.typeName} 
                            { item.id===2 && (<Text category='s2'> ( rent + security )</Text>) } 
                        </Text>
                        <Text category={item.id===3 ? "s1" : "c2"}> {item.value} </Text>
                    </Layout>
                ))   
            }
        </Layout>

      <Layout style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 8}}>
        <Checkbox handleIsChecked={()=> setIsChecked(!isChecked)} isChecked={isChecked}/>
        <Text category='s2' style={{paddingHorizontal: 8}}>I confirm to have read and accept the <Text category='s1'>Rental Terms </Text> </Text>
      </Layout>

      {/* <Text status="danger" category="s1" style={{alignSelf: 'center'}}> Action Button pending </Text> */}
    </ScrollView>
      <Layout style={styles.itemActionContainer}>
        {/* <Button status="secondary" style={{height: 50, borderRadius: 8}} onPress={()=> navigation.navigate("CheckoutItem")}>
            {(props)=>(<Text {...props} style={{fontFamily: 'Inter-SemiBold', fontSize: 14}}> Rent for ₹ 87.00 </Text>)}
        </Button> */}
        <ActionButton 
            btnStatus="secondary" 
            btnText="Rent for ₹ 87.00"
            btnTextCategory="s1"
            btnStyle={{height: 50, borderRadius: 8}} 
            handleBtnPress={()=> navigation.navigate("CheckoutItem")}
        />
      </Layout>
    </Layout>
  )
}

export default Rental

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 8, 29, 0.6)',
        maxHeight: 220,
    },
    itemPhotoContainer: {
        //width: width,
        backgroundColor: 'transparent',
        flexDirection: 'column', 
        alignItems: 'center', 
        alignSelf: 'center',
        borderRadius: 20, 
        marginHorizontal: 20, 
        marginTop: 64,
        //borderWidth: 1
    },
    datePickContainer: {
        width: width,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 40,
        //borderWidth: 1
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
    itemActionContainer: {
        width: width,
        //backgroundColor: 'rgba(255,255,255,1)',
        paddingHorizontal: 12,
        paddingTop: 16,
        paddingBottom: 12,
        //borderWidth: 1,
    },
})