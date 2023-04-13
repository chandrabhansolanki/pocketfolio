import {
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {splashScreen} from '../../Images/Images';
import LoginButton from '../../components/LoginButton';
import SignUpButton from '../../components/SignUpButton';
import * as routes from '../../Routes/routes';

const SplashScreen = ({navigation}) => {
  const loginHandler = () => {
    navigation.navigate(routes.LOGIN);
  };

  const signUpHandler = () => {
    navigation.navigate(routes.SIGNUP);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        alt="splash"
        source={splashScreen}
        style={styles.imagebackground}>
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME TO XPO</Text>
          <Text style={styles.information}>
            One Step Solution For All Investments
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <LoginButton buttonName="Login Now" loginHandler={loginHandler} />
        </View>
        <View style={styles.signupButton}>
          <SignUpButton signUpHandler={signUpHandler} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
    // justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    marginTop: 347,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262D40',
    lineHeight: 21,
  },
  information: {
    fontSize: 12,
    color: '#0046B3BF',
    lineHeight: 18,
  },
  buttonContainer: {
    marginHorizontal: 25,
    marginTop: 84,
  },
  signupButton: {
    marginHorizontal: 25,
    marginTop: 26.51,
  },
});

export default SplashScreen;
