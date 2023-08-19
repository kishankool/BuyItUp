import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , StyleSheet} from 'react-native';
import axios from 'axios';

const OTPScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [oneTimePassword, setOneTimePassword] = useState('');

  const sendOTP = async () => {
    try {
      // Make an API call to send OTP using phoneNumber
      const {data} = await axios.post('https://otpserver-5k5n.onrender.com/api/sendOTP',{
        phoneNumber,
      });
      // Handle the API call and response
      if(data.status===true){
          setOneTimePassword(data.otp);
      }else{
        alert('failed to send OTP');
      }
      // Display success message or handle errors
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const validateOTP = async () => {
    try {
      // Make an API call to validate OTP
      if(otp === oneTimePassword){
        navigation.navigate("LocationScreen");
      }else{
        alert('Incorrect OTP');
      }
      // Handle the API response to validate the OTP
      // Display success message or handle errors
    } catch (error) {
      console.error('Error validating OTP:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffc2c2" }}>
      <TextInput
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray' }}
      />
      <TouchableOpacity onPress={sendOTP} style={styles.appButtonContainer }>
        <Text style={styles.appButtonText}>Send OTP</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOTP}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray' }}
      />
      <TouchableOpacity onPress={validateOTP} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Validate OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20 
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});