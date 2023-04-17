// import {Children} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import {HeaderImage} from '../../Images/Images';

const UserPersonalDetailLayout = ({children}) => {
  return (
    // <ScrollView>

    <View style={styles.firstContainer}>
      <View style={styles.secoundContainer}></View>
      <View style={styles.thirdContainer}>{children}</View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#d7f5ed',

    // flex: 1,
    // height:'100%'
  },
  secoundContainer: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 71,
    backgroundColor: '#0E3AAA',
  },
  thirdContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // height: 800,
    backgroundColor: 'white',
    marginHorizontal: 13,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: -50,
    // paddingBottom:200,
    // marginBottom: 320
  },
});
export default UserPersonalDetailLayout;
