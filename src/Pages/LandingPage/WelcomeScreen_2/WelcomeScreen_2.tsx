import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import CommontText from '../../../components/CommonText';
import {Screen_2} from '../../../Images/Images';

const WelcomeScreen_2 = () => {
  return (
    <View style={styles.slide1}>
      <ImageBackground style={styles.image} source={Screen_2}>
        <CommontText
          title="Data Search"
          subtitle=" In Finance and Trading XPO, Lorem ipsum is A Placeholder Text
              Commonly. Lorem ipsum is A Placeholder Text Commonly"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
  },
});

export default WelcomeScreen_2;
