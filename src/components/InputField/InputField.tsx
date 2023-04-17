import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputField = props => {
  return (
    <View style={styles.inputFieldContainer}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput style={styles.inputFieldStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputFieldContainer: {
    marginBottom: 16,
  },
  labelStyle: {
    color: '#555555',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    marginBottom: 3,
  },
  inputFieldStyle: {
    borderWidth: 1,
    height: 34,
    borderColor: '#E4E4E4',
    color: '#555555',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
});
export default InputField;
