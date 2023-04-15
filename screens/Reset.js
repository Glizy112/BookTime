import { StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import {
    Button,
    Icon,
    Input,
    Layout,
    Text,
    useTheme,
  } from '@ui-kitten/components';
import { InputComponent } from './Login';
import { emailRegex, passRegex } from '../utils/regex';

const { width, height } = Dimensions.get("screen");

const Reset = () => {

  const theme = useTheme();

  const[verificationEmail, setVerificationEmail] = useState("");

  const handleInputChange =(text)=> {
    setVerificationEmail(text);
  }

  return (
    <>
      <Layout style={styles.container}>
        <Text style={styles.headerContainer} category="h1">Reset Password</Text>
        <Layout style={{width: width/1.03, paddingLeft: 16, marginTop: 20, borderWidth: 0}}>
            {/* <Text style={{paddingBottom: 12, paddingHorizontal: 8}} category="s2">Confirm your email address</Text> */}
            <InputComponent  
                inputName="email"
                onInputChange={(text)=> handleInputChange(text)} 
                value={verificationEmail}
                //isError={verificationEmail==="" ? true : false} 
                placeholder="Confirm your email address" 
                errorText="Email not registered. Check your email again."
            />
            <Button 
                disabled={verificationEmail==="" ? true : false}
                size='large' 
                style={[
                    styles.primaryButton, 
                    verificationEmail==="" ? { backgroundColor: theme['color-primary-100'] } : { backgroundColor: theme['color-primary-500'] }
                ]}
                onPress={()=> {console.log(credentials); navigation.navigate("Home");}}
            > 
            {(props)=> (
                <Text {...props} style={{fontSize: 14, fontFamily: 'Inter-SemiBold'}}>Send verification OTP</Text>
            )}
          </Button>
        </Layout>
      </Layout>
    </>
  )
}

export default Reset

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
        marginTop: height/24,
    },
    primaryButton: {
        width: width/1.1,
        paddingVertical: 16,
        marginTop: 24, 
        marginBottom: 16, 
        borderRadius: 6,
        borderWidth: 0,
        alignSelf: 'center',
    },
})