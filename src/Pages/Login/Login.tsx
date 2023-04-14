import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {LoginPageImage} from '../../Images/Images';
import InputContainer from '../../components/InputContainer';
import {mailIcon, passwordIcon} from '../../Images/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignUpButton from '../../components/SignUpButton';
import * as routes from '../../Routes/routes';
import LoginButton from '../../components/LoginButton';

const Login = ({navigation}) => {
  const [onFocusStatus, setOnFocusStatus] = useState(true);

  const onFocusHandler = status => {
    setOnFocusStatus(status);
    Keyboard.addListener('keyboardDidHide', () => setOnFocusStatus(true));
    Keyboard.addListener('keyboardDidShow', () => setOnFocusStatus(false));
  };

  const signUpHandler = () => {
    navigation.navigate(routes.SIGNUP);
  };

  const loginHandler = () => {
    // navigation.navigate(routes.HOME);
    navigation.navigate('dashboard');
  };

  const forgetPasswordHandler = () => {
    navigation.navigate(routes.FORGETPASSWORD);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imagecontainer}>
          <Image source={LoginPageImage} style={styles.image} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>WELCOME TO XPO</Text>
          <Text style={styles.information}>Login To Continue</Text>
        </View>
        <InputContainer
          image={mailIcon}
          label="Email Id :"
          IconRequired={true}
          onFocusHandler={status => onFocusHandler(status)}
          type="email-address"
          labelStatus={true}
          placeholder="Enter Your Email"
          placeholderTextColor="#555555"
        />
        <InputContainer
          image={passwordIcon}
          label="Password :"
          IconRequired={true}
          onFocusHandler={status => onFocusHandler(status)}
          securedEntry={true}
          labelStatus={true}
          placeholder="Enter Your Password"
          placeholderTextColor="#555555"
        />
        <View style={styles.buttonContainer}>
          {/* <LoginButton buttonName="Login" loginHandler={loginHandler} /> */}
          <LoginButton buttonName="Login Now" loginHandler={loginHandler} />
        </View>
        <TouchableOpacity
          onPress={() => forgetPasswordHandler()}
          style={styles.forgetpasswordcontainer}>
          <View>
            <Text style={styles.forgetpassword}>Forgot password?</Text>
          </View>
        </TouchableOpacity>
        {onFocusStatus && (
          <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.linestyle}></View>
              <View style={{width: '16%'}}>
                <Text style={styles.lineText}>OR</Text>
              </View>
              <View style={styles.linestyle}></View>
            </View>
            <Text style={styles.createAccountText}>Create An Account</Text>

            <View style={styles.signupButton}>
              <SignUpButton signUpHandler={signUpHandler} />
            </View>
          </>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 25,
  },

  forgetpasswordcontainer: {
    // marginHorizontal: 25,
    // backgroundColor: 'red',
    marginVertical: 8,
  },
  forgetpassword: {
    color: '#262D40',
    fontSize: 14,
    lineHeight: 21,
    textDecorationLine: 'underline',
    fontWeight: '400',
    textAlign: 'right',
    // justifyContent:"flex-end"
  },

  imagecontainer: {
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 270,
  },
  container: {
    alignItems: 'center',
    marginTop: 12,
  },
  title: {
    height: 21,
    fontSize: 18,
    fontWeight: '700',
    color: '#262D40',
    lineHeight: 21,
  },
  information: {
    // height: 18,
    fontSize: 12,
    color: '#0046B3BF',
    lineHeight: 18,
  },
  buttonContainer: {
    // marginHorizontal: 25,
    marginTop: 29,
  },
  linestyle: {
    backgroundColor: '#C2C2C2',
    width: '42%',
    height: 1,
  },
  lineText: {
    color: '#C2C2C2',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
  },
  createAccountText: {
    color: '#555555',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  signupButton: {
    marginVertical: 10,
  },
});

export default Login;
