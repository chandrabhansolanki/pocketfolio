import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputContainer from '../../components/InputContainer';
import {graph} from '../../Images/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginButton from '../../components/LoginButton';
import CheckBox from 'react-native-check-box';
import * as routes from '../../Routes/routes';

const SignUp = ({navigation}) => {
  const onFocusHandler = () => {};
  const [isCheckedBox, setIsCheckedBox] = useState(false);

  const loginHandler = () => {
    navigation.navigate(routes.LOGIN);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.graphContainer}>
          <Image
            source={graph}
            style={styles.imageGraph}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>SIGN UP</Text>
          <Text style={styles.textInfo}>Create your new account with XPO</Text>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <InputContainer
              placeholder="Enter First Name"
              placeholderTextColor="#555555"
              onFocusHandler={onFocusHandler}
            />
          </View>
          <View style={styles.inputField}>
            <InputContainer
              placeholder="Enter Last Name"
              placeholderTextColor="#555555"
              onFocusHandler={onFocusHandler}
            />
          </View>
          <View>
            <InputContainer
              placeholder="Enter Mobile Number"
              placeholderTextColor="#555555"
              onFocusHandler={onFocusHandler}
            />
          </View>
          <View style={styles.inputField}>
            <InputContainer
              placeholder="Enter Email"
              placeholderTextColor="#555555"
              onFocusHandler={onFocusHandler}
            />
          </View>
          <View>
            <InputContainer
              placeholder="Your Referral Code"
              placeholderTextColor="#555555"
              onFocusHandler={onFocusHandler}
            />
          </View>
          <View style={styles.inputField}>
            <InputContainer
              placeholder="Enter Password"
              placeholderTextColor="#555555"
              onFocusHandler={onFocusHandler}
            />
          </View>
          <View style={styles.checkboxContainer}>
            {/* <View> */}
            <CheckBox
              onClick={() => {
                setIsCheckedBox(!isCheckedBox);
              }}
              isChecked={isCheckedBox}
              rightTextStyle={{
                color: '#555555',
                fontSize: 14,
                // lineHeight: 18,
                fontWeight: '400',
                // textAlign: 'center',
              }}
              rightText="I Agree To XPO (Xeno Portfolio) Website Terms Of Use & Privacy Policy."
            />
            {/* </View> */}
            {/* <Text style={styles.checkboxtext}></Text> */}
          </View>
          <LoginButton buttonName="Create Account" />
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.signIn}>Already Have an account ? </Text>
          <TouchableOpacity onPress={loginHandler}>
            <Text
              style={[
                styles.signIn,
                {textDecorationLine: 'underline', color: '#0A2977'},
              ]}>
              Sign in instead
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // marginHorizontal: 25,
  },
  graphContainer: {
    alignItems: 'center',
    // backgroundColor: "red"
  },
  imageGraph: {
    height: 118,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262D40',
    lineHeight: 21,
  },
  textInfo: {
    color: '#0046B3',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  inputContainer: {
    marginHorizontal: 25,
    marginTop: 19,
  },
  inputField: {
    marginVertical: 15,
  },

  signInContainer: {
    marginVertical: 23.51,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    color: '#555555',
    textAlign: 'center',
  },
  checkboxContainer: {
    // backgroundColor: 'red',
    height: 35,
    marginBottom: 15,
    // alignItems:"center"
  },
  checkboxtext: {
    color: 'black',
  },
});
export default SignUp;
