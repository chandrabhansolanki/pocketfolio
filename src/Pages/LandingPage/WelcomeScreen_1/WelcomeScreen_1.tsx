import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import CommontText from '../../../components/CommonText';
import {Screen_1} from '../../../Images/Images';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen_1 = () => {
  return (
    // <View style={styles.slide1}>
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground style={styles.image} source={Screen_1}>
        <View style={styles.slide1}>
          <CommontText
            title="Data Search"
            subtitle=" In Finance and Trading XPO, Lorem ipsum is A Placeholder Text
          Commonly. Lorem ipsum is A Placeholder Text Commonly"
          />
        </View>
        {/* <TouchableOpacity>
        <View style={styles.arrowContainer}>
        <Image source={LandingArrow} style={styles.arrowImage} />
        </View>
      </TouchableOpacity> */}
      </ImageBackground>
    </SafeAreaView>
    // </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // position:"absolute"
  },
  arrowImage: {
    width: 24,
    height: 10,
  },
  arrowContainer: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  // arrowImage: {
  //   // color: 'red',
  //   // backgroundColor: 'orange',
  //   width: 24,
  //   height:10
  // },
  // arrowContainer: {
  //   // backgroundColor: 'red',
  //   // zIndex:12,
  //   // width: 24,
  //   // position: 'relative',
  //   // down:12
  // },
});

export default WelcomeScreen_1;
