import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const LoginButton = (props) => {
  return (
    <TouchableOpacity style={{width: '100%'}} onPress={props.loginHandler} >
      <View style={styles.container}>
        <Text style={styles.buttonText}>{props.buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E3AAA',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 8,
    // position: 'relative',
    // top: 112,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 16.15,
  },
});

export default LoginButton;
