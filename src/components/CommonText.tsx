import {View, Text, StyleSheet} from 'react-native';

const CommontText = props => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
};

export default CommontText;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '77%',
    marginTop: 140,
  },
  title: {
    color: '#0A2977',
    fontSize: 26,
    fontWeight: 800,
    marginBottom: 12,
  },
  subtitle: {
    color: '#262D40B2',
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
});
