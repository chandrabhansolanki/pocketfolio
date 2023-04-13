import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const SignUpButton = (props) => {
  return (
    <TouchableOpacity style={{width: '100%'}} onPress={props.signUpHandler}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderColor: '#0A2977',
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonText: {
    color: '#0A2977',
    // borderColor:"#0A2977",
    // borderWidth:1,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default SignUpButton;
