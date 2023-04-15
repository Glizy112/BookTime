import { StyleSheet, Dimensions, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import {
    Button,
    Icon,
    Input,
    Layout,
    Text,
    useTheme,
  } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { emailRegex, passRegex } from '../utils/regex';
//import { EvaIconsPack } from '@ui-kitten/eva-icons';
//import * as eva from '@eva-design/eva';

const { width, height } = Dimensions.get("screen"); //Object Destructuring

export const InputComponent =(props)=> {

  const theme = useTheme();
  const [inputFocused, setInputFocused] = useState({inputName: '', isFocused: false});

  const handleInputFocus =(inpName)=> {
    //console.log(inpName);
    setInputFocused({inputName: inpName, isFocused: !inputFocused.isFocused});
  }

  const renderCaption =()=> (
    <Layout style={styles.errorCaption}>
      <Text style={styles.captionText} status="danger" category='s2'> {props.errorText} </Text>
    </Layout>
  );

  return (
      <Input
        size={props?.inpSize}
        disabled={props.isCurrentlyEnabled===false ? true : false}  
        accessoryLeft={props.iconName!==undefined && <Icon name={props.iconName} fill={"rgba(31, 40, 49, 0.8)"}/>}
        textStyle={props.inpHeight===undefined ? {height: 46} : {height: props.inpHeight}}
        style={[
          styles.inputField, 
          //inputFocused.inputName===props.inputName && inputFocused.isFocused 
          //? 
          {backgroundColor: theme['background-basic-color-2'], marginTop: props?.topMargin, width: props?.inpWidth} 
          // : {backgroundColor: theme['background-basic-color-3']}
        ]}
        value={props.value}
        placeholder= {props.placeholder}
        caption={props.isError ? renderCaption : null}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(text)=> props.onInputChange(text, props.inputName)}
        onBlur={()=> console.log("Outside input area clicked...")}
        onFocus={()=> handleInputFocus(props.inputName)}
      >
      </Input>
  );
}

const Login = () => {

  const theme = useTheme();
  const navigation = useNavigation();

  const [credentials, setCredentials] = useState({email: "", password: ""});

  const handleTextChange =(text, inputName)=> {
    setCredentials({
      ...credentials,
      [inputName]: text,
    })
  }

  const credentialsCheck = credentials.email==="" || credentials.password==="";
  console.log(emailRegex.test(credentials?.email));

  return (
      <Layout style={styles.container}>
        {/* Login Header Starts */}
        <Layout style={styles.headerContainer}>
          <Text style={styles.headingOne} category="h1">
            Welcome Back
          </Text>
          <Text style={styles.subtitle} category="c1">
            Please login to continue
          </Text>
        </Layout>
        {/* Login Header Ends */}
        
        {/* Login Inputs Section Starts */}
        <Layout style={styles.inputContainer}>
          <InputComponent 
            inputName="email"
            iconName="person-outline"
            onInputChange={(text, inputName)=> handleTextChange(text, inputName)} 
            value={credentials?.email}
            isError={credentials?.email!=="" && !emailRegex.test(credentials?.email)} 
            placeholder="Email address..." 
            errorText="Invalid email address. Valid example-abc@gmail.com"
            topMargin={32}
          />
          <InputComponent
            inputName="password" 
            iconName="lock-outline"
            onInputChange={(text, inputName)=> handleTextChange(text, inputName)}
            secureTextEntry={true} 
            value={credentials?.password} 
            isError={credentials?.password!=="" && !passRegex.test(credentials?.password)}
            placeholder="Password..." 
            errorText="Must be atleast 8 characters long, must contain atleast 1 uppercase letter, 1 lowercase letter and atleast 2 special symbols-!,@,#."
            topMargin={40}
          />
          <Text 
            category='c2' 
            style={styles.linkText}
            onPress={()=> navigation.navigate("ResetPass")}
          >
            Forgot Password? 
          </Text>
          <Button 
            disabled={credentialsCheck ? false : true}
            size='large' 
            appearance='filled'
            status='secondary'
            style={
              //[
              styles.primaryButton 
              //credentialsCheck ? { backgroundColor: theme['color-primary-200'] }
              //: { backgroundColor: theme['color-primary-500'] }
              //]
            }
            onPress={()=> {
              console.log(credentials); 
              //(emailRegex.test(credentials?.email) && passRegex.test(credentials?.password)) && 
              navigation.navigate("BottomTabs");
            }}
          > 
          {(props)=> (
            <Text 
              {...props} 
              // style={
              //   //styles.primaryBtnText,
              //   credentialsCheck ? { fontSize: 18, fontFamily: 'Inter-Bold', color: 'rgba(31, 40, 49, 0.6)', letterSpacing: 0.2 }
              //   : { fontSize: 18, fontFamily: 'Inter-Bold', letterSpacing: 0.2 }
              // }
            >LOGIN</Text>
          )}
          </Button>
          <Text style={{color: '#1F2831', textAlign: 'center'}} category="c2"> Don't have an account yet ? 
            <Text style={{color: '#1F2831'}} category="s1">  Create Account</Text> 
          </Text>
        </Layout>
        {/* Login Inputs Section Ends */}

        {/* Social Login Button Section Starts */}
          <Layout style={{marginTop: 32, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
            <Text category="label"> OR </Text>
            <Layout style={{flexDirection: 'row', alignItems: 'center', marginTop: 24, borderWidth: 0, justifyContent: 'space-between', width: width/2.4}}>
              <Button style={{borderRadius: 32, width: 64, height: 64}} onPress={()=> ToastAndroid.show("Google Login", ToastAndroid.SHORT)}>
                <Icon name="google-outline" fill={"#FF4848"} width={24} height={24}/>
              </Button>
              <Button style={{borderRadius: 32, width: 64, height: 64}}>
                <Icon name="facebook-outline" fill={theme["background-basic-color-4"]} width={24} height={24} onPress={()=> ToastAndroid.show("Facebook Login", ToastAndroid.SHORT)}/>
              </Button>
            </Layout>
          </Layout>
        {/* Social Login Button Section Ends */}

      </Layout>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerContainer: {
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: width/16,
    marginTop: height/24
  },
  headingOne: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  inputContainer: {
    width: width/1.1,
    marginHorizontal: 16,
    marginTop: 64,
  },
  inputField: {
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 4,
    //marginTop: 46,
    borderWidth: 0,
    borderRadius: 6,
  },
  errorCaption: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 4,
  },
  linkText: {
    marginTop: 8, 
    marginRight: 8, 
    textAlign: 'right', 
    justifyContent: 'flex-end',
  },
  primaryButton: {
    width: width/1.12,
    paddingVertical: 16,
    marginTop: 63, 
    marginBottom: 16, 
    borderRadius: 6,
    borderWidth: 0,
    alignSelf: 'center'
  },
  captionText: {
    textAlign: 'justify', 
    padding: 2,
  },
})