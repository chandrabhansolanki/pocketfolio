import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {resetImage, mailIcon} from '../../Images/Images';
import InputContainer from '../../components/InputContainer';
import LoginButton from '../../components/LoginButton';
import * as routes from '../../Routes/routes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgetPassword = ({navigation}) => {
  const onFocusHandler = () => {};

  const loginHandler = () => {
    navigation.navigate(routes.LOGIN);
    // navigation.navigate('dashboard');
    // console.log('duhbj')

    // navigation.getParent('dashboard').openDrawer();
  };
  return (
    <KeyboardAwareScrollView>
      <View>
        <View style={styles.resetImageContainer}>
          <Image
            source={resetImage}
            style={styles.resetImageStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>RESET PASSWORD</Text>
          <Text style={styles.information}>
            Enter your email address to reset your password. You will receive an
            email with instructions.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <InputContainer
            image={mailIcon}
            label="Enter your Email Address :"
            IconRequired={true}
            onFocusHandler={status => onFocusHandler(status)}
            type="email-address"
            labelStatus={true}
            placeholder="Enter Your Email"
            placeholderTextColor="#555555"
          />
        </View>
        <View style={styles.sendPasswordLink}>
          <LoginButton buttonName="Send Password Link" />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>Remember your Password?</Text>
          <TouchableOpacity onPress={loginHandler}>
            <Text style={styles.loginLink}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 25,
    marginTop: 46,
  },

  resetImageContainer: {
    alignItems: 'center',
    marginVertical: 58,
  },
  resetImageStyle: {
    height: 296,
    width: 309,
  },
  container: {
    // alignItems: 'center',
    marginTop: 11,
    // marginHorizontal: 25,
  },
  title: {
    height: 21,
    fontSize: 18,
    fontWeight: '700',
    color: '#262D40',
    lineHeight: 21,
    textAlign: 'center',
  },
  information: {
    fontSize: 12,
    color: '#0046B3BF',
    lineHeight: 18,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  sendPasswordLink: {
    marginHorizontal: 25,
    marginVertical: 24,
  },
  bottomContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  text: {
    color: '#555555',
  },
  loginLink: {
    color: '#0A2977',
    textDecorationLine: 'underline',
  },
});

export default ForgetPassword;
