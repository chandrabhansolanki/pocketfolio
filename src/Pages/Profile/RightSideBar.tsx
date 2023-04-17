import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import {} from 'react-native-gesture-handler';
import {
  transaction,
  dashboard,
  payment,
  derivative,
  crypto,
  compare,
  genelogy,
  Bonus,
  Portfolio
} from '../../Images/Images';

const data = [
  {
    id: 1,
    title: 'Dashboard',
    icon: dashboard,
    height: 18,
    width: 18,
  },
  {
    id: 2,
    title: 'Crypto Index',
    icon: crypto,
    height: 24,
    width: 24,
  },
  {
    id: 3,
    title: 'Derivative Index',
    icon: derivative,
    height: 24,
    width: 24,
  },
  {
    id: 4,
    title: 'Transaction',
    icon: transaction,
    height: 24,
    width: 24,
  },
  {
    id: 5,
    title: 'Payments',
    icon: payment,
    height: 24,
    width: 24,
  },
  {
    id: 6,
    title: 'Portfolio',
    icon: Portfolio,
    height: 24,
    width: 24,
  },
  {
    id: 7,
    title: 'Compare',
    icon: compare,
    height: 24,
    width: 24,
  },
  {
    id: 8,
    title: 'Genelogy',
    icon: genelogy,
    height: 24,
    width: 24,
  },
  {
    id: 9,
    title: 'Bonus',
    icon: Bonus,
    height: 24,
    width: 24,
  },
];
const RightSideBar = () => {
  return (
    <View style={styles.mainContainer}>
      {data.map(item => {
        return (
          <TouchableOpacity style={styles.container}>
            <Image
              source={item.icon}
              style={{height: item.height, width: item.width}}
            />
            <Text style={styles.menuStyle}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 17,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 28,
    marginHorizontal: 16,
  },
  menuStyle: {
    color: '#0E3AAA',
    fontSize: 14,
    fontWeight: '400',
    marginLeft:13,
  },
});
export default RightSideBar;
