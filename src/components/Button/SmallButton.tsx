import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SmallButton = props => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {width: props.width}]}>
      <View style={{}}>
        <Text style={styles.buttonText}>{props?.buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 36,
    backgroundColor: '#0E3AAA',
    borderRadius: 8,
    // width: props?.width,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
export default SmallButton;
