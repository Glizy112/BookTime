import { StyleSheet, View, Image, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {
  Button,
  Layout,
  Text,
  useTheme,
  Icon,
  Modal
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from './Detail';
import { InputComponent } from './Login';
import ActionButton from '../components/ActionButton';
import { testItems } from './Checkout';
import { OrderItem } from './Checkout';
import PayMethodModal from '../components/PayMethodModal';

const { width, height } = Dimensions.get("screen");

const BellIcon =(props)=> (
  <Icon name="bell-outline" fill={props.theme['color-basic-300']} width={22} height={22}/>
)

const AddressIcon =(props)=> (
  <Icon name="navigation-2" fill={props.iconColor} width={24} height={24}/>
)

const SupportIcon =(props)=> (
  <Icon name="question-mark-circle" fill={props.iconColor} width={24} height={24}/>
)

const LogoutIcon =(props)=> (
  <Icon name="log-out" fill={props.iconColor} width={24} height={24}/>
)

const GoToIcon =(props)=> (
  <Icon name="arrow-circle-right" fill={props.iconFill} width={24} height={24}/>
)

const FormInput =(props)=> {
  return(
    <Layout style={{flexDirection: 'row', alignItems: 'center', borderWidth: 0, marginTop: 16}}>
      <Icon name={props.formInputIconName} fill={props.theme['color-basic-300']} width={20} height={20}/>
      <InputComponent
        inputName={props.formInputName}
        //iconName={props.formInputIconName}
        onInputChange={(text, inputName)=> props.handleInputChange(text, inputName)} 
        value={props.formInputValue}
        //isError={credentials?.email!=="" && !emailRegex.test(credentials?.email)} 
        placeholder={props.formInputPlaceholder} 
        errorText="Invalid email address. Valid example-abc@gmail.com"
        //topMargin={props.topMargin}
        isCurrentlyEnabled={props.formInputEnabled}
        inpHeight={props.formInputHeight}
        inpWidth={props.formInputWidth}
        inpSize="small"
      />
    </Layout>
  );
}

const settingButtons =[
  {
    id: 1,
    settingName: 'Saved Addresses',
    settingIcon: <AddressIcon iconColor={'rgba(77,210,186,1)'}/>,
    settingBackground: 'rgba(77,210,186,0.2)',
    settingTextColor: 'rgba(29,185,157,1)',
  },
  {
    id: 2,
    settingName: 'Support',
    settingIcon: <SupportIcon iconColor={'rgba(255,194,77,1)'}/>,
    settingBackground: 'rgba(255,194,77,0.2)',
    settingTextColor: 'rgba(228,157,21,1)',
  },
  {
    id: 3,
    settingName: 'Logout',
    settingIcon: <LogoutIcon iconColor={'rgba(255,72,72,1)'}/>,
    settingBackground: 'rgba(255,72,72,0.2)',
    settingTextColor: 'rgba(255,72,72,1)',
  },
]

const Profile = () => {

  const theme = useTheme();
  const navigation = useNavigation();

  const [profileData, setProfileData] = useState({});
  const [inputEnabled, setInputEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTextChange =(text, inputName)=> {
    setProfileData({
      ...profileData,
      [inputName]: text,
    })
  }
  
  return (
    <Layout style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      <Layout style={styles.profileHeader}>
          <BackIcon handleBackPress={()=> navigation.goBack()} fill={theme['color-basic-100']}/>
          <Text category="h3"> Profile </Text>
          <Image 
            source={{uri: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg'}}
            style={{width: 40, height: 40, borderRadius: 20}}
            resizeMode='cover'
          />
      </Layout>
      <ScrollView contentContainerStyle={{paddingBottom: height/10.3}} contentInsetAdjustmentBehavior='automatic'>
      <Layout style={styles.profileDetailContainer}>
        <Layout style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text category='label' onPress={()=> console.log("Profile-> ", profileData)}> My Details </Text>
          <Layout style={{flexDirection: 'column', bottom: 8, right: 4}}>
            <View style={[ styles.bellCounter, {backgroundColor: theme['color-primary-500']} ]}>
              <Text style={{fontSize: 10, fontFamily: 'Inter-SemiBold'}}> 3 </Text>
            </View>
            <BellIcon theme={theme}/>
          </Layout>
        </Layout>
      

        <Layout style={styles.detailFormContainer}>
          <FormInput
            formInputName="Username" 
            formInputIconName={"person-outline"} 
            theme={theme} 
            handleInputChange={handleTextChange}
            formInputValue={profileData?.username}
            formInputPlaceholder="Username"
            //topMargin={16}
            formInputEnabled={inputEnabled}
            formInputHeight={48}
            formInputWidth={width/1.15}
          />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <FormInput
              formInputName="Phone" 
              formInputIconName={"phone-outline"} 
              theme={theme} 
              handleInputChange={handleTextChange}
              formInputValue={profileData?.phone}
              formInputPlaceholder="93248-72800"
              //topMargin={16}
              formInputEnabled={inputEnabled}
              formInputHeight={48}
              formInputWidth={width/3}
            />
            <FormInput
              formInputName="Email" 
              formInputIconName={"email-outline"} 
              theme={theme} 
              handleInputChange={handleTextChange}
              formInputValue={profileData?.email}
              formInputPlaceholder="andrew_ng108@gmail.com"
              //topMargin={16}
              formInputEnabled={inputEnabled}
              formInputHeight={48}
              formInputWidth={width/2.06}
            />
          </Layout>
          <FormInput
            formInputName="address" 
            formInputIconName={"pin-outline"} 
            theme={theme} 
            handleInputChange={handleTextChange}
            formInputValue={profileData?.primaryAddress}
            formInputPlaceholder="Bathinda-151001(PB)"
            //topMargin={16}
            formInputEnabled={inputEnabled}
            formInputHeight={48}
            formInputWidth={width/1.15}
          />
          <ActionButton
            size="medium"
            btnStatus="secondary"
            btnStyle={{width: width/1.5, alignSelf: 'center', marginTop: 16, marginLeft: 0, borderRadius: 8}}
            btnText={inputEnabled===true ? "Save Profile" : "Edit Profile"}
            btnTextCategory="c2"
            btnTextStyle={{fontFamily: 'Inter-Medium'}}
            handleBtnPress={()=> setInputEnabled(!inputEnabled)}
          />
        </Layout>
      </Layout>

      <Layout style={styles.orderHistoryContainer}>
        <Text category="label"> History </Text>
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
      <Layout style={styles.profileSettingsContainer}>
        {
          settingButtons.map(setting=> (
            <ActionButton
              //btnStatus="secondary"
              size="giant"
              accessoryLeft={setting.settingIcon}
              // accessoryRight={<GoToIcon iconFill={(
              //   setting.id===1 && 'rgba(77,210,186,1)' ||
              //   setting.id===2 && 'rgba(255,194,77,1)' ||
              //   setting.id===3 && 'rgba(255,72,72,1)'
              // )}/>}
              btnStyle={{
                flexDirection: 'row',
                //alignItems: 'center', 
                justifyContent: 'flex-start', 
                borderRadius: 8, 
                backgroundColor: setting.settingBackground,
                marginTop: 8,
                paddingHorizontal: 16
              }}
              btnText={setting.settingName}
              btnTextCategory="c2"
              btnTextStyle={{color: setting.settingTextColor, fontFamily: 'Inter-SemiBold', marginLeft: 8}}
              // btnIcon={<GoToIcon iconFill={(
              //   setting.id===1 && 'rgba(77,210,186,1)' ||
              //   setting.id===2 && 'rgba(255,194,77,1)' ||
              //   setting.id===3 && 'rgba(255,72,72,1)'
              // )}/>}
              handleBtnPress={()=> { console.log("Settings Button Clicked"); setting.id===1 && setModalVisible(true) }}
            />
          ))
        }
      </Layout>
      </ScrollView>

      <Modal 
        visible={modalVisible} 
        style={{alignItems: 'flex-start', justifyContent: 'flex-start', width: width, height: height/1.5}}
        backdropStyle={[styles.modalBackdrop, {backgroundColor: theme['color-basic-200']}]} 
        //onBackdropPress={()=> setModalVisible(false)}
      >
        <PayMethodModal
          modalTitle='My Addresses'
          modalContentWidth={width}
          //handlePayMethodCardPress={(methodIdx)=> setSelectedPayMethod(methodIdx)} 
          //modalContentHeight={height/2.5} 
          modalBottomPad={'30%'}
          handleExit={()=> setModalVisible(false)}
          //payMethods={payMethods}
          //selectedPayMethod={selectedPayMethod}
        />
      </Modal>

    </Layout>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  profileHeader: {
    width: width,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileDetailContainer: {
    width: width,
    paddingHorizontal: 16,
    paddingTop: 24,
    alignItems: 'stretch',
  },
  bellCounter: {
    width: 20, 
    height: 20, 
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 2,
    top: 8,
    left: 8,
  },
  detailFormContainer: {
    width: width,
    padding: 4,
    //alignItems: 'center',
  },
  orderHistoryContainer: {
    width: width,
    paddingHorizontal: 15,
    paddingTop: 24,
  },
  profileSettingsContainer: {
    width: width,
    paddingHorizontal: 15,
    paddingTop: 24,
  },
  modalBackdrop: {
    //flex: 1,
    width: width,
    height: height/2,
  },
})