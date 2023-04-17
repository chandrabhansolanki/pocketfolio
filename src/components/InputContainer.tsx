import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

const InputContainer = props => {
  return (
    <View style={styles.formcontainer}>
      {props?.labelStatus && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={props.type}
          style={styles.inputfield}
          onFocus={() => props.onFocusHandler(false)}
          onBlur={() => props.onFocusHandler(true)}
          secureTextEntry={props.securedEntry}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          onChangeText={props.onChangeText}
          value={props.value}
        />
        {props?.IconRequired && (
          <Image source={props.image} style={styles.mailIcon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#555555',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  formcontainer: {
    // marginTop: 9,
  },
  inputfield: {
    flex: 1,
    borderWidth: 1,
    height: 50,
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderColor: 'transparent',
    borderRadius: 8,
  },
  mailIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    right: 0,
  },
});
export default InputContainer;
