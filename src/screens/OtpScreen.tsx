import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RouteName from '../config/RouteConfig';

interface OtpScreenProps {
  route: any;
  navigation: any;
}

const OtpScreen: React.FC<OtpScreenProps> = ({ route, navigation }) => {
  const { phoneNumber } = route.params || { phoneNumber: '9876543210' };

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleContinue = () => {
    // const enteredOtp = otp.join('');
    // console.log('OTP Entered:', enteredOtp);
    navigation.navigate(RouteName.BOTTOM_NAVIGATION);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.phoneText}>Your phone number {phoneNumber}</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  phoneText: {
    fontSize: 18,
    marginBottom: 30,
    color: '#333',
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    width: 55,
    height: 55,
  },
  button: {
    backgroundColor: '#7833B2', // your secondary color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
